import { ProtobufReader } from "../webpack/protobuf.ts";
import { SpotifyWebpack } from "../webpack/webpack.ts";

const MetadataService = "spotify.mdata_esperanto.proto.MetadataService";
const ON_PLATFORM_REPUTATION_TRAIT = 185;

export async function fetchPlayCountForTracks(
  trackURIs: string[],
): Promise<Map<string, number | bigint>> {
  const MetadataClient = SpotifyWebpack.getClient(MetadataService);
  const uniqueURIs = [...new Set(trackURIs)];

  const response = await MetadataClient.fetch({
    extensionQuery: [{ extensionKind: ON_PLATFORM_REPUTATION_TRAIT, entityUri: uniqueURIs }],
  });

  const resultMap = new Map<string, number | bigint>();
  const extensions = response?.extension?.[0]?.entityExtension;
  if (Array.isArray(extensions)) {
    for (const item of extensions) {
      if (item?.entityUri && item?.extensionData?.value) {
        const reader = new ProtobufReader(item.extensionData.value);
        reader.offset = 1;
        const playCount = reader.readVarint();
        if (playCount !== null) {
          resultMap.set(
            item.entityUri,
            playCount <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(playCount) : playCount,
          );
        }
      }
    }
  }

  return resultMap;
}
