const PlaylistAPI =
  Spicetify.Platform.PlaylistAPI || Spicetify.Platform.Registry.resolve(Symbol.for("PlaylistAPI"));

interface Response {
  items: object[];
}

export async function fetchAllPlaylistTracks(playlistUri: string): Promise<Response> {
  const response: { items: object[] } = (await PlaylistAPI.getContents(playlistUri, {
    offset: 0,
    limit: -1,
  })) as { items: object[] };

  return {
    items: response.items,
  };
}
