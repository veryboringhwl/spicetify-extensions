import { Temporal } from "@js-temporal/polyfill";
import Dexie, { type Table } from "dexie";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { fetchAllLibraryContents } from "../../../shared/api/fetchAllLibraryContents.ts";
import { fetchAllPlaylistTracks } from "../../../shared/api/fetchAllPlaylistTracks.ts";
import { fetchGraphQLForTracks } from "../../../shared/api/fetchGraphQLForTracks.ts";
import { fetchWebAPIForTracks } from "../../../shared/api/fetchWebAPIForTracks.ts";
import { ConfirmDialog } from "../../../shared/components/confirmDialog.tsx";
import { Dropdown } from "../../../shared/components/dropdown.tsx";
import { Icons } from "../../../shared/components/icons.tsx";
import { type Option, OptionRow } from "../../../shared/components/optionRow.tsx";
import { PopupModal } from "../../../shared/components/popupModal.tsx";
import { Slider } from "../../../shared/components/slider.tsx";
import { spotifyComponents } from "../../../shared/components/spotifyComponents.tsx";
import { usePlayer } from "../../../shared/hooks/usePlayer.ts";

spotifyComponents();

class DebugTimer {
  private starts: Map<string, number> = new Map();

  start(label: string) {
    this.starts.set(label, performance.now());
  }

  end(label: string) {
    const startTime = this.starts.get(label);
    if (startTime) {
      const duration = performance.now() - startTime;
      console.debug(`[Debug] ${label}: ${duration.toFixed(2)}ms`);
      this.starts.delete(label);
    }
  }
}
const perf = new DebugTimer();

type DuplicateCategory = "exact" | "isrc" | "probable" | "likely" | "possible" | "maybe";
const CATEGORIES: ReadonlyArray<DuplicateCategory> = [
  "exact",
  "isrc",
  "probable",
  "likely",
  "possible",
  "maybe",
];

interface Track {
  readonly uri: string;
  readonly name: string;
  readonly album: { readonly uri: string; readonly name: string };
  readonly artists: ReadonlyArray<{ readonly name: string }>;
  readonly uid: string;
}

interface TrackDetails {
  readonly playCount: number | null;
  readonly duration: number | null;
  readonly isrc: string | null;
  readonly releaseDate: string | null;
}

interface DetailedTrack extends Track, TrackDetails {
  readonly normalisedName: string;
  readonly normalisedFuzzy: string;
}

interface PlaylistSummary {
  readonly uri: string;
  readonly name: string;
  readonly type: string;
  readonly canAddTo?: boolean;
}

interface DuplicateGroup {
  readonly mainTrack: DetailedTrack;
  readonly duplicates: ReadonlyArray<DetailedTrack>;
}

type DuplicateResults = Record<DuplicateCategory, ReadonlyArray<DuplicateGroup>>;

interface Settings {
  readonly groupSettings: Record<DuplicateCategory, boolean>;
  readonly confirmSettings: Record<DuplicateCategory, boolean>;
  readonly defaultNormaliseWords: ReadonlyArray<string>;
  readonly customNormaliseWords: ReadonlyArray<string>;
}

interface DbTrack {
  trackUri: string;
  trackName: string;
  trackDuration: number | null;
  trackPlayCount: number | null;
  trackIsrc: string | null;
  albumUri: string;
  albumReleaseDate: string | null;
  lastUpdated: string;
  ignoreDuplicates?: string;
}

class FindDupeTracks extends Dexie {
  public tracks!: Table<DbTrack, string>;

  constructor() {
    super("findDupeTracks");
    this.version(0.1).stores({
      tracks:
        "&trackUri, trackName, trackDuration, trackPlayCount, trackIsrc, albumUri, albumReleaseDate, lastUpdated, ignoreDuplicates",
    });
  }
}

const db = new FindDupeTracks();
(globalThis as any).findDupeTracks = db;

const DEFAULT_SETTINGS: Settings = {
  groupSettings: {
    exact: true,
    isrc: true,
    probable: true,
    likely: true,
    possible: true,
    maybe: false,
  },
  confirmSettings: {
    exact: false,
    isrc: false,
    probable: true,
    likely: true,
    possible: true,
    maybe: true,
  },
  defaultNormaliseWords: [
    "live",
    "remix",
    "mix",
    "acoustic",
    "inst",
    "instrumental",
    "radio",
    "version",
    "ver",
    "edit",
    "mono",
    "stereo",
    "deluxe",
    "demo",
    "rehearsal",
    "intro",
    "outro",
    "remaster",
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
  ],
  customNormaliseWords: [],
};

