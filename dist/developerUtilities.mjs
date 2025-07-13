await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// external-global:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "external-global:react/jsx-runtime"(exports, module) {
    module.exports = Spicetify.ReactJSX;
  }
});

// external-global:react
var require_react = __commonJS({
  "external-global:react"(exports, module) {
    module.exports = Spicetify.React;
  }
});

// shared/api/parseProps.js
function parseProps(props) {
  if (!props) return {};
  const parsed = {};
  const mergeProps = (source, target) => {
    if (!source || typeof source !== "object") return;
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (target[key] === void 0) {
          target[key] = source[key];
        }
      }
    }
  };
  mergeProps(props, parsed);
  mergeProps(props.item, parsed);
  mergeProps(props.reference, parsed);
  return parsed;
}
var parseProps_default = parseProps;

// shared/components/icons.jsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Icons = {
  //24px
  editButton: "M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z",
  //24px
  settings: "M7.96 5.33a2.67 2.67 90 100 5.34 2.67 2.67 90 000-5.34ZM6.67 8A1.33 1.33 90 119.33 8 1.33 1.33 90 016.67 8Zm4.82-4.81a.95.94 90 01-1.1-.75L10.05.55A.47.47 90 009.68.17 8.1 8.1 90 006.32.17.47.47 90 005.96.55L5.61 2.44a.95.95 90 01-1.25.71L2.55 2.51a.47.47 90 00-.51.13C1.28 3.47.71 4.46.36 5.53a.47.47 90 00.14.51L1.97 7.28a.94.94 90 010 1.43L.5 9.95a.47.47 90 00-.14.51 7.98 7.98 90 001.68 2.9.47.47 90 00.51.13l1.81-.65a.94.94 90 011.25.72l.34 1.89c.04.18.18.33.37.37a8.1 8.1 90 003.36 0 .47.47 90 00.37-.37l.34-1.89a.95.95 90 011.25-.72l1.81.65c.18.06.38.01.51-.13.76-.84 1.34-1.82 1.68-2.9a.47.47 90 00-.14-.5L14.03 8.72a.94.94 90 010-1.44L15.5 6.04a.47.47 90 00.14-.5 7.98 7.98 90 00-1.68-2.9.47.47 90 00-.51-.13l-1.81.65a.95.95 90 01-.15.04Zm-8.82.78 1.25.44a2.28 2.28 90 003-1.73l.24-1.3a6.81 6.81 90 011.68 0l.24 1.3a2.28 2.28 90 003.01 1.73l1.24-.44c.34.44.63.93.84 1.44l-1 .85a2.27 2.27 90 000 3.48l1 .85a6.65 6.65 90 01-.84 1.44l-1.24-.44A2.28 2.28 90 009.08 13.32l-.24 1.29a6.8 6.8 90 01-1.69 0l-.23-1.29A2.28 2.28 90 003.91 11.59l-1.24.44a6.65 6.65 90 01-.84-1.44l1-.86a2.27 2.27 90 000-3.47l-1-.85c.21-.51.5-1 .84-1.44Z",
  //24px
  github: "M12.2135 0C18.947 0 24.4267 5.5 24.4066 12.3041c0 5.4391-3.4983 10.0428-8.3513 11.6728-.6065.1223-.829-.265-.829-.591 0-.4072.02-1.7315.02-3.3815 0-1.1613-.384-1.8945-.829-2.2815 2.73-.3058 5.581-1.3445 5.581-6.0708 0-1.3445-.465-2.4445-1.2537-3.3.1213-.3055.5463-1.5688-.1212-3.2595 0 0-1.0312-.326-3.3567 1.263-.9707-.2648-2.0219-.4075-3.0532-.4075A11.7425 11.7425 90 009.16 6.3556c-2.3252-1.589-3.3565-1.263-3.3565-1.263-.6675 1.6907-.2427 2.954-.1215 3.2595-.7685.8555-1.2535 1.9555-1.2535 3.3 0 4.7263 2.8509 5.7855 5.5607 6.0708-.3437.3055-.6675.8555-.7685 1.65-.7077.326-2.467.8555-3.5587-1.0185 0 0-.6472-1.1815-1.8807-1.263 0 0-1.193 0-.081.7538 0 0 .809.3665 1.355 1.7925 0 0 .7075 2.2002 4.105 1.4667 0 1.0188.02 1.9965.02 2.2818 0 .3258-.2222.713-.829.5905C3.4983 22.3472 0 17.7432 0 12.3042 0 5.5 5.4597 0 12.2135 0Z",
  //32px
  close: "M31.098 29.794 16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143",
  //24px
  warning: "M13 14V9H11v5Zm0 2H11v2h2Zm8.884 3.5A1 1 0 0121 21H3a1 1 0 01-.884-1.468l9-17c.346-.654 1.422-.654 1.768 0Z",
  //16px
  more: "M3 8A1.5 1.5 0 110 8a1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  //24px
  questionMark: "M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333S7.405 20.333 12 20.333 20.333 16.595 20.333 12c0-4.595-3.738-8.333-8.333-8.333ZM12 15.5a1 1 0 110 2 1 1 0 010-2Zm0-8.75a2.75 2.75 0 012.75 2.75c0 1.01-.297 1.574-1.051 2.359l-.169.171c-.622.622-.78.886-.78 1.47a.75.75 0 01-1.5 0c0-1.01.297-1.574 1.051-2.359l.169-.171c.622-.622.78-.886.78-1.47a1.25 1.25 0 00-2.493-.128l-.007.128a.75.75 0 01-1.5 0A2.75 2.75 0 0112 6.75Z",
  //24px
  dropdown: "M20.4614 6.3469a1.506 1.506 90 00-2.1125.1919L12 14.1564 5.651 6.5389a1.4997 1.4997 90 10-2.3028 1.922l7.5004 9.0004a1.4992 1.4992 90 002.3028 0l7.5004-9.0005a1.5019 1.5019 90 00-.1904-2.1139Z",
  //24px
  palette: "M12 2c5.461 0 9.965 4.012 9.992 8.84 0 3.051-2.504 5.554-5.555 5.554H14.441a1.64 1.64 0 00-1.668 1.668c0 .473.148.836.438 1.125.257.29.437.688.437 1.125C13.648 21.254 12.926 22 12 22 6.5 22 2 17.5 2 12S6.5 2 12 2Z",
  //16px
  duplicate: "M15 3.5c0-.5-.5-1-1-1H11V1c0-.5-.5-1-1-1H2C1.5 0 1 .5 1 1V11.5c0 .5.5 1 1 1H4.5V15c0 .5.5 1 1 1H14c.5 0 1-.5 1-1ZM2.5 2c0-.25.25-.5.5-.5H9c.25 0 .5.25.5.5v8.5c0 .25-.25.5-.5.5H3c-.25 0-.5-.25-.5-.5Zm4 12.5c-.25 0-.5-.25-.5-.5V12.5h4c.5 0 1-.5 1-1V4h2c.25 0 .5.25.5.5V14c0 .25-.25.5-.5.5Z",
  //16px
  terminal: "M3.924 5.02a.75.75 0 011.056-.096l3 2.5a.75.75 0 010 1.152l-3 2.5a.75.75 0 11-.96-1.152L6.328 8 4.02 6.076A.75.75 0 013.924 5.02zM8.25 10.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zM0 3.25A2.25 2.25 0 012.25 1h11.5A2.25 2.25 0 0116 3.25v9.5A2.25 2.25 0 0113.75 15H2.25A2.25 2.25 0 010 12.75v-9.5zm2.25-.75a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75H2.25z",
  // 16px
  customArtwork: "M0 2v12a2 2 90 002 2h12a2 2 90 002-2V7.33l-1.33 1.33v5.33a.66.66 90 01-.66.66H2a.66.66 90 01-.66-.66V2A.66.66 90 012 1.34h9.66L13 0H2A2 2 90 000 2zm2.66 3.33C4.32 5 4.99 3.67 5.32 2.67h.33c.33 1 1 2.33 2.66 2.6v.33c-1.66.33-2.33 1.66-2.66 2.66h-.33c-.33-1-1-2.33-2.66-2.66zm13-2.66a1.33 1.33 90 00-1.66 0L7 9.33a0 0 90 000 0l-1.66 3a.33.33 90 00.33.33l3-1.66a0 0 90 000 0l7-7a1.33 1.33 90 000-1.33z",
  play: "M3.3333 3.516c0-1.138 1.2173-1.8613 2.2167-1.318l8.2413 4.484c1.044.5687 1.044 2.0673 0 2.6353L5.55 13.8013C4.5507 14.3453 3.3333 13.6213 3.3333 12.484V3.516Z",
  pause: "M3.8307 2A1.1667 1.1667 90 002.664 3.1667V12.8333C2.664 13.4773 3.1867 14 3.8307 14H6.164A1.1667 1.1667 90 007.3307 12.8333V3.1667A1.1667 1.1667 90 006.164 2H3.8307ZM9.8307 2A1.1667 1.1667 90 008.664 3.1667V12.8333C8.664 13.4773 9.1867 14 9.8307 14H12.164A1.1667 1.1667 90 0013.3307 12.8333V3.1667A1.1667 1.1667 90 0012.164 2H9.8307Z"
};
var ReactComponent = (icon, defaultSize = 16) => {
  return ({ size = defaultSize, fill = "currentColor" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: `0 0 ${defaultSize} ${defaultSize}`, width: size, height: size, fill, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: icon }) });
};
Icons.React = {
  editButton: ReactComponent(Icons.editButton, 24),
  settings: ReactComponent(Icons.settings, 16),
  github: ReactComponent(Icons.github, 24),
  close: ReactComponent(Icons.close, 32),
  warning: ReactComponent(Icons.warning, 24),
  more: ReactComponent(Icons.more, 16),
  questionMark: ReactComponent(Icons.questionMark, 24),
  dropdown: ReactComponent(Icons.dropdown, 24),
  palette: ReactComponent(Icons.palette, 24),
  duplicate: ReactComponent(Icons.duplicate, 16),
  terminal: ReactComponent(Icons.terminal, 16),
  customArtwork: ReactComponent(Icons.customArtwork, 16),
  play: ReactComponent(Icons.play, 16),
  pause: ReactComponent(Icons.pause, 16)
};
Icons.HTML = {
  editButton: `<path d="${Icons.editButton}"/>`,
  settings: `<path d="${Icons.settings}"/>`,
  github: `<path d="${Icons.github}"/>`,
  close: `<path d="${Icons.close}"/>`,
  warning: `<path d="${Icons.warning}"/>`,
  more: `<path d="${Icons.more}"/>`,
  questionMark: `<path d="${Icons.questionMark}"/>`,
  dropdown: `<path d="${Icons.dropdown}"/>`,
  palette: `<path d="${Icons.palette}"/>`,
  duplicate: `<path d="${Icons.duplicate}"/>`,
  terminal: `<path d="${Icons.terminal}"/>`,
  customArtwork: `<path d="${Icons.customArtwork}"/>`,
  play: `<path d="${Icons.play}"/>`,
  pause: `<path d="${Icons.pause}"/>`
};
var icons_default = Icons;

