import Dexie, { type Table } from "dexie";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { fetchAllLibraryContents } from "../../../shared/api/fetchAllLibraryContents.ts";
import { fetchAllPlaylistTracks } from "../../../shared/api/fetchAllPlaylistTracks.ts";
import { fetchGraphQLForAlbumTracks } from "../../../shared/api/fetchGraphQLForAlbumTracks.ts";
import { fetchWebAPIForTracks } from "../../../shared/api/fetchWebAPIForTracks.ts";
import { ConfirmDialog } from "../../../shared/components/confirmDialog.tsx";
import { Dropdown } from "../../../shared/components/dropdown.tsx";
import { Icons } from "../../../shared/components/icons.tsx";
import { Slider } from "../../../shared/components/slider.tsx";
import { usePlayer } from "../../../shared/hooks/usePlayer.ts";
import { getSettings } from "./settings.tsx";

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

const DUPLICATE_CATEGORIES = ["exact", "isrc", "likely", "possible", "probable"] as const;
type DuplicateCategory = (typeof DUPLICATE_CATEGORIES)[number];

interface PlaylistSummary {
  uri: string;
  name: string;
  type: "playlist" | string;
  canAddTo?: boolean;
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

type DuplicateGroups = Record<DuplicateCategory, DuplicateGroup[]>;

class FindDupeTracksDB extends Dexie {
  public tracks!: Table<DbTrack, string>;