const SETTINGS_KEY = "findDupeTracks:settings";

const settingsStore = {
  listeners: new Set<() => void>(),
  snapshot: (() => {
    try {
      const stored = localStorage.getItem(SETTINGS_KEY);
      return stored ? { ...DEFAULT_SETTINGS, ...JSON.parse(stored) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  })(),
  subscribe(listener: () => void) {
    settingsStore.listeners.add(listener);
    return () => settingsStore.listeners.delete(listener);
  },
  getSnapshot() {
    return settingsStore.snapshot;
  },
  update(newSettings: Settings) {
    settingsStore.snapshot = newSettings;
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
    settingsStore.listeners.forEach((l) => {
      l();
    });
  },
};

const useSettings = () => useSyncExternalStore(settingsStore.subscribe, settingsStore.getSnapshot);

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const normaliseString = (name: string, regex: RegExp): string => {
  return name
    .toLowerCase()
    .replace(/\(.*?\)|\[.*?\]/g, "")
    .replace(regex, "")
    .replace(/-/g, " ")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
};

const calculateSimilarity = (str1: string, str2: string): number => {
  const s1 = str1.replace(/\s+/g, "");
  const s2 = str2.replace(/\s+/g, "");

  if (s1 === s2) return 1.0;
  if (s1.length < 2 || s2.length < 2) return 0;

  const bigrams = new Map<string, number>();
  for (let i = 0; i < s1.length - 1; i++) {
    const bg = s1.substring(i, i + 2);
    bigrams.set(bg, (bigrams.get(bg) || 0) + 1);
  }

  let intersection = 0;
  for (let i = 0; i < s2.length - 1; i++) {
    const bg = s2.substring(i, i + 2);
    const count = bigrams.get(bg) || 0;
    if (count > 0) {
      bigrams.set(bg, count - 1);
      intersection++;
    }
  }

  return (2.0 * intersection) / (s1.length + s2.length - 2);
};

function useOwnedPlaylists() {
  const [playlists, setPlaylists] = useState<ReadonlyArray<PlaylistSummary>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      perf.start("Fetch: All Playlists");
      const items = await fetchAllLibraryContents();
      if (!active) return;

      const valid = (items as PlaylistSummary[]).filter((i) => i.type === "playlist" && i.canAddTo);
      setPlaylists(valid);
      if (active) {
        setLoading(false);
        perf.end("Fetch: All Playlists");
      }
    };

    void load();
    return () => {
      active = false;
    };
  }, []);

  return { playlists, loading };
}

