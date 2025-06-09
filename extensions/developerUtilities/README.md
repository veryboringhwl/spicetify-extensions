# Developer Utilities

Adds a collection of useful Utilities to make the developer experience easier!

## Usage

Right-click on a Track/Playlist/Album then select **Developer Utils**.

This extension can:

- **Copy Track/Playlist/Album Props**
- **Copy All Props** into:
- **Log all ContextMenuV2 parameters** into:

## Installation

You can install the extension manually or via
**[marketplace](https://github.com/spicetify/spicetify-marketplace)**

### Marketplace Installation

1. Go marketplace tab
2. Search for `Developer Utilities`
3. Press the `Install` button and reload Spotify

### Manual Installation

1. Clone or download the repository
2. Navigate to your Spicetify folder (type `spicetify config-dir` in terminal)
3. Move the `developerUtilities.mjs` from the `dist` folder into the `extensions` folder
4. Open Terminal and run these commands to apply:

```
spicetify config extensions developerUtilities.mjs
spicetify apply
```

Note: Using the `config` command to add the extension will always append the
file name to the existing extensions list. It does not replace the whole key's
value.

## Bug Reports

If you encounter any bugs, please report them
[here](https://github.com/veryboringhwl/spicetify-extensions/issues/new) on the
GitHub repo.
