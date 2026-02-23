interface FieldInfo {
  name: string;
  type: string;
  repeated?: boolean;
  enumType?: string;
}

interface MessageSchema {
  fields: Record<number, FieldInfo>;
  enums?: Record<string, Record<number, string>>;
}

type ProtoSchema = Record<string, MessageSchema>;

const protoSchema: ProtoSchema = {
  "spotify.metadata.Track": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "album", type: "spotify.metadata.Album" },
      4: { name: "artist", type: "spotify.metadata.Artist", repeated: true },
      5: { name: "number", type: "sint32" },
      6: { name: "disc_number", type: "sint32" },
      7: { name: "duration", type: "sint32" },
      8: { name: "popularity", type: "sint32" },
      9: { name: "explicit", type: "bool" },
      10: { name: "external_id", type: "spotify.metadata.ExternalId", repeated: true },
      11: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      12: { name: "file", type: "spotify.metadata.AudioFile", repeated: true },
      15: { name: "preview", type: "spotify.metadata.AudioFile", repeated: true },
      17: { name: "earliest_live_timestamp", type: "int64" },
      18: { name: "has_lyrics", type: "bool" },
      19: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      21: { name: "licensor", type: "spotify.metadata.Licensor" },
      22: { name: "language_of_performance", type: "string", repeated: true },
      24: { name: "original_audio", type: "spotify.metadata.Audio" },
      27: { name: "original_title", type: "string" },
      28: { name: "version_title", type: "string" },
      32: { name: "artist_with_role", type: "spotify.metadata.ArtistWithRole", repeated: true },
      36: { name: "canonical_uri", type: "string" },
      37: { name: "prerelease_config", type: "spotify.metadata.PrereleaseConfig" },
      39: { name: "content_authorization_attributes", type: "bytes" },
      40: { name: "track_content_rating", type: "spotify.metadata.ContentRating", repeated: true },
      41: { name: "audio_formats", type: "spotify.metadata.TrackAudioFormat", repeated: true },
      43: { name: "unknown_field", type: "int32" },
      44: { name: "implementation_details", type: "spotify.metadata.ImplementationDetails" },
      129: { name: "media_type", type: "enum", enumType: "MediaType" },
    },
    enums: { MediaType: { 0: "MIXED", 1: "AUDIO", 2: "VIDEO" } },
  },
  "spotify.metadata.Album": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      3: { name: "artist", type: "spotify.metadata.Artist", repeated: true },
      5: { name: "label", type: "string" },
      6: { name: "date", type: "spotify.metadata.Date" },
      17: { name: "cover_group", type: "spotify.metadata.ImageGroup" },
      25: { name: "licensor", type: "spotify.metadata.Licensor" },
      37: { name: "prerelease_config", type: "spotify.metadata.PrereleaseConfig" },
    },
  },
  "spotify.metadata.ContentRating": {
    fields: {
      1: { name: "tag", type: "enum", enumType: "ContentRatingTag" },
      2: { name: "markets", type: "string", repeated: true },
    },
    enums: {
      ContentRatingTag: {
        0: "CONTENT_RATING_TAG_UNKNOWN",
        1: "CONTENT_RATING_TAG_EXPLICIT",
        2: "CONTENT_RATING_TAG_CLEAN",
      },
    },
  },
  "spotify.metadata.PrereleaseConfig": {
    fields: {
      1: { name: "earliest_reveal_date", type: "spotify.metadata.Date" },
      2: { name: "earliest_coverart_reveal_date", type: "spotify.metadata.Date" },
    },
  },
  "spotify.metadata.Date": {
    fields: {
      1: { name: "year", type: "sint32" },
      2: { name: "month", type: "sint32" },
      3: { name: "day", type: "sint32" },
      4: { name: "hour", type: "sint32" },
    },
  },
  "spotify.metadata.ImplementationDetails": {
    fields: {
      2: { name: "catalog_insertion_date", type: "spotify.metadata.Timestamp" },
    },
  },
  "spotify.metadata.Availability": {
    fields: {
      1: { name: "catalogue_str", type: "string", repeated: true },
      2: { name: "start", type: "spotify.metadata.Date" },
    },
  },
  "spotify.metadata.Timestamp": {
    fields: {
      1: { name: "seconds", type: "int64" },
      2: { name: "nanos", type: "int32" },
    },
  },
  "spotify.metadata.Audio": {
    fields: {
      1: { name: "uuid", type: "bytes" },
      2: { name: "format", type: "enum", enumType: "Format" },
    },
    enums: {
      Format: { 0: "AUDIO_FORMAT_UNKNOWN", 1: "AUDIO_FORMAT_STEREO", 2: "AUDIO_FORMAT_MONO" },
    },
  },
  "spotify.metadata.Artist": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
    },
  },
  "spotify.metadata.ArtistWithRole": {
    fields: {
      1: { name: "artist_gid", type: "bytes" },
      2: { name: "artist_name", type: "string" },
      3: { name: "role", type: "enum", enumType: "ArtistRole" },
    },
    enums: {
      ArtistRole: {
        0: "ARTIST_ROLE_UNKNOWN",
        1: "ARTIST_ROLE_MAIN_ARTIST",
        2: "ARTIST_ROLE_FEATURED_ARTIST",
        3: "ARTIST_ROLE_REMIXER",
        4: "ARTIST_ROLE_ACTOR",
        5: "ARTIST_ROLE_COMPOSER",
        6: "ARTIST_ROLE_CONDUCTOR",
        7: "ARTIST_ROLE_ORCHESTRA",
      },
    },
  },
  "spotify.metadata.ImageGroup": {
    fields: { 1: { name: "image", type: "spotify.metadata.Image", repeated: true } },
  },
  "spotify.metadata.Image": {
    fields: {
      1: { name: "file_id", type: "bytes" },
      2: { name: "size", type: "enum", enumType: "Size" },
      3: { name: "width", type: "sint32" },
      4: { name: "height", type: "sint32" },
    },
    enums: { Size: { 0: "DEFAULT", 1: "SMALL", 2: "LARGE", 3: "XLARGE" } },
  },
  "spotify.metadata.AudioFile": {
    fields: {
      1: { name: "file_id", type: "bytes" },
      2: { name: "format", type: "enum", enumType: "Format" },
    },
    enums: {
      Format: {
        0: "OGG_VORBIS_96",
        1: "OGG_VORBIS_160",
        2: "OGG_VORBIS_320",
        3: "MP3_256",
        4: "MP3_320",
        5: "MP3_160",
        6: "MP3_96",
        7: "MP3_160_ENC",
        8: "AAC_24",
        9: "AAC_48",
        16: "FLAC_FLAC",
        18: "XHE_AAC_24",
        19: "XHE_AAC_16",
        20: "XHE_AAC_12",
        22: "FLAC_FLAC_24BIT",
      },
    },
  },
  "spotify.metadata.ExternalId": {
    fields: {
      1: { name: "type", type: "string" },
      2: { name: "id", type: "string" },
    },
  },
  "spotify.metadata.Licensor": {
    fields: { 1: { name: "uuid", type: "bytes" } },
  },
  "spotify.metadata.TrackAudioFormat": {
    fields: { 1: { name: "original_audio", type: "spotify.metadata.Audio" } },
  },
  "spotify.metadata.Restriction": {
    fields: { 5: { name: "catalogue_str", type: "string", repeated: true } },
  },
};