function usePlaylistTracks(playlistUri: string | undefined, settings: Settings) {
  const [tracks, setTracks] = useState<ReadonlyArray<DetailedTrack>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!playlistUri) {
      setTracks([]);
      return;
    }

    const abortController = new AbortController();
    setLoading(true);

    const loadData = async () => {
      perf.start("LOAD ALL DATA");

      const { items } = await fetchAllPlaylistTracks(playlistUri);
      if (abortController.signal.aborted) return;

      const rawTracks = items as Track[];
      const trackUris = rawTracks.map((t) => t.uri);

      const dbRecords = await db.tracks.bulkGet(trackUris);
      const cacheMap = new Map(
        dbRecords.filter((t): t is DbTrack => !!t).map((t) => [t.trackUri, t]),
      );

      const now = Temporal.Now.instant();
      const needsUpdate: Track[] = [];
      const detailedTracks: DetailedTrack[] = [];

      const regex = new RegExp(
        `\\b(${[...settings.defaultNormaliseWords, ...settings.customNormaliseWords]
          .map(escapeRegExp)
          .join("|")})\\b`,
        "gi",
      );

      for (const track of rawTracks) {
        const cached = cacheMap.get(track.uri);
        let isStale = false;

        if (!cached) {
          isStale = true;
        } else if (cached.lastUpdated) {
          try {
            const lastUpdate = Temporal.Instant.from(cached.lastUpdated);
            if (now.since(lastUpdate).total("days") >= 30) isStale = true;
          } catch {
            isStale = true;
          }
        } else {
          isStale = true;
        }

        if (isStale) needsUpdate.push(track);

        detailedTracks.push({
          ...track,
          playCount: cached?.trackPlayCount ?? null,
          duration: cached?.trackDuration ?? null,
          isrc: cached?.trackIsrc ?? null,
          releaseDate: cached?.albumReleaseDate ?? null,
          normalisedName: track.name.toLowerCase().trim(),
          normalisedFuzzy: normaliseString(track.name, regex),
        });
      }

      if (abortController.signal.aborted) return;

      setTracks(detailedTracks);

      if (needsUpdate.length === 0) {
        setLoading(false);
        perf.end("LOAD ALL DATA");
        return;
      }

      const [graphQLResult, webAPIResult] = await Promise.allSettled([
        fetchGraphQLForTracks(needsUpdate.map((t) => t.album.uri)),
        fetchWebAPIForTracks(needsUpdate.map((t) => t.uri)),
      ]);

      if (abortController.signal.aborted) return;

      const graphQLData = graphQLResult.status === "fulfilled" ? graphQLResult.value : null;
      const webAPIData = webAPIResult.status === "fulfilled" ? webAPIResult.value : null;

      const updates: DbTrack[] = [];
      const lastUpdated = now.toString();
      const updatedDetailedTracks = [...detailedTracks];

      needsUpdate.forEach((track) => {
        const graphQLTrack = graphQLData?.get(track.uri) as any;
        const webAPITrack = webAPIData?.get(track.uri) as any;

        const duration = graphQLTrack?.duration?.totalMilliseconds ?? null;
        const playCount = graphQLTrack?.playcount ? Number(graphQLTrack.playcount) : null;
        const isrc =
          webAPITrack?.external_ids?.isrc ??
          webAPITrack?.external_id?.find((e: any) => e?.type === "isrc")?.id ??
          null;

        const rawDate = webAPITrack?.album?.date;
        let releaseDate: string | null = null;
        if (typeof rawDate === "string") releaseDate = rawDate;
        else if (rawDate?.year) {
          releaseDate = `${rawDate.year}`;
          if (rawDate.month) releaseDate += `-${String(rawDate.month).padStart(2, "0")}`;
          if (rawDate.day) releaseDate += `-${String(rawDate.day).padStart(2, "0")}`;
        }

        updates.push({
          trackUri: track.uri,
          trackName: track.name,
          trackDuration: duration,
          trackPlayCount: playCount,
          trackIsrc: isrc,
          albumUri: track.album.uri,
          albumReleaseDate: releaseDate,
          lastUpdated,
        });

        const index = updatedDetailedTracks.findIndex((t) => t.uid === track.uid);
        if (index !== -1) {
          updatedDetailedTracks[index] = {
            ...updatedDetailedTracks[index],
            playCount,
            duration,
            isrc,
            releaseDate,
          };
        }
      });

      await db.tracks.bulkPut(updates);
      if (!abortController.signal.aborted) {
        setTracks(updatedDetailedTracks);
        perf.end("LOAD ALL DATA");
      }

      if (!abortController.signal.aborted) setLoading(false);
    };

    void loadData();
    return () => abortController.abort();
  }, [playlistUri, settings]);

  return { tracks, loading, setTracks };
}

