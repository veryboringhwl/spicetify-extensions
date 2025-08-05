import Dexie, { type Table } from "Dexie";
import { memo, useCallback, useEffect, useState } from "react";
import fetchAllLibraryContents from "../../../shared/api/fetchAllLibraryContents.ts";
import fetchAllPlaylistTracks from "../../../shared/api/fetchAllPlaylistTracks.ts";
import fetchGraphQLForAlbumTracks from "../../../shared/api/fetchGraphQLForAlbumTracks.ts";
import fetchWebAPIForTracks from "../../../shared/api/fetchWebAPIForTracks.ts";
import { ConfirmDialog } from "../../../shared/components/confirmDialog.jsx";
import { Dropdown } from "../../../shared/components/dropdown.tsx";
import { Icons } from "../../../shared/components/icons.tsx";
import { Slider } from "../../../shared/components/slider.tsx";
import usePlayer from "../../../shared/hooks/usePlayer.jsx";
import { getSettings } from "./settings.jsx";

interface Track {
  uri: string;
  name: string;
  album: {
    uri: string;
    name: string;
  };
  artists: Array<{ name: string }>;
  uid?: string;
}

interface DbTrack {
  trackUri: string;
  trackName: string;
  trackDuration: number | null;
  albumUri: string;
  trackPlayCount: number | null;
  trackIsrc: string | null;
  ignoreDuplicates?: string;
}
interface DuplicateGroup {
  mainTrack: Track;
  duplicates: Track[];
}

interface DuplicateGroups {
  exact: DuplicateGroup[];
  isrc: DuplicateGroup[];
  likely: DuplicateGroup[];
  possible: DuplicateGroup[];
}

interface FindDupeTracksDB extends Dexie {
  tracks: Table<DbTrack, string>;
}

const db: FindDupeTracksDB = new Dexie("findDupeTracks") as FindDupeTracksDB;
(db as Dexie).version(1).stores({
  tracks:
    "&trackUri, trackName, trackDuration, albumUri, trackPlayCount, trackIsrc, ignoreDuplicates",
});

async function fetchEditablePlaylists(): Promise<object[]> {
  const playlists = await fetchAllLibraryContents();
  return playlists.filter((item: any) => item.type === "playlist" && item.canAddTo);
}
async function fetchPlaylistTracksAndCache(playlistUri: string): Promise<{ items: any[] }> {
  const { items } = await fetchAllPlaylistTracks(playlistUri);

  const trackUris: string[] = items.map((track: any) => track.uri);
  const existingTracks = await db.tracks.bulkGet(trackUris);
  const existingTracksMap = new Map<string, DbTrack>(
    existingTracks.filter((t): t is DbTrack => Boolean(t)).map((t: DbTrack) => [t.trackUri, t]),
  );

  const tracksToPut = items.reduce((acc: DbTrack[], item: any) => {
    const existing: DbTrack | undefined = existingTracksMap.get(item.uri);
    if (!existing || existing.trackName !== item.name || existing.albumUri !== item.album.uri) {
      acc.push({
        trackUri: item.uri,
        trackName: item.name,
        albumUri: item.album.uri,
        trackDuration: existing?.trackDuration ?? null,
        trackPlayCount: existing?.trackPlayCount ?? null,
        trackIsrc: existing?.trackIsrc ?? null,
      });
    }
    return acc;
  }, [] as DbTrack[]);

  if (tracksToPut.length > 0) {
    await db.tracks.bulkPut(tracksToPut);
  }

  return { items };
}

