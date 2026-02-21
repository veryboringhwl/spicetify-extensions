import { Dexie, type Table } from "dexie";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { fetchAllLibraryContents } from "../../../shared/api/fetchAllLibraryContents.ts";
import { fetchAllPlaylistTracks } from "../../../shared/api/fetchAllPlaylistTracks.ts";
import { fetchGraphQLForTracks } from "../../../shared/api/fetchGraphQLForTracks.ts";
import { fetchWebAPIForTracks } from "../../../shared/api/fetchWebAPIForTracks.ts";
import { Dropdown } from "../../../shared/components/dropdown.tsx";
import { Icons } from "../../../shared/components/icons.tsx";
import { type Option, OptionRow } from "../../../shared/components/optionRow.tsx";
import { PopupModal } from "../../../shared/components/popupModal.tsx";
import { Slider } from "../../../shared/components/slider.tsx";
import { spotifyComponents } from "../../../shared/components/spotifyComponents.js";

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

const CATEGORY_INFO: Record<DuplicateCategory, { label: string; tooltip: string }> = {
  exact: {
    label: "Identical Tracks",
    tooltip: "The exact same Spotify track added multiple times to the playlist",
  },
  isrc: {
    label: "Same Recording",
    tooltip:
      "Different Spotify entries for the same recording (e.g., from different albums but identical audio)",
  },
  probable: {
    label: "Same Title & Artist",
    tooltip: "Tracks with the same title and at least one shared artist",
  },
  likely: {
    label: "Title & Length Match",
    tooltip: "Tracks with the same title and similar duration (within 5 seconds)",
  },
  possible: {
    label: "Similar Songs",
    tooltip: "Tracks with similar titles and durations - may include remixes or covers",
  },
  maybe: {
    label: "Possible Matches",
    tooltip: "Tracks that may be duplicates based on name similarity - review VERY CAREFULLY!!",
  },
};

interface Track {
  readonly uri: string;
  readonly uid: string;
  readonly name: string;
  readonly album: {
    readonly uri: string;
    readonly name: string;
    readonly images: ReadonlyArray<{ readonly url: string; readonly label: string }>;
  };
  readonly artists: ReadonlyArray<{ readonly name: string }>;
}

interface TrackDetails {
  readonly playCount: number | null;
  readonly duration: number | null;
  readonly isrc: string | null;
  readonly releaseDate: string | null;
  readonly coverArt: string | null;
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
  trackCoverArt: string;
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
    this.version(0.3)
      .stores({
        tracks:
          "&trackUri, trackName, trackCoverArt, trackDuration, trackPlayCount, trackIsrc, albumUri, albumReleaseDate, lastUpdated, ignoreDuplicates",
      })
      .upgrade((trans) => {
        return trans.table("tracks").clear();
      });
  }
}

const db = new FindDupeTracks();

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