function useDuplicateFinder(
  tracks: ReadonlyArray<DetailedTrack>,
  settings: Settings,
): DuplicateResults {
  return useMemo(() => {
    perf.start("Dupe Algorithm: Compute");
    const results: DuplicateResults = {
      exact: [],
      isrc: [],
      probable: [],
      likely: [],
      possible: [],
      maybe: [],
    };

    if (tracks.length < 2) {
      perf.end("Dupe Algorithm: Compute");
      return results;
    }

    const { groupSettings } = settings;
    let pool = [...tracks];
    const consumedUids = new Set<string>();

    const addGroup = (candidates: DetailedTrack[], category: DuplicateCategory) => {
      if (candidates.length < 2) return;

      const sorted = candidates.sort((a, b) => {
        const pDiff = (b.playCount ?? 0) - (a.playCount ?? 0);
        if (pDiff !== 0) return pDiff;
        const dA = a.releaseDate ?? "9999";
        const dB = b.releaseDate ?? "9999";
        return dA.localeCompare(dB);
      });

      (results[category] as DuplicateGroup[]).push({
        mainTrack: sorted[0],
        duplicates: sorted.slice(1),
      });

      candidates.forEach((c) => {
        consumedUids.add(c.uid);
      });
    };

    const flushConsumed = (hardFlush = true) => {
      pool = pool.filter((t) => !consumedUids.has(t.uid));
      if (hardFlush) consumedUids.clear();
    };

    if (groupSettings.exact) {
      const groups = Object.groupBy(pool, (t) => t.uri);
      for (const uri in groups) {
        const group = groups[uri];
        if (group) addGroup(group, "exact");
      }
      flushConsumed();
    }

    if (groupSettings.isrc) {
      const groups = Object.groupBy(pool, (t) => t.isrc || "");
      for (const isrc in groups) {
        const group = groups[isrc];
        if (isrc && group) addGroup(group, "isrc");
      }
      flushConsumed();
    }

    const shareArtist = (a: DetailedTrack, b: DetailedTrack) => {
      const aNames = new Set(a.artists.map((ar) => ar.name.toLowerCase()));
      return b.artists.some((ar) => aNames.has(ar.name.toLowerCase()));
    };

    const similarDuration = (a: DetailedTrack, b: DetailedTrack) => {
      if (a.duration == null || b.duration == null) return false;
      return Math.abs(a.duration - b.duration) <= 5000;
    };

    if (groupSettings.probable) {
      const groups = Object.groupBy(pool, (t) => t.normalisedName);
      for (const name in groups) {
        const cluster = groups[name];
        if (!cluster) continue;
        if (cluster.length < 2) continue;

        const processed = new Set<string>();
        for (const base of cluster) {
          if (processed.has(base.uid)) continue;
          const matches = cluster.filter(
            (t) => base.uid === t.uid || (!processed.has(t.uid) && shareArtist(base, t)),
          );
          if (matches.length > 1) {
            addGroup(matches, "probable");
            matches.forEach((m) => {
              processed.add(m.uid);
            });
          }
        }
      }
      flushConsumed();
    }

    if (groupSettings.likely) {
      const groups = Object.groupBy(pool, (t) => t.normalisedName);
      for (const name in groups) {
        const cluster = groups[name];
        if (!cluster) continue;
        if (cluster.length < 2) continue;

        const processed = new Set<string>();
        for (const base of cluster) {
          if (processed.has(base.uid)) continue;
          const matches = cluster.filter(
            (t) => base.uid === t.uid || (!processed.has(t.uid) && similarDuration(base, t)),
          );
          if (matches.length > 1) {
            addGroup(matches, "likely");
            matches.forEach((m) => {
              processed.add(m.uid);
            });
          }
        }
      }
      flushConsumed();
    }

    if (groupSettings.possible) {
      const groups = Object.groupBy(pool, (t) => t.normalisedFuzzy);
      for (const name in groups) {
        const cluster = groups[name];
        if (!cluster) continue;
        if (cluster.length < 2) continue;

        const processed = new Set<string>();
        for (const base of cluster) {
          if (processed.has(base.uid)) continue;
          const matches = cluster.filter(
            (t) => base.uid === t.uid || (!processed.has(t.uid) && similarDuration(base, t)),
          );
          if (matches.length > 1) {
            addGroup(matches, "possible");
            matches.forEach((m) => {
              processed.add(m.uid);
            });
          }
        }
      }
      flushConsumed();
    }

    if (groupSettings.maybe) {
      pool.sort((a, b) => a.normalisedFuzzy.localeCompare(b.normalisedFuzzy));

      for (let i = 0; i < pool.length; i++) {
        const base = pool[i];
        if (consumedUids.has(base.uid)) continue;

        const matches = [base];

        for (let j = i + 1; j < Math.min(i + 30, pool.length); j++) {
          const candidate = pool[j];
          if (consumedUids.has(candidate.uid)) continue;

          if (base.normalisedFuzzy[0] !== candidate.normalisedFuzzy[0]) break;

          if (calculateSimilarity(base.normalisedFuzzy, candidate.normalisedFuzzy) >= 0.8) {
            matches.push(candidate);
          }
        }

        if (matches.length > 1) addGroup(matches, "maybe");
      }
    }

    perf.end("Dupe Algorithm: Compute");
    return results;
  }, [tracks, settings]);
}

