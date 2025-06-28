import Dexie from "https://esm.sh/dexie";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import fetchAllLibraryContents from "../../../shared/api/fetchAllLibraryContents";
import fetchAllPlaylistTracks from "../../../shared/api/fetchAllPlaylistTracks";
import fetchGraphQLForAlbumTracks from "../../../shared/api/fetchGraphQLForAlbumTracks";
import fetchWebAPIForTracks from "../../../shared/api/fetchWebAPIForTracks";
import ConfirmDialog from "../../../shared/components/confirmDialog";
import Dropdown from "../../../shared/components/dropdown";
import Icons from "../../../shared/components/icons";
import Slider from "../../../shared/components/slider";
import usePlayer from "../../../shared/hooks/usePlayer";
import { getSettings } from "./settings";

const db = new Dexie("findDupeTracks");
//dexie multiplies version by 10?
db.version(0.1).stores({
  tracks:
    "&trackUri, trackName, trackDuration, albumUri, trackPlayCount, trackIsrc, ignoreDuplicates",
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
        trackDuration: existing?.duration.milliseconds ?? null,
        trackPlayCount: existing?.trackPlayCount ?? null,
        trackIsrc: existing?.trackIsrc ?? null,
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
    if (cachedTrack?.trackIsrc) {
      isrcMap.set(track.uri, cachedTrack.trackIsrc);
    } else {
      tracksToFetch.push(track);
    }
  }

  if (tracksToFetch.length > 0) {
    const fetchedTracksFromAPI = await fetchWebAPIForTracks(tracksToFetch.map((t) => t.uri));
    const updatesForDb = [];

    for (const [trackUri, track] of fetchedTracksFromAPI.entries()) {
      const trackIsrc = track?.external_ids?.isrc;
      if (trackIsrc) {
        isrcMap.set(trackUri, trackIsrc);
        updatesForDb.push({ key: trackUri, changes: { trackIsrc } });
      }
    }

    if (updatesForDb.length > 0) {
      await db.tracks.bulkUpdate(updatesForDb);
    }
  }
  return isrcMap;
}

async function fetchPlayCountsAndDurationForTracksWithCache(tracks) {
  const trackPlayCountMap = new Map();
  const trackDurationMap = new Map();
  const tracksToFetch = [];
  const validTracks = tracks.filter((track) => track?.uri);
  const trackUris = validTracks.map((track) => track.uri);

  if (trackUris.length === 0) return { trackPlayCountMap, trackDurationMap };

  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map(cachedTracksData.filter(Boolean).map((t) => [t.trackUri, t]));

  for (const track of validTracks) {
    const cachedTrack = cachedTracksMap.get(track.uri);
    if (cachedTrack?.trackPlayCount != null) {
      trackPlayCountMap.set(track.uri, cachedTrack.trackPlayCount);
    }
    if (cachedTrack?.trackDuration != null) {
      trackDurationMap.set(track.uri, cachedTrack.trackDuration);
    }
    if (cachedTrack?.trackPlayCount == null || cachedTrack?.trackDuration == null) {
      tracksToFetch.push(track);
    }
  }

  if (tracksToFetch.length > 0) {
    const albumUrisToFetch = new Set(tracksToFetch.map((t) => t.album.uri).filter(Boolean));
    const fetchedDataFromAPI = await fetchGraphQLForAlbumTracks(albumUrisToFetch);
    const updatesForDb = [];

    for (const [trackUri, track] of fetchedDataFromAPI.entries()) {
      const trackPlayCount = track.playcount ? Number.parseInt(track.playcount, 10) : null;
      const trackDuration = track.duration?.totalMilliseconds ?? null;

      if (trackPlayCount !== null) {
        trackPlayCountMap.set(trackUri, trackPlayCount);
      }
      if (trackDuration !== null) {
        trackDurationMap.set(trackUri, trackDuration);
      }
      updatesForDb.push({
        key: trackUri,
        changes: { trackPlayCount, trackDuration },
      });
    }

    if (updatesForDb.length > 0) {
      await db.tracks.bulkUpdate(updatesForDb);
    }
  }
  return { trackPlayCountMap, trackDurationMap };
}

const getNumericTrackPlayCount = (trackUri, trackPlayCounts) => trackPlayCounts.get(trackUri) ?? 0;

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