// shared/components/notification.jsx
var import_react = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Notification = ({
  message = "",
  keyPrefix = "custom-notif",
  autoHideDuration = 3e3,
  backgroundColour = "#fff",
  colour = "#000",
  isWarning = false
} = {}) => {
  const content = isWarning ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(icons_default.React.warning, { size: 24 }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: message })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: message });
  const BackgroundColour = isWarning ? "#ff9800" : backgroundColour;
  const Colour = isWarning ? "#fff" : colour;
  try {
    Spicetify.Snackbar.enqueueCustomSnackbar(keyPrefix, {
      keyPrefix,
      autoHideDuration,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "div",
        {
          className: "custom-notification",
          style: {
            display: "flex",
            gap: "8px",
            alignItems: "center",
            color: Colour,
            backgroundColor: BackgroundColour,
            padding: "14px 16px",
            borderRadius: "4px",
            fontSize: "0.875rem"
          },
          children: content
        }
      )
    });
  } catch (error) {
    Console.Error("Error displaying notification:", error);
  }
};
var notification_default = Notification;

// extensions/developerUtilities/src/app.js
Spicetify.Mousetrap.bind("f8", async () => {
  debugger;
  notification_default({ message: "Devtools must be open do use debugger", isWarning: true });
});
await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({
  pairs: { "app-developer": "2" }
});
Spicetify.Platform.ProductStateAPI.productStateApi.subValues(
  { keys: ["app-developer"] },
  async (data) => {
    const current = data?.pairs?.["app-developer"];
    if (current !== "2") {
      console.log('"app-developer" value changed. Resetting to "2".');
      await Spicetify.Platform.ProductStateAPI.productStateApi.putValues({
        pairs: { "app-developer": "2" }
      });
    }
  }
);
var copyPlaylistPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Playlist props",
  leadingIcon: icons_default.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps_default(context.props);
    const filtered = {
      uri: parsed?.uri,
      name: parsed?.name,
      owner: parsed?.owner ? {
        name: parsed.owner.name,
        uri: parsed.owner.uri
      } : void 0,
      isOwnedBySelf: parsed?.isOwnedBySelf
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps_default(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
  }
});
var copyTrackPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Track props",
  leadingIcon: icons_default.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps_default(context.props);
    const filtered = {
      name: parsed?.name,
      uri: parsed?.uri,
      uid: parsed?.uid,
      albumName: parsed.album?.name,
      albumUri: parsed.albumUri || parsed.album?.uri,
      artists: parsed.artists?.map((artist) => ({
        name: artist.name,
        uri: artist.uri
      })),
      contextName: parsed?.contextName,
      contextUri: parsed.contextUri || parsed.context?.uri
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps_default(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.TRACK;
  }
});
var copyArtistPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Artist props",
  leadingIcon: icons_default.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps_default(context.props);
    const filtered = {
      uri: parsed?.uri
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps_default(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.ARTIST;
  }
});
var copyAlbumPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Album props",
  leadingIcon: icons_default.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps_default(context.props);
    const filtered = {
      uri: parsed?.uri,
      artistUri: parsed?.artistUri
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps_default(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.ALBUM;
  }
});
var logContextMenuPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Log context menu props",
  leadingIcon: icons_default.HTML.terminal,
  onClick: async (context, item, event) => {
    console.log("Context:", context);
    console.log("Item:", item);
    console.log("Event:", event);
  },
  shouldAdd: () => true
});
var copyAllPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy All props",
  leadingIcon: icons_default.HTML.duplicate,
  onClick: async (context, item, event) => {
    Spicetify.Platform.ClipboardAPI.copy(context.props);
  },
  shouldAdd: () => true
});
var logPlayAPIEvents = new Spicetify.ContextMenuV2.Item({
  children: "Log PlayerAPI Events",
  leadingIcon: icons_default.HTML.terminal,
  onClick: async () => {
    notification_default({ message: "Only goes away after a reload/restart", isWarning: true });
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
  shouldAdd: () => true
});
var reloadSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Reload Spotify",
  leadingIcon: icons_default.HTML.reload,
  onClick: async () => {
    location.reload();
  },
  shouldAdd: () => true
});
var restartSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Restart Spotify",
  leadingIcon: icons_default.HTML.reload,
  onClick: async () => {
    Spicetify.Platform.UpdateAPI.applyUpdate();
  },
  shouldAdd: () => true
});
var devUtilsSubMenu = new Spicetify.ContextMenuV2.ItemSubMenu({
  text: "Developer Utils",
  leadingIcon: icons_default.HTML.terminal,
  items: [
    copyAlbumPropsItem,
    copyArtistPropsItem,
    copyPlaylistPropsItem,
    copyTrackPropsItem,
    copyAllPropsItem,
    logContextMenuPropsItem,
    logPlayAPIEvents,
    reloadSpotify,
    restartSpotify
  ],
  shouldAdd: () => true
});
devUtilsSubMenu.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsOnJlYWN0L2pzeC1ydW50aW1lIiwgImV4dGVybmFsLWdsb2JhbDpyZWFjdCIsICIuLi9zaGFyZWQvYXBpL3BhcnNlUHJvcHMuanMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMuanN4IiwgIi4uL3NoYXJlZC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi5qc3giLCAiLi4vZXh0ZW5zaW9ucy9kZXZlbG9wZXJVdGlsaXRpZXMvc3JjL2FwcC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSBTcGljZXRpZnkuUmVhY3RKU1giLCAibW9kdWxlLmV4cG9ydHMgPSBTcGljZXRpZnkuUmVhY3QiLCAiZnVuY3Rpb24gcGFyc2VQcm9wcyhwcm9wcykge1xuICBpZiAoIXByb3BzKSByZXR1cm4ge307XG5cbiAgY29uc3QgcGFyc2VkID0ge307XG5cbiAgY29uc3QgbWVyZ2VQcm9wcyA9IChzb3VyY2UsIHRhcmdldCkgPT4ge1xuICAgIGlmICghc291cmNlIHx8IHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIpIHJldHVybjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBtZXJnZVByb3BzKHByb3BzLCBwYXJzZWQpO1xuICBtZXJnZVByb3BzKHByb3BzLml0ZW0sIHBhcnNlZCk7XG4gIG1lcmdlUHJvcHMocHJvcHMucmVmZXJlbmNlLCBwYXJzZWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlUHJvcHM7XG4iLCAiY29uc3QgSWNvbnMgPSB7XG4gIC8vMjRweFxuICBlZGl0QnV0dG9uOlxuICAgIFwiTTE3LjMxOCAxLjk3NWEzLjMyOSAzLjMyOSAwIDExNC43MDcgNC43MDdMOC40NTEgMjAuMjU2Yy0uNDkuNDktMS4wODIuODY3LTEuNzM1IDEuMTAzTDIuMzQgMjIuOTRhMSAxIDAgMDEtMS4yOC0xLjI4bDEuNTgxLTQuMzc2YTQuNzI2IDQuNzI2IDAgMDExLjEwMy0xLjczNUwxNy4zMTggMS45NzV6bTMuMjkzIDEuNDE0YTEuMzI5IDEuMzI5IDAgMDAtMS44OCAwTDUuMTU5IDE2Ljk2M2MtLjI4My4yODMtLjUuNjI0LS42MzYgMWwtLjg1NyAyLjM3MiAyLjM3MS0uODU3YTIuNzI2IDIuNzI2IDAgMDAxLjAwMS0uNjM2TDIwLjYxMSA1LjI2OGExLjMyOSAxLjMyOSAwIDAwMC0xLjg3OXpcIixcbiAgLy8yNHB4XG4gIHNldHRpbmdzOlxuICAgIFwiTTcuOTYgNS4zM2EyLjY3IDIuNjcgOTAgMTAwIDUuMzQgMi42NyAyLjY3IDkwIDAwMC01LjM0Wk02LjY3IDhBMS4zMyAxLjMzIDkwIDExOS4zMyA4IDEuMzMgMS4zMyA5MCAwMTYuNjcgOFptNC44Mi00LjgxYS45NS45NCA5MCAwMS0xLjEtLjc1TDEwLjA1LjU1QS40Ny40NyA5MCAwMDkuNjguMTcgOC4xIDguMSA5MCAwMDYuMzIuMTcuNDcuNDcgOTAgMDA1Ljk2LjU1TDUuNjEgMi40NGEuOTUuOTUgOTAgMDEtMS4yNS43MUwyLjU1IDIuNTFhLjQ3LjQ3IDkwIDAwLS41MS4xM0MxLjI4IDMuNDcuNzEgNC40Ni4zNiA1LjUzYS40Ny40NyA5MCAwMC4xNC41MUwxLjk3IDcuMjhhLjk0Ljk0IDkwIDAxMCAxLjQzTC41IDkuOTVhLjQ3LjQ3IDkwIDAwLS4xNC41MSA3Ljk4IDcuOTggOTAgMDAxLjY4IDIuOS40Ny40NyA5MCAwMC41MS4xM2wxLjgxLS42NWEuOTQuOTQgOTAgMDExLjI1LjcybC4zNCAxLjg5Yy4wNC4xOC4xOC4zMy4zNy4zN2E4LjEgOC4xIDkwIDAwMy4zNiAwIC40Ny40NyA5MCAwMC4zNy0uMzdsLjM0LTEuODlhLjk1Ljk1IDkwIDAxMS4yNS0uNzJsMS44MS42NWMuMTguMDYuMzguMDEuNTEtLjEzLjc2LS44NCAxLjM0LTEuODIgMS42OC0yLjlhLjQ3LjQ3IDkwIDAwLS4xNC0uNUwxNC4wMyA4LjcyYS45NC45NCA5MCAwMTAtMS40NEwxNS41IDYuMDRhLjQ3LjQ3IDkwIDAwLjE0LS41IDcuOTggNy45OCA5MCAwMC0xLjY4LTIuOS40Ny40NyA5MCAwMC0uNTEtLjEzbC0xLjgxLjY1YS45NS45NSA5MCAwMS0uMTUuMDRabS04LjgyLjc4IDEuMjUuNDRhMi4yOCAyLjI4IDkwIDAwMy0xLjczbC4yNC0xLjNhNi44MSA2LjgxIDkwIDAxMS42OCAwbC4yNCAxLjNhMi4yOCAyLjI4IDkwIDAwMy4wMSAxLjczbDEuMjQtLjQ0Yy4zNC40NC42My45My44NCAxLjQ0bC0xIC44NWEyLjI3IDIuMjcgOTAgMDAwIDMuNDhsMSAuODVhNi42NSA2LjY1IDkwIDAxLS44NCAxLjQ0bC0xLjI0LS40NEEyLjI4IDIuMjggOTAgMDA5LjA4IDEzLjMybC0uMjQgMS4yOWE2LjggNi44IDkwIDAxLTEuNjkgMGwtLjIzLTEuMjlBMi4yOCAyLjI4IDkwIDAwMy45MSAxMS41OWwtMS4yNC40NGE2LjY1IDYuNjUgOTAgMDEtLjg0LTEuNDRsMS0uODZhMi4yNyAyLjI3IDkwIDAwMC0zLjQ3bC0xLS44NWMuMjEtLjUxLjUtMSAuODQtMS40NFpcIixcbiAgLy8yNHB4XG4gIGdpdGh1YjpcbiAgICBcIk0xMi4yMTM1IDBDMTguOTQ3IDAgMjQuNDI2NyA1LjUgMjQuNDA2NiAxMi4zMDQxYzAgNS40MzkxLTMuNDk4MyAxMC4wNDI4LTguMzUxMyAxMS42NzI4LS42MDY1LjEyMjMtLjgyOS0uMjY1LS44MjktLjU5MSAwLS40MDcyLjAyLTEuNzMxNS4wMi0zLjM4MTUgMC0xLjE2MTMtLjM4NC0xLjg5NDUtLjgyOS0yLjI4MTUgMi43My0uMzA1OCA1LjU4MS0xLjM0NDUgNS41ODEtNi4wNzA4IDAtMS4zNDQ1LS40NjUtMi40NDQ1LTEuMjUzNy0zLjMuMTIxMy0uMzA1NS41NDYzLTEuNTY4OC0uMTIxMi0zLjI1OTUgMCAwLTEuMDMxMi0uMzI2LTMuMzU2NyAxLjI2My0uOTcwNy0uMjY0OC0yLjAyMTktLjQwNzUtMy4wNTMyLS40MDc1QTExLjc0MjUgMTEuNzQyNSA5MCAwMDkuMTYgNi4zNTU2Yy0yLjMyNTItMS41ODktMy4zNTY1LTEuMjYzLTMuMzU2NS0xLjI2My0uNjY3NSAxLjY5MDctLjI0MjcgMi45NTQtLjEyMTUgMy4yNTk1LS43Njg1Ljg1NTUtMS4yNTM1IDEuOTU1NS0xLjI1MzUgMy4zIDAgNC43MjYzIDIuODUwOSA1Ljc4NTUgNS41NjA3IDYuMDcwOC0uMzQzNy4zMDU1LS42Njc1Ljg1NTUtLjc2ODUgMS42NS0uNzA3Ny4zMjYtMi40NjcuODU1NS0zLjU1ODctMS4wMTg1IDAgMC0uNjQ3Mi0xLjE4MTUtMS44ODA3LTEuMjYzIDAgMC0xLjE5MyAwLS4wODEuNzUzOCAwIDAgLjgwOS4zNjY1IDEuMzU1IDEuNzkyNSAwIDAgLjcwNzUgMi4yMDAyIDQuMTA1IDEuNDY2NyAwIDEuMDE4OC4wMiAxLjk5NjUuMDIgMi4yODE4IDAgLjMyNTgtLjIyMjIuNzEzLS44MjkuNTkwNUMzLjQ5ODMgMjIuMzQ3MiAwIDE3Ljc0MzIgMCAxMi4zMDQyIDAgNS41IDUuNDU5NyAwIDEyLjIxMzUgMFpcIixcbiAgLy8zMnB4XG4gIGNsb3NlOlxuICAgIFwiTTMxLjA5OCAyOS43OTQgMTYuOTU1IDE1LjY1IDMxLjA5NyAxLjUxIDI5LjY4My4wOTMgMTUuNTQgMTQuMjM3IDEuNC4wOTQtLjAxNiAxLjUwOCAxNC4xMjYgMTUuNjUtLjAxNiAyOS43OTVsMS40MTQgMS40MTRMMTUuNTQgMTcuMDY1bDE0LjE0NCAxNC4xNDNcIixcbiAgLy8yNHB4XG4gIHdhcm5pbmc6XG4gICAgXCJNMTMgMTRWOUgxMXY1Wm0wIDJIMTF2MmgyWm04Ljg4NCAzLjVBMSAxIDAgMDEyMSAyMUgzYTEgMSAwIDAxLS44ODQtMS40NjhsOS0xN2MuMzQ2LS42NTQgMS40MjItLjY1NCAxLjc2OCAwWlwiLFxuICAvLzE2cHhcbiAgbW9yZTogXCJNMyA4QTEuNSAxLjUgMCAxMTAgOGExLjUgMS41IDAgMDEzIDB6bTYuNSAwYTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAwek0xNiA4YTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAwelwiLFxuICAvLzI0cHhcbiAgcXVlc3Rpb25NYXJrOlxuICAgIFwiTTEyIDJjNS41MjMgMCAxMCA0LjQ3OCAxMCAxMHMtNC40NzcgMTAtMTAgMTBTMiAxNy41MjIgMiAxMiA2LjQ3NyAyIDEyIDJabTAgMS42NjdjLTQuNTk1IDAtOC4zMzMgMy43MzgtOC4zMzMgOC4zMzNTNy40MDUgMjAuMzMzIDEyIDIwLjMzMyAyMC4zMzMgMTYuNTk1IDIwLjMzMyAxMmMwLTQuNTk1LTMuNzM4LTguMzMzLTguMzMzLTguMzMzWk0xMiAxNS41YTEgMSAwIDExMCAyIDEgMSAwIDAxMC0yWm0wLTguNzVhMi43NSAyLjc1IDAgMDEyLjc1IDIuNzVjMCAxLjAxLS4yOTcgMS41NzQtMS4wNTEgMi4zNTlsLS4xNjkuMTcxYy0uNjIyLjYyMi0uNzguODg2LS43OCAxLjQ3YS43NS43NSAwIDAxLTEuNSAwYzAtMS4wMS4yOTctMS41NzQgMS4wNTEtMi4zNTlsLjE2OS0uMTcxYy42MjItLjYyMi43OC0uODg2Ljc4LTEuNDdhMS4yNSAxLjI1IDAgMDAtMi40OTMtLjEyOGwtLjAwNy4xMjhhLjc1Ljc1IDAgMDEtMS41IDBBMi43NSAyLjc1IDAgMDExMiA2Ljc1WlwiLFxuICAvLzI0cHhcbiAgZHJvcGRvd246XG4gICAgXCJNMjAuNDYxNCA2LjM0NjlhMS41MDYgMS41MDYgOTAgMDAtMi4xMTI1LjE5MTlMMTIgMTQuMTU2NCA1LjY1MSA2LjUzODlhMS40OTk3IDEuNDk5NyA5MCAxMC0yLjMwMjggMS45MjJsNy41MDA0IDkuMDAwNGExLjQ5OTIgMS40OTkyIDkwIDAwMi4zMDI4IDBsNy41MDA0LTkuMDAwNWExLjUwMTkgMS41MDE5IDkwIDAwLS4xOTA0LTIuMTEzOVpcIixcbiAgLy8yNHB4XG4gIHBhbGV0dGU6XG4gICAgXCJNMTIgMmM1LjQ2MSAwIDkuOTY1IDQuMDEyIDkuOTkyIDguODQgMCAzLjA1MS0yLjUwNCA1LjU1NC01LjU1NSA1LjU1NEgxNC40NDFhMS42NCAxLjY0IDAgMDAtMS42NjggMS42NjhjMCAuNDczLjE0OC44MzYuNDM4IDEuMTI1LjI1Ny4yOS40MzcuNjg4LjQzNyAxLjEyNUMxMy42NDggMjEuMjU0IDEyLjkyNiAyMiAxMiAyMiA2LjUgMjIgMiAxNy41IDIgMTJTNi41IDIgMTIgMlpcIixcbiAgLy8xNnB4XG4gIGR1cGxpY2F0ZTpcbiAgICBcIk0xNSAzLjVjMC0uNS0uNS0xLTEtMUgxMVYxYzAtLjUtLjUtMS0xLTFIMkMxLjUgMCAxIC41IDEgMVYxMS41YzAgLjUuNSAxIDEgMUg0LjVWMTVjMCAuNS41IDEgMSAxSDE0Yy41IDAgMS0uNSAxLTFaTTIuNSAyYzAtLjI1LjI1LS41LjUtLjVIOWMuMjUgMCAuNS4yNS41LjV2OC41YzAgLjI1LS4yNS41LS41LjVIM2MtLjI1IDAtLjUtLjI1LS41LS41Wm00IDEyLjVjLS4yNSAwLS41LS4yNS0uNS0uNVYxMi41aDRjLjUgMCAxLS41IDEtMVY0aDJjLjI1IDAgLjUuMjUuNS41VjE0YzAgLjI1LS4yNS41LS41LjVaXCIsXG4gIC8vMTZweFxuICB0ZXJtaW5hbDpcbiAgICBcIk0zLjkyNCA1LjAyYS43NS43NSAwIDAxMS4wNTYtLjA5NmwzIDIuNWEuNzUuNzUgMCAwMTAgMS4xNTJsLTMgMi41YS43NS43NSAwIDExLS45Ni0xLjE1Mkw2LjMyOCA4IDQuMDIgNi4wNzZBLjc1Ljc1IDAgMDEzLjkyNCA1LjAyek04LjI1IDEwLjVhLjc1Ljc1IDAgMDAwIDEuNWgzYS43NS43NSAwIDAwMC0xLjVoLTN6TTAgMy4yNUEyLjI1IDIuMjUgMCAwMTIuMjUgMWgxMS41QTIuMjUgMi4yNSAwIDAxMTYgMy4yNXY5LjVBMi4yNSAyLjI1IDAgMDExMy43NSAxNUgyLjI1QTIuMjUgMi4yNSAwIDAxMCAxMi43NXYtOS41em0yLjI1LS43NWEuNzUuNzUgMCAwMC0uNzUuNzV2OS41YzAgLjQxNC4zMzYuNzUuNzUuNzVoMTEuNWEuNzUuNzUgMCAwMC43NS0uNzV2LTkuNWEuNzUuNzUgMCAwMC0uNzUtLjc1SDIuMjV6XCIsXG4gIC8vIDE2cHhcbiAgY3VzdG9tQXJ0d29yazpcbiAgICBcIk0wIDJ2MTJhMiAyIDkwIDAwMiAyaDEyYTIgMiA5MCAwMDItMlY3LjMzbC0xLjMzIDEuMzN2NS4zM2EuNjYuNjYgOTAgMDEtLjY2LjY2SDJhLjY2LjY2IDkwIDAxLS42Ni0uNjZWMkEuNjYuNjYgOTAgMDEyIDEuMzRoOS42NkwxMyAwSDJBMiAyIDkwIDAwMCAyem0yLjY2IDMuMzNDNC4zMiA1IDQuOTkgMy42NyA1LjMyIDIuNjdoLjMzYy4zMyAxIDEgMi4zMyAyLjY2IDIuNnYuMzNjLTEuNjYuMzMtMi4zMyAxLjY2LTIuNjYgMi42NmgtLjMzYy0uMzMtMS0xLTIuMzMtMi42Ni0yLjY2em0xMy0yLjY2YTEuMzMgMS4zMyA5MCAwMC0xLjY2IDBMNyA5LjMzYTAgMCA5MCAwMDAgMGwtMS42NiAzYS4zMy4zMyA5MCAwMC4zMy4zM2wzLTEuNjZhMCAwIDkwIDAwMCAwbDctN2ExLjMzIDEuMzMgOTAgMDAwLTEuMzN6XCIsXG4gIHBsYXk6IFwiTTMuMzMzMyAzLjUxNmMwLTEuMTM4IDEuMjE3My0xLjg2MTMgMi4yMTY3LTEuMzE4bDguMjQxMyA0LjQ4NGMxLjA0NC41Njg3IDEuMDQ0IDIuMDY3MyAwIDIuNjM1M0w1LjU1IDEzLjgwMTNDNC41NTA3IDE0LjM0NTMgMy4zMzMzIDEzLjYyMTMgMy4zMzMzIDEyLjQ4NFYzLjUxNlpcIixcbiAgcGF1c2U6XG4gICAgXCJNMy44MzA3IDJBMS4xNjY3IDEuMTY2NyA5MCAwMDIuNjY0IDMuMTY2N1YxMi44MzMzQzIuNjY0IDEzLjQ3NzMgMy4xODY3IDE0IDMuODMwNyAxNEg2LjE2NEExLjE2NjcgMS4xNjY3IDkwIDAwNy4zMzA3IDEyLjgzMzNWMy4xNjY3QTEuMTY2NyAxLjE2NjcgOTAgMDA2LjE2NCAySDMuODMwN1pNOS44MzA3IDJBMS4xNjY3IDEuMTY2NyA5MCAwMDguNjY0IDMuMTY2N1YxMi44MzMzQzguNjY0IDEzLjQ3NzMgOS4xODY3IDE0IDkuODMwNyAxNEgxMi4xNjRBMS4xNjY3IDEuMTY2NyA5MCAwMDEzLjMzMDcgMTIuODMzM1YzLjE2NjdBMS4xNjY3IDEuMTY2NyA5MCAwMDEyLjE2NCAySDkuODMwN1pcIixcbn07XG5cbmNvbnN0IFJlYWN0Q29tcG9uZW50ID0gKGljb24sIGRlZmF1bHRTaXplID0gMTYpID0+IHtcbiAgcmV0dXJuICh7IHNpemUgPSBkZWZhdWx0U2l6ZSwgZmlsbCA9IFwiY3VycmVudENvbG9yXCIgfSkgPT4gKFxuICAgIDxzdmcgdmlld0JveD17YDAgMCAke2RlZmF1bHRTaXplfSAke2RlZmF1bHRTaXplfWB9IHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IGZpbGw9e2ZpbGx9PlxuICAgICAgPHBhdGggZD17aWNvbn0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbkljb25zLlJlYWN0ID0ge1xuICBlZGl0QnV0dG9uOiBSZWFjdENvbXBvbmVudChJY29ucy5lZGl0QnV0dG9uLCAyNCksXG4gIHNldHRpbmdzOiBSZWFjdENvbXBvbmVudChJY29ucy5zZXR0aW5ncywgMTYpLFxuICBnaXRodWI6IFJlYWN0Q29tcG9uZW50KEljb25zLmdpdGh1YiwgMjQpLFxuICBjbG9zZTogUmVhY3RDb21wb25lbnQoSWNvbnMuY2xvc2UsIDMyKSxcbiAgd2FybmluZzogUmVhY3RDb21wb25lbnQoSWNvbnMud2FybmluZywgMjQpLFxuICBtb3JlOiBSZWFjdENvbXBvbmVudChJY29ucy5tb3JlLCAxNiksXG4gIHF1ZXN0aW9uTWFyazogUmVhY3RDb21wb25lbnQoSWNvbnMucXVlc3Rpb25NYXJrLCAyNCksXG4gIGRyb3Bkb3duOiBSZWFjdENvbXBvbmVudChJY29ucy5kcm9wZG93biwgMjQpLFxuICBwYWxldHRlOiBSZWFjdENvbXBvbmVudChJY29ucy5wYWxldHRlLCAyNCksXG4gIGR1cGxpY2F0ZTogUmVhY3RDb21wb25lbnQoSWNvbnMuZHVwbGljYXRlLCAxNiksXG4gIHRlcm1pbmFsOiBSZWFjdENvbXBvbmVudChJY29ucy50ZXJtaW5hbCwgMTYpLFxuICBjdXN0b21BcnR3b3JrOiBSZWFjdENvbXBvbmVudChJY29ucy5jdXN0b21BcnR3b3JrLCAxNiksXG4gIHBsYXk6IFJlYWN0Q29tcG9uZW50KEljb25zLnBsYXksIDE2KSxcbiAgcGF1c2U6IFJlYWN0Q29tcG9uZW50KEljb25zLnBhdXNlLCAxNiksXG59O1xuXG5JY29ucy5IVE1MID0ge1xuICBlZGl0QnV0dG9uOiBgPHBhdGggZD1cIiR7SWNvbnMuZWRpdEJ1dHRvbn1cIi8+YCxcbiAgc2V0dGluZ3M6IGA8cGF0aCBkPVwiJHtJY29ucy5zZXR0aW5nc31cIi8+YCxcbiAgZ2l0aHViOiBgPHBhdGggZD1cIiR7SWNvbnMuZ2l0aHVifVwiLz5gLFxuICBjbG9zZTogYDxwYXRoIGQ9XCIke0ljb25zLmNsb3NlfVwiLz5gLFxuICB3YXJuaW5nOiBgPHBhdGggZD1cIiR7SWNvbnMud2FybmluZ31cIi8+YCxcbiAgbW9yZTogYDxwYXRoIGQ9XCIke0ljb25zLm1vcmV9XCIvPmAsXG4gIHF1ZXN0aW9uTWFyazogYDxwYXRoIGQ9XCIke0ljb25zLnF1ZXN0aW9uTWFya31cIi8+YCxcbiAgZHJvcGRvd246IGA8cGF0aCBkPVwiJHtJY29ucy5kcm9wZG93bn1cIi8+YCxcbiAgcGFsZXR0ZTogYDxwYXRoIGQ9XCIke0ljb25zLnBhbGV0dGV9XCIvPmAsXG4gIGR1cGxpY2F0ZTogYDxwYXRoIGQ9XCIke0ljb25zLmR1cGxpY2F0ZX1cIi8+YCxcbiAgdGVybWluYWw6IGA8cGF0aCBkPVwiJHtJY29ucy50ZXJtaW5hbH1cIi8+YCxcbiAgY3VzdG9tQXJ0d29yazogYDxwYXRoIGQ9XCIke0ljb25zLmN1c3RvbUFydHdvcmt9XCIvPmAsXG4gIHBsYXk6IGA8cGF0aCBkPVwiJHtJY29ucy5wbGF5fVwiLz5gLFxuICBwYXVzZTogYDxwYXRoIGQ9XCIke0ljb25zLnBhdXNlfVwiLz5gLFxufTtcblxuLy8gVXNhZ2U6XG4vLyA8c3ZnXG4vLyAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuLy8gICB3aWR0aD1cIjE2XCJcbi8vICAgaGVpZ2h0PVwiMTZcIlxuLy8gICBmaWxsPVwiY3VycmVudENvbG9yXCJcbi8vICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbi8vICAgICBfX2h0bWw6IEljb25zLkhUTUwubW9yZSxcbi8vICAgfX1cbi8vIC8+XG4vLyBPUjpcbi8vIDxJY29ucy5SZWFjdC5lZGl0QnV0dG9uIHNpemU9ezI0fSBmaWxsPVwiI2ZmZlwiIC8+XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29ucyBmcm9tIFwiLi9pY29uc1wiO1xuXG5jb25zdCBOb3RpZmljYXRpb24gPSAoe1xuICBtZXNzYWdlID0gXCJcIixcbiAga2V5UHJlZml4ID0gXCJjdXN0b20tbm90aWZcIixcbiAgYXV0b0hpZGVEdXJhdGlvbiA9IDMwMDAsXG4gIGJhY2tncm91bmRDb2xvdXIgPSBcIiNmZmZcIixcbiAgY29sb3VyID0gXCIjMDAwXCIsXG4gIGlzV2FybmluZyA9IGZhbHNlLFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBpc1dhcm5pbmcgPyAoXG4gICAgPD5cbiAgICAgIDxJY29ucy5SZWFjdC53YXJuaW5nIHNpemU9ezI0fSAvPlxuICAgICAgPHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuICAgIDwvPlxuICApIDogKFxuICAgIDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cbiAgKTtcblxuICBjb25zdCBCYWNrZ3JvdW5kQ29sb3VyID0gaXNXYXJuaW5nID8gXCIjZmY5ODAwXCIgOiBiYWNrZ3JvdW5kQ29sb3VyO1xuICBjb25zdCBDb2xvdXIgPSBpc1dhcm5pbmcgPyBcIiNmZmZcIiA6IGNvbG91cjtcblxuICB0cnkge1xuICAgIFNwaWNldGlmeS5TbmFja2Jhci5lbnF1ZXVlQ3VzdG9tU25hY2tiYXIoa2V5UHJlZml4LCB7XG4gICAgICBrZXlQcmVmaXgsXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uLFxuICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1ub3RpZmljYXRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGdhcDogXCI4cHhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBjb2xvcjogQ29sb3VyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBCYWNrZ3JvdW5kQ29sb3VyLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNHB4IDE2cHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29uc29sZS5FcnJvcihcIkVycm9yIGRpc3BsYXlpbmcgbm90aWZpY2F0aW9uOlwiLCBlcnJvcik7XG4gIH1cbn07XG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBOb3RpZmljYXRpb24oe1xuLy8gICBhdXRvSGlkZUR1cmF0aW9uOiA1MDAwLFxuLy8gICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmOTgwMFwiLFxuLy8gICBtZXNzYWdlOiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxzdmdcbi8vICAgICAgICAgd2lkdGg9XCIyMFwiXG4vLyAgICAgICAgIGhlaWdodD1cIlwiXG4vLyAgICAgICAgIHZpZXdCb3g9XCIwIDAgOTYgOTZcIlxuLy8gICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbi8vICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBJY29ucy53YXJuaW5nIH19XG4vLyAgICAgICAvPlxuLy8gICAgICAgPHNwYW4+XG4vLyAgICAgICAgIFRoZW1lIG9ubHkgc3VwcG9ydHMgU3BvdGlmeSB2ZXJzaW9ucyBncmVhdGVyIHRoYW4gMS4yLjUwLjAwMFxuLy8gICAgICAgPC9zcGFuPlxuLy8gICAgIDwvPlxuLy8gICApLFxuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjtcbiIsICJpbXBvcnQgcGFyc2VQcm9wcyBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzXCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb25zXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9ub3RpZmljYXRpb25cIjtcblxuU3BpY2V0aWZ5Lk1vdXNldHJhcC5iaW5kKFwiZjhcIiwgYXN5bmMgKCkgPT4ge1xuICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vRGVidWdnZXI6IE5lZWRlZCB0byB1c2UgZGVidWdnZXJcbiAgZGVidWdnZXI7XG4gIE5vdGlmaWNhdGlvbih7IG1lc3NhZ2U6IFwiRGV2dG9vbHMgbXVzdCBiZSBvcGVuIGRvIHVzZSBkZWJ1Z2dlclwiLCBpc1dhcm5pbmc6IHRydWUgfSk7XG59KTtcblxuYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlByb2R1Y3RTdGF0ZUFQSS5wcm9kdWN0U3RhdGVBcGkucHV0VmFsdWVzKHtcbiAgcGFpcnM6IHsgXCJhcHAtZGV2ZWxvcGVyXCI6IFwiMlwiIH0sXG59KTtcblxuU3BpY2V0aWZ5LlBsYXRmb3JtLlByb2R1Y3RTdGF0ZUFQSS5wcm9kdWN0U3RhdGVBcGkuc3ViVmFsdWVzKFxuICB7IGtleXM6IFtcImFwcC1kZXZlbG9wZXJcIl0gfSxcbiAgYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gZGF0YT8ucGFpcnM/LltcImFwcC1kZXZlbG9wZXJcIl07XG4gICAgaWYgKGN1cnJlbnQgIT09IFwiMlwiKSB7XG4gICAgICBjb25zb2xlLmxvZygnXCJhcHAtZGV2ZWxvcGVyXCIgdmFsdWUgY2hhbmdlZC4gUmVzZXR0aW5nIHRvIFwiMlwiLicpO1xuICAgICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlByb2R1Y3RTdGF0ZUFQSS5wcm9kdWN0U3RhdGVBcGkucHV0VmFsdWVzKHtcbiAgICAgICAgcGFpcnM6IHsgXCJhcHAtZGV2ZWxvcGVyXCI6IFwiMlwiIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4pO1xuXG5jb25zdCBjb3B5UGxheWxpc3RQcm9wc0l0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIkNvcHkgUGxheWxpc3QgcHJvcHNcIixcbiAgbGVhZGluZ0ljb246IEljb25zLkhUTUwuZHVwbGljYXRlLFxuICBvbkNsaWNrOiBhc3luYyAoY29udGV4dCwgaXRlbSwgZXZlbnQpID0+IHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVByb3BzKGNvbnRleHQucHJvcHMpO1xuICAgIGNvbnN0IGZpbHRlcmVkID0ge1xuICAgICAgdXJpOiBwYXJzZWQ/LnVyaSxcbiAgICAgIG5hbWU6IHBhcnNlZD8ubmFtZSxcbiAgICAgIG93bmVyOiBwYXJzZWQ/Lm93bmVyXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZTogcGFyc2VkLm93bmVyLm5hbWUsXG4gICAgICAgICAgICB1cmk6IHBhcnNlZC5vd25lci51cmksXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGlzT3duZWRCeVNlbGY6IHBhcnNlZD8uaXNPd25lZEJ5U2VsZixcbiAgICB9O1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5DbGlwYm9hcmRBUEkuY29weShmaWx0ZXJlZCk7XG4gIH0sXG4gIHNob3VsZEFkZDogKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VQcm9wcyhwcm9wcyk7XG4gICAgY29uc3QgdHlwZSA9IFNwaWNldGlmeS5VUkkuZnJvbShwYXJzZWQudXJpKT8udHlwZTtcbiAgICByZXR1cm4gdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLlBMQVlMSVNUIHx8IHR5cGUgPT09IFNwaWNldGlmeS5VUkkuVHlwZS5QTEFZTElTVF9WMjtcbiAgfSxcbn0pO1xuXG5jb25zdCBjb3B5VHJhY2tQcm9wc0l0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIkNvcHkgVHJhY2sgcHJvcHNcIixcbiAgbGVhZGluZ0ljb246IEljb25zLkhUTUwuZHVwbGljYXRlLFxuICBvbkNsaWNrOiBhc3luYyAoY29udGV4dCwgaXRlbSwgZXZlbnQpID0+IHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVByb3BzKGNvbnRleHQucHJvcHMpO1xuICAgIGNvbnN0IGZpbHRlcmVkID0ge1xuICAgICAgbmFtZTogcGFyc2VkPy5uYW1lLFxuICAgICAgdXJpOiBwYXJzZWQ/LnVyaSxcbiAgICAgIHVpZDogcGFyc2VkPy51aWQsXG4gICAgICBhbGJ1bU5hbWU6IHBhcnNlZC5hbGJ1bT8ubmFtZSxcbiAgICAgIGFsYnVtVXJpOiBwYXJzZWQuYWxidW1VcmkgfHwgcGFyc2VkLmFsYnVtPy51cmksXG4gICAgICBhcnRpc3RzOiBwYXJzZWQuYXJ0aXN0cz8ubWFwKChhcnRpc3QpID0+ICh7XG4gICAgICAgIG5hbWU6IGFydGlzdC5uYW1lLFxuICAgICAgICB1cmk6IGFydGlzdC51cmksXG4gICAgICB9KSksXG4gICAgICBjb250ZXh0TmFtZTogcGFyc2VkPy5jb250ZXh0TmFtZSxcbiAgICAgIGNvbnRleHRVcmk6IHBhcnNlZC5jb250ZXh0VXJpIHx8IHBhcnNlZC5jb250ZXh0Py51cmksXG4gICAgfTtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uQ2xpcGJvYXJkQVBJLmNvcHkoZmlsdGVyZWQpO1xuICB9LFxuICBzaG91bGRBZGQ6IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUHJvcHMocHJvcHMpO1xuICAgIGNvbnN0IHR5cGUgPSBTcGljZXRpZnkuVVJJLmZyb20ocGFyc2VkLnVyaSk/LnR5cGU7XG4gICAgcmV0dXJuIHR5cGUgPT09IFNwaWNldGlmeS5VUkkuVHlwZS5UUkFDSztcbiAgfSxcbn0pO1xuXG5jb25zdCBjb3B5QXJ0aXN0UHJvcHNJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW0oe1xuICBjaGlsZHJlbjogXCJDb3B5IEFydGlzdCBwcm9wc1wiLFxuICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC5kdXBsaWNhdGUsXG4gIG9uQ2xpY2s6IGFzeW5jIChjb250ZXh0LCBpdGVtLCBldmVudCkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUHJvcHMoY29udGV4dC5wcm9wcyk7XG4gICAgY29uc3QgZmlsdGVyZWQgPSB7XG4gICAgICB1cmk6IHBhcnNlZD8udXJpLFxuICAgIH07XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLkNsaXBib2FyZEFQSS5jb3B5KGZpbHRlcmVkKTtcbiAgfSxcbiAgc2hvdWxkQWRkOiAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVByb3BzKHByb3BzKTtcbiAgICBjb25zdCB0eXBlID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHBhcnNlZC51cmkpPy50eXBlO1xuICAgIHJldHVybiB0eXBlID09PSBTcGljZXRpZnkuVVJJLlR5cGUuQVJUSVNUO1xuICB9LFxufSk7XG5cbmNvbnN0IGNvcHlBbGJ1bVByb3BzSXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnVWMi5JdGVtKHtcbiAgY2hpbGRyZW46IFwiQ29weSBBbGJ1bSBwcm9wc1wiLFxuICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC5kdXBsaWNhdGUsXG4gIG9uQ2xpY2s6IGFzeW5jIChjb250ZXh0LCBpdGVtLCBldmVudCkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUHJvcHMoY29udGV4dC5wcm9wcyk7XG4gICAgY29uc3QgZmlsdGVyZWQgPSB7XG4gICAgICB1cmk6IHBhcnNlZD8udXJpLFxuICAgICAgYXJ0aXN0VXJpOiBwYXJzZWQ/LmFydGlzdFVyaSxcbiAgICB9O1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5DbGlwYm9hcmRBUEkuY29weShmaWx0ZXJlZCk7XG4gIH0sXG4gIHNob3VsZEFkZDogKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VQcm9wcyhwcm9wcyk7XG4gICAgY29uc3QgdHlwZSA9IFNwaWNldGlmeS5VUkkuZnJvbShwYXJzZWQudXJpKT8udHlwZTtcbiAgICByZXR1cm4gdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLkFMQlVNO1xuICB9LFxufSk7XG5cbmNvbnN0IGxvZ0NvbnRleHRNZW51UHJvcHNJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW0oe1xuICBjaGlsZHJlbjogXCJMb2cgY29udGV4dCBtZW51IHByb3BzXCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLnRlcm1pbmFsLFxuICBvbkNsaWNrOiBhc3luYyAoY29udGV4dCwgaXRlbSwgZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbnRleHQ6XCIsIGNvbnRleHQpO1xuICAgIGNvbnNvbGUubG9nKFwiSXRlbTpcIiwgaXRlbSk7XG4gICAgY29uc29sZS5sb2coXCJFdmVudDpcIiwgZXZlbnQpO1xuICB9LFxuICBzaG91bGRBZGQ6ICgpID0+IHRydWUsXG59KTtcblxuY29uc3QgY29weUFsbFByb3BzSXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnVWMi5JdGVtKHtcbiAgY2hpbGRyZW46IFwiQ29weSBBbGwgcHJvcHNcIixcbiAgbGVhZGluZ0ljb246IEljb25zLkhUTUwuZHVwbGljYXRlLFxuICBvbkNsaWNrOiBhc3luYyAoY29udGV4dCwgaXRlbSwgZXZlbnQpID0+IHtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uQ2xpcGJvYXJkQVBJLmNvcHkoY29udGV4dC5wcm9wcyk7XG4gIH0sXG4gIHNob3VsZEFkZDogKCkgPT4gdHJ1ZSxcbn0pO1xuXG5jb25zdCBsb2dQbGF5QVBJRXZlbnRzID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW0oe1xuICBjaGlsZHJlbjogXCJMb2cgUGxheWVyQVBJIEV2ZW50c1wiLFxuICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC50ZXJtaW5hbCxcbiAgb25DbGljazogYXN5bmMgKCkgPT4ge1xuICAgIE5vdGlmaWNhdGlvbih7IG1lc3NhZ2U6IFwiT25seSBnb2VzIGF3YXkgYWZ0ZXIgYSByZWxvYWQvcmVzdGFydFwiLCBpc1dhcm5pbmc6IHRydWUgfSk7XG4gICAgLy8gU3BpY2V0aWZ5J3MgZXZlbnQgbGlzdGVuZXJzIGZvciBQbGF5ZXJBUEkgZXZlbnRzXG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLmFkZExpc3RlbmVyKFwidXBkYXRlXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJVcGRhdGUgZXZlbnQ6XCIsIGV2ZW50KTtcbiAgICB9KTtcblxuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5hZGRMaXN0ZW5lcihcImFjdGlvblwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWN0aW9uIGV2ZW50OlwiLCBldmVudCk7XG4gICAgfSk7XG5cbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMuYWRkTGlzdGVuZXIoXCJlcnJvclwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBldmVudDpcIiwgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLmFkZExpc3RlbmVyKFwicmVhZHlcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlYWR5IGV2ZW50OlwiLCBldmVudCk7XG4gICAgfSk7XG5cbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMuYWRkTGlzdGVuZXIoXCJxdWV1ZV9hY3Rpb25fY29tcGxldGVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlF1ZXVlIGFjdGlvbiBjb21wbGV0ZTpcIiwgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLmFkZExpc3RlbmVyKFwicXVldWVfdXBkYXRlXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJRdWV1ZSB1cGRhdGU6XCIsIGV2ZW50KTtcbiAgICB9KTtcbiAgfSxcbiAgc2hvdWxkQWRkOiAoKSA9PiB0cnVlLFxufSk7XG5cbmNvbnN0IHJlbG9hZFNwb3RpZnkgPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIlJlbG9hZCBTcG90aWZ5XCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLnJlbG9hZCxcbiAgb25DbGljazogYXN5bmMgKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuICBzaG91bGRBZGQ6ICgpID0+IHRydWUsXG59KTtcblxuY29uc3QgcmVzdGFydFNwb3RpZnkgPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIlJlc3RhcnQgU3BvdGlmeVwiLFxuICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC5yZWxvYWQsXG4gIG9uQ2xpY2s6IGFzeW5jICgpID0+IHtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uVXBkYXRlQVBJLmFwcGx5VXBkYXRlKCk7XG4gIH0sXG4gIHNob3VsZEFkZDogKCkgPT4gdHJ1ZSxcbn0pO1xuXG5jb25zdCBkZXZVdGlsc1N1Yk1lbnUgPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbVN1Yk1lbnUoe1xuICB0ZXh0OiBcIkRldmVsb3BlciBVdGlsc1wiLFxuICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC50ZXJtaW5hbCxcbiAgaXRlbXM6IFtcbiAgICBjb3B5QWxidW1Qcm9wc0l0ZW0sXG4gICAgY29weUFydGlzdFByb3BzSXRlbSxcbiAgICBjb3B5UGxheWxpc3RQcm9wc0l0ZW0sXG4gICAgY29weVRyYWNrUHJvcHNJdGVtLFxuICAgIGNvcHlBbGxQcm9wc0l0ZW0sXG4gICAgbG9nQ29udGV4dE1lbnVQcm9wc0l0ZW0sXG4gICAgbG9nUGxheUFQSUV2ZW50cyxcbiAgICByZWxvYWRTcG90aWZ5LFxuICAgIHJlc3RhcnRTcG90aWZ5LFxuICBdLFxuICBzaG91bGRBZGQ6ICgpID0+IHRydWUsXG59KTtcblxuZGV2VXRpbHNTdWJNZW51LnJlZ2lzdGVyKCk7XG5cbi8vIGNvcHkgb2JqZWN0IHRoYXQgbGVhZGRzIHRvIFtvYmplY3QgT2JqZWN0XVxuLy8gY29uc3QgZ2V0Q2lyY3VsYXJSZXBsYWNlciA9ICgpID0+IHtcbi8vICAgY29uc3Qgc2VlbiA9IG5ldyBXZWFrU2V0KCk7XG4vLyAgIHJldHVybiAoa2V5LCB2YWx1ZSkgPT4ge1xuLy8gICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbi8vICAgICAgIGlmIChzZWVuLmhhcyh2YWx1ZSkpIHtcbi8vICAgICAgICAgcmV0dXJuIFwiW0NpcmN1bGFyXVwiO1xuLy8gICAgICAgfVxuLy8gICAgICAgc2Vlbi5hZGQodmFsdWUpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gdmFsdWU7XG4vLyAgIH07XG4vLyB9O1xuLy8gY29weShKU09OLnN0cmluZ2lmeSh0ZW1wMywgZ2V0Q2lyY3VsYXJSZXBsYWNlcigpKSlcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsV0FB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
