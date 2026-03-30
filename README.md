# Spicetify Extensions

A collection of extensions for
[Spicetify](https://github.com/spicetify/spicetify-cli) to enhance your Spotify experience.

## Extensions

### 1. Fullscreen Lyrics Plus

Adds a fullscreen button to Lyrics Plus to make the lyrics fill up the entire window,
hiding unnecessary UI elements for a distraction-free experience.

- [README](./extensions/fullscreenLyricsPlus/README.md)

### 2. Find Duplicate Tracks

Helps you identify and remove duplicate tracks from editable playlists with
smart grouping for easier review.

- [README](./extensions/findDupeTracks/README.md)

### 3. Developer Utilities

Adds developer-focused context menu utilities to inspect and copy Spotify
object data quickly.

- [README](./extensions/developerUtilities/README.md)

## Installation

You can install the extension via **[marketplace](https://github.com/spicetify/spicetify-marketplace)** or manually.

### Marketplace Installation (Recommended)

1. Open the **Marketplace** tab in Spicetify.
2. Search for the extension by name.
3. Click **Install**.
4. Reload Spotify if prompted.

### Manual Installation

1. Clone or download this repository.
2. Navigate to your Spicetify folder (type `spicetify config-dir` in terminal)
3. Move the extension you want from `dist` folder into the `extensions` folder
4. Open Terminal and run these commands to apply:

```
spicetify config extensions extension-name.mjs
spicetify apply
```

## Contributing

Issues and pull requests are welcome. If you find a bug or have an idea for an
improvement, open an issue in this repository.
