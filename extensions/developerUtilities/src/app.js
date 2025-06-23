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

const logPlayAPIEvents = new Spicetify.ContextMenuV2.Item({
  children: "Log PlayerAPI Events",
  leadingIcon: Icons.HTML.terminal,
  onClick: async () => {
    Notification({ message: "Only goes away after a reload/restart", isWarning: true });
    // Spicetify's event listeners for PlayerAPI events
    Spicetify.Platform.PlayerAPI._events.addListener("update", (event) => {
      console.log("Update event:", event);
    });

    Spicetify.Platform.PlayerAPI._events.addListener("action", (event) => {
      console.log("Action event:", event);
    });

    Spicetify.Platform.PlayerAPI._events.addListener("error", (event) => {
      console.error("Error event:", event);
    });

    Spicetify.Platform.PlayerAPI._events.addListener("ready", (event) => {
      console.log("Ready event:", event);
    });

    Spicetify.Platform.PlayerAPI._events.addListener("queue_action_complete", (event) => {
      console.log("Queue action complete:", event);
    });

    Spicetify.Platform.PlayerAPI._events.addListener("queue_update", (event) => {
      console.log("Queue update:", event);
    });
  },
  shouldAdd: () => true,
});

const reloadSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Reload Spotify",
  leadingIcon: Icons.HTML.reload,
  onClick: async () => {
    location.reload();
  },
  shouldAdd: () => true,
});

const restartSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Restart Spotify",
  leadingIcon: Icons.HTML.reload,
  onClick: async () => {
    Spicetify.Platform.UpdateAPI.applyUpdate();
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
    logPlayAPIEvents,
    reloadSpotify,
    restartSpotify,
  ],
  shouldAdd: () => true,
});

devUtilsSubMenu.register();

// copy object that leadds to [object Object]
// const getCircularReplacer = () => {
//   const seen = new WeakSet();
//   return (key, value) => {
//     if (typeof value === "object" && value !== null) {
//       if (seen.has(value)) {
//         return "[Circular]";
//       }
//       seen.add(value);
//     }
//     return value;
//   };
// };
// copy(JSON.stringify(temp3, getCircularReplacer()))
