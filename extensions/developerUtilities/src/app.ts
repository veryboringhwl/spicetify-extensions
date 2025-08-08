import parseProps from "../../../shared/api/parseProps.ts";
import generateTypes from "../../../shared/api/testGenerateTypes.ts";
import { Icons } from "../../../shared/components/icons.tsx";
import { Notification } from "../../../shared/components/notification.tsx";

Spicetify.Mousetrap.bind("f8", async () => {
  debugger;
  Notification({
    message: "Devtools must be open do use debugger",
    isWarning: true,
  });
});

await Spicetify.Platform.ProductStateAPI.productStateApi.putValues(
  {
    pairs: { "app-developer": "2" },
  },
  {},
);

let requestCount = 0;
let permanentlyDisabled = false;
Spicetify.Platform.ProductStateAPI.productStateApi.subValues(
  { keys: ["app-developer"] },
  async (data: any) => {
    if (permanentlyDisabled) {
      return;
    }

    if (requestCount < 3) {
      const current = data?.pairs?.["app-developer"];
      if (current !== "2") {
        console.log('"app-developer" value changed. Resetting to "2".');
        await Spicetify.Platform.ProductStateAPI.productStateApi.putValues(
          {
            pairs: { "app-developer": "2" },
          },
          {},
        );
        requestCount++;
      }
    } else {
      console.warn("Rate limit exceeded for product state changes. Permanently disabling.");
      permanentlyDisabled = true;
    }
  },
);

const copyPlaylistPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Playlist props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  onClick: (context: any, _item: any, _event: any) => {
    const parsed: any = parseProps(context.props);
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
  shouldAdd: (props: any) => {
    const parsed: any = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
  },
});

const copyTrackPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Track props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  onClick: (context: any, _item: any, _event: any) => {
    const parsed: any = parseProps(context.props);
    const filtered = {
      name: parsed?.name,
      uri: parsed?.uri,
      uid: parsed?.uid,
      albumName: parsed.album?.name,
      albumUri: parsed.albumUri || parsed.album?.uri,
      artists: parsed.artists?.map((artist: any) => ({
        name: artist.name,
        uri: artist.uri,
      })),
      contextName: parsed?.contextName,
      contextUri: parsed.contextUri || parsed.context?.uri,
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props: any) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.TRACK;
  },
});

const copyArtistPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Artist props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  onClick: (context: any, _item: any, _event: any) => {
    const parsed: any = parseProps(context.props);
    const filtered = {
      uri: parsed?.uri,
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props: any) => {
    const parsed: any = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.ARTIST;
  },
});

const copyAlbumPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Album props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  onClick: (context: any, _item: any, _event: any) => {
    const parsed: any = parseProps(context.props);
    const filtered = {
      uri: parsed?.uri,
      artistUri: parsed?.artistUri,
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props: any) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.ALBUM;
  },
});

const logContextMenuPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Log context menu props",
  leadingIcon: Icons.HTML.terminal,
  onClick: (context: any, item: any, event: any) => {
    console.log("Context:", context);
    console.log("Item:", item);
    console.log("Event:", event);
  },
  shouldAdd: () => true,
});

const copyAllPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy All props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  onClick: (context: any, _item: any, _event: any) => {
    Spicetify.Platform.ClipboardAPI.copy(context.props);
  },
  shouldAdd: () => true,
});

const logEventsItem = new Spicetify.ContextMenuV2.Item({
  children: "Log Events Listeners",
  leadingIcon: Icons.HTML.terminal,
  onClick: () => {
    Notification({
      message: "Only goes away after a reload/restart",
      isWarning: true,
    });

    Spicetify.Platform.PlayerAPI._events._emitter.addListeners({
      update: (event: any) => {
        console.log("PlayerAPI Update event:", event);
      },
      action: (event: any) => {
        console.log("PlayerAPI action event:", event);
      },
      error: (event: any) => {
        console.log("PlayerAPI error event:", event);
      },
      ready: (event: any) => {
        console.log("PlayerAPI ready event:", event);
      },
      queue_action_complete: (event: any) => {
        console.log("PlayerAPI queue_action_complete event:", event);
      },
      queue_update: (event: any) => {
        console.log("PlayerAPI queue_update event:", event);
      },
    });

    Spicetify.Platform.PlaylistAPI._events._emitter.addListeners({
      update: (event: any) => {
        console.log("PlaylistAPI update event:", event);
      },
      operation_complete: (event: any) => {
        console.log("PlaylistAPI operation_complete event:", event);
      },
    });

    Spicetify.Platform.RootlistAPI._events._emitter.addListeners({
      operation: (event: any) => {
        console.log("RootlistAPI operation event:", event);
      },
      operation_complete: (event: any) => {
        console.log("RootlistAPI operation_complete event:", event);
      },
      update: (event: any) => {
        console.log("RootlistAPI update event:", event);
      },
      update_item: (event: any) => {
        console.log("RootlistAPI update_item event:", event);
      },
    });

    Spicetify.Platform.PlaybackAPI._events._emitter.addListeners({
      muted_changed: (event: any) => {
        console.log("PlaybackAPI muted_changed event:", event);
      },
      volume: (event: any) => {
        console.log("PlaybackAPI volume event:", event);
      },
    });

    Spicetify.Platform.LocalStorageAPI._events._emitter.addListeners({
      update: (event: any) => {
        console.log("LocalStorageAPI update event:", event);
      },
    });
  },
  shouldAdd: () => true,
});

function patchUbiLogger() {
  const eventSender = Spicetify.Platform.UBILogger.ubiLogger.eventSender;

  if (eventSender.send.name === "patchedSend") {
    Spicetify.showNotification("UBI Event Logger is already active.");
    return;
  }

  const originalSend = eventSender.send;

  function patchedSend(this: any, ...args: [any, ...any[]]) {
    const event = args[0];
    const eventName = event?.name || "Unknown Event";

    console.groupCollapsed(`Intercepted Spotify UBI Event: ${eventName}`);
    console.log("Arguments:", args);
    console.log("Timestamp:", new Date().toISOString());
    console.trace("Call stack");
    console.groupEnd();

    return (originalSend as (...args: any[]) => any).apply(this, args);
  }

  eventSender.send = patchedSend;
  Spicetify.showNotification("UBI Event Logger patch applied.");
}

const logUbiEventsItem = new Spicetify.ContextMenuV2.Item({
  children: "Log User Behavior Insights Events",
  leadingIcon: Icons.HTML.terminal,
  onClick: () => {
    Notification({
      message: "Only goes away after a reload/restart",
      isWarning: true,
    });
    // make it log a basic summary of events
    patchUbiLogger();
  },
  shouldAdd: () => true,
});

const reloadSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Reload Spotify",
  leadingIcon: Icons.HTML.reload,
  onClick: () => {
    location.reload();
  },
  shouldAdd: () => true,
});

const restartSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Restart Spotify",
  leadingIcon: Icons.HTML.reload,
  onClick: () => {
    Spicetify.Platform.LifecycleAPI.restart();
  },
  shouldAdd: () => true,
});

const closeSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Close Spotify",
  leadingIcon: Icons.HTML.close,
  onClick: () => {
    Spicetify.Platform.LifecycleAPI.shutdown();
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
    logEventsItem,
    logUbiEventsItem,
    reloadSpotify,
    restartSpotify,
    closeSpotify,
  ],
  shouldAdd: () => true,
});

devUtilsSubMenu.register();

Spicetify.Platform.ClipboardAPI.copy(generateTypes(Spicetify.Platform, "PlatformTypes"));
