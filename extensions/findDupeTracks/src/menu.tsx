import { Temporal } from "@js-temporal/polyfill";
import Dexie, { type Table } from "dexie";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
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

const DUPLICATE_CATEGORIES = ["exact", "isrc", "probable", "likely", "possible", "maybe"] as const;
type DuplicateCategory = (typeof DUPLICATE_CATEGORIES)[number];

interface Track {
  readonly uri: string;
  readonly name: string;
  readonly album: { readonly uri: string; readonly name: string };
  readonly artists: ReadonlyArray<{ readonly name: string }>;
  readonly uid: string;
}

interface PlaylistSummary {
  readonly uri: string;
  readonly name: string;
  readonly type: "playlist" | string;
  readonly canAddTo?: boolean;
}

interface DuplicateGroup {
  readonly mainTrack: Track;
  readonly duplicates: ReadonlyArray<Track>;
}

type DuplicateGroups = Record<DuplicateCategory, ReadonlyArray<DuplicateGroup>>;

interface TrackMetadata {
  readonly playCounts: ReadonlyMap<string, number>;
  readonly durations: ReadonlyMap<string, number>;
  readonly isrcs: ReadonlyMap<string, string>;
  readonly releaseDates: ReadonlyMap<string, string>;
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
        "&trackUri, trackName, trackDuration, trackPlayCount, trackIsrc, albumUri, albumReleaseDate, ignoreDuplicates, lastUpdated",
    });
  }
}

const db = new FindDupeTracks();

(globalThis as any).FindDupeTracks = db;

type ToggleSettings = Record<DuplicateCategory, boolean>;

interface Settings {
  readonly groupSettings: ToggleSettings;
  readonly confirmSettings: ToggleSettings;
  readonly defaultNormalizeWords: ReadonlyArray<string>;
  readonly customNormalizeWords: ReadonlyArray<string>;
}

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
  defaultNormalizeWords: [
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
  customNormalizeWords: [],
};

const SETTINGS_KEY = "findDupeTracks:settings";

let currentSettingsSnapshot: Settings = (() => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
})();

const settingsListeners = new Set<() => void>();

const settingsStore = {
  getSnapshot: () => currentSettingsSnapshot,
  subscribe: (listener: () => void) => {
    settingsListeners.add(listener);
    return () => settingsListeners.delete(listener);
  },
  update: (newSettings: Settings) => {
    currentSettingsSnapshot = newSettings;
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
    settingsListeners.forEach((l) => {
      l();
    });
  },
};

const useSettings = () => useSyncExternalStore(settingsStore.subscribe, settingsStore.getSnapshot);

const createNormalizationRegex = (ignoredWords: ReadonlyArray<string>) => {
  return new RegExp(`\\b(${ignoredWords.join("|")})\\b`, "gi");
};

const normalizeStringOptimized = (name: string, regex: RegExp): string => {
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
    const bigram = s1.substring(i, i + 2);
    bigrams.set(bigram, (bigrams.get(bigram) || 0) + 1);
  }

  let intersectionSize = 0;
  for (let i = 0; i < s2.length - 1; i++) {
    const bigram = s2.substring(i, i + 2);
    const count = bigrams.get(bigram) || 0;
    if (count > 0) {
      bigrams.set(bigram, count - 1);
      intersectionSize++;
    }
  }

  return (2.0 * intersectionSize) / (s1.length + s2.length - 2);
};

const useOwnedPlaylists = () => {
  const [playlists, setPlaylists] = useState<ReadonlyArray<PlaylistSummary>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      perf.start("Fetch: All Playlists");
      const items = await fetchAllLibraryContents();
      perf.end("Fetch: All Playlists");
      setPlaylists((items as PlaylistSummary[]).filter((i) => i.type === "playlist" && i.canAddTo));
      setLoading(false);
    };
    void fetchPlaylists();
  }, []);

  return { playlists, loading };
};

