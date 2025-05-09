import { memo, useCallback, useEffect, useState } from "react";
import ConfirmDialog from "../../shared/confirmDialog";
import Dropdown from "../../shared/dropdown";
import { getSettings } from "./settings";

const db = new Dexie("findDupeTracks");
db.version(1).stores({
  tracks: "&trackUri, trackName, albumUri, playCount, isrc",
});

async function fetchOwnedPlaylists(limit = 100) {
  const initialRes = await Spicetify.Platform.LibraryAPI.getContents({ offset: 0, limit });
  let playlists = initialRes.items.filter((item) => item.type === "playlist" && item.isOwnedBySelf);
  const total = initialRes.totalLength;

  if (total > limit) {
    const numBatches = Math.ceil((total - limit) / limit);
    const offsets = Array.from({ length: numBatches }, (_, i) => limit * (i + 1));
    const responses = await Promise.all(
      offsets.map((offset) => Spicetify.Platform.LibraryAPI.getContents({ offset, limit })),
    );
    for (const batch of responses) {
      playlists = playlists.concat(
        batch.items.filter((item) => item.type === "playlist" && item.isOwnedBySelf),
      );
    }
  }
  return playlists;
}

async function fetchAllPlaylistTracks(playlistUri, limit = 5000) {
  const initialRes = await Spicetify.Platform.PlaylistAPI.getContents(playlistUri, {
    offset: 0,
    limit,
  });
  let items = initialRes.items;
  const totalLength = initialRes.totalLength;

  if (totalLength > limit) {
    const numBatches = Math.ceil((totalLength - limit) / limit);
    const offsets = Array.from({ length: numBatches }, (_, i) => limit * (i + 1));
    const results = await Promise.all(
      offsets.map((offset) =>
        Spicetify.Platform.PlaylistAPI.getContents(playlistUri, { offset, limit }).then(
          (res) => res.items,
        ),
      ),
    );
    items = items.concat(results.flat());
  }

  const trackUris = items.map((track) => track.uri);
  const existingTracks = await db.tracks.bulkGet(trackUris);
  const existingTracksMap = new Map(existingTracks.filter(Boolean).map((t) => [t.trackUri, t]));

  const tracksToPut = items.map((item) => {
    const existing = existingTracksMap.get(item.uri);
    return {
      trackUri: item.uri,
      trackName: item.name,
      albumUri: item.album.uri,
      playCount: existing?.playCount ?? null,
      isrc: existing?.isrc ?? null,
    };
  });

  await db.tracks.bulkPut(tracksToPut);

  return { items, totalLength };
}

async function fetchISRCsForTracks(trackUris) {
  const isrcMap = new Map();
  const existingTracksData = await db.tracks.bulkGet(trackUris);
  const urisToFetch = [];

  existingTracksData.forEach((trackData, index) => {
    const trackUri = trackUris[index];
    if (trackData?.isrc) {
      isrcMap.set(trackUri, trackData.isrc);
    } else {
      urisToFetch.push(trackUri);
    }
  });

  const bulkUpdateOps = [];
  if (urisToFetch.length > 0) {
    const trackIds = urisToFetch.map((uri) => Spicetify.URI.fromString(uri).id);
    const batchSize = 50; // Split into 50 chunks as thats is max spotify allows
    const batchPromises = [];
    for (let i = 0; i < trackIds.length; i += batchSize) {
      const batchIds = trackIds.slice(i, i + batchSize);
      const url = `https://api.spotify.com/v1/tracks?ids=${batchIds.join(",")}`;
      batchPromises.push(Spicetify.CosmosAsync.get(url));
    }
    const results = await Promise.all(batchPromises);
    for (const result of results) {
      for (const track of result.tracks) {
        const isrc = track?.external_ids?.isrc;
        const trackUri = track?.uri;
        if (isrc && trackUri) {
          isrcMap.set(trackUri, isrc);
          bulkUpdateOps.push({ key: trackUri, changes: { isrc: isrc } });
        }
      }
    }
  }

  if (bulkUpdateOps.length > 0) {
    await db.tracks.bulkUpdate(bulkUpdateOps);
  }

  return isrcMap;
}