const SettingsMenu = () => {
  const settings = useSettings();

  const update = <T extends keyof Settings>(section: T, key: keyof Settings[T], val: boolean) => {
    const next = { ...settings, [section]: { ...settings[section], [key]: val } };
    settingsStore.update(next);
  };

  const renderSection = (
    title: string,
    section: "groupSettings" | "confirmSettings",
    labels: Record<DuplicateCategory, string>,
  ) => (
    <section className="duplicate-settings__section">
      <h3 className="duplicate-settings__section-title">{title}</h3>
      <div className="duplicate-settings__options">
        {CATEGORIES.map((cat) => (
          <OptionRow
            desc={labels[cat]}
            key={cat}
            name={`${section}-${cat}`}
            onChange={(v) => update(section, cat, !!v)}
            option={
              {
                type: "toggle",
                name: cat,
                desc: labels[cat],
                defaultVal: DEFAULT_SETTINGS[section][cat],
              } as Option
            }
            value={settings[section][cat]}
          />
        ))}
      </div>
    </section>
  );

  return (
    <div className="duplicate-settings">
      {renderSection("Display Groups", "groupSettings", {
        exact: "Exact Duplicates",
        isrc: "ISRC Match",
        probable: "Same Title & Artist",
        likely: "Same Title & Duration",
        possible: "Similar Title & Duration",
        maybe: "Fuzzy Matches",
      })}
      {renderSection("Confirm Delete", "confirmSettings", {
        exact: "Exact",
        isrc: "ISRC",
        probable: "Probable",
        likely: "Likely",
        possible: "Possible",
        maybe: "Maybe",
      })}
    </div>
  );
};

const TrackPlaybackControl = ({ uri, duration }: { uri: string; duration: number | null }) => {
  const {
    position,
    duration: playerDuration,
    isPlaying,
    togglePlay,
    handleSliderChange,
    handleSliderRelease,
  } = usePlayer(uri, duration ?? 0);

  const formatTime = (ms: number | undefined) => {
    if (ms == null || ms < 0) return "--:--";
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div className="duplicate-group__playback-controls">
      <button className="duplicate-group__playback-button" onClick={togglePlay}>
        {isPlaying ? <Icons.React.pause /> : <Icons.React.play />}
      </button>
      <span className="slider-time">{formatTime(position)}</span>
      <Slider
        max={playerDuration || 0}
        min={0}
        onChange={handleSliderChange}
        onRelease={handleSliderRelease}
        step={1}
        value={position || 0}
      />
      <span className="slider-time">{formatTime(playerDuration)}</span>
    </div>
  );
};

const DuplicateRow = ({
  track,
  category,
  onDelete,
  isSource,
}: {
  track: DetailedTrack;
  category: DuplicateCategory;
  onDelete: (track: DetailedTrack) => void;
  isSource?: boolean;
}) => (
  <div className={`duplicate-group__duplicate-item duplicate-group__item--${category}`}>
    <div className="duplicate-group__duplicate-info">
      <div className="duplicate-group__duplicate-content">
        <span className="duplicate-group__duplicate-name">
          {isSource && <strong>Source: </strong>}
          {track.name}
        </span>
        <div className="track-details">
          <div className="track-details__line">
            <span className="track-details__artists">
              Artists: {track.artists.map((a) => a.name).join(", ")}
            </span>
            <span className="track-details__album">Album: {track.album.name}</span>
          </div>
          <div className="track-details__line">
            <span className="track-details__playcount">
              Plays: {track.playCount?.toLocaleString() ?? "N/A"}
            </span>
            <span className="track-details__date">Released: {track.releaseDate ?? "Unknown"}</span>
          </div>
        </div>
      </div>
      <button className="duplicate-group__delete-button" onClick={() => onDelete(track)}>
        Delete
      </button>
    </div>
    <div className="duplicate-group__actions">
      <TrackPlaybackControl duration={track.duration} uri={track.uri} />
    </div>
  </div>
);

