import parseProps from "../../../shared/api/parseProps";
import Icons from "../../../shared/components/icons";
import Notification from "../../../shared/components/notification";

Spicetify.Mousetrap.bind("f8", async () => {
  // biome-ignore lint/suspicious/noDebugger: Needed to use debugger
  debugger;
  Notification({ message: "Devtools must be open do use debugger", isWarning: true });
});

await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({
  pairs: { "app-developer": "2" },
});

Spicetify.Platform.ProductStateAPI.productStateApi.subValues(
  { keys: ["app-developer"] },
  async (data) => {
    const current = data?.pairs?.["app-developer"];
    if (current !== "2") {
      console.log('"app-developer" value changed. Resetting to "2".');
      await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({
        pairs: { "app-developer": "2" },
      });
    }
  },
);

const copyPlaylistPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Playlist props",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps(context.props);
    const filtered = {
      uri: parsed?.uri,
      name: parsed?.name,
      owner: parsed?.owner
        ? {
            name: parsed.owner.name,
            uri: parsed.owner.uri,
          }
        : undefined,
      isOwnedBySelf: parsed?.isOwnedBySelf,
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
  },
});

const copyTrackPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Track props",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps(context.props);
    const filtered = {
      name: parsed?.name,
      uri: parsed?.uri,
      uid: parsed?.uid,
      albumName: parsed.album?.name,
      albumUri: parsed.albumUri || parsed.album?.uri,
      artists: parsed.artists?.map((artist) => ({
        name: artist.name,
        uri: artist.uri,
      })),
      contextName: parsed?.contextName,
      contextUri: parsed.contextUri || parsed.context?.uri,
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.TRACK;
  },
});

const copyArtistPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Artist props",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps(context.props);
    const filtered = {
      uri: parsed?.uri,
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.ARTIST;
  },
});

const copyAlbumPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Album props",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps(context.props);
    const filtered = {
      uri: parsed?.uri,
      artistUri: parsed?.artistUri,
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.ALBUM;
  },
});

const logContextMenuPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Log context menu props",
  leadingIcon: Icons.HTML.terminal,
  onClick: async (context, item, event) => {
    console.log("Context:", context);
    console.log("Item:", item);
    console.log("Event:", event);
  },
  shouldAdd: () => true,
});

const copyAllPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy All props",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context, item, event) => {
    Spicetify.Platform.ClipboardAPI.copy(context.props);
  },
  shouldAdd: () => true,
});

const devUtilsSubMenu = new Spicetify.ContextMenuV2.ItemSubMenu({
  text: "Developer Utils",
  leadingIcon: Icons.HTML.terminal,
  items: [
    copyAlbumPropsItem,
    copyArtistPropsItem,
    copyPlaylistPropsItem,
    copyTrackPropsItem,
    copyAllPropsItem,
    logContextMenuPropsItem,
  ],
  shouldAdd: () => true,
});

devUtilsSubMenu.register();