function byteObjectToUint8Array(byteObject: Record<string | number, number>): Uint8Array {
  const byteArray = Object.values(byteObject);
  return new Uint8Array(byteArray);
}

function uint8ArrayToHexString(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => `0${(byte & 0xff).toString(16)}`.slice(-2)).join("");
}

function expectedWireType(type: string): number {
  switch (type) {
    case "bool":
    case "int32":
    case "int64":
    case "sint32":
    case "sint64":
    case "uint32":
    case "uint64":
    case "enum":
      return 0;
    case "string":
    case "bytes":
      return 2;
    default:
      return 2;
  }
}

class ProtobufReader {
  public data: Uint8Array;
  public offset: number;

  constructor(uint8Array: Uint8Array | number[]) {
    this.data = uint8Array instanceof Uint8Array ? uint8Array : new Uint8Array(uint8Array);
    this.offset = 0;
  }

  readVarint(): bigint | null {
    if (this.offset >= this.data.length) return null;
    let result = 0n;
    let shift = 0n;
    while (this.offset < this.data.length) {
      const byte = BigInt(this.data[this.offset++]);
      result |= (byte & 0x7fn) << shift;
      if ((byte & 0x80n) === 0n) return result;
      shift += 7n;
      if (shift > 70n) return null;
    }
    return result;
  }

  readZigZagVarint(): bigint {
    const n = this.readVarint();
    if (n === null) return 0n;
    return (n >> 1n) ^ -(n & 1n);
  }

  readBytes(length: number): Uint8Array {
    const actualLength = Math.min(length, this.data.length - this.offset);
    const bytes = this.data.slice(this.offset, this.offset + actualLength);
    this.offset += actualLength;
    return bytes;
  }

  skipByWireType(wireType: number): void {
    switch (wireType) {
      case 0:
        this.readVarint();
        break;
      case 1:
        this.readBytes(8);
        break;
      case 2: {
        const len = this.readVarint();
        if (len !== null) this.readBytes(Number(len));
        break;
      }
      case 5:
        this.readBytes(4);
        break;
      default:
        break;
    }
  }
}