const GroupSection = ({
  title,
  category,
  groups,
  onDelete,
}: {
  title: string;
  category: DuplicateCategory;
  groups: ReadonlyArray<DuplicateGroup>;
  onDelete: (cat: DuplicateCategory, t: DetailedTrack) => void;
}) => {
  return (
    <div className="duplicate-group">
      <div className="duplicate-group__heading">
        <div className="duplicate-group__heading-title">{title}</div>
        <div className="duplicate-group__heading-length">{groups.length} found</div>
      </div>
      {groups.length > 0 && (
        <div className="duplicate-group__list">
          {groups.map((g) => (
            <div
              className={`duplicate-group__item duplicate-group__item--${category}`}
              key={g.mainTrack.uid}
            >
              <DuplicateRow
                category={category}
                isSource
                onDelete={(t) => onDelete(category, t)}
                track={g.mainTrack}
              />
              <div className="duplicate-group__duplicates-list">
                {g.duplicates.map((dup) => (
                  <DuplicateRow
                    category={category}
                    key={dup.uid}
                    onDelete={(t) => onDelete(category, t)}
                    track={dup}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export function PlaylistDuplicateFinder({
  selectedPlaylist: initialPlaylist,
}: {
  selectedPlaylist?: PlaylistSummary;
}) {
  const [view, setView] = useState<"finder" | "settings">("finder");
  const [selectedUri, setSelectedUri] = useState<string | undefined>(initialPlaylist?.uri);

  const settings = useSettings();
  const { playlists, loading: playlistsLoading } = useOwnedPlaylists();

  const currentPlaylist = useMemo(
    () =>
      playlists.find((p) => p.uri === selectedUri) ??
      (selectedUri ? { uri: selectedUri, name: "Selected Playlist", type: "playlist" } : undefined),
    [playlists, selectedUri],
  );

  const { tracks, loading: tracksLoading, setTracks } = usePlaylistTracks(selectedUri, settings);
  const results = useDuplicateFinder(tracks, settings);

  const renderStartTime = useRef(performance.now());
  renderStartTime.current = performance.now();

  useEffect(() => {
    const elapsed = performance.now() - renderStartTime.current;
    if (elapsed > 10) {
      console.debug(`[DEBUG] Render:React took ${elapsed.toFixed(2)}ms to render`);
    }
  });

  const handleDelete = async (category: DuplicateCategory, track: DetailedTrack) => {
    const execute = async () => {
      if (!currentPlaylist) return;
      await Spicetify.Platform.PlaylistAPI.remove(currentPlaylist.uri, [{ uid: track.uid }]);
      setTracks((prev) => prev.filter((t) => t.uid !== track.uid));
    };

    if (settings.confirmSettings[category]) {
      ConfirmDialog({
        titleText: "Remove Track",
        descriptionText: `Are you sure you want to remove "${track.name}"? This cannot be undone`,
        confirmText: "Remove",
        onConfirm: () => void execute(),
      });
    } else {
      void execute();
    }
  };

  const labels: Record<DuplicateCategory, string> = {
    exact: "Exact URI Matches",
    isrc: "Same ISRC",
    probable: "Same Title + Shared Artist",
    likely: "Same Title + Duration (±5s)",
    possible: "Similar Title + Duration (±5s)",
    maybe: "Maybe Duplicates (Fuzzy)",
  };

  return (
    <div className="find-duplicates">
      <div className="modal__header">
        <h1 className="modal__title">
          {view === "finder" ? "Playlist Duplicate Finder" : "Settings"}
        </h1>
        <div className="modal__buttonContainer">
          <button
            className="modal__button"
            onClick={() => setView((v) => (v === "finder" ? "settings" : "finder"))}
          >
            <Icons.React.settings />
          </button>
          <button className="modal__button" onClick={() => PopupModal.hide()}>
            <Icons.React.close size={18} />
          </button>
        </div>
      </div>

      <div className="find-duplicates__content">
        {view === "settings" ? (
          <SettingsMenu />
        ) : (
          <>
            <div className="find-duplicates__header">
              <span className="find-duplicates__header-label">Select Playlist:</span>
              <Dropdown
                disabled={playlistsLoading || tracksLoading}
                onChange={setSelectedUri}
                options={playlists.map((p) => ({ value: p.uri, label: p.name }))}
                value={selectedUri ?? ""}
              />
            </div>

            {tracksLoading ? (
              <div className="find-duplicates__loading">
                {/* @ts-expect-error Spotiofy thingy */}
                <UI.ProgressDots size="medium" />
              </div>
            ) : (
              CATEGORIES.map((cat) => {
                if (!settings.groupSettings[cat]) return null;

                return (
                  <GroupSection
                    category={cat}
                    groups={results[cat]}
                    key={cat}
                    onDelete={handleDelete}
                    title={labels[cat]}
                  />
                );
              })
            )}
          </>
        )}
      </div>
    </div>
  );
}