const usePlaylistTracks = (playlistUri: string | undefined) => {
  const [tracks, setTracks] = useState<ReadonlyArray<Track>>([]);
  const [metadata, setMetadata] = useState<TrackMetadata>({
    playCounts: new Map(),
    durations: new Map(),
    isrcs: new Map(),
    releaseDates: new Map(),
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!playlistUri) {
      setTracks([]);
      return;
    }

    const abortController = new AbortController();
    setLoading(true);

    const loadData = async () => {
      try {
        perf.start("LOAD ALL DATA");

        const { items } = await fetchAllPlaylistTracks(playlistUri);
        if (abortController.signal.aborted) return;

        const castItems = items as Track[];
        setTracks(castItems);

        const dbTracks = await db.tracks.bulkGet(castItems.map((t) => t.uri));
        const cached = new Map(
          dbTracks.filter((t): t is DbTrack => t != null).map((t) => [t.trackUri, t]),
        );

        const now = Temporal.Now.plainDateTimeISO();

        const needsUpdate = castItems.filter((t) => {
          const c = cached.get(t.uri);
          if (!c) return true;

          const hasMissingData =
            c.trackPlayCount == null || c.trackDuration == null || c.trackIsrc == null;
          if (hasMissingData) return true;

          if (!c.lastUpdated) return true;
          try {
            const lastUpdate = Temporal.PlainDateTime.from(c.lastUpdated);
            const durationSince = now.since(lastUpdate);
            if (durationSince.total({ unit: "days" }) >= 30) return true;
          } catch (_e) {
            return true;
          }

          return false;
        });

        const playCounts = new Map<string, number>();
        const durations = new Map<string, number>();
        const isrcs = new Map<string, string>();
        const albumReleaseDates = new Map<string, string>();

        cached.forEach((c) => {
          if (c.trackPlayCount != null) playCounts.set(c.trackUri, c.trackPlayCount);
          if (c.trackDuration != null) durations.set(c.trackUri, c.trackDuration);
          if (c.trackIsrc != null) isrcs.set(c.trackUri, c.trackIsrc);
          if (c.albumReleaseDate != null) albumReleaseDates.set(c.trackUri, c.albumReleaseDate);
        });

        if (needsUpdate.length > 0) {
          const [graphQLData, webAPIData] = await Promise.all([
            fetchGraphQLForTracks(needsUpdate.map((t) => t.album.uri)),
            fetchWebAPIForTracks(needsUpdate.map((t) => t.uri)),
          ]);

          if (abortController.signal.aborted) return;

          const dbUpdates: DbTrack[] = [];
          const currentTimestamp = now.toString();

          needsUpdate.forEach((t) => {
            const graphQLMeta = graphQLData.get(t.uri) as any;
            const webAPIMeta = webAPIData.get(t.uri) as any;

            const duration = graphQLMeta?.duration?.totalMilliseconds ?? null;
            const playcount = graphQLMeta?.playcount ? Number(graphQLMeta.playcount) : null;
            const isrc =
              webAPIMeta?.external_ids?.isrc ??
              webAPIMeta?.external_id?.find((e: any) => e?.type === "isrc")?.id;

            const rawDate = webAPIMeta?.album?.date;
            let albumReleaseDate: string | null = null;

            if (typeof rawDate === "string") {
              albumReleaseDate = rawDate;
            } else if (rawDate && typeof rawDate === "object") {
              const { year, month, day } = rawDate;
              if (year) {
                albumReleaseDate = String(year);
                if (month) {
                  albumReleaseDate += `-${String(month).padStart(2, "0")}`;
                  if (day) {
                    albumReleaseDate += `-${String(day).padStart(2, "0")}`;
                  }
                }
              }
            }

            if (playcount != null) playCounts.set(t.uri, playcount);
            if (duration != null) durations.set(t.uri, duration);
            if (isrc != null) isrcs.set(t.uri, isrc);
            if (albumReleaseDate != null) albumReleaseDates.set(t.uri, albumReleaseDate);

            dbUpdates.push({
              trackUri: t.uri,
              trackName: t.name,
              trackDuration: duration,
              trackPlayCount: playcount,
              trackIsrc: isrc,
              albumUri: t.album.uri,
              albumReleaseDate: albumReleaseDate,
              lastUpdated: currentTimestamp, // Save readable timestamp
            });
          });

          await db.tracks.bulkPut(dbUpdates);
        }

        if (!abortController.signal.aborted) {
          setMetadata({ playCounts, durations, isrcs, releaseDates: albumReleaseDates });
          setLoading(false);
          perf.end("LOAD ALL DATA");
        }
      } catch (e) {
        console.error("Failed to load tracks", e);
        if (!abortController.signal.aborted) setLoading(false);
      }
    };

    void loadData();
    return () => abortController.abort();
  }, [playlistUri]);

  return { tracks, metadata, loading, setTracks };
};

