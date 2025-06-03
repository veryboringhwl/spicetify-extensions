import Dexie from "https://esm.sh/dexie";
import { memo, useCallback, useEffect, useState } from "react";
import fetchAllLibraryContents from "../../../shared/api/fetchAllLibraryContents";
import fetchAllPlaylistTracks from "../../../shared/api/fetchAllPlaylistTracks";
import fetchISRCsForTracks from "../../../shared/api/fetchISRCsForTracks";
import fetchPlayCountsForTracks from "../../../shared/api/fetchPlayCountsForTracks";
import ConfirmDialog from "../../../shared/components/confirmDialog";
import Dropdown from "../../../shared/components/dropdown";
import { getSettings } from "./settings";

const db = new Dexie("findDupeTracks");
//dexie multiplies version by 10?
db.version(0.1).stores({
  tracks: "&trackUri, trackName, albumUri, playCount, isrc",
});

async function fetchEditablePlaylists() {
  const playlists = await fetchAllLibraryContents();
  return playlists.filter((item) => item.type === "playlist" && item.canAddTo);
}

async function fetchPlaylistTracksAndCache(playlistUri) {
  const { items, totalLength } = await fetchAllPlaylistTracks(playlistUri);

  const trackUris = items.map((track) => track.uri);
  const existingTracks = await db.tracks.bulkGet(trackUris);
  const existingTracksMap = new Map(existingTracks.filter(Boolean).map((t) => [t.trackUri, t]));

  const tracksToPut = items.reduce((acc, item) => {
    const existing = existingTracksMap.get(item.uri);
    if (!existing || existing.trackName !== item.name || existing.albumUri !== item.album.uri) {
      acc.push({
        trackUri: item.uri,
        trackName: item.name,
        albumUri: item.album.uri,
        playCount: existing?.playCount ?? null,
        isrc: existing?.isrc ?? null,
      });
    }
    return acc;
  }, []);

  if (tracksToPut.length > 0) {
    await db.tracks.bulkPut(tracksToPut);
  }

  return { items, totalLength };
}

async function fetchISRCsForTracksWithCache(tracks) {
  const isrcMap = new Map();
  const tracksToFetch = [];
  const validTracks = tracks.filter((track) => track?.uri);
  const trackUris = validTracks.map((track) => track.uri);

  if (trackUris.length === 0) return isrcMap;

  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map(cachedTracksData.filter(Boolean).map((t) => [t.trackUri, t]));

  for (const track of validTracks) {
    const cachedTrack = cachedTracksMap.get(track.uri);
    if (cachedTrack?.isrc) {
      isrcMap.set(track.uri, cachedTrack.isrc);
    } else {
      tracksToFetch.push(track);
    }
  }

  if (tracksToFetch.length > 0) {
    const fetchedIsrcMapFromAPI = await fetchISRCsForTracks(tracksToFetch);
    const updatesForDb = [];

    for (const [trackUri, isrc] of fetchedIsrcMapFromAPI.entries()) {
      isrcMap.set(trackUri, isrc);
      updatesForDb.push({ key: trackUri, changes: { isrc } });
    }

    if (updatesForDb.length > 0) {
      await db.tracks.bulkUpdate(updatesForDb);
    }
  }
  return isrcMap;
}

async function fetchPlayCountsForTracksWithCache(tracks) {
  const playCountMap = new Map();
  const tracksToFetch = [];
  const validTracks = tracks.filter((track) => track?.uri);
  const trackUris = validTracks.map((track) => track.uri);

  if (trackUris.length === 0) return playCountMap;

  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map(cachedTracksData.filter(Boolean).map((t) => [t.trackUri, t]));

  for (const track of validTracks) {
    const cachedTrack = cachedTracksMap.get(track.uri);
    if (cachedTrack?.playCount != null) {
      playCountMap.set(track.uri, cachedTrack.playCount);
    } else {
      tracksToFetch.push(track);
    }
  }

  if (tracksToFetch.length > 0) {
    const fetchedPlayCountsFromAPI = await fetchPlayCountsForTracks(tracksToFetch);
    const updatesForDb = [];

    for (const [trackUri, playCount] of fetchedPlayCountsFromAPI.entries()) {
      playCountMap.set(trackUri, playCount);
      updatesForDb.push({ key: trackUri, changes: { playCount } });
    }

    if (updatesForDb.length > 0) {
      await db.tracks.bulkUpdate(updatesForDb);
    }
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
      const playlists = await fetchEditablePlaylists();
      if (!isMounted) return;
      setOwnedPlaylists(playlists);

      const initialPlaylist = initialSelectedPlaylist || playlists[0] || null;
      setSelectedPlaylist(initialPlaylist);
    })();
    return () => {
      isMounted = false;
    };
  }, [initialSelectedPlaylist]);

  const handlePlaylistChange = (e) => {
    const newUri = e.target.value;
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
    await Spicetify.Platform.PlaylistAPI.remove(selectedPlaylist.uri, [{ uid: trackToRemove.uid }]);

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
      if (!selectedPlaylist?.uri) return;

      const playlistData = await fetchPlaylistTracksAndCache(selectedPlaylist.uri);
      const fetchedTracks = playlistData.items;
      setPlaylistTracks(fetchedTracks);

      if (fetchedTracks.length > 0) {
        const [fetchedPlayCountsResult, fetchedIsrcMapResult] = await Promise.all([
          fetchPlayCountsForTracksWithCache(fetchedTracks),
          fetchISRCsForTracksWithCache(fetchedTracks),
        ]);

        setPlayCounts(fetchedPlayCountsResult);
        setIsrcs(fetchedIsrcMapResult);

        findPotentialDuplicates(fetchedTracks, fetchedPlayCountsResult, fetchedIsrcMapResult);
      }
    };

    loadData();
  }, [selectedPlaylist, findPotentialDuplicates]);

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
                key={`${duplicateGroup.mainTrack.uri}-${duplicateGroup.mainTrack.uid || groupIndex}`}
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
          value={selectedPlaylist?.uri || ""}
          options={playlistOptions}
          onChange={handlePlaylistChange}
          disabled={ownedPlaylists.length === 0}
        />
      </div>

      {selectedPlaylist && (
        <>
          <p className="find-dupes__details">
            Playlist: {selectedPlaylist.name} ({playlistTracks.length} tracks analyzed)
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
