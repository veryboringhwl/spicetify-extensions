import { useEffect, useState } from "react";
import ConfirmDialog from "../../shared/confirmDialog";
import Dropdown from "../../shared/dropdown";

async function fetchOwnedPlaylists(offset = 0, limit = 50, playlists = []) {
  const res = await Spicetify.Platform.LibraryAPI.getContents({ offset, limit });
  const ownedPlaylistsInBatch = res.items.filter(
    (item) => item?.type === "playlist" && item?.isOwnedBySelf,
  );
  playlists.push(...ownedPlaylistsInBatch);

  if (res.items.length === limit && res.totalLength > offset + limit) {
    return fetchOwnedPlaylists(offset + limit, limit, playlists);
  }

  return playlists;
}

async function fetchAllPlaylistTracks(playlistUri, offset = 0, limit = 100, accumulatedItems = []) {
  const response = await Spicetify.Platform.PlaylistAPI.getContents(playlistUri, { offset, limit });
  const items = response.items;
  const allItems = accumulatedItems.concat(items);
  if (items.length === limit && response.totalLength > offset + limit) {
    return fetchAllPlaylistTracks(playlistUri, offset + limit, limit, allItems);
  }
  return { items: allItems, totalLength: allItems.length };
}

async function fetchISRCsForTracks(trackUris) {
  const isrcMap = new Map();
  const trackIds = trackUris
    .map((uri) => {
      const parsed = Spicetify.URI.fromString(uri);
      if (parsed.type === Spicetify.URI.Type.TRACK) {
        return parsed.id;
      }
      return null;
    })
    .filter(Boolean);

  const batchSize = 50;
  for (let i = 0; i < trackIds.length; i += batchSize) {
    const batchIds = trackIds.slice(i, i + batchSize);
    if (batchIds.length === 0) continue;

    const url = `https://api.spotify.com/v1/tracks?ids=${batchIds.join(",")}`;
    const trackDataBatch = await Spicetify.CosmosAsync.get(url);
    if (trackDataBatch?.tracks) {
      trackDataBatch.tracks.forEach((track) => {
        if (track?.external_ids?.isrc && track?.uri) {
          isrcMap.set(track.uri, track.external_ids.isrc);
        }
      });
    }

    return isrcMap;
  }
}

async function fetchPlayCountsForTracks(tracks) {
  const playCountMap = new Map();
  const tracksByAlbumUri = new Map();

  tracks.forEach((track) => {
    if (track?.album?.uri) {
      const albumUri = track.album.uri;
      if (!tracksByAlbumUri.has(albumUri)) {
        tracksByAlbumUri.set(albumUri, []);
      }
      tracksByAlbumUri.get(albumUri).push(track.uri);
    }
  });

  const albumFetchPromises = Array.from(tracksByAlbumUri.keys()).map(async (albumUri) => {
    const res = await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum, {
      uri: albumUri,
      locale: Spicetify.Locale.getLocale(),
      offset: 0,
      limit: 500,
    });

    const albumTracksData = res.data?.albumUnion?.tracksV2 || res.data?.albumUnion?.tracks;
    if (albumTracksData?.items) {
      albumTracksData.items.forEach((item) => {
        if (item?.track?.uri) {
          const count = item.track.playcount;
          playCountMap.set(
            item.track.uri,
            count !== null && count !== undefined ? Number.parseInt(count, 10) : "N/A",
          );
        }
      });
    }
  });

  await Promise.allSettled(albumFetchPromises);

  return Object.fromEntries(playCountMap);
}

