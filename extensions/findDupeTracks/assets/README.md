# Find Duplicate Tracks

Make finding duplicated tracks in your playlist much easier

## Usage

Right-click on a playlist in the right sidebar or click the three dots on the
playlist page, then select **Find duplicates**.

Once initiated, the extension will:

- **Scan** the selected playlist.
- **Group duplicate tracks** into:
  - **Exact Duplicates**: Tracks with the same URI.
  - **Likely Duplicates**: Tracks with the same name but different URIs.
  - **Possible Duplicates**: Tracks with similar names (manual verification
    recommended).

Review the grouped duplicates and click the **Delete** button to remove unwanted
tracks.

> [!CAUTION]
>
> - Verify before deleting as removal is irreversible.

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
spicetify config extensions findDupeTracks.js
spicetify apply
```

## Installation

If you encounter any bugs, please report them
[here](https://github.com/veryboringhwl/spicetify-extensions/issues/new) on the
GitHub repo.
