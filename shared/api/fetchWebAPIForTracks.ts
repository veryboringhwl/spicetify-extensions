export async function fetchWebAPIForTracks(trackURIs: Array<string>): Promise<Map<string, object>> {
  const dataMap = new Map<string, object>();

  const allTrackIds = [
    ...new Set(
      trackURIs.map((uri) => Spicetify.URI.fromString(uri).id).filter((id): id is string => !!id),
    ),
  ];

  const fetchViaWebAPI = async (ids: string[]) => {
    const batchSize = 50;
    for (let i = 0; i < ids.length; i += batchSize) {
      const batch = ids.slice(i, i + batchSize);
      const url = `https://api.spotify.com/v1/tracks?ids=${batch.join(",")}`;

      try {
        const response = await Spicetify.CosmosAsync.get(url);
        response?.tracks?.forEach((track: any) => {
          if (track?.uri) dataMap.set(track.uri, track);
        });
      } catch {}
    }
  };

  const fetchViaInternalAPI = async (ids: string[]) => {
    const concurrency = 50;
    for (let i = 0; i < ids.length; i += concurrency) {
      const slice = ids.slice(i, i + concurrency);

      await Promise.allSettled(
        slice.map(async (id) => {
          const uri = `spotify:track:${id}`;
          if (dataMap.has(uri)) return;

          try {
            const hexId = Spicetify.URI.idToHex(id);
            const response = await Spicetify.Platform.RequestBuilder.build()
              .withHost("https://spclient.wg.spotify.com/metadata/4")
              .withPath(`/track/${hexId}`)
              .send();

            const body = await response.body;
            if (body) dataMap.set(uri, body);
          } catch {}
        }),
      );
    }
  };

  await fetchViaWebAPI(allTrackIds);

  const missingIds = allTrackIds.filter((id) => !dataMap.has(`spotify:track:${id}`));
  if (missingIds.length > 0) {
    await fetchViaInternalAPI(missingIds);
  }

  return dataMap;
}