async function fetchPlayCountsForTracks(tracks) {
  const playCountMap = new Map();
  const trackUris = tracks.map((t) => t.uri);
  const existingTracksData = await db.tracks.bulkGet(trackUris);
  const urisAndAlbumsToFetch = new Map();
  const existingTracksMap = new Map();

  for (const dbData of existingTracksData) {
    const trackUri = dbData.trackUri;
    existingTracksMap.set(trackUri, dbData);

    if (dbData.playCount != null) {
      playCountMap.set(trackUri, dbData.playCount);
    } else {
      const originalTrack = tracks.find((t) => t.uri === trackUri);
      if (originalTrack?.album?.uri) {
        playCountMap.set(trackUri, null);
        urisAndAlbumsToFetch.set(trackUri, originalTrack.album.uri);
      }
    }
  }

  const bulkUpdateOps = [];
  if (urisAndAlbumsToFetch.size > 0) {
    const fetchesByAlbum = new Map();
    urisAndAlbumsToFetch.forEach((albumUri, trackUri) => {
      fetchesByAlbum.set(albumUri, fetchesByAlbum.get(albumUri) || new Set());
      fetchesByAlbum.get(albumUri).add(trackUri);
    });

    const albumFetchPromises = Array.from(fetchesByAlbum.entries()).map(
      async ([albumUri, trackUrisToUpdate]) => {
        const response = await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
          uri: albumUri,
          locale: Spicetify.Locale.getLocale(),
          offset: 0,
          limit: 5000,
        });
        const albumTracksData = response?.data?.albumUnion?.tracksV2?.items;
        if (albumTracksData) {
          for (const item of albumTracksData) {
            const trackUri = item?.track?.uri;
            if (trackUrisToUpdate.has(trackUri)) {
              const countStr = item.track.playcount;
              const playCountValue = countStr ? Number.parseInt(countStr, 10) : 0;
              playCountMap.set(trackUri, playCountValue);
              bulkUpdateOps.push({ key: trackUri, changes: { playCount: playCountValue } });
            }
          }
        }
      },
    );

    await Promise.all(albumFetchPromises);
  }

  if (bulkUpdateOps.length > 0) {
    await db.tracks.bulkUpdate(bulkUpdateOps);
  }

  return playCountMap;
}

const getNumericPlayCount = (trackUri, playCounts) => playCounts.get(trackUri) ?? 0;

