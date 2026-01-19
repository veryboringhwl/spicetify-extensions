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

class FindDupeTracks extends Dexie {
  public tracks!: Table<DbTrack, string>;

  constructor() {
    super("findDupeTracks");
    this.version(0.1).stores({
      tracks:
        "&trackUri, trackName, trackDuration, albumUri, trackPlayCount, trackIsrc, ignoreDuplicates",
    });
  }
}

const db = new FindDupeTracks();

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
      const items = await fetchAllLibraryContents();
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
        const { items } = await fetchAllPlaylistTracks(playlistUri);

        if (abortController.signal.aborted) return;

        const castItems = items as Track[];
        setTracks(castItems);

        const dbTracks = await db.tracks.bulkGet(castItems.map((t) => t.uri));

        const cached = new Map(
          dbTracks.filter((t): t is DbTrack => t != null).map((t) => [t.trackUri, t]),
        );

        const needsUpdate = castItems.filter((t) => {
          const c = cached.get(t.uri);
          return !c || c.trackPlayCount == null || c.trackDuration == null || c.trackIsrc == null;
        });

        const playCounts = new Map<string, number>();
        const durations = new Map<string, number>();
        const isrcs = new Map<string, string>();

        cached.forEach((c) => {
          if (c.trackPlayCount != null) playCounts.set(c.trackUri, c.trackPlayCount);
          if (c.trackDuration != null) durations.set(c.trackUri, c.trackDuration);
          if (c.trackIsrc != null) isrcs.set(c.trackUri, c.trackIsrc);
        });

        if (needsUpdate.length > 0) {
          const [graphQLData, webAPIData] = await Promise.all([
            fetchGraphQLForTracks(needsUpdate.map((t) => t.album.uri)),
            fetchWebAPIForTracks(needsUpdate.map((t) => t.uri)),
          ]);

          if (abortController.signal.aborted) return;

          const dbUpdates: DbTrack[] = [];

          needsUpdate.forEach((t) => {
            const graphQLMeta = graphQLData.get(t.uri) as any;
            const webAPIMeta = webAPIData.get(t.uri) as any;

            const duration = graphQLMeta?.duration?.totalMilliseconds ?? null;
            const count = graphQLMeta?.playcount ? Number(graphQLMeta.playcount) : null;
            const isrc =
              webAPIMeta?.external_ids?.isrc ??
              webAPIMeta?.external_id?.find(
                (e: Record<string, any>) => (e?.type || "").toLowerCase() === "isrc",
              )?.id;

            if (count != null) playCounts.set(t.uri, count);
            if (duration != null) durations.set(t.uri, duration);
            if (isrc != null) isrcs.set(t.uri, isrc);

            dbUpdates.push({
              trackUri: t.uri,
              trackName: t.name,
              albumUri: t.album.uri,
              trackDuration: duration,
              trackPlayCount: count,
              trackIsrc: isrc,
            });
          });

          await db.tracks.bulkPut(dbUpdates);
        }

        if (!abortController.signal.aborted) {
          setMetadata({ playCounts, durations, isrcs });
          setLoading(false);
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
  const { playCounts, durations, isrcs } = metadata;
  const { defaultNormalizeWords, customNormalizeWords, groupSettings } = settings;

  const sortAndFormat = (rawGroups: Record<string, Track[]>): ReadonlyArray<DuplicateGroup> => {
    const results: DuplicateGroup[] = [];
    Object.values(rawGroups).forEach((group) => {
      if (group.length > 1) {
        const sorted = [...group].sort(
          (a, b) => (playCounts.get(b.uri) ?? 0) - (playCounts.get(a.uri) ?? 0),
        );
        results.push({ mainTrack: sorted[0], duplicates: sorted.slice(1) });
      }
    });
    return results;
  };

  const rawGroups = useMemo(() => {
    if (tracks.length === 0) {
      return { exact: {}, isrc: {}, probable: {}, likely: {}, possible: {}, maybe: {} };
    }

    const allNormWords = [...defaultNormalizeWords, ...customNormalizeWords];
    const regex = createNormalizationRegex(allNormWords);

    const exact = groupSettings.exact
      ? (Object.groupBy(tracks, (t) => t.uri) as Record<string, Track[]>)
      : {};

    const isrc = groupSettings.isrc
      ? (Object.groupBy(
          tracks.filter((t) => isrcs.has(t.uri)),
          (t) => isrcs.get(t.uri) ?? "",
        ) as Record<string, Track[]>)
      : {};

    const candidates = tracks.map((t) => ({
      track: t,
      normName: t.name.toLowerCase().trim(),
      normFuzzy: normalizeStringOptimized(t.name, regex),
      artists: new Set(t.artists.map((a) => a.name.toLowerCase())),
      uid: t.uid,
    }));

    const filterByDuration = (
      inputCandidates: typeof candidates,
      keySelector: (c: (typeof candidates)[0]) => string,
    ) => {
      const groups: Record<string, Track[]> = {};
      const byKey = Object.groupBy(inputCandidates, keySelector);

      Object.values(byKey).forEach((group) => {
        if (!group || group.length < 2) return;
        const used = new Set<string>();
        for (const c1 of group) {
          if (used.has(c1.uid)) continue;
          const d1 = durations.get(c1.track.uri);
          if (!d1) continue;

          const match = [c1.track];
          for (const c2 of group) {
            if (c1 === c2 || used.has(c2.uid)) continue;
            const d2 = durations.get(c2.track.uri);
            if (d2 && Math.abs(d1 - d2) <= 5000) {
              match.push(c2.track);
              used.add(c2.uid);
            }
          }
          if (match.length > 1) {
            used.add(c1.uid);
            groups[c1.uid] = match;
          }
        }
      });
      return groups;
    };

    const probable = groupSettings.probable
      ? (() => {
          const groups: Record<string, Track[]> = {};
          const byName = Object.groupBy(candidates, (c) => c.normName);
          Object.values(byName).forEach((list) => {
            if (!list || list.length < 2) return;
            const used = new Set<string>();
            list.forEach((c1) => {
              if (used.has(c1.uid)) return;
              const match = [c1.track];
              list.forEach((c2) => {
                if (c1 === c2 || used.has(c2.uid)) return;
                if (c2.track.artists.some((a) => c1.artists.has(a.name.toLowerCase()))) {
                  match.push(c2.track);
                  used.add(c2.uid);
                }
              });
              if (match.length > 1) {
                used.add(c1.uid);
                groups[c1.uid] = match;
              }
            });
          });
          return groups;
        })()
      : {};

    const likely = groupSettings.likely ? filterByDuration(candidates, (c) => c.normName) : {};

    const possible = groupSettings.possible ? filterByDuration(candidates, (c) => c.normFuzzy) : {};

    const maybe = (() => {
      if (!groupSettings.maybe) return {};

      const fuzzyList = candidates.filter((c) => c.normFuzzy.length >= 3);
      fuzzyList.sort((a, b) => a.normFuzzy.localeCompare(b.normFuzzy));

      const groups: Record<string, Track[]> = {};
      const usedFuzzy = new Set<string>();
      const LOOKAHEAD = 50;

      for (let i = 0; i < fuzzyList.length; i++) {
        const c1 = fuzzyList[i];
        if (usedFuzzy.has(c1.uid)) continue;
        const match = [c1.track];
        const maxJ = Math.min(i + LOOKAHEAD, fuzzyList.length);

        for (let j = i + 1; j < maxJ; j++) {
          const c2 = fuzzyList[j];
          if (usedFuzzy.has(c2.uid)) continue;
          if (c1.normFuzzy[0] !== c2.normFuzzy[0]) break;
          const sim = calculateSimilarity(c1.normFuzzy, c2.normFuzzy);
          if (sim >= 0.7) {
            match.push(c2.track);
          }
        }

        if (match.length > 1) {
          match.forEach((m) => {
            usedFuzzy.add(m.uid);
          });
          groups[c1.uid] = match;
        }
      }
      return groups;
    })();

    return { exact, isrc, probable, likely, possible, maybe };
  }, [tracks, groupSettings, defaultNormalizeWords, customNormalizeWords, durations, isrcs]);

  const res: DuplicateGroups = {
    exact: sortAndFormat(rawGroups.exact),
    isrc: sortAndFormat(rawGroups.isrc),
    probable: sortAndFormat(rawGroups.probable),
    likely: sortAndFormat(rawGroups.likely),
    possible: sortAndFormat(rawGroups.possible),
    maybe: sortAndFormat(rawGroups.maybe),
  };
  return res;
};

function TrackDetails({
  track,
  playCounts,
}: {
  track: Track;
  playCounts: ReadonlyMap<string, number>;
}) {
  const count = playCounts.get(track.uri);
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
      <span className="slider-time">{formatTime(duration)}</span>)
    </div>
  );
}

const DuplicateItem = function DuplicateItem({
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
          <TrackDetails playCounts={metadata.playCounts} track={track} />
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
};

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

  const handleDelete = async (category: DuplicateCategory, track: Track) => {
    const doDelete = async () => {
      if (selectedPlaylist) {
        await Spicetify.Platform.PlaylistAPI.remove(selectedPlaylist.uri, [{ uid: track.uid }]);
        setTracks((prev) => prev.filter((t) => t.uid !== track.uid));
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