const TrackDetails = memo(({ track, trackPlayCounts, trackIsrcs }) => {
  const trackPlayCount = trackPlayCounts.get(track.uri);
  const displayCount = trackPlayCount != null ? trackPlayCount.toLocaleString() : "N/A";
  const trackIsrc = trackIsrcs.get(track.uri) || "N/A";
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
  const {
    position,
    duration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease,
  } = usePlayer(trackUri, trackDuration);

  const formatTime = (ms) => {
    if (Number.isNaN(ms) || ms < 0) return "N/A";
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const leftText = formatTime(position);
  const rightText = formatTime(duration);

  return (
    <div className="duplicate-group__playback-controls">
      <button type="button" className="duplicate-group__playback-button" onClick={togglePlay}>
        {isCurrentlyPlayingThisTrack ? <Icons.React.pause /> : <Icons.React.play />}
      </button>
      <span className="slider-time">{leftText}</span>
      <Slider
        value={position}
        min={0}
        max={duration}
        step={1}
        onChange={handleSliderChange}
        onRelease={handleSliderRelease}
      />
      <span className="slider-time">{rightText}</span>
    </div>
  );
});

const DuplicateItem = memo(
  ({
    track,
    category,
    groupIndex,
    onDelete,
    isSource,
    trackPlayCounts,
    trackIsrcs,
    trackDurations,
  }) => (
    <div className={`duplicate-group__duplicate-item duplicate-group__item--${category}`}>
      <div className="duplicate-group__duplicate-info">
        <div className="duplicate-group__duplicate-content">
          <span className="duplicate-group__duplicate-name">
            {isSource ? "Source: " : ""}
            {track.name}
          </span>
          <TrackDetails track={track} trackPlayCounts={trackPlayCounts} trackIsrcs={trackIsrcs} />
        </div>
        <button
          type="button"
          className="duplicate-group__delete-button"
          onClick={() => onDelete(category, groupIndex, track)}
        >
          Delete
        </button>
      </div>
      <div className="duplicate-group__actions">
        <TrackControls trackUri={track.uri} trackDuration={trackDurations.get(track.uri)} />
      </div>
    </div>
  ),
);

const DuplicateGroup = memo(
  ({ group, category, groupIndex, onDelete, trackPlayCounts, trackIsrcs, trackDurations }) => (
    <div
      key={`${group.mainTrack.uri}-${group.mainTrack.uid || groupIndex}`}
      className={`duplicate-group__item duplicate-group__item--${category}`}
    >
      <DuplicateItem
        track={group.mainTrack}
        category={category}
        groupIndex={groupIndex}
        onDelete={onDelete}
        isSource
        trackPlayCounts={trackPlayCounts}
        trackIsrcs={trackIsrcs}
        trackDurations={trackDurations}
      />
      <div className="duplicate-group__duplicates-label">Duplicates:</div>
      <div className="duplicate-group__duplicates-list">
        {group.duplicates.map((dup) => (
          <DuplicateItem
            key={`${dup.uri}-${dup.uid || dup.uri}`}
            track={dup}
            category={category}
            groupIndex={groupIndex}
            onDelete={onDelete}
            trackPlayCounts={trackPlayCounts}
            trackIsrcs={trackIsrcs}
            trackDurations={trackDurations}
          />
        ))}
      </div>
    </div>
  ),
);

const DuplicateGroupList = memo(
  ({ title, groups, category, onDelete, trackPlayCounts, trackIsrcs, trackDurations }) => {
    const settings = getSettings();
    if (!settings.groupSettings[category]) return null;

    return (
      <div className="duplicate-group">
        <p className="duplicate-group__heading">
          <div className="duplicate-group__heading-title">{title}</div>
          <div className="duplicate-group__heading-length">{groups.length} found</div>
        </p>
        {groups.length > 0 ? (
          <div className="duplicate-group__list">
            {groups.map((group, index) => (
              <DuplicateGroup
                key={`${group.mainTrack.uri}-${index}`}
                group={group}
                category={category}
                groupIndex={index}
                onDelete={onDelete}
                trackPlayCounts={trackPlayCounts}
                trackIsrcs={trackIsrcs}
                trackDurations={trackDurations}
              />
            ))}
          </div>
        ) : (
          <p>No duplicates found in this category.</p>
        )}
      </div>
    );
  },
);

function PlaylistDuplicateFinder({ selectedPlaylist: initialSelectedPlaylist }) {
  const [ownedPlaylists, setOwnedPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(initialSelectedPlaylist || null);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [trackPlayCounts, setTrackPlayCounts] = useState(new Map());
  const [trackDurations, setTrackDurations] = useState(new Map());
  const [trackIsrcs, setTrackIsrcs] = useState(new Map());
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

  const findPotentialDuplicates = useCallback((tracks, trackPlayCountMap, trackIsrcMap) => {
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
              getNumericTrackPlayCount(b.uri, trackPlayCountMap) -
              getNumericTrackPlayCount(a.uri, trackPlayCountMap),
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
        (t) => trackIsrcMap.get(t.uri),
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
      descriptionText: `Are you sure you want to remove "${trackToRemove.name}"? This cannot be undone.`,
      confirmText: "Remove",
      onConfirm: () => removeTrackFromPlaylist(trackToRemove),
    });
  };

  useEffect(() => {
    setPlaylistTracks([]);
    setDuplicateGroups({ exact: [], isrc: [], likely: [], possible: [] });
    setTrackPlayCounts(new Map());
    setTrackIsrcs(new Map());
    setTrackDurations(new Map());

    const loadData = async () => {
      if (!selectedPlaylist?.uri) return;

      const playlistData = await fetchPlaylistTracksAndCache(selectedPlaylist.uri);
      const fetchedTracks = playlistData.items;
      setPlaylistTracks(fetchedTracks);

      if (fetchedTracks.length > 0) {
        const [fetchedTrackPlayCountsAndDurationResult, fetchedTrackIsrcMapResult] =
          await Promise.all([
            fetchPlayCountsAndDurationForTracksWithCache(fetchedTracks),
            fetchISRCsForTracksWithCache(fetchedTracks),
          ]);

        setTrackPlayCounts(fetchedTrackPlayCountsAndDurationResult.trackPlayCountMap);
        setTrackDurations(fetchedTrackPlayCountsAndDurationResult.trackDurationMap);
        setTrackIsrcs(fetchedTrackIsrcMapResult);
      }
    };
    loadData();
  }, [selectedPlaylist]);

  useEffect(() => {
    if (playlistTracks.length > 0) {
      findPotentialDuplicates(playlistTracks, trackPlayCounts, trackIsrcs);
    } else {
      setDuplicateGroups({ exact: [], isrc: [], likely: [], possible: [] });
    }
  }, [playlistTracks, trackPlayCounts, trackIsrcs, findPotentialDuplicates]);

  const playlistOptions = ownedPlaylists.map((p) => ({ value: p.uri, label: p.name }));

  return (
    <div className="find-duplicates">
      <div className="find-duplicates__header">
        <span className="find-duplicates__header-label">Select Playlist:</span>
        <Dropdown
          value={selectedPlaylist?.uri}
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
          <DuplicateGroupList
            title="Exact Duplicates (Same URI)"
            groups={duplicateGroups.exact}
            category="exact"
            onDelete={handleDeleteTrack}
            trackPlayCounts={trackPlayCounts}
            trackIsrcs={trackIsrcs}
            trackDurations={trackDurations}
          />
          <DuplicateGroupList
            title="ISRC Duplicates (Same Recording)"
            groups={duplicateGroups.isrc}
            category="isrc"
            onDelete={handleDeleteTrack}
            trackPlayCounts={trackPlayCounts}
            trackIsrcs={trackIsrcs}
            trackDurations={trackDurations}
          />
          <DuplicateGroupList
            title="Likely Duplicates (Same Name)"
            groups={duplicateGroups.likely}
            category="likely"
            onDelete={handleDeleteTrack}
            trackPlayCounts={trackPlayCounts}
            trackIsrcs={trackIsrcs}
            trackDurations={trackDurations}
          />
          <DuplicateGroupList
            title="Possible Duplicates (Similar Name)"
            groups={duplicateGroups.possible}
            category="possible"
            onDelete={handleDeleteTrack}
            trackPlayCounts={trackPlayCounts}
            trackIsrcs={trackIsrcs}
            trackDurations={trackDurations}
          />
        </>
      )}
    </div>
  );
}

export default PlaylistDuplicateFinder;