const normalizeForSimilarity = (name) => {
  if (!name) return "";

  const termsToRemove = [
    "live",
    "remix",
    "mix",
    "acoustic",
    "instrumental",
    "radio",
    "version",
    "ver",
    "edit",
    "mono",
    "stereo",
    "deluxe",
    "intro",
    "outro",
    "remastered",
    "bonus",
    "feat",
    "ft",
    "explicit",
    "clean",
    "piano",
    "guitar",
    "cover",
    "original",
    "extended",
    "album",
    "single",
  ];
  const termsPattern = termsToRemove.join("|");
  const regexRemoveTerms = new RegExp(`\\b(${termsPattern})\\b`, "gi");
  const normalized = name
    .toLowerCase()
    .replace(/\(.*?\)|\[.*?\]/g, "")
    .replace(regexRemoveTerms, "")
    .replace(/-/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();

  return normalized;
};

const getNumericPlayCount = (trackUri, playCounts) => {
  const count = playCounts[trackUri];
  return typeof count === "number" ? count : -1;
};

function PlaylistDuplicateFinder({ selectedPlaylist: initialSelectedPlaylist }) {
  const [ownedPlaylists, setOwnedPlaylists] = useState([]);
  const [selectedPlaylistUri, setSelectedPlaylistUri] = useState(
    initialSelectedPlaylist?.uri || "",
  );
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playCounts, setPlayCounts] = useState({});
  const [isrcs, setIsrcs] = useState(new Map());
  const [duplicateGroups, setDuplicateGroups] = useState({
    exact: [],
    isrc: [],
    likely: [],
    possible: [],
  });

  useEffect(() => {
    (async () => {
      const playlists = await fetchOwnedPlaylists();
      setOwnedPlaylists(playlists);
      if (initialSelectedPlaylist && playlists.some((p) => p.uri === initialSelectedPlaylist.uri)) {
        setSelectedPlaylistUri(initialSelectedPlaylist.uri);
      } else {
        setSelectedPlaylistUri(initialSelectedPlaylist?.uri || "");
      }
    })();
  }, [initialSelectedPlaylist]);

  const findPotentialDuplicates = (tracks, playCounts, isrcMap) => {
    const validTracks = tracks.filter((track) => track?.uri && track.name);

    const groupAndFilter = (trackList, getKey, currentPlayCounts, normalizeKey = (k) => k) => {
      const trackMap = trackList.reduce((map, track) => {
        const key = normalizeKey(getKey(track));
        const list = map.get(key) || [];
        list.push(track);
        map.set(key, list);
        return map;
      }, new Map());

      return Array.from(trackMap.values())
        .filter((list) => list.length > 1)
        .map((list) => {
          const sortedList = [...list].sort(
            (a, b) =>
              getNumericPlayCount(b.uri, currentPlayCounts) -
              getNumericPlayCount(a.uri, currentPlayCounts),
          );
          return { sourceTrack: sortedList[0], duplicates: sortedList.slice(1) };
        });
    };

    const exactGroups = groupAndFilter(validTracks, (track) => track.uri, playCounts);
    const urisInExactGroups = new Set(
      exactGroups.flatMap((g) => [g.sourceTrack.uri, ...g.duplicates.map((d) => d.uri)]),
    );
    const remainingTracksAfterExact = validTracks.filter((t) => !urisInExactGroups.has(t.uri));

    const isrcTrackMap = new Map();
    validTracks.forEach((track) => {
      const isrc = isrcMap.get(track.uri);
      if (isrc) {
        const list = isrcTrackMap.get(isrc) || [];
        list.push(track);
        isrcTrackMap.set(isrc, list);
      }
    });

    const isrcGroups = Array.from(isrcTrackMap.values())
      .filter((list) => list.length > 1)
      .map((list) => {
        const sortedList = [...list].sort(
          (a, b) => getNumericPlayCount(b.uri, playCounts) - getNumericPlayCount(a.uri, playCounts),
        );
        return { sourceTrack: sortedList[0], duplicates: sortedList.slice(1) };
      });

    const likelyGroups = groupAndFilter(
      remainingTracksAfterExact,
      (track) => track.name,
      playCounts,
      (name) => name?.toLowerCase().trim(),
    );
    const urisInLikelyGroups = new Set(
      likelyGroups.flatMap((g) => [g.sourceTrack.uri, ...g.duplicates.map((d) => d.uri)]),
    );
    const remainingTracksAfterLikely = remainingTracksAfterExact.filter(
      (t) => !urisInLikelyGroups.has(t.uri),
    );

    const possibleGroups = groupAndFilter(
      remainingTracksAfterLikely,
      (track) => track.name,
      playCounts,
      normalizeForSimilarity,
    );

    setDuplicateGroups({
      exact: exactGroups,
      isrc: isrcGroups,
      likely: likelyGroups,
      possible: possibleGroups,
    });
  };

  const handleDeleteTrack = async (duplicateCategory, groupIndex, trackToRemove) => {
    ConfirmDialog({
      titleText: "Remove Track",
      descriptionText:
        "Are you sure you want to remove this Track? You will not be able to recover it!",
      confirmText: "Remove",
      onConfirm: async () => {
        await Spicetify.Platform.PlaylistAPI.remove(selectedPlaylistUri, [
          { uri: trackToRemove.uri, uid: trackToRemove.uid },
        ]);

        setDuplicateGroups((prevGroups) => {
          const categoryGroups = [...prevGroups[duplicateCategory]];
          const group = categoryGroups[groupIndex];
          if (group) {
            group.duplicates = group.duplicates.filter(
              (dup) => !(dup.uri === trackToRemove.uri && dup.uid === trackToRemove.uid),
            );
            const updatedCategoryGroups = categoryGroups.filter((g) => g.duplicates.length > 0);
            return {
              ...prevGroups,
              [duplicateCategory]: updatedCategoryGroups,
            };
          }
          return prevGroups;
        });

        setPlaylistTracks((previousTracks) =>
          previousTracks.filter(
            (track) => !(track.uri === trackToRemove.uri && track.uid === trackToRemove.uid),
          ),
        );
      },
    });
  };

  useEffect(() => {
    (async () => {
      const initialGroupsState = { exact: [], isrc: [], likely: [], possible: [] };
      if (!selectedPlaylistUri) {
        setPlaylistTracks([]);
        setDuplicateGroups(initialGroupsState);
        setPlayCounts({});
        setIsrcs(new Map());
        return;
      }

      setPlaylistTracks([]);
      setDuplicateGroups(initialGroupsState);
      setPlayCounts({});
      setIsrcs(new Map());
      let fetchedTracks = [];
      let counts = {};
      let isrcMap = new Map();

      const playlistData = await fetchAllPlaylistTracks(selectedPlaylistUri);
      fetchedTracks = playlistData.items;
      setPlaylistTracks(fetchedTracks);

      if (fetchedTracks.length > 0) {
        if (Spicetify.GraphQL && Spicetify.Locale) {
          counts = await fetchPlayCountsForTracks(fetchedTracks);
          setPlayCounts(counts);
        }
        isrcMap = await fetchISRCsForTracks(fetchedTracks.map((t) => t.uri));
        setIsrcs(isrcMap);
      }

      findPotentialDuplicates(fetchedTracks, counts, isrcMap);
    })();
  }, [selectedPlaylistUri]);

  const TrackDetails = ({ track }) => {
    const playCount = playCounts[track.uri];
    const displayCount = typeof playCount === "number" ? playCount.toLocaleString() : playCount;
    const trackIsrc = isrcs.get(track.uri);

    return (
      <div className="find-dupes-group__details">
        {track.artists ? `Artists: ${track.artists.map((a) => a.name).join(", ")}` : ""}
        {track.album?.name && (
          <span className="find-dupes-group__album"> Album: {track.album.name}</span>
        )}
        {playCount !== undefined && (
          <span className="find-dupes-group__playcount">
            {" "}
            Plays: {displayCount ?? "Loading..."}
          </span>
        )}
        {trackIsrc && <span className="find-dupes-group__isrc"> ISRC: {trackIsrc}</span>}
      </div>
    );
  };

  const renderDuplicateGroupList = (groupTitle, groups, duplicateCategory) => (
    <div className="find-dupes__group-section">
      <p className="find-dupes__group-section-heading">{`${groupTitle} (${groups.length} found)`}</p>
      <ul className="find-dupes__group-list">
        {groups.map((duplicateGroup, groupIndex) => (
          <li
            key={`${duplicateGroup.sourceTrack.uri}-${groupIndex}`}
            className={`find-dupes-group find-dupes-group--${duplicateCategory}`}
          >
            <div className="find-dupes-group__source">
              Source: {duplicateGroup.sourceTrack.name}
              <TrackDetails track={duplicateGroup.sourceTrack} />
            </div>
            <div className="find-dupes-group__duplicates-heading">Duplicates:</div>
            <ul className="find-dupes-group__duplicates-list">
              {duplicateGroup.duplicates.map((duplicateTrack) => (
                <li
                  key={duplicateTrack.uri + (duplicateTrack.uid || "")}
                  className="find-dupes-group__duplicate-item"
                >
                  <div className="find-dupes-group__duplicate-content">
                    <span className="find-dupes-group__duplicate-name">{duplicateTrack.name}</span>
                    <TrackDetails track={duplicateTrack} />
                  </div>
                  <button
                    className="find-dupes-group__delete-button"
                    onClick={() => handleDeleteTrack(duplicateCategory, groupIndex, duplicateTrack)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );

  const selectedPlaylist = ownedPlaylists.find((p) => p.uri === selectedPlaylistUri);
  const playlistName =
    selectedPlaylist?.name || initialSelectedPlaylist?.name || "Selected Playlist";
  const playlistOptions = ownedPlaylists.map((p) => ({ value: p.uri, label: p.name }));

  return (
    <div className="find-dupes">
      <div className="find-dupes__header">
        <span className="find-dupes__header-label">Select Playlist:</span>
        <Dropdown
          value={selectedPlaylistUri}
          options={playlistOptions}
          onChange={(e) => setSelectedPlaylistUri(e.target.value)}
          disabled={ownedPlaylists.length === 0}
        />
      </div>

      {selectedPlaylistUri && (
        <>
          {selectedPlaylist && (
            <p className="find-dupes__details">
              Playlist: {playlistName} ({playlistTracks.length} tracks)
            </p>
          )}
          {renderDuplicateGroupList("Exact Duplicates (Same URI)", duplicateGroups.exact, "exact")}
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
      )}
    </div>
  );
}

export default PlaylistDuplicateFinder;
