async function fetchISRCsForTracks(tracks) {
  const isrcMap = new Map();
  const trackUrisToFetch = new Map();

  for (const track of tracks) {
    if (track?.uri) {
      trackUrisToFetch.set(track.uri, Spicetify.URI.fromString(track.uri).id);
    }
  }

  // this is the maximum number spotify allows in a single request
  const batchSize = 50;
  const batchFetchPromises = Array.from(trackUrisToFetch.values())
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
          const isrc = track?.external_ids?.isrc;
          const trackUri = track?.uri;
          if (isrc && trackUri) {
            isrcMap.set(trackUri, isrc);
          }
        }
      }
    });

  await Promise.all(batchFetchPromises);
  return isrcMap;
}

export default fetchISRCsForTracks;
