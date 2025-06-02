async function fetchPlayCountsForTracks(tracks) {
  const playCountMap = new Map();
  const trackUrisToFetch = new Map();

  for (const track of tracks) {
    if (track?.album?.uri) {
      trackUrisToFetch.set(track.uri, track.album.uri);
    }
  }

  const batchFetchPromises = Array.from(
    Array.from(trackUrisToFetch.values())
      .reduce((batches, albumUri) => {
        batches.set(albumUri, batches.get(albumUri) || new Set());
        return batches;
      }, new Map())
      .entries(),
  ).map(async ([albumUri]) => {
    const response = await Spicetify.Platform.GraphQLLoader(
      Spicetify.GraphQL.Definitions.queryAlbumTracks,
      {
        uri: albumUri,
        locale: Spicetify.Locale.getLocale(),
        offset: 0,
        limit: 5000,
      },
    );
    const albumTracksData = response?.data?.albumUnion?.tracksV2?.items;
    if (albumTracksData) {
      for (const item of albumTracksData) {
        const trackUri = item?.track?.uri;
        if (trackUrisToFetch.has(trackUri)) {
          const countStr = item.track.playcount;
          const playCountValue = countStr ? Number.parseInt(countStr, 10) : 0;
          playCountMap.set(trackUri, playCountValue);
        }
      }
    }
  });

  await Promise.all(batchFetchPromises);
  return playCountMap;
}

export default fetchPlayCountsForTracks;
