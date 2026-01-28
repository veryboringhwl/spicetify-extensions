//maybe there is internal album endpoint i can use

export async function fetchGraphQLForTracks(
  albumURIs: Array<string>,
): Promise<Map<string, object>> {
  const dataMap = new Map<string, object>();
  const BATCH_SIZE = 50;
  const uniqueAlbums = [...new Set(albumURIs)];

  for (let i = 0; i < uniqueAlbums.length; i += BATCH_SIZE) {
    const batch = uniqueAlbums.slice(i, i + BATCH_SIZE);

    const batchPromises = batch.map(async (albumUri: string): Promise<void> => {
      const response = (await Spicetify.Platform.GraphQLLoader(
        Spicetify.GraphQL.Definitions.queryAlbumTracks,
        {
          uri: albumUri,
          locale: Spicetify.Locale.getLocale(),
          offset: 0,
          limit: 5000,
        },
      )) as { data: any };

      const albumTracksData = response?.data?.albumUnion?.tracksV2?.items;
      if (albumTracksData) {
        for (const item of albumTracksData) {
          const trackUri: string | undefined = item?.track?.uri;
          if (trackUri) {
            dataMap.set(trackUri, item.track);
          }
        }
      }
    });

    await Promise.allSettled(batchPromises);
  }

  return dataMap;
}
