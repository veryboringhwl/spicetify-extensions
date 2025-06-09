# Spicetify Extensions

A collection of extensions for
[Spicetify](https://github.com/spicetify/spicetify-cli) to enhance your Spotify
experience.

## Extensions

### 1. Fullscreen Lyrics Plus

Adds a button to Lyrics Plus to make the lyrics fill up the entire window,
hiding unnecessary UI elements for a distraction-free experience.

- [README](./extensions/fullscreenLyricsPlus/README.md)

### 2. Find Duplicate Tracks

Helps you find and remove duplicate tracks in your playlists. Groups duplicates
by exact, likely, and possible matches for easy review and deletion.

- [README](./extensions/findDupeTracks/README.md)

## Installation

You can install the extension manually or via
**[marketplace](https://github.com/spicetify/spicetify-marketplace)**

### Marketplace Installation

1. Go marketplace tab
2. Search for the extension
3. Press the `Install` button and reload Spotify

### Manual Installation

1. Clone or download the repository
2. Navigate to your Spicetify folder (type `spicetify config-dir` in terminal)
3. Move the extension you want from `dist` folder into the `extensions` folder
4. Open Terminal and run these commands to apply:

```
spicetify config extensions extension-name.mjs
spicetify apply
```

Note: Using the `config` command to add the extension will always append the
file name to the existing extensions list. It does not replace the whole key's
value.
