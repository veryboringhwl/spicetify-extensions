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

// external-global:react-dom
var require_react_dom = __commonJS({
  "external-global:react-dom"(exports, module) {
    module.exports = Spicetify.ReactDOM;
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

// shared/components/popupModal.jsx
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// shared/styles/popupModal.css
(function() {
  const css = ".modal-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(var(--spice-rgb-shadow), 0.5);\n  border-radius: 7px;\n}\n\n.modal {\n  background-color: unset;\n}\n\n.modal__container {\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(var(--spice-rgb-main), 0.9) !important;\n  backdrop-filter: blur(20px) saturate(1.4) brightness(1.2);\n  width: 500px;\n  max-height: 500px;\n  border-radius: 7px;\n  box-shadow: 0 0px 20px rgba(var(--spice-rgb-shadow), 0.5) !important;\n}\n\n.modal__container--large {\n  max-height: 80vh;\n  width: clamp(550px, 60vw, 650px);\n}\n\n.modal__header {\n  display: flex;\n  justify-content: space-between;\n  padding: 32px 32px 12px;\n  border-bottom: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);\n}\n\n.modal__titleContainer {\n  display: flex;\n  gap: 8px;\n}\n\n.modal__icon {\n  display: flex;\n  align-items: center;\n}\n\n.modal__title {\n  display: flex;\n}\n\n.modal__buttonContainer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.modal__buttonContainer .modal__button {\n  background-color: var(--spice-highlight);\n  border-radius: 8px;\n  height: 34px;\n  cursor: pointer;\n  padding: 8px;\n  border: 0;\n}\n\n.modal__buttonContainer .modal__button:hover {\n  transform: scale(1.1);\n}\n\n.modal__buttonContainer .modal__button:active {\n  transform: scale(0.9);\n}\n\n.modal__content {\n  display: flex;\n  padding: 16px 24px !important;\n  overflow: auto;\n  scrollbar-gutter: stable both-edges;\n}\n\n.modal__content > * {\n  width: 100%;\n}";
  const styleId = "shared-popupModal";
  if (document.getElementById(styleId)) {
    return;
  }
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = css;
  document.head.appendChild(style);
})();

// shared/components/popupModal.jsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var modalContainer = null;
var modalRoot = null;
var closeModal = () => {
  if (modalRoot && modalContainer) {
    modalRoot.unmount();
    modalContainer.remove();
    document.body.style.overflow = "auto";
    document.removeEventListener("keydown", handleEscKey);
    document.removeEventListener("mousedown", handleClickOutside);
    modalContainer = null;
    modalRoot = null;
  }
};
var handleEscKey = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};
var handleClickOutside = (event) => {
  if (event.target.classList.contains("modal-overlay")) {
    closeModal();
  }
};
var PopupModal = ({ title = "", content, isLarge = true, buttons = false, icon = "" } = {}) => {
  modalContainer = document.getElementById("popup-modal");
  if (!modalContainer) {
    modalContainer = document.createElement("popup-modal");
    modalContainer.id = "popup-modal";
    document.body.appendChild(modalContainer);
  }
  modalRoot = import_react_dom.default.createRoot(modalContainer);
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleEscKey);
  document.addEventListener("mousedown", handleClickOutside);
  const ModalComponent = (0, import_react.memo)(() => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `modal__container${isLarge ? " modal__container--large" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "modal__header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "modal__titleContainer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal__icon", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "modal__title", children: title })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "modal__buttonContainer", children: [
        buttons,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Spicetify.ReactComponent.TooltipWrapper, { label: "Close", placement: "top", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "modal__button modal__button--close", onClick: () => closeModal(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(icons_default.React.close, { size: 18 }) }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal__content", children: import_react.default.isValidElement(content) ? content : import_react.default.createElement(content) })
  ] }) }) }));
  modalRoot.render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModalComponent, {}));
};
PopupModal.hide = closeModal;
var popupModal_default = PopupModal;

// extensions/findDupeTracks/src/menu.jsx
var import_react12 = __toESM(require_react());
import Dexie from "https://esm.sh/dexie";

// shared/api/fetchAllLibraryContents.js
async function fetchLibraryContents() {
  const response = await Spicetify.Platform.LibraryAPI.getContents({
    offset: 0,
    limit: 1e7,
    flattenTree: true
  });
  return response.items;
}
var fetchAllLibraryContents_default = fetchLibraryContents;

// shared/api/fetchAllPlaylistTracks.js
async function fetchAllPlaylistTracks(playlistUri) {
  const response = await Spicetify.Platform.PlaylistAPI.getContents(playlistUri, {
    offset: 0,
    limit: -1
  });
  return {
    items: response.items
  };
}
var fetchAllPlaylistTracks_default = fetchAllPlaylistTracks;

// shared/api/fetchGraphQLForAlbumTracks.js
async function fetchGraphQLForAlbumTracks(albumURIs) {
  const dataMap = /* @__PURE__ */ new Map();
  const batchFetchPromises = Array.from(albumURIs).map(async (albumUri) => {
    const response = await Spicetify.Platform.GraphQLLoader(
      Spicetify.GraphQL.Definitions.queryAlbumTracks,
      {
        uri: albumUri,
        locale: Spicetify.Locale.getLocale(),
        offset: 0,
        limit: 5e3
      }
    );
    const albumTracksData = response?.data?.albumUnion?.tracksV2?.items;
    if (albumTracksData) {
      for (const item of albumTracksData) {
        const trackUri = item?.track?.uri;
        if (trackUri) {
          dataMap.set(trackUri, item.track);
        }
      }
    }
  });
  await Promise.all(batchFetchPromises);
  return dataMap;
}
var fetchGraphQLForAlbumTracks_default = fetchGraphQLForAlbumTracks;

// shared/api/fetchWebAPIForTracks.js
async function fetchWebAPIForTracks(trackURIs) {
  const dataMap = /* @__PURE__ */ new Map();
  const trackIdsToFetch = /* @__PURE__ */ new Map();
  for (const uri of trackURIs) {
    if (uri) {
      trackIdsToFetch.set(uri, Spicetify.URI.fromString(uri).id);
    }
  }
  const batchSize = 50;
  const batchFetchPromises = Array.from(trackIdsToFetch.values()).reduce((batches, id, i) => {
    const batchIndex = Math.floor(i / batchSize);
    batches[batchIndex] = batches[batchIndex] || [];
    batches[batchIndex].push(id);
    return batches;
  }, []).map(async (batchIds) => {
    const url = `https://api.spotify.com/v1/tracks?ids=${batchIds.join(",")}`;
    const response = await Spicetify.CosmosAsync.get(url);
    if (response?.tracks) {
      for (const track of response.tracks) {
        const trackUri = track?.uri;
        if (trackUri) {
          dataMap.set(trackUri, track);
        }
      }
    }
  });
  await Promise.all(batchFetchPromises);
  return dataMap;
}
var fetchWebAPIForTracks_default = fetchWebAPIForTracks;

// shared/components/confirmDialog.jsx
var import_react2 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function ConfirmDialog({
  titleText,
  descriptionText,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onClose,
  onOpen,
  onOutside,
  confirmLabel,
  allowHTML
}) {
  const ConfirmDialog2 = import_react2.default.memo(() => {
    const [state, setState] = Spicetify.React.useState(true);
    const menu = document.querySelector(".ReactModalPortal:last-of-type");
    import_react2.default.useEffect(() => {
      if (state) onOpen?.();
    }, [state, onOpen]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Spicetify.ReactComponent.RemoteConfigProvider,
      {
        configuration: Spicetify.Platform.RemoteConfiguration,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Spicetify.ReactComponent.ConfirmDialog,
          {
            titleText,
            descriptionText,
            cancelText,
            confirmText,
            isOpen: state,
            onOutside: () => {
              setState(false);
              onOutside?.();
              menu?.remove();
            },
            onClose: () => {
              setState(false);
              onClose?.();
              menu?.remove();
            },
            onConfirm: () => {
              setState(false);
              onConfirm?.();
              menu?.remove();
            },
            confirmLabel,
            allowHTML
          }
        )
      }
    );
  });
  import_react_dom2.default.createRoot(document.createElement("div")).render(/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ConfirmDialog2, {}));
}
var confirmDialog_default = ConfirmDialog;

// shared/components/dropdown.jsx
var import_react3 = __toESM(require_react());

// shared/styles/dropdown.css
(function() {
  const css = ".dropdown {\n  position: relative;\n  min-width: 100px;\n  width: fit-content;\n  font-size: 14px !important;\n  cursor: pointer;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  .dropdown__button {\n    display: flex;\n    border: none;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 8px;\n    background: rgba(var(--spice-rgb-selected-row), 0.1);\n    color: rgba(var(--spice-rgb-text), 0.8);\n    border-radius: 4px;\n    height: 32px;\n    width: 100%;\n\n    .dropdown__arrow {\n      display: flex;\n    }\n  }\n\n  .dropdown__menu {\n    background: var(--spice-card);\n    border-radius: 4px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n    color: rgba(var(--spice-rgb-text), 0.8);\n    border: solid rgba(var(--spice-rgb-subtext), 0.1) 1px;\n    overflow-y: scroll;\n    scrollbar-width: none;\n    max-height: 250px;\n\n    .dropdown__option {\n      display: flex;\n      align-items: center;\n      padding: 0 8px;\n      height: 32px;\n      cursor: pointer;\n\n      &:first-child {\n        border-top-left-radius: 4px;\n        border-top-right-radius: 4px;\n      }\n\n      &:last-child {\n        border-bottom-left-radius: 4px;\n        border-bottom-right-radius: 4px;\n      }\n    }\n\n    .dropdown__option--selected,\n    .dropdown__option:hover {\n      background: var(--spice-button);\n    }\n  }\n}";
  const styleId = "shared-dropdown";
  if (document.getElementById(styleId)) {
    return;
  }
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = css;
  document.head.appendChild(style);
})();

// shared/components/dropdown.jsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Dropdown = (0, import_react3.memo)(({ value, options, onChange, disabled }) => {
  const popoverId = (0, import_react3.useId)();
  const popoverRef = (0, import_react3.useRef)(null);
  const anchorName = `--dropdown-anchor-${popoverId.replace(/:/g, "id")}`;
  const handleSelect = (option) => {
    onChange?.({ target: { value: option.value } });
    popoverRef.current?.hidePopover();
  };
  const selectedLabel = options.find((opt) => opt.value === value)?.label || "Select...";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "dropdown", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "button",
      {
        className: "dropdown__button",
        popovertarget: popoverId,
        popovertargetaction: "toggle",
        disabled,
        style: { anchorName },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dropdown__text", children: selectedLabel }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "dropdown__arrow", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(icons_default.React.dropdown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        popover: "auto",
        id: popoverId,
        ref: popoverRef,
        className: "dropdown__menu",
        style: {
          top: `calc(anchor(${anchorName} bottom) + 4px)`,
          left: `anchor(${anchorName} left)`,
          width: `anchor-size(${anchorName} width)`
        },
        children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "div",
          {
            className: `dropdown__option${value === option.value ? " dropdown__option--selected" : ""}`,
            onClick: () => handleSelect(option),
            children: option.label
          },
          option.value
        ))
      }
    )
  ] });
});
var dropdown_default = Dropdown;

// shared/components/slider.jsx
var import_react4 = __toESM(require_react());

// shared/styles/slider.css
(function() {
  const css = ".slider {\n  --fill-color: var(--spice-button-active, #1ed760);\n  --track-color: var(--spice-button-disabled, #535353);\n  --thumb-color: var(--spice-text, #ffffff);\n  --text-color: var(--spice-subtext, #b3b3b3);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  &:hover {\n    .slider__thumb {\n      opacity: 1 !important;\n    }\n\n    .slider__fill {\n      background-color: var(--fill-color) !important;\n    }\n  }\n\n  .slider-time {\n    font-size: 12px;\n    color: var(--text-color);\n    min-width: 40px;\n    text-align: center;\n    user-select: none;\n  }\n\n  .slider-container {\n    flex-grow: 1;\n    height: 12px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n\n    .slider__track {\n      position: relative;\n      width: 100%;\n      height: 4px;\n      background-color: var(--track-color);\n      border-radius: 2px;\n\n      .slider__fill {\n        position: absolute;\n        height: 100%;\n        background-color: var(--fill-color);\n        border-radius: 2px;\n      }\n\n      .slider__thumb {\n        position: absolute;\n        top: 50%;\n        width: 12px;\n        height: 12px;\n        background-color: var(--thumb-color);\n        border-radius: 50%;\n        transform: translate(-50%, -50%);\n        opacity: 0;\n        transition: opacity 0.2s ease;\n      }\n    }\n  }\n}";
  const styleId = "shared-slider";
  if (document.getElementById(styleId)) {
    return;
  }
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = css;
  document.head.appendChild(style);
})();

// shared/components/slider.jsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var Slider = (0, import_react4.memo)(
  ({ value, min = 0, max, step = 1, defaultValue, onChange, onRelease, disabled = false }) => {
    const sliderRef = (0, import_react4.useRef)(null);
    const isDragging = (0, import_react4.useRef)(false);
    const controlledValue = value !== void 0 ? value : defaultValue;
    const progress = max > min ? (controlledValue - min) / (max - min) * 100 : 0;
    const handleInteraction = (0, import_react4.useCallback)(
      (e, isTouch = false) => {
        if (!sliderRef.current || disabled) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const clientX = isTouch ? e.touches[0].clientX : e.clientX;
        const newX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        let newValue = newX / rect.width * (max - min) + min;
        newValue = Math.round(newValue / step) * step;
        newValue = Math.max(min, Math.min(newValue, max));
        onChange(newValue);
      },
      [min, max, step, onChange, disabled]
    );
    const handleMouseDown = (0, import_react4.useCallback)(
      (e) => {
        if (disabled) return;
        isDragging.current = true;
        handleInteraction(e, false);
      },
      [handleInteraction, disabled]
    );
    const handleTouchStart = (0, import_react4.useCallback)(
      (e) => {
        if (disabled) return;
        isDragging.current = true;
        handleInteraction(e, true);
      },
      [handleInteraction, disabled]
    );
    const handleMouseUp = (0, import_react4.useCallback)(() => {
      if (isDragging.current) {
        onRelease?.();
      }
      isDragging.current = false;
    }, [onRelease]);
    const handleTouchEnd = handleMouseUp;
    const handleMouseMove = (0, import_react4.useCallback)(
      (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        handleInteraction(e, false);
      },
      [handleInteraction]
    );
    const handleTouchMove = (0, import_react4.useCallback)(
      (e) => {
        if (!isDragging.current) return;
        handleInteraction(e, true);
      },
      [handleInteraction]
    );
    (0, import_react4.useEffect)(() => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "slider", disabled, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        ref: sliderRef,
        className: "slider-container",
        onMouseDown: handleMouseDown,
        onTouchStart: handleTouchStart,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "slider__track", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "slider__fill", style: { width: `${progress}%` } }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "slider__thumb", style: { left: `${progress}%` } })
        ] })
      }
    ) });
  }
);
var slider_default = Slider;

// shared/hooks/usePlayer.jsx
var import_react5 = __toESM(require_react());
var usePlayer = (trackUri, trackDuration) => {
  const [playerState, setPlayerState] = (0, import_react5.useState)(Spicetify.Platform.PlayerAPI.getState());
  const [position, setPosition] = (0, import_react5.useState)(0);
  const [duration, setDuration] = (0, import_react5.useState)(trackDuration);
  const isSliderDragging = (0, import_react5.useRef)(false);
  (0, import_react5.useEffect)(() => {
    const updateListener = (event) => {
      const newPlayerState = event.data;
      setPlayerState(newPlayerState);
      if (newPlayerState.item?.uri === trackUri) {
        if (!isSliderDragging.current) setPosition(newPlayerState.positionAsOfTimestamp);
        setDuration(newPlayerState.duration);
      } else if (newPlayerState.item?.uri !== trackUri) {
        setPosition(0);
        setDuration(trackDuration);
      }
    };
    Spicetify.Platform.PlayerAPI._events.addListener("update", updateListener);
    return () => {
      Spicetify.Platform.PlayerAPI._events.removeListener("update", updateListener);
    };
  }, [trackUri, trackDuration]);
  (0, import_react5.useEffect)(() => {
    const isPlayingThisTrack = playerState.item?.uri === trackUri;
    const isPlayingAndNotPaused = isPlayingThisTrack && !playerState.isPaused;
    if (!isPlayingAndNotPaused) {
      if (!isPlayingThisTrack) {
        setPosition(0);
        setDuration(trackDuration);
      }
      return;
    }
    const interval = setInterval(() => {
      if (!isSliderDragging.current) {
        const newPosition = playerState.positionAsOfTimestamp + (Date.now() - playerState.timestamp);
        setPosition(newPosition < playerState.duration ? newPosition : playerState.duration);
      }
    }, 1e3);
    return () => clearInterval(interval);
  }, [playerState, trackUri, trackDuration]);
  const togglePlay = (0, import_react5.useCallback)(() => {
    const currentPlayingTrack = playerState.item?.uri;
    if (currentPlayingTrack === trackUri) {
      playerState.isPaused ? Spicetify.Platform.PlayerAPI.resume() : Spicetify.Platform.PlayerAPI.pause();
    } else {
      Spicetify.Platform.PlayerAPI.play({ uri: trackUri }, {}, {});
    }
  }, [playerState, trackUri]);
  const handleSliderChange = (0, import_react5.useCallback)((newPosition) => {
    isSliderDragging.current = true;
    setPosition(newPosition);
  }, []);
  const handleSliderRelease = (0, import_react5.useCallback)(() => {
    if (isSliderDragging.current) {
      const isSameTrackInPlayer = playerState.item?.uri === trackUri;
      if (!isSameTrackInPlayer) {
        Spicetify.Platform.PlayerAPI.play({ uri: trackUri }, {}, {});
        setTimeout(() => {
          Spicetify.Platform.PlayerAPI.seekTo(position);
        }, 500);
      } else {
        Spicetify.Platform.PlayerAPI.seekTo(position);
      }
      isSliderDragging.current = false;
    }
  }, [position, trackUri, playerState]);
  const isPlaying = !playerState.isPaused;
  const isCurrentlyPlayingThisTrack = isPlaying && playerState.item?.uri === trackUri;
  return {
    position,
    duration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease
  };
};
var usePlayer_default = usePlayer;

// extensions/findDupeTracks/src/settings.jsx
var import_react11 = __toESM(require_react());

// shared/components/input.jsx
var import_react6 = __toESM(require_react());

// shared/styles/input.css
(function() {
  const css = ".input {\n  background: rgba(var(--spice-rgb-selected-row), 0.1);\n  border: 0;\n  border-radius: 4px;\n  color: rgba(var(--spice-rgb-text), 0.8);\n  height: 32px;\n  width: 128px;\n  text-overflow: ellipsis;\n  padding-left: 10px;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}";
  const styleId = "shared-input";
  if (document.getElementById(styleId)) {
    return;
  }
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = css;
  document.head.appendChild(style);
})();

// shared/components/input.jsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var Input = (0, import_react6.memo)(({ value, onChange, placeholder, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "input",
  {
    className: "input",
    type: "text",
    value,
    onChange,
    placeholder,
    disabled
  }
));
var input_default = Input;

// shared/components/optionRow.jsx
var import_react9 = __toESM(require_react());

// shared/components/infoButton.jsx
var import_react7 = __toESM(require_react());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var InfoButton = (0, import_react7.memo)(({ name, popupModal }) => {
  if (!popupModal) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "button",
    {
      className: "themeOptionPopupButton",
      onClick: () => popupModal_default({
        title: name,
        content: popupModal,
        isLarge: false
      }),
      "aria-label": "Open popup",
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(icons_default.React.editButton, { size: 16 })
    }
  );
});
var infoButton_default = InfoButton;

// shared/components/tippyButton.jsx
var import_react8 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var TippyButton = (0, import_react8.memo)(({ tippy }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Spicetify.ReactComponent.TooltipWrapper, { label: tippy, placement: "top", showDelay: 0, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "themeOptionTippy", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(icons_default.React.questionMark, { size: 20, fill: "var(--spice-subtext)" }) }) });
});
var tippyButton_default = TippyButton;

// shared/styles/optionRow.css
(function() {
  const css = ".themeOptionRow {\n  display: flex;\n  height: 32px;\n  justify-content: space-between;\n}\n\n.themeOptionDesc {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  font-size: 15px;\n  color: var(--spice-subtext);\n}\n\n.themeOptionControl {\n  align-content: center;\n  display: flex;\n  gap: 8px;\n}";
  const styleId = "shared-optionRow";
  if (document.getElementById(styleId)) {
    return;
  }
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = css;
  document.head.appendChild(style);
})();

