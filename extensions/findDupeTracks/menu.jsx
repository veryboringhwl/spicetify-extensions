import { useCallback, useEffect, useState } from "react";
import ConfirmDialog from "../../shared/confirmDialog";

async function fetchAllPlaylistTracks(playlistUri, offset = 0, limit = 100, accumulatedItems = []) {
  const response = await Spicetify.Platform.PlaylistAPI.getContents(playlistUri, { offset, limit });
  const items = response.items;
  const allItems = accumulatedItems.concat(items);
  if (items.length === limit && response.totalLength > offset + limit) {
    return fetchAllPlaylistTracks(playlistUri, offset + limit, limit, allItems);
  }
  return { items: allItems, totalLength: allItems.length };
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

function PlaylistDuplicateFinder({ selectedPlaylist: initialSelectedPlaylist }) {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playCounts, setPlayCounts] = useState({});
  const [duplicateGroups, setDuplicateGroups] = useState({
    exact: [],
    likely: [],
    possible: [],
  });

  const findPotentialDuplicates = useCallback((tracks) => {
    const validTracks = tracks.filter((track) => track?.uri && track.name);

    const groupAndFilter = (trackList, getKey, normalizeKey = (k) => k) => {
      const trackMap = trackList.reduce((map, track) => {
        const key = normalizeKey(getKey(track));
        const list = map.get(key) || [];
        list.push(track);
        map.set(key, list);
        return map;
      }, new Map());

      return Array.from(trackMap.values())
        .filter((list) => list.length > 1)
        .map((list) => ({ sourceTrack: list[0], duplicates: list.slice(1) }));
    };

    const exactGroups = groupAndFilter(validTracks, (track) => track.uri);
    const urisInExactGroups = new Set(
      exactGroups.flatMap((g) => [g.sourceTrack.uri, ...g.duplicates.map((d) => d.uri)]),
    );
    const remainingTracksAfterExact = validTracks.filter((t) => !urisInExactGroups.has(t.uri));

    const likelyGroups = groupAndFilter(
      remainingTracksAfterExact,
      (track) => track.name,
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
      normalizeForSimilarity,
    );

    setDuplicateGroups({
      exact: exactGroups,
      likely: likelyGroups,
      possible: possibleGroups,
    });
  }, []);

  const handleDeleteTrack = async (duplicateCategory, groupIndex, trackToRemove) => {
    ConfirmDialog({
      titleText: "Remove Track",
      descriptionText:
        "Are you sure you want to remove this Track? You will not be able to recover it!",
      confirmText: "Remove",
      onConfirm: async () => {
        await Spicetify.Platform.PlaylistAPI.remove(initialSelectedPlaylist.uri, [
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
      const initialGroupsState = { exact: [], likely: [], possible: [] };
      if (!initialSelectedPlaylist?.uri) {
        setPlaylistTracks([]);
        setDuplicateGroups(initialGroupsState);
        setPlayCounts({});
        return;
      }

      setPlaylistTracks([]);
      setDuplicateGroups(initialGroupsState);
      setPlayCounts({});

      try {
        const playlistData = await fetchAllPlaylistTracks(initialSelectedPlaylist.uri);
        const fetchedTracks = playlistData.items;
        setPlaylistTracks(fetchedTracks);
        findPotentialDuplicates(fetchedTracks);
        if (fetchedTracks.length > 0 && Spicetify.GraphQL && Spicetify.Locale) {
          const counts = await fetchPlayCountsForTracks(fetchedTracks);
          setPlayCounts(counts);
        }
      } catch (error) {
        console.error("Error fetching playlist tracks:", error);
      }
    })();
  }, [initialSelectedPlaylist, findPotentialDuplicates]);

  const TrackDetails = ({ track }) => {
    const playCount = playCounts[track.uri];
    const displayCount = typeof playCount === "number" ? playCount.toLocaleString() : playCount;

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

  const playlistName = initialSelectedPlaylist?.name || "Selected Playlist";

  return (
    <div className="find-dupes">
      {initialSelectedPlaylist?.uri && (
        <>
          <p className="find-dupes__details">
            Playlist: {playlistName} ({playlistTracks.length} tracks)
          </p>
          {renderDuplicateGroupList("Exact Duplicates (Same URI)", duplicateGroups.exact, "exact")}
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
