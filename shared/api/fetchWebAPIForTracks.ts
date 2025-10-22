export async function fetchWebAPIForTracks(trackURIs: Array<string>): Promise<Map<string, object>> {
  const dataMap = new Map<string, object>();
  const trackIdsToFetch = new Map<string, string>();

  for (const uri of trackURIs) {
    if (uri) {
      const id = Spicetify.URI.fromString(uri).id;
      if (id) {
        trackIdsToFetch.set(uri, id);
      }
    }
  }

  // this is the maximum number spotify allows in a single request
  const batchSize = 50;
  const batchFetchPromises = Array.from(trackIdsToFetch.values())
    .reduce((batches: string[][], id: string, i: number) => {
      const batchIndex = Math.floor(i / batchSize);
      batches[batchIndex] = batches[batchIndex] || [];
      batches[batchIndex].push(id);
      return batches;
    }, [] as string[][])
    .map(async (batchIds: string[]): Promise<void> => {
      const url = `https://api.spotify.com/v1/tracks?ids=${batchIds.join(",")}`;
      const response = await Spicetify.CosmosAsync.get(url);
      if (response?.tracks) {
        for (const track of response.tracks) {
          const trackUri: string | undefined = track?.uri;
          if (trackUri) {
            dataMap.set(trackUri, track);
          }
        }
      }
    });

  await Promise.allSettled(batchFetchPromises);
  return dataMap;
}
