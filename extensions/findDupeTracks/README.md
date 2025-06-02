# Find Duplicate Tracks

Makes finding duplicated tracks in your playlist much easier!

## Usage

Right-click on a playlist that you can edit in the right sidebar or click the
three dots on the playlist page, then select **Find duplicates**.

Review the grouped duplicates and click the **Delete** button to remove unwanted
tracks.

Once initiated, the extension will:

- **Scan** the selected playlist.
- **Group duplicate tracks** into:
  - **Exact Duplicates**: Tracks with the same URI.
  - **ISRC Duplicates**: Tracks with the same ISRC.
  - **Likely Duplicates**: Tracks with the same name and same Capitalisation.
  - **Possible Duplicates**: Tracks with similar names (manual verification
    recommended).

> [!CAUTION]
>
> - Verify before deleting as removal is irreversible.

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
3. Move the `findDupeTracks.mjs` from the `dist` folder into the `extensions` folder
4. Open Terminal and run these commands to apply:

```
spicetify config extensions findDupeTracks.mjs
spicetify apply
```

Note: Using the `config` command to add the extension will always append the
file name to the existing extensions list. It does not replace the whole key's
value.

## Bug Reports

If you encounter any bugs, please report them
[here](https://github.com/veryboringhwl/spicetify-extensions/issues/new) on the
GitHub repo.
