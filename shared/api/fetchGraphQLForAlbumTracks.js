async function fetchGraphQLForAlbumTracks(albumURIs) {
  const dataMap = new Map();

  const batchFetchPromises = Array.from(albumURIs).map(async (albumUri) => {
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
        if (trackUri) {
          dataMap.set(trackUri, item.track);
        }
      }
    }
  });

  await Promise.all(batchFetchPromises);
  return dataMap;
}

export default fetchGraphQLForAlbumTracks;
