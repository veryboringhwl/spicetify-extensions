import { useEffect, useState } from "react";
import ConfirmDialog from "../../../shared/components/confirmDialog";
import Input from "../../../shared/components/input";
import OptionRow from "../../../shared/components/optionRow";
import Toggle from "../../../shared/components/toggle";

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

const DEFAULT_SETTINGS = {
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
  defaultNormalizeWords: DEFAULT_NORMALIZE_WORDS,
  customNormalizeWords: [],
};

const loadSettings = () => {
  const savedSettings = localStorage.getItem("findDupeTracks");
  if (savedSettings) {
    const parsed = JSON.parse(savedSettings);
    if (!parsed.defaultNormalizeWords) parsed.defaultNormalizeWords = [...DEFAULT_NORMALIZE_WORDS];
    return parsed;
  }
  return DEFAULT_SETTINGS;
};

const saveSettings = (settings) => {
  localStorage.setItem("findDupeTracks", JSON.stringify(settings));
};

export const getSettings = () => {
  return loadSettings();
};

const SettingsMenu = () => {
  const [settings, setSettings] = useState(loadSettings());
  const [newWord, setNewWord] = useState("");

  useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  const renderToggles = (title, settingsKey, labels) => (
    <section className="duplicate-settings__section">
      <h3 className="duplicate-settings__section-title">{title}</h3>
      <div className="duplicate-settings__options">
        {Object.entries(labels).map(([key, desc]) => (
          <OptionRow desc={desc} key={key} name={`${key}-${settingsKey}`}>
            <Toggle
              onChange={() =>
                setSettings((prev) => ({
                  ...prev,
                  [settingsKey]: {
                    ...prev[settingsKey],
                    [key]: !prev[settingsKey][key],
                  },
                }))
              }
              value={settings[settingsKey][key]}
            />
          </OptionRow>
        ))}
      </div>
    </section>
  );

  const addCustomWord = () => {
    const word = newWord.trim().toLowerCase();
    if (!word) return;
    if (
      settings.customNormalizeWords.includes(word) ||
      settings.defaultNormalizeWords.includes(word)
    )
      return;
    setSettings((prev) => ({
      ...prev,
      customNormalizeWords: [...prev.customNormalizeWords, word],
    }));
    setNewWord("");
  };

  const removeWord = (word, isDefault) => {
    setSettings((prev) =>
      isDefault
        ? {
            ...prev,
            defaultNormalizeWords: prev.defaultNormalizeWords.filter((w) => w !== word),
          }
        : {
            ...prev,
            customNormalizeWords: prev.customNormalizeWords.filter((w) => w !== word),
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
    ...settings.defaultNormalizeWords.map((word) => ({ word, isDefault: true })),
    ...settings.customNormalizeWords.map((word) => ({ word, isDefault: false })),
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
        <OptionRow desc="Add a word to normalization list" name="custom-words">
          <Input
            disabled={false}
            onChange={(e) => setNewWord(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomWord()}
            placeholder="Enter word to normalize"
            value={newWord}
          />
          <button onClick={addCustomWord} style={{ marginLeft: 8 }} type="button">
            Add
          </button>
        </OptionRow>
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