const useDuplicateFinder = (
  tracks: ReadonlyArray<Track>,
  metadata: TrackMetadata,
  settings: Settings,
): DuplicateGroups => {
  const { playCounts, durations, isrcs, releaseDates } = metadata;
  const { defaultNormalizeWords, customNormalizeWords, groupSettings } = settings;

  perf.start("Dupe Algorithm: Compute");

  const results: Record<DuplicateCategory, DuplicateGroup[]> = {
    exact: [],
    isrc: [],
    probable: [],
    likely: [],
    possible: [],
    maybe: [],
  };

  if (tracks.length === 0) return results;

  const allNormWords = [...defaultNormalizeWords, ...customNormalizeWords];
  const regex = createNormalizationRegex(allNormWords);

  let pool = tracks.map((t) => ({
    track: t,
    normName: t.name.toLowerCase().trim(),
    normFuzzy: normalizeStringOptimized(t.name, regex),
    artists: new Set(t.artists.map((a) => a.name.toLowerCase())),
    isrc: isrcs.get(t.uri),
    duration: durations.get(t.uri),
    uid: t.uid,
  }));

  const usedUids = new Set<string>();

  const processGroup = (group: typeof pool, category: DuplicateCategory) => {
    if (group.length < 2) return;

    const sorted = [...group].sort((a, b) => {
      const dateA = String(releaseDates.get(a.track.uri) || "9999");
      const dateB = String(releaseDates.get(b.track.uri) || "9999");
      if (dateA !== dateB) return dateA.localeCompare(dateB);

      const playsA = playCounts.get(a.track.uri) ?? 0;
      const playsB = playCounts.get(b.track.uri) ?? 0;
      return playsB - playsA;
    });

    const main = sorted[0];
    const duplicates = sorted.slice(1);

    results[category].push({
      mainTrack: main.track,
      duplicates: duplicates.map((d) => d.track),
    });

    for (const item of group) {
      usedUids.add(item.uid);
    }
  };

  if (groupSettings.exact) {
    const byUri = new Map<string, typeof pool>();
    for (const p of pool) {
      const list = byUri.get(p.track.uri) || [];
      list.push(p);
      byUri.set(p.track.uri, list);
    }
    for (const group of byUri.values()) {
      processGroup(group, "exact");
    }
    pool = pool.filter((p) => !usedUids.has(p.uid));
  }

  if (groupSettings.isrc) {
    const byIsrc = new Map<string, typeof pool>();
    for (const p of pool) {
      if (!p.isrc) continue;
      const list = byIsrc.get(p.isrc) || [];
      list.push(p);
      byIsrc.set(p.isrc, list);
    }
    for (const group of byIsrc.values()) {
      processGroup(group, "isrc");
    }
    pool = pool.filter((p) => !usedUids.has(p.uid));
  }

  if (groupSettings.probable) {
    const byName = new Map<string, typeof pool>();
    for (const p of pool) {
      const list = byName.get(p.normName) || [];
      list.push(p);
      byName.set(p.normName, list);
    }

    byName.forEach((group) => {
      if (group.length >= 2) {
        const tempUsed = new Set<string>();
        for (const c1 of group) {
          if (tempUsed.has(c1.uid)) continue;
          const match = group.filter(
            (c2) =>
              c1.uid === c2.uid ||
              (!tempUsed.has(c2.uid) &&
                c2.track.artists.some((a) => c1.artists.has(a.name.toLowerCase()))),
          );
          if (match.length > 1) {
            processGroup(match, "probable");
            for (const m of match) tempUsed.add(m.uid);
          }
        }
      }
    });
    pool = pool.filter((p) => !usedUids.has(p.uid));
  }

  if (groupSettings.likely) {
    const byName = new Map<string, typeof pool>();
    for (const p of pool) {
      const list = byName.get(p.normName) || [];
      list.push(p);
      byName.set(p.normName, list);
    }

    byName.forEach((group) => {
      if (group.length >= 2) {
        const tempUsed = new Set<string>();
        for (const c1 of group) {
          if (tempUsed.has(c1.uid)) continue;
          const c1Duration = c1.duration;
          if (c1Duration == null) continue;

          const match = group.filter(
            (c2) =>
              c1.uid === c2.uid ||
              (!tempUsed.has(c2.uid) &&
                c2.duration != null &&
                Math.abs(c1Duration - c2.duration) <= 5000),
          );
          if (match.length > 1) {
            processGroup(match, "likely");
            for (const m of match) tempUsed.add(m.uid);
          }
        }
      }
    });
    pool = pool.filter((p) => !usedUids.has(p.uid));
  }

  if (groupSettings.possible) {
    const byFuzzy = new Map<string, typeof pool>();
    for (const p of pool) {
      const list = byFuzzy.get(p.normFuzzy) || [];
      list.push(p);
      byFuzzy.set(p.normFuzzy, list);
    }

    byFuzzy.forEach((group) => {
      if (group.length >= 2) {
        const tempUsed = new Set<string>();
        for (const c1 of group) {
          if (tempUsed.has(c1.uid)) continue;
          const c1Duration = c1.duration;
          if (c1Duration == null) continue;

          const match = group.filter(
            (c2) =>
              c1.uid === c2.uid ||
              (!tempUsed.has(c2.uid) &&
                c2.duration != null &&
                Math.abs(c1Duration - c2.duration) <= 5000),
          );
          if (match.length > 1) {
            processGroup(match, "possible");
            for (const m of match) tempUsed.add(m.uid);
          }
        }
      }
    });
    pool = pool.filter((p) => !usedUids.has(p.uid));
  }

  if (groupSettings.maybe) {
    pool.sort((a, b) => a.normFuzzy.localeCompare(b.normFuzzy));
    const LOOKAHEAD = 30;

    for (let i = 0; i < pool.length; i++) {
      const c1 = pool[i];
      if (usedUids.has(c1.uid)) continue;

      const match = [c1];
      const maxJ = Math.min(i + LOOKAHEAD, pool.length);

      for (let j = i + 1; j < maxJ; j++) {
        const c2 = pool[j];
        if (usedUids.has(c2.uid)) continue;
        if (c1.normFuzzy[0] !== c2.normFuzzy[0]) break;

        if (calculateSimilarity(c1.normFuzzy, c2.normFuzzy) >= 0.8) {
          match.push(c2);
        }
      }

      if (match.length > 1) {
        processGroup(match, "maybe");
      }
    }
  }

  perf.end("Dupe Algorithm: Compute");
  return results;
};

