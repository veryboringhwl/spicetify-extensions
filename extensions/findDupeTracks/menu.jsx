import { useEffect, useState } from "react";
import ConfirmDialog from "../../shared/confirmDialog";
import Dropdown from "../../shared/dropdown";

async function fetchOwnedPlaylists(limit = 50) {
  const res = await Spicetify.Platform.LibraryAPI.getContents({ offset: 0, limit });
  const playlists = res.items.filter((item) => item?.type === "playlist" && item?.isOwnedBySelf);
  const total = res.totalLength;
  if (total > limit) {
    const offsets = [];
    for (let offset = limit; offset < total; offset += limit) {
      offsets.push(offset);
    }
    const responses = await Promise.all(
      offsets.map((offset) => Spicetify.Platform.LibraryAPI.getContents({ offset, limit })),
    );
    responses.forEach((batch) => {
      playlists.push(
        ...batch.items.filter((item) => item?.type === "playlist" && item?.isOwnedBySelf),
      );
    });
  }
  return playlists;
}

async function fetchAllPlaylistTracks(playlistUri, limit = 100) {
  const firstResponse = await Spicetify.Platform.PlaylistAPI.getContents(playlistUri, {
    offset: 0,
    limit,
  });
  const totalLength = firstResponse.totalLength;
  const items = firstResponse.items;

  const promises = [];
  for (let offset = limit; offset < totalLength; offset += limit) {
    promises.push(
      Spicetify.Platform.PlaylistAPI.getContents(playlistUri, { offset, limit }).then(
        (res) => res.items,
      ),
    );
  }
  const results = await Promise.all(promises);
  const allItems = items.concat(results.flat());

  return { items: allItems, totalLength };
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

  const batchSize = 50; // Split into 50 chunks as thats is max spotify allows
  const batchPromises = [];
  for (let i = 0; i < trackIds.length; i += batchSize) {
    const batchIds = trackIds.slice(i, i + batchSize);
    if (batchIds.length === 0) continue;

    const url = `https://api.spotify.com/v1/tracks?ids=${batchIds.join(",")}`;
    batchPromises.push(
      Spicetify.CosmosAsync.get(url).catch((error) => {
        console.error(`Failed to fetch batch of track data for ISRCs (URL: ${url}):`, error);
        return null;
      }),
    );
  }

  const results = await Promise.allSettled(batchPromises);

  results.forEach((result) => {
    if (result.status === "fulfilled" && result.value) {
      const trackDataBatch = result.value;
      if (trackDataBatch?.tracks) {
        trackDataBatch.tracks.forEach((track) => {
          if (track?.external_ids?.isrc && track?.uri) {
            isrcMap.set(track.uri, track.external_ids.isrc);
          }
        });
      }
    } else if (result.status === "rejected") {
      console.error("A batch request for ISRCs failed:", result.reason);
    }
  });

  return isrcMap;
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

  const findPotentialDuplicates = (tracks, playCountMap, isrcMap) => {
    const validTracks = tracks.filter((t) => t?.uri && t.name);

    const groupDuplicates = (list, keyFn, normalizer, counts) => {
      const groups = new Map();
      list.forEach((t) => {
        const key = normalizer(keyFn(t));
        groups.set(key, [...(groups.get(key) || []), t]);
      });
      return Array.from(groups.values())
        .filter((group) => group.length > 1)
        .map((group) => {
          const sorted = group.sort(
            (a, b) => getNumericPlayCount(b.uri, counts) - getNumericPlayCount(a.uri, counts),
          );
          return { mainTrack: sorted[0], duplicates: sorted.slice(1) };
        });
    };

    const exactDuplicates = groupDuplicates(
      validTracks,
      (t) => t.uri,
      (k) => k,
      playCountMap,
    );
    const exactUris = new Set(
      exactDuplicates.flatMap((g) => [g.mainTrack.uri, ...g.duplicates.map((t) => t.uri)]),
    );
    const remainingAfterExact = validTracks.filter((t) => !exactUris.has(t.uri));

    const isrcGroups = new Map();
    validTracks.forEach((t) => {
      const isrc = isrcMap.get(t.uri);
      if (isrc) {
        isrcGroups.set(isrc, [...(isrcGroups.get(isrc) || []), t]);
      }
    });
    const isrcDuplicates = Array.from(isrcGroups.values())
      .filter((group) => group.length > 1)
      .map((group) => {
        const sorted = group.sort(
          (a, b) =>
            getNumericPlayCount(b.uri, playCountMap) - getNumericPlayCount(a.uri, playCountMap),
        );
        return { mainTrack: sorted[0], duplicates: sorted.slice(1) };
      });
    const isrcUris = new Set(
      isrcDuplicates.flatMap((g) => [g.mainTrack.uri, ...g.duplicates.map((t) => t.uri)]),
    );
    const remainingAfterIsrc = remainingAfterExact.filter((t) => !isrcUris.has(t.uri));

    const likelyDuplicates = groupDuplicates(
      remainingAfterIsrc,
      (t) => t.name,
      (name) => name.toLowerCase().trim(),
      playCountMap,
    );
    const likelyUris = new Set(
      likelyDuplicates.flatMap((g) => [g.mainTrack.uri, ...g.duplicates.map((t) => t.uri)]),
    );
    const remainingAfterLikely = remainingAfterIsrc.filter((t) => !likelyUris.has(t.uri));

    const possibleDuplicates = groupDuplicates(
      remainingAfterLikely,
      (t) => t.name,
      normalizeForSimilarity,
      playCountMap,
    );

    setDuplicateGroups({
      exact: exactDuplicates,
      isrc: isrcDuplicates,
      likely: likelyDuplicates,
      possible: possibleDuplicates,
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

      const playlistData = await fetchAllPlaylistTracks(selectedPlaylistUri);
      const fetchedTracks = playlistData.items;
      setPlaylistTracks(fetchedTracks);

      if (fetchedTracks.length > 0) {
        const [fetchedPlayCounts, fetchedIsrcMap] = await Promise.all([
          fetchPlayCountsForTracks(fetchedTracks),
          fetchISRCsForTracks(fetchedTracks.map((t) => t.uri)),
        ]);
        setPlayCounts(fetchedPlayCounts);
        setIsrcs(fetchedIsrcMap);
        findPotentialDuplicates(fetchedTracks, fetchedPlayCounts, fetchedIsrcMap);
      } else {
        findPotentialDuplicates(fetchedTracks, {}, new Map());
      }
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
            key={`${duplicateGroup.mainTrack.uri}-${groupIndex}`}
            className={`find-dupes-group find-dupes-group--${duplicateCategory}`}
          >
            <div className="find-dupes-group__source">
              Source: {duplicateGroup.mainTrack.name}
              <TrackDetails track={duplicateGroup.mainTrack} />
            </div>
            <div className="find-dupes-group__duplicates-heading">Duplicates:</div>
            <ul className="find-dupes-group__duplicates-list">
              {duplicateGroup.duplicates.map((dup) => (
                <li key={dup.uri + (dup.uid || "")} className="find-dupes-group__duplicate-item">
                  <div className="find-dupes-group__duplicate-content">
                    <span className="find-dupes-group__duplicate-name">{dup.name}</span>
                    <TrackDetails track={dup} />
                  </div>
                  <button
                    className="find-dupes-group__delete-button"
                    onClick={() => handleDeleteTrack(duplicateCategory, groupIndex, dup)}
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
