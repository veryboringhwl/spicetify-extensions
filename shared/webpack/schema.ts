// some protobuf defs taken from https://github.com/devgianlu/go-librespot/tree/master/proto/spotify/metadata/metadata.proto

export interface FieldInfo {
  name: string;
  type: string;
  repeated?: boolean;
  enumType?: string;
}

export interface MessageSchema {
  fields: Record<number, FieldInfo>;
  enums?: Record<string, Record<number, string>>;
}

export type MetadataSchema = Record<string, MessageSchema>;

export const metadataSchema: MetadataSchema = {
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
      13: { name: "alternative", type: "spotify.metadata.Track", repeated: true },
      14: { name: "sale_period", type: "spotify.metadata.SalePeriod", repeated: true },
      15: { name: "preview", type: "spotify.metadata.AudioFile", repeated: true },
      16: { name: "tags", type: "string", repeated: true },
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
      4: { name: "type", type: "enum", enumType: "Type" },
      5: { name: "label", type: "string" },
      6: { name: "date", type: "spotify.metadata.Date" },
      7: { name: "popularity", type: "sint32" },
      8: { name: "genre", type: "string", repeated: true },
      9: { name: "cover", type: "spotify.metadata.Image", repeated: true },
      10: { name: "external_id", type: "spotify.metadata.ExternalId", repeated: true },
      11: { name: "disc", type: "spotify.metadata.Disc", repeated: true },
      12: { name: "review", type: "string", repeated: true },
      13: { name: "copyright", type: "spotify.metadata.Copyright", repeated: true },
      14: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      15: { name: "related", type: "spotify.metadata.Album", repeated: true },
      16: { name: "sale_period", type: "spotify.metadata.SalePeriod", repeated: true },
      17: { name: "cover_group", type: "spotify.metadata.ImageGroup" },
      18: { name: "original_title", type: "string" },
      19: { name: "version_title", type: "string" },
      20: { name: "type_str", type: "string" },
      23: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      25: { name: "licensor", type: "spotify.metadata.Licensor" },
      37: { name: "prerelease_config", type: "spotify.metadata.PrereleaseConfig" },
    },
    enums: {
      Type: { 1: "ALBUM", 2: "SINGLE", 3: "COMPILATION", 4: "EP", 5: "AUDIOBOOK", 6: "PODCAST" },
    },
  },
  "spotify.metadata.ContentRating": {
    fields: {
      1: { name: "tag", type: "enum", enumType: "ContentRatingTag" },
      2: { name: "markets", type: "string", repeated: true },
    },
    enums: {
      ContentRatingTag: {
        0: "CONTENT_RATING_TAG_UNSPECIFIED",
        1: "CONTENT_RATING_TAG_EXPLICIT",
        2: "CONTENT_RATING_TAG_MOGEF_19",
        3: "CONTENT_RATING_TAG_SPOTIFY_18_PLUS",
        4: "CONTENT_RATING_TAG_EROTIC",
        5: "CONTENT_RATING_TAG_NOT_FOR_CHILDREN",
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
      5: { name: "minute", type: "sint32" },
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
  "spotify.metadata.SalePeriod": {
    fields: {
      1: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      2: { name: "start", type: "spotify.metadata.Date" },
      3: { name: "end", type: "spotify.metadata.Date" },
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
      3: { name: "popularity", type: "sint32" },
      4: { name: "top_track", type: "spotify.metadata.TopTracks", repeated: true },
      5: { name: "album_group", type: "spotify.metadata.AlbumGroup", repeated: true },
      6: { name: "single_group", type: "spotify.metadata.AlbumGroup", repeated: true },
      7: { name: "compilation_group", type: "spotify.metadata.AlbumGroup", repeated: true },
      8: { name: "appears_on_group", type: "spotify.metadata.AlbumGroup", repeated: true },
      9: { name: "genre", type: "string", repeated: true },
      10: { name: "external_id", type: "spotify.metadata.ExternalId", repeated: true },
      11: { name: "portrait", type: "spotify.metadata.Image", repeated: true },
      12: { name: "biography", type: "spotify.metadata.Biography", repeated: true },
      13: { name: "activity_period", type: "spotify.metadata.ActivityPeriod", repeated: true },
      14: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      15: { name: "related", type: "spotify.metadata.Artist", repeated: true },
      16: { name: "is_portrait_album_cover", type: "bool" },
      17: { name: "portrait_group", type: "spotify.metadata.ImageGroup" },
      18: { name: "sale_period", type: "spotify.metadata.SalePeriod", repeated: true },
      20: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
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
    fields: {
      1: { name: "catalogue", type: "enum", repeated: true, enumType: "Catalogue" },
      2: { name: "countries_allowed", type: "string" },
      3: { name: "countries_forbidden", type: "string" },
      4: { name: "type", type: "enum", enumType: "Type" },
      5: { name: "catalogue_str", type: "string", repeated: true },
    },
    enums: {
      Catalogue: { 0: "AD", 1: "SUBSCRIPTION", 2: "CATALOGUE_ALL", 3: "SHUFFLE", 4: "COMMERCIAL" },
      Type: { 0: "STREAMING" },
    },
  },
  "spotify.metadata.Show": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      64: { name: "description", type: "string" },
      65: { name: "deprecated_popularity", type: "sint32" },
      66: { name: "publisher", type: "string" },
      67: { name: "language", type: "string" },
      68: { name: "explicit", type: "bool" },
      69: { name: "cover_image", type: "spotify.metadata.ImageGroup" },
      70: { name: "episode", type: "spotify.metadata.Episode", repeated: true },
      71: { name: "copyright", type: "spotify.metadata.Copyright", repeated: true },
      72: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      73: { name: "keyword", type: "string", repeated: true },
      74: { name: "media_type", type: "enum", enumType: "MediaType" },
      75: { name: "consumption_order", type: "enum", enumType: "ConsumptionOrder" },
      78: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      83: { name: "trailer_uri", type: "string" },
    },
    enums: {
      MediaType: { 0: "MIXED", 1: "AUDIO", 2: "VIDEO" },
      ConsumptionOrder: { 1: "SEQUENTIAL", 2: "EPISODIC", 3: "RECENT" },
    },
  },
  "spotify.metadata.Episode": {
    fields: {
      1: { name: "gid", type: "bytes" },
      2: { name: "name", type: "string" },
      7: { name: "duration", type: "sint32" },
      12: { name: "audio", type: "spotify.metadata.AudioFile", repeated: true },
      64: { name: "description", type: "string" },
      65: { name: "number", type: "sint32" },
      66: { name: "publish_time", type: "spotify.metadata.Date" },
      67: { name: "deprecated_popularity", type: "sint32" },
      68: { name: "cover_image", type: "spotify.metadata.ImageGroup" },
      69: { name: "language", type: "string" },
      70: { name: "explicit", type: "bool" },
      71: { name: "show", type: "spotify.metadata.Show" },
      72: { name: "video", type: "spotify.metadata.VideoFile", repeated: true },
      73: { name: "video_preview", type: "spotify.metadata.VideoFile", repeated: true },
      74: { name: "audio_preview", type: "spotify.metadata.AudioFile", repeated: true },
      75: { name: "restriction", type: "spotify.metadata.Restriction", repeated: true },
      76: { name: "freeze_frame", type: "spotify.metadata.ImageGroup" },
      77: { name: "keyword", type: "string", repeated: true },
      81: { name: "allow_background_playback", type: "bool" },
      82: { name: "availability", type: "spotify.metadata.Availability", repeated: true },
      83: { name: "external_url", type: "string" },
      87: { name: "type", type: "enum", enumType: "EpisodeType" },
    },
    enums: {
      EpisodeType: { 0: "FULL", 1: "TRAILER", 2: "BONUS" },
    },
  },
  "spotify.metadata.TopTracks": {
    fields: {
      1: { name: "country", type: "string" },
      2: { name: "track", type: "spotify.metadata.Track", repeated: true },
    },
  },
  "spotify.metadata.ActivityPeriod": {
    fields: {
      1: { name: "start_year", type: "sint32" },
      2: { name: "end_year", type: "sint32" },
      3: { name: "decade", type: "sint32" },
    },
  },
  "spotify.metadata.AlbumGroup": {
    fields: { 1: { name: "album", type: "spotify.metadata.Album", repeated: true } },
  },
  "spotify.metadata.Biography": {
    fields: {
      1: { name: "text", type: "string" },
      2: { name: "portrait", type: "spotify.metadata.Image", repeated: true },
      3: { name: "portrait_group", type: "spotify.metadata.ImageGroup", repeated: true },
    },
  },
  "spotify.metadata.Disc": {
    fields: {
      1: { name: "number", type: "sint32" },
      2: { name: "name", type: "string" },
      3: { name: "track", type: "spotify.metadata.Track", repeated: true },
    },
  },
  "spotify.metadata.Copyright": {
    fields: {
      1: { name: "type", type: "enum", enumType: "Type" },
      2: { name: "text", type: "string" },
    },
    enums: { Type: { 0: "P", 1: "C" } },
  },
  "spotify.metadata.VideoFile": {
    fields: { 1: { name: "file_id", type: "bytes" } },
  },
};