function TrackDetails({
  track,
  playCounts,
  releaseDates,
}: {
  track: Track;
  playCounts: ReadonlyMap<string, number>;
  releaseDates: ReadonlyMap<string, string>;
}) {
  const count = playCounts.get(track.uri);
  const date = releaseDates.get(track.uri);
  return (
    <div className="track-details">
      <div className="track-details__line">
        <span className="track-details__artists">
          Artists: {track.artists.map((a) => a.name).join(", ") || "N/A"}
        </span>
        <span className="track-details__album">Album: {track.album.name || "N/A"}</span>
      </div>
      <div className="track-details__line">
        <span className="track-details__playcount">
          Plays: {count != null ? count.toLocaleString() : "N/A"}
        </span>
        <span className="track-details__playcount">Released: {date || "Unknown"} </span>
      </div>
    </div>
  );
}

function TrackControls({
  trackUri,
  duration: trackDuration,
}: {
  trackUri: string;
  duration?: number;
}) {
  const { position, duration, isPlaying, togglePlay, handleSliderChange, handleSliderRelease } =
    usePlayer(trackUri, trackDuration ?? 0);

  const formatTime = (ms?: number) => {
    if (ms == null || ms < 0) return "N/A";
    const secs = Math.floor(ms / 1000);
    return `${Math.floor(secs / 60)}:${(secs % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div className="duplicate-group__playback-controls">
      <button className="duplicate-group__playback-button" onClick={togglePlay} type="button">
        {isPlaying ? <Icons.React.pause /> : <Icons.React.play />}
      </button>
      <span className="slider-time">{formatTime(position)}</span>
      <Slider
        max={duration || 0}
        min={0}
        onChange={handleSliderChange}
        onRelease={handleSliderRelease}
        step={1}
        value={position || 0}
      />
      <span className="slider-time">{formatTime(duration)}</span>
    </div>
  );
}

function DuplicateItem({
  track,
  category,
  onDelete,
  isSource,
  metadata,
}: {
  track: Track;
  category: DuplicateCategory;
  onDelete: (c: DuplicateCategory, t: Track) => void;
  isSource?: boolean;
  metadata: TrackMetadata;
}) {
  return (
    <div className={`duplicate-group__duplicate-item duplicate-group__item--${category}`}>
      <div className="duplicate-group__duplicate-info">
        <div className="duplicate-group__duplicate-content">
          <span className="duplicate-group__duplicate-name">
            {isSource && "Source: "}
            {track.name}
          </span>
          <TrackDetails
            playCounts={metadata.playCounts}
            releaseDates={metadata.releaseDates}
            track={track}
          />
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
        <TrackControls duration={metadata.durations.get(track.uri)} trackUri={track.uri} />
      </div>
    </div>
  );
}

function SettingsMenu() {
  const settings = useSettings();

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) =>
    settingsStore.update({ ...settings, [key]: value });

  const updateToggle = (
    section: "groupSettings" | "confirmSettings",
    key: DuplicateCategory,
    value: boolean,
  ) => updateSetting(section, { ...settings[section], [key]: value });

  const renderToggles = (
    title: string,
    section: "groupSettings" | "confirmSettings",
    labels: Record<DuplicateCategory, string>,
  ) => (
    <section className="duplicate-settings__section">
      <h3 className="duplicate-settings__section-title">{title}</h3>
      <div className="duplicate-settings__options">
        {DUPLICATE_CATEGORIES.map((key) => (
          <OptionRow
            desc={labels[key]}
            key={key}
            name={`${key}-${section}`}
            onChange={(val) => updateToggle(section, key, Boolean(val))}
            option={
              {
                type: "toggle",
                name: key,
                desc: labels[key],
                defaultVal: DEFAULT_SETTINGS[section][key],
              } as Option
            }
            value={settings[section][key]}
          />
        ))}
      </div>
    </section>
  );

  return (
    <div className="duplicate-settings">
      {renderToggles("Display Groups", "groupSettings", {
        exact: "Exact Duplicates",
        isrc: "ISRC Match",
        probable: "Same Title & Artist",
        likely: "Same Title & Duration",
        possible: "Similar Title & Duration",
        maybe: "Fuzzy Matches",
      })}
      {renderToggles("Confirm Delete", "confirmSettings", {
        exact: "Exact",
        isrc: "ISRC",
        probable: "Probable",
        likely: "Likely",
        possible: "Possible",
        maybe: "Maybe",
      })}
    </div>
  );
}

export function PlaylistDuplicateFinder({
  selectedPlaylist: initialPlaylist,
}: {
  selectedPlaylist?: PlaylistSummary;
}) {
  const settings = useSettings();
  const { playlists, loading: loadingPlaylists } = useOwnedPlaylists();
  const [selectedPlaylist, setSelectedPlaylist] = useState(initialPlaylist);
  const [view, setView] = useState<"finder" | "settings">("finder");

  const {
    tracks,
    metadata,
    loading: loadingTracks,
    setTracks,
  } = usePlaylistTracks(selectedPlaylist?.uri);
  const duplicateGroups = useDuplicateFinder(tracks, metadata, settings);

  const renderStartTime = useRef(performance.now());
  useEffect(() => {
    const elapsed = performance.now() - renderStartTime.current;
    if (elapsed > 10) {
      console.log(`Render:React took ${elapsed.toFixed(2)}ms to render`);
    }
  });

  const handleDelete = async (category: DuplicateCategory, track: Track) => {
    const doDelete = async () => {
      if (selectedPlaylist) {
        setTracks((prev) => prev.filter((t) => t.uid !== track.uid));
        await Spicetify.Platform.PlaylistAPI.remove(selectedPlaylist.uri, [{ uid: track.uid }]);
      }
    };

    if (settings.confirmSettings[category]) {
      ConfirmDialog({
        titleText: "Remove Track",
        descriptionText: `Remove "${track.name}"?`,
        confirmText: "Remove",
        onConfirm: () => void doDelete(),
      });
    } else {
      await doDelete();
    }
  };

  const renderGroupList = (category: DuplicateCategory, title: string) => {
    if (!settings.groupSettings[category]) return null;
    const groups = duplicateGroups[category];
    return (
      <div className="duplicate-group">
        <div className="duplicate-group__heading">
          <div className="duplicate-group__heading-title">{title}</div>
          <div className="duplicate-group__heading-length">{groups.length} found</div>
        </div>
        <div className="duplicate-group__list">
          {groups.map((g) => (
            <div
              className={`duplicate-group__item duplicate-group__item--${category}`}
              key={g.mainTrack.uid}
            >
              <DuplicateItem
                category={category}
                isSource
                metadata={metadata}
                onDelete={handleDelete}
                track={g.mainTrack}
              />
              <div className="duplicate-group__duplicates-list">
                {g.duplicates.map((dup) => (
                  <DuplicateItem
                    category={category}
                    key={dup.uid}
                    metadata={metadata}
                    onDelete={handleDelete}
                    track={dup}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
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
            onClick={() => setView(view === "finder" ? "settings" : "finder")}
            type="button"
          >
            <Icons.React.settings />
          </button>
          <button className="modal__button" onClick={() => PopupModal.hide()} type="button">
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
                disabled={loadingPlaylists || loadingTracks}
                onChange={(uri) =>
                  setSelectedPlaylist(playlists.find((p) => p.uri === uri) ?? undefined)
                }
                options={playlists.map((p) => ({ value: p.uri, label: p.name }))}
                value={selectedPlaylist?.uri ?? ""}
              />
            </div>
            {loadingTracks ? (
              <div className="find-duplicates__loading">
                {/*@ts-expect-error*/}
                <UI.ProgressDots size={"medium"} />
              </div>
            ) : (
              <>
                {renderGroupList("exact", "Exact URI Matches")}
                {renderGroupList("isrc", "Same ISRC")}
                {renderGroupList("probable", "Same Title + Shared Artist")}
                {renderGroupList("likely", "Same Title + Same Duration (±5s)")}
                {renderGroupList("possible", "Similar Title + Same Duration (±5s)")}
                {renderGroupList("maybe", "Maybe Duplicates (Very likely incorrect)")}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
