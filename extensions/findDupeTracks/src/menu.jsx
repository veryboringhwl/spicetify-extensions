import Dexie from "https://esm.sh/dexie";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import fetchAllLibraryContents from "../../../shared/api/fetchAllLibraryContents";
import fetchAllPlaylistTracks from "../../../shared/api/fetchAllPlaylistTracks";
import fetchISRCsForTracks from "../../../shared/api/fetchISRCsForTracks";
import fetchPlayCountsForTracks from "../../../shared/api/fetchPlayCountsForTracks";
import ConfirmDialog from "../../../shared/components/confirmDialog";
import Dropdown from "../../../shared/components/dropdown";
import Icons from "../../../shared/components/icons";
import Slider from "../../../shared/components/slider";
import { getSettings } from "./settings";

const db = new Dexie("findDupeTracks");
//dexie multiplies version by 10?
db.version(0.1).stores({
  tracks: "&trackUri, trackName, trackDuration, albumUri, playCount, isrc, ignoreDuplicates",
});

async function fetchEditablePlaylists() {
  const playlists = await fetchAllLibraryContents();
  return playlists.filter((item) => item.type === "playlist" && item.canAddTo);
}

async function fetchPlaylistTracksAndCache(playlistUri) {
  const { items } = await fetchAllPlaylistTracks(playlistUri);

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
        trackDuration: item.duration.milliseconds,
        playCount: existing?.playCount ?? null,
        isrc: existing?.isrc ?? null,
      });
    }
    return acc;
  }, []);

  if (tracksToPut.length > 0) {
    await db.tracks.bulkPut(tracksToPut);
  }

  return { items };
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
  const regexRemoveTerms = new RegExp(`\\b(${termsToRemove.join("|")})\\b`, "gi");
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
  const [trackDurations, setTrackDurations] = useState(new Map());
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
      setSelectedPlaylist(initialSelectedPlaylist || playlists[0] || null);
    })();
    return () => {
      isMounted = false;
    };
  }, [initialSelectedPlaylist]);

  const handlePlaylistChange = (e) => {
    const newPlaylist = ownedPlaylists.find((p) => p.uri === e.target.value);
    if (newPlaylist) setSelectedPlaylist(newPlaylist);
  };

  const findPotentialDuplicates = useCallback((tracks, playCountMap, isrcMap) => {
    const processedUris = new Set();
    const groupAndFilter = (list, keyFn, normalizer) => {
      const groups = new Map();

      for (const t of list) {
        if (processedUris.has(t.uri)) continue;
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
    setDuplicateGroups({
      exact: groupAndFilter(
        tracks,
        (t) => t.uri,
        (k) => k,
      ),
      isrc: groupAndFilter(
        tracks,
        (t) => isrcMap.get(t.uri),
        (k) => k,
      ),
      likely: groupAndFilter(
        tracks,
        (t) => t.name,
        (name) => name.trim(),
      ),
      possible: groupAndFilter(tracks, (t) => t.name, normalizeForSimilarity),
    });
  }, []);

  const removeTrackFromPlaylist = async (trackToRemove) => {
    await Spicetify.Platform.PlaylistAPI.remove(selectedPlaylist.uri, [{ uid: trackToRemove.uid }]);
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter(
        (track) => !(track.uri === trackToRemove.uri && track.uid === trackToRemove.uid),
      ),
    );
  };

  const handleDeleteTrack = async (duplicateCategory, _groupIndex, trackToRemove) => {
    const settings = getSettings();
    if (!settings.confirmSettings[duplicateCategory]) {
      await removeTrackFromPlaylist(trackToRemove);
      return;
    }
    ConfirmDialog({
      titleText: "Remove Track",
      descriptionText: `Are you sure you want to remove \"${trackToRemove.name}\"? This cannot be undone.`,
      confirmText: "Remove",
      onConfirm: () => removeTrackFromPlaylist(trackToRemove),
    });
  };

  useEffect(() => {
    setPlaylistTracks([]);
    setDuplicateGroups({ exact: [], isrc: [], likely: [], possible: [] });
    setPlayCounts(new Map());
    setIsrcs(new Map());
    setTrackDurations(new Map());

    const loadData = async () => {
      if (!selectedPlaylist?.uri) return;

      const playlistData = await fetchPlaylistTracksAndCache(selectedPlaylist.uri);
      const fetchedTracks = playlistData.items;
      setPlaylistTracks(fetchedTracks);

      if (fetchedTracks.length > 0) {
        const [fetchedPlayCountsResult, fetchedIsrcMapResult, fetchedTrackDurationsResult] =
          await Promise.all([
            fetchPlayCountsForTracksWithCache(fetchedTracks),
            fetchISRCsForTracksWithCache(fetchedTracks),
            (async () => {
              const durationMap = new Map();
              const cachedTracksData = await db.tracks.bulkGet(fetchedTracks.map((t) => t.uri));
              for (const t of cachedTracksData.filter(Boolean)) {
                if (t?.trackDuration != null) {
                  durationMap.set(t.trackUri, t.trackDuration);
                }
              }
              return durationMap;
            })(),
          ]);

        setPlayCounts(fetchedPlayCountsResult);
        setIsrcs(fetchedIsrcMapResult);
        setTrackDurations(fetchedTrackDurationsResult);
      }
    };
    loadData();
  }, [selectedPlaylist]);

  useEffect(() => {
    if (playlistTracks.length > 0) findPotentialDuplicates(playlistTracks, playCounts, isrcs);
    else setDuplicateGroups({ exact: [], isrc: [], likely: [], possible: [] });
  }, [playlistTracks, playCounts, isrcs, findPotentialDuplicates]);

  const TrackDetails = memo(({ track }) => {
    const playCount = playCounts.get(track.uri);
    const displayCount = playCount != null ? playCount.toLocaleString() : "N/A";
    const trackIsrc = isrcs.get(track.uri) || "N/A";
    const albumName = track.album?.name || "N/A";
    const artists = track.artists?.map((a) => a.name).join(", ") || "N/A";
    return (
      <div className="track-details">
        <div className="track-details__line">
          <span className="track-details__artists"> Artists: {artists}</span>
          <span className="track-details__album"> Album: {albumName}</span>
        </div>
        <div className="track-details__line">
          <span className="track-details__playcount"> Plays: {displayCount}</span>
          <span className="track-details__isrc"> ISRC: {trackIsrc}</span>
        </div>
      </div>
    );
  });

  const TrackControls = memo(({ trackUri, trackDuration }) => {
    const [playerState, setPlayerState] = useState(Spicetify.Platform.PlayerAPI.getState());
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(1);
    const isSliderDragging = useRef(false);

    const formatTime = (ms) => {
      if (Number.isNaN(ms) || ms < 0) return "0:00";
      const totalSeconds = Math.floor(ms / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    useEffect(() => {
      const updateListener = (event) => {
        const newPlayerState = event.data;
        setPlayerState(newPlayerState);
        if (newPlayerState.item?.uri === trackUri) {
          if (!isSliderDragging.current) setPosition(newPlayerState.positionAsOfTimestamp);
          setDuration(newPlayerState.duration);
        } else if (newPlayerState.item?.uri !== trackUri) {
          setPosition(0);
          setDuration(1);
        }
      };

      Spicetify.Platform.PlayerAPI._events.addListener("update", updateListener);
      return () => {
        Spicetify.Platform.PlayerAPI._events.removeListener("update", updateListener);
      };
    }, [trackUri]);

    useEffect(() => {
      const isPlayingThisTrack = playerState.item?.uri === trackUri;
      const isPlayingAndNotPaused = isPlayingThisTrack && !playerState.isPaused;

      if (!isPlayingAndNotPaused) {
        if (!isPlayingThisTrack) {
          setPosition(0);
          setDuration(1);
        }
        return;
      }
      const interval = setInterval(() => {
        if (!isSliderDragging.current) {
          const newPosition =
            playerState.positionAsOfTimestamp + (Date.now() - playerState.timestamp);
          setPosition(newPosition < playerState.duration ? newPosition : playerState.duration);
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [playerState, trackUri]);

    const togglePlay = useCallback(() => {
      const currentPlayingTrack = playerState.item?.uri;
      if (currentPlayingTrack === trackUri) {
        playerState.isPaused
          ? Spicetify.Platform.PlayerAPI.resume()
          : Spicetify.Platform.PlayerAPI.pause();
      } else {
        Spicetify.Platform.PlayerAPI.play({ uri: trackUri }, {}, {});
      }
    }, [playerState, trackUri]);

    const handleSliderChange = useCallback((newPosition) => {
      isSliderDragging.current = true;
      setPosition(newPosition);
    }, []);

    const isPlaying = !playerState.isPaused;
    const isCurrentlyPlayingThisTrack = isPlaying && playerState.item?.uri === trackUri;

    const handleSliderRelease = useCallback(() => {
      if (isSliderDragging.current) {
        const isSameTrackInPlayer = playerState.item?.uri === trackUri;

        if (!isSameTrackInPlayer) {
          Spicetify.Platform.PlayerAPI.play({ uri: trackUri }, {}, {});
          // Add a small delay to allow Spotify to switch to the new track before seeking
          setTimeout(() => {
            Spicetify.Platform.PlayerAPI.seekTo(position);
          }, 500); // 500ms delay
        } else {
          Spicetify.Platform.PlayerAPI.seekTo(position);
        }
        isSliderDragging.current = false;
      }
    }, [position, trackUri, playerState]);

    const leftText = formatTime(position);
    const rightText = formatTime(trackDuration || duration);
    return (
      <div className="duplicate-group__playback-controls">
        <button className="duplicate-group__playback-button" onClick={togglePlay}>
          {isCurrentlyPlayingThisTrack ? <Icons.React.pause /> : <Icons.React.play />}
        </button>
        <span className="slider-time">{leftText}</span>
        <Slider
          value={position}
          min={0}
          max={trackDuration || duration}
          step={1}
          onChange={handleSliderChange}
          onRelease={handleSliderRelease}
        />
        <span className="slider-time">{rightText}</span>
      </div>
    );
  });

  const renderDuplicateGroupList = (groupTitle, groups, duplicateCategory) => {
    const settings = getSettings();
    if (!settings.groupSettings[duplicateCategory]) return null;
    return (
      <div className="duplicate-group">
        <p className="duplicate-group__heading">
          <div className="duplicate-group__heading-title">{groupTitle}</div>
          <div className="duplicate-group__heading-length">{groups.length} found</div>
        </p>
        {groups.length > 0 ? (
          <div className="duplicate-group__list">
            {groups.map((duplicateGroup, groupIndex) => (
              <div
                key={`${duplicateGroup.mainTrack.uri}-${duplicateGroup.mainTrack.uid || groupIndex}`}
                className={`duplicate-group__item duplicate-group__item--${duplicateCategory}`}
              >
                <div
                  className={`duplicate-group__duplicate-item duplicate-group__item--${duplicateCategory}`}
                >
                  <div className="duplicate-group__duplicate-info">
                    <div className="duplicate-group__duplicate-content">
                      <span className="duplicate-group__duplicate-name">
                        Source: {duplicateGroup.mainTrack.name}
                      </span>
                      <TrackDetails track={duplicateGroup.mainTrack} />
                    </div>
                    <button
                      className="duplicate-group__delete-button"
                      onClick={() =>
                        handleDeleteTrack(duplicateCategory, groupIndex, duplicateGroup.mainTrack)
                      }
                    >
                      Delete
                    </button>
                  </div>
                  <div className="duplicate-group__actions">
                    <TrackControls
                      trackUri={duplicateGroup.mainTrack.uri}
                      trackDuration={trackDurations.get(duplicateGroup.mainTrack.uri)}
                    />
                  </div>
                </div>
                <div className="duplicate-group__duplicates-label">Duplicates:</div>
                <div className="duplicate-group__duplicates-list">
                  {duplicateGroup.duplicates.map((dup) => (
                    <div
                      key={`${dup.uri}-${dup.uid || dup.uri}`}
                      className="duplicate-group__duplicate-item"
                    >
                      <div className="duplicate-group__duplicate-info">
                        <div className="duplicate-group__duplicate-content">
                          <span className="duplicate-group__duplicate-name">{dup.name}</span>
                          <TrackDetails track={dup} />
                        </div>
                        <button
                          className="duplicate-group__delete-button"
                          onClick={() => handleDeleteTrack(duplicateCategory, groupIndex, dup)}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="duplicate-group__actions">
                        <TrackControls
                          trackUri={dup.uri}
                          trackDuration={trackDurations.get(dup.uri)}
                        />
                      </div>
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

  const playlistOptions = ownedPlaylists.map((p) => ({ value: p.uri, label: p.name }));

  return (
    <div className="find-duplicates">
      <div className="find-duplicates__header">
        <span className="find-duplicates__header-label">Select Playlist:</span>
        <Dropdown
          value={selectedPlaylist.uri}
          options={playlistOptions}
          onChange={handlePlaylistChange}
          disabled={ownedPlaylists.length === 0}
        />
      </div>
      {selectedPlaylist && (
        <>
          <p className="find-duplicates__details">
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
