# Fullscreen Lyrics

Adds a button to Lyrics Plus to make the lyrics fill up the entire window!

## Usage

Click the **Fullscreen** button located in the Lyrics Plus configuration area to
toggle fullscreen mode for your lyrics view. When enabled, unnecessary UI
elements will be hidden to maximize the lyrics display.

## Installation

You can install the extension manually or via
**[marketplace](https://github.com/spicetify/spicetify-marketplace)**

### Manual Installation

1. Clone or download the repository
2. Navigate to your Spicetify folder (Type `spicetify config-dir` in terminal)
3. Move the entire `dist` folder into `themes`
4. Rename the `dist` folder to `boring`
5. Open Terminal and run these commands to apply:

```sh
spicetify config extensions fullscreenLyrics.js
spicetify apply
```

Note: Using the `config` command to add the extension will always append the
file name to the existing extensions list. It does not replace the whole key's
value.

If you encounter any bugs, please report them
[here](https://github.com/veryboringhwl/spicetify-extensions/issues/new) on the
GitHub repo.
