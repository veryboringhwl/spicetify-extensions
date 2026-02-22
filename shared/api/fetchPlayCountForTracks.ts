const getWebpackService = (id: string): any | undefined => {
  const require = (window as any).webpackChunkclient_web.push([
    [Symbol()],
    {},
    (r: any) => r,
  ]) as any;

  for (const moduleId in require.m) {
    try {
      const moduleExports = require(moduleId);
      if (!moduleExports) continue;

      const exportsObj = moduleExports as Record<string, any>;

      for (const value of Object.values(exportsObj)) {
        if (value && (typeof value === "object" || typeof value === "function")) {
          if ("SERVICE_ID" in value && (value as any).SERVICE_ID === id) {
            return value;
          }
        }
      }
    } catch {}
  }

  return undefined;
};

function parseVarint(obj: ArrayLike<number>): number | bigint {
  let res = 0n;
  let shift = 0n;
  let i = 1;
  while (true) {
    const b = obj[i++];
    res |= BigInt(b & 0x7f) << shift;
    if (!(b & 0x80)) break;
    shift += 7n;
  }

  return res <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(res) : res;
}

let client: any = null;

function getMetadataClient() {
  if (client) return client;

  const MetadataService = getWebpackService("spotify.mdata_esperanto.proto.MetadataService");
  if (!MetadataService) {
    throw new Error("MetadataService not found in webpack modules");
  }

  const transport = Spicetify.Platform.Registry.resolve(Symbol.for("EsperantoTransport"));

  client = new MetadataService(transport);
  return client;
}

const ON_PLATFORM_REPUTATION_TRAIT = 185;

export async function fetchPlayCountForTracks(
  trackURIs: string[],
): Promise<Map<string, number | bigint>> {
  const dataMap = new Map<string, number | bigint>();
  const uniqueTracks = [...new Set(trackURIs)];
  const clientInstance = getMetadataClient();

  const response = await clientInstance.fetch({
    extensionQuery: [{ extensionKind: ON_PLATFORM_REPUTATION_TRAIT, entityUri: uniqueTracks }],
  });

  const extensions = response?.extension?.[0]?.entityExtension;
  if (Array.isArray(extensions)) {
    for (const item of extensions) {
      if (item?.entityUri && item?.extensionData?.value) {
        dataMap.set(item.entityUri, parseVarint(item.extensionData.value));
      }
    }
  }

  return dataMap;
}
