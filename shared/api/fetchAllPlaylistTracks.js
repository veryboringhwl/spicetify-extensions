async function fetchAllPlaylistTracks(playlistUri) {
  const response = await Spicetify.Platform.PlaylistAPI.getContents(playlistUri, {
    offset: 0,
    limit: -1,
  });

  return {
    items: response.items,
  };
}

export default fetchAllPlaylistTracks;
