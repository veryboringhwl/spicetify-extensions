# PR: Add Playlist Permission Check to Find Duplicate Tracks extension

## Summary

Added a permission check that verifies if the user has the right to delete tracks from the selected playlist before showing delete buttons.

## Extension

This PR applies to the **Find Duplicate Tracks** extension (`findDupeTracks`).

## Problem

When a user tries to delete duplicates from a playlist they don't have edit permissions for:
- The delete button appears (even though they can't delete)
- Clicking delete shows it as "removed" in the extension UI
- But the tracks remain in the actual Spotify playlist
- This creates confusion and a poor user experience

## Solution

The extension already fetches a list of playlists the user can edit (using `canAddTo` filter). Instead of making an extra API call to check permissions, we simply use this existing list to determine if the user has delete permissions:

- If the selected playlist is in the editable playlists list, show delete buttons
- If the selected playlist is not in the list (user lacks permission), show "No permission" text

## Implementation Details

The permission check is simplified by leveraging the existing playlist list:
- `useOwnedPlaylists()` already filters playlists with `canAddTo === true`
- `currentPlaylist` is determined by finding the selected URI in this filtered list
- If `currentPlaylist?.canAddTo` is not `true`, the user cannot delete tracks
- No additional API calls needed

## Images

### Image 1: No Permission Case
<img src="https://github.com/user-attachments/assets/8f9fb1ad-db19-4c03-9eb6-a269b6046c15" width="200" alt="No permission" />

**Description:** This image shows the case where the user does **not have permission** to delete tracks from the playlist. Instead of the delete button, the text "No permission" is displayed.

### Image 2: User's Own Playlist (Has Permission)
<img src="https://github.com/user-attachments/assets/c89785a6-b9e5-4ced-b9e2-6ec021af6bb1" width="200" alt="User's playlist with delete button" />

**Description:** This image shows the user's own playlist where they **have permission** to delete tracks. The delete button is visible and functional.

## Files Changed

### `extensions/findDupeTracks/src/menu.tsx`

- Simplified `currentPlaylist` to use existing playlist list directly
- Added `canAddTo` prop to `DuplicateRow` and `GroupSection` components
- Conditionally renders "No permission" text when user lacks delete permissions

### `extensions/findDupeTracks/src/styles.css`

- Added `.duplicate-group__no-permission` styling for the "No permission" text

## Testing

1. Open Find Duplicate Tracks on a playlist you own
2. Verify delete buttons are visible and functional
3. Open Find Duplicate Tracks on a playlist you don't own and is not collaborative
4. Verify "No permission" text appears instead of delete buttons
5. Open Find Duplicate Tracks with collaborator permission.
6. Verify delete buttons are visible and functional