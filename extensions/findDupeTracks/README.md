# Find Duplicate Tracks

Find and remove duplicate songs from your Spotify playlists with clear, reviewable duplicate groups.

## Features

- Scans editable playlists for duplicate entries.
- Groups potential duplicates by confidence/type.
- Lets you review groups before deleting tracks.

Current duplicate groups:

- **Identical Tracks** (`exact`)  
  The exact same Spotify track URI appears multiple times.

- **Same Recording** (`isrc`)  
  Different Spotify entries that share the same ISRC recording ID.

- **Same Title & Artist** (`probable`)  
  Tracks with the same title and at least one shared artist.

- **Title & Length Match** (`likely`)  
  Tracks with the same title and similar duration (within ~5 seconds).

- **Similar Songs** (`possible`)  
  Tracks with similar titles and durations (can include remixes/covers).

- **Possible Matches** (`maybe`)  
  Lower-confidence name-similarity matches. Review very carefully.

> [!CAUTION]
> Deleting tracks is irreversible. Always verify each group before confirming removal.

## Usage

1. Open Spotify and go to a playlist you can edit.
2. Right-click the playlist in the sidebar (or use the three-dot menu on the playlist page).
3. Select **Find Duplicates**.
4. Review each duplicate group and remove only the tracks you want deleted.

## Installation

You can install the extension via **[marketplace](https://github.com/spicetify/spicetify-marketplace)** or manually.

### Marketplace Installation

1. Open the Marketplace tab in Spicetify.
2. Search for `Find Duplicate Tracks`.
3. Click **Install** and reload Spotify.

### Manual Installation

1. Clone or download this repository.
2. Find your Spicetify config directory by running `spicetify config-dir`.
3. Move `findDupeTracks.mjs` from the `dist` folder into your spicetify `Extensions` folder
4. Run:

```
spicetify config extensions findDupeTracks.mjs
spicetify apply
```

## Bug Reports

If you find an issue, report it here:  
[https://github.com/veryboringhwl/spicetify-extensions/issues/new](https://github.com/veryboringhwl/spicetify-extensions/issues/new)
