import { useEffect, useState } from "react";
import { ConfirmDialog } from "../../../shared/components/confirmDialog.tsx";
import { Input } from "../../../shared/components/input.tsx";
import { type Option, OptionRow } from "../../../shared/components/optionRow.tsx";

const DEFAULT_NORMALIZE_WORDS = [
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

export type ToggleSettings = {
  exact: boolean;
  isrc: boolean;
  likely: boolean;
  possible: boolean;
};

export interface Settings {
  groupSettings: ToggleSettings;
  confirmSettings: ToggleSettings;
  defaultNormalizeWords: string[];
  customNormalizeWords: string[];
}

export const SETTINGS_STORAGE_KEY = "findDupeTracks";
export const SETTINGS_CHANGED_EVENT = "findDupeTracks:settingsChanged";

const DEFAULT_SETTINGS: Settings = {
  groupSettings: {
    exact: true,
    isrc: true,
    likely: true,
    possible: true,
  },
  confirmSettings: {
    exact: false,
    isrc: false,
    likely: true,
    possible: true,
  },
  defaultNormalizeWords: [...DEFAULT_NORMALIZE_WORDS],
  customNormalizeWords: [],
};

const loadSettings = (): Settings => {
  const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
  if (savedSettings) {
    const parsed = JSON.parse(savedSettings);
    if (!parsed.defaultNormalizeWords) {
      parsed.defaultNormalizeWords = [...DEFAULT_NORMALIZE_WORDS];
    }
    const settings = { ...DEFAULT_SETTINGS, ...parsed };
    settings.groupSettings = { ...DEFAULT_SETTINGS.groupSettings, ...(parsed.groupSettings || {}) };
    settings.confirmSettings = {
      ...DEFAULT_SETTINGS.confirmSettings,
      ...(parsed.confirmSettings || {}),
    };
    return settings;
  }
  return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
};

const saveSettings = (settings: Settings) => {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  window.dispatchEvent(new CustomEvent(SETTINGS_CHANGED_EVENT));
};

export const getSettings = (): Settings => {
  return loadSettings();
};

const SettingsMenu = () => {
  const [settings, setSettings] = useState<Settings>(loadSettings());
  const [newWord, setNewWord] = useState("");

  useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  const renderToggles = (
    title: string,
    settingsKey: "groupSettings" | "confirmSettings",
    labels: Record<keyof ToggleSettings, string>,
  ) => (
    <section className="duplicate-settings__section">
      <h3 className="duplicate-settings__section-title">{title}</h3>
      <div className="duplicate-settings__options">
        {Object.entries(labels).map(([key, desc]) => {
          const option: Option = {
            type: "toggle",
            name: `${key}-${settingsKey}`,
            desc,
            defaultVal: DEFAULT_SETTINGS[settingsKey][key as keyof ToggleSettings],
          };
          return (
            <OptionRow
              desc={desc}
              key={key}
              name={`${key}-${settingsKey}`}
              onChange={(newValue) =>
                setSettings((prev: Settings) => ({
                  ...prev,
                  [settingsKey]: {
                    ...prev[settingsKey],
                    [key]: newValue,
                  },
                }))
              }
              option={option}
              value={settings[settingsKey][key as keyof ToggleSettings]}
            />
          );
        })}
      </div>
    </section>
  );

  const addCustomWord = () => {
    const word = newWord.trim().toLowerCase();
    if (!word) return;
    if (
      (settings.customNormalizeWords || []).includes(word) ||
      (settings.defaultNormalizeWords || []).includes(word)
    )
      return;
    setSettings((prev: Settings) => ({
      ...prev,
      customNormalizeWords: [...(prev.customNormalizeWords || []), word],
    }));
    setNewWord("");
  };

  const removeWord = (word: string, isDefault: boolean) => {
    setSettings((prev: Settings) =>
      isDefault
        ? {
            ...prev,
            defaultNormalizeWords: (prev.defaultNormalizeWords || []).filter(
              (w: string) => w !== word,
            ),
          }
        : {
            ...prev,
            customNormalizeWords: (prev.customNormalizeWords || []).filter(
              (w: string) => w !== word,
            ),
          },
    );
  };

  const resetSettings = () => {
    ConfirmDialog({
      titleText: "Are you sure?",
      descriptionText: "This will reset all settings to default!",
      confirmText: "Reset",
      onConfirm: () => setSettings(JSON.parse(JSON.stringify(DEFAULT_SETTINGS))),
    });
  };

  const allWords = [
    ...(settings.defaultNormalizeWords || []).map((word: string) => ({ word, isDefault: true })),
    ...(settings.customNormalizeWords || []).map((word: string) => ({ word, isDefault: false })),
  ];

  return (
    <div className="duplicate-settings">
      {renderToggles("Duplicate Groups to Display", "groupSettings", {
        exact: "Exact Duplicates (Same URI)",
        isrc: "ISRC Duplicates (Same Recording)",
        likely: "Likely Duplicates (Same Name)",
        possible: "Possible Duplicates (Similar Name)",
      })}

      {renderToggles("Confirm Before Deleting", "confirmSettings", {
        exact: "Exact Duplicates",
        isrc: "ISRC Duplicates",
        likely: "Likely Duplicates",
        possible: "Possible Duplicates",
      })}

      <section className="duplicate-settings__section">
        <h3 className="duplicate-settings__section-title">Normalization Words</h3>
        <p className="duplicate-settings__description">
          Add or remove words to be ignored when comparing track names for similarity.
        </p>
        <div className="option__row">
          <div className="option__content">
            <div className="option__desc">Add a word to normalization list</div>
          </div>
          <div className="option__control">
            <Input
              disabled={false}
              onChange={(value: string) => setNewWord(value)}
              placeholder="Enter word to normalize"
              value={newWord}
            />
            <button
              onClick={addCustomWord}
              onKeyDown={(e) => e.key === "Enter" && addCustomWord()}
              style={{ marginLeft: 8 }}
              type="button"
            >
              Add
            </button>
          </div>
        </div>
        <div className="duplicate-settings__words-list">
          {allWords.length > 0 ? (
            <div className="duplicate-settings__words-ul">
              {allWords.map(({ word, isDefault }) => (
                <div className="duplicate-settings__word-item" key={word}>
                  {word}
                  <button
                    className="duplicate-settings__word-remove"
                    onClick={() => removeWord(word, isDefault)}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="duplicate-settings__no-words">No normalization words</p>
          )}
        </div>
      </section>
      <div className="duplicate-settings__actions">
        <button className="duplicate-settings__reset" onClick={resetSettings} type="button">
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default SettingsMenu;