function parseMessage(reader: ProtobufReader, messageTypeName: string): any {
  const messageSchema = protoSchema[messageTypeName];
  const result: Record<string, any> = {};

  if (!messageSchema) {
    console.warn(`Schema not found for: ${messageTypeName}`);
    return result;
  }

  while (reader.offset < reader.data.length) {
    const tag = reader.readVarint();
    if (tag === null || tag === 0n) break;

    const fieldNumber = Number(tag >> 3n);
    const wireType = Number(tag & 0x7n);

    if (fieldNumber === 0) break;

    const fieldInfo = messageSchema.fields?.[fieldNumber];

    if (!fieldInfo) {
      reader.skipByWireType(wireType);
      continue;
    }

    const expectedWT = expectedWireType(fieldInfo.type);
    if (wireType !== expectedWT) {
      reader.skipByWireType(wireType);
      continue;
    }

    let value: any;
    try {
      if (fieldInfo.type === "string") {
        const len = reader.readVarint();
        value = len !== null ? new TextDecoder().decode(reader.readBytes(Number(len))) : "";
      } else if (fieldInfo.type === "bytes") {
        const len = reader.readVarint();
        if (len !== null) {
          value = uint8ArrayToHexString(reader.readBytes(Number(len)));
        } else {
          value = "";
        }
      } else if (fieldInfo.type === "bool") {
        const v = reader.readVarint();
        value = v !== null ? v !== 0n : false;
      } else if (fieldInfo.type === "int64") {
        const v = reader.readVarint();
        if (v === null) {
          value = 0;
        } else {
          value = v <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(v) : v.toString();
        }
      } else if (fieldInfo.type === "int32" || fieldInfo.type === "uint32") {
        const v = reader.readVarint();
        value = v !== null ? Number(v) : 0;
      } else if (fieldInfo.type === "sint32") {
        value = Number(reader.readZigZagVarint());
      } else if (fieldInfo.type === "sint64") {
        const v = reader.readZigZagVarint();
        value =
          v <= BigInt(Number.MAX_SAFE_INTEGER) && v >= BigInt(Number.MIN_SAFE_INTEGER)
            ? Number(v)
            : v.toString();
      } else if (fieldInfo.type === "enum") {
        const enumVal = Number(reader.readVarint() ?? 0n);
        value =
          (fieldInfo.enumType && messageSchema.enums?.[fieldInfo.enumType]?.[enumVal]) ?? enumVal;
      } else {
        const len = reader.readVarint();
        if (len !== null) {
          const subBytes = reader.readBytes(Number(len));
          const subReader = new ProtobufReader(subBytes);
          value = parseMessage(subReader, fieldInfo.type);
        }
      }
    } catch (e) {
      console.warn(`Error parsing field "${fieldInfo.name}" (#${fieldNumber}):`, e);
      continue;
    }

    if (value === undefined) continue;

    if (fieldInfo.repeated) {
      if (!result[fieldInfo.name]) result[fieldInfo.name] = [];
      result[fieldInfo.name].push(value);
    } else {
      result[fieldInfo.name] = value;
    }
  }

  return result;
}

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

let _client: any = null;
function getMetadataClient(): any {
  if (_client) return _client;
  const MetadataService = getWebpackService("spotify.mdata_esperanto.proto.MetadataService");
  if (!MetadataService) throw new Error("MetadataService not found");
  const transport = Spicetify.Platform.Registry.resolve(Symbol.for("EsperantoTransport"));
  _client = new MetadataService(transport);
  return _client;
}

const TRACK_V4 = 10;

export async function fetchMetadataForTracks(trackURIs: string[]): Promise<Map<string, any>> {
  const client = getMetadataClient();
  const response = await client.fetch({
    extensionQuery: [{ extensionKind: TRACK_V4, entityUri: [...new Set(trackURIs)] }],
  });

  const resultMap = new Map<string, any>();

  if (response?.extension?.[0]?.entityExtension) {
    for (const entity of response.extension[0].entityExtension) {
      const byteObject = entity.extensionData?.value;
      if (byteObject) {
        const uint8 = byteObjectToUint8Array(byteObject);
        const decoded = parseMessage(new ProtobufReader(uint8), "spotify.metadata.Track");

        resultMap.set(
          entity.entityUri,
          JSON.parse(JSON.stringify(decoded, (_, v) => (typeof v === "bigint" ? v.toString() : v))),
        );
      } else {
        resultMap.set(entity.entityUri, null);
      }
    }
  }

  return resultMap;
}
