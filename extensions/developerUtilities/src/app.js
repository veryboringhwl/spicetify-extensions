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
    Spicetify.Platform.ClipboardAPI.copy(context.props);
  },
  shouldAdd: (props, trigger, target) => {
    const parsed = Spicetify.ContextMenuV2.parseProps(props);
    const uri = parsed?.[0]?.[0];
    const type = Spicetify.URI.from(uri)?.type;
    const show = type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
    return show;
  },
});

const copyTrackPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Track props",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context, item, event) => {
    const filtered = { ...context.props };
    filtered.isBanned = undefined;
    filtered.canBan = undefined;
    filtered.canBeRemovedFromPlaylist = undefined;
    filtered.contextName = undefined;
    filtered.contextUri = undefined;
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props, trigger, target) => {
    const parsed = Spicetify.ContextMenuV2.parseProps(props);
    const uri = parsed?.[0]?.[0];
    const type = Spicetify.URI.from(uri)?.type;
    const show = type === Spicetify.URI.Type.TRACK;
    return show;
  },
});

const copyArtistPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Artist props",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context, item, event) => {
    Spicetify.Platform.ClipboardAPI.copy(context.props);
  },
  shouldAdd: (props, trigger, target) => {
    const parsed = Spicetify.ContextMenuV2.parseProps(props);
    const uri = parsed?.[0]?.[0];
    const type = Spicetify.URI.from(uri)?.type;
    const show = type === Spicetify.URI.Type.ARTIST;
    return show;
  },
});

const logContextMenuPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Log context menu props",
  leadingIcon: Icons.HTML.terminal,
  onClick: async (context, item, event) => {
    //context has all parameters from shouldAdd
    console.log("Context:", context);
    console.log("Item:", item);
    console.log("Event:", event);
  },
  shouldAdd: (props, trigger, target) => true,
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
    copyPlaylistPropsItem,
    copyTrackPropsItem,
    copyArtistPropsItem,
    logContextMenuPropsItem,
    copyAllPropsItem,
  ],
  shouldAdd: (props, trigger, target) => {
    const parsed = Spicetify.ContextMenuV2.parseProps(props);
    const uri = parsed?.[0]?.[0];
    const type = Spicetify.URI.from(uri)?.type;
    const show =
      type === Spicetify.URI.Type.TRACK ||
      type === Spicetify.URI.Type.PLAYLIST ||
      type === Spicetify.URI.Type.PLAYLIST_V2 ||
      type === Spicetify.URI.Type.ARTIST;
    return show;
  },
});

devUtilsSubMenu.register();
