interface Response {
  items: object[];
}

async function fetchAllPlaylistTracks(playlistUri: string): Promise<Response> {
  const response: { items: object[] } = await Spicetify.Platform.PlaylistAPI.getContents(
    playlistUri,
    {
      offset: 0,
      limit: -1,
    },
  );

  return {
    items: response.items,
  };
}

export default fetchAllPlaylistTracks;
