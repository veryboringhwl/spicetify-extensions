async function fetchWebAPIForTracks(trackURIs) {
  const dataMap = new Map();
  const trackIdsToFetch = new Map();

  for (const uri of trackURIs) {
    if (uri) {
      trackIdsToFetch.set(uri, Spicetify.URI.fromString(uri).id);
    }
  }

  // this is the maximum number spotify allows in a single request
  const batchSize = 50;
  const batchFetchPromises = Array.from(trackIdsToFetch.values())
    .reduce((batches, id, i) => {
      const batchIndex = Math.floor(i / batchSize);
      batches[batchIndex] = batches[batchIndex] || [];
      batches[batchIndex].push(id);
      return batches;
    }, [])
    .map(async (batchIds) => {
      const url = `https://api.spotify.com/v1/tracks?ids=${batchIds.join(",")}`;
      const response = await Spicetify.CosmosAsync.get(url);
      if (response?.tracks) {
        for (const track of response.tracks) {
          const trackUri = track?.uri;
          if (trackUri) {
            dataMap.set(trackUri, track);
          }
        }
      }
    });

  await Promise.all(batchFetchPromises);
  return dataMap;
}

export default fetchWebAPIForTracks;