  constructor() {
    super("findDupeTracks");
    this.version(0.1).stores({
      tracks:
        "&trackUri, trackName, trackDuration, albumUri, trackPlayCount, trackIsrc, ignoreDuplicates",
    });
  }
}

const db = new FindDupeTracksDB();

async function fetchEditablePlaylists(): Promise<PlaylistSummary[]> {
  const playlists = await fetchAllLibraryContents();
  return (playlists as PlaylistSummary[]).filter(
    (item) => item.type === "playlist" && Boolean(item.canAddTo),
  );
}

async function fetchPlaylistTracksAndCache(playlistUri: string): Promise<{ items: Track[] }> {
  const response = await fetchAllPlaylistTracks(playlistUri);
  const items = response.items as Track[];

  const trackUris: string[] = items.map((track) => track.uri);
  const existingTracks = await db.tracks.bulkGet(trackUris);
  const existingTracksMap = new Map(
    existingTracks.filter((t): t is DbTrack => Boolean(t)).map((t) => [t.trackUri, t]),
  );

  const tracksToPut: DbTrack[] = items.flatMap((item) => {
    const existing = existingTracksMap.get(item.uri);
    if (!existing || existing.trackName !== item.name || existing.albumUri !== item.album.uri) {
      return [
        {
          trackUri: item.uri,
          trackName: item.name,
          albumUri: item.album.uri,
          trackDuration: existing?.trackDuration ?? null,
          trackPlayCount: existing?.trackPlayCount ?? null,
          trackIsrc: existing?.trackIsrc ?? null,
        } satisfies DbTrack,
      ];
    }
    return [] as DbTrack[];
  });

  if (tracksToPut.length > 0) {
    await db.tracks.bulkPut(tracksToPut);
  }

  return { items };
}

async function fetchISRCsForTracksWithCache(
  tracks: Track[],
): Promise<{ isrcMap: Map<string, string> }> {
  const isrcMap = new Map<string, string>();
  const tracksToFetch: Track[] = [];
  const validTracks = tracks.filter((track) => track?.uri);
  const trackUris: string[] = validTracks.map((track) => track.uri);

  if (trackUris.length === 0) return { isrcMap };

  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map(
    cachedTracksData.filter((t): t is DbTrack => Boolean(t)).map((t) => [t.trackUri, t]),
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
    const fetchedTracksFromAPI = await fetchWebAPIForTracks(tracksToFetch.map((t) => t.uri));
    interface WebApiTrack {
      external_ids?: { isrc?: string };
    }
    const updatesForDb: Array<{ key: string; changes: { trackIsrc: string } }> = [];

    for (const [trackUri, track] of fetchedTracksFromAPI.entries()) {
      const trackIsrc = (track as unknown as WebApiTrack)?.external_ids?.isrc;
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

async function fetchPlayCountsAndDurationForTracksWithCache(tracks: Track[]): Promise<{
  trackPlayCountMap: Map<string, number>;
  trackDurationMap: Map<string, number>;
}> {
  const trackPlayCountMap = new Map<string, number>();
  const trackDurationMap = new Map<string, number>();
  const tracksToFetch: Track[] = [];
  const validTracks = tracks.filter((track) => track?.uri);
  const trackUris: string[] = validTracks.map((track) => track.uri);

  if (trackUris.length === 0) return { trackPlayCountMap, trackDurationMap };

  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map(
    cachedTracksData.filter((t): t is DbTrack => Boolean(t)).map((t) => [t.trackUri, t]),
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
    const albumUrisToFetch = new Set(tracksToFetch.map((t) => t.album.uri).filter(Boolean));
    const fetchedDataFromAPI = await fetchGraphQLForAlbumTracks(albumUrisToFetch);
    const updatesForDb: Array<{
      key: string;
      changes: { trackPlayCount: number | null; trackDuration: number | null };
    }> = [];

    for (const [trackUri, track] of fetchedDataFromAPI.entries()) {
      interface GraphQLTrack {
        playcount?: string | number | null;
        duration?: { totalMilliseconds?: number | null };
      }
      const t = track as unknown as GraphQLTrack;
      const trackPlayCount = t.playcount != null ? Number.parseInt(String(t.playcount), 10) : null;
      const trackDuration = t.duration?.totalMilliseconds ?? null;

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

interface TrackDetailsProps {
  track: Track;
  trackPlayCounts: Map<string, number>;
  trackIsrcs: Map<string, string>;
}

const TrackDetails = memo(function TrackDetails({
  track,
  trackPlayCounts,
  trackIsrcs,
}: TrackDetailsProps) {
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

const TrackControls = memo(function TrackControls({ trackUri, trackDuration }: TrackControlsProps) {
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
  category: DuplicateCategory;
  groupIndex: number;
  onDelete: (category: DuplicateCategory, track: Track) => void;
  isSource?: boolean;
  trackPlayCounts: Map<string, number>;
  trackIsrcs: Map<string, string>;
  trackDurations: Map<string, number>;
}

const DuplicateItem = memo(function DuplicateItem({
  track,
  category,
  onDelete,
  isSource,
  trackPlayCounts,
  trackIsrcs,
  trackDurations,
}: DuplicateItemProps) {
  return (
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
          onClick={() => onDelete(category, track)}
          type="button"
        >
          Delete
        </button>
      </div>
      <div className="duplicate-group__actions">
        <TrackControls trackDuration={trackDurations.get(track.uri)} trackUri={track.uri} />
      </div>
    </div>
  );
});

interface DuplicateGroupComponentProps {
  group: DuplicateGroup;
  category: DuplicateCategory;
  groupIndex: number;
  onDelete: (category: DuplicateCategory, track: Track) => void;
  trackPlayCounts: Map<string, number>;
  trackIsrcs: Map<string, string>;
  trackDurations: Map<string, number>;
}

const DuplicateGroupComponent = memo(function DuplicateGroupComponent({
  group,
  category,
  groupIndex,
  onDelete,
  trackPlayCounts,
  trackIsrcs,
  trackDurations,
}: DuplicateGroupComponentProps) {
  return (
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
  );
});

interface DuplicateGroupListProps {
  title: string;
  groups: DuplicateGroup[];
  category: DuplicateCategory;
  onDelete: (category: DuplicateCategory, track: Track) => void;
  trackPlayCounts: Map<string, number>;
  trackIsrcs: Map<string, string>;
  trackDurations: Map<string, number>;
}

const DuplicateGroupList = memo(function DuplicateGroupList({
  title,
  groups,
  category,
  onDelete,
  trackPlayCounts,
  trackIsrcs,
  trackDurations,
}: DuplicateGroupListProps) {
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
        <div className="duplicate-group__empty">No duplicates found in this category.</div>
      )}
    </div>
  );
});

const findPotentialDuplicates = (
  tracks: Track[],
  trackPlayCountMap: Map<string, number>,
  trackIsrcMap: Map<string, string>,
): DuplicateGroups => {
  const processedUris = new Set<string>();

  const groupAndFilter = (
    list: Track[],
    keyFn: (t: Track) => string | undefined,
    normalizer: (key: string | undefined) => string | undefined,
  ): DuplicateGroup[] => {
    const unprocessedTracks = list.filter((t) => !processedUris.has(t.uri));

    const tracksWithKey = unprocessedTracks.filter((t) => {
      const k = normalizer(keyFn(t));
      return k != null && k !== "";
    });

    const groups = Object.groupBy(tracksWithKey, (t: Track) => normalizer(keyFn(t)) as PropertyKey);

    const duplicatesResult: DuplicateGroup[] = [];

    for (const group of Object.values(groups)) {
      if (group && group.length > 1) {
        const sorted = group.toSorted(
          (a: Track, b: Track) =>
            (trackPlayCountMap.get(b.uri) ?? 0) - (trackPlayCountMap.get(a.uri) ?? 0),
        );
        for (const t of sorted) processedUris.add(t.uri);
        duplicatesResult.push({ mainTrack: sorted[0], duplicates: sorted.slice(1) });
      }
    }

    return duplicatesResult.sort((a, b) => {
      const aPlayCount = trackPlayCountMap.get(a.mainTrack.uri) ?? 0;
      const bPlayCount = trackPlayCountMap.get(b.mainTrack.uri) ?? 0;
      if (bPlayCount !== aPlayCount) return bPlayCount - aPlayCount;
      return a.mainTrack.name.localeCompare(b.mainTrack.name);
    });
  };

  return {
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
    probable: groupAndFilter(
      tracks,
      (t: Track) => {
        const sortedArtists = t.artists.map((a) => a.name).sort();
        return `${t.name}|${sortedArtists[0] || ""}`;
      },
      (k: string | undefined) => k?.toLowerCase().trim(),
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
  };
};

function PlaylistDuplicateFinder({
  selectedPlaylist: initialSelectedPlaylist,
}: {
  selectedPlaylist?: PlaylistSummary;
}) {
  const [ownedPlaylists, setOwnedPlaylists] = useState<PlaylistSummary[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<PlaylistSummary | null>(
    initialSelectedPlaylist || null,
  );
  const [playlistTracks, setPlaylistTracks] = useState<Track[]>([]);
  const [trackPlayCounts, setTrackPlayCounts] = useState<Map<string, number>>(new Map());
  const [trackDurations, setTrackDurations] = useState<Map<string, number>>(new Map());
  const [trackIsrcs, setTrackIsrcs] = useState<Map<string, string>>(new Map());
  const [duplicateGroups, setDuplicateGroups] = useState<DuplicateGroups>({
    exact: [],
    isrc: [],
    probable: [],
    likely: [],
    possible: [],
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const playlists: PlaylistSummary[] = await fetchEditablePlaylists();
      if (cancelled) return;
      setOwnedPlaylists(playlists);
      setSelectedPlaylist(initialSelectedPlaylist || playlists.at(0) || null);
    })();
    return () => {
      cancelled = true;
    };
  }, [initialSelectedPlaylist]);

  const handlePlaylistChange = useCallback(
    (uri: string) => {
      const newPlaylist = ownedPlaylists.find((p) => p.uri === uri) ?? null;
      setSelectedPlaylist(newPlaylist);
    },
    [ownedPlaylists],
  );

  const removeTrackFromPlaylist = useCallback(
    async (trackToRemove: Track): Promise<void> => {
      if (!selectedPlaylist) return;

      const PlaylistAPI =
        Spicetify.Platform.PlaylistAPI ||
        Spicetify.Platform.Registry.resolve(Symbol.for("PlaylistAPI"));

      await PlaylistAPI.remove(selectedPlaylist.uri, [
        {
          uid: trackToRemove.uid,
        },
      ]);
      setPlaylistTracks((prevTracks: Track[]) =>
        prevTracks.filter(
          (track: Track) => !(track.uri === trackToRemove.uri && track.uid === trackToRemove.uid),
        ),
      );
    },
    [selectedPlaylist],
  );

  const handleDeleteTrack = useCallback(
    async (duplicateCategory: DuplicateCategory, trackToRemove: Track): Promise<void> => {
      const settings = getSettings();
      if (!settings.confirmSettings[duplicateCategory]) {
        await removeTrackFromPlaylist(trackToRemove);
        return;
      }
      ConfirmDialog({
        titleText: "Remove Track",
        descriptionText: `Are you sure you want to remove "${trackToRemove.name}"? This cannot be undone.`,
        confirmText: "Remove",
        onConfirm: () => void removeTrackFromPlaylist(trackToRemove),
        confirmLabel: "Remove",
        allowHTML: false,
      });
    },
    [removeTrackFromPlaylist],
  );

  useEffect(() => {
    setPlaylistTracks([]);
    setDuplicateGroups({
      exact: [],
      isrc: [],
      probable: [],
      likely: [],
      possible: [],
    });
    setTrackPlayCounts(new Map());
    setTrackIsrcs(new Map());
    setTrackDurations(new Map());

    let cancelled = false;
    const loadData = async (): Promise<void> => {
      if (!selectedPlaylist?.uri) return;

      const playlistData: { items: Track[] } = await fetchPlaylistTracksAndCache(
        selectedPlaylist.uri,
      );
      if (cancelled) return;

      const fetchedTracks: Track[] = playlistData.items;
      setPlaylistTracks(fetchedTracks);

      if (fetchedTracks.length > 0) {
        const [fetchedTrackPlayCountsAndDurationResult, fetchedTrackIsrcResult] = await Promise.all(
          [
            fetchPlayCountsAndDurationForTracksWithCache(fetchedTracks),
            fetchISRCsForTracksWithCache(fetchedTracks),
          ],
        );
        if (cancelled) return;

        setTrackPlayCounts(fetchedTrackPlayCountsAndDurationResult.trackPlayCountMap);
        setTrackDurations(fetchedTrackPlayCountsAndDurationResult.trackDurationMap);
        setTrackIsrcs(fetchedTrackIsrcResult.isrcMap);
      }
    };
    void loadData();
    return () => {
      cancelled = true;
    };
  }, [selectedPlaylist]);

  useEffect(() => {
    if (playlistTracks.length === 0) {
      setDuplicateGroups({
        exact: [],
        isrc: [],
        probable: [],
        likely: [],
        possible: [],
      });
    } else if (trackPlayCounts.size > 0 || trackIsrcs.size > 0) {
      setDuplicateGroups(findPotentialDuplicates(playlistTracks, trackPlayCounts, trackIsrcs));
    }
  }, [playlistTracks, trackPlayCounts, trackIsrcs]);

  const playlistOptions = useMemo(
    () => ownedPlaylists.map((p) => ({ value: p.uri, label: p.name })),
    [ownedPlaylists],
  );

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
        category="probable"
        groups={duplicateGroups.probable}
        onDelete={handleDeleteTrack}
        title="Same Title + Same artist (Probable Duplicates)"
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
