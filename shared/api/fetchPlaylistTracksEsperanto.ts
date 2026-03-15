import { SpotifyWebpack } from "../webpack/webpack.ts";

const PlaylistDataService = "spotify.playlist_esperanto.proto.PlaylistDataService";

interface Response {
  items: object[];
}

export async function fetchPlaylistTracks(playlistUri: string): Promise<Response[]> {
  const PlaylistDataClient = SpotifyWebpack.getClient(PlaylistDataService);

  const response = await PlaylistDataClient.get({
    uri: playlistUri,
    query: {
      range: { start: 0, length: -1 },
    },
    policy: {
      track: {
        rowId: true,
        track: {
          link: true,
          name: true,
        },
        album: {
          album: {
            link: true,
            covers: true,
          },
        },
        artist: {
          link: true,
          name: true,
        },
      },
    },
  });

  return response.data.item;
}
