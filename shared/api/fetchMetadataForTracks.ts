import { decodeProtobuf } from "../webpack/protobuf.ts";
import { SpotifyWebpack } from "../webpack/webpack.ts";

const MetadataService = "spotify.mdata_esperanto.proto.MetadataService";
const TRACK_V4 = 10;

export async function fetchMetadataForTracks(trackURIs: string[]): Promise<Map<string, any>> {
  const MetadataClient = SpotifyWebpack.getClient(MetadataService);
  const uniqueURIs = [...new Set(trackURIs)];

  const response = await MetadataClient.fetch({
    extensionQuery: [{ extensionKind: TRACK_V4, entityUri: uniqueURIs }],
  });

  const resultMap = new Map<string, any>();

  if (response?.extension?.[0]?.entityExtension) {
    for (const entity of response.extension[0].entityExtension) {
      const byteObject = entity.extensionData?.value;
      if (byteObject) {
        const decoded = decodeProtobuf(byteObject, "spotify.metadata.Track");
        resultMap.set(entity.entityUri, decoded);
      } else {
        resultMap.set(entity.entityUri, null);
      }
    }
  }

  return resultMap;
}
