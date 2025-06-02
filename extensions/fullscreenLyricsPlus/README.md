# Fullscreen Lyrics

Adds a button to Lyrics Plus to make the lyrics fill up the entire window!

## Usage

Click the **Fullscreen** button located in the Lyrics Plus configuration area to
toggle fullscreen mode for your lyrics view. When enabled, All UI
elements will be hidden to maximize the lyrics display.

## Installation

You can install the extension manually or via
**[marketplace](https://github.com/spicetify/spicetify-marketplace)**

### Marketplace Installation

1. Go marketplace tab
2. Search for `Find Duplicate Tracks`
3. Press the `Install` button and reload Spotify

### Manual Installation

1. Clone or download the repository
2. Navigate to your Spicetify folder (type `spicetify config-dir` in terminal)
3. Move the `fullscreenLyricsPlus.mjs` from the `dist` folder into the `extensions` folder
4. Open Terminal and run these commands to apply:

```
spicetify config extensions fullscreenLyricsPlus.mjs
spicetify apply
```

Note: Using the `config` command to add the extension will always append the
file name to the existing extensions list. It does not replace the whole key's
value.

## Bug Reports

If you encounter any bugs, please report them
[here](https://github.com/veryboringhwl/spicetify-extensions/issues/new) on the
GitHub repo.