const formatReleaseDate = (dateStr: string | null): string => {
  if (!dateStr) return "Unknown";
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return Spicetify.Locale.formatDate(date, { year: "numeric", month: "short", day: "numeric" });
};

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

    const fetchPlaylists = async () => {
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

    void fetchPlaylists();
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
        } else {
          const hasMissingData =
            cached.trackPlayCount === null ||
            cached.trackDuration === null ||
            cached.trackIsrc === null ||
            cached.albumReleaseDate === null;

          if (hasMissingData) {
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
        }

        if (isStale) needsUpdate.push(track);
        detailedTracks.push({
          ...track,
          playCount: cached?.trackPlayCount ?? null,
          duration: cached?.trackDuration ?? null,
          isrc: cached?.trackIsrc ?? null,
          releaseDate: cached?.albumReleaseDate ?? null,
          coverArt: cached?.trackCoverArt ?? null,
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

      const tracksNeedingGraphQL = needsUpdate.filter((t) => {
        const c = cacheMap.get(t.uri);
        return !c || c.trackDuration === null || c.trackPlayCount === null;
      });

      const tracksNeedingWebAPI = needsUpdate.filter((t) => {
        const c = cacheMap.get(t.uri);
        return !c || c.trackIsrc === null || c.albumReleaseDate === null;
      });

      const [graphQLResult, webAPIResult] = await Promise.allSettled([
        tracksNeedingGraphQL.length > 0
          ? fetchGraphQLForTracks(tracksNeedingGraphQL.map((t) => t.album.uri))
          : Promise.resolve(new Map()),
        tracksNeedingWebAPI.length > 0
          ? fetchWebAPIForTracks(tracksNeedingWebAPI.map((t) => t.uri))
          : Promise.resolve(new Map()),
      ]);

      if (abortController.signal.aborted) return;

      const graphQLData = graphQLResult.status === "fulfilled" ? graphQLResult.value : null;
      const webAPIData = webAPIResult.status === "fulfilled" ? webAPIResult.value : null;

      const updates: DbTrack[] = [];
      const lastUpdated = now.toString();
      const updatedDetailedTracks = [...detailedTracks];

      needsUpdate.forEach((track) => {
        const cached = cacheMap.get(track.uri);
        const graphQLTrack = graphQLData?.get(track.uri) as any;
        const webAPITrack = webAPIData?.get(track.uri) as any;

        const fetchedDuration = graphQLTrack?.duration?.totalMilliseconds ?? null;
        const duration = fetchedDuration ?? cached?.trackDuration ?? null;

        const fetchedPlayCount = graphQLTrack?.playcount ? Number(graphQLTrack.playcount) : null;
        const playCount = fetchedPlayCount ?? cached?.trackPlayCount ?? null;

        let fetchedIsrc = null;
        if (webAPITrack) {
          fetchedIsrc =
            webAPITrack?.external_ids?.isrc ??
            webAPITrack?.external_id?.find((e: any) => e?.type === "isrc")?.id ??
            null;
        }
        const isrc = fetchedIsrc ?? cached?.trackIsrc ?? null;

        let fetchedReleaseDate: string | null = null;
        if (webAPITrack) {
          const rawDate = webAPITrack?.album?.date;
          if (typeof rawDate === "string") fetchedReleaseDate = rawDate;
          else if (rawDate?.year) {
            fetchedReleaseDate = `${rawDate.year}`;
            if (rawDate.month) fetchedReleaseDate += `-${String(rawDate.month).padStart(2, "0")}`;
            if (rawDate.day) fetchedReleaseDate += `-${String(rawDate.day).padStart(2, "0")}`;
          }
        }
        const releaseDate = fetchedReleaseDate ?? cached?.albumReleaseDate ?? null;

        const coverArt =
          track.album.images.find((img: { label: string }) => img.label === "xlarge")?.url ??
          track.album.images.find((img: { label: string }) => img.label === "large")?.url ??
          track.album.images[0]?.url ??
          "";

        updates.push({
          trackUri: track.uri,
          trackName: track.name,
          trackCoverArt: coverArt,
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
            coverArt,
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

    const flushConsumed = () => {
      pool = pool.filter((t) => !consumedUids.has(t.uid));
      consumedUids.clear();
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

  const settingsLabels = Object.fromEntries(
    CATEGORIES.map((cat) => [cat, CATEGORY_INFO[cat].label]),
  ) as Record<DuplicateCategory, string>;

  return (
    <div className="duplicate-settings">
      {renderSection("Display Groups", "groupSettings", settingsLabels)}
      {renderSection("Confirm Delete", "confirmSettings", settingsLabels)}
    </div>
  );
};

const PlayerAPI = Spicetify.Platform.PlayerAPI;

const playerStore = {
  subscribe: (callback: () => void) => {
    const listener = () => callback();
    Spicetify.Platform.PlayerAPI._events.addListener("update", listener, {});
    return () => {
      Spicetify.Platform.PlayerAPI._events.removeListener("update", listener, {});
    };
  },
  getSnapshot: () => {
    return Spicetify.Platform.PlayerAPI._state;
  },
};

const TrackPlaybackControl = ({ uri, duration }: { uri: string; duration: number | null }) => {
  const trackUri = uri;
  const trackDuration = duration ?? 0;

  const playerState = useSyncExternalStore(playerStore.subscribe, playerStore.getSnapshot);

  const isActiveTrack = playerState.item?.uri === trackUri;
  const isPaused = playerState.isPaused;
  const isPlaying = isActiveTrack && !isPaused;

  const [position, setPosition] = useState(0);
  const [playerDuration, setPlayerDuration] = useState(trackDuration);

  const isSliderDragging = useRef(false);
  const seekPositionRef = useRef(0);

  useEffect(() => {
    if (!isActiveTrack) {
      setPosition(0);
      setPlayerDuration(trackDuration);
      return;
    }

    setPlayerDuration(playerState.duration);

    if (isSliderDragging.current) return;

    if (isPaused) {
      setPosition(playerState.positionAsOfTimestamp);
      return;
    }

    const intervalId = setInterval(() => {
      const now = Date.now();
      const statedPos = PlayerAPI._state.positionAsOfTimestamp;
      const statedTime = PlayerAPI._state.timestamp;
      const currentPos = now - statedTime + statedPos;

      setPosition(Math.min(currentPos, playerState.duration));
    }, 100);

    return () => clearInterval(intervalId);
  }, [
    isActiveTrack,
    isPaused,
    playerState.duration,
    playerState.positionAsOfTimestamp,
    trackDuration,
  ]);

  const togglePlay = useCallback(() => {
    if (isActiveTrack) {
      isPaused ? PlayerAPI.resume({}) : PlayerAPI.pause({});
    } else {
      PlayerAPI.play({ uri: trackUri }, {});
    }
  }, [isActiveTrack, isPaused, trackUri]);

  const handleSliderChange = useCallback((newPosition: number) => {
    isSliderDragging.current = true;
    setPosition(newPosition);
    seekPositionRef.current = newPosition;
  }, []);

  const handleSliderRelease = useCallback(() => {
    isSliderDragging.current = false;
    if (isActiveTrack) {
      PlayerAPI.seekTo(seekPositionRef.current);
    } else {
      PlayerAPI.play({ uri: trackUri }, {});
    }
  }, [isActiveTrack, trackUri]);

  const formatTime = (ms: number | undefined) => {
    if (ms == null || ms < 0) return "--:--";
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div className="duplicate-group__playback-controls">
      <button className="duplicate-group__playback-button" onClick={togglePlay}>
        {isPlaying ? <Icons.React.pause size={20} /> : <Icons.React.play size={20} />}
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
}: {
  track: DetailedTrack;
  category: DuplicateCategory;
  onDelete: (track: DetailedTrack) => void;
}) => (
  <div className={`duplicate-group__duplicate-item duplicate-group__item--${category}`}>
    <div className="duplicate-group__duplicate-info">
      <div className="details-grid">
        <img className="details-grid__image" src={track.coverArt ?? ""} />
        <div className="details-grid__main-info">
          <span className="details-grid__name">{track.name}</span>
          <span className="details-grid__playcount">
            Play Count: {track.playCount?.toLocaleString()}
          </span>
        </div>
        <div className="details-grid__second-info">
          <span className="details-grid__artists">
            {track.artists.map((a) => a.name).join(", ")}
          </span>
          <span className="details-grid__album">{track.album.name}</span>
        </div>
        <span className="details-grid__date">{formatReleaseDate(track.releaseDate)}</span>
      </div>
    </div>
    <div className="duplicate-group__actions">
      <TrackPlaybackControl duration={track.duration} uri={track.uri} />
      <button className="duplicate-group__delete-button" onClick={() => onDelete(track)}>
        Delete
      </button>
    </div>
  </div>
);

const GroupSection = ({
  title,
  category,
  groups,
  onDelete,
}: {
  title: { label: string; tooltip: string };
  category: DuplicateCategory;
  groups: ReadonlyArray<DuplicateGroup>;
  onDelete: (cat: DuplicateCategory, t: DetailedTrack) => void;
}) => {
  return (
    <div className="duplicate-group">
      <div className="duplicate-group__heading">
        <div className="duplicate-group__heading-info">
          <div className="duplicate-group__heading-title">{title.label}</div>
          <Spicetify.ReactComponent.TooltipWrapper label={title.tooltip} placement="top">
            <div className="info-tippy">
              <Icons.React.questionMark fill="var(--spice-subtext)" size={20} />
            </div>
          </Spicetify.ReactComponent.TooltipWrapper>
        </div>
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
                onDelete={(t) => onDelete(category, t)}
                track={g.mainTrack}
              />
              <div className="duplicate-group__duplicates-list">
                {g.duplicates.map((dup) => (
                  <>
                    <div className="duplicate-group__duplicate-thread"></div>
                    <DuplicateRow
                      category={category}
                      key={dup.uid}
                      onDelete={(t) => onDelete(category, t)}
                      track={dup}
                    />
                  </>
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
  const [pendingDelete, setPendingDelete] = useState<{
    track: DetailedTrack;
    category: DuplicateCategory;
  } | null>(null);

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

  const executeDelete = async (track: DetailedTrack) => {
    if (!currentPlaylist) return;
    await Spicetify.Platform.PlaylistAPI.remove(currentPlaylist.uri, [{ uid: track.uid }]);
    setTracks((prev) => prev.filter((t) => t.uid !== track.uid));
  };

  const handleDelete = (category: DuplicateCategory, track: DetailedTrack) => {
    if (settings.confirmSettings[category]) {
      setPendingDelete({ track, category });
    } else {
      void executeDelete(track);
    }
  };

  const handleConfirmDelete = () => {
    if (pendingDelete) {
      void executeDelete(pendingDelete.track);
    }
    setPendingDelete(null);
  };

  return (
    <>
      <Spicetify.ReactComponent.ConfirmDialog
        cancelText="Cancel"
        confirmText="Remove"
        descriptionText={
          pendingDelete
            ? `Are you sure you want to remove "${pendingDelete.track.name}"? This cannot be undone.`
            : ""
        }
        isOpen={pendingDelete !== null}
        onClose={() => setPendingDelete(null)}
        onConfirm={handleConfirmDelete}
        onOutside={() => setPendingDelete(null)}
        titleText="Remove Track"
      />
      <div className="find-duplicates">
        <div className="modal__header">
          <h1 className="find-duplicates__title">
            {view === "finder" ? "Playlist Duplicate Finder" : "Settings"}
          </h1>
          <div className="find-duplicates__dropdown">
            <Dropdown
              disabled={playlistsLoading || tracksLoading}
              onChange={setSelectedUri}
              options={playlists.map((p) => ({ value: p.uri, label: p.name }))}
              value={selectedUri ?? ""}
            />
          </div>
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
          ) : tracksLoading ? (
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
                  title={CATEGORY_INFO[cat]}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
