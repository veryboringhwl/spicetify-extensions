# Developer Utilities

A set of developer-focused tools for Spicetify to help you inspect Spotify entities faster.

## Features

From supported right-click menus, this extension adds a **Developer Utils** submenu with options to:

- **Copy Track Props**
- **Copy Playlist Props**
- **Copy Album Props**
- **Copy All Props**
- **Log ContextMenuV2 Params**

These are useful when debugging extensions, inspecting metadata, or building new context-menu integrations.

## Usage

1. Right-click a supported item (for example a **Track**, **Playlist**, or **Album**).
2. Open **Developer Utils**.
3. Choose the action you want:
   - Copy selected props to your clipboard, or
   - Log context menu parameters for inspection.

## Installation

You can install the extension via **[marketplace](https://github.com/spicetify/spicetify-marketplace)** or manually.

### Marketplace Installation

1. Open the Marketplace tab in Spotify (Spicetify).
2. Search for **Developer Utilities**.
3. Click **Install** and reload Spotify if prompted.

### Manual Installation

1. Clone or download this repository.
2. Run `spicetify config-dir` in your terminal to find your Spicetify config directory.
3. Move `developerUtilities.mjs` from the `dist` folder into your spicetify `Extensions` folder
4. Apply changes:

```
spicetify config extensions developerUtilities.mjs
spicetify apply
```

## Bug Reports

If you encounter any bugs, please report them
[here](https://github.com/veryboringhwl/spicetify-extensions/issues/new) on the
GitHub repo.