async function fetchISRCsForTracksWithCache(
  tracks: any[],
): Promise<{ isrcMap: Map<string, string> }> {
  const isrcMap = new Map<string, string>();
  const tracksToFetch: any[] = [];
  const validTracks = tracks.filter((track: any) => track?.uri);
  const trackUris: string[] = validTracks.map((track: any) => track.uri);
  if (trackUris.length === 0) return { isrcMap };

  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map<string, DbTrack>(
    cachedTracksData
      .filter((t: DbTrack | undefined): t is DbTrack => Boolean(t))
      .map((t: DbTrack) => [t.trackUri, t]),
  );

  for (const track of validTracks) {
    const cachedTrack = cachedTracksMap.get(track.uri);
    if (cachedTrack?.trackIsrc) {
      isrcMap.set(track.uri, cachedTrack.trackIsrc);
    } else {
      tracksToFetch.push(track);
    }
  }

  if (tracksToFetch.length > 0) {
    const fetchedTracksFromAPI = await fetchWebAPIForTracks(tracksToFetch.map((t: any) => t.uri));
    const updatesForDb: Array<{ key: string; changes: { trackIsrc: string } }> = [];

    for (const [trackUri, track] of fetchedTracksFromAPI.entries()) {
      const trackIsrc = (track as any)?.external_ids?.isrc;
      if (trackIsrc) {
        isrcMap.set(trackUri, trackIsrc);
        updatesForDb.push({ key: trackUri, changes: { trackIsrc } });
      }
    }

    if (updatesForDb.length > 0) {
      await db.tracks.bulkUpdate(updatesForDb);
    }
  }
  return { isrcMap };
}
async function fetchPlayCountsAndDurationForTracksWithCache(
  tracks: any[],
): Promise<{ trackPlayCountMap: Map<string, number>; trackDurationMap: Map<string, number> }> {
  const trackPlayCountMap = new Map<string, number>();
  const trackDurationMap = new Map<string, number>();
  const tracksToFetch: any[] = [];
  const validTracks = tracks.filter((track: any) => track?.uri);
  const trackUris: string[] = validTracks.map((track: any) => track.uri);
  if (trackUris.length === 0) return { trackPlayCountMap, trackDurationMap };

  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map<string, DbTrack>(
    cachedTracksData
      .filter((t: DbTrack | undefined): t is DbTrack => Boolean(t))
      .map((t: DbTrack) => [t.trackUri, t]),
  );

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
    const albumUrisToFetch = new Set(tracksToFetch.map((t: any) => t.album.uri).filter(Boolean));
    const fetchedDataFromAPI = await fetchGraphQLForAlbumTracks(albumUrisToFetch);
    const updatesForDb: Array<{
      key: string;
      changes: { trackPlayCount: number | null; trackDuration: number | null };
    }> = [];

    for (const [trackUri, track] of fetchedDataFromAPI.entries()) {
      const trackPlayCount = (track as any).playcount
        ? Number.parseInt((track as any).playcount, 10)
        : null;
      const trackDuration = (track as any).duration?.totalMilliseconds ?? null;

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

const normalizeForSimilarity = (name: string): string => {
  const settings = getSettings();

  const termsToRemove = [...settings.defaultNormalizeWords, ...settings.customNormalizeWords]
    .filter((w: string) => typeof w === "string")
    .map((w: string) => w.trim())
    .filter((w: string) => w.length > 0);

  const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regexRemoveTerms =
    termsToRemove.length > 0
      ? new RegExp(`\\b(${termsToRemove.map(escapeRegex).join("|")})\\b`, "gi")
      : null;

  const normalized = name
    .toLowerCase()

    .replace(/\(.*?\)|\[.*?\]/g, "")

    .replace(/-/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")

    .replace(/\s+/g, " ")

    .trim();

  return regexRemoveTerms
    ? normalized.replace(regexRemoveTerms, "").replace(/\s+/g, " ").trim()
    : normalized;
};

interface TrackDetailsProps {
  track: Track;
  trackPlayCounts: Map<string, number>;
  trackIsrcs: Map<string, string>;
}

const TrackDetails = memo(({ track, trackPlayCounts, trackIsrcs }: TrackDetailsProps) => {
  const trackPlayCount: number | undefined = trackPlayCounts.get(track.uri);
  const displayCount: string = trackPlayCount != null ? trackPlayCount.toLocaleString() : "N/A";
  const trackIsrc: string = trackIsrcs.get(track.uri) || "N/A";
  const albumName: string = track.album?.name || "N/A";
  const artists: string = track.artists?.map((a: { name: string }) => a.name).join(", ") || "N/A";
  return (
    <div className="track-details">
      <div className="track-details__line">
        <span className="track-details__artists">Artists: {artists}</span>
        <span className="track-details__album">Album: {albumName}</span>
      </div>
      <div className="track-details__line">
        <span className="track-details__playcount">Plays: {displayCount}</span>
        <span className="track-details__isrc">ISRC: {trackIsrc}</span>
      </div>
    </div>
  );
});
interface TrackControlsProps {
  trackUri: string;
  trackDuration: number | undefined;
}

const TrackControls = memo(({ trackUri, trackDuration }: TrackControlsProps) => {
  const {
    position,
    duration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease,
  } = usePlayer(trackUri, trackDuration);

  const formatTime = (ms: number | undefined): string => {
    if (ms == null || Number.isNaN(ms) || ms < 0) return "N/A";
    const totalSeconds: number = Math.floor(ms / 1000);
    const minutes: number = Math.floor(totalSeconds / 60);
    const seconds: number = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const leftText: string = formatTime(position);
  const rightText: string = formatTime(duration);

  return (
    <div className="duplicate-group__playback-controls">
      <button className="duplicate-group__playback-button" onClick={togglePlay} type="button">
        {isCurrentlyPlayingThisTrack ? <Icons.React.pause /> : <Icons.React.play />}
      </button>
      <span className="slider-time">{leftText}</span>
      <Slider
        {...{
          max: duration || 0,
          min: 0,
          onChange: handleSliderChange,
          onRelease: handleSliderRelease,
          step: 1,
          value: position || 0,
        }}
      />
      <span className="slider-time">{rightText}</span>
    </div>
  );
});

interface DuplicateItemProps {
  track: Track;
  category: string;
  groupIndex: number;
  onDelete: (category: string, groupIndex: number, track: Track) => void;
  isSource?: boolean;
  trackPlayCounts: Map<string, number>;
  trackIsrcs: Map<string, string>;
  trackDurations: Map<string, number>;
}

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
  }: DuplicateItemProps) => (
    <div className={`duplicate-group__duplicate-item duplicate-group__item--${category}`}>
      <div className="duplicate-group__duplicate-info">
        <div className="duplicate-group__duplicate-content">
          <span className="duplicate-group__duplicate-name">
            {isSource ? "Source: " : ""}
            {track.name}
          </span>
          <TrackDetails track={track} trackIsrcs={trackIsrcs} trackPlayCounts={trackPlayCounts} />
        </div>
        <button
          className="duplicate-group__delete-button"
          onClick={() => onDelete(category, groupIndex, track)}
          type="button"
        >
          Delete
        </button>
      </div>
      <div className="duplicate-group__actions">
        <TrackControls trackDuration={trackDurations.get(track.uri)} trackUri={track.uri} />
      </div>
    </div>
  ),
);

interface DuplicateGroupComponentProps {
  group: DuplicateGroup;
  category: "exact" | "isrc" | "likely" | "possible";
  groupIndex: number;
  onDelete: (
    category: "exact" | "isrc" | "likely" | "possible",
    groupIndex: number,
    track: Track,
  ) => void;
  trackPlayCounts: Map<string, number>;
  trackIsrcs: Map<string, string>;
  trackDurations: Map<string, number>;
}

const DuplicateGroupComponent = memo(
  ({
    group,
    category,
    groupIndex,
    onDelete,
    trackPlayCounts,
    trackIsrcs,
    trackDurations,
  }: DuplicateGroupComponentProps) => (
    <div
      className={`duplicate-group__item duplicate-group__item--${category}`}
      key={`${group.mainTrack.uri}-${group.mainTrack.uid || groupIndex}`}
    >
      <DuplicateItem
        category={category}
        groupIndex={groupIndex}
        isSource
        onDelete={onDelete}
        track={group.mainTrack}
        trackDurations={trackDurations}
        trackIsrcs={trackIsrcs}
        trackPlayCounts={trackPlayCounts}
      />
      <div className="duplicate-group__duplicates-label">Duplicates:</div>
      <div className="duplicate-group__duplicates-list">
        {group.duplicates.map((dup: Track) => (
          <DuplicateItem
            category={category}
            groupIndex={groupIndex}
            key={`${dup.uri}-${dup.uid || dup.uri}`}
            onDelete={onDelete}
            track={dup}
            trackDurations={trackDurations}
            trackIsrcs={trackIsrcs}
            trackPlayCounts={trackPlayCounts}
          />
        ))}
      </div>
    </div>
  ),
);

interface DuplicateGroupListProps {
  title: string;

  groups: DuplicateGroup[];

  category: "exact" | "isrc" | "likely" | "possible";
  onDelete: (
    category: "exact" | "isrc" | "likely" | "possible",
    groupIndex: number,
    track: Track,
  ) => void;

  trackPlayCounts: Map<string, number>;

  trackIsrcs: Map<string, string>;

  trackDurations: Map<string, number>;
}

const DuplicateGroupList = memo(
  ({
    title,
    groups,
    category,
    onDelete,
    trackPlayCounts,
    trackIsrcs,
    trackDurations,
  }: DuplicateGroupListProps) => {
    const settings = getSettings();
    if (!settings.groupSettings[category]) return null;

    return (
      <div className="duplicate-group">
        <div className="duplicate-group__heading">
          <div className="duplicate-group__heading-title">{title}</div>
          <div className="duplicate-group__heading-length">{groups.length} found</div>
        </div>
        {groups.length > 0 ? (
          <div className="duplicate-group__list">
            {groups.map((group: DuplicateGroup, index: number) => (
              <DuplicateGroupComponent
                category={category}
                group={group}
                groupIndex={index}
                key={`${group.mainTrack.uri}-${index}`}
                onDelete={onDelete}
                trackDurations={trackDurations}
                trackIsrcs={trackIsrcs}
                trackPlayCounts={trackPlayCounts}
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

function PlaylistDuplicateFinder({
  selectedPlaylist: initialSelectedPlaylist,
}: {
  selectedPlaylist?: any;
}) {
  const [ownedPlaylists, setOwnedPlaylists] = useState<any[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<any>(initialSelectedPlaylist || null);
  const [playlistTracks, setPlaylistTracks] = useState<Track[]>([]);
  const [trackPlayCounts, setTrackPlayCounts] = useState<Map<string, number>>(new Map());
  const [trackDurations, setTrackDurations] = useState<Map<string, number>>(new Map());
  const [trackIsrcs, setTrackIsrcs] = useState<Map<string, string>>(new Map());
  const [duplicateGroups, setDuplicateGroups] = useState<DuplicateGroups>({
    exact: [],
    isrc: [],
    likely: [],
    possible: [],
  });

  useEffect(() => {
    let isMounted: boolean = true;
    (async () => {
      const playlists: any[] = await fetchEditablePlaylists();
      if (!isMounted) return;
      setOwnedPlaylists(playlists);
      setSelectedPlaylist(initialSelectedPlaylist || playlists[0] || null);
    })();
    return () => {
      isMounted = false;
    };
  }, [initialSelectedPlaylist]);

  const handlePlaylistChange = (uri: string | number): void => {
    const newPlaylist: any = ownedPlaylists.find((p: any) => p.uri === uri);
    if (newPlaylist) setSelectedPlaylist(newPlaylist);
  };
  const findPotentialDuplicates = useCallback(
    (
      tracks: Track[],
      trackPlayCountMap: Map<string, number>,
      trackIsrcMap: Map<string, string>,
    ) => {
      const processedUris = new Set<string>();
      const groupAndFilter = (
        list: Track[],
        keyFn: (t: Track) => string | undefined,
        normalizer: (key: string | undefined) => string | undefined,
      ): DuplicateGroup[] => {
        const groups = new Map<string, Track[]>();

        for (const t of list) {
          if (processedUris.has(t.uri)) continue;
          const key: string | undefined = normalizer(keyFn(t));
          if (!key) continue;

          groups.set(key, groups.get(key) || []);
          groups.get(key)?.push(t);
        }
        const duplicatesResult: DuplicateGroup[] = [];

        for (const group of groups.values()) {
          if (group.length > 1) {
            group.sort(
              (a: Track, b: Track) =>
                (trackPlayCountMap.get(b.uri) ?? 0) - (trackPlayCountMap.get(a.uri) ?? 0),
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
          (t: Track) => t.uri,
          (k: string | undefined) => k,
        ),
        isrc: groupAndFilter(
          tracks,
          (t: Track) => trackIsrcMap.get(t.uri),
          (k: string | undefined) => k,
        ),
        likely: groupAndFilter(
          tracks,
          (t: Track) => t.name,
          (name: string | undefined) => name?.trim(),
        ),
        possible: groupAndFilter(
          tracks,
          (t: Track) => t.name,
          (name: string | undefined) => (name ? normalizeForSimilarity(name) : undefined),
        ),
      });
    },
    [],
  );

  const removeTrackFromPlaylist = async (trackToRemove: Track): Promise<void> => {
    await Spicetify.Platform.PlaylistAPI.remove(selectedPlaylist.uri, [{ uid: trackToRemove.uid }]);
    setPlaylistTracks((prevTracks: Track[]) =>
      prevTracks.filter(
        (track: Track) => !(track.uri === trackToRemove.uri && track.uid === trackToRemove.uid),
      ),
    );
  };

  const handleDeleteTrack = async (
    duplicateCategory: "exact" | "isrc" | "likely" | "possible",
    _groupIndex: number,
    trackToRemove: Track,
  ): Promise<void> => {
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
      onClose: () => {},
      onOpen: () => {},
      onOutside: () => {},
      confirmLabel: "Remove",
      allowHTML: false,
    });
  };

  useEffect(() => {
    setPlaylistTracks([]);
    setDuplicateGroups({ exact: [], isrc: [], likely: [], possible: [] });
    setTrackPlayCounts(new Map());
    setTrackIsrcs(new Map());
    setTrackDurations(new Map());

    const loadData = async (): Promise<void> => {
      if (!selectedPlaylist?.uri) return;

      const playlistData: { items: any[] } = await fetchPlaylistTracksAndCache(
        selectedPlaylist.uri,
      );
      const fetchedTracks: Track[] = playlistData.items;
      setPlaylistTracks(fetchedTracks);

      if (fetchedTracks.length > 0) {
        const [fetchedTrackPlayCountsAndDurationResult, fetchedTrackIsrcResult] = await Promise.all(
          [
            fetchPlayCountsAndDurationForTracksWithCache(fetchedTracks),
            fetchISRCsForTracksWithCache(fetchedTracks),
          ],
        );

        setTrackPlayCounts(fetchedTrackPlayCountsAndDurationResult.trackPlayCountMap);
        setTrackDurations(fetchedTrackPlayCountsAndDurationResult.trackDurationMap);
        setTrackIsrcs(fetchedTrackIsrcResult.isrcMap);
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

  const playlistOptions = ownedPlaylists.map((p: any) => ({ value: p.uri, label: p.name }));
  return (
    <div className="find-duplicates">
      <div className="find-duplicates__header">
        <span className="find-duplicates__header-label">Select Playlist:</span>
        <Dropdown
          disabled={ownedPlaylists.length === 0}
          onChange={handlePlaylistChange}
          options={playlistOptions}
          value={selectedPlaylist?.uri || ""}
        />
      </div>
      <DuplicateGroupList
        category="exact"
        groups={duplicateGroups.exact}
        onDelete={handleDeleteTrack}
        title="Exact URI Matches"
        trackDurations={trackDurations}
        trackIsrcs={trackIsrcs}
        trackPlayCounts={trackPlayCounts}
      />
      <DuplicateGroupList
        category="isrc"
        groups={duplicateGroups.isrc}
        onDelete={handleDeleteTrack}
        title="Same ISRC"
        trackDurations={trackDurations}
        trackIsrcs={trackIsrcs}
        trackPlayCounts={trackPlayCounts}
      />
      <DuplicateGroupList
        category="likely"
        groups={duplicateGroups.likely}
        onDelete={handleDeleteTrack}
        title="Same Title (Likely Duplicates)"
        trackDurations={trackDurations}
        trackIsrcs={trackIsrcs}
        trackPlayCounts={trackPlayCounts}
      />
      <DuplicateGroupList
        category="possible"
        groups={duplicateGroups.possible}
        onDelete={handleDeleteTrack}
        title="Similar Title (Possible Duplicates)"
        trackDurations={trackDurations}
        trackIsrcs={trackIsrcs}
        trackPlayCounts={trackPlayCounts}
      />
    </div>
  );
}

export default PlaylistDuplicateFinder;