// shared/components/optionRow.jsx
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var OptionRow = (0, import_react9.memo)(({ name, desc, tippy, children, popupModal }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "themeOptionRow", "data-name": `theme:${name}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "themeOptionContent", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "themeOptionDesc", children: desc }) }),
  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "themeOptionControl", children: [
    tippy && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(tippyButton_default, { tippy }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(infoButton_default, { name, popupModal }),
    children
  ] })
] }));
var optionRow_default = OptionRow;

// shared/components/toggle.jsx
var import_react10 = __toESM(require_react());

// shared/styles/toggle.css
(function() {
  const css = ".toggle {\n  display: flex;\n  align-items: center;\n  border: none;\n  background: none;\n  cursor: pointer;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  .toggle__background {\n    width: 42px;\n    height: 24px;\n    background: rgba(var(--spice-rgb-selected-row), 0.1);\n    border-radius: 12px;\n    display: flex;\n    align-items: center;\n\n    &:has(.toggle__slider--enabled) {\n      background: var(--spice-button);\n    }\n\n    .toggle__slider--enabled {\n      margin-left: 20px;\n    }\n  }\n\n  .toggle__slider {\n    width: 20px;\n    height: 20px;\n    background: var(--spice-text);\n    border-radius: 50%;\n    margin-left: 2px;\n    transition: 0.1s cubic-bezier(0.45, 0.05, 0.55, 0.95);\n    box-shadow: 0px 0px 5px rgba(var(--spice-rgb-shadow), 0.3);\n  }\n}";
  const styleId = "shared-toggle";
  if (document.getElementById(styleId)) {
    return;
  }
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = css;
  document.head.appendChild(style);
})();

// shared/components/toggle.jsx
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var Toggle = (0, import_react10.memo)(({ value, onChange, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { className: "toggle", onClick: onChange, disabled, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "toggle__background", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: `toggle__slider${value ? " toggle__slider--enabled" : ""}` }) }) }));
var toggle_default = Toggle;

// extensions/findDupeTracks/src/settings.jsx
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var DEFAULT_NORMALIZE_WORDS = [
  "live",
  "remix",
  "mix",
  "acoustic",
  "instrumental",
  "radio",
  "version",
  "ver",
  "edit",
  "mono",
  "stereo",
  "deluxe",
  "intro",
  "outro",
  "remastered",
  "bonus",
  "feat",
  "ft",
  "explicit",
  "clean",
  "piano",
  "guitar",
  "cover",
  "original",
  "extended",
  "album",
  "single"
];
var DEFAULT_SETTINGS = {
  groupSettings: {
    exact: true,
    isrc: true,
    likely: true,
    possible: true
  },
  confirmSettings: {
    exact: false,
    isrc: false,
    likely: true,
    possible: true
  },
  defaultNormalizeWords: DEFAULT_NORMALIZE_WORDS,
  customNormalizeWords: []
};
var loadSettings = () => {
  const savedSettings = localStorage.getItem("findDupeTracks");
  if (savedSettings) {
    const parsed = JSON.parse(savedSettings);
    if (!parsed.defaultNormalizeWords) parsed.defaultNormalizeWords = [...DEFAULT_NORMALIZE_WORDS];
    return parsed;
  }
  return DEFAULT_SETTINGS;
};
var saveSettings = (settings) => {
  localStorage.setItem("findDupeTracks", JSON.stringify(settings));
};
var getSettings = () => {
  return loadSettings();
};
var SettingsMenu = () => {
  const [settings, setSettings] = (0, import_react11.useState)(loadSettings());
  const [newWord, setNewWord] = (0, import_react11.useState)("");
  (0, import_react11.useEffect)(() => {
    saveSettings(settings);
  }, [settings]);
  const renderToggles = (title, settingsKey, labels) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "duplicate-settings__section", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "duplicate-settings__section-title", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "duplicate-settings__options", children: Object.entries(labels).map(([key, desc]) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(optionRow_default, { name: `${key}-${settingsKey}`, desc, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      toggle_default,
      {
        value: settings[settingsKey][key],
        onChange: () => setSettings((prev) => ({
          ...prev,
          [settingsKey]: {
            ...prev[settingsKey],
            [key]: !prev[settingsKey][key]
          }
        }))
      }
    ) }, key)) })
  ] });
  const addCustomWord = () => {
    const word = newWord.trim().toLowerCase();
    if (!word) return;
    if (settings.customNormalizeWords.includes(word) || settings.defaultNormalizeWords.includes(word))
      return;
    setSettings((prev) => ({
      ...prev,
      customNormalizeWords: [...prev.customNormalizeWords, word]
    }));
    setNewWord("");
  };
  const removeWord = (word, isDefault) => {
    setSettings(
      (prev) => isDefault ? {
        ...prev,
        defaultNormalizeWords: prev.defaultNormalizeWords.filter((w) => w !== word)
      } : {
        ...prev,
        customNormalizeWords: prev.customNormalizeWords.filter((w) => w !== word)
      }
    );
  };
  const resetSettings = () => {
    confirmDialog_default({
      titleText: "Are you sure?",
      descriptionText: "This will reset all settings to default!",
      confirmText: "Reset",
      onConfirm: () => setSettings(JSON.parse(JSON.stringify(DEFAULT_SETTINGS)))
    });
  };
  const allWords = [
    ...settings.defaultNormalizeWords.map((word) => ({ word, isDefault: true })),
    ...settings.customNormalizeWords.map((word) => ({ word, isDefault: false }))
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "duplicate-settings", children: [
    renderToggles("Duplicate Groups to Display", "groupSettings", {
      exact: "Exact Duplicates (Same URI)",
      isrc: "ISRC Duplicates (Same Recording)",
      likely: "Likely Duplicates (Same Name)",
      possible: "Possible Duplicates (Similar Name)"
    }),
    renderToggles("Confirm Before Deleting", "confirmSettings", {
      exact: "Exact Duplicates",
      isrc: "ISRC Duplicates",
      likely: "Likely Duplicates",
      possible: "Possible Duplicates"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "duplicate-settings__section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "duplicate-settings__section-title", children: "Normalization Words" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "duplicate-settings__description", children: "Add or remove words to be ignored when comparing track names for similarity." }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(optionRow_default, { name: "custom-words", desc: "Add a word to normalization list", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          input_default,
          {
            value: newWord,
            onChange: (e) => setNewWord(e.target.value),
            placeholder: "Enter word to normalize",
            disabled: false,
            onKeyDown: (e) => e.key === "Enter" && addCustomWord()
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", onClick: addCustomWord, style: { marginLeft: 8 }, children: "Add" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "duplicate-settings__words-list", children: allWords.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "duplicate-settings__words-ul", children: allWords.map(({ word, isDefault }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "duplicate-settings__word-item", children: [
        word,
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "button",
          {
            type: "button",
            className: "duplicate-settings__word-remove",
            onClick: () => removeWord(word, isDefault),
            children: "Remove"
          }
        )
      ] }, word)) }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "duplicate-settings__no-words", children: "No normalization words" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "duplicate-settings__actions", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { type: "button", className: "duplicate-settings__reset", onClick: resetSettings, children: "Reset to Defaults" }) })
  ] });
};
var settings_default = SettingsMenu;

// extensions/findDupeTracks/src/menu.jsx
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var db = new Dexie("findDupeTracks");
db.version(0.1).stores({
  tracks: "&trackUri, trackName, trackDuration, albumUri, trackPlayCount, trackIsrc, ignoreDuplicates"
});
async function fetchEditablePlaylists() {
  const playlists = await fetchAllLibraryContents_default();
  return playlists.filter((item) => item.type === "playlist" && item.canAddTo);
}
async function fetchPlaylistTracksAndCache(playlistUri) {
  const { items } = await fetchAllPlaylistTracks_default(playlistUri);
  const trackUris = items.map((track) => track.uri);
  const existingTracks = await db.tracks.bulkGet(trackUris);
  const existingTracksMap = new Map(existingTracks.filter(Boolean).map((t) => [t.trackUri, t]));
  const tracksToPut = items.reduce((acc, item) => {
    const existing = existingTracksMap.get(item.uri);
    if (!existing || existing.trackName !== item.name || existing.albumUri !== item.album.uri) {
      acc.push({
        trackUri: item.uri,
        trackName: item.name,
        albumUri: item.album.uri,
        trackDuration: existing?.duration.milliseconds ?? null,
        trackPlayCount: existing?.trackPlayCount ?? null,
        trackIsrc: existing?.trackIsrc ?? null
      });
    }
    return acc;
  }, []);
  if (tracksToPut.length > 0) {
    await db.tracks.bulkPut(tracksToPut);
  }
  return { items };
}
async function fetchISRCsForTracksWithCache(tracks) {
  const isrcMap = /* @__PURE__ */ new Map();
  const tracksToFetch = [];
  const validTracks = tracks.filter((track) => track?.uri);
  const trackUris = validTracks.map((track) => track.uri);
  if (trackUris.length === 0) return isrcMap;
  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map(cachedTracksData.filter(Boolean).map((t) => [t.trackUri, t]));
  for (const track of validTracks) {
    const cachedTrack = cachedTracksMap.get(track.uri);
    if (cachedTrack?.trackIsrc) {
      isrcMap.set(track.uri, cachedTrack.trackIsrc);
    } else {
      tracksToFetch.push(track);
    }
  }
  if (tracksToFetch.length > 0) {
    const fetchedTracksFromAPI = await fetchWebAPIForTracks_default(tracksToFetch.map((t) => t.uri));
    const updatesForDb = [];
    for (const [trackUri, track] of fetchedTracksFromAPI.entries()) {
      const trackIsrc = track?.external_ids?.isrc;
      if (trackIsrc) {
        isrcMap.set(trackUri, trackIsrc);
        updatesForDb.push({ key: trackUri, changes: { trackIsrc } });
      }
    }
    if (updatesForDb.length > 0) {
      await db.tracks.bulkUpdate(updatesForDb);
    }
  }
  return isrcMap;
}
async function fetchPlayCountsAndDurationForTracksWithCache(tracks) {
  const trackPlayCountMap = /* @__PURE__ */ new Map();
  const trackDurationMap = /* @__PURE__ */ new Map();
  const tracksToFetch = [];
  const validTracks = tracks.filter((track) => track?.uri);
  const trackUris = validTracks.map((track) => track.uri);
  if (trackUris.length === 0) return { trackPlayCountMap, trackDurationMap };
  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map(cachedTracksData.filter(Boolean).map((t) => [t.trackUri, t]));
  for (const track of validTracks) {
    const cachedTrack = cachedTracksMap.get(track.uri);
    if (cachedTrack?.trackPlayCount != null) {
      trackPlayCountMap.set(track.uri, cachedTrack.trackPlayCount);
    }
    if (cachedTrack?.trackDuration != null) {
      trackDurationMap.set(track.uri, cachedTrack.trackDuration);
    }
    if (cachedTrack?.trackPlayCount == null || cachedTrack?.trackDuration == null) {
      tracksToFetch.push(track);
    }
  }
  if (tracksToFetch.length > 0) {
    const albumUrisToFetch = new Set(tracksToFetch.map((t) => t.album.uri).filter(Boolean));
    const fetchedDataFromAPI = await fetchGraphQLForAlbumTracks_default(albumUrisToFetch);
    const updatesForDb = [];
    for (const [trackUri, track] of fetchedDataFromAPI.entries()) {
      const trackPlayCount = track.playcount ? Number.parseInt(track.playcount, 10) : null;
      const trackDuration = track.duration?.totalMilliseconds ?? null;
      if (trackPlayCount !== null) {
        trackPlayCountMap.set(trackUri, trackPlayCount);
      }
      if (trackDuration !== null) {
        trackDurationMap.set(trackUri, trackDuration);
      }
      updatesForDb.push({
        key: trackUri,
        changes: { trackPlayCount, trackDuration }
      });
    }
    if (updatesForDb.length > 0) {
      await db.tracks.bulkUpdate(updatesForDb);
    }
  }
  return { trackPlayCountMap, trackDurationMap };
}
var getNumericTrackPlayCount = (trackUri, trackPlayCounts) => trackPlayCounts.get(trackUri) ?? 0;
var normalizeForSimilarity = (name) => {
  const settings = getSettings();
  const termsToRemove = [...settings.defaultNormalizeWords, ...settings.customNormalizeWords];
  const regexRemoveTerms = new RegExp(`\\b(${termsToRemove.join("|")})\\b`, "gi");
  return name.toLowerCase().replace(/\(.*?\)|\[.*?\]/g, "").replace(regexRemoveTerms, "").replace(/-/g, " ").replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ").trim();
};
var TrackDetails = (0, import_react12.memo)(({ track, trackPlayCounts, trackIsrcs }) => {
  const trackPlayCount = trackPlayCounts.get(track.uri);
  const displayCount = trackPlayCount != null ? trackPlayCount.toLocaleString() : "N/A";
  const trackIsrc = trackIsrcs.get(track.uri) || "N/A";
  const albumName = track.album?.name || "N/A";
  const artists = track.artists?.map((a) => a.name).join(", ") || "N/A";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "track-details", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "track-details__line", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "track-details__artists", children: [
        " Artists: ",
        artists
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "track-details__album", children: [
        " Album: ",
        albumName
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "track-details__line", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "track-details__playcount", children: [
        " Plays: ",
        displayCount
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "track-details__isrc", children: [
        " ISRC: ",
        trackIsrc
      ] })
    ] })
  ] });
});
var TrackControls = (0, import_react12.memo)(({ trackUri, trackDuration }) => {
  const {
    position,
    duration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease
  } = usePlayer_default(trackUri, trackDuration);
  const formatTime = (ms) => {
    if (Number.isNaN(ms) || ms < 0) return "N/A";
    const totalSeconds = Math.floor(ms / 1e3);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const leftText = formatTime(position);
  const rightText = formatTime(duration);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "duplicate-group__playback-controls", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { type: "button", className: "duplicate-group__playback-button", onClick: togglePlay, children: isCurrentlyPlayingThisTrack ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(icons_default.React.pause, {}) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(icons_default.React.play, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "slider-time", children: leftText }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      slider_default,
      {
        value: position,
        min: 0,
        max: duration,
        step: 1,
        onChange: handleSliderChange,
        onRelease: handleSliderRelease
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "slider-time", children: rightText })
  ] });
});
var DuplicateItem = (0, import_react12.memo)(
  ({
    track,
    category,
    groupIndex,
    onDelete,
    isSource,
    trackPlayCounts,
    trackIsrcs,
    trackDurations
  }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: `duplicate-group__duplicate-item duplicate-group__item--${category}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "duplicate-group__duplicate-info", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "duplicate-group__duplicate-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "duplicate-group__duplicate-name", children: [
          isSource ? "Source: " : "",
          track.name
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TrackDetails, { track, trackPlayCounts, trackIsrcs })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "button",
        {
          type: "button",
          className: "duplicate-group__delete-button",
          onClick: () => onDelete(category, groupIndex, track),
          children: "Delete"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "duplicate-group__actions", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TrackControls, { trackUri: track.uri, trackDuration: trackDurations.get(track.uri) }) })
  ] })
);
var DuplicateGroup = (0, import_react12.memo)(
  ({ group, category, groupIndex, onDelete, trackPlayCounts, trackIsrcs, trackDurations }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      className: `duplicate-group__item duplicate-group__item--${category}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          DuplicateItem,
          {
            track: group.mainTrack,
            category,
            groupIndex,
            onDelete,
            isSource: true,
            trackPlayCounts,
            trackIsrcs,
            trackDurations
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "duplicate-group__duplicates-label", children: "Duplicates:" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "duplicate-group__duplicates-list", children: group.duplicates.map((dup) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          DuplicateItem,
          {
            track: dup,
            category,
            groupIndex,
            onDelete,
            trackPlayCounts,
            trackIsrcs,
            trackDurations
          },
          `${dup.uri}-${dup.uid || dup.uri}`
        )) })
      ]
    },
    `${group.mainTrack.uri}-${group.mainTrack.uid || groupIndex}`
  )
);
var DuplicateGroupList = (0, import_react12.memo)(
  ({ title, groups, category, onDelete, trackPlayCounts, trackIsrcs, trackDurations }) => {
    const settings = getSettings();
    if (!settings.groupSettings[category]) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "duplicate-group", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "duplicate-group__heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "duplicate-group__heading-title", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "duplicate-group__heading-length", children: [
          groups.length,
          " found"
        ] })
      ] }),
      groups.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "duplicate-group__list", children: groups.map((group, index) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        DuplicateGroup,
        {
          group,
          category,
          groupIndex: index,
          onDelete,
          trackPlayCounts,
          trackIsrcs,
          trackDurations
        },
        `${group.mainTrack.uri}-${index}`
      )) }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "No duplicates found in this category." })
    ] });
  }
);
function PlaylistDuplicateFinder({ selectedPlaylist: initialSelectedPlaylist }) {
  const [ownedPlaylists, setOwnedPlaylists] = (0, import_react12.useState)([]);
  const [selectedPlaylist, setSelectedPlaylist] = (0, import_react12.useState)(initialSelectedPlaylist || null);
  const [playlistTracks, setPlaylistTracks] = (0, import_react12.useState)([]);
  const [trackPlayCounts, setTrackPlayCounts] = (0, import_react12.useState)(/* @__PURE__ */ new Map());
  const [trackDurations, setTrackDurations] = (0, import_react12.useState)(/* @__PURE__ */ new Map());
  const [trackIsrcs, setTrackIsrcs] = (0, import_react12.useState)(/* @__PURE__ */ new Map());
  const [duplicateGroups, setDuplicateGroups] = (0, import_react12.useState)({
    exact: [],
    isrc: [],
    likely: [],
    possible: []
  });
  (0, import_react12.useEffect)(() => {
    let isMounted = true;
    (async () => {
      const playlists = await fetchEditablePlaylists();
      if (!isMounted) return;
      setOwnedPlaylists(playlists);
      setSelectedPlaylist(initialSelectedPlaylist || playlists[0] || null);
    })();
    return () => {
      isMounted = false;
    };
  }, [initialSelectedPlaylist]);
  const handlePlaylistChange = (e) => {
    const newPlaylist = ownedPlaylists.find((p) => p.uri === e.target.value);
    if (newPlaylist) setSelectedPlaylist(newPlaylist);
  };
  const findPotentialDuplicates = (0, import_react12.useCallback)((tracks, trackPlayCountMap, trackIsrcMap) => {
    const processedUris = /* @__PURE__ */ new Set();
    const groupAndFilter = (list, keyFn, normalizer) => {
      const groups = /* @__PURE__ */ new Map();
      for (const t of list) {
        if (processedUris.has(t.uri)) continue;
        const key = normalizer(keyFn(t));
        if (!key) continue;
        groups.set(key, groups.get(key) || []);
        groups.get(key).push(t);
      }
      const duplicatesResult = [];
      for (const group of groups.values()) {
        if (group.length > 1) {
          group.sort(
            (a, b) => getNumericTrackPlayCount(b.uri, trackPlayCountMap) - getNumericTrackPlayCount(a.uri, trackPlayCountMap)
          );
          for (const t of group) {
            processedUris.add(t.uri);
          }
          duplicatesResult.push({ mainTrack: group[0], duplicates: group.slice(1) });
        }
      }
      return duplicatesResult;
    };
    setDuplicateGroups({
      exact: groupAndFilter(
        tracks,
        (t) => t.uri,
        (k) => k
      ),
      isrc: groupAndFilter(
        tracks,
        (t) => trackIsrcMap.get(t.uri),
        (k) => k
      ),
      likely: groupAndFilter(
        tracks,
        (t) => t.name,
        (name) => name.trim()
      ),
      possible: groupAndFilter(tracks, (t) => t.name, normalizeForSimilarity)
    });
  }, []);
  const removeTrackFromPlaylist = async (trackToRemove) => {
    await Spicetify.Platform.PlaylistAPI.remove(selectedPlaylist.uri, [{ uid: trackToRemove.uid }]);
    setPlaylistTracks(
      (prevTracks) => prevTracks.filter(
        (track) => !(track.uri === trackToRemove.uri && track.uid === trackToRemove.uid)
      )
    );
  };
  const handleDeleteTrack = async (duplicateCategory, _groupIndex, trackToRemove) => {
    const settings = getSettings();
    if (!settings.confirmSettings[duplicateCategory]) {
      await removeTrackFromPlaylist(trackToRemove);
      return;
    }
    confirmDialog_default({
      titleText: "Remove Track",
      descriptionText: `Are you sure you want to remove "${trackToRemove.name}"? This cannot be undone.`,
      confirmText: "Remove",
      onConfirm: () => removeTrackFromPlaylist(trackToRemove)
    });
  };
  (0, import_react12.useEffect)(() => {
    setPlaylistTracks([]);
    setDuplicateGroups({ exact: [], isrc: [], likely: [], possible: [] });
    setTrackPlayCounts(/* @__PURE__ */ new Map());
    setTrackIsrcs(/* @__PURE__ */ new Map());
    setTrackDurations(/* @__PURE__ */ new Map());
    const loadData = async () => {
      if (!selectedPlaylist?.uri) return;
      const playlistData = await fetchPlaylistTracksAndCache(selectedPlaylist.uri);
      const fetchedTracks = playlistData.items;
      setPlaylistTracks(fetchedTracks);
      if (fetchedTracks.length > 0) {
        const [fetchedTrackPlayCountsAndDurationResult, fetchedTrackIsrcMapResult] = await Promise.all([
          fetchPlayCountsAndDurationForTracksWithCache(fetchedTracks),
          fetchISRCsForTracksWithCache(fetchedTracks)
        ]);
        setTrackPlayCounts(fetchedTrackPlayCountsAndDurationResult.trackPlayCountMap);
        setTrackDurations(fetchedTrackPlayCountsAndDurationResult.trackDurationMap);
        setTrackIsrcs(fetchedTrackIsrcMapResult);
      }
    };
    loadData();
  }, [selectedPlaylist]);
  (0, import_react12.useEffect)(() => {
    if (playlistTracks.length > 0) {
      findPotentialDuplicates(playlistTracks, trackPlayCounts, trackIsrcs);
    } else {
      setDuplicateGroups({ exact: [], isrc: [], likely: [], possible: [] });
    }
  }, [playlistTracks, trackPlayCounts, trackIsrcs, findPotentialDuplicates]);
  const playlistOptions = ownedPlaylists.map((p) => ({ value: p.uri, label: p.name }));
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "find-duplicates", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "find-duplicates__header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "find-duplicates__header-label", children: "Select Playlist:" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        dropdown_default,
        {
          value: selectedPlaylist?.uri,
          options: playlistOptions,
          onChange: handlePlaylistChange,
          disabled: ownedPlaylists.length === 0
        }
      )
    ] }),
    selectedPlaylist && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "find-duplicates__details", children: [
        "Playlist: ",
        selectedPlaylist.name,
        " (",
        playlistTracks.length,
        " tracks analyzed)"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        DuplicateGroupList,
        {
          title: "Exact Duplicates (Same URI)",
          groups: duplicateGroups.exact,
          category: "exact",
          onDelete: handleDeleteTrack,
          trackPlayCounts,
          trackIsrcs,
          trackDurations
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        DuplicateGroupList,
        {
          title: "ISRC Duplicates (Same Recording)",
          groups: duplicateGroups.isrc,
          category: "isrc",
          onDelete: handleDeleteTrack,
          trackPlayCounts,
          trackIsrcs,
          trackDurations
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        DuplicateGroupList,
        {
          title: "Likely Duplicates (Same Name)",
          groups: duplicateGroups.likely,
          category: "likely",
          onDelete: handleDeleteTrack,
          trackPlayCounts,
          trackIsrcs,
          trackDurations
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        DuplicateGroupList,
        {
          title: "Possible Duplicates (Similar Name)",
          groups: duplicateGroups.possible,
          category: "possible",
          onDelete: handleDeleteTrack,
          trackPlayCounts,
          trackIsrcs,
          trackDurations
        }
      )
    ] })
  ] });
}
var menu_default = PlaylistDuplicateFinder;

// extensions/findDupeTracks/src/styles.css
(function() {
  const css = ".find-duplicates {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n\n  .find-duplicates__header {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n\n    .find-duplicates__header-label {\n      color: var(--spice-text);\n      font-weight: bold;\n    }\n  }\n\n  .find-duplicates__details {\n    font-size: 1.25em;\n    color: var(--spice-text);\n  }\n}\n\n.duplicate-group {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background-color: var(--spice-player);\n  border: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);\n  border-radius: 6px;\n  padding: 12px;\n\n  .duplicate-group__heading {\n    display: flex;\n    justify-content: space-between;\n    font-weight: bold;\n    font-size: 1.2em;\n    color: var(--spice-text);\n\n    .duplicate-group__heading-length {\n      background: #ff676746;\n      border: 1px solid #ff575766;\n      font-size: 12px;\n      font-weight: 400;\n      border-radius: 100px;\n      padding: 0 12px;\n      align-content: center;\n    }\n  }\n\n  .duplicate-group__list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .duplicate-group__item {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    padding: 15px;\n    border-radius: 4px;\n    border: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);\n    border-left: 4px solid;\n\n    &.duplicate-group__item--exact {\n      border-left-color: #ff5a5a;\n    }\n\n    &.duplicate-group__item--isrc {\n      border-left-color: #ff9050;\n    }\n\n    &.duplicate-group__item--likely {\n      border-left-color: #eaea66;\n    }\n\n    &.duplicate-group__item--possible {\n      border-left-color: #80ef80;\n    }\n  }\n\n  .duplicate-group__playback-controls {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    width: 100%;\n    flex-grow: 1;\n  }\n\n  .duplicate-group__playback-button {\n    background: none;\n    color: white;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n\n    svg {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .slider-time {\n    font-size: 14px;\n  }\n\n  .duplicate-group__duplicates-label {\n    color: var(--spice-subtext);\n    font-size: 20px;\n    font-weight: 600;\n    padding-left: 15px;\n  }\n\n  .duplicate-group__duplicates-list {\n    padding-left: 15px;\n  }\n\n  .duplicate-group__duplicate-name {\n    font-weight: 600;\n  }\n\n  .duplicate-group__duplicate-item {\n    font-size: 1em;\n    border-bottom: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    &:last-child {\n      border-bottom: none;\n    }\n  }\n\n  .duplicate-group__actions {\n    padding-bottom: 8px;\n  }\n\n  .duplicate-group__duplicate-info {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .duplicate-group__duplicate-content {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .duplicate-group__delete-button {\n    background-color: #ff5a5a;\n    color: white;\n    border: none;\n    padding: 6px 12px;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 0.85em;\n    font-weight: bold;\n\n    &:hover {\n      background-color: #d34f4f;\n    }\n\n    &:active {\n      background-color: #c72c2c;\n      transform: scale(0.98);\n    }\n  }\n}\n\n.track-details {\n  display: flex;\n  flex-direction: column;\n  color: var(--spice-subtext);\n  font-size: 0.9em;\n\n  .track-details__line {\n    display: flex;\n    gap: 8px;\n  }\n}\n\n.duplicate-settings {\n  width: 100%;\n\n  .duplicate-settings__section {\n    margin-bottom: 24px;\n\n    .duplicate-settings__section-title {\n      font-size: 16px;\n      font-weight: 700;\n      margin-bottom: 16px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n      padding-bottom: 8px;\n    }\n  }\n\n  .duplicate-settings__description {\n    margin-bottom: 12px;\n    opacity: 0.7;\n    font-size: 13px;\n  }\n\n  .duplicate-settings__options {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 12px;\n  }\n\n  .duplicate-settings__option {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 8px 12px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n  }\n\n  .duplicate-settings__words-list {\n    max-height: 200px;\n    overflow-y: auto;\n\n    .duplicate-settings__no-words {\n      padding: 12px;\n      text-align: center;\n      background-color: rgba(0, 0, 0, 0.2);\n      border-radius: 4px;\n      opacity: 0.7;\n    }\n  }\n\n  .duplicate-settings__words-ul {\n    padding: 0;\n    margin: 0;\n  }\n\n  .duplicate-settings__word-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 8px 12px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border-radius: 4px;\n    margin-bottom: 8px;\n\n    .duplicate-settings__word-remove {\n      background-color: #ff5a5a;\n      border: none;\n      color: white;\n      padding: 4px 8px;\n      border-radius: 4px;\n      cursor: pointer;\n      font-size: 12px;\n\n      &:hover {\n        background-color: #d34f4f;\n      }\n    }\n  }\n\n  .duplicate-settings__actions {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 24px;\n\n    .duplicate-settings__reset {\n      background-color: rgba(255, 50, 50, 0.3);\n      color: white;\n      border: none;\n      padding: 8px 16px;\n      border-radius: 4px;\n      cursor: pointer;\n\n      &:hover {\n        background-color: rgba(255, 50, 50, 0.6);\n      }\n    }\n  }\n}";
  const styleId = "findDupeTracks-styles";
  if (document.getElementById(styleId)) {
    return;
  }
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = css;
  document.head.appendChild(style);
})();

// extensions/findDupeTracks/src/app.jsx
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var showDuplicateFinderModal = (selectedPlaylist, initialView = "main") => {
  const renderModal = (view) => {
    const isSettings = view === "settings";
    popupModal_default({
      title: isSettings ? "Find Duplicates Settings" : "Find Duplicates",
      content: isSettings ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(settings_default, {}) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(menu_default, { selectedPlaylist }),
      isLarge: true,
      buttons: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Spicetify.ReactComponent.TooltipWrapper,
          {
            label: isSettings ? "Back to Duplicates" : "Settings",
            placement: "top",
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "button",
              {
                className: `modal__button modal__button--${isSettings ? "back" : "settings"}`,
                onClick: () => renderModal(isSettings ? "main" : "settings"),
                children: isSettings ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(icons_default.React.duplicate, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(icons_default.React.settings, { size: 18 })
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Spicetify.ReactComponent.TooltipWrapper, { label: "GitHub", placement: "top", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "button",
          {
            className: "modal__button modal__button--github",
            onClick: () => window.open("https://github.com/veryboringhwl/spicetify-extensions"),
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(icons_default.React.github, { size: 18 })
          }
        ) })
      ] })
    });
  };
  renderModal(initialView);
};
var findDuplicatesMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Find Duplicates",
  leadingIcon: icons_default.HTML.duplicate,
  onClick: async (context, item, event) => {
    const parsed = parseProps_default(context.props);
    const uri = parsed.uri;
    const name = parsed.name;
    const selectedPlaylist = {
      uri,
      name: name || (await Spicetify.Platform.PlaylistAPI.getMetadata(uri))?.name
    };
    showDuplicateFinderModal(selectedPlaylist);
  },
  shouldAdd: (props, trigger, target) => {
    const parsed = parseProps_default(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
  }
});
findDuplicatesMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsOnJlYWN0L2pzeC1ydW50aW1lIiwgImV4dGVybmFsLWdsb2JhbDpyZWFjdCIsICJleHRlcm5hbC1nbG9iYWw6cmVhY3QtZG9tIiwgIi4uL3NoYXJlZC9hcGkvcGFyc2VQcm9wcy5qcyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucy5qc3giLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvcG9wdXBNb2RhbC5qc3giLCAiLi4vc2hhcmVkL3N0eWxlcy9wb3B1cE1vZGFsLmNzcyIsICIuLi9leHRlbnNpb25zL2ZpbmREdXBlVHJhY2tzL3NyYy9tZW51LmpzeCIsICIuLi9zaGFyZWQvYXBpL2ZldGNoQWxsTGlicmFyeUNvbnRlbnRzLmpzIiwgIi4uL3NoYXJlZC9hcGkvZmV0Y2hBbGxQbGF5bGlzdFRyYWNrcy5qcyIsICIuLi9zaGFyZWQvYXBpL2ZldGNoR3JhcGhRTEZvckFsYnVtVHJhY2tzLmpzIiwgIi4uL3NoYXJlZC9hcGkvZmV0Y2hXZWJBUElGb3JUcmFja3MuanMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybURpYWxvZy5qc3giLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24uanN4IiwgIi4uL3NoYXJlZC9zdHlsZXMvZHJvcGRvd24uY3NzIiwgIi4uL3NoYXJlZC9jb21wb25lbnRzL3NsaWRlci5qc3giLCAiLi4vc2hhcmVkL3N0eWxlcy9zbGlkZXIuY3NzIiwgIi4uL3NoYXJlZC9ob29rcy91c2VQbGF5ZXIuanN4IiwgIi4uL2V4dGVuc2lvbnMvZmluZER1cGVUcmFja3Mvc3JjL3NldHRpbmdzLmpzeCIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9pbnB1dC5qc3giLCAiLi4vc2hhcmVkL3N0eWxlcy9pbnB1dC5jc3MiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvb3B0aW9uUm93LmpzeCIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9pbmZvQnV0dG9uLmpzeCIsICIuLi9zaGFyZWQvY29tcG9uZW50cy90aXBweUJ1dHRvbi5qc3giLCAiLi4vc2hhcmVkL3N0eWxlcy9vcHRpb25Sb3cuY3NzIiwgIi4uL3NoYXJlZC9jb21wb25lbnRzL3RvZ2dsZS5qc3giLCAiLi4vc2hhcmVkL3N0eWxlcy90b2dnbGUuY3NzIiwgIi4uL2V4dGVuc2lvbnMvZmluZER1cGVUcmFja3Mvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9maW5kRHVwZVRyYWNrcy9zcmMvYXBwLmpzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsibW9kdWxlLmV4cG9ydHMgPSBTcGljZXRpZnkuUmVhY3RKU1giLCAibW9kdWxlLmV4cG9ydHMgPSBTcGljZXRpZnkuUmVhY3QiLCAibW9kdWxlLmV4cG9ydHMgPSBTcGljZXRpZnkuUmVhY3RET00iLCAiZnVuY3Rpb24gcGFyc2VQcm9wcyhwcm9wcykge1xuICBpZiAoIXByb3BzKSByZXR1cm4ge307XG5cbiAgY29uc3QgcGFyc2VkID0ge307XG5cbiAgY29uc3QgbWVyZ2VQcm9wcyA9IChzb3VyY2UsIHRhcmdldCkgPT4ge1xuICAgIGlmICghc291cmNlIHx8IHR5cGVvZiBzb3VyY2UgIT09IFwib2JqZWN0XCIpIHJldHVybjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBtZXJnZVByb3BzKHByb3BzLCBwYXJzZWQpO1xuICBtZXJnZVByb3BzKHByb3BzLml0ZW0sIHBhcnNlZCk7XG4gIG1lcmdlUHJvcHMocHJvcHMucmVmZXJlbmNlLCBwYXJzZWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlUHJvcHM7XG4iLCAiY29uc3QgSWNvbnMgPSB7XG4gIC8vMjRweFxuICBlZGl0QnV0dG9uOlxuICAgIFwiTTE3LjMxOCAxLjk3NWEzLjMyOSAzLjMyOSAwIDExNC43MDcgNC43MDdMOC40NTEgMjAuMjU2Yy0uNDkuNDktMS4wODIuODY3LTEuNzM1IDEuMTAzTDIuMzQgMjIuOTRhMSAxIDAgMDEtMS4yOC0xLjI4bDEuNTgxLTQuMzc2YTQuNzI2IDQuNzI2IDAgMDExLjEwMy0xLjczNUwxNy4zMTggMS45NzV6bTMuMjkzIDEuNDE0YTEuMzI5IDEuMzI5IDAgMDAtMS44OCAwTDUuMTU5IDE2Ljk2M2MtLjI4My4yODMtLjUuNjI0LS42MzYgMWwtLjg1NyAyLjM3MiAyLjM3MS0uODU3YTIuNzI2IDIuNzI2IDAgMDAxLjAwMS0uNjM2TDIwLjYxMSA1LjI2OGExLjMyOSAxLjMyOSAwIDAwMC0xLjg3OXpcIixcbiAgLy8yNHB4XG4gIHNldHRpbmdzOlxuICAgIFwiTTcuOTYgNS4zM2EyLjY3IDIuNjcgOTAgMTAwIDUuMzQgMi42NyAyLjY3IDkwIDAwMC01LjM0Wk02LjY3IDhBMS4zMyAxLjMzIDkwIDExOS4zMyA4IDEuMzMgMS4zMyA5MCAwMTYuNjcgOFptNC44Mi00LjgxYS45NS45NCA5MCAwMS0xLjEtLjc1TDEwLjA1LjU1QS40Ny40NyA5MCAwMDkuNjguMTcgOC4xIDguMSA5MCAwMDYuMzIuMTcuNDcuNDcgOTAgMDA1Ljk2LjU1TDUuNjEgMi40NGEuOTUuOTUgOTAgMDEtMS4yNS43MUwyLjU1IDIuNTFhLjQ3LjQ3IDkwIDAwLS41MS4xM0MxLjI4IDMuNDcuNzEgNC40Ni4zNiA1LjUzYS40Ny40NyA5MCAwMC4xNC41MUwxLjk3IDcuMjhhLjk0Ljk0IDkwIDAxMCAxLjQzTC41IDkuOTVhLjQ3LjQ3IDkwIDAwLS4xNC41MSA3Ljk4IDcuOTggOTAgMDAxLjY4IDIuOS40Ny40NyA5MCAwMC41MS4xM2wxLjgxLS42NWEuOTQuOTQgOTAgMDExLjI1LjcybC4zNCAxLjg5Yy4wNC4xOC4xOC4zMy4zNy4zN2E4LjEgOC4xIDkwIDAwMy4zNiAwIC40Ny40NyA5MCAwMC4zNy0uMzdsLjM0LTEuODlhLjk1Ljk1IDkwIDAxMS4yNS0uNzJsMS44MS42NWMuMTguMDYuMzguMDEuNTEtLjEzLjc2LS44NCAxLjM0LTEuODIgMS42OC0yLjlhLjQ3LjQ3IDkwIDAwLS4xNC0uNUwxNC4wMyA4LjcyYS45NC45NCA5MCAwMTAtMS40NEwxNS41IDYuMDRhLjQ3LjQ3IDkwIDAwLjE0LS41IDcuOTggNy45OCA5MCAwMC0xLjY4LTIuOS40Ny40NyA5MCAwMC0uNTEtLjEzbC0xLjgxLjY1YS45NS45NSA5MCAwMS0uMTUuMDRabS04LjgyLjc4IDEuMjUuNDRhMi4yOCAyLjI4IDkwIDAwMy0xLjczbC4yNC0xLjNhNi44MSA2LjgxIDkwIDAxMS42OCAwbC4yNCAxLjNhMi4yOCAyLjI4IDkwIDAwMy4wMSAxLjczbDEuMjQtLjQ0Yy4zNC40NC42My45My44NCAxLjQ0bC0xIC44NWEyLjI3IDIuMjcgOTAgMDAwIDMuNDhsMSAuODVhNi42NSA2LjY1IDkwIDAxLS44NCAxLjQ0bC0xLjI0LS40NEEyLjI4IDIuMjggOTAgMDA5LjA4IDEzLjMybC0uMjQgMS4yOWE2LjggNi44IDkwIDAxLTEuNjkgMGwtLjIzLTEuMjlBMi4yOCAyLjI4IDkwIDAwMy45MSAxMS41OWwtMS4yNC40NGE2LjY1IDYuNjUgOTAgMDEtLjg0LTEuNDRsMS0uODZhMi4yNyAyLjI3IDkwIDAwMC0zLjQ3bC0xLS44NWMuMjEtLjUxLjUtMSAuODQtMS40NFpcIixcbiAgLy8yNHB4XG4gIGdpdGh1YjpcbiAgICBcIk0xMi4yMTM1IDBDMTguOTQ3IDAgMjQuNDI2NyA1LjUgMjQuNDA2NiAxMi4zMDQxYzAgNS40MzkxLTMuNDk4MyAxMC4wNDI4LTguMzUxMyAxMS42NzI4LS42MDY1LjEyMjMtLjgyOS0uMjY1LS44MjktLjU5MSAwLS40MDcyLjAyLTEuNzMxNS4wMi0zLjM4MTUgMC0xLjE2MTMtLjM4NC0xLjg5NDUtLjgyOS0yLjI4MTUgMi43My0uMzA1OCA1LjU4MS0xLjM0NDUgNS41ODEtNi4wNzA4IDAtMS4zNDQ1LS40NjUtMi40NDQ1LTEuMjUzNy0zLjMuMTIxMy0uMzA1NS41NDYzLTEuNTY4OC0uMTIxMi0zLjI1OTUgMCAwLTEuMDMxMi0uMzI2LTMuMzU2NyAxLjI2My0uOTcwNy0uMjY0OC0yLjAyMTktLjQwNzUtMy4wNTMyLS40MDc1QTExLjc0MjUgMTEuNzQyNSA5MCAwMDkuMTYgNi4zNTU2Yy0yLjMyNTItMS41ODktMy4zNTY1LTEuMjYzLTMuMzU2NS0xLjI2My0uNjY3NSAxLjY5MDctLjI0MjcgMi45NTQtLjEyMTUgMy4yNTk1LS43Njg1Ljg1NTUtMS4yNTM1IDEuOTU1NS0xLjI1MzUgMy4zIDAgNC43MjYzIDIuODUwOSA1Ljc4NTUgNS41NjA3IDYuMDcwOC0uMzQzNy4zMDU1LS42Njc1Ljg1NTUtLjc2ODUgMS42NS0uNzA3Ny4zMjYtMi40NjcuODU1NS0zLjU1ODctMS4wMTg1IDAgMC0uNjQ3Mi0xLjE4MTUtMS44ODA3LTEuMjYzIDAgMC0xLjE5MyAwLS4wODEuNzUzOCAwIDAgLjgwOS4zNjY1IDEuMzU1IDEuNzkyNSAwIDAgLjcwNzUgMi4yMDAyIDQuMTA1IDEuNDY2NyAwIDEuMDE4OC4wMiAxLjk5NjUuMDIgMi4yODE4IDAgLjMyNTgtLjIyMjIuNzEzLS44MjkuNTkwNUMzLjQ5ODMgMjIuMzQ3MiAwIDE3Ljc0MzIgMCAxMi4zMDQyIDAgNS41IDUuNDU5NyAwIDEyLjIxMzUgMFpcIixcbiAgLy8zMnB4XG4gIGNsb3NlOlxuICAgIFwiTTMxLjA5OCAyOS43OTQgMTYuOTU1IDE1LjY1IDMxLjA5NyAxLjUxIDI5LjY4My4wOTMgMTUuNTQgMTQuMjM3IDEuNC4wOTQtLjAxNiAxLjUwOCAxNC4xMjYgMTUuNjUtLjAxNiAyOS43OTVsMS40MTQgMS40MTRMMTUuNTQgMTcuMDY1bDE0LjE0NCAxNC4xNDNcIixcbiAgLy8yNHB4XG4gIHdhcm5pbmc6XG4gICAgXCJNMTMgMTRWOUgxMXY1Wm0wIDJIMTF2MmgyWm04Ljg4NCAzLjVBMSAxIDAgMDEyMSAyMUgzYTEgMSAwIDAxLS44ODQtMS40NjhsOS0xN2MuMzQ2LS42NTQgMS40MjItLjY1NCAxLjc2OCAwWlwiLFxuICAvLzE2cHhcbiAgbW9yZTogXCJNMyA4QTEuNSAxLjUgMCAxMTAgOGExLjUgMS41IDAgMDEzIDB6bTYuNSAwYTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAwek0xNiA4YTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAwelwiLFxuICAvLzI0cHhcbiAgcXVlc3Rpb25NYXJrOlxuICAgIFwiTTEyIDJjNS41MjMgMCAxMCA0LjQ3OCAxMCAxMHMtNC40NzcgMTAtMTAgMTBTMiAxNy41MjIgMiAxMiA2LjQ3NyAyIDEyIDJabTAgMS42NjdjLTQuNTk1IDAtOC4zMzMgMy43MzgtOC4zMzMgOC4zMzNTNy40MDUgMjAuMzMzIDEyIDIwLjMzMyAyMC4zMzMgMTYuNTk1IDIwLjMzMyAxMmMwLTQuNTk1LTMuNzM4LTguMzMzLTguMzMzLTguMzMzWk0xMiAxNS41YTEgMSAwIDExMCAyIDEgMSAwIDAxMC0yWm0wLTguNzVhMi43NSAyLjc1IDAgMDEyLjc1IDIuNzVjMCAxLjAxLS4yOTcgMS41NzQtMS4wNTEgMi4zNTlsLS4xNjkuMTcxYy0uNjIyLjYyMi0uNzguODg2LS43OCAxLjQ3YS43NS43NSAwIDAxLTEuNSAwYzAtMS4wMS4yOTctMS41NzQgMS4wNTEtMi4zNTlsLjE2OS0uMTcxYy42MjItLjYyMi43OC0uODg2Ljc4LTEuNDdhMS4yNSAxLjI1IDAgMDAtMi40OTMtLjEyOGwtLjAwNy4xMjhhLjc1Ljc1IDAgMDEtMS41IDBBMi43NSAyLjc1IDAgMDExMiA2Ljc1WlwiLFxuICAvLzI0cHhcbiAgZHJvcGRvd246XG4gICAgXCJNMjAuNDYxNCA2LjM0NjlhMS41MDYgMS41MDYgOTAgMDAtMi4xMTI1LjE5MTlMMTIgMTQuMTU2NCA1LjY1MSA2LjUzODlhMS40OTk3IDEuNDk5NyA5MCAxMC0yLjMwMjggMS45MjJsNy41MDA0IDkuMDAwNGExLjQ5OTIgMS40OTkyIDkwIDAwMi4zMDI4IDBsNy41MDA0LTkuMDAwNWExLjUwMTkgMS41MDE5IDkwIDAwLS4xOTA0LTIuMTEzOVpcIixcbiAgLy8yNHB4XG4gIHBhbGV0dGU6XG4gICAgXCJNMTIgMmM1LjQ2MSAwIDkuOTY1IDQuMDEyIDkuOTkyIDguODQgMCAzLjA1MS0yLjUwNCA1LjU1NC01LjU1NSA1LjU1NEgxNC40NDFhMS42NCAxLjY0IDAgMDAtMS42NjggMS42NjhjMCAuNDczLjE0OC44MzYuNDM4IDEuMTI1LjI1Ny4yOS40MzcuNjg4LjQzNyAxLjEyNUMxMy42NDggMjEuMjU0IDEyLjkyNiAyMiAxMiAyMiA2LjUgMjIgMiAxNy41IDIgMTJTNi41IDIgMTIgMlpcIixcbiAgLy8xNnB4XG4gIGR1cGxpY2F0ZTpcbiAgICBcIk0xNSAzLjVjMC0uNS0uNS0xLTEtMUgxMVYxYzAtLjUtLjUtMS0xLTFIMkMxLjUgMCAxIC41IDEgMVYxMS41YzAgLjUuNSAxIDEgMUg0LjVWMTVjMCAuNS41IDEgMSAxSDE0Yy41IDAgMS0uNSAxLTFaTTIuNSAyYzAtLjI1LjI1LS41LjUtLjVIOWMuMjUgMCAuNS4yNS41LjV2OC41YzAgLjI1LS4yNS41LS41LjVIM2MtLjI1IDAtLjUtLjI1LS41LS41Wm00IDEyLjVjLS4yNSAwLS41LS4yNS0uNS0uNVYxMi41aDRjLjUgMCAxLS41IDEtMVY0aDJjLjI1IDAgLjUuMjUuNS41VjE0YzAgLjI1LS4yNS41LS41LjVaXCIsXG4gIC8vMTZweFxuICB0ZXJtaW5hbDpcbiAgICBcIk0zLjkyNCA1LjAyYS43NS43NSAwIDAxMS4wNTYtLjA5NmwzIDIuNWEuNzUuNzUgMCAwMTAgMS4xNTJsLTMgMi41YS43NS43NSAwIDExLS45Ni0xLjE1Mkw2LjMyOCA4IDQuMDIgNi4wNzZBLjc1Ljc1IDAgMDEzLjkyNCA1LjAyek04LjI1IDEwLjVhLjc1Ljc1IDAgMDAwIDEuNWgzYS43NS43NSAwIDAwMC0xLjVoLTN6TTAgMy4yNUEyLjI1IDIuMjUgMCAwMTIuMjUgMWgxMS41QTIuMjUgMi4yNSAwIDAxMTYgMy4yNXY5LjVBMi4yNSAyLjI1IDAgMDExMy43NSAxNUgyLjI1QTIuMjUgMi4yNSAwIDAxMCAxMi43NXYtOS41em0yLjI1LS43NWEuNzUuNzUgMCAwMC0uNzUuNzV2OS41YzAgLjQxNC4zMzYuNzUuNzUuNzVoMTEuNWEuNzUuNzUgMCAwMC43NS0uNzV2LTkuNWEuNzUuNzUgMCAwMC0uNzUtLjc1SDIuMjV6XCIsXG4gIC8vIDE2cHhcbiAgY3VzdG9tQXJ0d29yazpcbiAgICBcIk0wIDJ2MTJhMiAyIDkwIDAwMiAyaDEyYTIgMiA5MCAwMDItMlY3LjMzbC0xLjMzIDEuMzN2NS4zM2EuNjYuNjYgOTAgMDEtLjY2LjY2SDJhLjY2LjY2IDkwIDAxLS42Ni0uNjZWMkEuNjYuNjYgOTAgMDEyIDEuMzRoOS42NkwxMyAwSDJBMiAyIDkwIDAwMCAyem0yLjY2IDMuMzNDNC4zMiA1IDQuOTkgMy42NyA1LjMyIDIuNjdoLjMzYy4zMyAxIDEgMi4zMyAyLjY2IDIuNnYuMzNjLTEuNjYuMzMtMi4zMyAxLjY2LTIuNjYgMi42NmgtLjMzYy0uMzMtMS0xLTIuMzMtMi42Ni0yLjY2em0xMy0yLjY2YTEuMzMgMS4zMyA5MCAwMC0xLjY2IDBMNyA5LjMzYTAgMCA5MCAwMDAgMGwtMS42NiAzYS4zMy4zMyA5MCAwMC4zMy4zM2wzLTEuNjZhMCAwIDkwIDAwMCAwbDctN2ExLjMzIDEuMzMgOTAgMDAwLTEuMzN6XCIsXG4gIHBsYXk6IFwiTTMuMzMzMyAzLjUxNmMwLTEuMTM4IDEuMjE3My0xLjg2MTMgMi4yMTY3LTEuMzE4bDguMjQxMyA0LjQ4NGMxLjA0NC41Njg3IDEuMDQ0IDIuMDY3MyAwIDIuNjM1M0w1LjU1IDEzLjgwMTNDNC41NTA3IDE0LjM0NTMgMy4zMzMzIDEzLjYyMTMgMy4zMzMzIDEyLjQ4NFYzLjUxNlpcIixcbiAgcGF1c2U6XG4gICAgXCJNMy44MzA3IDJBMS4xNjY3IDEuMTY2NyA5MCAwMDIuNjY0IDMuMTY2N1YxMi44MzMzQzIuNjY0IDEzLjQ3NzMgMy4xODY3IDE0IDMuODMwNyAxNEg2LjE2NEExLjE2NjcgMS4xNjY3IDkwIDAwNy4zMzA3IDEyLjgzMzNWMy4xNjY3QTEuMTY2NyAxLjE2NjcgOTAgMDA2LjE2NCAySDMuODMwN1pNOS44MzA3IDJBMS4xNjY3IDEuMTY2NyA5MCAwMDguNjY0IDMuMTY2N1YxMi44MzMzQzguNjY0IDEzLjQ3NzMgOS4xODY3IDE0IDkuODMwNyAxNEgxMi4xNjRBMS4xNjY3IDEuMTY2NyA5MCAwMDEzLjMzMDcgMTIuODMzM1YzLjE2NjdBMS4xNjY3IDEuMTY2NyA5MCAwMDEyLjE2NCAySDkuODMwN1pcIixcbn07XG5cbmNvbnN0IFJlYWN0Q29tcG9uZW50ID0gKGljb24sIGRlZmF1bHRTaXplID0gMTYpID0+IHtcbiAgcmV0dXJuICh7IHNpemUgPSBkZWZhdWx0U2l6ZSwgZmlsbCA9IFwiY3VycmVudENvbG9yXCIgfSkgPT4gKFxuICAgIDxzdmcgdmlld0JveD17YDAgMCAke2RlZmF1bHRTaXplfSAke2RlZmF1bHRTaXplfWB9IHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IGZpbGw9e2ZpbGx9PlxuICAgICAgPHBhdGggZD17aWNvbn0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbkljb25zLlJlYWN0ID0ge1xuICBlZGl0QnV0dG9uOiBSZWFjdENvbXBvbmVudChJY29ucy5lZGl0QnV0dG9uLCAyNCksXG4gIHNldHRpbmdzOiBSZWFjdENvbXBvbmVudChJY29ucy5zZXR0aW5ncywgMTYpLFxuICBnaXRodWI6IFJlYWN0Q29tcG9uZW50KEljb25zLmdpdGh1YiwgMjQpLFxuICBjbG9zZTogUmVhY3RDb21wb25lbnQoSWNvbnMuY2xvc2UsIDMyKSxcbiAgd2FybmluZzogUmVhY3RDb21wb25lbnQoSWNvbnMud2FybmluZywgMjQpLFxuICBtb3JlOiBSZWFjdENvbXBvbmVudChJY29ucy5tb3JlLCAxNiksXG4gIHF1ZXN0aW9uTWFyazogUmVhY3RDb21wb25lbnQoSWNvbnMucXVlc3Rpb25NYXJrLCAyNCksXG4gIGRyb3Bkb3duOiBSZWFjdENvbXBvbmVudChJY29ucy5kcm9wZG93biwgMjQpLFxuICBwYWxldHRlOiBSZWFjdENvbXBvbmVudChJY29ucy5wYWxldHRlLCAyNCksXG4gIGR1cGxpY2F0ZTogUmVhY3RDb21wb25lbnQoSWNvbnMuZHVwbGljYXRlLCAxNiksXG4gIHRlcm1pbmFsOiBSZWFjdENvbXBvbmVudChJY29ucy50ZXJtaW5hbCwgMTYpLFxuICBjdXN0b21BcnR3b3JrOiBSZWFjdENvbXBvbmVudChJY29ucy5jdXN0b21BcnR3b3JrLCAxNiksXG4gIHBsYXk6IFJlYWN0Q29tcG9uZW50KEljb25zLnBsYXksIDE2KSxcbiAgcGF1c2U6IFJlYWN0Q29tcG9uZW50KEljb25zLnBhdXNlLCAxNiksXG59O1xuXG5JY29ucy5IVE1MID0ge1xuICBlZGl0QnV0dG9uOiBgPHBhdGggZD1cIiR7SWNvbnMuZWRpdEJ1dHRvbn1cIi8+YCxcbiAgc2V0dGluZ3M6IGA8cGF0aCBkPVwiJHtJY29ucy5zZXR0aW5nc31cIi8+YCxcbiAgZ2l0aHViOiBgPHBhdGggZD1cIiR7SWNvbnMuZ2l0aHVifVwiLz5gLFxuICBjbG9zZTogYDxwYXRoIGQ9XCIke0ljb25zLmNsb3NlfVwiLz5gLFxuICB3YXJuaW5nOiBgPHBhdGggZD1cIiR7SWNvbnMud2FybmluZ31cIi8+YCxcbiAgbW9yZTogYDxwYXRoIGQ9XCIke0ljb25zLm1vcmV9XCIvPmAsXG4gIHF1ZXN0aW9uTWFyazogYDxwYXRoIGQ9XCIke0ljb25zLnF1ZXN0aW9uTWFya31cIi8+YCxcbiAgZHJvcGRvd246IGA8cGF0aCBkPVwiJHtJY29ucy5kcm9wZG93bn1cIi8+YCxcbiAgcGFsZXR0ZTogYDxwYXRoIGQ9XCIke0ljb25zLnBhbGV0dGV9XCIvPmAsXG4gIGR1cGxpY2F0ZTogYDxwYXRoIGQ9XCIke0ljb25zLmR1cGxpY2F0ZX1cIi8+YCxcbiAgdGVybWluYWw6IGA8cGF0aCBkPVwiJHtJY29ucy50ZXJtaW5hbH1cIi8+YCxcbiAgY3VzdG9tQXJ0d29yazogYDxwYXRoIGQ9XCIke0ljb25zLmN1c3RvbUFydHdvcmt9XCIvPmAsXG4gIHBsYXk6IGA8cGF0aCBkPVwiJHtJY29ucy5wbGF5fVwiLz5gLFxuICBwYXVzZTogYDxwYXRoIGQ9XCIke0ljb25zLnBhdXNlfVwiLz5gLFxufTtcblxuLy8gVXNhZ2U6XG4vLyA8c3ZnXG4vLyAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuLy8gICB3aWR0aD1cIjE2XCJcbi8vICAgaGVpZ2h0PVwiMTZcIlxuLy8gICBmaWxsPVwiY3VycmVudENvbG9yXCJcbi8vICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbi8vICAgICBfX2h0bWw6IEljb25zLkhUTUwubW9yZSxcbi8vICAgfX1cbi8vIC8+XG4vLyBPUjpcbi8vIDxJY29ucy5SZWFjdC5lZGl0QnV0dG9uIHNpemU9ezI0fSBmaWxsPVwiI2ZmZlwiIC8+XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwgImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEljb25zIGZyb20gXCIuL2ljb25zXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvcG9wdXBNb2RhbC5jc3NcIjtcblxubGV0IG1vZGFsQ29udGFpbmVyID0gbnVsbDtcbmxldCBtb2RhbFJvb3QgPSBudWxsO1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBpZiAobW9kYWxSb290ICYmIG1vZGFsQ29udGFpbmVyKSB7XG4gICAgbW9kYWxSb290LnVubW91bnQoKTtcbiAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjS2V5KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgbW9kYWxDb250YWluZXIgPSBudWxsO1xuICAgIG1vZGFsUm9vdCA9IG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUVzY0tleSA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbC1vdmVybGF5XCIpKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59O1xuXG5jb25zdCBQb3B1cE1vZGFsID0gKHsgdGl0bGUgPSBcIlwiLCBjb250ZW50LCBpc0xhcmdlID0gdHJ1ZSwgYnV0dG9ucyA9IGZhbHNlLCBpY29uID0gXCJcIiB9ID0ge30pID0+IHtcbiAgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwLW1vZGFsXCIpO1xuICBpZiAoIW1vZGFsQ29udGFpbmVyKSB7XG4gICAgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicG9wdXAtbW9kYWxcIik7XG4gICAgbW9kYWxDb250YWluZXIuaWQgPSBcInBvcHVwLW1vZGFsXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG4gIH1cblxuICBtb2RhbFJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KG1vZGFsQ29udGFpbmVyKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjS2V5KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gIGNvbnN0IE1vZGFsQ29tcG9uZW50ID0gbWVtbygoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWxfX2NvbnRhaW5lciR7aXNMYXJnZSA/IFwiIG1vZGFsX19jb250YWluZXItLWxhcmdlXCIgOiBcIlwifWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faWNvblwiPntpY29ufTwvZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICB7YnV0dG9uc31cbiAgICAgICAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlciBsYWJlbD1cIkNsb3NlXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uIG1vZGFsX19idXR0b24tLWNsb3NlXCIgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbCgpfT5cbiAgICAgICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5jbG9zZSBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19jb250ZW50XCI+XG4gICAgICAgICAgICB7UmVhY3QuaXNWYWxpZEVsZW1lbnQoY29udGVudCkgPyBjb250ZW50IDogUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZW50KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgbW9kYWxSb290LnJlbmRlcig8TW9kYWxDb21wb25lbnQgLz4pO1xufTtcblxuUG9wdXBNb2RhbC5oaWRlID0gY2xvc2VNb2RhbDtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBNb2RhbDtcbiIsICJcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGNzcyA9IFwiLm1vZGFsLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNoYWRvdyksIDAuNSk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG59XFxuXFxuLm1vZGFsX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1tYWluKSwgMC45KSAhaW1wb3J0YW50O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDEuNCkgYnJpZ2h0bmVzcygxLjIpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNoYWRvdyksIDAuNSkgIWltcG9ydGFudDtcXG59XFxuXFxuLm1vZGFsX19jb250YWluZXItLWxhcmdlIHtcXG4gIG1heC1oZWlnaHQ6IDgwdmg7XFxuICB3aWR0aDogY2xhbXAoNTUwcHgsIDYwdncsIDY1MHB4KTtcXG59XFxuXFxuLm1vZGFsX19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDMycHggMzJweCAxMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tc3BpY2UtcmdiLXNlbGVjdGVkLXJvdyksIDAuMSk7XFxufVxcblxcbi5tb2RhbF9fdGl0bGVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ubW9kYWxfX2ljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbF9fdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1vZGFsX19idXR0b25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BpY2UtaGlnaGxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciAubW9kYWxfX2J1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG4ubW9kYWxfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDE2cHggMjRweCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGUgYm90aC1lZGdlcztcXG59XFxuXFxuLm1vZGFsX19jb250ZW50ID4gKiB7XFxuICB3aWR0aDogMTAwJTtcXG59XCI7XG4gICAgICAgICAgY29uc3Qgc3R5bGVJZCA9IFwic2hhcmVkLXBvcHVwTW9kYWxcIjtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHN0eWxlLmlkID0gc3R5bGVJZDtcbiAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGNzcztcbiAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICIsICJpbXBvcnQgRGV4aWUgZnJvbSBcImh0dHBzOi8vZXNtLnNoL2RleGllXCI7XG5pbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2hBbGxMaWJyYXJ5Q29udGVudHMgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9hcGkvZmV0Y2hBbGxMaWJyYXJ5Q29udGVudHNcIjtcbmltcG9ydCBmZXRjaEFsbFBsYXlsaXN0VHJhY2tzIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvYXBpL2ZldGNoQWxsUGxheWxpc3RUcmFja3NcIjtcbmltcG9ydCBmZXRjaEdyYXBoUUxGb3JBbGJ1bVRyYWNrcyBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2FwaS9mZXRjaEdyYXBoUUxGb3JBbGJ1bVRyYWNrc1wiO1xuaW1wb3J0IGZldGNoV2ViQVBJRm9yVHJhY2tzIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvYXBpL2ZldGNoV2ViQVBJRm9yVHJhY2tzXCI7XG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybURpYWxvZ1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93blwiO1xuaW1wb3J0IEljb25zIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29uc1wiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc2xpZGVyXCI7XG5pbXBvcnQgdXNlUGxheWVyIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvaG9va3MvdXNlUGxheWVyXCI7XG5pbXBvcnQgeyBnZXRTZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbmNvbnN0IGRiID0gbmV3IERleGllKFwiZmluZER1cGVUcmFja3NcIik7XG4vL2RleGllIG11bHRpcGxpZXMgdmVyc2lvbiBieSAxMD9cbmRiLnZlcnNpb24oMC4xKS5zdG9yZXMoe1xuICB0cmFja3M6XG4gICAgXCImdHJhY2tVcmksIHRyYWNrTmFtZSwgdHJhY2tEdXJhdGlvbiwgYWxidW1VcmksIHRyYWNrUGxheUNvdW50LCB0cmFja0lzcmMsIGlnbm9yZUR1cGxpY2F0ZXNcIixcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEVkaXRhYmxlUGxheWxpc3RzKCkge1xuICBjb25zdCBwbGF5bGlzdHMgPSBhd2FpdCBmZXRjaEFsbExpYnJhcnlDb250ZW50cygpO1xuICByZXR1cm4gcGxheWxpc3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSBcInBsYXlsaXN0XCIgJiYgaXRlbS5jYW5BZGRUbyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoUGxheWxpc3RUcmFja3NBbmRDYWNoZShwbGF5bGlzdFVyaSkge1xuICBjb25zdCB7IGl0ZW1zIH0gPSBhd2FpdCBmZXRjaEFsbFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpKTtcblxuICBjb25zdCB0cmFja1VyaXMgPSBpdGVtcy5tYXAoKHRyYWNrKSA9PiB0cmFjay51cmkpO1xuICBjb25zdCBleGlzdGluZ1RyYWNrcyA9IGF3YWl0IGRiLnRyYWNrcy5idWxrR2V0KHRyYWNrVXJpcyk7XG4gIGNvbnN0IGV4aXN0aW5nVHJhY2tzTWFwID0gbmV3IE1hcChleGlzdGluZ1RyYWNrcy5maWx0ZXIoQm9vbGVhbikubWFwKCh0KSA9PiBbdC50cmFja1VyaSwgdF0pKTtcblxuICBjb25zdCB0cmFja3NUb1B1dCA9IGl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBleGlzdGluZ1RyYWNrc01hcC5nZXQoaXRlbS51cmkpO1xuICAgIGlmICghZXhpc3RpbmcgfHwgZXhpc3RpbmcudHJhY2tOYW1lICE9PSBpdGVtLm5hbWUgfHwgZXhpc3RpbmcuYWxidW1VcmkgIT09IGl0ZW0uYWxidW0udXJpKSB7XG4gICAgICBhY2MucHVzaCh7XG4gICAgICAgIHRyYWNrVXJpOiBpdGVtLnVyaSxcbiAgICAgICAgdHJhY2tOYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIGFsYnVtVXJpOiBpdGVtLmFsYnVtLnVyaSxcbiAgICAgICAgdHJhY2tEdXJhdGlvbjogZXhpc3Rpbmc/LmR1cmF0aW9uLm1pbGxpc2Vjb25kcyA/PyBudWxsLFxuICAgICAgICB0cmFja1BsYXlDb3VudDogZXhpc3Rpbmc/LnRyYWNrUGxheUNvdW50ID8/IG51bGwsXG4gICAgICAgIHRyYWNrSXNyYzogZXhpc3Rpbmc/LnRyYWNrSXNyYyA/PyBudWxsLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKTtcblxuICBpZiAodHJhY2tzVG9QdXQubGVuZ3RoID4gMCkge1xuICAgIGF3YWl0IGRiLnRyYWNrcy5idWxrUHV0KHRyYWNrc1RvUHV0KTtcbiAgfVxuXG4gIHJldHVybiB7IGl0ZW1zIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoSVNSQ3NGb3JUcmFja3NXaXRoQ2FjaGUodHJhY2tzKSB7XG4gIGNvbnN0IGlzcmNNYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHRyYWNrc1RvRmV0Y2ggPSBbXTtcbiAgY29uc3QgdmFsaWRUcmFja3MgPSB0cmFja3MuZmlsdGVyKCh0cmFjaykgPT4gdHJhY2s/LnVyaSk7XG4gIGNvbnN0IHRyYWNrVXJpcyA9IHZhbGlkVHJhY2tzLm1hcCgodHJhY2spID0+IHRyYWNrLnVyaSk7XG5cbiAgaWYgKHRyYWNrVXJpcy5sZW5ndGggPT09IDApIHJldHVybiBpc3JjTWFwO1xuXG4gIGNvbnN0IGNhY2hlZFRyYWNrc0RhdGEgPSBhd2FpdCBkYi50cmFja3MuYnVsa0dldCh0cmFja1VyaXMpO1xuICBjb25zdCBjYWNoZWRUcmFja3NNYXAgPSBuZXcgTWFwKGNhY2hlZFRyYWNrc0RhdGEuZmlsdGVyKEJvb2xlYW4pLm1hcCgodCkgPT4gW3QudHJhY2tVcmksIHRdKSk7XG5cbiAgZm9yIChjb25zdCB0cmFjayBvZiB2YWxpZFRyYWNrcykge1xuICAgIGNvbnN0IGNhY2hlZFRyYWNrID0gY2FjaGVkVHJhY2tzTWFwLmdldCh0cmFjay51cmkpO1xuICAgIGlmIChjYWNoZWRUcmFjaz8udHJhY2tJc3JjKSB7XG4gICAgICBpc3JjTWFwLnNldCh0cmFjay51cmksIGNhY2hlZFRyYWNrLnRyYWNrSXNyYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYWNrc1RvRmV0Y2gucHVzaCh0cmFjayk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRyYWNrc1RvRmV0Y2gubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGZldGNoZWRUcmFja3NGcm9tQVBJID0gYXdhaXQgZmV0Y2hXZWJBUElGb3JUcmFja3ModHJhY2tzVG9GZXRjaC5tYXAoKHQpID0+IHQudXJpKSk7XG4gICAgY29uc3QgdXBkYXRlc0ZvckRiID0gW107XG5cbiAgICBmb3IgKGNvbnN0IFt0cmFja1VyaSwgdHJhY2tdIG9mIGZldGNoZWRUcmFja3NGcm9tQVBJLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgdHJhY2tJc3JjID0gdHJhY2s/LmV4dGVybmFsX2lkcz8uaXNyYztcbiAgICAgIGlmICh0cmFja0lzcmMpIHtcbiAgICAgICAgaXNyY01hcC5zZXQodHJhY2tVcmksIHRyYWNrSXNyYyk7XG4gICAgICAgIHVwZGF0ZXNGb3JEYi5wdXNoKHsga2V5OiB0cmFja1VyaSwgY2hhbmdlczogeyB0cmFja0lzcmMgfSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlc0ZvckRiLmxlbmd0aCA+IDApIHtcbiAgICAgIGF3YWl0IGRiLnRyYWNrcy5idWxrVXBkYXRlKHVwZGF0ZXNGb3JEYik7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc3JjTWFwO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFBsYXlDb3VudHNBbmREdXJhdGlvbkZvclRyYWNrc1dpdGhDYWNoZSh0cmFja3MpIHtcbiAgY29uc3QgdHJhY2tQbGF5Q291bnRNYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHRyYWNrRHVyYXRpb25NYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHRyYWNrc1RvRmV0Y2ggPSBbXTtcbiAgY29uc3QgdmFsaWRUcmFja3MgPSB0cmFja3MuZmlsdGVyKCh0cmFjaykgPT4gdHJhY2s/LnVyaSk7XG4gIGNvbnN0IHRyYWNrVXJpcyA9IHZhbGlkVHJhY2tzLm1hcCgodHJhY2spID0+IHRyYWNrLnVyaSk7XG5cbiAgaWYgKHRyYWNrVXJpcy5sZW5ndGggPT09IDApIHJldHVybiB7IHRyYWNrUGxheUNvdW50TWFwLCB0cmFja0R1cmF0aW9uTWFwIH07XG5cbiAgY29uc3QgY2FjaGVkVHJhY2tzRGF0YSA9IGF3YWl0IGRiLnRyYWNrcy5idWxrR2V0KHRyYWNrVXJpcyk7XG4gIGNvbnN0IGNhY2hlZFRyYWNrc01hcCA9IG5ldyBNYXAoY2FjaGVkVHJhY2tzRGF0YS5maWx0ZXIoQm9vbGVhbikubWFwKCh0KSA9PiBbdC50cmFja1VyaSwgdF0pKTtcblxuICBmb3IgKGNvbnN0IHRyYWNrIG9mIHZhbGlkVHJhY2tzKSB7XG4gICAgY29uc3QgY2FjaGVkVHJhY2sgPSBjYWNoZWRUcmFja3NNYXAuZ2V0KHRyYWNrLnVyaSk7XG4gICAgaWYgKGNhY2hlZFRyYWNrPy50cmFja1BsYXlDb3VudCAhPSBudWxsKSB7XG4gICAgICB0cmFja1BsYXlDb3VudE1hcC5zZXQodHJhY2sudXJpLCBjYWNoZWRUcmFjay50cmFja1BsYXlDb3VudCk7XG4gICAgfVxuICAgIGlmIChjYWNoZWRUcmFjaz8udHJhY2tEdXJhdGlvbiAhPSBudWxsKSB7XG4gICAgICB0cmFja0R1cmF0aW9uTWFwLnNldCh0cmFjay51cmksIGNhY2hlZFRyYWNrLnRyYWNrRHVyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoY2FjaGVkVHJhY2s/LnRyYWNrUGxheUNvdW50ID09IG51bGwgfHwgY2FjaGVkVHJhY2s/LnRyYWNrRHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgdHJhY2tzVG9GZXRjaC5wdXNoKHRyYWNrKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHJhY2tzVG9GZXRjaC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWxidW1VcmlzVG9GZXRjaCA9IG5ldyBTZXQodHJhY2tzVG9GZXRjaC5tYXAoKHQpID0+IHQuYWxidW0udXJpKS5maWx0ZXIoQm9vbGVhbikpO1xuICAgIGNvbnN0IGZldGNoZWREYXRhRnJvbUFQSSA9IGF3YWl0IGZldGNoR3JhcGhRTEZvckFsYnVtVHJhY2tzKGFsYnVtVXJpc1RvRmV0Y2gpO1xuICAgIGNvbnN0IHVwZGF0ZXNGb3JEYiA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBbdHJhY2tVcmksIHRyYWNrXSBvZiBmZXRjaGVkRGF0YUZyb21BUEkuZW50cmllcygpKSB7XG4gICAgICBjb25zdCB0cmFja1BsYXlDb3VudCA9IHRyYWNrLnBsYXljb3VudCA/IE51bWJlci5wYXJzZUludCh0cmFjay5wbGF5Y291bnQsIDEwKSA6IG51bGw7XG4gICAgICBjb25zdCB0cmFja0R1cmF0aW9uID0gdHJhY2suZHVyYXRpb24/LnRvdGFsTWlsbGlzZWNvbmRzID8/IG51bGw7XG5cbiAgICAgIGlmICh0cmFja1BsYXlDb3VudCAhPT0gbnVsbCkge1xuICAgICAgICB0cmFja1BsYXlDb3VudE1hcC5zZXQodHJhY2tVcmksIHRyYWNrUGxheUNvdW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFja0R1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHRyYWNrRHVyYXRpb25NYXAuc2V0KHRyYWNrVXJpLCB0cmFja0R1cmF0aW9uKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZXNGb3JEYi5wdXNoKHtcbiAgICAgICAga2V5OiB0cmFja1VyaSxcbiAgICAgICAgY2hhbmdlczogeyB0cmFja1BsYXlDb3VudCwgdHJhY2tEdXJhdGlvbiB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZXNGb3JEYi5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCBkYi50cmFja3MuYnVsa1VwZGF0ZSh1cGRhdGVzRm9yRGIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB0cmFja1BsYXlDb3VudE1hcCwgdHJhY2tEdXJhdGlvbk1hcCB9O1xufVxuXG5jb25zdCBnZXROdW1lcmljVHJhY2tQbGF5Q291bnQgPSAodHJhY2tVcmksIHRyYWNrUGxheUNvdW50cykgPT4gdHJhY2tQbGF5Q291bnRzLmdldCh0cmFja1VyaSkgPz8gMDtcblxuY29uc3Qgbm9ybWFsaXplRm9yU2ltaWxhcml0eSA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcbiAgY29uc3QgdGVybXNUb1JlbW92ZSA9IFsuLi5zZXR0aW5ncy5kZWZhdWx0Tm9ybWFsaXplV29yZHMsIC4uLnNldHRpbmdzLmN1c3RvbU5vcm1hbGl6ZVdvcmRzXTtcbiAgY29uc3QgcmVnZXhSZW1vdmVUZXJtcyA9IG5ldyBSZWdFeHAoYFxcXFxiKCR7dGVybXNUb1JlbW92ZS5qb2luKFwifFwiKX0pXFxcXGJgLCBcImdpXCIpO1xuICByZXR1cm4gbmFtZVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1xcKC4qP1xcKXxcXFsuKj9cXF0vZywgXCJcIilcbiAgICAucmVwbGFjZShyZWdleFJlbW92ZVRlcm1zLCBcIlwiKVxuICAgIC5yZXBsYWNlKC8tL2csIFwiIFwiKVxuICAgIC5yZXBsYWNlKC9bXlxccHtMfVxccHtOfVxcc10vZ3UsIFwiXCIpXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXG4gICAgLnRyaW0oKTtcbn07XG5cbmNvbnN0IFRyYWNrRGV0YWlscyA9IG1lbW8oKHsgdHJhY2ssIHRyYWNrUGxheUNvdW50cywgdHJhY2tJc3JjcyB9KSA9PiB7XG4gIGNvbnN0IHRyYWNrUGxheUNvdW50ID0gdHJhY2tQbGF5Q291bnRzLmdldCh0cmFjay51cmkpO1xuICBjb25zdCBkaXNwbGF5Q291bnQgPSB0cmFja1BsYXlDb3VudCAhPSBudWxsID8gdHJhY2tQbGF5Q291bnQudG9Mb2NhbGVTdHJpbmcoKSA6IFwiTi9BXCI7XG4gIGNvbnN0IHRyYWNrSXNyYyA9IHRyYWNrSXNyY3MuZ2V0KHRyYWNrLnVyaSkgfHwgXCJOL0FcIjtcbiAgY29uc3QgYWxidW1OYW1lID0gdHJhY2suYWxidW0/Lm5hbWUgfHwgXCJOL0FcIjtcbiAgY29uc3QgYXJ0aXN0cyA9IHRyYWNrLmFydGlzdHM/Lm1hcCgoYSkgPT4gYS5uYW1lKS5qb2luKFwiLCBcIikgfHwgXCJOL0FcIjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrLWRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2stZGV0YWlsc19fbGluZVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFjay1kZXRhaWxzX19hcnRpc3RzXCI+IEFydGlzdHM6IHthcnRpc3RzfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhY2stZGV0YWlsc19fYWxidW1cIj4gQWxidW06IHthbGJ1bU5hbWV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrLWRldGFpbHNfX2xpbmVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhY2stZGV0YWlsc19fcGxheWNvdW50XCI+IFBsYXlzOiB7ZGlzcGxheUNvdW50fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhY2stZGV0YWlsc19faXNyY1wiPiBJU1JDOiB7dHJhY2tJc3JjfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmNvbnN0IFRyYWNrQ29udHJvbHMgPSBtZW1vKCh7IHRyYWNrVXJpLCB0cmFja0R1cmF0aW9uIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHBvc2l0aW9uLFxuICAgIGR1cmF0aW9uLFxuICAgIGlzQ3VycmVudGx5UGxheWluZ1RoaXNUcmFjayxcbiAgICB0b2dnbGVQbGF5LFxuICAgIGhhbmRsZVNsaWRlckNoYW5nZSxcbiAgICBoYW5kbGVTbGlkZXJSZWxlYXNlLFxuICB9ID0gdXNlUGxheWVyKHRyYWNrVXJpLCB0cmFja0R1cmF0aW9uKTtcblxuICBjb25zdCBmb3JtYXRUaW1lID0gKG1zKSA9PiB7XG4gICAgaWYgKE51bWJlci5pc05hTihtcykgfHwgbXMgPCAwKSByZXR1cm4gXCJOL0FcIjtcbiAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gNjApO1xuICAgIGNvbnN0IHNlY29uZHMgPSB0b3RhbFNlY29uZHMgJSA2MDtcbiAgICByZXR1cm4gYCR7bWludXRlc306JHtzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH07XG5cbiAgY29uc3QgbGVmdFRleHQgPSBmb3JtYXRUaW1lKHBvc2l0aW9uKTtcbiAgY29uc3QgcmlnaHRUZXh0ID0gZm9ybWF0VGltZShkdXJhdGlvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1ncm91cF9fcGxheWJhY2stY29udHJvbHNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1ncm91cF9fcGxheWJhY2stYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlUGxheX0+XG4gICAgICAgIHtpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2sgPyA8SWNvbnMuUmVhY3QucGF1c2UgLz4gOiA8SWNvbnMuUmVhY3QucGxheSAvPn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyLXRpbWVcIj57bGVmdFRleHR9PC9zcGFuPlxuICAgICAgPFNsaWRlclxuICAgICAgICB2YWx1ZT17cG9zaXRpb259XG4gICAgICAgIG1pbj17MH1cbiAgICAgICAgbWF4PXtkdXJhdGlvbn1cbiAgICAgICAgc3RlcD17MX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZX1cbiAgICAgICAgb25SZWxlYXNlPXtoYW5kbGVTbGlkZXJSZWxlYXNlfVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlci10aW1lXCI+e3JpZ2h0VGV4dH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuY29uc3QgRHVwbGljYXRlSXRlbSA9IG1lbW8oXG4gICh7XG4gICAgdHJhY2ssXG4gICAgY2F0ZWdvcnksXG4gICAgZ3JvdXBJbmRleCxcbiAgICBvbkRlbGV0ZSxcbiAgICBpc1NvdXJjZSxcbiAgICB0cmFja1BsYXlDb3VudHMsXG4gICAgdHJhY2tJc3JjcyxcbiAgICB0cmFja0R1cmF0aW9ucyxcbiAgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZHVwbGljYXRlLWdyb3VwX19kdXBsaWNhdGUtaXRlbSBkdXBsaWNhdGUtZ3JvdXBfX2l0ZW0tLSR7Y2F0ZWdvcnl9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1ncm91cF9fZHVwbGljYXRlLWluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2R1cGxpY2F0ZS1jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHVwbGljYXRlLWdyb3VwX19kdXBsaWNhdGUtbmFtZVwiPlxuICAgICAgICAgICAge2lzU291cmNlID8gXCJTb3VyY2U6IFwiIDogXCJcIn1cbiAgICAgICAgICAgIHt0cmFjay5uYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8VHJhY2tEZXRhaWxzIHRyYWNrPXt0cmFja30gdHJhY2tQbGF5Q291bnRzPXt0cmFja1BsYXlDb3VudHN9IHRyYWNrSXNyY3M9e3RyYWNrSXNyY3N9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZHVwbGljYXRlLWdyb3VwX19kZWxldGUtYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShjYXRlZ29yeSwgZ3JvdXBJbmRleCwgdHJhY2spfVxuICAgICAgICA+XG4gICAgICAgICAgRGVsZXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1ncm91cF9fYWN0aW9uc1wiPlxuICAgICAgICA8VHJhY2tDb250cm9scyB0cmFja1VyaT17dHJhY2sudXJpfSB0cmFja0R1cmF0aW9uPXt0cmFja0R1cmF0aW9ucy5nZXQodHJhY2sudXJpKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApLFxuKTtcblxuY29uc3QgRHVwbGljYXRlR3JvdXAgPSBtZW1vKFxuICAoeyBncm91cCwgY2F0ZWdvcnksIGdyb3VwSW5kZXgsIG9uRGVsZXRlLCB0cmFja1BsYXlDb3VudHMsIHRyYWNrSXNyY3MsIHRyYWNrRHVyYXRpb25zIH0pID0+IChcbiAgICA8ZGl2XG4gICAgICBrZXk9e2Ake2dyb3VwLm1haW5UcmFjay51cml9LSR7Z3JvdXAubWFpblRyYWNrLnVpZCB8fCBncm91cEluZGV4fWB9XG4gICAgICBjbGFzc05hbWU9e2BkdXBsaWNhdGUtZ3JvdXBfX2l0ZW0gZHVwbGljYXRlLWdyb3VwX19pdGVtLS0ke2NhdGVnb3J5fWB9XG4gICAgPlxuICAgICAgPER1cGxpY2F0ZUl0ZW1cbiAgICAgICAgdHJhY2s9e2dyb3VwLm1haW5UcmFja31cbiAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICBncm91cEluZGV4PXtncm91cEluZGV4fVxuICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgIGlzU291cmNlXG4gICAgICAgIHRyYWNrUGxheUNvdW50cz17dHJhY2tQbGF5Q291bnRzfVxuICAgICAgICB0cmFja0lzcmNzPXt0cmFja0lzcmNzfVxuICAgICAgICB0cmFja0R1cmF0aW9ucz17dHJhY2tEdXJhdGlvbnN9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2R1cGxpY2F0ZXMtbGFiZWxcIj5EdXBsaWNhdGVzOjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2R1cGxpY2F0ZXMtbGlzdFwiPlxuICAgICAgICB7Z3JvdXAuZHVwbGljYXRlcy5tYXAoKGR1cCkgPT4gKFxuICAgICAgICAgIDxEdXBsaWNhdGVJdGVtXG4gICAgICAgICAgICBrZXk9e2Ake2R1cC51cml9LSR7ZHVwLnVpZCB8fCBkdXAudXJpfWB9XG4gICAgICAgICAgICB0cmFjaz17ZHVwfVxuICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgZ3JvdXBJbmRleD17Z3JvdXBJbmRleH1cbiAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgIHRyYWNrUGxheUNvdW50cz17dHJhY2tQbGF5Q291bnRzfVxuICAgICAgICAgICAgdHJhY2tJc3Jjcz17dHJhY2tJc3Jjc31cbiAgICAgICAgICAgIHRyYWNrRHVyYXRpb25zPXt0cmFja0R1cmF0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApLFxuKTtcblxuY29uc3QgRHVwbGljYXRlR3JvdXBMaXN0ID0gbWVtbyhcbiAgKHsgdGl0bGUsIGdyb3VwcywgY2F0ZWdvcnksIG9uRGVsZXRlLCB0cmFja1BsYXlDb3VudHMsIHRyYWNrSXNyY3MsIHRyYWNrRHVyYXRpb25zIH0pID0+IHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKCk7XG4gICAgaWYgKCFzZXR0aW5ncy5ncm91cFNldHRpbmdzW2NhdGVnb3J5XSkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZHVwbGljYXRlLWdyb3VwX19oZWFkaW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2hlYWRpbmctdGl0bGVcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2hlYWRpbmctbGVuZ3RoXCI+e2dyb3Vwcy5sZW5ndGh9IGZvdW5kPC9kaXY+XG4gICAgICAgIDwvcD5cbiAgICAgICAge2dyb3Vwcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwbGljYXRlLWdyb3VwX19saXN0XCI+XG4gICAgICAgICAgICB7Z3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxEdXBsaWNhdGVHcm91cFxuICAgICAgICAgICAgICAgIGtleT17YCR7Z3JvdXAubWFpblRyYWNrLnVyaX0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIGdyb3VwPXtncm91cH1cbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgZ3JvdXBJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlfVxuICAgICAgICAgICAgICAgIHRyYWNrUGxheUNvdW50cz17dHJhY2tQbGF5Q291bnRzfVxuICAgICAgICAgICAgICAgIHRyYWNrSXNyY3M9e3RyYWNrSXNyY3N9XG4gICAgICAgICAgICAgICAgdHJhY2tEdXJhdGlvbnM9e3RyYWNrRHVyYXRpb25zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+Tm8gZHVwbGljYXRlcyBmb3VuZCBpbiB0aGlzIGNhdGVnb3J5LjwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG4pO1xuXG5mdW5jdGlvbiBQbGF5bGlzdER1cGxpY2F0ZUZpbmRlcih7IHNlbGVjdGVkUGxheWxpc3Q6IGluaXRpYWxTZWxlY3RlZFBsYXlsaXN0IH0pIHtcbiAgY29uc3QgW293bmVkUGxheWxpc3RzLCBzZXRPd25lZFBsYXlsaXN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFBsYXlsaXN0LCBzZXRTZWxlY3RlZFBsYXlsaXN0XSA9IHVzZVN0YXRlKGluaXRpYWxTZWxlY3RlZFBsYXlsaXN0IHx8IG51bGwpO1xuICBjb25zdCBbcGxheWxpc3RUcmFja3MsIHNldFBsYXlsaXN0VHJhY2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RyYWNrUGxheUNvdW50cywgc2V0VHJhY2tQbGF5Q291bnRzXSA9IHVzZVN0YXRlKG5ldyBNYXAoKSk7XG4gIGNvbnN0IFt0cmFja0R1cmF0aW9ucywgc2V0VHJhY2tEdXJhdGlvbnNdID0gdXNlU3RhdGUobmV3IE1hcCgpKTtcbiAgY29uc3QgW3RyYWNrSXNyY3MsIHNldFRyYWNrSXNyY3NdID0gdXNlU3RhdGUobmV3IE1hcCgpKTtcbiAgY29uc3QgW2R1cGxpY2F0ZUdyb3Vwcywgc2V0RHVwbGljYXRlR3JvdXBzXSA9IHVzZVN0YXRlKHtcbiAgICBleGFjdDogW10sXG4gICAgaXNyYzogW10sXG4gICAgbGlrZWx5OiBbXSxcbiAgICBwb3NzaWJsZTogW10sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGlzTW91bnRlZCA9IHRydWU7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYXlsaXN0cyA9IGF3YWl0IGZldGNoRWRpdGFibGVQbGF5bGlzdHMoKTtcbiAgICAgIGlmICghaXNNb3VudGVkKSByZXR1cm47XG4gICAgICBzZXRPd25lZFBsYXlsaXN0cyhwbGF5bGlzdHMpO1xuICAgICAgc2V0U2VsZWN0ZWRQbGF5bGlzdChpbml0aWFsU2VsZWN0ZWRQbGF5bGlzdCB8fCBwbGF5bGlzdHNbMF0gfHwgbnVsbCk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkID0gZmFsc2U7XG4gICAgfTtcbiAgfSwgW2luaXRpYWxTZWxlY3RlZFBsYXlsaXN0XSk7XG5cbiAgY29uc3QgaGFuZGxlUGxheWxpc3RDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5ld1BsYXlsaXN0ID0gb3duZWRQbGF5bGlzdHMuZmluZCgocCkgPT4gcC51cmkgPT09IGUudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAobmV3UGxheWxpc3QpIHNldFNlbGVjdGVkUGxheWxpc3QobmV3UGxheWxpc3QpO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRQb3RlbnRpYWxEdXBsaWNhdGVzID0gdXNlQ2FsbGJhY2soKHRyYWNrcywgdHJhY2tQbGF5Q291bnRNYXAsIHRyYWNrSXNyY01hcCkgPT4ge1xuICAgIGNvbnN0IHByb2Nlc3NlZFVyaXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZ3JvdXBBbmRGaWx0ZXIgPSAobGlzdCwga2V5Rm4sIG5vcm1hbGl6ZXIpID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoKTtcblxuICAgICAgZm9yIChjb25zdCB0IG9mIGxpc3QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3NlZFVyaXMuaGFzKHQudXJpKSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGtleSA9IG5vcm1hbGl6ZXIoa2V5Rm4odCkpO1xuICAgICAgICBpZiAoIWtleSkgY29udGludWU7XG5cbiAgICAgICAgZ3JvdXBzLnNldChrZXksIGdyb3Vwcy5nZXQoa2V5KSB8fCBbXSk7XG4gICAgICAgIGdyb3Vwcy5nZXQoa2V5KS5wdXNoKHQpO1xuICAgICAgfVxuICAgICAgY29uc3QgZHVwbGljYXRlc1Jlc3VsdCA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcy52YWx1ZXMoKSkge1xuICAgICAgICBpZiAoZ3JvdXAubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGdyb3VwLnNvcnQoXG4gICAgICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAgICAgZ2V0TnVtZXJpY1RyYWNrUGxheUNvdW50KGIudXJpLCB0cmFja1BsYXlDb3VudE1hcCkgLVxuICAgICAgICAgICAgICBnZXROdW1lcmljVHJhY2tQbGF5Q291bnQoYS51cmksIHRyYWNrUGxheUNvdW50TWFwKSxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZm9yIChjb25zdCB0IG9mIGdyb3VwKSB7XG4gICAgICAgICAgICBwcm9jZXNzZWRVcmlzLmFkZCh0LnVyaSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGR1cGxpY2F0ZXNSZXN1bHQucHVzaCh7IG1haW5UcmFjazogZ3JvdXBbMF0sIGR1cGxpY2F0ZXM6IGdyb3VwLnNsaWNlKDEpIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZHVwbGljYXRlc1Jlc3VsdDtcbiAgICB9O1xuICAgIHNldER1cGxpY2F0ZUdyb3Vwcyh7XG4gICAgICBleGFjdDogZ3JvdXBBbmRGaWx0ZXIoXG4gICAgICAgIHRyYWNrcyxcbiAgICAgICAgKHQpID0+IHQudXJpLFxuICAgICAgICAoaykgPT4gayxcbiAgICAgICksXG4gICAgICBpc3JjOiBncm91cEFuZEZpbHRlcihcbiAgICAgICAgdHJhY2tzLFxuICAgICAgICAodCkgPT4gdHJhY2tJc3JjTWFwLmdldCh0LnVyaSksXG4gICAgICAgIChrKSA9PiBrLFxuICAgICAgKSxcbiAgICAgIGxpa2VseTogZ3JvdXBBbmRGaWx0ZXIoXG4gICAgICAgIHRyYWNrcyxcbiAgICAgICAgKHQpID0+IHQubmFtZSxcbiAgICAgICAgKG5hbWUpID0+IG5hbWUudHJpbSgpLFxuICAgICAgKSxcbiAgICAgIHBvc3NpYmxlOiBncm91cEFuZEZpbHRlcih0cmFja3MsICh0KSA9PiB0Lm5hbWUsIG5vcm1hbGl6ZUZvclNpbWlsYXJpdHkpLFxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVtb3ZlVHJhY2tGcm9tUGxheWxpc3QgPSBhc3luYyAodHJhY2tUb1JlbW92ZSkgPT4ge1xuICAgIGF3YWl0IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5bGlzdEFQSS5yZW1vdmUoc2VsZWN0ZWRQbGF5bGlzdC51cmksIFt7IHVpZDogdHJhY2tUb1JlbW92ZS51aWQgfV0pO1xuICAgIHNldFBsYXlsaXN0VHJhY2tzKChwcmV2VHJhY2tzKSA9PlxuICAgICAgcHJldlRyYWNrcy5maWx0ZXIoXG4gICAgICAgICh0cmFjaykgPT4gISh0cmFjay51cmkgPT09IHRyYWNrVG9SZW1vdmUudXJpICYmIHRyYWNrLnVpZCA9PT0gdHJhY2tUb1JlbW92ZS51aWQpLFxuICAgICAgKSxcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRyYWNrID0gYXN5bmMgKGR1cGxpY2F0ZUNhdGVnb3J5LCBfZ3JvdXBJbmRleCwgdHJhY2tUb1JlbW92ZSkgPT4ge1xuICAgIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcbiAgICBpZiAoIXNldHRpbmdzLmNvbmZpcm1TZXR0aW5nc1tkdXBsaWNhdGVDYXRlZ29yeV0pIHtcbiAgICAgIGF3YWl0IHJlbW92ZVRyYWNrRnJvbVBsYXlsaXN0KHRyYWNrVG9SZW1vdmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBDb25maXJtRGlhbG9nKHtcbiAgICAgIHRpdGxlVGV4dDogXCJSZW1vdmUgVHJhY2tcIixcbiAgICAgIGRlc2NyaXB0aW9uVGV4dDogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgXCIke3RyYWNrVG9SZW1vdmUubmFtZX1cIj8gVGhpcyBjYW5ub3QgYmUgdW5kb25lLmAsXG4gICAgICBjb25maXJtVGV4dDogXCJSZW1vdmVcIixcbiAgICAgIG9uQ29uZmlybTogKCkgPT4gcmVtb3ZlVHJhY2tGcm9tUGxheWxpc3QodHJhY2tUb1JlbW92ZSksXG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQbGF5bGlzdFRyYWNrcyhbXSk7XG4gICAgc2V0RHVwbGljYXRlR3JvdXBzKHsgZXhhY3Q6IFtdLCBpc3JjOiBbXSwgbGlrZWx5OiBbXSwgcG9zc2libGU6IFtdIH0pO1xuICAgIHNldFRyYWNrUGxheUNvdW50cyhuZXcgTWFwKCkpO1xuICAgIHNldFRyYWNrSXNyY3MobmV3IE1hcCgpKTtcbiAgICBzZXRUcmFja0R1cmF0aW9ucyhuZXcgTWFwKCkpO1xuXG4gICAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXNlbGVjdGVkUGxheWxpc3Q/LnVyaSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBwbGF5bGlzdERhdGEgPSBhd2FpdCBmZXRjaFBsYXlsaXN0VHJhY2tzQW5kQ2FjaGUoc2VsZWN0ZWRQbGF5bGlzdC51cmkpO1xuICAgICAgY29uc3QgZmV0Y2hlZFRyYWNrcyA9IHBsYXlsaXN0RGF0YS5pdGVtcztcbiAgICAgIHNldFBsYXlsaXN0VHJhY2tzKGZldGNoZWRUcmFja3MpO1xuXG4gICAgICBpZiAoZmV0Y2hlZFRyYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IFtmZXRjaGVkVHJhY2tQbGF5Q291bnRzQW5kRHVyYXRpb25SZXN1bHQsIGZldGNoZWRUcmFja0lzcmNNYXBSZXN1bHRdID1cbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmZXRjaFBsYXlDb3VudHNBbmREdXJhdGlvbkZvclRyYWNrc1dpdGhDYWNoZShmZXRjaGVkVHJhY2tzKSxcbiAgICAgICAgICAgIGZldGNoSVNSQ3NGb3JUcmFja3NXaXRoQ2FjaGUoZmV0Y2hlZFRyYWNrcyksXG4gICAgICAgICAgXSk7XG5cbiAgICAgICAgc2V0VHJhY2tQbGF5Q291bnRzKGZldGNoZWRUcmFja1BsYXlDb3VudHNBbmREdXJhdGlvblJlc3VsdC50cmFja1BsYXlDb3VudE1hcCk7XG4gICAgICAgIHNldFRyYWNrRHVyYXRpb25zKGZldGNoZWRUcmFja1BsYXlDb3VudHNBbmREdXJhdGlvblJlc3VsdC50cmFja0R1cmF0aW9uTWFwKTtcbiAgICAgICAgc2V0VHJhY2tJc3JjcyhmZXRjaGVkVHJhY2tJc3JjTWFwUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxvYWREYXRhKCk7XG4gIH0sIFtzZWxlY3RlZFBsYXlsaXN0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGxheWxpc3RUcmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgZmluZFBvdGVudGlhbER1cGxpY2F0ZXMocGxheWxpc3RUcmFja3MsIHRyYWNrUGxheUNvdW50cywgdHJhY2tJc3Jjcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldER1cGxpY2F0ZUdyb3Vwcyh7IGV4YWN0OiBbXSwgaXNyYzogW10sIGxpa2VseTogW10sIHBvc3NpYmxlOiBbXSB9KTtcbiAgICB9XG4gIH0sIFtwbGF5bGlzdFRyYWNrcywgdHJhY2tQbGF5Q291bnRzLCB0cmFja0lzcmNzLCBmaW5kUG90ZW50aWFsRHVwbGljYXRlc10pO1xuXG4gIGNvbnN0IHBsYXlsaXN0T3B0aW9ucyA9IG93bmVkUGxheWxpc3RzLm1hcCgocCkgPT4gKHsgdmFsdWU6IHAudXJpLCBsYWJlbDogcC5uYW1lIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmluZC1kdXBsaWNhdGVzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbmQtZHVwbGljYXRlc19faGVhZGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbmQtZHVwbGljYXRlc19faGVhZGVyLWxhYmVsXCI+U2VsZWN0IFBsYXlsaXN0Ojwvc3Bhbj5cbiAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkUGxheWxpc3Q/LnVyaX1cbiAgICAgICAgICBvcHRpb25zPXtwbGF5bGlzdE9wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBsYXlsaXN0Q2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtvd25lZFBsYXlsaXN0cy5sZW5ndGggPT09IDB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzZWxlY3RlZFBsYXlsaXN0ICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaW5kLWR1cGxpY2F0ZXNfX2RldGFpbHNcIj5cbiAgICAgICAgICAgIFBsYXlsaXN0OiB7c2VsZWN0ZWRQbGF5bGlzdC5uYW1lfSAoe3BsYXlsaXN0VHJhY2tzLmxlbmd0aH0gdHJhY2tzIGFuYWx5emVkKVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8RHVwbGljYXRlR3JvdXBMaXN0XG4gICAgICAgICAgICB0aXRsZT1cIkV4YWN0IER1cGxpY2F0ZXMgKFNhbWUgVVJJKVwiXG4gICAgICAgICAgICBncm91cHM9e2R1cGxpY2F0ZUdyb3Vwcy5leGFjdH1cbiAgICAgICAgICAgIGNhdGVnb3J5PVwiZXhhY3RcIlxuICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZVRyYWNrfVxuICAgICAgICAgICAgdHJhY2tQbGF5Q291bnRzPXt0cmFja1BsYXlDb3VudHN9XG4gICAgICAgICAgICB0cmFja0lzcmNzPXt0cmFja0lzcmNzfVxuICAgICAgICAgICAgdHJhY2tEdXJhdGlvbnM9e3RyYWNrRHVyYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPER1cGxpY2F0ZUdyb3VwTGlzdFxuICAgICAgICAgICAgdGl0bGU9XCJJU1JDIER1cGxpY2F0ZXMgKFNhbWUgUmVjb3JkaW5nKVwiXG4gICAgICAgICAgICBncm91cHM9e2R1cGxpY2F0ZUdyb3Vwcy5pc3JjfVxuICAgICAgICAgICAgY2F0ZWdvcnk9XCJpc3JjXCJcbiAgICAgICAgICAgIG9uRGVsZXRlPXtoYW5kbGVEZWxldGVUcmFja31cbiAgICAgICAgICAgIHRyYWNrUGxheUNvdW50cz17dHJhY2tQbGF5Q291bnRzfVxuICAgICAgICAgICAgdHJhY2tJc3Jjcz17dHJhY2tJc3Jjc31cbiAgICAgICAgICAgIHRyYWNrRHVyYXRpb25zPXt0cmFja0R1cmF0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEdXBsaWNhdGVHcm91cExpc3RcbiAgICAgICAgICAgIHRpdGxlPVwiTGlrZWx5IER1cGxpY2F0ZXMgKFNhbWUgTmFtZSlcIlxuICAgICAgICAgICAgZ3JvdXBzPXtkdXBsaWNhdGVHcm91cHMubGlrZWx5fVxuICAgICAgICAgICAgY2F0ZWdvcnk9XCJsaWtlbHlcIlxuICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZVRyYWNrfVxuICAgICAgICAgICAgdHJhY2tQbGF5Q291bnRzPXt0cmFja1BsYXlDb3VudHN9XG4gICAgICAgICAgICB0cmFja0lzcmNzPXt0cmFja0lzcmNzfVxuICAgICAgICAgICAgdHJhY2tEdXJhdGlvbnM9e3RyYWNrRHVyYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPER1cGxpY2F0ZUdyb3VwTGlzdFxuICAgICAgICAgICAgdGl0bGU9XCJQb3NzaWJsZSBEdXBsaWNhdGVzIChTaW1pbGFyIE5hbWUpXCJcbiAgICAgICAgICAgIGdyb3Vwcz17ZHVwbGljYXRlR3JvdXBzLnBvc3NpYmxlfVxuICAgICAgICAgICAgY2F0ZWdvcnk9XCJwb3NzaWJsZVwiXG4gICAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlVHJhY2t9XG4gICAgICAgICAgICB0cmFja1BsYXlDb3VudHM9e3RyYWNrUGxheUNvdW50c31cbiAgICAgICAgICAgIHRyYWNrSXNyY3M9e3RyYWNrSXNyY3N9XG4gICAgICAgICAgICB0cmFja0R1cmF0aW9ucz17dHJhY2tEdXJhdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdER1cGxpY2F0ZUZpbmRlcjtcbiIsICJhc3luYyBmdW5jdGlvbiBmZXRjaExpYnJhcnlDb250ZW50cygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTcGljZXRpZnkuUGxhdGZvcm0uTGlicmFyeUFQSS5nZXRDb250ZW50cyh7XG4gICAgb2Zmc2V0OiAwLFxuICAgIGxpbWl0OiAxMDAwMDAwMCxcbiAgICBmbGF0dGVuVHJlZTogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLml0ZW1zO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaExpYnJhcnlDb250ZW50cztcbiIsICJhc3luYyBmdW5jdGlvbiBmZXRjaEFsbFBsYXlsaXN0VHJhY2tzKHBsYXlsaXN0VXJpKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXlsaXN0QVBJLmdldENvbnRlbnRzKHBsYXlsaXN0VXJpLCB7XG4gICAgb2Zmc2V0OiAwLFxuICAgIGxpbWl0OiAtMSxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogcmVzcG9uc2UuaXRlbXMsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQWxsUGxheWxpc3RUcmFja3M7XG4iLCAiYXN5bmMgZnVuY3Rpb24gZmV0Y2hHcmFwaFFMRm9yQWxidW1UcmFja3MoYWxidW1VUklzKSB7XG4gIGNvbnN0IGRhdGFNYXAgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3QgYmF0Y2hGZXRjaFByb21pc2VzID0gQXJyYXkuZnJvbShhbGJ1bVVSSXMpLm1hcChhc3luYyAoYWxidW1VcmkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNwaWNldGlmeS5QbGF0Zm9ybS5HcmFwaFFMTG9hZGVyKFxuICAgICAgU3BpY2V0aWZ5LkdyYXBoUUwuRGVmaW5pdGlvbnMucXVlcnlBbGJ1bVRyYWNrcyxcbiAgICAgIHtcbiAgICAgICAgdXJpOiBhbGJ1bVVyaSxcbiAgICAgICAgbG9jYWxlOiBTcGljZXRpZnkuTG9jYWxlLmdldExvY2FsZSgpLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGxpbWl0OiA1MDAwLFxuICAgICAgfSxcbiAgICApO1xuICAgIGNvbnN0IGFsYnVtVHJhY2tzRGF0YSA9IHJlc3BvbnNlPy5kYXRhPy5hbGJ1bVVuaW9uPy50cmFja3NWMj8uaXRlbXM7XG4gICAgaWYgKGFsYnVtVHJhY2tzRGF0YSkge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGFsYnVtVHJhY2tzRGF0YSkge1xuICAgICAgICBjb25zdCB0cmFja1VyaSA9IGl0ZW0/LnRyYWNrPy51cmk7XG4gICAgICAgIGlmICh0cmFja1VyaSkge1xuICAgICAgICAgIGRhdGFNYXAuc2V0KHRyYWNrVXJpLCBpdGVtLnRyYWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwoYmF0Y2hGZXRjaFByb21pc2VzKTtcbiAgcmV0dXJuIGRhdGFNYXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoR3JhcGhRTEZvckFsYnVtVHJhY2tzO1xuIiwgImFzeW5jIGZ1bmN0aW9uIGZldGNoV2ViQVBJRm9yVHJhY2tzKHRyYWNrVVJJcykge1xuICBjb25zdCBkYXRhTWFwID0gbmV3IE1hcCgpO1xuICBjb25zdCB0cmFja0lkc1RvRmV0Y2ggPSBuZXcgTWFwKCk7XG5cbiAgZm9yIChjb25zdCB1cmkgb2YgdHJhY2tVUklzKSB7XG4gICAgaWYgKHVyaSkge1xuICAgICAgdHJhY2tJZHNUb0ZldGNoLnNldCh1cmksIFNwaWNldGlmeS5VUkkuZnJvbVN0cmluZyh1cmkpLmlkKTtcbiAgICB9XG4gIH1cblxuICAvLyB0aGlzIGlzIHRoZSBtYXhpbXVtIG51bWJlciBzcG90aWZ5IGFsbG93cyBpbiBhIHNpbmdsZSByZXF1ZXN0XG4gIGNvbnN0IGJhdGNoU2l6ZSA9IDUwO1xuICBjb25zdCBiYXRjaEZldGNoUHJvbWlzZXMgPSBBcnJheS5mcm9tKHRyYWNrSWRzVG9GZXRjaC52YWx1ZXMoKSlcbiAgICAucmVkdWNlKChiYXRjaGVzLCBpZCwgaSkgPT4ge1xuICAgICAgY29uc3QgYmF0Y2hJbmRleCA9IE1hdGguZmxvb3IoaSAvIGJhdGNoU2l6ZSk7XG4gICAgICBiYXRjaGVzW2JhdGNoSW5kZXhdID0gYmF0Y2hlc1tiYXRjaEluZGV4XSB8fCBbXTtcbiAgICAgIGJhdGNoZXNbYmF0Y2hJbmRleF0ucHVzaChpZCk7XG4gICAgICByZXR1cm4gYmF0Y2hlcztcbiAgICB9LCBbXSlcbiAgICAubWFwKGFzeW5jIChiYXRjaElkcykgPT4ge1xuICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3RyYWNrcz9pZHM9JHtiYXRjaElkcy5qb2luKFwiLFwiKX1gO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTcGljZXRpZnkuQ29zbW9zQXN5bmMuZ2V0KHVybCk7XG4gICAgICBpZiAocmVzcG9uc2U/LnRyYWNrcykge1xuICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHJlc3BvbnNlLnRyYWNrcykge1xuICAgICAgICAgIGNvbnN0IHRyYWNrVXJpID0gdHJhY2s/LnVyaTtcbiAgICAgICAgICBpZiAodHJhY2tVcmkpIHtcbiAgICAgICAgICAgIGRhdGFNYXAuc2V0KHRyYWNrVXJpLCB0cmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwoYmF0Y2hGZXRjaFByb21pc2VzKTtcbiAgcmV0dXJuIGRhdGFNYXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoV2ViQVBJRm9yVHJhY2tzO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmZ1bmN0aW9uIENvbmZpcm1EaWFsb2coe1xuICB0aXRsZVRleHQsXG4gIGRlc2NyaXB0aW9uVGV4dCxcbiAgY2FuY2VsVGV4dCA9IFwiQ2FuY2VsXCIsXG4gIGNvbmZpcm1UZXh0ID0gXCJDb25maXJtXCIsXG4gIG9uQ29uZmlybSxcbiAgb25DbG9zZSxcbiAgb25PcGVuLFxuICBvbk91dHNpZGUsXG4gIGNvbmZpcm1MYWJlbCxcbiAgYWxsb3dIVE1MLFxufSkge1xuICBjb25zdCBDb25maXJtRGlhbG9nID0gUmVhY3QubWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBTcGljZXRpZnkuUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUmVhY3RNb2RhbFBvcnRhbDpsYXN0LW9mLXR5cGVcIik7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlKSBvbk9wZW4/LigpO1xuICAgIH0sIFtzdGF0ZSwgb25PcGVuXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5SZW1vdGVDb25maWdQcm92aWRlclxuICAgICAgICBjb25maWd1cmF0aW9uPXtTcGljZXRpZnkuUGxhdGZvcm0uUmVtb3RlQ29uZmlndXJhdGlvbn1cbiAgICAgID5cbiAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Db25maXJtRGlhbG9nXG4gICAgICAgICAgdGl0bGVUZXh0PXt0aXRsZVRleHR9XG4gICAgICAgICAgZGVzY3JpcHRpb25UZXh0PXtkZXNjcmlwdGlvblRleHR9XG4gICAgICAgICAgY2FuY2VsVGV4dD17Y2FuY2VsVGV4dH1cbiAgICAgICAgICBjb25maXJtVGV4dD17Y29uZmlybVRleHR9XG4gICAgICAgICAgaXNPcGVuPXtzdGF0ZX1cbiAgICAgICAgICBvbk91dHNpZGU9eygpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIG9uT3V0c2lkZT8uKCk7XG4gICAgICAgICAgICBtZW51Py5yZW1vdmUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIG9uQ2xvc2U/LigpO1xuICAgICAgICAgICAgbWVudT8ucmVtb3ZlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgIG9uQ29uZmlybT8uKCk7XG4gICAgICAgICAgICBtZW51Py5yZW1vdmUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNvbmZpcm1MYWJlbD17Y29uZmlybUxhYmVsfVxuICAgICAgICAgIGFsbG93SFRNTD17YWxsb3dIVE1MfVxuICAgICAgICAvPlxuICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuUmVtb3RlQ29uZmlnUHJvdmlkZXI+XG4gICAgKTtcbiAgfSk7XG5cbiAgUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5yZW5kZXIoPENvbmZpcm1EaWFsb2cgLz4pO1xufVxuXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gQ29uZmlybURpYWxvZyh7XG4vLyAgIHRpdGxlVGV4dDogXCJEZWJ1ZyBNZW51XCIsXG4vLyAgIGRlc2NyaXB0aW9uVGV4dDogXCJBcmUgeW91IDxiPnN1cmU8L2I+P1wiLFxuLy8gICBvbk91dHNpZGU6ICgpID0+IHtcbi8vICAgICBTcGljZXRpZnkuc2hvd05vdGlmaWNhdGlvbihcIkNsaWNrZWQgb3V0c2lkZVwiKTtcbi8vICAgfSxcbi8vICAgY29uZmlybVRleHQ6IFwiT2tcIixcbi8vICAgYWxsb3dIVE1MOiB0cnVlLFxuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1EaWFsb2c7XG4iLCAiaW1wb3J0IHsgbWVtbywgdXNlSWQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEljb25zIGZyb20gXCIuL2ljb25zXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZHJvcGRvd24uY3NzXCI7XG5cbmNvbnN0IERyb3Bkb3duID0gbWVtbygoeyB2YWx1ZSwgb3B0aW9ucywgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IHtcbiAgY29uc3QgcG9wb3ZlcklkID0gdXNlSWQoKTtcbiAgY29uc3QgcG9wb3ZlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgYW5jaG9yTmFtZSA9IGAtLWRyb3Bkb3duLWFuY2hvci0ke3BvcG92ZXJJZC5yZXBsYWNlKC86L2csIFwiaWRcIil9YDtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAob3B0aW9uKSA9PiB7XG4gICAgb25DaGFuZ2U/Lih7IHRhcmdldDogeyB2YWx1ZTogb3B0aW9uLnZhbHVlIH0gfSk7XG4gICAgcG9wb3ZlclJlZi5jdXJyZW50Py5oaWRlUG9wb3ZlcigpO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdGVkTGFiZWwgPSBvcHRpb25zLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlID09PSB2YWx1ZSk/LmxhYmVsIHx8IFwiU2VsZWN0Li4uXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duX19idXR0b25cIlxuICAgICAgICBwb3BvdmVydGFyZ2V0PXtwb3BvdmVySWR9XG4gICAgICAgIHBvcG92ZXJ0YXJnZXRhY3Rpb249XCJ0b2dnbGVcIlxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHN0eWxlPXt7IGFuY2hvck5hbWU6IGFuY2hvck5hbWUgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9fdGV4dFwiPntzZWxlY3RlZExhYmVsfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX19hcnJvd1wiPlxuICAgICAgICAgIDxJY29ucy5SZWFjdC5kcm9wZG93biBzaXplPXsxMn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgcG9wb3Zlcj1cImF1dG9cIlxuICAgICAgICBpZD17cG9wb3ZlcklkfVxuICAgICAgICByZWY9e3BvcG92ZXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duX19tZW51XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0b3A6IGBjYWxjKGFuY2hvcigke2FuY2hvck5hbWV9IGJvdHRvbSkgKyA0cHgpYCxcbiAgICAgICAgICBsZWZ0OiBgYW5jaG9yKCR7YW5jaG9yTmFtZX0gbGVmdClgLFxuICAgICAgICAgIHdpZHRoOiBgYW5jaG9yLXNpemUoJHthbmNob3JOYW1lfSB3aWR0aClgLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd25fX29wdGlvbiR7dmFsdWUgPT09IG9wdGlvbi52YWx1ZSA/IFwiIGRyb3Bkb3duX19vcHRpb24tLXNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3Qob3B0aW9uKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIiwgIlxuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgY3NzID0gXCIuZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIH1cXG5cXG4gIC5kcm9wZG93bl9fYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjEpO1xcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1zcGljZS1yZ2ItdGV4dCksIDAuOCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgLmRyb3Bkb3duX19hcnJvdyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRyb3Bkb3duX19tZW51IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3BpY2UtY2FyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi10ZXh0KSwgMC44KTtcXG4gICAgYm9yZGVyOiBzb2xpZCByZ2JhKHZhcigtLXNwaWNlLXJnYi1zdWJ0ZXh0KSwgMC4xKSAxcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG5cXG4gICAgLmRyb3Bkb3duX19vcHRpb24ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAwIDhweDtcXG4gICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXG4gICAgICB9XFxuXFxuICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93bl9fb3B0aW9uLS1zZWxlY3RlZCxcXG4gICAgLmRyb3Bkb3duX19vcHRpb246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWJ1dHRvbik7XFxuICAgIH1cXG4gIH1cXG59XCI7XG4gICAgICAgICAgY29uc3Qgc3R5bGVJZCA9IFwic2hhcmVkLWRyb3Bkb3duXCI7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpKSB7IHJldHVybjsgfVxuICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5pZCA9IHN0eWxlSWQ7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAiLCAiaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc2xpZGVyLmNzc1wiO1xuXG5jb25zdCBTbGlkZXIgPSBtZW1vKFxuICAoeyB2YWx1ZSwgbWluID0gMCwgbWF4LCBzdGVwID0gMSwgZGVmYXVsdFZhbHVlLCBvbkNoYW5nZSwgb25SZWxlYXNlLCBkaXNhYmxlZCA9IGZhbHNlIH0pID0+IHtcbiAgICBjb25zdCBzbGlkZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaXNEcmFnZ2luZyA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICBjb25zdCBjb250cm9sbGVkVmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBtYXggPiBtaW4gPyAoKGNvbnRyb2xsZWRWYWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAxMDAgOiAwO1xuXG4gICAgY29uc3QgaGFuZGxlSW50ZXJhY3Rpb24gPSB1c2VDYWxsYmFjayhcbiAgICAgIChlLCBpc1RvdWNoID0gZmFsc2UpID0+IHtcbiAgICAgICAgaWYgKCFzbGlkZXJSZWYuY3VycmVudCB8fCBkaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJlY3QgPSBzbGlkZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgY2xpZW50WCA9IGlzVG91Y2ggPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WDtcbiAgICAgICAgY29uc3QgbmV3WCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGNsaWVudFggLSByZWN0LmxlZnQsIHJlY3Qud2lkdGgpKTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gKG5ld1ggLyByZWN0LndpZHRoKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICBuZXdWYWx1ZSA9IE1hdGgucm91bmQobmV3VmFsdWUgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICAgIG5ld1ZhbHVlID0gTWF0aC5tYXgobWluLCBNYXRoLm1pbihuZXdWYWx1ZSwgbWF4KSk7XG5cbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgfSxcbiAgICAgIFttaW4sIG1heCwgc3RlcCwgb25DaGFuZ2UsIGRpc2FibGVkXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICAgICAgaXNEcmFnZ2luZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb24oZSwgZmFsc2UpO1xuICAgICAgfSxcbiAgICAgIFtoYW5kbGVJbnRlcmFjdGlvbiwgZGlzYWJsZWRdLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVUb3VjaFN0YXJ0ID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICAgICAgaXNEcmFnZ2luZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb24oZSwgdHJ1ZSk7XG4gICAgICB9LFxuICAgICAgW2hhbmRsZUludGVyYWN0aW9uLCBkaXNhYmxlZF0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBpZiAoaXNEcmFnZ2luZy5jdXJyZW50KSB7XG4gICAgICAgIG9uUmVsZWFzZT8uKCk7XG4gICAgICB9XG4gICAgICBpc0RyYWdnaW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LCBbb25SZWxlYXNlXSk7XG5cbiAgICBjb25zdCBoYW5kbGVUb3VjaEVuZCA9IGhhbmRsZU1vdXNlVXA7XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSB1c2VDYWxsYmFjayhcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZy5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb24oZSwgZmFsc2UpO1xuICAgICAgfSxcbiAgICAgIFtoYW5kbGVJbnRlcmFjdGlvbl0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGUpID0+IHtcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb24oZSwgdHJ1ZSk7XG4gICAgICB9LFxuICAgICAgW2hhbmRsZUludGVyYWN0aW9uXSxcbiAgICApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVUb3VjaEVuZCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVUb3VjaEVuZCk7XG4gICAgICB9O1xuICAgIH0sIFtoYW5kbGVNb3VzZU1vdmUsIGhhbmRsZU1vdXNlVXAsIGhhbmRsZVRvdWNoTW92ZSwgaGFuZGxlVG91Y2hFbmRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3NsaWRlclJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItY29udGFpbmVyXCJcbiAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17aGFuZGxlVG91Y2hTdGFydH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX190cmFja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfX2ZpbGxcIiBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX190aHVtYlwiIHN0eWxlPXt7IGxlZnQ6IGAke3Byb2dyZXNzfSVgIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcbiIsICJcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGNzcyA9IFwiLnNsaWRlciB7XFxuICAtLWZpbGwtY29sb3I6IHZhcigtLXNwaWNlLWJ1dHRvbi1hY3RpdmUsICMxZWQ3NjApO1xcbiAgLS10cmFjay1jb2xvcjogdmFyKC0tc3BpY2UtYnV0dG9uLWRpc2FibGVkLCAjNTM1MzUzKTtcXG4gIC0tdGh1bWItY29sb3I6IHZhcigtLXNwaWNlLXRleHQsICNmZmZmZmYpO1xcbiAgLS10ZXh0LWNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0LCAjYjNiM2IzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gICY6ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgLnNsaWRlcl9fdGh1bWIge1xcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAuc2xpZGVyX19maWxsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWNvbG9yKSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICB9XFxuXFxuICAuc2xpZGVyLXRpbWUge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgbWluLXdpZHRoOiA0MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgfVxcblxcbiAgLnNsaWRlci1jb250YWluZXIge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAuc2xpZGVyX190cmFjayB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYWNrLWNvbG9yKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuXFxuICAgICAgLnNsaWRlcl9fZmlsbCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICB9XFxuXFxuICAgICAgLnNsaWRlcl9fdGh1bWIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICB3aWR0aDogMTJweDtcXG4gICAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iLWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIjtcbiAgICAgICAgICBjb25zdCBzdHlsZUlkID0gXCJzaGFyZWQtc2xpZGVyXCI7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpKSB7IHJldHVybjsgfVxuICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5pZCA9IHN0eWxlSWQ7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAiLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VQbGF5ZXIgPSAodHJhY2tVcmksIHRyYWNrRHVyYXRpb24pID0+IHtcbiAgY29uc3QgW3BsYXllclN0YXRlLCBzZXRQbGF5ZXJTdGF0ZV0gPSB1c2VTdGF0ZShTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLmdldFN0YXRlKCkpO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKHRyYWNrRHVyYXRpb24pO1xuICBjb25zdCBpc1NsaWRlckRyYWdnaW5nID0gdXNlUmVmKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZUxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBuZXdQbGF5ZXJTdGF0ZSA9IGV2ZW50LmRhdGE7XG4gICAgICBzZXRQbGF5ZXJTdGF0ZShuZXdQbGF5ZXJTdGF0ZSk7XG4gICAgICBpZiAobmV3UGxheWVyU3RhdGUuaXRlbT8udXJpID09PSB0cmFja1VyaSkge1xuICAgICAgICBpZiAoIWlzU2xpZGVyRHJhZ2dpbmcuY3VycmVudCkgc2V0UG9zaXRpb24obmV3UGxheWVyU3RhdGUucG9zaXRpb25Bc09mVGltZXN0YW1wKTtcbiAgICAgICAgc2V0RHVyYXRpb24obmV3UGxheWVyU3RhdGUuZHVyYXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChuZXdQbGF5ZXJTdGF0ZS5pdGVtPy51cmkgIT09IHRyYWNrVXJpKSB7XG4gICAgICAgIHNldFBvc2l0aW9uKDApO1xuICAgICAgICBzZXREdXJhdGlvbih0cmFja0R1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLmFkZExpc3RlbmVyKFwidXBkYXRlXCIsIHVwZGF0ZUxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKFwidXBkYXRlXCIsIHVwZGF0ZUxpc3RlbmVyKTtcbiAgICB9O1xuICB9LCBbdHJhY2tVcmksIHRyYWNrRHVyYXRpb25dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlzUGxheWluZ1RoaXNUcmFjayA9IHBsYXllclN0YXRlLml0ZW0/LnVyaSA9PT0gdHJhY2tVcmk7XG4gICAgY29uc3QgaXNQbGF5aW5nQW5kTm90UGF1c2VkID0gaXNQbGF5aW5nVGhpc1RyYWNrICYmICFwbGF5ZXJTdGF0ZS5pc1BhdXNlZDtcblxuICAgIGlmICghaXNQbGF5aW5nQW5kTm90UGF1c2VkKSB7XG4gICAgICBpZiAoIWlzUGxheWluZ1RoaXNUcmFjaykge1xuICAgICAgICBzZXRQb3NpdGlvbigwKTtcbiAgICAgICAgc2V0RHVyYXRpb24odHJhY2tEdXJhdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKCFpc1NsaWRlckRyYWdnaW5nLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPVxuICAgICAgICAgIHBsYXllclN0YXRlLnBvc2l0aW9uQXNPZlRpbWVzdGFtcCArIChEYXRlLm5vdygpIC0gcGxheWVyU3RhdGUudGltZXN0YW1wKTtcbiAgICAgICAgc2V0UG9zaXRpb24obmV3UG9zaXRpb24gPCBwbGF5ZXJTdGF0ZS5kdXJhdGlvbiA/IG5ld1Bvc2l0aW9uIDogcGxheWVyU3RhdGUuZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW3BsYXllclN0YXRlLCB0cmFja1VyaSwgdHJhY2tEdXJhdGlvbl0pO1xuXG4gIGNvbnN0IHRvZ2dsZVBsYXkgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBsYXlpbmdUcmFjayA9IHBsYXllclN0YXRlLml0ZW0/LnVyaTtcbiAgICBpZiAoY3VycmVudFBsYXlpbmdUcmFjayA9PT0gdHJhY2tVcmkpIHtcbiAgICAgIHBsYXllclN0YXRlLmlzUGF1c2VkXG4gICAgICAgID8gU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5yZXN1bWUoKVxuICAgICAgICA6IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGF1c2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5wbGF5KHsgdXJpOiB0cmFja1VyaSB9LCB7fSwge30pO1xuICAgIH1cbiAgfSwgW3BsYXllclN0YXRlLCB0cmFja1VyaV0pO1xuXG4gIGNvbnN0IGhhbmRsZVNsaWRlckNoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdQb3NpdGlvbikgPT4ge1xuICAgIGlzU2xpZGVyRHJhZ2dpbmcuY3VycmVudCA9IHRydWU7XG4gICAgc2V0UG9zaXRpb24obmV3UG9zaXRpb24pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2xpZGVyUmVsZWFzZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoaXNTbGlkZXJEcmFnZ2luZy5jdXJyZW50KSB7XG4gICAgICBjb25zdCBpc1NhbWVUcmFja0luUGxheWVyID0gcGxheWVyU3RhdGUuaXRlbT8udXJpID09PSB0cmFja1VyaTtcblxuICAgICAgaWYgKCFpc1NhbWVUcmFja0luUGxheWVyKSB7XG4gICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGxheSh7IHVyaTogdHJhY2tVcmkgfSwge30sIHt9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5zZWVrVG8ocG9zaXRpb24pO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5zZWVrVG8ocG9zaXRpb24pO1xuICAgICAgfVxuICAgICAgaXNTbGlkZXJEcmFnZ2luZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuICB9LCBbcG9zaXRpb24sIHRyYWNrVXJpLCBwbGF5ZXJTdGF0ZV0pO1xuXG4gIGNvbnN0IGlzUGxheWluZyA9ICFwbGF5ZXJTdGF0ZS5pc1BhdXNlZDtcbiAgY29uc3QgaXNDdXJyZW50bHlQbGF5aW5nVGhpc1RyYWNrID0gaXNQbGF5aW5nICYmIHBsYXllclN0YXRlLml0ZW0/LnVyaSA9PT0gdHJhY2tVcmk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbixcbiAgICBkdXJhdGlvbixcbiAgICBpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2ssXG4gICAgdG9nZ2xlUGxheSxcbiAgICBoYW5kbGVTbGlkZXJDaGFuZ2UsXG4gICAgaGFuZGxlU2xpZGVyUmVsZWFzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBsYXllcjtcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29uZmlybURpYWxvZyBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybURpYWxvZ1wiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pbnB1dFwiO1xuaW1wb3J0IE9wdGlvblJvdyBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvb3B0aW9uUm93XCI7XG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90b2dnbGVcIjtcblxuY29uc3QgREVGQVVMVF9OT1JNQUxJWkVfV09SRFMgPSBbXG4gIFwibGl2ZVwiLFxuICBcInJlbWl4XCIsXG4gIFwibWl4XCIsXG4gIFwiYWNvdXN0aWNcIixcbiAgXCJpbnN0cnVtZW50YWxcIixcbiAgXCJyYWRpb1wiLFxuICBcInZlcnNpb25cIixcbiAgXCJ2ZXJcIixcbiAgXCJlZGl0XCIsXG4gIFwibW9ub1wiLFxuICBcInN0ZXJlb1wiLFxuICBcImRlbHV4ZVwiLFxuICBcImludHJvXCIsXG4gIFwib3V0cm9cIixcbiAgXCJyZW1hc3RlcmVkXCIsXG4gIFwiYm9udXNcIixcbiAgXCJmZWF0XCIsXG4gIFwiZnRcIixcbiAgXCJleHBsaWNpdFwiLFxuICBcImNsZWFuXCIsXG4gIFwicGlhbm9cIixcbiAgXCJndWl0YXJcIixcbiAgXCJjb3ZlclwiLFxuICBcIm9yaWdpbmFsXCIsXG4gIFwiZXh0ZW5kZWRcIixcbiAgXCJhbGJ1bVwiLFxuICBcInNpbmdsZVwiLFxuXTtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUyA9IHtcbiAgZ3JvdXBTZXR0aW5nczoge1xuICAgIGV4YWN0OiB0cnVlLFxuICAgIGlzcmM6IHRydWUsXG4gICAgbGlrZWx5OiB0cnVlLFxuICAgIHBvc3NpYmxlOiB0cnVlLFxuICB9LFxuICBjb25maXJtU2V0dGluZ3M6IHtcbiAgICBleGFjdDogZmFsc2UsXG4gICAgaXNyYzogZmFsc2UsXG4gICAgbGlrZWx5OiB0cnVlLFxuICAgIHBvc3NpYmxlOiB0cnVlLFxuICB9LFxuICBkZWZhdWx0Tm9ybWFsaXplV29yZHM6IERFRkFVTFRfTk9STUFMSVpFX1dPUkRTLFxuICBjdXN0b21Ob3JtYWxpemVXb3JkczogW10sXG59O1xuXG5jb25zdCBsb2FkU2V0dGluZ3MgPSAoKSA9PiB7XG4gIGNvbnN0IHNhdmVkU2V0dGluZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpbmREdXBlVHJhY2tzXCIpO1xuICBpZiAoc2F2ZWRTZXR0aW5ncykge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uoc2F2ZWRTZXR0aW5ncyk7XG4gICAgaWYgKCFwYXJzZWQuZGVmYXVsdE5vcm1hbGl6ZVdvcmRzKSBwYXJzZWQuZGVmYXVsdE5vcm1hbGl6ZVdvcmRzID0gWy4uLkRFRkFVTFRfTk9STUFMSVpFX1dPUkRTXTtcbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG4gIHJldHVybiBERUZBVUxUX1NFVFRJTkdTO1xufTtcblxuY29uc3Qgc2F2ZVNldHRpbmdzID0gKHNldHRpbmdzKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmluZER1cGVUcmFja3NcIiwgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcbiAgcmV0dXJuIGxvYWRTZXR0aW5ncygpO1xufTtcblxuY29uc3QgU2V0dGluZ3NNZW51ID0gKCkgPT4ge1xuICBjb25zdCBbc2V0dGluZ3MsIHNldFNldHRpbmdzXSA9IHVzZVN0YXRlKGxvYWRTZXR0aW5ncygpKTtcbiAgY29uc3QgW25ld1dvcmQsIHNldE5ld1dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlU2V0dGluZ3Moc2V0dGluZ3MpO1xuICB9LCBbc2V0dGluZ3NdKTtcblxuICBjb25zdCByZW5kZXJUb2dnbGVzID0gKHRpdGxlLCBzZXR0aW5nc0tleSwgbGFiZWxzKSA9PiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzX19zZWN0aW9uXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzX19zZWN0aW9uLXRpdGxlXCI+e3RpdGxlfTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1zZXR0aW5nc19fb3B0aW9uc1wiPlxuICAgICAgICB7T2JqZWN0LmVudHJpZXMobGFiZWxzKS5tYXAoKFtrZXksIGRlc2NdKSA9PiAoXG4gICAgICAgICAgPE9wdGlvblJvdyBrZXk9e2tleX0gbmFtZT17YCR7a2V5fS0ke3NldHRpbmdzS2V5fWB9IGRlc2M9e2Rlc2N9PlxuICAgICAgICAgICAgPFRvZ2dsZVxuICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3Nbc2V0dGluZ3NLZXldW2tleV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxuICAgICAgICAgICAgICAgIHNldFNldHRpbmdzKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgIFtzZXR0aW5nc0tleV06IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldltzZXR0aW5nc0tleV0sXG4gICAgICAgICAgICAgICAgICAgIFtrZXldOiAhcHJldltzZXR0aW5nc0tleV1ba2V5XSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9PcHRpb25Sb3c+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xuXG4gIGNvbnN0IGFkZEN1c3RvbVdvcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd29yZCA9IG5ld1dvcmQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF3b3JkKSByZXR1cm47XG4gICAgaWYgKFxuICAgICAgc2V0dGluZ3MuY3VzdG9tTm9ybWFsaXplV29yZHMuaW5jbHVkZXMod29yZCkgfHxcbiAgICAgIHNldHRpbmdzLmRlZmF1bHROb3JtYWxpemVXb3Jkcy5pbmNsdWRlcyh3b3JkKVxuICAgIClcbiAgICAgIHJldHVybjtcbiAgICBzZXRTZXR0aW5ncygocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBjdXN0b21Ob3JtYWxpemVXb3JkczogWy4uLnByZXYuY3VzdG9tTm9ybWFsaXplV29yZHMsIHdvcmRdLFxuICAgIH0pKTtcbiAgICBzZXROZXdXb3JkKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVdvcmQgPSAod29yZCwgaXNEZWZhdWx0KSA9PiB7XG4gICAgc2V0U2V0dGluZ3MoKHByZXYpID0+XG4gICAgICBpc0RlZmF1bHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgZGVmYXVsdE5vcm1hbGl6ZVdvcmRzOiBwcmV2LmRlZmF1bHROb3JtYWxpemVXb3Jkcy5maWx0ZXIoKHcpID0+IHcgIT09IHdvcmQpLFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgY3VzdG9tTm9ybWFsaXplV29yZHM6IHByZXYuY3VzdG9tTm9ybWFsaXplV29yZHMuZmlsdGVyKCh3KSA9PiB3ICE9PSB3b3JkKSxcbiAgICAgICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRTZXR0aW5ncyA9ICgpID0+IHtcbiAgICBDb25maXJtRGlhbG9nKHtcbiAgICAgIHRpdGxlVGV4dDogXCJBcmUgeW91IHN1cmU/XCIsXG4gICAgICBkZXNjcmlwdGlvblRleHQ6IFwiVGhpcyB3aWxsIHJlc2V0IGFsbCBzZXR0aW5ncyB0byBkZWZhdWx0IVwiLFxuICAgICAgY29uZmlybVRleHQ6IFwiUmVzZXRcIixcbiAgICAgIG9uQ29uZmlybTogKCkgPT4gc2V0U2V0dGluZ3MoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShERUZBVUxUX1NFVFRJTkdTKSkpLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFsbFdvcmRzID0gW1xuICAgIC4uLnNldHRpbmdzLmRlZmF1bHROb3JtYWxpemVXb3Jkcy5tYXAoKHdvcmQpID0+ICh7IHdvcmQsIGlzRGVmYXVsdDogdHJ1ZSB9KSksXG4gICAgLi4uc2V0dGluZ3MuY3VzdG9tTm9ybWFsaXplV29yZHMubWFwKCh3b3JkKSA9PiAoeyB3b3JkLCBpc0RlZmF1bHQ6IGZhbHNlIH0pKSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzXCI+XG4gICAgICB7cmVuZGVyVG9nZ2xlcyhcIkR1cGxpY2F0ZSBHcm91cHMgdG8gRGlzcGxheVwiLCBcImdyb3VwU2V0dGluZ3NcIiwge1xuICAgICAgICBleGFjdDogXCJFeGFjdCBEdXBsaWNhdGVzIChTYW1lIFVSSSlcIixcbiAgICAgICAgaXNyYzogXCJJU1JDIER1cGxpY2F0ZXMgKFNhbWUgUmVjb3JkaW5nKVwiLFxuICAgICAgICBsaWtlbHk6IFwiTGlrZWx5IER1cGxpY2F0ZXMgKFNhbWUgTmFtZSlcIixcbiAgICAgICAgcG9zc2libGU6IFwiUG9zc2libGUgRHVwbGljYXRlcyAoU2ltaWxhciBOYW1lKVwiLFxuICAgICAgfSl9XG5cbiAgICAgIHtyZW5kZXJUb2dnbGVzKFwiQ29uZmlybSBCZWZvcmUgRGVsZXRpbmdcIiwgXCJjb25maXJtU2V0dGluZ3NcIiwge1xuICAgICAgICBleGFjdDogXCJFeGFjdCBEdXBsaWNhdGVzXCIsXG4gICAgICAgIGlzcmM6IFwiSVNSQyBEdXBsaWNhdGVzXCIsXG4gICAgICAgIGxpa2VseTogXCJMaWtlbHkgRHVwbGljYXRlc1wiLFxuICAgICAgICBwb3NzaWJsZTogXCJQb3NzaWJsZSBEdXBsaWNhdGVzXCIsXG4gICAgICB9KX1cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzX19zZWN0aW9uXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJkdXBsaWNhdGUtc2V0dGluZ3NfX3NlY3Rpb24tdGl0bGVcIj5Ob3JtYWxpemF0aW9uIFdvcmRzPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIEFkZCBvciByZW1vdmUgd29yZHMgdG8gYmUgaWdub3JlZCB3aGVuIGNvbXBhcmluZyB0cmFjayBuYW1lcyBmb3Igc2ltaWxhcml0eS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8T3B0aW9uUm93IG5hbWU9XCJjdXN0b20td29yZHNcIiBkZXNjPVwiQWRkIGEgd29yZCB0byBub3JtYWxpemF0aW9uIGxpc3RcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtuZXdXb3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdXb3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgd29yZCB0byBub3JtYWxpemVcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBhZGRDdXN0b21Xb3JkKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXthZGRDdXN0b21Xb3JkfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19PlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvT3B0aW9uUm93PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1zZXR0aW5nc19fd29yZHMtbGlzdFwiPlxuICAgICAgICAgIHthbGxXb3Jkcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtc2V0dGluZ3NfX3dvcmRzLXVsXCI+XG4gICAgICAgICAgICAgIHthbGxXb3Jkcy5tYXAoKHsgd29yZCwgaXNEZWZhdWx0IH0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1zZXR0aW5nc19fd29yZC1pdGVtXCIga2V5PXt3b3JkfT5cbiAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzX193b3JkLXJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVdvcmQod29yZCwgaXNEZWZhdWx0KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzX19uby13b3Jkc1wiPk5vIG5vcm1hbGl6YXRpb24gd29yZHM8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1zZXR0aW5nc19fYWN0aW9uc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtc2V0dGluZ3NfX3Jlc2V0XCIgb25DbGljaz17cmVzZXRTZXR0aW5nc30+XG4gICAgICAgICAgUmVzZXQgdG8gRGVmYXVsdHNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzTWVudTtcbiIsICJpbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5wdXQuY3NzXCI7XG5cbmNvbnN0IElucHV0ID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZCB9KSA9PiAoXG4gIDxpbnB1dFxuICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgdmFsdWU9e3ZhbHVlfVxuICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAvPlxuKSk7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwgIlxuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc3QgY3NzID0gXCIuaW5wdXQge1xcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2VsZWN0ZWQtcm93KSwgMC4xKTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi10ZXh0KSwgMC44KTtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAxMjhweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcbiAgJjpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIH1cXG59XCI7XG4gICAgICAgICAgY29uc3Qgc3R5bGVJZCA9IFwic2hhcmVkLWlucHV0XCI7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpKSB7IHJldHVybjsgfVxuICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5pZCA9IHN0eWxlSWQ7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAiLCAiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEluZm9CdXR0b24gZnJvbSBcIi4vaW5mb0J1dHRvblwiO1xuaW1wb3J0IFRpcHB5QnV0dG9uIGZyb20gXCIuL3RpcHB5QnV0dG9uXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvb3B0aW9uUm93LmNzc1wiO1xuXG5jb25zdCBPcHRpb25Sb3cgPSBtZW1vKCh7IG5hbWUsIGRlc2MsIHRpcHB5LCBjaGlsZHJlbiwgcG9wdXBNb2RhbCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVPcHRpb25Sb3dcIiBkYXRhLW5hbWU9e2B0aGVtZToke25hbWV9YH0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZU9wdGlvbkNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWVPcHRpb25EZXNjXCI+e2Rlc2N9PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZU9wdGlvbkNvbnRyb2xcIj5cbiAgICAgIHt0aXBweSAmJiA8VGlwcHlCdXR0b24gdGlwcHk9e3RpcHB5fSAvPn1cbiAgICAgIDxJbmZvQnV0dG9uIG5hbWU9e25hbWV9IHBvcHVwTW9kYWw9e3BvcHVwTW9kYWx9IC8+XG5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pKTtcblxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uUm93O1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29ucyBmcm9tIFwiLi9pY29uc1wiO1xuaW1wb3J0IFBvcHVwTW9kYWwgZnJvbSBcIi4vcG9wdXBNb2RhbFwiO1xuXG5jb25zdCBJbmZvQnV0dG9uID0gbWVtbygoeyBuYW1lLCBwb3B1cE1vZGFsIH0pID0+IHtcbiAgaWYgKCFwb3B1cE1vZGFsKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInRoZW1lT3B0aW9uUG9wdXBCdXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgUG9wdXBNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6IG5hbWUsXG4gICAgICAgICAgY29udGVudDogcG9wdXBNb2RhbCxcbiAgICAgICAgICBpc0xhcmdlOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIHBvcHVwXCJcbiAgICA+XG4gICAgICA8SWNvbnMuUmVhY3QuZWRpdEJ1dHRvbiBzaXplPXsxNn0gLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmZvQnV0dG9uO1xuIiwgImltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29ucyBmcm9tIFwiLi9pY29uc1wiO1xuXG5jb25zdCBUaXBweUJ1dHRvbiA9IG1lbW8oKHsgdGlwcHkgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXIgbGFiZWw9e3RpcHB5fSBwbGFjZW1lbnQ9XCJ0b3BcIiBzaG93RGVsYXk9ezB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZU9wdGlvblRpcHB5XCI+XG4gICAgICAgIDxJY29ucy5SZWFjdC5xdWVzdGlvbk1hcmsgc2l6ZT17MjB9IGZpbGw9XCJ2YXIoLS1zcGljZS1zdWJ0ZXh0KVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlcj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUaXBweUJ1dHRvbjtcbiIsICJcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IGNzcyA9IFwiLnRoZW1lT3B0aW9uUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50aGVtZU9wdGlvbkRlc2Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XFxufVxcblxcbi50aGVtZU9wdGlvbkNvbnRyb2wge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cIjtcbiAgICAgICAgICBjb25zdCBzdHlsZUlkID0gXCJzaGFyZWQtb3B0aW9uUm93XCI7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpKSB7IHJldHVybjsgfVxuICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5pZCA9IHN0eWxlSWQ7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAiLCAiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3RvZ2dsZS5jc3NcIjtcblxuY29uc3QgVG9nZ2xlID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IChcbiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0b2dnbGVcIiBvbkNsaWNrPXtvbkNoYW5nZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVfX2JhY2tncm91bmRcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRvZ2dsZV9fc2xpZGVyJHt2YWx1ZSA/IFwiIHRvZ2dsZV9fc2xpZGVyLS1lbmFibGVkXCIgOiBcIlwifWB9IC8+XG4gICAgPC9zcGFuPlxuICA8L2J1dHRvbj5cbikpO1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGU7XG4iLCAiXG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCBjc3MgPSBcIi50b2dnbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgJjpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIH1cXG5cXG4gIC50b2dnbGVfX2JhY2tncm91bmQge1xcbiAgICB3aWR0aDogNDJweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAmOmhhcygudG9nZ2xlX19zbGlkZXItLWVuYWJsZWQpIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1idXR0b24pO1xcbiAgICB9XFxuXFxuICAgIC50b2dnbGVfX3NsaWRlci0tZW5hYmxlZCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50b2dnbGVfX3NsaWRlciB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLXRleHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgIHRyYW5zaXRpb246IDAuMXMgY3ViaWMtYmV6aWVyKDAuNDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKHZhcigtLXNwaWNlLXJnYi1zaGFkb3cpLCAwLjMpO1xcbiAgfVxcbn1cIjtcbiAgICAgICAgICBjb25zdCBzdHlsZUlkID0gXCJzaGFyZWQtdG9nZ2xlXCI7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpKSB7IHJldHVybjsgfVxuICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5pZCA9IHN0eWxlSWQ7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAiLCAiXG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCBjc3MgPSBcIi5maW5kLWR1cGxpY2F0ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIC5maW5kLWR1cGxpY2F0ZXNfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgLmZpbmQtZHVwbGljYXRlc19faGVhZGVyLWxhYmVsIHtcXG4gICAgICBjb2xvcjogdmFyKC0tc3BpY2UtdGV4dCk7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5maW5kLWR1cGxpY2F0ZXNfX2RldGFpbHMge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG4gICAgY29sb3I6IHZhcigtLXNwaWNlLXRleHQpO1xcbiAgfVxcbn1cXG5cXG4uZHVwbGljYXRlLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BpY2UtcGxheWVyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tc3BpY2UtcmdiLXNlbGVjdGVkLXJvdyksIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcblxcbiAgLmR1cGxpY2F0ZS1ncm91cF9faGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zcGljZS10ZXh0KTtcXG5cXG4gICAgLmR1cGxpY2F0ZS1ncm91cF9faGVhZGluZy1sZW5ndGgge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZjY3Njc0NjtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY1NzU3NjY7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgICAgcGFkZGluZzogMCAxMnB4O1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmR1cGxpY2F0ZS1ncm91cF9fbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC5kdXBsaWNhdGUtZ3JvdXBfX2l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjEpO1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xcblxcbiAgICAmLmR1cGxpY2F0ZS1ncm91cF9faXRlbS0tZXhhY3Qge1xcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmY1YTVhO1xcbiAgICB9XFxuXFxuICAgICYuZHVwbGljYXRlLWdyb3VwX19pdGVtLS1pc3JjIHtcXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmOTA1MDtcXG4gICAgfVxcblxcbiAgICAmLmR1cGxpY2F0ZS1ncm91cF9faXRlbS0tbGlrZWx5IHtcXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogI2VhZWE2NjtcXG4gICAgfVxcblxcbiAgICAmLmR1cGxpY2F0ZS1ncm91cF9faXRlbS0tcG9zc2libGUge1xcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjODBlZjgwO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZHVwbGljYXRlLWdyb3VwX19wbGF5YmFjay1jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcblxcbiAgLmR1cGxpY2F0ZS1ncm91cF9fcGxheWJhY2stYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMzJweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcblxcbiAgICBzdmcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnNsaWRlci10aW1lIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcblxcbiAgLmR1cGxpY2F0ZS1ncm91cF9fZHVwbGljYXRlcy1sYWJlbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1zcGljZS1zdWJ0ZXh0KTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICB9XFxuXFxuICAuZHVwbGljYXRlLWdyb3VwX19kdXBsaWNhdGVzLWxpc3Qge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICB9XFxuXFxuICAuZHVwbGljYXRlLWdyb3VwX19kdXBsaWNhdGUtbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICAuZHVwbGljYXRlLWdyb3VwX19kdXBsaWNhdGUtaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2VsZWN0ZWQtcm93KSwgMC4xKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kdXBsaWNhdGUtZ3JvdXBfX2FjdGlvbnMge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgfVxcblxcbiAgLmR1cGxpY2F0ZS1ncm91cF9fZHVwbGljYXRlLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZHVwbGljYXRlLWdyb3VwX19kdXBsaWNhdGUtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuZHVwbGljYXRlLWdyb3VwX19kZWxldGUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWE1YTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM0ZjRmO1xcbiAgICB9XFxuXFxuICAgICY6YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcyYzJjO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnRyYWNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogdmFyKC0tc3BpY2Utc3VidGV4dCk7XFxuICBmb250LXNpemU6IDAuOWVtO1xcblxcbiAgLnRyYWNrLWRldGFpbHNfX2xpbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG59XFxuXFxuLmR1cGxpY2F0ZS1zZXR0aW5ncyB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIC5kdXBsaWNhdGUtc2V0dGluZ3NfX3NlY3Rpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcblxcbiAgICAuZHVwbGljYXRlLXNldHRpbmdzX19zZWN0aW9uLXRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmR1cGxpY2F0ZS1zZXR0aW5nc19fZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gIH1cXG5cXG4gIC5kdXBsaWNhdGUtc2V0dGluZ3NfX29wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdhcDogMTJweDtcXG4gIH1cXG5cXG4gIC5kdXBsaWNhdGUtc2V0dGluZ3NfX29wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgfVxcblxcbiAgLmR1cGxpY2F0ZS1zZXR0aW5nc19fd29yZHMtbGlzdCB7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcblxcbiAgICAuZHVwbGljYXRlLXNldHRpbmdzX19uby13b3JkcyB7XFxuICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICBvcGFjaXR5OiAwLjc7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kdXBsaWNhdGUtc2V0dGluZ3NfX3dvcmRzLXVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLmR1cGxpY2F0ZS1zZXR0aW5nc19fd29yZC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG5cXG4gICAgLmR1cGxpY2F0ZS1zZXR0aW5nc19fd29yZC1yZW1vdmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjVhNWE7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzNGY0ZjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kdXBsaWNhdGUtc2V0dGluZ3NfX2FjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcblxcbiAgICAuZHVwbGljYXRlLXNldHRpbmdzX19yZXNldCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDUwLCA1MCwgMC4zKTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNTAsIDUwLCAwLjYpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIjtcbiAgICAgICAgICBjb25zdCBzdHlsZUlkID0gXCJmaW5kRHVwZVRyYWNrcy1zdHlsZXNcIjtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHN0eWxlLmlkID0gc3R5bGVJZDtcbiAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGNzcztcbiAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICIsICJpbXBvcnQgcGFyc2VQcm9wcyBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzXCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb25zXCI7XG5pbXBvcnQgUG9wdXBNb2RhbCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvcG9wdXBNb2RhbFwiO1xuaW1wb3J0IFBsYXlsaXN0RHVwbGljYXRlRmluZGVyIGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBTZXR0aW5nc01lbnUgZnJvbSBcIi4vc2V0dGluZ3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG4vLyBhZGQgYSBpZ25vcmUgYnV0dG9uIHRvIG1lbnUgc28gcmVtb3ZlZCBmcm9tIGR1cGxpY2F0ZSBsaXN0XG5cbmNvbnN0IHNob3dEdXBsaWNhdGVGaW5kZXJNb2RhbCA9IChzZWxlY3RlZFBsYXlsaXN0LCBpbml0aWFsVmlldyA9IFwibWFpblwiKSA9PiB7XG4gIGNvbnN0IHJlbmRlck1vZGFsID0gKHZpZXcpID0+IHtcbiAgICBjb25zdCBpc1NldHRpbmdzID0gdmlldyA9PT0gXCJzZXR0aW5nc1wiO1xuICAgIFBvcHVwTW9kYWwoe1xuICAgICAgdGl0bGU6IGlzU2V0dGluZ3MgPyBcIkZpbmQgRHVwbGljYXRlcyBTZXR0aW5nc1wiIDogXCJGaW5kIER1cGxpY2F0ZXNcIixcbiAgICAgIGNvbnRlbnQ6IGlzU2V0dGluZ3MgPyAoXG4gICAgICAgIDxTZXR0aW5nc01lbnUgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQbGF5bGlzdER1cGxpY2F0ZUZpbmRlciBzZWxlY3RlZFBsYXlsaXN0PXtzZWxlY3RlZFBsYXlsaXN0fSAvPlxuICAgICAgKSxcbiAgICAgIGlzTGFyZ2U6IHRydWUsXG4gICAgICBidXR0b25zOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlclxuICAgICAgICAgICAgbGFiZWw9e2lzU2V0dGluZ3MgPyBcIkJhY2sgdG8gRHVwbGljYXRlc1wiIDogXCJTZXR0aW5nc1wifVxuICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vZGFsX19idXR0b24gbW9kYWxfX2J1dHRvbi0tJHtpc1NldHRpbmdzID8gXCJiYWNrXCIgOiBcInNldHRpbmdzXCJ9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVuZGVyTW9kYWwoaXNTZXR0aW5ncyA/IFwibWFpblwiIDogXCJzZXR0aW5nc1wiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2lzU2V0dGluZ3MgPyAoXG4gICAgICAgICAgICAgICAgPEljb25zLlJlYWN0LmR1cGxpY2F0ZSBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8SWNvbnMuUmVhY3Quc2V0dGluZ3Mgc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L1NwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlcj5cbiAgICAgICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyIGxhYmVsPVwiR2l0SHViXCIgcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsX19idXR0b24gbW9kYWxfX2J1dHRvbi0tZ2l0aHViXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vdmVyeWJvcmluZ2h3bC9zcGljZXRpZnktZXh0ZW5zaW9uc1wiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25zLlJlYWN0LmdpdGh1YiBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyPlxuICAgICAgICA8Lz5cbiAgICAgICksXG4gICAgfSk7XG4gIH07XG4gIHJlbmRlck1vZGFsKGluaXRpYWxWaWV3KTtcbn07XG5cbmNvbnN0IGZpbmREdXBsaWNhdGVzTWVudUl0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIkZpbmQgRHVwbGljYXRlc1wiLFxuICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC5kdXBsaWNhdGUsXG4gIG9uQ2xpY2s6IGFzeW5jIChjb250ZXh0LCBpdGVtLCBldmVudCkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlUHJvcHMoY29udGV4dC5wcm9wcyk7XG4gICAgY29uc3QgdXJpID0gcGFyc2VkLnVyaTtcbiAgICBjb25zdCBuYW1lID0gcGFyc2VkLm5hbWU7XG4gICAgLy8gc29tZXRpbWVzIHRoZSBuYW1lIGlzIG5vdCB0aGVyZSBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIG1ldGFkYXRhXG4gICAgY29uc3Qgc2VsZWN0ZWRQbGF5bGlzdCA9IHtcbiAgICAgIHVyaTogdXJpLFxuICAgICAgbmFtZTogbmFtZSB8fCAoYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXlsaXN0QVBJLmdldE1ldGFkYXRhKHVyaSkpPy5uYW1lLFxuICAgIH07XG4gICAgc2hvd0R1cGxpY2F0ZUZpbmRlck1vZGFsKHNlbGVjdGVkUGxheWxpc3QpO1xuICB9LFxuICBzaG91bGRBZGQ6IChwcm9wcywgdHJpZ2dlciwgdGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VQcm9wcyhwcm9wcyk7XG4gICAgY29uc3QgdHlwZSA9IFNwaWNldGlmeS5VUkkuZnJvbShwYXJzZWQudXJpKT8udHlwZTtcbiAgICByZXR1cm4gdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLlBMQVlMSVNUIHx8IHR5cGUgPT09IFNwaWNldGlmeS5VUkkuVHlwZS5QTEFZTElTVF9WMjtcbiAgfSxcbn0pO1xuXG5maW5kRHVwbGljYXRlc01lbnVJdGVtLnJlZ2lzdGVyKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVSxVQUFVO0FBQUE7QUFBQTs7O0FDQTNCO0FBQUE7QUFBQSxXQUFPLFVBQVUsVUFBVTtBQUFBO0FBQUE7OztBQ0EzQjtBQUFBO0FBQUEsV0FBTyxVQUFVLFVBQVU7QUFBQTtBQUFBOzs7QUNBM0IsU0FBUyxXQUFXLE9BQU87QUFDekIsTUFBSSxDQUFDLE1BQU8sUUFBTyxDQUFDO0FBRXBCLFFBQU0sU0FBUyxDQUFDO0FBRWhCLFFBQU0sYUFBYSxDQUFDLFFBQVEsV0FBVztBQUNyQyxRQUFJLENBQUMsVUFBVSxPQUFPLFdBQVcsU0FBVTtBQUMzQyxlQUFXLE9BQU8sUUFBUTtBQUN4QixVQUFJLE9BQU8sVUFBVSxlQUFlLEtBQUssUUFBUSxHQUFHLEdBQUc7QUFDckQsWUFBSSxPQUFPLEdBQUcsTUFBTSxRQUFXO0FBQzdCLGlCQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUc7QUFBQSxRQUMxQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLGFBQVcsT0FBTyxNQUFNO0FBQ3hCLGFBQVcsTUFBTSxNQUFNLE1BQU07QUFDN0IsYUFBVyxNQUFNLFdBQVcsTUFBTTtBQUVsQyxTQUFPO0FBQ1Q7QUFFQSxJQUFPLHFCQUFROzs7QUNxQlQ7QUE1Q04sSUFBTSxRQUFRO0FBQUE7QUFBQSxFQUVaLFlBQ0U7QUFBQTtBQUFBLEVBRUYsVUFDRTtBQUFBO0FBQUEsRUFFRixRQUNFO0FBQUE7QUFBQSxFQUVGLE9BQ0U7QUFBQTtBQUFBLEVBRUYsU0FDRTtBQUFBO0FBQUEsRUFFRixNQUFNO0FBQUE7QUFBQSxFQUVOLGNBQ0U7QUFBQTtBQUFBLEVBRUYsVUFDRTtBQUFBO0FBQUEsRUFFRixTQUNFO0FBQUE7QUFBQSxFQUVGLFdBQ0U7QUFBQTtBQUFBLEVBRUYsVUFDRTtBQUFBO0FBQUEsRUFFRixlQUNFO0FBQUEsRUFDRixNQUFNO0FBQUEsRUFDTixPQUNFO0FBQ0o7QUFFQSxJQUFNLGlCQUFpQixDQUFDLE1BQU0sY0FBYyxPQUFPO0FBQ2pELFNBQU8sQ0FBQyxFQUFFLE9BQU8sYUFBYSxPQUFPLGVBQWUsTUFDbEQsNENBQUMsU0FBSSxTQUFTLE9BQU8sV0FBVyxJQUFJLFdBQVcsSUFBSSxPQUFPLE1BQU0sUUFBUSxNQUFNLE1BQzVFLHNEQUFDLFVBQUssR0FBRyxNQUFNLEdBQ2pCO0FBRUo7QUFFQSxNQUFNLFFBQVE7QUFBQSxFQUNaLFlBQVksZUFBZSxNQUFNLFlBQVksRUFBRTtBQUFBLEVBQy9DLFVBQVUsZUFBZSxNQUFNLFVBQVUsRUFBRTtBQUFBLEVBQzNDLFFBQVEsZUFBZSxNQUFNLFFBQVEsRUFBRTtBQUFBLEVBQ3ZDLE9BQU8sZUFBZSxNQUFNLE9BQU8sRUFBRTtBQUFBLEVBQ3JDLFNBQVMsZUFBZSxNQUFNLFNBQVMsRUFBRTtBQUFBLEVBQ3pDLE1BQU0sZUFBZSxNQUFNLE1BQU0sRUFBRTtBQUFBLEVBQ25DLGNBQWMsZUFBZSxNQUFNLGNBQWMsRUFBRTtBQUFBLEVBQ25ELFVBQVUsZUFBZSxNQUFNLFVBQVUsRUFBRTtBQUFBLEVBQzNDLFNBQVMsZUFBZSxNQUFNLFNBQVMsRUFBRTtBQUFBLEVBQ3pDLFdBQVcsZUFBZSxNQUFNLFdBQVcsRUFBRTtBQUFBLEVBQzdDLFVBQVUsZUFBZSxNQUFNLFVBQVUsRUFBRTtBQUFBLEVBQzNDLGVBQWUsZUFBZSxNQUFNLGVBQWUsRUFBRTtBQUFBLEVBQ3JELE1BQU0sZUFBZSxNQUFNLE1BQU0sRUFBRTtBQUFBLEVBQ25DLE9BQU8sZUFBZSxNQUFNLE9BQU8sRUFBRTtBQUN2QztBQUVBLE1BQU0sT0FBTztBQUFBLEVBQ1gsWUFBWSxZQUFZLE1BQU0sVUFBVTtBQUFBLEVBQ3hDLFVBQVUsWUFBWSxNQUFNLFFBQVE7QUFBQSxFQUNwQyxRQUFRLFlBQVksTUFBTSxNQUFNO0FBQUEsRUFDaEMsT0FBTyxZQUFZLE1BQU0sS0FBSztBQUFBLEVBQzlCLFNBQVMsWUFBWSxNQUFNLE9BQU87QUFBQSxFQUNsQyxNQUFNLFlBQVksTUFBTSxJQUFJO0FBQUEsRUFDNUIsY0FBYyxZQUFZLE1BQU0sWUFBWTtBQUFBLEVBQzVDLFVBQVUsWUFBWSxNQUFNLFFBQVE7QUFBQSxFQUNwQyxTQUFTLFlBQVksTUFBTSxPQUFPO0FBQUEsRUFDbEMsV0FBVyxZQUFZLE1BQU0sU0FBUztBQUFBLEVBQ3RDLFVBQVUsWUFBWSxNQUFNLFFBQVE7QUFBQSxFQUNwQyxlQUFlLFlBQVksTUFBTSxhQUFhO0FBQUEsRUFDOUMsTUFBTSxZQUFZLE1BQU0sSUFBSTtBQUFBLEVBQzVCLE9BQU8sWUFBWSxNQUFNLEtBQUs7QUFDaEM7QUFlQSxJQUFPLGdCQUFROzs7QUNoR2YsbUJBQTRCO0FBQzVCLHVCQUFxQjs7O0NDQVosV0FBVztBQUNWLFFBQU0sTUFBTTtBQUNaLFFBQU0sVUFBVTtBQUNoQixNQUFJLFNBQVMsZUFBZSxPQUFPLEdBQUc7QUFBRTtBQUFBLEVBQVE7QUFDaEQsUUFBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLFFBQU0sS0FBSztBQUNYLFFBQU0sY0FBYztBQUNwQixXQUFTLEtBQUssWUFBWSxLQUFLO0FBQ2pDLEdBQUc7OztBRDBDQyxJQUFBQSxzQkFBQTtBQTlDWixJQUFJLGlCQUFpQjtBQUNyQixJQUFJLFlBQVk7QUFFaEIsSUFBTSxhQUFhLE1BQU07QUFDdkIsTUFBSSxhQUFhLGdCQUFnQjtBQUMvQixjQUFVLFFBQVE7QUFDbEIsbUJBQWUsT0FBTztBQUN0QixhQUFTLEtBQUssTUFBTSxXQUFXO0FBQy9CLGFBQVMsb0JBQW9CLFdBQVcsWUFBWTtBQUNwRCxhQUFTLG9CQUFvQixhQUFhLGtCQUFrQjtBQUM1RCxxQkFBaUI7QUFDakIsZ0JBQVk7QUFBQSxFQUNkO0FBQ0Y7QUFFQSxJQUFNLGVBQWUsQ0FBQyxVQUFVO0FBQzlCLE1BQUksTUFBTSxRQUFRLFVBQVU7QUFDMUIsZUFBVztBQUFBLEVBQ2I7QUFDRjtBQUVBLElBQU0scUJBQXFCLENBQUMsVUFBVTtBQUNwQyxNQUFJLE1BQU0sT0FBTyxVQUFVLFNBQVMsZUFBZSxHQUFHO0FBQ3BELGVBQVc7QUFBQSxFQUNiO0FBQ0Y7QUFFQSxJQUFNLGFBQWEsQ0FBQyxFQUFFLFFBQVEsSUFBSSxTQUFTLFVBQVUsTUFBTSxVQUFVLE9BQU8sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNO0FBQy9GLG1CQUFpQixTQUFTLGVBQWUsYUFBYTtBQUN0RCxNQUFJLENBQUMsZ0JBQWdCO0FBQ25CLHFCQUFpQixTQUFTLGNBQWMsYUFBYTtBQUNyRCxtQkFBZSxLQUFLO0FBQ3BCLGFBQVMsS0FBSyxZQUFZLGNBQWM7QUFBQSxFQUMxQztBQUVBLGNBQVksaUJBQUFDLFFBQVMsV0FBVyxjQUFjO0FBQzlDLFdBQVMsS0FBSyxNQUFNLFdBQVc7QUFFL0IsV0FBUyxpQkFBaUIsV0FBVyxZQUFZO0FBQ2pELFdBQVMsaUJBQWlCLGFBQWEsa0JBQWtCO0FBRXpELFFBQU0scUJBQWlCLG1CQUFLLE1BQzFCLDZDQUFDLFNBQUksV0FBVSxpQkFDYix1REFBQyxTQUFJLFdBQVUsU0FDYix3REFBQyxTQUFJLFdBQVcsbUJBQW1CLFVBQVUsNkJBQTZCLEVBQUUsSUFDMUU7QUFBQSxrREFBQyxTQUFJLFdBQVUsaUJBQ2I7QUFBQSxvREFBQyxTQUFJLFdBQVUseUJBQ2I7QUFBQSxxREFBQyxTQUFJLFdBQVUsZUFBZSxnQkFBSztBQUFBLFFBQ25DLDZDQUFDLFFBQUcsV0FBVSxnQkFBZ0IsaUJBQU07QUFBQSxTQUN0QztBQUFBLE1BQ0EsOENBQUMsU0FBSSxXQUFVLDBCQUNaO0FBQUE7QUFBQSxRQUNELDZDQUFDLFVBQVUsZUFBZSxnQkFBekIsRUFBd0MsT0FBTSxTQUFRLFdBQVUsT0FDL0QsdURBQUMsWUFBTyxXQUFVLHNDQUFxQyxTQUFTLE1BQU0sV0FBVyxHQUMvRSx1REFBQyxjQUFNLE1BQU0sT0FBWixFQUFrQixNQUFNLElBQUksR0FDL0IsR0FDRjtBQUFBLFNBQ0Y7QUFBQSxPQUNGO0FBQUEsSUFDQSw2Q0FBQyxTQUFJLFdBQVUsa0JBQ1osdUJBQUFDLFFBQU0sZUFBZSxPQUFPLElBQUksVUFBVSxhQUFBQSxRQUFNLGNBQWMsT0FBTyxHQUN4RTtBQUFBLEtBQ0YsR0FDRixHQUNGLENBQ0Q7QUFFRCxZQUFVLE9BQU8sNkNBQUMsa0JBQWUsQ0FBRTtBQUNyQztBQUVBLFdBQVcsT0FBTztBQUVsQixJQUFPLHFCQUFROzs7QUU1RWYsSUFBQUMsaUJBQStEO0FBRC9ELE9BQU8sV0FBVzs7O0FDQWxCLGVBQWUsdUJBQXVCO0FBQ3BDLFFBQU0sV0FBVyxNQUFNLFVBQVUsU0FBUyxXQUFXLFlBQVk7QUFBQSxJQUMvRCxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsRUFDZixDQUFDO0FBRUQsU0FBTyxTQUFTO0FBQ2xCO0FBRUEsSUFBTyxrQ0FBUTs7O0FDVmYsZUFBZSx1QkFBdUIsYUFBYTtBQUNqRCxRQUFNLFdBQVcsTUFBTSxVQUFVLFNBQVMsWUFBWSxZQUFZLGFBQWE7QUFBQSxJQUM3RSxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsRUFDVCxDQUFDO0FBRUQsU0FBTztBQUFBLElBQ0wsT0FBTyxTQUFTO0FBQUEsRUFDbEI7QUFDRjtBQUVBLElBQU8saUNBQVE7OztBQ1hmLGVBQWUsMkJBQTJCLFdBQVc7QUFDbkQsUUFBTSxVQUFVLG9CQUFJLElBQUk7QUFFeEIsUUFBTSxxQkFBcUIsTUFBTSxLQUFLLFNBQVMsRUFBRSxJQUFJLE9BQU8sYUFBYTtBQUN2RSxVQUFNLFdBQVcsTUFBTSxVQUFVLFNBQVM7QUFBQSxNQUN4QyxVQUFVLFFBQVEsWUFBWTtBQUFBLE1BQzlCO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxRQUFRLFVBQVUsT0FBTyxVQUFVO0FBQUEsUUFDbkMsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQ0EsVUFBTSxrQkFBa0IsVUFBVSxNQUFNLFlBQVksVUFBVTtBQUM5RCxRQUFJLGlCQUFpQjtBQUNuQixpQkFBVyxRQUFRLGlCQUFpQjtBQUNsQyxjQUFNLFdBQVcsTUFBTSxPQUFPO0FBQzlCLFlBQUksVUFBVTtBQUNaLGtCQUFRLElBQUksVUFBVSxLQUFLLEtBQUs7QUFBQSxRQUNsQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBRUQsUUFBTSxRQUFRLElBQUksa0JBQWtCO0FBQ3BDLFNBQU87QUFDVDtBQUVBLElBQU8scUNBQVE7OztBQzVCZixlQUFlLHFCQUFxQixXQUFXO0FBQzdDLFFBQU0sVUFBVSxvQkFBSSxJQUFJO0FBQ3hCLFFBQU0sa0JBQWtCLG9CQUFJLElBQUk7QUFFaEMsYUFBVyxPQUFPLFdBQVc7QUFDM0IsUUFBSSxLQUFLO0FBQ1Asc0JBQWdCLElBQUksS0FBSyxVQUFVLElBQUksV0FBVyxHQUFHLEVBQUUsRUFBRTtBQUFBLElBQzNEO0FBQUEsRUFDRjtBQUdBLFFBQU0sWUFBWTtBQUNsQixRQUFNLHFCQUFxQixNQUFNLEtBQUssZ0JBQWdCLE9BQU8sQ0FBQyxFQUMzRCxPQUFPLENBQUMsU0FBUyxJQUFJLE1BQU07QUFDMUIsVUFBTSxhQUFhLEtBQUssTUFBTSxJQUFJLFNBQVM7QUFDM0MsWUFBUSxVQUFVLElBQUksUUFBUSxVQUFVLEtBQUssQ0FBQztBQUM5QyxZQUFRLFVBQVUsRUFBRSxLQUFLLEVBQUU7QUFDM0IsV0FBTztBQUFBLEVBQ1QsR0FBRyxDQUFDLENBQUMsRUFDSixJQUFJLE9BQU8sYUFBYTtBQUN2QixVQUFNLE1BQU0seUNBQXlDLFNBQVMsS0FBSyxHQUFHLENBQUM7QUFDdkUsVUFBTSxXQUFXLE1BQU0sVUFBVSxZQUFZLElBQUksR0FBRztBQUNwRCxRQUFJLFVBQVUsUUFBUTtBQUNwQixpQkFBVyxTQUFTLFNBQVMsUUFBUTtBQUNuQyxjQUFNLFdBQVcsT0FBTztBQUN4QixZQUFJLFVBQVU7QUFDWixrQkFBUSxJQUFJLFVBQVUsS0FBSztBQUFBLFFBQzdCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFFSCxRQUFNLFFBQVEsSUFBSSxrQkFBa0I7QUFDcEMsU0FBTztBQUNUO0FBRUEsSUFBTywrQkFBUTs7O0FDcENmLElBQUFDLGdCQUFrQjtBQUNsQixJQUFBQyxvQkFBcUI7QUEwQmIsSUFBQUMsc0JBQUE7QUF4QlIsU0FBUyxjQUFjO0FBQUEsRUFDckI7QUFBQSxFQUNBO0FBQUEsRUFDQSxhQUFhO0FBQUEsRUFDYixjQUFjO0FBQUEsRUFDZDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0YsR0FBRztBQUNELFFBQU1DLGlCQUFnQixjQUFBQyxRQUFNLEtBQUssTUFBTTtBQUNyQyxVQUFNLENBQUMsT0FBTyxRQUFRLElBQUksVUFBVSxNQUFNLFNBQVMsSUFBSTtBQUN2RCxVQUFNLE9BQU8sU0FBUyxjQUFjLGdDQUFnQztBQUVwRSxrQkFBQUEsUUFBTSxVQUFVLE1BQU07QUFDcEIsVUFBSSxNQUFPLFVBQVM7QUFBQSxJQUN0QixHQUFHLENBQUMsT0FBTyxNQUFNLENBQUM7QUFFbEIsV0FDRTtBQUFBLE1BQUMsVUFBVSxlQUFlO0FBQUEsTUFBekI7QUFBQSxRQUNDLGVBQWUsVUFBVSxTQUFTO0FBQUEsUUFFbEM7QUFBQSxVQUFDLFVBQVUsZUFBZTtBQUFBLFVBQXpCO0FBQUEsWUFDQztBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0EsUUFBUTtBQUFBLFlBQ1IsV0FBVyxNQUFNO0FBQ2YsdUJBQVMsS0FBSztBQUNkLDBCQUFZO0FBQ1osb0JBQU0sT0FBTztBQUFBLFlBQ2Y7QUFBQSxZQUNBLFNBQVMsTUFBTTtBQUNiLHVCQUFTLEtBQUs7QUFDZCx3QkFBVTtBQUNWLG9CQUFNLE9BQU87QUFBQSxZQUNmO0FBQUEsWUFDQSxXQUFXLE1BQU07QUFDZix1QkFBUyxLQUFLO0FBQ2QsMEJBQVk7QUFDWixvQkFBTSxPQUFPO0FBQUEsWUFDZjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUE7QUFBQSxRQUNGO0FBQUE7QUFBQSxJQUNGO0FBQUEsRUFFSixDQUFDO0FBRUQsb0JBQUFDLFFBQVMsV0FBVyxTQUFTLGNBQWMsS0FBSyxDQUFDLEVBQUUsT0FBTyw2Q0FBQ0YsZ0JBQUEsRUFBYyxDQUFFO0FBQzdFO0FBYUEsSUFBTyx3QkFBUTs7O0FDckVmLElBQUFHLGdCQUFvQzs7O0NDQzNCLFdBQVc7QUFDVixRQUFNLE1BQU07QUFDWixRQUFNLFVBQVU7QUFDaEIsTUFBSSxTQUFTLGVBQWUsT0FBTyxHQUFHO0FBQUU7QUFBQSxFQUFRO0FBQ2hELFFBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxRQUFNLEtBQUs7QUFDWCxRQUFNLGNBQWM7QUFDcEIsV0FBUyxLQUFLLFlBQVksS0FBSztBQUNqQyxHQUFHOzs7QURTTCxJQUFBQyxzQkFBQTtBQWROLElBQU0sZUFBVyxvQkFBSyxDQUFDLEVBQUUsT0FBTyxTQUFTLFVBQVUsU0FBUyxNQUFNO0FBQ2hFLFFBQU0sZ0JBQVkscUJBQU07QUFDeEIsUUFBTSxpQkFBYSxzQkFBTyxJQUFJO0FBQzlCLFFBQU0sYUFBYSxxQkFBcUIsVUFBVSxRQUFRLE1BQU0sSUFBSSxDQUFDO0FBRXJFLFFBQU0sZUFBZSxDQUFDLFdBQVc7QUFDL0IsZUFBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLE9BQU8sTUFBTSxFQUFFLENBQUM7QUFDOUMsZUFBVyxTQUFTLFlBQVk7QUFBQSxFQUNsQztBQUVBLFFBQU0sZ0JBQWdCLFFBQVEsS0FBSyxDQUFDLFFBQVEsSUFBSSxVQUFVLEtBQUssR0FBRyxTQUFTO0FBRTNFLFNBQ0UsOENBQUMsU0FBSSxXQUFVLFlBQ2I7QUFBQTtBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsV0FBVTtBQUFBLFFBQ1YsZUFBZTtBQUFBLFFBQ2YscUJBQW9CO0FBQUEsUUFDcEI7QUFBQSxRQUNBLE9BQU8sRUFBRSxXQUF1QjtBQUFBLFFBRWhDO0FBQUEsdURBQUMsU0FBSSxXQUFVLGtCQUFrQix5QkFBYztBQUFBLFVBQy9DLDZDQUFDLFNBQUksV0FBVSxtQkFDYix1REFBQyxjQUFNLE1BQU0sVUFBWixFQUFxQixNQUFNLElBQUksR0FDbEM7QUFBQTtBQUFBO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLFNBQVE7QUFBQSxRQUNSLElBQUk7QUFBQSxRQUNKLEtBQUs7QUFBQSxRQUNMLFdBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxVQUNMLEtBQUssZUFBZSxVQUFVO0FBQUEsVUFDOUIsTUFBTSxVQUFVLFVBQVU7QUFBQSxVQUMxQixPQUFPLGVBQWUsVUFBVTtBQUFBLFFBQ2xDO0FBQUEsUUFFQyxrQkFBUSxJQUFJLENBQUMsV0FDWjtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBRUMsV0FBVyxtQkFBbUIsVUFBVSxPQUFPLFFBQVEsZ0NBQWdDLEVBQUU7QUFBQSxZQUN6RixTQUFTLE1BQU0sYUFBYSxNQUFNO0FBQUEsWUFFakMsaUJBQU87QUFBQTtBQUFBLFVBSkgsT0FBTztBQUFBLFFBS2QsQ0FDRDtBQUFBO0FBQUEsSUFDSDtBQUFBLEtBQ0Y7QUFFSixDQUFDO0FBRUQsSUFBTyxtQkFBUTs7O0FFdkRmLElBQUFDLGdCQUFxRDs7O0NDQzVDLFdBQVc7QUFDVixRQUFNLE1BQU07QUFDWixRQUFNLFVBQVU7QUFDaEIsTUFBSSxTQUFTLGVBQWUsT0FBTyxHQUFHO0FBQUU7QUFBQSxFQUFRO0FBQ2hELFFBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxRQUFNLEtBQUs7QUFDWCxRQUFNLGNBQWM7QUFDcEIsV0FBUyxLQUFLLFlBQVksS0FBSztBQUNqQyxHQUFHOzs7QURvRkQsSUFBQUMsc0JBQUE7QUExRlYsSUFBTSxhQUFTO0FBQUEsRUFDYixDQUFDLEVBQUUsT0FBTyxNQUFNLEdBQUcsS0FBSyxPQUFPLEdBQUcsY0FBYyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU07QUFDMUYsVUFBTSxnQkFBWSxzQkFBTyxJQUFJO0FBQzdCLFVBQU0saUJBQWEsc0JBQU8sS0FBSztBQUUvQixVQUFNLGtCQUFrQixVQUFVLFNBQVksUUFBUTtBQUN0RCxVQUFNLFdBQVcsTUFBTSxPQUFRLGtCQUFrQixRQUFRLE1BQU0sT0FBUSxNQUFNO0FBRTdFLFVBQU0sd0JBQW9CO0FBQUEsTUFDeEIsQ0FBQyxHQUFHLFVBQVUsVUFBVTtBQUN0QixZQUFJLENBQUMsVUFBVSxXQUFXLFNBQVU7QUFFcEMsY0FBTSxPQUFPLFVBQVUsUUFBUSxzQkFBc0I7QUFDckQsY0FBTSxVQUFVLFVBQVUsRUFBRSxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUU7QUFDbkQsY0FBTSxPQUFPLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssQ0FBQztBQUNsRSxZQUFJLFdBQVksT0FBTyxLQUFLLFNBQVUsTUFBTSxPQUFPO0FBQ25ELG1CQUFXLEtBQUssTUFBTSxXQUFXLElBQUksSUFBSTtBQUN6QyxtQkFBVyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksVUFBVSxHQUFHLENBQUM7QUFFaEQsaUJBQVMsUUFBUTtBQUFBLE1BQ25CO0FBQUEsTUFDQSxDQUFDLEtBQUssS0FBSyxNQUFNLFVBQVUsUUFBUTtBQUFBLElBQ3JDO0FBRUEsVUFBTSxzQkFBa0I7QUFBQSxNQUN0QixDQUFDLE1BQU07QUFDTCxZQUFJLFNBQVU7QUFDZCxtQkFBVyxVQUFVO0FBQ3JCLDBCQUFrQixHQUFHLEtBQUs7QUFBQSxNQUM1QjtBQUFBLE1BQ0EsQ0FBQyxtQkFBbUIsUUFBUTtBQUFBLElBQzlCO0FBRUEsVUFBTSx1QkFBbUI7QUFBQSxNQUN2QixDQUFDLE1BQU07QUFDTCxZQUFJLFNBQVU7QUFDZCxtQkFBVyxVQUFVO0FBQ3JCLDBCQUFrQixHQUFHLElBQUk7QUFBQSxNQUMzQjtBQUFBLE1BQ0EsQ0FBQyxtQkFBbUIsUUFBUTtBQUFBLElBQzlCO0FBRUEsVUFBTSxvQkFBZ0IsMkJBQVksTUFBTTtBQUN0QyxVQUFJLFdBQVcsU0FBUztBQUN0QixvQkFBWTtBQUFBLE1BQ2Q7QUFDQSxpQkFBVyxVQUFVO0FBQUEsSUFDdkIsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUVkLFVBQU0saUJBQWlCO0FBRXZCLFVBQU0sc0JBQWtCO0FBQUEsTUFDdEIsQ0FBQyxNQUFNO0FBQ0wsWUFBSSxDQUFDLFdBQVcsUUFBUztBQUN6QixVQUFFLGVBQWU7QUFDakIsMEJBQWtCLEdBQUcsS0FBSztBQUFBLE1BQzVCO0FBQUEsTUFDQSxDQUFDLGlCQUFpQjtBQUFBLElBQ3BCO0FBRUEsVUFBTSxzQkFBa0I7QUFBQSxNQUN0QixDQUFDLE1BQU07QUFDTCxZQUFJLENBQUMsV0FBVyxRQUFTO0FBQ3pCLDBCQUFrQixHQUFHLElBQUk7QUFBQSxNQUMzQjtBQUFBLE1BQ0EsQ0FBQyxpQkFBaUI7QUFBQSxJQUNwQjtBQUVBLGlDQUFVLE1BQU07QUFDZCxhQUFPLGlCQUFpQixhQUFhLGVBQWU7QUFDcEQsYUFBTyxpQkFBaUIsV0FBVyxhQUFhO0FBQ2hELGFBQU8saUJBQWlCLGFBQWEsZUFBZTtBQUNwRCxhQUFPLGlCQUFpQixZQUFZLGNBQWM7QUFFbEQsYUFBTyxNQUFNO0FBQ1gsZUFBTyxvQkFBb0IsYUFBYSxlQUFlO0FBQ3ZELGVBQU8sb0JBQW9CLFdBQVcsYUFBYTtBQUNuRCxlQUFPLG9CQUFvQixhQUFhLGVBQWU7QUFDdkQsZUFBTyxvQkFBb0IsWUFBWSxjQUFjO0FBQUEsTUFDdkQ7QUFBQSxJQUNGLEdBQUcsQ0FBQyxpQkFBaUIsZUFBZSxpQkFBaUIsY0FBYyxDQUFDO0FBRXBFLFdBQ0UsNkNBQUMsU0FBSSxXQUFVLFVBQVMsVUFDdEI7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNDLEtBQUs7QUFBQSxRQUNMLFdBQVU7QUFBQSxRQUNWLGFBQWE7QUFBQSxRQUNiLGNBQWM7QUFBQSxRQUVkLHdEQUFDLFNBQUksV0FBVSxpQkFDYjtBQUFBLHVEQUFDLFNBQUksV0FBVSxnQkFBZSxPQUFPLEVBQUUsT0FBTyxHQUFHLFFBQVEsSUFBSSxHQUFHO0FBQUEsVUFDaEUsNkNBQUMsU0FBSSxXQUFVLGlCQUFnQixPQUFPLEVBQUUsTUFBTSxHQUFHLFFBQVEsSUFBSSxHQUFHO0FBQUEsV0FDbEU7QUFBQTtBQUFBLElBQ0YsR0FDRjtBQUFBLEVBRUo7QUFDRjtBQUVBLElBQU8saUJBQVE7OztBRXZHZixJQUFBQyxnQkFBeUQ7QUFFekQsSUFBTSxZQUFZLENBQUMsVUFBVSxrQkFBa0I7QUFDN0MsUUFBTSxDQUFDLGFBQWEsY0FBYyxRQUFJLHdCQUFTLFVBQVUsU0FBUyxVQUFVLFNBQVMsQ0FBQztBQUN0RixRQUFNLENBQUMsVUFBVSxXQUFXLFFBQUksd0JBQVMsQ0FBQztBQUMxQyxRQUFNLENBQUMsVUFBVSxXQUFXLFFBQUksd0JBQVMsYUFBYTtBQUN0RCxRQUFNLHVCQUFtQixzQkFBTyxLQUFLO0FBRXJDLCtCQUFVLE1BQU07QUFDZCxVQUFNLGlCQUFpQixDQUFDLFVBQVU7QUFDaEMsWUFBTSxpQkFBaUIsTUFBTTtBQUM3QixxQkFBZSxjQUFjO0FBQzdCLFVBQUksZUFBZSxNQUFNLFFBQVEsVUFBVTtBQUN6QyxZQUFJLENBQUMsaUJBQWlCLFFBQVMsYUFBWSxlQUFlLHFCQUFxQjtBQUMvRSxvQkFBWSxlQUFlLFFBQVE7QUFBQSxNQUNyQyxXQUFXLGVBQWUsTUFBTSxRQUFRLFVBQVU7QUFDaEQsb0JBQVksQ0FBQztBQUNiLG9CQUFZLGFBQWE7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFFQSxjQUFVLFNBQVMsVUFBVSxRQUFRLFlBQVksVUFBVSxjQUFjO0FBQ3pFLFdBQU8sTUFBTTtBQUNYLGdCQUFVLFNBQVMsVUFBVSxRQUFRLGVBQWUsVUFBVSxjQUFjO0FBQUEsSUFDOUU7QUFBQSxFQUNGLEdBQUcsQ0FBQyxVQUFVLGFBQWEsQ0FBQztBQUU1QiwrQkFBVSxNQUFNO0FBQ2QsVUFBTSxxQkFBcUIsWUFBWSxNQUFNLFFBQVE7QUFDckQsVUFBTSx3QkFBd0Isc0JBQXNCLENBQUMsWUFBWTtBQUVqRSxRQUFJLENBQUMsdUJBQXVCO0FBQzFCLFVBQUksQ0FBQyxvQkFBb0I7QUFDdkIsb0JBQVksQ0FBQztBQUNiLG9CQUFZLGFBQWE7QUFBQSxNQUMzQjtBQUNBO0FBQUEsSUFDRjtBQUNBLFVBQU0sV0FBVyxZQUFZLE1BQU07QUFDakMsVUFBSSxDQUFDLGlCQUFpQixTQUFTO0FBQzdCLGNBQU0sY0FDSixZQUFZLHlCQUF5QixLQUFLLElBQUksSUFBSSxZQUFZO0FBQ2hFLG9CQUFZLGNBQWMsWUFBWSxXQUFXLGNBQWMsWUFBWSxRQUFRO0FBQUEsTUFDckY7QUFBQSxJQUNGLEdBQUcsR0FBSTtBQUNQLFdBQU8sTUFBTSxjQUFjLFFBQVE7QUFBQSxFQUNyQyxHQUFHLENBQUMsYUFBYSxVQUFVLGFBQWEsQ0FBQztBQUV6QyxRQUFNLGlCQUFhLDJCQUFZLE1BQU07QUFDbkMsVUFBTSxzQkFBc0IsWUFBWSxNQUFNO0FBQzlDLFFBQUksd0JBQXdCLFVBQVU7QUFDcEMsa0JBQVksV0FDUixVQUFVLFNBQVMsVUFBVSxPQUFPLElBQ3BDLFVBQVUsU0FBUyxVQUFVLE1BQU07QUFBQSxJQUN6QyxPQUFPO0FBQ0wsZ0JBQVUsU0FBUyxVQUFVLEtBQUssRUFBRSxLQUFLLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsSUFDN0Q7QUFBQSxFQUNGLEdBQUcsQ0FBQyxhQUFhLFFBQVEsQ0FBQztBQUUxQixRQUFNLHlCQUFxQiwyQkFBWSxDQUFDLGdCQUFnQjtBQUN0RCxxQkFBaUIsVUFBVTtBQUMzQixnQkFBWSxXQUFXO0FBQUEsRUFDekIsR0FBRyxDQUFDLENBQUM7QUFFTCxRQUFNLDBCQUFzQiwyQkFBWSxNQUFNO0FBQzVDLFFBQUksaUJBQWlCLFNBQVM7QUFDNUIsWUFBTSxzQkFBc0IsWUFBWSxNQUFNLFFBQVE7QUFFdEQsVUFBSSxDQUFDLHFCQUFxQjtBQUN4QixrQkFBVSxTQUFTLFVBQVUsS0FBSyxFQUFFLEtBQUssU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0QsbUJBQVcsTUFBTTtBQUNmLG9CQUFVLFNBQVMsVUFBVSxPQUFPLFFBQVE7QUFBQSxRQUM5QyxHQUFHLEdBQUc7QUFBQSxNQUNSLE9BQU87QUFDTCxrQkFBVSxTQUFTLFVBQVUsT0FBTyxRQUFRO0FBQUEsTUFDOUM7QUFDQSx1QkFBaUIsVUFBVTtBQUFBLElBQzdCO0FBQUEsRUFDRixHQUFHLENBQUMsVUFBVSxVQUFVLFdBQVcsQ0FBQztBQUVwQyxRQUFNLFlBQVksQ0FBQyxZQUFZO0FBQy9CLFFBQU0sOEJBQThCLGFBQWEsWUFBWSxNQUFNLFFBQVE7QUFFM0UsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sb0JBQVE7OztBQzdGZixJQUFBQyxpQkFBb0M7OztBQ0FwQyxJQUFBQyxnQkFBcUI7OztDQ0NaLFdBQVc7QUFDVixRQUFNLE1BQU07QUFDWixRQUFNLFVBQVU7QUFDaEIsTUFBSSxTQUFTLGVBQWUsT0FBTyxHQUFHO0FBQUU7QUFBQSxFQUFRO0FBQ2hELFFBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxRQUFNLEtBQUs7QUFDWCxRQUFNLGNBQWM7QUFDcEIsV0FBUyxLQUFLLFlBQVksS0FBSztBQUNqQyxHQUFHOzs7QURMVCxJQUFBQyxzQkFBQTtBQURGLElBQU0sWUFBUSxvQkFBSyxDQUFDLEVBQUUsT0FBTyxVQUFVLGFBQWEsU0FBUyxNQUMzRDtBQUFBLEVBQUM7QUFBQTtBQUFBLElBQ0MsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUNGLENBQ0Q7QUFFRCxJQUFPLGdCQUFROzs7QUVkZixJQUFBQyxnQkFBcUI7OztBQ0FyQixJQUFBQyxnQkFBcUI7QUFtQmYsSUFBQUMsc0JBQUE7QUFmTixJQUFNLGlCQUFhLG9CQUFLLENBQUMsRUFBRSxNQUFNLFdBQVcsTUFBTTtBQUNoRCxNQUFJLENBQUMsV0FBWSxRQUFPO0FBRXhCLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLFdBQVU7QUFBQSxNQUNWLFNBQVMsTUFDUCxtQkFBVztBQUFBLFFBQ1QsT0FBTztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1gsQ0FBQztBQUFBLE1BRUgsY0FBVztBQUFBLE1BRVgsdURBQUMsY0FBTSxNQUFNLFlBQVosRUFBdUIsTUFBTSxJQUFJO0FBQUE7QUFBQSxFQUNwQztBQUVKLENBQUM7QUFFRCxJQUFPLHFCQUFROzs7QUN4QmYsSUFBQUMsZ0JBQXFCO0FBT2IsSUFBQUMsc0JBQUE7QUFKUixJQUFNLGtCQUFjLG9CQUFLLENBQUMsRUFBRSxNQUFNLE1BQU07QUFDdEMsU0FDRSw2Q0FBQyxVQUFVLGVBQWUsZ0JBQXpCLEVBQXdDLE9BQU8sT0FBTyxXQUFVLE9BQU0sV0FBVyxHQUNoRix1REFBQyxTQUFJLFdBQVUsb0JBQ2IsdURBQUMsY0FBTSxNQUFNLGNBQVosRUFBeUIsTUFBTSxJQUFJLE1BQUssd0JBQXVCLEdBQ2xFLEdBQ0Y7QUFFSixDQUFDO0FBRUQsSUFBTyxzQkFBUTs7O0NDWk4sV0FBVztBQUNWLFFBQU0sTUFBTTtBQUNaLFFBQU0sVUFBVTtBQUNoQixNQUFJLFNBQVMsZUFBZSxPQUFPLEdBQUc7QUFBRTtBQUFBLEVBQVE7QUFDaEQsUUFBTSxRQUFRLFNBQVMsY0FBYyxPQUFPO0FBQzVDLFFBQU0sS0FBSztBQUNYLFFBQU0sY0FBYztBQUNwQixXQUFTLEtBQUssWUFBWSxLQUFLO0FBQ2pDLEdBQUc7OztBSERMLElBQUFDLHNCQUFBO0FBSE4sSUFBTSxnQkFBWSxvQkFBSyxDQUFDLEVBQUUsTUFBTSxNQUFNLE9BQU8sVUFBVSxXQUFXLE1BQ2hFLDhDQUFDLFNBQUksV0FBVSxrQkFBaUIsYUFBVyxTQUFTLElBQUksSUFDdEQ7QUFBQSwrQ0FBQyxTQUFJLFdBQVUsc0JBQ2IsdURBQUMsU0FBSSxXQUFVLG1CQUFtQixnQkFBSyxHQUN6QztBQUFBLEVBQ0EsOENBQUMsU0FBSSxXQUFVLHNCQUNaO0FBQUEsYUFBUyw2Q0FBQyx1QkFBWSxPQUFjO0FBQUEsSUFDckMsNkNBQUMsc0JBQVcsTUFBWSxZQUF3QjtBQUFBLElBRS9DO0FBQUEsS0FDSDtBQUFBLEdBQ0YsQ0FDRDtBQUVELElBQU8sb0JBQVE7OztBSW5CZixJQUFBQyxpQkFBcUI7OztDQ0NaLFdBQVc7QUFDVixRQUFNLE1BQU07QUFDWixRQUFNLFVBQVU7QUFDaEIsTUFBSSxTQUFTLGVBQWUsT0FBTyxHQUFHO0FBQUU7QUFBQSxFQUFRO0FBQ2hELFFBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxRQUFNLEtBQUs7QUFDWCxRQUFNLGNBQWM7QUFDcEIsV0FBUyxLQUFLLFlBQVksS0FBSztBQUNqQyxHQUFHOzs7QURITCxJQUFBQyx1QkFBQTtBQUhOLElBQU0sYUFBUyxxQkFBSyxDQUFDLEVBQUUsT0FBTyxVQUFVLFNBQVMsTUFDL0MsOENBQUMsWUFBTyxXQUFVLFVBQVMsU0FBUyxVQUFVLFVBQzVDLHdEQUFDLFVBQUssV0FBVSxzQkFDZCx3REFBQyxVQUFLLFdBQVcsaUJBQWlCLFFBQVEsNkJBQTZCLEVBQUUsSUFBSSxHQUMvRSxHQUNGLENBQ0Q7QUFFRCxJQUFPLGlCQUFROzs7QVBxRVgsSUFBQUMsdUJBQUE7QUExRUosSUFBTSwwQkFBMEI7QUFBQSxFQUM5QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFFQSxJQUFNLG1CQUFtQjtBQUFBLEVBQ3ZCLGVBQWU7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSx1QkFBdUI7QUFBQSxFQUN2QixzQkFBc0IsQ0FBQztBQUN6QjtBQUVBLElBQU0sZUFBZSxNQUFNO0FBQ3pCLFFBQU0sZ0JBQWdCLGFBQWEsUUFBUSxnQkFBZ0I7QUFDM0QsTUFBSSxlQUFlO0FBQ2pCLFVBQU0sU0FBUyxLQUFLLE1BQU0sYUFBYTtBQUN2QyxRQUFJLENBQUMsT0FBTyxzQkFBdUIsUUFBTyx3QkFBd0IsQ0FBQyxHQUFHLHVCQUF1QjtBQUM3RixXQUFPO0FBQUEsRUFDVDtBQUNBLFNBQU87QUFDVDtBQUVBLElBQU0sZUFBZSxDQUFDLGFBQWE7QUFDakMsZUFBYSxRQUFRLGtCQUFrQixLQUFLLFVBQVUsUUFBUSxDQUFDO0FBQ2pFO0FBRU8sSUFBTSxjQUFjLE1BQU07QUFDL0IsU0FBTyxhQUFhO0FBQ3RCO0FBRUEsSUFBTSxlQUFlLE1BQU07QUFDekIsUUFBTSxDQUFDLFVBQVUsV0FBVyxRQUFJLHlCQUFTLGFBQWEsQ0FBQztBQUN2RCxRQUFNLENBQUMsU0FBUyxVQUFVLFFBQUkseUJBQVMsRUFBRTtBQUV6QyxnQ0FBVSxNQUFNO0FBQ2QsaUJBQWEsUUFBUTtBQUFBLEVBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFFYixRQUFNLGdCQUFnQixDQUFDLE9BQU8sYUFBYSxXQUN6QywrQ0FBQyxhQUFRLFdBQVUsK0JBQ2pCO0FBQUEsa0RBQUMsUUFBRyxXQUFVLHFDQUFxQyxpQkFBTTtBQUFBLElBQ3pELDhDQUFDLFNBQUksV0FBVSwrQkFDWixpQkFBTyxRQUFRLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksTUFDckMsOENBQUMscUJBQW9CLE1BQU0sR0FBRyxHQUFHLElBQUksV0FBVyxJQUFJLE1BQ2xEO0FBQUEsTUFBQztBQUFBO0FBQUEsUUFDQyxPQUFPLFNBQVMsV0FBVyxFQUFFLEdBQUc7QUFBQSxRQUNoQyxVQUFVLE1BQ1IsWUFBWSxDQUFDLFVBQVU7QUFBQSxVQUNyQixHQUFHO0FBQUEsVUFDSCxDQUFDLFdBQVcsR0FBRztBQUFBLFlBQ2IsR0FBRyxLQUFLLFdBQVc7QUFBQSxZQUNuQixDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssV0FBVyxFQUFFLEdBQUc7QUFBQSxVQUMvQjtBQUFBLFFBQ0YsRUFBRTtBQUFBO0FBQUEsSUFFTixLQVpjLEdBYWhCLENBQ0QsR0FDSDtBQUFBLEtBQ0Y7QUFHRixRQUFNLGdCQUFnQixNQUFNO0FBQzFCLFVBQU0sT0FBTyxRQUFRLEtBQUssRUFBRSxZQUFZO0FBQ3hDLFFBQUksQ0FBQyxLQUFNO0FBQ1gsUUFDRSxTQUFTLHFCQUFxQixTQUFTLElBQUksS0FDM0MsU0FBUyxzQkFBc0IsU0FBUyxJQUFJO0FBRTVDO0FBQ0YsZ0JBQVksQ0FBQyxVQUFVO0FBQUEsTUFDckIsR0FBRztBQUFBLE1BQ0gsc0JBQXNCLENBQUMsR0FBRyxLQUFLLHNCQUFzQixJQUFJO0FBQUEsSUFDM0QsRUFBRTtBQUNGLGVBQVcsRUFBRTtBQUFBLEVBQ2Y7QUFFQSxRQUFNLGFBQWEsQ0FBQyxNQUFNLGNBQWM7QUFDdEM7QUFBQSxNQUFZLENBQUMsU0FDWCxZQUNJO0FBQUEsUUFDRSxHQUFHO0FBQUEsUUFDSCx1QkFBdUIsS0FBSyxzQkFBc0IsT0FBTyxDQUFDLE1BQU0sTUFBTSxJQUFJO0FBQUEsTUFDNUUsSUFDQTtBQUFBLFFBQ0UsR0FBRztBQUFBLFFBQ0gsc0JBQXNCLEtBQUsscUJBQXFCLE9BQU8sQ0FBQyxNQUFNLE1BQU0sSUFBSTtBQUFBLE1BQzFFO0FBQUEsSUFDTjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLGdCQUFnQixNQUFNO0FBQzFCLDBCQUFjO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxNQUNqQixhQUFhO0FBQUEsTUFDYixXQUFXLE1BQU0sWUFBWSxLQUFLLE1BQU0sS0FBSyxVQUFVLGdCQUFnQixDQUFDLENBQUM7QUFBQSxJQUMzRSxDQUFDO0FBQUEsRUFDSDtBQUVBLFFBQU0sV0FBVztBQUFBLElBQ2YsR0FBRyxTQUFTLHNCQUFzQixJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sV0FBVyxLQUFLLEVBQUU7QUFBQSxJQUMzRSxHQUFHLFNBQVMscUJBQXFCLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxXQUFXLE1BQU0sRUFBRTtBQUFBLEVBQzdFO0FBRUEsU0FDRSwrQ0FBQyxTQUFJLFdBQVUsc0JBQ1o7QUFBQSxrQkFBYywrQkFBK0IsaUJBQWlCO0FBQUEsTUFDN0QsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLElBRUEsY0FBYywyQkFBMkIsbUJBQW1CO0FBQUEsTUFDM0QsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLElBRUQsK0NBQUMsYUFBUSxXQUFVLCtCQUNqQjtBQUFBLG9EQUFDLFFBQUcsV0FBVSxxQ0FBb0MsaUNBQW1CO0FBQUEsTUFDckUsOENBQUMsT0FBRSxXQUFVLG1DQUFrQywwRkFFL0M7QUFBQSxNQUNBLCtDQUFDLHFCQUFVLE1BQUssZ0JBQWUsTUFBSyxvQ0FDbEM7QUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsT0FBTztBQUFBLFlBQ1AsVUFBVSxDQUFDLE1BQU0sV0FBVyxFQUFFLE9BQU8sS0FBSztBQUFBLFlBQzFDLGFBQVk7QUFBQSxZQUNaLFVBQVU7QUFBQSxZQUNWLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxXQUFXLGNBQWM7QUFBQTtBQUFBLFFBQ3ZEO0FBQUEsUUFDQSw4Q0FBQyxZQUFPLE1BQUssVUFBUyxTQUFTLGVBQWUsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLGlCQUV4RTtBQUFBLFNBQ0Y7QUFBQSxNQUNBLDhDQUFDLFNBQUksV0FBVSxrQ0FDWixtQkFBUyxTQUFTLElBQ2pCLDhDQUFDLFNBQUksV0FBVSxnQ0FDWixtQkFBUyxJQUFJLENBQUMsRUFBRSxNQUFNLFVBQVUsTUFDL0IsK0NBQUMsU0FBSSxXQUFVLGlDQUNaO0FBQUE7QUFBQSxRQUNEO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxNQUFLO0FBQUEsWUFDTCxXQUFVO0FBQUEsWUFDVixTQUFTLE1BQU0sV0FBVyxNQUFNLFNBQVM7QUFBQSxZQUMxQztBQUFBO0FBQUEsUUFFRDtBQUFBLFdBUmtELElBU3BELENBQ0QsR0FDSCxJQUVBLDhDQUFDLE9BQUUsV0FBVSxnQ0FBK0Isb0NBQXNCLEdBRXRFO0FBQUEsT0FDRjtBQUFBLElBQ0EsOENBQUMsU0FBSSxXQUFVLCtCQUNiLHdEQUFDLFlBQU8sTUFBSyxVQUFTLFdBQVUsNkJBQTRCLFNBQVMsZUFBZSwrQkFFcEYsR0FDRjtBQUFBLEtBQ0Y7QUFFSjtBQUVBLElBQU8sbUJBQVE7OztBWHRDUCxJQUFBQyx1QkFBQTtBQTlKUixJQUFNLEtBQUssSUFBSSxNQUFNLGdCQUFnQjtBQUVyQyxHQUFHLFFBQVEsR0FBRyxFQUFFLE9BQU87QUFBQSxFQUNyQixRQUNFO0FBQ0osQ0FBQztBQUVELGVBQWUseUJBQXlCO0FBQ3RDLFFBQU0sWUFBWSxNQUFNLGdDQUF3QjtBQUNoRCxTQUFPLFVBQVUsT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLGNBQWMsS0FBSyxRQUFRO0FBQzdFO0FBRUEsZUFBZSw0QkFBNEIsYUFBYTtBQUN0RCxRQUFNLEVBQUUsTUFBTSxJQUFJLE1BQU0sK0JBQXVCLFdBQVc7QUFFMUQsUUFBTSxZQUFZLE1BQU0sSUFBSSxDQUFDLFVBQVUsTUFBTSxHQUFHO0FBQ2hELFFBQU0saUJBQWlCLE1BQU0sR0FBRyxPQUFPLFFBQVEsU0FBUztBQUN4RCxRQUFNLG9CQUFvQixJQUFJLElBQUksZUFBZSxPQUFPLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUU1RixRQUFNLGNBQWMsTUFBTSxPQUFPLENBQUMsS0FBSyxTQUFTO0FBQzlDLFVBQU0sV0FBVyxrQkFBa0IsSUFBSSxLQUFLLEdBQUc7QUFDL0MsUUFBSSxDQUFDLFlBQVksU0FBUyxjQUFjLEtBQUssUUFBUSxTQUFTLGFBQWEsS0FBSyxNQUFNLEtBQUs7QUFDekYsVUFBSSxLQUFLO0FBQUEsUUFDUCxVQUFVLEtBQUs7QUFBQSxRQUNmLFdBQVcsS0FBSztBQUFBLFFBQ2hCLFVBQVUsS0FBSyxNQUFNO0FBQUEsUUFDckIsZUFBZSxVQUFVLFNBQVMsZ0JBQWdCO0FBQUEsUUFDbEQsZ0JBQWdCLFVBQVUsa0JBQWtCO0FBQUEsUUFDNUMsV0FBVyxVQUFVLGFBQWE7QUFBQSxNQUNwQyxDQUFDO0FBQUEsSUFDSDtBQUNBLFdBQU87QUFBQSxFQUNULEdBQUcsQ0FBQyxDQUFDO0FBRUwsTUFBSSxZQUFZLFNBQVMsR0FBRztBQUMxQixVQUFNLEdBQUcsT0FBTyxRQUFRLFdBQVc7QUFBQSxFQUNyQztBQUVBLFNBQU8sRUFBRSxNQUFNO0FBQ2pCO0FBRUEsZUFBZSw2QkFBNkIsUUFBUTtBQUNsRCxRQUFNLFVBQVUsb0JBQUksSUFBSTtBQUN4QixRQUFNLGdCQUFnQixDQUFDO0FBQ3ZCLFFBQU0sY0FBYyxPQUFPLE9BQU8sQ0FBQyxVQUFVLE9BQU8sR0FBRztBQUN2RCxRQUFNLFlBQVksWUFBWSxJQUFJLENBQUMsVUFBVSxNQUFNLEdBQUc7QUFFdEQsTUFBSSxVQUFVLFdBQVcsRUFBRyxRQUFPO0FBRW5DLFFBQU0sbUJBQW1CLE1BQU0sR0FBRyxPQUFPLFFBQVEsU0FBUztBQUMxRCxRQUFNLGtCQUFrQixJQUFJLElBQUksaUJBQWlCLE9BQU8sT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBRTVGLGFBQVcsU0FBUyxhQUFhO0FBQy9CLFVBQU0sY0FBYyxnQkFBZ0IsSUFBSSxNQUFNLEdBQUc7QUFDakQsUUFBSSxhQUFhLFdBQVc7QUFDMUIsY0FBUSxJQUFJLE1BQU0sS0FBSyxZQUFZLFNBQVM7QUFBQSxJQUM5QyxPQUFPO0FBQ0wsb0JBQWMsS0FBSyxLQUFLO0FBQUEsSUFDMUI7QUFBQSxFQUNGO0FBRUEsTUFBSSxjQUFjLFNBQVMsR0FBRztBQUM1QixVQUFNLHVCQUF1QixNQUFNLDZCQUFxQixjQUFjLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0FBQ3ZGLFVBQU0sZUFBZSxDQUFDO0FBRXRCLGVBQVcsQ0FBQyxVQUFVLEtBQUssS0FBSyxxQkFBcUIsUUFBUSxHQUFHO0FBQzlELFlBQU0sWUFBWSxPQUFPLGNBQWM7QUFDdkMsVUFBSSxXQUFXO0FBQ2IsZ0JBQVEsSUFBSSxVQUFVLFNBQVM7QUFDL0IscUJBQWEsS0FBSyxFQUFFLEtBQUssVUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7QUFBQSxNQUM3RDtBQUFBLElBQ0Y7QUFFQSxRQUFJLGFBQWEsU0FBUyxHQUFHO0FBQzNCLFlBQU0sR0FBRyxPQUFPLFdBQVcsWUFBWTtBQUFBLElBQ3pDO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDtBQUVBLGVBQWUsNkNBQTZDLFFBQVE7QUFDbEUsUUFBTSxvQkFBb0Isb0JBQUksSUFBSTtBQUNsQyxRQUFNLG1CQUFtQixvQkFBSSxJQUFJO0FBQ2pDLFFBQU0sZ0JBQWdCLENBQUM7QUFDdkIsUUFBTSxjQUFjLE9BQU8sT0FBTyxDQUFDLFVBQVUsT0FBTyxHQUFHO0FBQ3ZELFFBQU0sWUFBWSxZQUFZLElBQUksQ0FBQyxVQUFVLE1BQU0sR0FBRztBQUV0RCxNQUFJLFVBQVUsV0FBVyxFQUFHLFFBQU8sRUFBRSxtQkFBbUIsaUJBQWlCO0FBRXpFLFFBQU0sbUJBQW1CLE1BQU0sR0FBRyxPQUFPLFFBQVEsU0FBUztBQUMxRCxRQUFNLGtCQUFrQixJQUFJLElBQUksaUJBQWlCLE9BQU8sT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBRTVGLGFBQVcsU0FBUyxhQUFhO0FBQy9CLFVBQU0sY0FBYyxnQkFBZ0IsSUFBSSxNQUFNLEdBQUc7QUFDakQsUUFBSSxhQUFhLGtCQUFrQixNQUFNO0FBQ3ZDLHdCQUFrQixJQUFJLE1BQU0sS0FBSyxZQUFZLGNBQWM7QUFBQSxJQUM3RDtBQUNBLFFBQUksYUFBYSxpQkFBaUIsTUFBTTtBQUN0Qyx1QkFBaUIsSUFBSSxNQUFNLEtBQUssWUFBWSxhQUFhO0FBQUEsSUFDM0Q7QUFDQSxRQUFJLGFBQWEsa0JBQWtCLFFBQVEsYUFBYSxpQkFBaUIsTUFBTTtBQUM3RSxvQkFBYyxLQUFLLEtBQUs7QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLGNBQWMsU0FBUyxHQUFHO0FBQzVCLFVBQU0sbUJBQW1CLElBQUksSUFBSSxjQUFjLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUUsT0FBTyxPQUFPLENBQUM7QUFDdEYsVUFBTSxxQkFBcUIsTUFBTSxtQ0FBMkIsZ0JBQWdCO0FBQzVFLFVBQU0sZUFBZSxDQUFDO0FBRXRCLGVBQVcsQ0FBQyxVQUFVLEtBQUssS0FBSyxtQkFBbUIsUUFBUSxHQUFHO0FBQzVELFlBQU0saUJBQWlCLE1BQU0sWUFBWSxPQUFPLFNBQVMsTUFBTSxXQUFXLEVBQUUsSUFBSTtBQUNoRixZQUFNLGdCQUFnQixNQUFNLFVBQVUscUJBQXFCO0FBRTNELFVBQUksbUJBQW1CLE1BQU07QUFDM0IsMEJBQWtCLElBQUksVUFBVSxjQUFjO0FBQUEsTUFDaEQ7QUFDQSxVQUFJLGtCQUFrQixNQUFNO0FBQzFCLHlCQUFpQixJQUFJLFVBQVUsYUFBYTtBQUFBLE1BQzlDO0FBQ0EsbUJBQWEsS0FBSztBQUFBLFFBQ2hCLEtBQUs7QUFBQSxRQUNMLFNBQVMsRUFBRSxnQkFBZ0IsY0FBYztBQUFBLE1BQzNDLENBQUM7QUFBQSxJQUNIO0FBRUEsUUFBSSxhQUFhLFNBQVMsR0FBRztBQUMzQixZQUFNLEdBQUcsT0FBTyxXQUFXLFlBQVk7QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFDQSxTQUFPLEVBQUUsbUJBQW1CLGlCQUFpQjtBQUMvQztBQUVBLElBQU0sMkJBQTJCLENBQUMsVUFBVSxvQkFBb0IsZ0JBQWdCLElBQUksUUFBUSxLQUFLO0FBRWpHLElBQU0seUJBQXlCLENBQUMsU0FBUztBQUN2QyxRQUFNLFdBQVcsWUFBWTtBQUM3QixRQUFNLGdCQUFnQixDQUFDLEdBQUcsU0FBUyx1QkFBdUIsR0FBRyxTQUFTLG9CQUFvQjtBQUMxRixRQUFNLG1CQUFtQixJQUFJLE9BQU8sT0FBTyxjQUFjLEtBQUssR0FBRyxDQUFDLFFBQVEsSUFBSTtBQUM5RSxTQUFPLEtBQ0osWUFBWSxFQUNaLFFBQVEsb0JBQW9CLEVBQUUsRUFDOUIsUUFBUSxrQkFBa0IsRUFBRSxFQUM1QixRQUFRLE1BQU0sR0FBRyxFQUNqQixRQUFRLHFCQUFxQixFQUFFLEVBQy9CLFFBQVEsUUFBUSxHQUFHLEVBQ25CLEtBQUs7QUFDVjtBQUVBLElBQU0sbUJBQWUscUJBQUssQ0FBQyxFQUFFLE9BQU8saUJBQWlCLFdBQVcsTUFBTTtBQUNwRSxRQUFNLGlCQUFpQixnQkFBZ0IsSUFBSSxNQUFNLEdBQUc7QUFDcEQsUUFBTSxlQUFlLGtCQUFrQixPQUFPLGVBQWUsZUFBZSxJQUFJO0FBQ2hGLFFBQU0sWUFBWSxXQUFXLElBQUksTUFBTSxHQUFHLEtBQUs7QUFDL0MsUUFBTSxZQUFZLE1BQU0sT0FBTyxRQUFRO0FBQ3ZDLFFBQU0sVUFBVSxNQUFNLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxJQUFJLEtBQUs7QUFDaEUsU0FDRSwrQ0FBQyxTQUFJLFdBQVUsaUJBQ2I7QUFBQSxtREFBQyxTQUFJLFdBQVUsdUJBQ2I7QUFBQSxxREFBQyxVQUFLLFdBQVUsMEJBQXlCO0FBQUE7QUFBQSxRQUFXO0FBQUEsU0FBUTtBQUFBLE1BQzVELCtDQUFDLFVBQUssV0FBVSx3QkFBdUI7QUFBQTtBQUFBLFFBQVM7QUFBQSxTQUFVO0FBQUEsT0FDNUQ7QUFBQSxJQUNBLCtDQUFDLFNBQUksV0FBVSx1QkFDYjtBQUFBLHFEQUFDLFVBQUssV0FBVSw0QkFBMkI7QUFBQTtBQUFBLFFBQVM7QUFBQSxTQUFhO0FBQUEsTUFDakUsK0NBQUMsVUFBSyxXQUFVLHVCQUFzQjtBQUFBO0FBQUEsUUFBUTtBQUFBLFNBQVU7QUFBQSxPQUMxRDtBQUFBLEtBQ0Y7QUFFSixDQUFDO0FBRUQsSUFBTSxvQkFBZ0IscUJBQUssQ0FBQyxFQUFFLFVBQVUsY0FBYyxNQUFNO0FBQzFELFFBQU07QUFBQSxJQUNKO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGLElBQUksa0JBQVUsVUFBVSxhQUFhO0FBRXJDLFFBQU0sYUFBYSxDQUFDLE9BQU87QUFDekIsUUFBSSxPQUFPLE1BQU0sRUFBRSxLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ3ZDLFVBQU0sZUFBZSxLQUFLLE1BQU0sS0FBSyxHQUFJO0FBQ3pDLFVBQU0sVUFBVSxLQUFLLE1BQU0sZUFBZSxFQUFFO0FBQzVDLFVBQU0sVUFBVSxlQUFlO0FBQy9CLFdBQU8sR0FBRyxPQUFPLElBQUksUUFBUSxTQUFTLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQzFEO0FBRUEsUUFBTSxXQUFXLFdBQVcsUUFBUTtBQUNwQyxRQUFNLFlBQVksV0FBVyxRQUFRO0FBRXJDLFNBQ0UsK0NBQUMsU0FBSSxXQUFVLHNDQUNiO0FBQUEsa0RBQUMsWUFBTyxNQUFLLFVBQVMsV0FBVSxvQ0FBbUMsU0FBUyxZQUN6RSx3Q0FBOEIsOENBQUMsY0FBTSxNQUFNLE9BQVosRUFBa0IsSUFBSyw4Q0FBQyxjQUFNLE1BQU0sTUFBWixFQUFpQixHQUMzRTtBQUFBLElBQ0EsOENBQUMsVUFBSyxXQUFVLGVBQWUsb0JBQVM7QUFBQSxJQUN4QztBQUFBLE1BQUM7QUFBQTtBQUFBLFFBQ0MsT0FBTztBQUFBLFFBQ1AsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBO0FBQUEsSUFDYjtBQUFBLElBQ0EsOENBQUMsVUFBSyxXQUFVLGVBQWUscUJBQVU7QUFBQSxLQUMzQztBQUVKLENBQUM7QUFFRCxJQUFNLG9CQUFnQjtBQUFBLEVBQ3BCLENBQUM7QUFBQSxJQUNDO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0YsTUFDRSwrQ0FBQyxTQUFJLFdBQVcsMERBQTBELFFBQVEsSUFDaEY7QUFBQSxtREFBQyxTQUFJLFdBQVUsbUNBQ2I7QUFBQSxxREFBQyxTQUFJLFdBQVUsc0NBQ2I7QUFBQSx1REFBQyxVQUFLLFdBQVUsbUNBQ2I7QUFBQSxxQkFBVyxhQUFhO0FBQUEsVUFDeEIsTUFBTTtBQUFBLFdBQ1Q7QUFBQSxRQUNBLDhDQUFDLGdCQUFhLE9BQWMsaUJBQWtDLFlBQXdCO0FBQUEsU0FDeEY7QUFBQSxNQUNBO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxNQUFLO0FBQUEsVUFDTCxXQUFVO0FBQUEsVUFDVixTQUFTLE1BQU0sU0FBUyxVQUFVLFlBQVksS0FBSztBQUFBLFVBQ3BEO0FBQUE7QUFBQSxNQUVEO0FBQUEsT0FDRjtBQUFBLElBQ0EsOENBQUMsU0FBSSxXQUFVLDRCQUNiLHdEQUFDLGlCQUFjLFVBQVUsTUFBTSxLQUFLLGVBQWUsZUFBZSxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQ3BGO0FBQUEsS0FDRjtBQUVKO0FBRUEsSUFBTSxxQkFBaUI7QUFBQSxFQUNyQixDQUFDLEVBQUUsT0FBTyxVQUFVLFlBQVksVUFBVSxpQkFBaUIsWUFBWSxlQUFlLE1BQ3BGO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFFQyxXQUFXLGdEQUFnRCxRQUFRO0FBQUEsTUFFbkU7QUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsT0FBTyxNQUFNO0FBQUEsWUFDYjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQSxVQUFRO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUE7QUFBQSxRQUNGO0FBQUEsUUFDQSw4Q0FBQyxTQUFJLFdBQVUscUNBQW9DLHlCQUFXO0FBQUEsUUFDOUQsOENBQUMsU0FBSSxXQUFVLG9DQUNaLGdCQUFNLFdBQVcsSUFBSSxDQUFDLFFBQ3JCO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFFQyxPQUFPO0FBQUEsWUFDUDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUE7QUFBQSxVQVBLLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxPQUFPLElBQUksR0FBRztBQUFBLFFBUXZDLENBQ0QsR0FDSDtBQUFBO0FBQUE7QUFBQSxJQTNCSyxHQUFHLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxVQUFVLE9BQU8sVUFBVTtBQUFBLEVBNEJsRTtBQUVKO0FBRUEsSUFBTSx5QkFBcUI7QUFBQSxFQUN6QixDQUFDLEVBQUUsT0FBTyxRQUFRLFVBQVUsVUFBVSxpQkFBaUIsWUFBWSxlQUFlLE1BQU07QUFDdEYsVUFBTSxXQUFXLFlBQVk7QUFDN0IsUUFBSSxDQUFDLFNBQVMsY0FBYyxRQUFRLEVBQUcsUUFBTztBQUU5QyxXQUNFLCtDQUFDLFNBQUksV0FBVSxtQkFDYjtBQUFBLHFEQUFDLE9BQUUsV0FBVSw0QkFDWDtBQUFBLHNEQUFDLFNBQUksV0FBVSxrQ0FBa0MsaUJBQU07QUFBQSxRQUN2RCwrQ0FBQyxTQUFJLFdBQVUsbUNBQW1DO0FBQUEsaUJBQU87QUFBQSxVQUFPO0FBQUEsV0FBTTtBQUFBLFNBQ3hFO0FBQUEsTUFDQyxPQUFPLFNBQVMsSUFDZiw4Q0FBQyxTQUFJLFdBQVUseUJBQ1osaUJBQU8sSUFBSSxDQUFDLE9BQU8sVUFDbEI7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUVDO0FBQUEsVUFDQTtBQUFBLFVBQ0EsWUFBWTtBQUFBLFVBQ1o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQTtBQUFBLFFBUEssR0FBRyxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUs7QUFBQSxNQVF0QyxDQUNELEdBQ0gsSUFFQSw4Q0FBQyxPQUFFLG1EQUFxQztBQUFBLE9BRTVDO0FBQUEsRUFFSjtBQUNGO0FBRUEsU0FBUyx3QkFBd0IsRUFBRSxrQkFBa0Isd0JBQXdCLEdBQUc7QUFDOUUsUUFBTSxDQUFDLGdCQUFnQixpQkFBaUIsUUFBSSx5QkFBUyxDQUFDLENBQUM7QUFDdkQsUUFBTSxDQUFDLGtCQUFrQixtQkFBbUIsUUFBSSx5QkFBUywyQkFBMkIsSUFBSTtBQUN4RixRQUFNLENBQUMsZ0JBQWdCLGlCQUFpQixRQUFJLHlCQUFTLENBQUMsQ0FBQztBQUN2RCxRQUFNLENBQUMsaUJBQWlCLGtCQUFrQixRQUFJLHlCQUFTLG9CQUFJLElBQUksQ0FBQztBQUNoRSxRQUFNLENBQUMsZ0JBQWdCLGlCQUFpQixRQUFJLHlCQUFTLG9CQUFJLElBQUksQ0FBQztBQUM5RCxRQUFNLENBQUMsWUFBWSxhQUFhLFFBQUkseUJBQVMsb0JBQUksSUFBSSxDQUFDO0FBQ3RELFFBQU0sQ0FBQyxpQkFBaUIsa0JBQWtCLFFBQUkseUJBQVM7QUFBQSxJQUNyRCxPQUFPLENBQUM7QUFBQSxJQUNSLE1BQU0sQ0FBQztBQUFBLElBQ1AsUUFBUSxDQUFDO0FBQUEsSUFDVCxVQUFVLENBQUM7QUFBQSxFQUNiLENBQUM7QUFFRCxnQ0FBVSxNQUFNO0FBQ2QsUUFBSSxZQUFZO0FBQ2hCLEtBQUMsWUFBWTtBQUNYLFlBQU0sWUFBWSxNQUFNLHVCQUF1QjtBQUMvQyxVQUFJLENBQUMsVUFBVztBQUNoQix3QkFBa0IsU0FBUztBQUMzQiwwQkFBb0IsMkJBQTJCLFVBQVUsQ0FBQyxLQUFLLElBQUk7QUFBQSxJQUNyRSxHQUFHO0FBQ0gsV0FBTyxNQUFNO0FBQ1gsa0JBQVk7QUFBQSxJQUNkO0FBQUEsRUFDRixHQUFHLENBQUMsdUJBQXVCLENBQUM7QUFFNUIsUUFBTSx1QkFBdUIsQ0FBQyxNQUFNO0FBQ2xDLFVBQU0sY0FBYyxlQUFlLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sS0FBSztBQUN2RSxRQUFJLFlBQWEscUJBQW9CLFdBQVc7QUFBQSxFQUNsRDtBQUVBLFFBQU0sOEJBQTBCLDRCQUFZLENBQUMsUUFBUSxtQkFBbUIsaUJBQWlCO0FBQ3ZGLFVBQU0sZ0JBQWdCLG9CQUFJLElBQUk7QUFDOUIsVUFBTSxpQkFBaUIsQ0FBQyxNQUFNLE9BQU8sZUFBZTtBQUNsRCxZQUFNLFNBQVMsb0JBQUksSUFBSTtBQUV2QixpQkFBVyxLQUFLLE1BQU07QUFDcEIsWUFBSSxjQUFjLElBQUksRUFBRSxHQUFHLEVBQUc7QUFDOUIsY0FBTSxNQUFNLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDL0IsWUFBSSxDQUFDLElBQUs7QUFFVixlQUFPLElBQUksS0FBSyxPQUFPLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNyQyxlQUFPLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQztBQUFBLE1BQ3hCO0FBQ0EsWUFBTSxtQkFBbUIsQ0FBQztBQUUxQixpQkFBVyxTQUFTLE9BQU8sT0FBTyxHQUFHO0FBQ25DLFlBQUksTUFBTSxTQUFTLEdBQUc7QUFDcEIsZ0JBQU07QUFBQSxZQUNKLENBQUMsR0FBRyxNQUNGLHlCQUF5QixFQUFFLEtBQUssaUJBQWlCLElBQ2pELHlCQUF5QixFQUFFLEtBQUssaUJBQWlCO0FBQUEsVUFDckQ7QUFFQSxxQkFBVyxLQUFLLE9BQU87QUFDckIsMEJBQWMsSUFBSSxFQUFFLEdBQUc7QUFBQSxVQUN6QjtBQUNBLDJCQUFpQixLQUFLLEVBQUUsV0FBVyxNQUFNLENBQUMsR0FBRyxZQUFZLE1BQU0sTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUFBLFFBQzNFO0FBQUEsTUFDRjtBQUNBLGFBQU87QUFBQSxJQUNUO0FBQ0EsdUJBQW1CO0FBQUEsTUFDakIsT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBLENBQUMsTUFBTSxFQUFFO0FBQUEsUUFDVCxDQUFDLE1BQU07QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSjtBQUFBLFFBQ0EsQ0FBQyxNQUFNLGFBQWEsSUFBSSxFQUFFLEdBQUc7QUFBQSxRQUM3QixDQUFDLE1BQU07QUFBQSxNQUNUO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0EsQ0FBQyxNQUFNLEVBQUU7QUFBQSxRQUNULENBQUMsU0FBUyxLQUFLLEtBQUs7QUFBQSxNQUN0QjtBQUFBLE1BQ0EsVUFBVSxlQUFlLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxzQkFBc0I7QUFBQSxJQUN4RSxDQUFDO0FBQUEsRUFDSCxHQUFHLENBQUMsQ0FBQztBQUVMLFFBQU0sMEJBQTBCLE9BQU8sa0JBQWtCO0FBQ3ZELFVBQU0sVUFBVSxTQUFTLFlBQVksT0FBTyxpQkFBaUIsS0FBSyxDQUFDLEVBQUUsS0FBSyxjQUFjLElBQUksQ0FBQyxDQUFDO0FBQzlGO0FBQUEsTUFBa0IsQ0FBQyxlQUNqQixXQUFXO0FBQUEsUUFDVCxDQUFDLFVBQVUsRUFBRSxNQUFNLFFBQVEsY0FBYyxPQUFPLE1BQU0sUUFBUSxjQUFjO0FBQUEsTUFDOUU7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLFFBQU0sb0JBQW9CLE9BQU8sbUJBQW1CLGFBQWEsa0JBQWtCO0FBQ2pGLFVBQU0sV0FBVyxZQUFZO0FBQzdCLFFBQUksQ0FBQyxTQUFTLGdCQUFnQixpQkFBaUIsR0FBRztBQUNoRCxZQUFNLHdCQUF3QixhQUFhO0FBQzNDO0FBQUEsSUFDRjtBQUNBLDBCQUFjO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxpQkFBaUIsb0NBQW9DLGNBQWMsSUFBSTtBQUFBLE1BQ3ZFLGFBQWE7QUFBQSxNQUNiLFdBQVcsTUFBTSx3QkFBd0IsYUFBYTtBQUFBLElBQ3hELENBQUM7QUFBQSxFQUNIO0FBRUEsZ0NBQVUsTUFBTTtBQUNkLHNCQUFrQixDQUFDLENBQUM7QUFDcEIsdUJBQW1CLEVBQUUsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUNwRSx1QkFBbUIsb0JBQUksSUFBSSxDQUFDO0FBQzVCLGtCQUFjLG9CQUFJLElBQUksQ0FBQztBQUN2QixzQkFBa0Isb0JBQUksSUFBSSxDQUFDO0FBRTNCLFVBQU0sV0FBVyxZQUFZO0FBQzNCLFVBQUksQ0FBQyxrQkFBa0IsSUFBSztBQUU1QixZQUFNLGVBQWUsTUFBTSw0QkFBNEIsaUJBQWlCLEdBQUc7QUFDM0UsWUFBTSxnQkFBZ0IsYUFBYTtBQUNuQyx3QkFBa0IsYUFBYTtBQUUvQixVQUFJLGNBQWMsU0FBUyxHQUFHO0FBQzVCLGNBQU0sQ0FBQyx5Q0FBeUMseUJBQXlCLElBQ3ZFLE1BQU0sUUFBUSxJQUFJO0FBQUEsVUFDaEIsNkNBQTZDLGFBQWE7QUFBQSxVQUMxRCw2QkFBNkIsYUFBYTtBQUFBLFFBQzVDLENBQUM7QUFFSCwyQkFBbUIsd0NBQXdDLGlCQUFpQjtBQUM1RSwwQkFBa0Isd0NBQXdDLGdCQUFnQjtBQUMxRSxzQkFBYyx5QkFBeUI7QUFBQSxNQUN6QztBQUFBLElBQ0Y7QUFDQSxhQUFTO0FBQUEsRUFDWCxHQUFHLENBQUMsZ0JBQWdCLENBQUM7QUFFckIsZ0NBQVUsTUFBTTtBQUNkLFFBQUksZUFBZSxTQUFTLEdBQUc7QUFDN0IsOEJBQXdCLGdCQUFnQixpQkFBaUIsVUFBVTtBQUFBLElBQ3JFLE9BQU87QUFDTCx5QkFBbUIsRUFBRSxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO0FBQUEsSUFDdEU7QUFBQSxFQUNGLEdBQUcsQ0FBQyxnQkFBZ0IsaUJBQWlCLFlBQVksdUJBQXVCLENBQUM7QUFFekUsUUFBTSxrQkFBa0IsZUFBZSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFFbkYsU0FDRSwrQ0FBQyxTQUFJLFdBQVUsbUJBQ2I7QUFBQSxtREFBQyxTQUFJLFdBQVUsMkJBQ2I7QUFBQSxvREFBQyxVQUFLLFdBQVUsaUNBQWdDLDhCQUFnQjtBQUFBLE1BQ2hFO0FBQUEsUUFBQztBQUFBO0FBQUEsVUFDQyxPQUFPLGtCQUFrQjtBQUFBLFVBQ3pCLFNBQVM7QUFBQSxVQUNULFVBQVU7QUFBQSxVQUNWLFVBQVUsZUFBZSxXQUFXO0FBQUE7QUFBQSxNQUN0QztBQUFBLE9BQ0Y7QUFBQSxJQUNDLG9CQUNDLGdGQUNFO0FBQUEscURBQUMsT0FBRSxXQUFVLDRCQUEyQjtBQUFBO0FBQUEsUUFDM0IsaUJBQWlCO0FBQUEsUUFBSztBQUFBLFFBQUcsZUFBZTtBQUFBLFFBQU87QUFBQSxTQUM1RDtBQUFBLE1BQ0E7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU07QUFBQSxVQUNOLFFBQVEsZ0JBQWdCO0FBQUEsVUFDeEIsVUFBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU07QUFBQSxVQUNOLFFBQVEsZ0JBQWdCO0FBQUEsVUFDeEIsVUFBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU07QUFBQSxVQUNOLFFBQVEsZ0JBQWdCO0FBQUEsVUFDeEIsVUFBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUNDLE9BQU07QUFBQSxVQUNOLFFBQVEsZ0JBQWdCO0FBQUEsVUFDeEIsVUFBUztBQUFBLFVBQ1QsVUFBVTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBLE9BQ0Y7QUFBQSxLQUVKO0FBRUo7QUFFQSxJQUFPLGVBQVE7OztDb0JoaEJOLFdBQVc7QUFDVixRQUFNLE1BQU07QUFDWixRQUFNLFVBQVU7QUFDaEIsTUFBSSxTQUFTLGVBQWUsT0FBTyxHQUFHO0FBQUU7QUFBQSxFQUFRO0FBQ2hELFFBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxRQUFNLEtBQUs7QUFDWCxRQUFNLGNBQWM7QUFDcEIsV0FBUyxLQUFLLFlBQVksS0FBSztBQUNqQyxHQUFHOzs7QUNNSCxJQUFBQyx1QkFBQTtBQU5SLElBQU0sMkJBQTJCLENBQUMsa0JBQWtCLGNBQWMsV0FBVztBQUMzRSxRQUFNLGNBQWMsQ0FBQyxTQUFTO0FBQzVCLFVBQU0sYUFBYSxTQUFTO0FBQzVCLHVCQUFXO0FBQUEsTUFDVCxPQUFPLGFBQWEsNkJBQTZCO0FBQUEsTUFDakQsU0FBUyxhQUNQLDhDQUFDLG9CQUFhLElBRWQsOENBQUMsZ0JBQXdCLGtCQUFvQztBQUFBLE1BRS9ELFNBQVM7QUFBQSxNQUNULFNBQ0UsZ0ZBQ0U7QUFBQTtBQUFBLFVBQUMsVUFBVSxlQUFlO0FBQUEsVUFBekI7QUFBQSxZQUNDLE9BQU8sYUFBYSx1QkFBdUI7QUFBQSxZQUMzQyxXQUFVO0FBQUEsWUFFVjtBQUFBLGNBQUM7QUFBQTtBQUFBLGdCQUNDLFdBQVcsZ0NBQWdDLGFBQWEsU0FBUyxVQUFVO0FBQUEsZ0JBQzNFLFNBQVMsTUFBTSxZQUFZLGFBQWEsU0FBUyxVQUFVO0FBQUEsZ0JBRTFELHVCQUNDLDhDQUFDLGNBQU0sTUFBTSxXQUFaLEVBQXNCLE1BQU0sSUFBSSxJQUVqQyw4Q0FBQyxjQUFNLE1BQU0sVUFBWixFQUFxQixNQUFNLElBQUk7QUFBQTtBQUFBLFlBRXBDO0FBQUE7QUFBQSxRQUNGO0FBQUEsUUFDQSw4Q0FBQyxVQUFVLGVBQWUsZ0JBQXpCLEVBQXdDLE9BQU0sVUFBUyxXQUFVLE9BQ2hFO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxXQUFVO0FBQUEsWUFDVixTQUFTLE1BQU0sT0FBTyxLQUFLLHVEQUF1RDtBQUFBLFlBRWxGLHdEQUFDLGNBQU0sTUFBTSxRQUFaLEVBQW1CLE1BQU0sSUFBSTtBQUFBO0FBQUEsUUFDaEMsR0FDRjtBQUFBLFNBQ0Y7QUFBQSxJQUVKLENBQUM7QUFBQSxFQUNIO0FBQ0EsY0FBWSxXQUFXO0FBQ3pCO0FBRUEsSUFBTSx5QkFBeUIsSUFBSSxVQUFVLGNBQWMsS0FBSztBQUFBLEVBQzlELFVBQVU7QUFBQSxFQUNWLGFBQWEsY0FBTSxLQUFLO0FBQUEsRUFDeEIsU0FBUyxPQUFPLFNBQVMsTUFBTSxVQUFVO0FBQ3ZDLFVBQU0sU0FBUyxtQkFBVyxRQUFRLEtBQUs7QUFDdkMsVUFBTSxNQUFNLE9BQU87QUFDbkIsVUFBTSxPQUFPLE9BQU87QUFFcEIsVUFBTSxtQkFBbUI7QUFBQSxNQUN2QjtBQUFBLE1BQ0EsTUFBTSxTQUFTLE1BQU0sVUFBVSxTQUFTLFlBQVksWUFBWSxHQUFHLElBQUk7QUFBQSxJQUN6RTtBQUNBLDZCQUF5QixnQkFBZ0I7QUFBQSxFQUMzQztBQUFBLEVBQ0EsV0FBVyxDQUFDLE9BQU8sU0FBUyxXQUFXO0FBQ3JDLFVBQU0sU0FBUyxtQkFBVyxLQUFLO0FBQy9CLFVBQU0sT0FBTyxVQUFVLElBQUksS0FBSyxPQUFPLEdBQUcsR0FBRztBQUM3QyxXQUFPLFNBQVMsVUFBVSxJQUFJLEtBQUssWUFBWSxTQUFTLFVBQVUsSUFBSSxLQUFLO0FBQUEsRUFDN0U7QUFDRixDQUFDO0FBRUQsdUJBQXVCLFNBQVM7IiwKICAibmFtZXMiOiBbImltcG9ydF9qc3hfcnVudGltZSIsICJSZWFjdERPTSIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdF9kb20iLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgIkNvbmZpcm1EaWFsb2ciLCAiUmVhY3QiLCAiUmVhY3RET00iLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIl0KfQo=