const normalizeForSimilarity = (name) => {
  const settings = getSettings();
  const termsToRemove = [...settings.defaultNormalizeWords, ...settings.customNormalizeWords];
  const termsPattern = termsToRemove.join("|");
  const regexRemoveTerms = new RegExp(`\\b(${termsPattern})\\b`, "gi");
  return name
    .toLowerCase()
    .replace(/\(.*?\)|\[.*?\]/g, "")
    .replace(regexRemoveTerms, "")
    .replace(/-/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
};

function PlaylistDuplicateFinder({ selectedPlaylist: initialSelectedPlaylist }) {
  const [ownedPlaylists, setOwnedPlaylists] = useState([]);
  const [selectedPlaylistUri, setSelectedPlaylistUri] = useState(
    initialSelectedPlaylist?.uri || "",
  );
  const [selectedPlaylist, setSelectedPlaylist] = useState(initialSelectedPlaylist || null);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playCounts, setPlayCounts] = useState(new Map());
  const [isrcs, setIsrcs] = useState(new Map());
  const [duplicateGroups, setDuplicateGroups] = useState({
    exact: [],
    isrc: [],
    likely: [],
    possible: [],
  });

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const playlists = await fetchOwnedPlaylists();
      if (!isMounted) return;
      setOwnedPlaylists(playlists);

      const initialUri = initialSelectedPlaylist?.uri || playlists[0]?.uri || "";
      setSelectedPlaylistUri(initialUri);
      setSelectedPlaylist(
        initialSelectedPlaylist || playlists.find((p) => p.uri === initialUri) || null,
      );
    })();
    return () => {
      isMounted = false;
    };
  }, [initialSelectedPlaylist]);

  const handlePlaylistChange = (e) => {
    const newUri = e.target.value;
    setSelectedPlaylistUri(newUri);

    const newPlaylist = ownedPlaylists.find((p) => p.uri === newUri);
    if (newPlaylist) {
      setSelectedPlaylist(newPlaylist);
    }
  };

  const findPotentialDuplicates = useCallback((tracks, playCountMap, isrcMap) => {
    const processedUris = new Set();
    const groupAndFilter = (list, keyFn, normalizer) => {
      const groups = new Map();

      for (const t of list) {
        if (processedUris.has(t.uri)) {
          continue;
        }
        const key = normalizer(keyFn(t));
        if (!key) continue;

        groups.set(key, groups.get(key) || []);
        groups.get(key).push(t);
      }
      const duplicatesResult = [];

      for (const group of groups.values()) {
        if (group.length > 1) {
          group.sort(
            (a, b) =>
              getNumericPlayCount(b.uri, playCountMap) - getNumericPlayCount(a.uri, playCountMap),
          );

          for (const t of group) {
            processedUris.add(t.uri);
          }
          duplicatesResult.push({ mainTrack: group[0], duplicates: group.slice(1) });
        }
      }
      return duplicatesResult;
    };

    const exactDuplicates = groupAndFilter(
      tracks,
      (t) => t.uri,
      (k) => k,
    );

    const isrcDuplicates = groupAndFilter(
      tracks,
      (t) => isrcMap.get(t.uri),
      (k) => k,
    );

    const likelyDuplicates = groupAndFilter(
      tracks,
      (t) => t.name,
      (name) => name.trim(),
    );

    const possibleDuplicates = groupAndFilter(tracks, (t) => t.name, normalizeForSimilarity);

    setDuplicateGroups({
      exact: exactDuplicates,
      isrc: isrcDuplicates,
      likely: likelyDuplicates,
      possible: possibleDuplicates,
    });
  }, []);

  const removeTrackFromPlaylist = async (trackToRemove, duplicateCategory, groupIndex) => {
    await Spicetify.Platform.PlaylistAPI.remove(selectedPlaylistUri, [{ uid: trackToRemove.uid }]);

    setDuplicateGroups((prevGroups) => {
      const categoryGroups = prevGroups[duplicateCategory];
      const group = categoryGroups[groupIndex];
      const updatedDuplicates = group.duplicates.filter(
        (dup) => !(dup.uri === trackToRemove.uri && dup.uid === trackToRemove.uid),
      );
      const updatedGroup = { ...group, duplicates: updatedDuplicates };

      const newCategoryGroups = [...categoryGroups];
      if (updatedGroup.duplicates.length > 0) {
        newCategoryGroups[groupIndex] = updatedGroup;
      } else {
        newCategoryGroups.splice(groupIndex, 1);
      }

      return {
        ...prevGroups,
        [duplicateCategory]: newCategoryGroups,
      };
    });

    setPlaylistTracks((prevTracks) =>
      prevTracks.filter(
        (track) => !(track.uri === trackToRemove.uri && track.uid === trackToRemove.uid),
      ),
    );
  };

  const handleDeleteTrack = async (duplicateCategory, groupIndex, trackToRemove) => {
    const settings = getSettings();
    const shouldConfirm = settings.confirmSettings[duplicateCategory];

    if (!shouldConfirm) {
      await removeTrackFromPlaylist(trackToRemove, duplicateCategory, groupIndex);
      return;
    }

    ConfirmDialog({
      titleText: "Remove Track",
      descriptionText: `Are you sure you want to remove "${trackToRemove.name}"? This cannot be undone.`,
      confirmText: "Remove",
      onConfirm: () => removeTrackFromPlaylist(trackToRemove, duplicateCategory, groupIndex),
    });
  };

  useEffect(() => {
    const initialGroupsState = { exact: [], isrc: [], likely: [], possible: [] };
    setPlaylistTracks([]);
    setDuplicateGroups(initialGroupsState);
    setPlayCounts(new Map());
    setIsrcs(new Map());

    const loadData = async () => {
      const playlistData = await fetchAllPlaylistTracks(selectedPlaylistUri);
      const fetchedTracks = playlistData.items;
      setPlaylistTracks(fetchedTracks);

      if (fetchedTracks.length > 0) {
        const trackUris = fetchedTracks.map((t) => t.uri);
        const [fetchedPlayCountsResult, fetchedIsrcMapResult] = await Promise.all([
          fetchPlayCountsForTracks(fetchedTracks),
          fetchISRCsForTracks(trackUris),
        ]);

        setPlayCounts(fetchedPlayCountsResult);
        setIsrcs(fetchedIsrcMapResult);
        findPotentialDuplicates(fetchedTracks, fetchedPlayCountsResult, fetchedIsrcMapResult);
      }
    };

    loadData();
  }, [selectedPlaylistUri, findPotentialDuplicates]);

  const TrackDetails = memo(({ track }) => {
    const playCount = playCounts.get(track.uri);
    const displayCount = playCount != null ? playCount.toLocaleString() : "N/A";
    const trackIsrc = isrcs.get(track.uri) || "N/A";
    const albumName = track.album?.name || "N/A";
    const artists = track.artists?.map((a) => a.name).join(", ") || "N/A";

    return (
      <div className="dupe-group__details">
        <div className="dupe-group__line">
          <span className="dupe-group__artists"> Artists: {artists}</span>
          <span className="dupe-group__album"> Album: {albumName}</span>
        </div>
        <div className="dupe-group__line">
          <span className="dupe-group__playcount"> Plays: {displayCount}</span>
          <span className="dupe-group__isrc"> ISRC: {trackIsrc}</span>
        </div>
      </div>
    );
  });

  const renderDuplicateGroupList = (groupTitle, groups, duplicateCategory) => {
    const settings = getSettings();
    if (!settings.groupSettings[duplicateCategory]) {
      return null;
    }

    return (
      <div className="dupe-group">
        <p className="dupe-group__heading">
          <div className="dupe-group__heading-title">{groupTitle}</div>
          <div className="dupe-group__heading-length">{groups.length} found</div>
        </p>
        {groups.length > 0 ? (
          <div className="dupe-group__list">
            {groups.map((duplicateGroup, groupIndex) => (
              <div
                key={`${duplicateGroup.mainTrack.uri}-${
                  duplicateGroup.mainTrack.uid || groupIndex
                }`}
                className={`dupe-group__item dupe-group__item--${duplicateCategory}`}
              >
                <div className="dupe-group__source">
                  Source: {duplicateGroup.mainTrack.name}
                  <TrackDetails track={duplicateGroup.mainTrack} />
                </div>
                <div className="dupe-group__duplicates-label">Duplicates:</div>
                <div className="dupe-group__duplicates-list">
                  {duplicateGroup.duplicates.map((dup) => (
                    <div
                      key={`${dup.uri}-${dup.uid || dup.uri}`}
                      className="dupe-group__duplicate-item"
                    >
                      <div className="dupe-group__duplicate-content">
                        <span className="dupe-group__duplicate-name">{dup.name}</span>
                        <TrackDetails track={dup} />
                      </div>
                      <button
                        className="dupe-group__delete-button"
                        onClick={() => handleDeleteTrack(duplicateCategory, groupIndex, dup)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No duplicates found in this category.</p>
        )}
      </div>
    );
  };

  const selectedPlaylistName = selectedPlaylist ? selectedPlaylist.name : "Select a playlist";
  const playlistOptions = ownedPlaylists.map((p) => ({ value: p.uri, label: p.name }));

  return (
    <div className="find-dupes">
      <div className="find-dupes__header">
        <span className="find-dupes__header-label">Select Playlist:</span>
        <Dropdown
          value={selectedPlaylistUri}
          options={playlistOptions}
          onChange={handlePlaylistChange}
          disabled={ownedPlaylists.length === 0}
        />
      </div>

      {selectedPlaylistUri && (
        <>
          <p className="find-dupes__details">
            Playlist: {selectedPlaylistName} ({playlistTracks.length} tracks analyzed)
          </p>
          <>
            {renderDuplicateGroupList(
              "Exact Duplicates (Same URI)",
              duplicateGroups.exact,
              "exact",
            )}
            {renderDuplicateGroupList(
              "ISRC Duplicates (Same Recording)",
              duplicateGroups.isrc,
              "isrc",
            )}
            {renderDuplicateGroupList(
              "Likely Duplicates (Same Name)",
              duplicateGroups.likely,
              "likely",
            )}
            {renderDuplicateGroupList(
              "Possible Duplicates (Similar Name)",
              duplicateGroups.possible,
              "possible",
            )}
          </>
        </>
      )}
    </div>
  );
}

export default PlaylistDuplicateFinder;
