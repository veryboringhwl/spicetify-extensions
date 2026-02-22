export async function fetchSpClientForTracks(
  trackURIs: Array<string>,
): Promise<Map<string, object>> {
  const dataMap = new Map<string, object>();

  const allTrackIds = [
    ...new Set(
      trackURIs.map((uri) => Spicetify.URI.fromString(uri).id).filter((id): id is string => !!id),
    ),
  ];

  const concurrency = 1000;
  for (let i = 0; i < allTrackIds.length; i += concurrency) {
    const slice = allTrackIds.slice(i, i + concurrency);

    await Promise.allSettled(
      slice.map(async (id) => {
        const uri = `spotify:track:${id}`;
        const hexId = Spicetify.URI.idToHex(id);
        //@ts-expect-error RequestBuilder is not typed
        const response = await Spicetify.Platform.RequestBuilder.build()
          .withHost("https://spclient.wg.spotify.com/metadata/4")
          .withPath(`/track/${hexId}`)
          .send();

        const body = await response.body;
        if (body) dataMap.set(uri, body);
      }),
    );
  }

  return dataMap;
}
