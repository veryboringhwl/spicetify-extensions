await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));

// shared/api/parseProps.ts
function parseProps(props) {
  if (!props) return {};
  const parsed = {};
  const mergeProps = (source, target) => {
    if (!source || typeof source !== "object") return;
    for (const key in source) {
      if (Object.hasOwn(source, key)) {
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

// tasks/shims/jsx-runtime-shim.ts
var { Fragment, jsx, jsxs } = Spicetify.ReactJSX;

// shared/components/icons.tsx
var iconData = {
  editButton: {
    path: "M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z",
    size: 24
  },
  settings: {
    path: "M7.96 5.33a2.67 2.67 90 100 5.34 2.67 2.67 90 000-5.34ZM6.67 8A1.33 1.33 90 119.33 8 1.33 1.33 90 016.67 8Zm4.82-4.81a.95.94 90 01-1.1-.75L10.05.55A.47.47 90 009.68.17 8.1 8.1 90 006.32.17.47.47 90 005.96.55L5.61 2.44a.95.95 90 01-1.25.71L2.55 2.51a.47.47 90 00-.51.13C1.28 3.47.71 4.46.36 5.53a.47.47 90 00.14.51L1.97 7.28a.94.94 90 010 1.43L.5 9.95a.47.47 90 00-.14.51 7.98 7.98 90 001.68 2.9.47.47 90 00.51.13l1.81-.65a.94.94 90 011.25.72l.34 1.89c.04.18.18.33.37.37a8.1 8.1 90 003.36 0 .47.47 90 00.37-.37l.34-1.89a.95.95 90 011.25-.72l1.81.65c.18.06.38.01.51-.13.76-.84 1.34-1.82 1.68-2.9a.47.47 90 00-.14-.5L14.03 8.72a.94.94 90 010-1.44L15.5 6.04a.47.47 90 00.14-.5 7.98 7.98 90 00-1.68-2.9.47.47 90 00-.51-.13l-1.81.65a.95.95 90 01-.15.04Zm-8.82.78 1.25.44a2.28 2.28 90 003-1.73l.24-1.3a6.81 6.81 90 011.68 0l.24 1.3a2.28 2.28 90 003.01 1.73l1.24-.44c.34.44.63.93.84 1.44l-1 .85a2.27 2.27 90 000 3.48l1 .85a6.65 6.65 90 01-.84 1.44l-1.24-.44A2.28 2.28 90 009.08 13.32l-.24 1.29a6.8 6.8 90 01-1.69 0l-.23-1.29A2.28 2.28 90 003.91 11.59l-1.24.44a6.65 6.65 90 01-.84-1.44l1-.86a2.27 2.27 90 000-3.47l-1-.85c.21-.51.5-1 .84-1.44Z",
    size: 16
  },
  github: {
    path: "M12.2135 0C18.947 0 24.4267 5.5 24.4066 12.3041c0 5.4391-3.4983 10.0428-8.3513 11.6728-.6065.1223-.829-.265-.829-.591 0-.4072.02-1.7315.02-3.3815 0-1.1613-.384-1.8945-.829-2.2815 2.73-.3058 5.581-1.3445 5.581-6.0708 0-1.3445-.465-2.4445-1.2537-3.3.1213-.3055.5463-1.5688-.1212-3.2595 0 0-1.0312-.326-3.3567 1.263-.9707-.2648-2.0219-.4075-3.0532-.4075A11.7425 11.7425 90 009.16 6.3556c-2.3252-1.589-3.3565-1.263-3.3565-1.263-.6675 1.6907-.2427 2.954-.1215 3.2595-.7685.8555-1.2535 1.9555-1.2535 3.3 0 4.7263 2.8509 5.7855 5.5607 6.0708-.3437.3055-.6675.8555-.7685 1.65-.7077.326-2.467.8555-3.5587-1.0185 0 0-.6472-1.1815-1.8807-1.263 0 0-1.193 0-.081.7538 0 0 .809.3665 1.355 1.7925 0 0 .7075 2.2002 4.105 1.4667 0 1.0188.02 1.9965.02 2.2818 0 .3258-.2222.713-.829.5905C3.4983 22.3472 0 17.7432 0 12.3042 0 5.5 5.4597 0 12.2135 0Z",
    size: 24
  },
  close: {
    path: "M31.098 29.794 16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143",
    size: 32
  },
  warning: {
    path: "M13 14V9H11v5Zm0 2H11v2h2Zm8.884 3.5A1 1 0 0121 21H3a1 1 0 01-.884-1.468l9-17c.346-.654 1.422-.654 1.768 0Z",
    size: 24
  },
  more: {
    path: "M3 8A1.5 1.5 0 110 8a1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    size: 16
  },
  questionMark: {
    path: "M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333S7.405 20.333 12 20.333 20.333 16.595 20.333 12c0-4.595-3.738-8.333-8.333-8.333ZM12 15.5a1 1 0 110 2 1 1 0 010-2Zm0-8.75a2.75 2.75 0 012.75 2.75c0 1.01-.297 1.574-1.051 2.359l-.169.171c-.622.622-.78.886-.78 1.47a.75.75 0 01-1.5 0c0-1.01.297-1.574 1.051-2.359l-.169-.171c.622-.622.78-.886.78-1.47a1.25 1.25 0 00-2.493-.128l-.007.128a.75.75 0 01-1.5 0A2.75 2.75 0 0112 6.75Z",
    size: 24
  },
  dropdown: {
    path: "M20.4614 6.3469a1.506 1.506 90 00-2.1125.1919L12 14.1564 5.651 6.5389a1.4997 1.4997 90 10-2.3028 1.922l7.5004 9.0004a1.4992 1.4992 90 002.3028 0l7.5004-9.0005a1.5019 1.5019 90 00-.1904-2.1139Z",
    size: 24
  },
  palette: {
    path: "M12 2c5.461 0 9.965 4.012 9.992 8.84 0 3.051-2.504 5.554-5.555 5.554H14.441a1.64 1.64 0 00-1.668 1.668c0 .473.148.836.438 1.125.257.29.437.688.437 1.125C13.648 21.254 12.926 22 12 22 6.5 22 2 17.5 2 12S6.5 2 12 2Z",
    size: 24
  },
  duplicate: {
    path: "M15 3.5c0-.5-.5-1-1-1H11V1c0-.5-.5-1-1-1H2C1.5 0 1 .5 1 1V11.5c0 .5.5 1 1 1H4.5V15c0 .5.5 1 1 1H14c.5 0 1-.5 1-1ZM2.5 2c0-.25.25-.5.5-.5H9c.25 0 .5.25.5.5v8.5c0 .25-.25.5-.5.5H3c-.25 0-.5-.25-.5-.5Zm4 12.5c-.25 0-.5-.25-.5-.5V12.5h4c.5 0 1-.5 1-1V4h2c.25 0 .5.25.5.5V14c0 .25-.25.5-.5.5Z",
    size: 16
  },
  terminal: {
    path: "M3.924 5.02a.75.75 0 011.056-.096l3 2.5a.75.75 0 010 1.152l-3 2.5a.75.75 0 11-.96-1.152L6.328 8 4.02 6.076A.75.75 0 013.924 5.02zM8.25 10.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zM0 3.25A2.25 2.25 0 012.25 1h11.5A2.25 2.25 0 0116 3.25v9.5A2.25 2.25 0 0113.75 15H2.25A2.25 2.25 0 010 12.75v-9.5zm2.25-.75a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75H2.25z",
    size: 16
  },
  customArtwork: {
    path: "M0 2v12a2 2 90 002 2h12a2 2 90 002-2V7.33l-1.33 1.33v5.33a.66.66 90 01-.66.66H2a.66.66 90 01-.66-.66V2A.66.66 90 012 1.34h9.66L13 0H2A2 2 90 000 2zm2.66 3.33C4.32 5 4.99 3.67 5.32 2.67h.33c.33 1 1 2.33 2.66 2.6v.33c-1.66.33-2.33 1.66-2.66 2.66h-.33c-.33-1-1-2.33-2.66-2.66zm13-2.66a1.33 1.33 90 00-1.66 0L7 9.33a0 0 90 000 0l-1.66 3a.33.33 90 00.33.33l3-1.66a0 0 90 000 0l7-7a1.33 1.33 90 000-1.33z",
    size: 16
  },
  play: {
    path: "M3.3333 3.516c0-1.138 1.2173-1.8613 2.2167-1.318l8.2413 4.484c1.044.5687 1.044 2.0673 0 2.6353L5.55 13.8013C4.5507 14.3453 3.3333 13.6213 3.3333 12.484V3.516Z",
    size: 16
  },
  pause: {
    path: "M3.8307 2A1.1667 1.1667 90 002.664 3.1667V12.8333C2.664 13.4773 3.1867 14 3.8307 14H6.164A1.1667 1.1667 90 007.3307 12.8333V3.1667A1.1667 1.1667 90 006.164 2H3.8307ZM9.8307 2A1.1667 1.1667 90 008.664 3.1667V12.8333C8.664 13.4773 9.1867 14 9.8307 14H12.164A1.1667 1.1667 90 0013.3307 12.8333V3.1667A1.1667 1.1667 90 0012.164 2H9.8307Z",
    size: 16
  },
  power: {
    path: "M11.6081 2.2045c1.394.8028 2.484 2.0434 3.101 3.529.6169 1.4856.7264 3.1334.3112 4.6877-.4152 1.5542-1.3317 2.928-2.6072 3.9081-1.2755.9801-2.8389 1.5119-4.4478 1.5126-1.6086.0009-3.1726-.5292-4.4492-1.508S1.3216 11.9823.9049 10.4286c-.4168-1.5538-.3091-3.2017.3064-4.6879.6153-1.4863 1.704-2.728 3.0972-3.5323.3495-.2018.7963-.0821.998.2674.2018.3495.0821.7963-.2674.998-1.1146.6434-1.9855 1.6368-2.4779 2.8258-.4923 1.1891-.5785 2.5074-.2451 3.7504.3334 1.2429 1.0677 2.3412 2.0891 3.1243 1.0213.783 2.2725 1.2071 3.5593 1.2064 1.287-.0007 2.5377-.426 3.5582-1.2102 1.0204-.7842 1.7537-1.8832 2.0858-3.1264.3321-1.2433.2445-2.5616-.249-3.75-.4937-1.1885-1.3657-2.1809-2.4808-2.8232-.3497-.2014-.4699-.6481-.2685-.9978.2014-.3496.6481-.4699.9978-.2685ZM8.6922.7424v5.845c0 .4035-.3271.7306-.7306.7306s-.7306-.3271-.7306-.7306V.7424c0-.4035.3271-.7306.7306-.7306s.7306.3271.7306.7306Z",
    size: 16
  },
  restart: {
    path: "M12.5002 8C12.5002 5.51472 10.4855 3.5 8.0002 3.5C6.66806 3.5 5.47057 4.07854 4.64593 5H6.2502C6.66441 5 7.0002 5.33579 7.0002 5.75C7.0002 6.16421 6.66441 6.5 6.2502 6.5H3.2502C2.83598 6.5 2.5002 6.16421 2.5002 5.75V2.75C2.5002 2.33579 2.83598 2 3.2502 2C3.66441 2 4.0002 2.33579 4.0002 2.75V3.52793C5.06126 2.57829 6.46302 2 8.0002 2C11.3139 2 14.0002 4.68629 14.0002 8C14.0002 11.3137 11.3139 14 8.0002 14C4.97538 14 2.47448 11.7624 2.06031 8.85192C2.00195 8.44184 2.28708 8.0621 2.69717 8.00374C3.10725 7.94538 3.48699 8.23052 3.54535 8.6406C3.8558 10.8222 5.73271 12.5 8.0002 12.5C10.4855 12.5 12.5002 10.4853 12.5002 8Z",
    size: 16
  },
  reload: {
    path: "M3.5 8C3.5 5.51472 5.51472 3.5 8 3.5C9.33213 3.5 10.5296 4.07854 11.3543 5H9.75C9.33579 5 9 5.33579 9 5.75C9 6.16421 9.33579 6.5 9.75 6.5H12.75C13.1642 6.5 13.5 6.16421 13.5 5.75V2.75C13.5 2.33579 13.1642 2 12.75 2C12.3358 2 12 2.33579 12 2.75V3.52793C10.9389 2.57829 9.53718 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.0248 14 13.5257 11.7624 13.9399 8.85192C13.9982 8.44184 13.7131 8.0621 13.303 8.00374C12.8929 7.94538 12.5132 8.23052 12.4548 8.6406C12.1444 10.8222 10.2675 12.5 8 12.5C5.51472 12.5 3.5 10.4853 3.5 8Z",
    size: 16
  },
  book: {
    path: "M2.75 2C1.7835 2 1 2.7835 1 3.75V12.25C1 13.2165 1.7835 14 2.75 14H6C6.78802 14 7.49862 13.6686 8 13.1375C8.50139 13.6686 9.21198 14 10 14H13.25C14.2165 14 15 13.2165 15 12.25V3.75C15 2.7835 14.2165 2 13.25 2H10C9.21199 2 8.50138 2.33144 8 2.86253C7.49862 2.33144 6.78801 2 6 2H2.75ZM7.25 4.75V11.25C7.25 11.9404 6.69036 12.5 6 12.5H2.75C2.61193 12.5 2.5 12.3881 2.5 12.25V3.75C2.5 3.61193 2.61193 3.5 2.75 3.5H6C6.69036 3.5 7.25 4.05964 7.25 4.75ZM8.75 11.25V4.75C8.75 4.05964 9.30964 3.5 10 3.5H13.25C13.3881 3.5 13.5 3.61193 13.5 3.75V12.25C13.5 12.3881 13.3881 12.5 13.25 12.5H10C9.30964 12.5 8.75 11.9404 8.75 11.25Z",
    size: 16
  },
  code: {
    path: "M10.2912 2.2089c.4315.1918.6259.6971.4341 1.1286l-4.56 10.26c-.1918.4315-.6971.6259-1.1286.434-.4315-.1917-.6258-.697-.4341-1.1285l4.56-10.26c.1918-.4315.6971-.6258 1.1286-.4341ZM4.128 4.9162c.3529.3137.3847.8541.071 1.2071L2.424 8.1202l1.7751 1.997c.3137.3529.2819.8934-.071 1.207-.3529.3137-.8933.2819-1.2071-.0709L.641 8.6882c-.288-.3239-.288-.8121 0-1.1361l2.28-2.565c.3137-.3529.8541-.3847 1.2071-.071Zm7.9839 0c.3529-.3137.8934-.2819 1.2071.071l2.28 2.565c.2878.324.2878.8121 0 1.1361l-2.28 2.565c-.3137.3528-.8542.3846-1.2071.0709-.3529-.3136-.3846-.8541-.071-1.207l1.7751-1.997-1.7751-1.997c-.3136-.3529-.2819-.8933.071-1.2071Z",
    size: 16
  },
  person: {
    path: "M8.11 1.325c1.2275-0 2.2225.995 2.2225 2.2225S9.3375 5.77 8.11 5.77c-1.2275 0-2.2225-.995-2.2225-2.2225 0-1.2275.995-2.2225 2.2225-2.2225Zm0-1.27c-1.9289 0-3.4925 1.5636-3.4925 3.4925S6.1811 7.04 8.11 7.04c1.9289 0 3.4925-1.5636 3.4925-3.4925C11.6025 1.6186 10.0389.055 8.11.055ZM12.555 9.58c.3506 0 .635.2843.635.635v.635c0 1.8258-1.8189 3.81-5.08 3.81-3.2612 0-5.08-1.9842-5.08-3.81v-.635c0-.3507.2843-.635.635-.635h8.89Zm0-1.27H3.665c-1.0521 0-1.905.8529-1.905 1.905v.635c0 2.5037 2.3616 5.08 6.35 5.08s6.35-2.5763 6.35-5.08v-.635c0-1.0521-.8529-1.905-1.905-1.905Z",
    size: 16
  }
};
var createReactComponent = (name) => {
  const { path, size: defaultSize } = iconData[name];
  const Component = ({ size = defaultSize, fill = "currentColor" }) => /* @__PURE__ */ jsx(
    "svg",
    {
      fill,
      height: size,
      role: "img",
      viewBox: `0 0 ${defaultSize} ${defaultSize}`,
      width: size,
      children: /* @__PURE__ */ jsx("path", { d: path })
    }
  );
  Component.defaultProps = {
    size: defaultSize,
    fill: "currentColor"
  };
  return Component;
};
var { raw, react, html } = Object.keys(iconData).reduce(
  (acc, name) => {
    acc.raw[name] = iconData[name].path;
    acc.react[name] = createReactComponent(name);
    acc.html[name] = `<path d="${iconData[name].path}"/>`;
    return acc;
  },
  {
    raw: {},
    react: {},
    html: {}
  }
);
var Icons = {
  React: react,
  HTML: html,
  RAW: raw
};

// shared/components/notification.tsx
var Notification = ({
  message = "",
  keyPrefix = "custom-notif",
  autoHideDuration = 3e3,
  backgroundColour = "#fff",
  colour = "#000",
  isWarning = false
}) => {
  const content = isWarning ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Icons.React.warning, { size: 24 }),
    /* @__PURE__ */ jsx("span", { children: message })
  ] }) : /* @__PURE__ */ jsx("span", { children: message });
  const BackgroundColour = isWarning ? "#ff9800" : backgroundColour;
  const Colour = isWarning ? "#fff" : colour;
  try {
    Spicetify.Snackbar.enqueueCustomSnackbar(keyPrefix, {
      keyPrefix,
      autoHideDuration,
      children: /* @__PURE__ */ jsx(
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
    console.error("Error displaying notification:", error);
  }
};

// extensions/developerUtilities/src/app.ts
Spicetify.Mousetrap.bind("f8", async () => {
  debugger;
  Notification({
    message: "Devtools must be open do use debugger",
    isWarning: true
  });
});
await Spicetify.Platform.ProductStateAPI.productStateApi.putValues(
  {
    pairs: { "app-developer": "2" }
  },
  {}
);
var requestCount = 0;
var permanentlyDisabled = false;
Spicetify.Platform.ProductStateAPI.productStateApi.subValues(
  { keys: ["app-developer"] },
  async (data) => {
    if (permanentlyDisabled) {
      return;
    }
    if (requestCount < 5) {
      const current = data?.pairs?.["app-developer"];
      if (current !== "2") {
        console.log('"app-developer" value changed. Resetting to "2".');
        await Spicetify.Platform.ProductStateAPI.productStateApi.putValues(
          {
            pairs: { "app-developer": "2" }
          },
          {}
        );
        requestCount++;
      }
    } else {
      console.error("Rate limit exceeded for product state changes. Permanently disabling.");
      permanentlyDisabled = true;
    }
  }
);
var copyPlaylistPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Playlist props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  onClick: (context, _item, _event) => {
    const parsed = parseProps(context.props);
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
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
  }
});
var copyTrackPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Track props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  onClick: (context, _item, _event) => {
    const parsed = parseProps(context.props);
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
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.TRACK;
  }
});
var copyArtistPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Artist props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  onClick: (context, _item, _event) => {
    const parsed = parseProps(context.props);
    const filtered = {
      uri: parsed?.uri
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.ARTIST;
  }
});
var copyAlbumPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy Album props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  onClick: (context, _item, _event) => {
    const parsed = parseProps(context.props);
    const filtered = {
      uri: parsed?.uri,
      artistUri: parsed?.artistUri
    };
    Spicetify.Platform.ClipboardAPI.copy(filtered);
  },
  shouldAdd: (props) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.ALBUM;
  }
});
var copyAllPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Copy All props to clipboard",
  leadingIcon: Icons.HTML.duplicate,
  divider: "after",
  onClick: (context, _item, _event) => {
    Spicetify.Platform.ClipboardAPI.copy(context.props);
  },
  shouldAdd: () => true
});
var logContextMenuPropsItem = new Spicetify.ContextMenuV2.Item({
  children: "Log context menu props",
  leadingIcon: Icons.HTML.terminal,
  onClick: (context, item, event) => {
    console.log("Context:", context);
    console.log("Item:", item);
    console.log("Event:", event);
  },
  shouldAdd: () => true
});
var logEventsItem = new Spicetify.ContextMenuV2.Item({
  children: "Log Events Listeners",
  leadingIcon: Icons.HTML.terminal,
  onClick: () => {
    Notification({
      message: "Only goes away after a reload/restart",
      isWarning: true
    });
    Spicetify.Platform.PlayerAPI._events._emitter.addListeners({
      update: (event) => {
        console.log("PlayerAPI Update event:", event);
      },
      action: (event) => {
        console.log("PlayerAPI action event:", event);
      },
      error: (event) => {
        console.log("PlayerAPI error event:", event);
      },
      ready: (event) => {
        console.log("PlayerAPI ready event:", event);
      },
      queue_action_complete: (event) => {
        console.log("PlayerAPI queue_action_complete event:", event);
      },
      queue_update: (event) => {
        console.log("PlayerAPI queue_update event:", event);
      }
    });
    Spicetify.Platform.PlaylistAPI._events._emitter.addListeners({
      update: (event) => {
        console.log("PlaylistAPI update event:", event);
      },
      operation_complete: (event) => {
        console.log("PlaylistAPI operation_complete event:", event);
      }
    });
    Spicetify.Platform.RootlistAPI._events._emitter.addListeners({
      operation: (event) => {
        console.log("RootlistAPI operation event:", event);
      },
      operation_complete: (event) => {
        console.log("RootlistAPI operation_complete event:", event);
      },
      update: (event) => {
        console.log("RootlistAPI update event:", event);
      },
      update_item: (event) => {
        console.log("RootlistAPI update_item event:", event);
      }
    });
    Spicetify.Platform.PlaybackAPI._events._emitter.addListeners({
      muted_changed: (event) => {
        console.log("PlaybackAPI muted_changed event:", event);
      },
      volume: (event) => {
        console.log("PlaybackAPI volume event:", event);
      }
    });
    Spicetify.Platform.LocalStorageAPI._events._emitter.addListeners({
      update: (event) => {
        console.log("LocalStorageAPI update event:", event);
      }
    });
  },
  shouldAdd: () => true
});
function patchUbiLogger() {
  const eventSender = Spicetify.Platform.UBILogger.ubiLogger.eventSender;
  if (eventSender.send.name === "patchedSend") {
    Spicetify.showNotification("UBI Event Logger is already active.");
    return;
  }
  const originalSend = eventSender.send;
  function patchedSend(...args) {
    const event = args[0];
    const eventName = event?.name || "Unknown Event";
    console.groupCollapsed(`Intercepted Spotify UBI Event: ${eventName}`);
    console.log("Arguments:", args);
    console.log("Timestamp:", (/* @__PURE__ */ new Date()).toISOString());
    console.trace("Call stack");
    console.groupEnd();
    return originalSend.apply(this, args);
  }
  eventSender.send = patchedSend;
  Spicetify.showNotification("UBI Event Logger patch applied.");
}
var logUbiEventsItem = new Spicetify.ContextMenuV2.Item({
  children: "Log User Behavior Insights Events",
  leadingIcon: Icons.HTML.person,
  onClick: () => {
    Notification({
      message: "Only goes away after a reload/restart",
      isWarning: true
    });
    patchUbiLogger();
  },
  shouldAdd: () => true
});
var reloadSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Reload Spotify",
  leadingIcon: Icons.HTML.reload,
  onClick: () => {
    location.reload();
  },
  shouldAdd: () => true
});
var restartSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Restart Spotify",
  leadingIcon: Icons.HTML.restart,
  onClick: async () => {
    await Spicetify.Platform.LifecycleAPI.restart();
  },
  shouldAdd: () => true
});
var closeSpotify = new Spicetify.ContextMenuV2.Item({
  children: "Close Spotify",
  leadingIcon: Icons.HTML.power,
  onClick: async () => {
    await Spicetify.Platform.LifecycleAPI.shutdown();
  },
  shouldAdd: () => true
});
var windowsSubMenu = new Spicetify.ContextMenuV2.ItemSubMenu({
  text: "Window Utils",
  leadingIcon: Icons.HTML.power,
  items: [reloadSpotify, restartSpotify, closeSpotify],
  shouldAdd: () => true
});
var devUtilsSubMenu = new Spicetify.ContextMenuV2.ItemSubMenu({
  text: "Developer Utils",
  leadingIcon: Icons.HTML.code,
  divider: "after",
  items: [
    copyAlbumPropsItem,
    copyArtistPropsItem,
    copyPlaylistPropsItem,
    copyTrackPropsItem,
    copyAllPropsItem,
    logContextMenuPropsItem,
    logEventsItem,
    logUbiEventsItem,
    windowsSubMenu
  ],
  shouldAdd: () => true
});
devUtilsSubMenu.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3NoYXJlZC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi50c3giLCAiLi4vZXh0ZW5zaW9ucy9kZXZlbG9wZXJVdGlsaXRpZXMvc3JjL2FwcC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsidHlwZSBNZXJnZWRPYmplY3QgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG5pbnRlcmZhY2UgUHJvcHNJbnB1dCBleHRlbmRzIE1lcmdlZE9iamVjdCB7XG4gIGl0ZW0/OiBNZXJnZWRPYmplY3Q7XG4gIHJlZmVyZW5jZT86IE1lcmdlZE9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJvcHMocHJvcHM6IFByb3BzSW5wdXQgfCBudWxsIHwgdW5kZWZpbmVkKTogTWVyZ2VkT2JqZWN0IHtcbiAgaWYgKCFwcm9wcykgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IHBhcnNlZDogTWVyZ2VkT2JqZWN0ID0ge307XG5cbiAgY29uc3QgbWVyZ2VQcm9wcyA9IChzb3VyY2U6IE1lcmdlZE9iamVjdCB8IG51bGwgfCB1bmRlZmluZWQsIHRhcmdldDogTWVyZ2VkT2JqZWN0KSA9PiB7XG4gICAgaWYgKCFzb3VyY2UgfHwgdHlwZW9mIHNvdXJjZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd24oc291cmNlLCBrZXkpKSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBtZXJnZVByb3BzKHByb3BzLCBwYXJzZWQpO1xuICBtZXJnZVByb3BzKHByb3BzLml0ZW0sIHBhcnNlZCk7XG4gIG1lcmdlUHJvcHMocHJvcHMucmVmZXJlbmNlLCBwYXJzZWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iLCAiZXhwb3J0IGNvbnN0IHsgRnJhZ21lbnQsIGpzeCwganN4cyB9ID0gU3BpY2V0aWZ5LlJlYWN0SlNYO1xuIiwgImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uUHJvcHMge1xuICBzaXplPzogbnVtYmVyO1xuICBmaWxsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZWFjdEljb25Db21wb25lbnQgPSBGQzxJY29uUHJvcHM+ICYge1xuICBkZWZhdWx0UHJvcHM/OiBQYXJ0aWFsPEljb25Qcm9wcz47XG59O1xuXG5jb25zdCBpY29uRGF0YSA9IHtcbiAgZWRpdEJ1dHRvbjoge1xuICAgIHBhdGg6IFwiTTE3LjMxOCAxLjk3NWEzLjMyOSAzLjMyOSAwIDExNC43MDcgNC43MDdMOC40NTEgMjAuMjU2Yy0uNDkuNDktMS4wODIuODY3LTEuNzM1IDEuMTAzTDIuMzQgMjIuOTRhMSAxIDAgMDEtMS4yOC0xLjI4bDEuNTgxLTQuMzc2YTQuNzI2IDQuNzI2IDAgMDExLjEwMy0xLjczNUwxNy4zMTggMS45NzV6bTMuMjkzIDEuNDE0YTEuMzI5IDEuMzI5IDAgMDAtMS44OCAwTDUuMTU5IDE2Ljk2M2MtLjI4My4yODMtLjUuNjI0LS42MzYgMWwtLjg1NyAyLjM3MiAyLjM3MS0uODU3YTIuNzI2IDIuNzI2IDAgMDAxLjAwMS0uNjM2TDIwLjYxMSA1LjI2OGExLjMyOSAxLjMyOSAwIDAwMC0xLjg3OXpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgc2V0dGluZ3M6IHtcbiAgICBwYXRoOiBcIk03Ljk2IDUuMzNhMi42NyAyLjY3IDkwIDEwMCA1LjM0IDIuNjcgMi42NyA5MCAwMDAtNS4zNFpNNi42NyA4QTEuMzMgMS4zMyA5MCAxMTkuMzMgOCAxLjMzIDEuMzMgOTAgMDE2LjY3IDhabTQuODItNC44MWEuOTUuOTQgOTAgMDEtMS4xLS43NUwxMC4wNS41NUEuNDcuNDcgOTAgMDA5LjY4LjE3IDguMSA4LjEgOTAgMDA2LjMyLjE3LjQ3LjQ3IDkwIDAwNS45Ni41NUw1LjYxIDIuNDRhLjk1Ljk1IDkwIDAxLTEuMjUuNzFMMi41NSAyLjUxYS40Ny40NyA5MCAwMC0uNTEuMTNDMS4yOCAzLjQ3LjcxIDQuNDYuMzYgNS41M2EuNDcuNDcgOTAgMDAuMTQuNTFMMS45NyA3LjI4YS45NC45NCA5MCAwMTAgMS40M0wuNSA5Ljk1YS40Ny40NyA5MCAwMC0uMTQuNTEgNy45OCA3Ljk4IDkwIDAwMS42OCAyLjkuNDcuNDcgOTAgMDAuNTEuMTNsMS44MS0uNjVhLjk0Ljk0IDkwIDAxMS4yNS43MmwuMzQgMS44OWMuMDQuMTguMTguMzMuMzcuMzdhOC4xIDguMSA5MCAwMDMuMzYgMCAuNDcuNDcgOTAgMDAuMzctLjM3bC4zNC0xLjg5YS45NS45NSA5MCAwMTEuMjUtLjcybDEuODEuNjVjLjE4LjA2LjM4LjAxLjUxLS4xMy43Ni0uODQgMS4zNC0xLjgyIDEuNjgtMi45YS40Ny40NyA5MCAwMC0uMTQtLjVMMTQuMDMgOC43MmEuOTQuOTQgOTAgMDEwLTEuNDRMMTUuNSA2LjA0YS40Ny40NyA5MCAwMC4xNC0uNSA3Ljk4IDcuOTggOTAgMDAtMS42OC0yLjkuNDcuNDcgOTAgMDAtLjUxLS4xM2wtMS44MS42NWEuOTUuOTUgOTAgMDEtLjE1LjA0Wm0tOC44Mi43OCAxLjI1LjQ0YTIuMjggMi4yOCA5MCAwMDMtMS43M2wuMjQtMS4zYTYuODEgNi44MSA5MCAwMTEuNjggMGwuMjQgMS4zYTIuMjggMi4yOCA5MCAwMDMuMDEgMS43M2wxLjI0LS40NGMuMzQuNDQuNjMuOTMuODQgMS40NGwtMSAuODVhMi4yNyAyLjI3IDkwIDAwMCAzLjQ4bDEgLjg1YTYuNjUgNi42NSA5MCAwMS0uODQgMS40NGwtMS4yNC0uNDRBMi4yOCAyLjI4IDkwIDAwOS4wOCAxMy4zMmwtLjI0IDEuMjlhNi44IDYuOCA5MCAwMS0xLjY5IDBsLS4yMy0xLjI5QTIuMjggMi4yOCA5MCAwMDMuOTEgMTEuNTlsLTEuMjQuNDRhNi42NSA2LjY1IDkwIDAxLS44NC0xLjQ0bDEtLjg2YTIuMjcgMi4yNyA5MCAwMDAtMy40N2wtMS0uODVjLjIxLS41MS41LTEgLjg0LTEuNDRaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIGdpdGh1Yjoge1xuICAgIHBhdGg6IFwiTTEyLjIxMzUgMEMxOC45NDcgMCAyNC40MjY3IDUuNSAyNC40MDY2IDEyLjMwNDFjMCA1LjQzOTEtMy40OTgzIDEwLjA0MjgtOC4zNTEzIDExLjY3MjgtLjYwNjUuMTIyMy0uODI5LS4yNjUtLjgyOS0uNTkxIDAtLjQwNzIuMDItMS43MzE1LjAyLTMuMzgxNSAwLTEuMTYxMy0uMzg0LTEuODk0NS0uODI5LTIuMjgxNSAyLjczLS4zMDU4IDUuNTgxLTEuMzQ0NSA1LjU4MS02LjA3MDggMC0xLjM0NDUtLjQ2NS0yLjQ0NDUtMS4yNTM3LTMuMy4xMjEzLS4zMDU1LjU0NjMtMS41Njg4LS4xMjEyLTMuMjU5NSAwIDAtMS4wMzEyLS4zMjYtMy4zNTY3IDEuMjYzLS45NzA3LS4yNjQ4LTIuMDIxOS0uNDA3NS0zLjA1MzItLjQwNzVBMTEuNzQyNSAxMS43NDI1IDkwIDAwOS4xNiA2LjM1NTZjLTIuMzI1Mi0xLjU4OS0zLjM1NjUtMS4yNjMtMy4zNTY1LTEuMjYzLS42Njc1IDEuNjkwNy0uMjQyNyAyLjk1NC0uMTIxNSAzLjI1OTUtLjc2ODUuODU1NS0xLjI1MzUgMS45NTU1LTEuMjUzNSAzLjMgMCA0LjcyNjMgMi44NTA5IDUuNzg1NSA1LjU2MDcgNi4wNzA4LS4zNDM3LjMwNTUtLjY2NzUuODU1NS0uNzY4NSAxLjY1LS43MDc3LjMyNi0yLjQ2Ny44NTU1LTMuNTU4Ny0xLjAxODUgMCAwLS42NDcyLTEuMTgxNS0xLjg4MDctMS4yNjMgMCAwLTEuMTkzIDAtLjA4MS43NTM4IDAgMCAuODA5LjM2NjUgMS4zNTUgMS43OTI1IDAgMCAuNzA3NSAyLjIwMDIgNC4xMDUgMS40NjY3IDAgMS4wMTg4LjAyIDEuOTk2NS4wMiAyLjI4MTggMCAuMzI1OC0uMjIyMi43MTMtLjgyOS41OTA1QzMuNDk4MyAyMi4zNDcyIDAgMTcuNzQzMiAwIDEyLjMwNDIgMCA1LjUgNS40NTk3IDAgMTIuMjEzNSAwWlwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBjbG9zZToge1xuICAgIHBhdGg6IFwiTTMxLjA5OCAyOS43OTQgMTYuOTU1IDE1LjY1IDMxLjA5NyAxLjUxIDI5LjY4My4wOTMgMTUuNTQgMTQuMjM3IDEuNC4wOTQtLjAxNiAxLjUwOCAxNC4xMjYgMTUuNjUtLjAxNiAyOS43OTVsMS40MTQgMS40MTRMMTUuNTQgMTcuMDY1bDE0LjE0NCAxNC4xNDNcIixcbiAgICBzaXplOiAzMixcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIHBhdGg6IFwiTTEzIDE0VjlIMTF2NVptMCAySDExdjJoMlptOC44ODQgMy41QTEgMSAwIDAxMjEgMjFIM2ExIDEgMCAwMS0uODg0LTEuNDY4bDktMTdjLjM0Ni0uNjU0IDEuNDIyLS42NTQgMS43NjggMFpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgbW9yZToge1xuICAgIHBhdGg6IFwiTTMgOEExLjUgMS41IDAgMTEwIDhhMS41IDEuNSAwIDAxMyAwem02LjUgMGExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpNMTYgOGExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbiAgcXVlc3Rpb25NYXJrOiB7XG4gICAgcGF0aDogXCJNMTIgMmM1LjUyMyAwIDEwIDQuNDc4IDEwIDEwcy00LjQ3NyAxMC0xMCAxMFMyIDE3LjUyMiAyIDEyIDYuNDc3IDIgMTIgMlptMCAxLjY2N2MtNC41OTUgMC04LjMzMyAzLjczOC04LjMzMyA4LjMzM1M3LjQwNSAyMC4zMzMgMTIgMjAuMzMzIDIwLjMzMyAxNi41OTUgMjAuMzMzIDEyYzAtNC41OTUtMy43MzgtOC4zMzMtOC4zMzMtOC4zMzNaTTEyIDE1LjVhMSAxIDAgMTEwIDIgMSAxIDAgMDEwLTJabTAtOC43NWEyLjc1IDIuNzUgMCAwMTIuNzUgMi43NWMwIDEuMDEtLjI5NyAxLjU3NC0xLjA1MSAyLjM1OWwtLjE2OS4xNzFjLS42MjIuNjIyLS43OC44ODYtLjc4IDEuNDdhLjc1Ljc1IDAgMDEtMS41IDBjMC0xLjAxLjI5Ny0xLjU3NCAxLjA1MS0yLjM1OWwtLjE2OS0uMTcxYy42MjItLjYyMi43OC0uODg2Ljc4LTEuNDdhMS4yNSAxLjI1IDAgMDAtMi40OTMtLjEyOGwtLjAwNy4xMjhhLjc1Ljc1IDAgMDEtMS41IDBBMi43NSAyLjc1IDAgMDExMiA2Ljc1WlwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBkcm9wZG93bjoge1xuICAgIHBhdGg6IFwiTTIwLjQ2MTQgNi4zNDY5YTEuNTA2IDEuNTA2IDkwIDAwLTIuMTEyNS4xOTE5TDEyIDE0LjE1NjQgNS42NTEgNi41Mzg5YTEuNDk5NyAxLjQ5OTcgOTAgMTAtMi4zMDI4IDEuOTIybDcuNTAwNCA5LjAwMDRhMS40OTkyIDEuNDk5MiA5MCAwMDIuMzAyOCAwbDcuNTAwNC05LjAwMDVhMS41MDE5IDEuNTAxOSA5MCAwMC0uMTkwNC0yLjExMzlaXCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBwYXRoOiBcIk0xMiAyYzUuNDYxIDAgOS45NjUgNC4wMTIgOS45OTIgOC44NCAwIDMuMDUxLTIuNTA0IDUuNTU0LTUuNTU1IDUuNTU0SDE0LjQ0MWExLjY0IDEuNjQgMCAwMC0xLjY2OCAxLjY2OGMwIC40NzMuMTQ4LjgzNi40MzggMS4xMjUuMjU3LjI5LjQzNy42ODguNDM3IDEuMTI1QzEzLjY0OCAyMS4yNTQgMTIuOTI2IDIyIDEyIDIyIDYuNSAyMiAyIDE3LjUgMiAxMlM2LjUgMiAxMiAyWlwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBkdXBsaWNhdGU6IHtcbiAgICBwYXRoOiBcIk0xNSAzLjVjMC0uNS0uNS0xLTEtMUgxMVYxYzAtLjUtLjUtMS0xLTFIMkMxLjUgMCAxIC41IDEgMVYxMS41YzAgLjUuNSAxIDEgMUg0LjVWMTVjMCAuNS41IDEgMSAxSDE0Yy41IDAgMS0uNSAxLTFaTTIuNSAyYzAtLjI1LjI1LS41LjUtLjVIOWMuMjUgMCAuNS4yNS41LjV2OC41YzAgLjI1LS4yNS41LS41LjVIM2MtLjI1IDAtLjUtLjI1LS41LS41Wm00IDEyLjVjLS4yNSAwLS41LS4yNS0uNS0uNVYxMi41aDRjLjUgMCAxLS41IDEtMVY0aDJjLjI1IDAgLjUuMjUuNS41VjE0YzAgLjI1LS4yNS41LS41LjVaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIHRlcm1pbmFsOiB7XG4gICAgcGF0aDogXCJNMy45MjQgNS4wMmEuNzUuNzUgMCAwMTEuMDU2LS4wOTZsMyAyLjVhLjc1Ljc1IDAgMDEwIDEuMTUybC0zIDIuNWEuNzUuNzUgMCAxMS0uOTYtMS4xNTJMNi4zMjggOCA0LjAyIDYuMDc2QS43NS43NSAwIDAxMy45MjQgNS4wMnpNOC4yNSAxMC41YS43NS43NSAwIDAwMCAxLjVoM2EuNzUuNzUgMCAwMDAtMS41aC0zek0wIDMuMjVBMi4yNSAyLjI1IDAgMDEyLjI1IDFoMTEuNUEyLjI1IDIuMjUgMCAwMTE2IDMuMjV2OS41QTIuMjUgMi4yNSAwIDAxMTMuNzUgMTVIMi4yNUEyLjI1IDIuMjUgMCAwMTAgMTIuNzV2LTkuNXptMi4yNS0uNzVhLjc1Ljc1IDAgMDAtLjc1Ljc1djkuNWMwIC40MTQuMzM2Ljc1Ljc1Ljc1aDExLjVhLjc1Ljc1IDAgMDAuNzUtLjc1di05LjVhLjc1Ljc1IDAgMDAtLjc1LS43NUgyLjI1elwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBjdXN0b21BcnR3b3JrOiB7XG4gICAgcGF0aDogXCJNMCAydjEyYTIgMiA5MCAwMDIgMmgxMmEyIDIgOTAgMDAyLTJWNy4zM2wtMS4zMyAxLjMzdjUuMzNhLjY2LjY2IDkwIDAxLS42Ni42NkgyYS42Ni42NiA5MCAwMS0uNjYtLjY2VjJBLjY2LjY2IDkwIDAxMiAxLjM0aDkuNjZMMTMgMEgyQTIgMiA5MCAwMDAgMnptMi42NiAzLjMzQzQuMzIgNSA0Ljk5IDMuNjcgNS4zMiAyLjY3aC4zM2MuMzMgMSAxIDIuMzMgMi42NiAyLjZ2LjMzYy0xLjY2LjMzLTIuMzMgMS42Ni0yLjY2IDIuNjZoLS4zM2MtLjMzLTEtMS0yLjMzLTIuNjYtMi42NnptMTMtMi42NmExLjMzIDEuMzMgOTAgMDAtMS42NiAwTDcgOS4zM2EwIDAgOTAgMDAwIDBsLTEuNjYgM2EuMzMuMzMgOTAgMDAuMzMuMzNsMy0xLjY2YTAgMCA5MCAwMDAgMGw3LTdhMS4zMyAxLjMzIDkwIDAwMC0xLjMzelwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBwbGF5OiB7XG4gICAgcGF0aDogXCJNMy4zMzMzIDMuNTE2YzAtMS4xMzggMS4yMTczLTEuODYxMyAyLjIxNjctMS4zMThsOC4yNDEzIDQuNDg0YzEuMDQ0LjU2ODcgMS4wNDQgMi4wNjczIDAgMi42MzUzTDUuNTUgMTMuODAxM0M0LjU1MDcgMTQuMzQ1MyAzLjMzMzMgMTMuNjIxMyAzLjMzMzMgMTIuNDg0VjMuNTE2WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBwYXVzZToge1xuICAgIHBhdGg6IFwiTTMuODMwNyAyQTEuMTY2NyAxLjE2NjcgOTAgMDAyLjY2NCAzLjE2NjdWMTIuODMzM0MyLjY2NCAxMy40NzczIDMuMTg2NyAxNCAzLjgzMDcgMTRINi4xNjRBMS4xNjY3IDEuMTY2NyA5MCAwMDcuMzMwNyAxMi44MzMzVjMuMTY2N0ExLjE2NjcgMS4xNjY3IDkwIDAwNi4xNjQgMkgzLjgzMDdaTTkuODMwNyAyQTEuMTY2NyAxLjE2NjcgOTAgMDA4LjY2NCAzLjE2NjdWMTIuODMzM0M4LjY2NCAxMy40NzczIDkuMTg2NyAxNCA5LjgzMDcgMTRIMTIuMTY0QTEuMTY2NyAxLjE2NjcgOTAgMDAxMy4zMzA3IDEyLjgzMzNWMy4xNjY3QTEuMTY2NyAxLjE2NjcgOTAgMDAxMi4xNjQgMkg5LjgzMDdaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIHBvd2VyOiB7XG4gICAgcGF0aDogXCJNMTEuNjA4MSAyLjIwNDVjMS4zOTQuODAyOCAyLjQ4NCAyLjA0MzQgMy4xMDEgMy41MjkuNjE2OSAxLjQ4NTYuNzI2NCAzLjEzMzQuMzExMiA0LjY4NzctLjQxNTIgMS41NTQyLTEuMzMxNyAyLjkyOC0yLjYwNzIgMy45MDgxLTEuMjc1NS45ODAxLTIuODM4OSAxLjUxMTktNC40NDc4IDEuNTEyNi0xLjYwODYuMDAwOS0zLjE3MjYtLjUyOTItNC40NDkyLTEuNTA4UzEuMzIxNiAxMS45ODIzLjkwNDkgMTAuNDI4NmMtLjQxNjgtMS41NTM4LS4zMDkxLTMuMjAxNy4zMDY0LTQuNjg3OS42MTUzLTEuNDg2MyAxLjcwNC0yLjcyOCAzLjA5NzItMy41MzIzLjM0OTUtLjIwMTguNzk2My0uMDgyMS45OTguMjY3NC4yMDE4LjM0OTUuMDgyMS43OTYzLS4yNjc0Ljk5OC0xLjExNDYuNjQzNC0xLjk4NTUgMS42MzY4LTIuNDc3OSAyLjgyNTgtLjQ5MjMgMS4xODkxLS41Nzg1IDIuNTA3NC0uMjQ1MSAzLjc1MDQuMzMzNCAxLjI0MjkgMS4wNjc3IDIuMzQxMiAyLjA4OTEgMy4xMjQzIDEuMDIxMy43ODMgMi4yNzI1IDEuMjA3MSAzLjU1OTMgMS4yMDY0IDEuMjg3LS4wMDA3IDIuNTM3Ny0uNDI2IDMuNTU4Mi0xLjIxMDIgMS4wMjA0LS43ODQyIDEuNzUzNy0xLjg4MzIgMi4wODU4LTMuMTI2NC4zMzIxLTEuMjQzMy4yNDQ1LTIuNTYxNi0uMjQ5LTMuNzUtLjQ5MzctMS4xODg1LTEuMzY1Ny0yLjE4MDktMi40ODA4LTIuODIzMi0uMzQ5Ny0uMjAxNC0uNDY5OS0uNjQ4MS0uMjY4NS0uOTk3OC4yMDE0LS4zNDk2LjY0ODEtLjQ2OTkuOTk3OC0uMjY4NVpNOC42OTIyLjc0MjR2NS44NDVjMCAuNDAzNS0uMzI3MS43MzA2LS43MzA2LjczMDZzLS43MzA2LS4zMjcxLS43MzA2LS43MzA2Vi43NDI0YzAtLjQwMzUuMzI3MS0uNzMwNi43MzA2LS43MzA2cy43MzA2LjMyNzEuNzMwNi43MzA2WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICByZXN0YXJ0OiB7XG4gICAgcGF0aDogXCJNMTIuNTAwMiA4QzEyLjUwMDIgNS41MTQ3MiAxMC40ODU1IDMuNSA4LjAwMDIgMy41QzYuNjY4MDYgMy41IDUuNDcwNTcgNC4wNzg1NCA0LjY0NTkzIDVINi4yNTAyQzYuNjY0NDEgNSA3LjAwMDIgNS4zMzU3OSA3LjAwMDIgNS43NUM3LjAwMDIgNi4xNjQyMSA2LjY2NDQxIDYuNSA2LjI1MDIgNi41SDMuMjUwMkMyLjgzNTk4IDYuNSAyLjUwMDIgNi4xNjQyMSAyLjUwMDIgNS43NVYyLjc1QzIuNTAwMiAyLjMzNTc5IDIuODM1OTggMiAzLjI1MDIgMkMzLjY2NDQxIDIgNC4wMDAyIDIuMzM1NzkgNC4wMDAyIDIuNzVWMy41Mjc5M0M1LjA2MTI2IDIuNTc4MjkgNi40NjMwMiAyIDguMDAwMiAyQzExLjMxMzkgMiAxNC4wMDAyIDQuNjg2MjkgMTQuMDAwMiA4QzE0LjAwMDIgMTEuMzEzNyAxMS4zMTM5IDE0IDguMDAwMiAxNEM0Ljk3NTM4IDE0IDIuNDc0NDggMTEuNzYyNCAyLjA2MDMxIDguODUxOTJDMi4wMDE5NSA4LjQ0MTg0IDIuMjg3MDggOC4wNjIxIDIuNjk3MTcgOC4wMDM3NEMzLjEwNzI1IDcuOTQ1MzggMy40ODY5OSA4LjIzMDUyIDMuNTQ1MzUgOC42NDA2QzMuODU1OCAxMC44MjIyIDUuNzMyNzEgMTIuNSA4LjAwMDIgMTIuNUMxMC40ODU1IDEyLjUgMTIuNTAwMiAxMC40ODUzIDEyLjUwMDIgOFpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbiAgcmVsb2FkOiB7XG4gICAgcGF0aDogXCJNMy41IDhDMy41IDUuNTE0NzIgNS41MTQ3MiAzLjUgOCAzLjVDOS4zMzIxMyAzLjUgMTAuNTI5NiA0LjA3ODU0IDExLjM1NDMgNUg5Ljc1QzkuMzM1NzkgNSA5IDUuMzM1NzkgOSA1Ljc1QzkgNi4xNjQyMSA5LjMzNTc5IDYuNSA5Ljc1IDYuNUgxMi43NUMxMy4xNjQyIDYuNSAxMy41IDYuMTY0MjEgMTMuNSA1Ljc1VjIuNzVDMTMuNSAyLjMzNTc5IDEzLjE2NDIgMiAxMi43NSAyQzEyLjMzNTggMiAxMiAyLjMzNTc5IDEyIDIuNzVWMy41Mjc5M0MxMC45Mzg5IDIuNTc4MjkgOS41MzcxOCAyIDggMkM0LjY4NjI5IDIgMiA0LjY4NjI5IDIgOEMyIDExLjMxMzcgNC42ODYyOSAxNCA4IDE0QzExLjAyNDggMTQgMTMuNTI1NyAxMS43NjI0IDEzLjkzOTkgOC44NTE5MkMxMy45OTgyIDguNDQxODQgMTMuNzEzMSA4LjA2MjEgMTMuMzAzIDguMDAzNzRDMTIuODkyOSA3Ljk0NTM4IDEyLjUxMzIgOC4yMzA1MiAxMi40NTQ4IDguNjQwNkMxMi4xNDQ0IDEwLjgyMjIgMTAuMjY3NSAxMi41IDggMTIuNUM1LjUxNDcyIDEyLjUgMy41IDEwLjQ4NTMgMy41IDhaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIGJvb2s6IHtcbiAgICBwYXRoOiBcIk0yLjc1IDJDMS43ODM1IDIgMSAyLjc4MzUgMSAzLjc1VjEyLjI1QzEgMTMuMjE2NSAxLjc4MzUgMTQgMi43NSAxNEg2QzYuNzg4MDIgMTQgNy40OTg2MiAxMy42Njg2IDggMTMuMTM3NUM4LjUwMTM5IDEzLjY2ODYgOS4yMTE5OCAxNCAxMCAxNEgxMy4yNUMxNC4yMTY1IDE0IDE1IDEzLjIxNjUgMTUgMTIuMjVWMy43NUMxNSAyLjc4MzUgMTQuMjE2NSAyIDEzLjI1IDJIMTBDOS4yMTE5OSAyIDguNTAxMzggMi4zMzE0NCA4IDIuODYyNTNDNy40OTg2MiAyLjMzMTQ0IDYuNzg4MDEgMiA2IDJIMi43NVpNNy4yNSA0Ljc1VjExLjI1QzcuMjUgMTEuOTQwNCA2LjY5MDM2IDEyLjUgNiAxMi41SDIuNzVDMi42MTE5MyAxMi41IDIuNSAxMi4zODgxIDIuNSAxMi4yNVYzLjc1QzIuNSAzLjYxMTkzIDIuNjExOTMgMy41IDIuNzUgMy41SDZDNi42OTAzNiAzLjUgNy4yNSA0LjA1OTY0IDcuMjUgNC43NVpNOC43NSAxMS4yNVY0Ljc1QzguNzUgNC4wNTk2NCA5LjMwOTY0IDMuNSAxMCAzLjVIMTMuMjVDMTMuMzg4MSAzLjUgMTMuNSAzLjYxMTkzIDEzLjUgMy43NVYxMi4yNUMxMy41IDEyLjM4ODEgMTMuMzg4MSAxMi41IDEzLjI1IDEyLjVIMTBDOS4zMDk2NCAxMi41IDguNzUgMTEuOTQwNCA4Ljc1IDExLjI1WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBjb2RlOiB7XG4gICAgcGF0aDogXCJNMTAuMjkxMiAyLjIwODljLjQzMTUuMTkxOC42MjU5LjY5NzEuNDM0MSAxLjEyODZsLTQuNTYgMTAuMjZjLS4xOTE4LjQzMTUtLjY5NzEuNjI1OS0xLjEyODYuNDM0LS40MzE1LS4xOTE3LS42MjU4LS42OTctLjQzNDEtMS4xMjg1bDQuNTYtMTAuMjZjLjE5MTgtLjQzMTUuNjk3MS0uNjI1OCAxLjEyODYtLjQzNDFaTTQuMTI4IDQuOTE2MmMuMzUyOS4zMTM3LjM4NDcuODU0MS4wNzEgMS4yMDcxTDIuNDI0IDguMTIwMmwxLjc3NTEgMS45OTdjLjMxMzcuMzUyOS4yODE5Ljg5MzQtLjA3MSAxLjIwNy0uMzUyOS4zMTM3LS44OTMzLjI4MTktMS4yMDcxLS4wNzA5TC42NDEgOC42ODgyYy0uMjg4LS4zMjM5LS4yODgtLjgxMjEgMC0xLjEzNjFsMi4yOC0yLjU2NWMuMzEzNy0uMzUyOS44NTQxLS4zODQ3IDEuMjA3MS0uMDcxWm03Ljk4MzkgMGMuMzUyOS0uMzEzNy44OTM0LS4yODE5IDEuMjA3MS4wNzFsMi4yOCAyLjU2NWMuMjg3OC4zMjQuMjg3OC44MTIxIDAgMS4xMzYxbC0yLjI4IDIuNTY1Yy0uMzEzNy4zNTI4LS44NTQyLjM4NDYtMS4yMDcxLjA3MDktLjM1MjktLjMxMzYtLjM4NDYtLjg1NDEtLjA3MS0xLjIwN2wxLjc3NTEtMS45OTctMS43NzUxLTEuOTk3Yy0uMzEzNi0uMzUyOS0uMjgxOS0uODkzMy4wNzEtMS4yMDcxWlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBwZXJzb246IHtcbiAgICBwYXRoOiBcIk04LjExIDEuMzI1YzEuMjI3NS0wIDIuMjIyNS45OTUgMi4yMjI1IDIuMjIyNVM5LjMzNzUgNS43NyA4LjExIDUuNzdjLTEuMjI3NSAwLTIuMjIyNS0uOTk1LTIuMjIyNS0yLjIyMjUgMC0xLjIyNzUuOTk1LTIuMjIyNSAyLjIyMjUtMi4yMjI1Wm0wLTEuMjdjLTEuOTI4OSAwLTMuNDkyNSAxLjU2MzYtMy40OTI1IDMuNDkyNVM2LjE4MTEgNy4wNCA4LjExIDcuMDRjMS45Mjg5IDAgMy40OTI1LTEuNTYzNiAzLjQ5MjUtMy40OTI1QzExLjYwMjUgMS42MTg2IDEwLjAzODkuMDU1IDguMTEuMDU1Wk0xMi41NTUgOS41OGMuMzUwNiAwIC42MzUuMjg0My42MzUuNjM1di42MzVjMCAxLjgyNTgtMS44MTg5IDMuODEtNS4wOCAzLjgxLTMuMjYxMiAwLTUuMDgtMS45ODQyLTUuMDgtMy44MXYtLjYzNWMwLS4zNTA3LjI4NDMtLjYzNS42MzUtLjYzNWg4Ljg5Wm0wLTEuMjdIMy42NjVjLTEuMDUyMSAwLTEuOTA1Ljg1MjktMS45MDUgMS45MDV2LjYzNWMwIDIuNTAzNyAyLjM2MTYgNS4wOCA2LjM1IDUuMDhzNi4zNS0yLjU3NjMgNi4zNS01LjA4di0uNjM1YzAtMS4wNTIxLS44NTI5LTEuOTA1LTEuOTA1LTEuOTA1WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxufSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIEljb25OYW1lID0ga2V5b2YgdHlwZW9mIGljb25EYXRhO1xuXG5jb25zdCBjcmVhdGVSZWFjdENvbXBvbmVudCA9IChuYW1lOiBJY29uTmFtZSk6IFJlYWN0SWNvbkNvbXBvbmVudCA9PiB7XG4gIGNvbnN0IHsgcGF0aCwgc2l6ZTogZGVmYXVsdFNpemUgfSA9IGljb25EYXRhW25hbWVdO1xuICBjb25zdCBDb21wb25lbnQ6IFJlYWN0SWNvbkNvbXBvbmVudCA9ICh7IHNpemUgPSBkZWZhdWx0U2l6ZSwgZmlsbCA9IFwiY3VycmVudENvbG9yXCIgfSkgPT4gKFxuICAgIDxzdmdcbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICByb2xlPVwiaW1nXCJcbiAgICAgIHZpZXdCb3g9e2AwIDAgJHtkZWZhdWx0U2l6ZX0gJHtkZWZhdWx0U2l6ZX1gfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgPlxuICAgICAgPHBhdGggZD17cGF0aH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiBkZWZhdWx0U2l6ZSxcbiAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICB9O1xuICByZXR1cm4gQ29tcG9uZW50O1xufTtcblxuaW50ZXJmYWNlIEljb25Db2xsZWN0aW9uIHtcbiAgcmF3OiBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz47XG4gIHJlYWN0OiBSZWNvcmQ8SWNvbk5hbWUsIFJlYWN0SWNvbkNvbXBvbmVudD47XG4gIGh0bWw6IFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPjtcbn1cblxuY29uc3QgeyByYXcsIHJlYWN0LCBodG1sIH0gPSAoT2JqZWN0LmtleXMoaWNvbkRhdGEpIGFzIEljb25OYW1lW10pLnJlZHVjZTxJY29uQ29sbGVjdGlvbj4oXG4gIChhY2MsIG5hbWUpID0+IHtcbiAgICBhY2MucmF3W25hbWVdID0gaWNvbkRhdGFbbmFtZV0ucGF0aDtcbiAgICBhY2MucmVhY3RbbmFtZV0gPSBjcmVhdGVSZWFjdENvbXBvbmVudChuYW1lKTtcbiAgICBhY2MuaHRtbFtuYW1lXSA9IGA8cGF0aCBkPVwiJHtpY29uRGF0YVtuYW1lXS5wYXRofVwiLz5gO1xuICAgIHJldHVybiBhY2M7XG4gIH0sXG4gIHtcbiAgICByYXc6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPixcbiAgICByZWFjdDoge30gYXMgUmVjb3JkPEljb25OYW1lLCBSZWFjdEljb25Db21wb25lbnQ+LFxuICAgIGh0bWw6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPixcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBJY29ucyA9IHtcbiAgUmVhY3Q6IHJlYWN0LFxuICBIVE1MOiBodG1sLFxuICBSQVc6IHJhdyxcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBKU1ggfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIi4vaWNvbnMudHN4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uUHJvcHMge1xuICBtZXNzYWdlPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XG4gIGtleVByZWZpeD86IHN0cmluZztcbiAgYXV0b0hpZGVEdXJhdGlvbj86IG51bWJlcjtcbiAgYmFja2dyb3VuZENvbG91cj86IHN0cmluZztcbiAgY29sb3VyPzogc3RyaW5nO1xuICBpc1dhcm5pbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uID0gKHtcbiAgbWVzc2FnZSA9IFwiXCIsXG4gIGtleVByZWZpeCA9IFwiY3VzdG9tLW5vdGlmXCIsXG4gIGF1dG9IaWRlRHVyYXRpb24gPSAzMDAwLFxuICBiYWNrZ3JvdW5kQ29sb3VyID0gXCIjZmZmXCIsXG4gIGNvbG91ciA9IFwiIzAwMFwiLFxuICBpc1dhcm5pbmcgPSBmYWxzZSxcbn06IE5vdGlmaWNhdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBpc1dhcm5pbmcgPyAoXG4gICAgPD5cbiAgICAgIDxJY29ucy5SZWFjdC53YXJuaW5nIHNpemU9ezI0fSAvPlxuICAgICAgPHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuICAgIDwvPlxuICApIDogKFxuICAgIDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cbiAgKTtcblxuICBjb25zdCBCYWNrZ3JvdW5kQ29sb3VyID0gaXNXYXJuaW5nID8gXCIjZmY5ODAwXCIgOiBiYWNrZ3JvdW5kQ29sb3VyO1xuICBjb25zdCBDb2xvdXIgPSBpc1dhcm5pbmcgPyBcIiNmZmZcIiA6IGNvbG91cjtcblxuICB0cnkge1xuICAgIFNwaWNldGlmeS5TbmFja2Jhci5lbnF1ZXVlQ3VzdG9tU25hY2tiYXIoa2V5UHJlZml4LCB7XG4gICAgICBrZXlQcmVmaXgsXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uLFxuICAgICAgY2hpbGRyZW46IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1ub3RpZmljYXRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGdhcDogXCI4cHhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBjb2xvcjogQ29sb3VyLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBCYWNrZ3JvdW5kQ29sb3VyLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNHB4IDE2cHhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRpc3BsYXlpbmcgbm90aWZpY2F0aW9uOlwiLCBlcnJvcik7XG4gIH1cbn07XG5cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBOb3RpZmljYXRpb24oe1xuLy8gICBhdXRvSGlkZUR1cmF0aW9uOiA1MDAwLFxuLy8gICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmOTgwMFwiLFxuLy8gICBpc1dhcm5pbmc6IHRydWUsXG4vLyAgIG1lc3NhZ2U6IDxzcGFuPlRoZW1lIG9ubHkgc3VwcG9ydHMgU3BvdGlmeSB2ZXJzaW9ucyBncmVhdGVyIHRoYW4gMS4yLjY2LjAwMDwvc3Bhbj4sXG4vLyB9KTtcblxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIE5vdGlmaWNhdGlvbih7XG4vLyAgIGF1dG9IaWRlRHVyYXRpb246IDUwMDAsXG4vLyAgIGJhY2tncm91bmRDb2xvcjogXCIjZmY5ODAwXCIsXG4vLyAgIG1lc3NhZ2U6IChcbi8vICAgICA8PlxuLy8gICAgICAgPHN2Z1xuLy8gICAgICAgICB3aWR0aD1cIjIwXCJcbi8vICAgICAgICAgaGVpZ2h0PVwiXCJcbi8vICAgICAgICAgdmlld0JveD1cIjAgMCA5NiA5NlwiXG4vLyAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuLy8gICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEljb25zLndhcm5pbmcgfX1cbi8vICAgICAgIC8+XG4vLyAgICAgICA8c3Bhbj5cbi8vICAgICAgICAgVGhlbWUgb25seSBzdXBwb3J0cyBTcG90aWZ5IHZlcnNpb25zIGdyZWF0ZXIgdGhhbiAxLjIuNTAuMDAwXG4vLyAgICAgICA8L3NwYW4+XG4vLyAgICAgPC8+XG4vLyAgICksXG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uO1xuIiwgIi8vIGJpb21lLWlnbm9yZSBsaW50OiBEaXNhYmxlZCB0byBhdm9pZCByZWdlbmVyYXRpbmcgdHlwZXMgb24gcGFnZSBsb2FkXG5pbXBvcnQgeyBnZW5lcmF0ZVR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9hcGkvZ2VuZXJhdGVUeXBlcy50c1wiO1xuaW1wb3J0IHsgcGFyc2VQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvYXBpL3BhcnNlUHJvcHMudHNcIjtcbi8vIGltcG9ydCB7IGNyZWF0ZVBhZ2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY3JlYXRlUGFnZS50c3hcIjtcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb25zLnRzeFwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi50c3hcIjtcblxuU3BpY2V0aWZ5Lk1vdXNldHJhcC5iaW5kKFwiZjhcIiwgYXN5bmMgKCkgPT4ge1xuICBkZWJ1Z2dlcjtcbiAgTm90aWZpY2F0aW9uKHtcbiAgICBtZXNzYWdlOiBcIkRldnRvb2xzIG11c3QgYmUgb3BlbiBkbyB1c2UgZGVidWdnZXJcIixcbiAgICBpc1dhcm5pbmc6IHRydWUsXG4gIH0pO1xufSk7XG5cbmF3YWl0IFNwaWNldGlmeS5QbGF0Zm9ybS5Qcm9kdWN0U3RhdGVBUEkucHJvZHVjdFN0YXRlQXBpLnB1dFZhbHVlcyhcbiAge1xuICAgIHBhaXJzOiB7IFwiYXBwLWRldmVsb3BlclwiOiBcIjJcIiB9LFxuICB9LFxuICB7fSxcbik7XG5cbmxldCByZXF1ZXN0Q291bnQgPSAwO1xubGV0IHBlcm1hbmVudGx5RGlzYWJsZWQgPSBmYWxzZTtcblNwaWNldGlmeS5QbGF0Zm9ybS5Qcm9kdWN0U3RhdGVBUEkucHJvZHVjdFN0YXRlQXBpLnN1YlZhbHVlcyhcbiAgeyBrZXlzOiBbXCJhcHAtZGV2ZWxvcGVyXCJdIH0sXG4gIGFzeW5jIChkYXRhOiBhbnkpID0+IHtcbiAgICBpZiAocGVybWFuZW50bHlEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0Q291bnQgPCA1KSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZGF0YT8ucGFpcnM/LltcImFwcC1kZXZlbG9wZXJcIl07XG4gICAgICBpZiAoY3VycmVudCAhPT0gXCIyXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1wiYXBwLWRldmVsb3BlclwiIHZhbHVlIGNoYW5nZWQuIFJlc2V0dGluZyB0byBcIjJcIi4nKTtcbiAgICAgICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlByb2R1Y3RTdGF0ZUFQSS5wcm9kdWN0U3RhdGVBcGkucHV0VmFsdWVzKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhaXJzOiB7IFwiYXBwLWRldmVsb3BlclwiOiBcIjJcIiB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge30sXG4gICAgICAgICk7XG4gICAgICAgIHJlcXVlc3RDb3VudCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmF0ZSBsaW1pdCBleGNlZWRlZCBmb3IgcHJvZHVjdCBzdGF0ZSBjaGFuZ2VzLiBQZXJtYW5lbnRseSBkaXNhYmxpbmcuXCIpO1xuICAgICAgcGVybWFuZW50bHlEaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9LFxuKTtcblxuY29uc3QgY29weVBsYXlsaXN0UHJvcHNJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW0oe1xuICBjaGlsZHJlbjogXCJDb3B5IFBsYXlsaXN0IHByb3BzIHRvIGNsaXBib2FyZFwiLFxuICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC5kdXBsaWNhdGUsXG4gIG9uQ2xpY2s6IChjb250ZXh0OiBhbnksIF9pdGVtOiBhbnksIF9ldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgcGFyc2VkOiBhbnkgPSBwYXJzZVByb3BzKGNvbnRleHQucHJvcHMpO1xuICAgIGNvbnN0IGZpbHRlcmVkID0ge1xuICAgICAgdXJpOiBwYXJzZWQ/LnVyaSxcbiAgICAgIG5hbWU6IHBhcnNlZD8ubmFtZSxcbiAgICAgIG93bmVyOiBwYXJzZWQ/Lm93bmVyXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZTogcGFyc2VkLm93bmVyLm5hbWUsXG4gICAgICAgICAgICB1cmk6IHBhcnNlZC5vd25lci51cmksXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGlzT3duZWRCeVNlbGY6IHBhcnNlZD8uaXNPd25lZEJ5U2VsZixcbiAgICB9O1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5DbGlwYm9hcmRBUEkuY29weShmaWx0ZXJlZCk7XG4gIH0sXG4gIHNob3VsZEFkZDogKHByb3BzOiBhbnkpID0+IHtcbiAgICBjb25zdCBwYXJzZWQ6IGFueSA9IHBhcnNlUHJvcHMocHJvcHMpO1xuICAgIGNvbnN0IHR5cGUgPSBTcGljZXRpZnkuVVJJLmZyb20ocGFyc2VkLnVyaSk/LnR5cGU7XG4gICAgcmV0dXJuIHR5cGUgPT09IFNwaWNldGlmeS5VUkkuVHlwZS5QTEFZTElTVCB8fCB0eXBlID09PSBTcGljZXRpZnkuVVJJLlR5cGUuUExBWUxJU1RfVjI7XG4gIH0sXG59KTtcblxuY29uc3QgY29weVRyYWNrUHJvcHNJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW0oe1xuICBjaGlsZHJlbjogXCJDb3B5IFRyYWNrIHByb3BzIHRvIGNsaXBib2FyZFwiLFxuICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC5kdXBsaWNhdGUsXG4gIG9uQ2xpY2s6IChjb250ZXh0OiBhbnksIF9pdGVtOiBhbnksIF9ldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgcGFyc2VkOiBhbnkgPSBwYXJzZVByb3BzKGNvbnRleHQucHJvcHMpO1xuICAgIGNvbnN0IGZpbHRlcmVkID0ge1xuICAgICAgbmFtZTogcGFyc2VkPy5uYW1lLFxuICAgICAgdXJpOiBwYXJzZWQ/LnVyaSxcbiAgICAgIHVpZDogcGFyc2VkPy51aWQsXG4gICAgICBhbGJ1bU5hbWU6IHBhcnNlZC5hbGJ1bT8ubmFtZSxcbiAgICAgIGFsYnVtVXJpOiBwYXJzZWQuYWxidW1VcmkgfHwgcGFyc2VkLmFsYnVtPy51cmksXG4gICAgICBhcnRpc3RzOiBwYXJzZWQuYXJ0aXN0cz8ubWFwKChhcnRpc3Q6IGFueSkgPT4gKHtcbiAgICAgICAgbmFtZTogYXJ0aXN0Lm5hbWUsXG4gICAgICAgIHVyaTogYXJ0aXN0LnVyaSxcbiAgICAgIH0pKSxcbiAgICAgIGNvbnRleHROYW1lOiBwYXJzZWQ/LmNvbnRleHROYW1lLFxuICAgICAgY29udGV4dFVyaTogcGFyc2VkLmNvbnRleHRVcmkgfHwgcGFyc2VkLmNvbnRleHQ/LnVyaSxcbiAgICB9O1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5DbGlwYm9hcmRBUEkuY29weShmaWx0ZXJlZCk7XG4gIH0sXG4gIHNob3VsZEFkZDogKHByb3BzOiBhbnkpID0+IHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVByb3BzKHByb3BzKTtcbiAgICBjb25zdCB0eXBlID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHBhcnNlZC51cmkpPy50eXBlO1xuICAgIHJldHVybiB0eXBlID09PSBTcGljZXRpZnkuVVJJLlR5cGUuVFJBQ0s7XG4gIH0sXG59KTtcblxuY29uc3QgY29weUFydGlzdFByb3BzSXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnVWMi5JdGVtKHtcbiAgY2hpbGRyZW46IFwiQ29weSBBcnRpc3QgcHJvcHMgdG8gY2xpcGJvYXJkXCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLmR1cGxpY2F0ZSxcbiAgb25DbGljazogKGNvbnRleHQ6IGFueSwgX2l0ZW06IGFueSwgX2V2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCBwYXJzZWQ6IGFueSA9IHBhcnNlUHJvcHMoY29udGV4dC5wcm9wcyk7XG4gICAgY29uc3QgZmlsdGVyZWQgPSB7XG4gICAgICB1cmk6IHBhcnNlZD8udXJpLFxuICAgIH07XG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLkNsaXBib2FyZEFQSS5jb3B5KGZpbHRlcmVkKTtcbiAgfSxcbiAgc2hvdWxkQWRkOiAocHJvcHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IHBhcnNlZDogYW55ID0gcGFyc2VQcm9wcyhwcm9wcyk7XG4gICAgY29uc3QgdHlwZSA9IFNwaWNldGlmeS5VUkkuZnJvbShwYXJzZWQudXJpKT8udHlwZTtcbiAgICByZXR1cm4gdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLkFSVElTVDtcbiAgfSxcbn0pO1xuXG5jb25zdCBjb3B5QWxidW1Qcm9wc0l0ZW0gPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIkNvcHkgQWxidW0gcHJvcHMgdG8gY2xpcGJvYXJkXCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLmR1cGxpY2F0ZSxcbiAgb25DbGljazogKGNvbnRleHQ6IGFueSwgX2l0ZW06IGFueSwgX2V2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCBwYXJzZWQ6IGFueSA9IHBhcnNlUHJvcHMoY29udGV4dC5wcm9wcyk7XG4gICAgY29uc3QgZmlsdGVyZWQgPSB7XG4gICAgICB1cmk6IHBhcnNlZD8udXJpLFxuICAgICAgYXJ0aXN0VXJpOiBwYXJzZWQ/LmFydGlzdFVyaSxcbiAgICB9O1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5DbGlwYm9hcmRBUEkuY29weShmaWx0ZXJlZCk7XG4gIH0sXG4gIHNob3VsZEFkZDogKHByb3BzOiBhbnkpID0+IHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVByb3BzKHByb3BzKTtcbiAgICBjb25zdCB0eXBlID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHBhcnNlZC51cmkpPy50eXBlO1xuICAgIHJldHVybiB0eXBlID09PSBTcGljZXRpZnkuVVJJLlR5cGUuQUxCVU07XG4gIH0sXG59KTtcblxuY29uc3QgY29weUFsbFByb3BzSXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnVWMi5JdGVtKHtcbiAgY2hpbGRyZW46IFwiQ29weSBBbGwgcHJvcHMgdG8gY2xpcGJvYXJkXCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLmR1cGxpY2F0ZSxcbiAgZGl2aWRlcjogXCJhZnRlclwiLFxuICBvbkNsaWNrOiAoY29udGV4dDogYW55LCBfaXRlbTogYW55LCBfZXZlbnQ6IGFueSkgPT4ge1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5DbGlwYm9hcmRBUEkuY29weShjb250ZXh0LnByb3BzKTtcbiAgfSxcbiAgc2hvdWxkQWRkOiAoKSA9PiB0cnVlLFxufSk7XG5cbmNvbnN0IGxvZ0NvbnRleHRNZW51UHJvcHNJdGVtID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW0oe1xuICBjaGlsZHJlbjogXCJMb2cgY29udGV4dCBtZW51IHByb3BzXCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLnRlcm1pbmFsLFxuICBvbkNsaWNrOiAoY29udGV4dDogYW55LCBpdGVtOiBhbnksIGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbnRleHQ6XCIsIGNvbnRleHQpO1xuICAgIGNvbnNvbGUubG9nKFwiSXRlbTpcIiwgaXRlbSk7XG4gICAgY29uc29sZS5sb2coXCJFdmVudDpcIiwgZXZlbnQpO1xuICB9LFxuICBzaG91bGRBZGQ6ICgpID0+IHRydWUsXG59KTtcblxuY29uc3QgbG9nRXZlbnRzSXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnVWMi5JdGVtKHtcbiAgY2hpbGRyZW46IFwiTG9nIEV2ZW50cyBMaXN0ZW5lcnNcIixcbiAgbGVhZGluZ0ljb246IEljb25zLkhUTUwudGVybWluYWwsXG4gIG9uQ2xpY2s6ICgpID0+IHtcbiAgICBOb3RpZmljYXRpb24oe1xuICAgICAgbWVzc2FnZTogXCJPbmx5IGdvZXMgYXdheSBhZnRlciBhIHJlbG9hZC9yZXN0YXJ0XCIsXG4gICAgICBpc1dhcm5pbmc6IHRydWUsXG4gICAgfSk7XG5cbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMuX2VtaXR0ZXIuYWRkTGlzdGVuZXJzKHtcbiAgICAgIHVwZGF0ZTogKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXJBUEkgVXBkYXRlIGV2ZW50OlwiLCBldmVudCk7XG4gICAgICB9LFxuICAgICAgYWN0aW9uOiAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllckFQSSBhY3Rpb24gZXZlbnQ6XCIsIGV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXJBUEkgZXJyb3IgZXZlbnQ6XCIsIGV2ZW50KTtcbiAgICAgIH0sXG4gICAgICByZWFkeTogKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXJBUEkgcmVhZHkgZXZlbnQ6XCIsIGV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBxdWV1ZV9hY3Rpb25fY29tcGxldGU6IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyQVBJIHF1ZXVlX2FjdGlvbl9jb21wbGV0ZSBldmVudDpcIiwgZXZlbnQpO1xuICAgICAgfSxcbiAgICAgIHF1ZXVlX3VwZGF0ZTogKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXJBUEkgcXVldWVfdXBkYXRlIGV2ZW50OlwiLCBldmVudCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXlsaXN0QVBJLl9ldmVudHMuX2VtaXR0ZXIuYWRkTGlzdGVuZXJzKHtcbiAgICAgIHVwZGF0ZTogKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5bGlzdEFQSSB1cGRhdGUgZXZlbnQ6XCIsIGV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBvcGVyYXRpb25fY29tcGxldGU6IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWxpc3RBUEkgb3BlcmF0aW9uX2NvbXBsZXRlIGV2ZW50OlwiLCBldmVudCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlJvb3RsaXN0QVBJLl9ldmVudHMuX2VtaXR0ZXIuYWRkTGlzdGVuZXJzKHtcbiAgICAgIG9wZXJhdGlvbjogKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSb290bGlzdEFQSSBvcGVyYXRpb24gZXZlbnQ6XCIsIGV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBvcGVyYXRpb25fY29tcGxldGU6IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUm9vdGxpc3RBUEkgb3BlcmF0aW9uX2NvbXBsZXRlIGV2ZW50OlwiLCBldmVudCk7XG4gICAgICB9LFxuICAgICAgdXBkYXRlOiAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJvb3RsaXN0QVBJIHVwZGF0ZSBldmVudDpcIiwgZXZlbnQpO1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZV9pdGVtOiAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJvb3RsaXN0QVBJIHVwZGF0ZV9pdGVtIGV2ZW50OlwiLCBldmVudCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXliYWNrQVBJLl9ldmVudHMuX2VtaXR0ZXIuYWRkTGlzdGVuZXJzKHtcbiAgICAgIG11dGVkX2NoYW5nZWQ6IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWJhY2tBUEkgbXV0ZWRfY2hhbmdlZCBldmVudDpcIiwgZXZlbnQpO1xuICAgICAgfSxcbiAgICAgIHZvbHVtZTogKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5YmFja0FQSSB2b2x1bWUgZXZlbnQ6XCIsIGV2ZW50KTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uTG9jYWxTdG9yYWdlQVBJLl9ldmVudHMuX2VtaXR0ZXIuYWRkTGlzdGVuZXJzKHtcbiAgICAgIHVwZGF0ZTogKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2NhbFN0b3JhZ2VBUEkgdXBkYXRlIGV2ZW50OlwiLCBldmVudCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICBzaG91bGRBZGQ6ICgpID0+IHRydWUsXG59KTtcblxuZnVuY3Rpb24gcGF0Y2hVYmlMb2dnZXIoKSB7XG4gIGNvbnN0IGV2ZW50U2VuZGVyID0gU3BpY2V0aWZ5LlBsYXRmb3JtLlVCSUxvZ2dlci51YmlMb2dnZXIuZXZlbnRTZW5kZXI7XG5cbiAgaWYgKGV2ZW50U2VuZGVyLnNlbmQubmFtZSA9PT0gXCJwYXRjaGVkU2VuZFwiKSB7XG4gICAgU3BpY2V0aWZ5LnNob3dOb3RpZmljYXRpb24oXCJVQkkgRXZlbnQgTG9nZ2VyIGlzIGFscmVhZHkgYWN0aXZlLlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBvcmlnaW5hbFNlbmQgPSBldmVudFNlbmRlci5zZW5kO1xuXG4gIGZ1bmN0aW9uIHBhdGNoZWRTZW5kKHRoaXM6IGFueSwgLi4uYXJnczogW2FueSwgLi4uYW55W11dKSB7XG4gICAgY29uc3QgZXZlbnQgPSBhcmdzWzBdO1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50Py5uYW1lIHx8IFwiVW5rbm93biBFdmVudFwiO1xuXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgSW50ZXJjZXB0ZWQgU3BvdGlmeSBVQkkgRXZlbnQ6ICR7ZXZlbnROYW1lfWApO1xuICAgIGNvbnNvbGUubG9nKFwiQXJndW1lbnRzOlwiLCBhcmdzKTtcbiAgICBjb25zb2xlLmxvZyhcIlRpbWVzdGFtcDpcIiwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKTtcbiAgICBjb25zb2xlLnRyYWNlKFwiQ2FsbCBzdGFja1wiKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICByZXR1cm4gKG9yaWdpbmFsU2VuZCBhcyAoLi4uYXJnczogYW55W10pID0+IGFueSkuYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICBldmVudFNlbmRlci5zZW5kID0gcGF0Y2hlZFNlbmQ7XG4gIFNwaWNldGlmeS5zaG93Tm90aWZpY2F0aW9uKFwiVUJJIEV2ZW50IExvZ2dlciBwYXRjaCBhcHBsaWVkLlwiKTtcbn1cblxuY29uc3QgbG9nVWJpRXZlbnRzSXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnVWMi5JdGVtKHtcbiAgY2hpbGRyZW46IFwiTG9nIFVzZXIgQmVoYXZpb3IgSW5zaWdodHMgRXZlbnRzXCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLnBlcnNvbixcbiAgb25DbGljazogKCkgPT4ge1xuICAgIE5vdGlmaWNhdGlvbih7XG4gICAgICBtZXNzYWdlOiBcIk9ubHkgZ29lcyBhd2F5IGFmdGVyIGEgcmVsb2FkL3Jlc3RhcnRcIixcbiAgICAgIGlzV2FybmluZzogdHJ1ZSxcbiAgICB9KTtcbiAgICAvLyBtYWtlIGl0IGxvZyBhIGJhc2ljIHN1bW1hcnkgb2YgZXZlbnRzXG4gICAgcGF0Y2hVYmlMb2dnZXIoKTtcbiAgfSxcbiAgc2hvdWxkQWRkOiAoKSA9PiB0cnVlLFxufSk7XG5cbmNvbnN0IHJlbG9hZFNwb3RpZnkgPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIlJlbG9hZCBTcG90aWZ5XCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLnJlbG9hZCxcbiAgb25DbGljazogKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuICBzaG91bGRBZGQ6ICgpID0+IHRydWUsXG59KTtcblxuY29uc3QgcmVzdGFydFNwb3RpZnkgPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIlJlc3RhcnQgU3BvdGlmeVwiLFxuICBsZWFkaW5nSWNvbjogSWNvbnMuSFRNTC5yZXN0YXJ0LFxuICBvbkNsaWNrOiBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLkxpZmVjeWNsZUFQSS5yZXN0YXJ0KCk7XG4gIH0sXG4gIHNob3VsZEFkZDogKCkgPT4gdHJ1ZSxcbn0pO1xuXG5jb25zdCBjbG9zZVNwb3RpZnkgPSBuZXcgU3BpY2V0aWZ5LkNvbnRleHRNZW51VjIuSXRlbSh7XG4gIGNoaWxkcmVuOiBcIkNsb3NlIFNwb3RpZnlcIixcbiAgbGVhZGluZ0ljb246IEljb25zLkhUTUwucG93ZXIsXG4gIG9uQ2xpY2s6IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBTcGljZXRpZnkuUGxhdGZvcm0uTGlmZWN5Y2xlQVBJLnNodXRkb3duKCk7XG4gIH0sXG4gIHNob3VsZEFkZDogKCkgPT4gdHJ1ZSxcbn0pO1xuXG5jb25zdCB3aW5kb3dzU3ViTWVudSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnVWMi5JdGVtU3ViTWVudSh7XG4gIHRleHQ6IFwiV2luZG93IFV0aWxzXCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLnBvd2VyLFxuICBpdGVtczogW3JlbG9hZFNwb3RpZnksIHJlc3RhcnRTcG90aWZ5LCBjbG9zZVNwb3RpZnldLFxuICBzaG91bGRBZGQ6ICgpID0+IHRydWUsXG59KTtcblxuY29uc3QgZGV2VXRpbHNTdWJNZW51ID0gbmV3IFNwaWNldGlmeS5Db250ZXh0TWVudVYyLkl0ZW1TdWJNZW51KHtcbiAgdGV4dDogXCJEZXZlbG9wZXIgVXRpbHNcIixcbiAgbGVhZGluZ0ljb246IEljb25zLkhUTUwuY29kZSxcbiAgZGl2aWRlcjogXCJhZnRlclwiLFxuICBpdGVtczogW1xuICAgIGNvcHlBbGJ1bVByb3BzSXRlbSxcbiAgICBjb3B5QXJ0aXN0UHJvcHNJdGVtLFxuICAgIGNvcHlQbGF5bGlzdFByb3BzSXRlbSxcbiAgICBjb3B5VHJhY2tQcm9wc0l0ZW0sXG4gICAgY29weUFsbFByb3BzSXRlbSxcbiAgICBsb2dDb250ZXh0TWVudVByb3BzSXRlbSxcbiAgICBsb2dFdmVudHNJdGVtLFxuICAgIGxvZ1ViaUV2ZW50c0l0ZW0sXG4gICAgd2luZG93c1N1Yk1lbnUsXG4gIF0sXG4gIHNob3VsZEFkZDogKCkgPT4gdHJ1ZSxcbn0pO1xuXG5kZXZVdGlsc1N1Yk1lbnUucmVnaXN0ZXIoKTtcblxuLy8gU3BpY2V0aWZ5LlBsYXRmb3JtLlJlZ2lzdHJ5LnJlc29sdmUoU3ltYm9sLmZvcihcInN0dWZmXCIpKTtcblxuLy8gU3BpY2V0aWZ5LlBsYXRmb3JtLkNsaXBib2FyZEFQSS5jb3B5KGdlbmVyYXRlVHlwZXMoU3BpY2V0aWZ5LlBsYXRmb3JtLCBcIlBsYXRmb3JtVHlwZXNcIikpO1xuXG4vLyAvLyBAdHMtZXhwZWN0LWVycm9yXG4vLyBjb25zdCByZXF1aXJlID0gZ2xvYmFsVGhpcy53ZWJwYWNrQ2h1bmtjbGllbnRfd2ViLnB1c2goW1tTeW1ib2woKV0sIHt9LCAocmUpID0+IHJlXSk7XG4vLyBjb25zdCBjaHVua3MgPSBPYmplY3QuZW50cmllcyhyZXF1aXJlLm0pO1xuXG4vLyBjb25zdCBmb3VuZE1vZHVsZXMgPSBjaHVua3MuZmlsdGVyKFxuLy8gICAoW18sIGRlZmluaXRpb25dKSA9PlxuLy8gICAgIHR5cGVvZiBkZWZpbml0aW9uID09PSBcImZ1bmN0aW9uXCIgJiZcbi8vICAgICBkZWZpbml0aW9uLnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJtYWluLWNvbmZpcm1EaWFsb2ctY29udGFpbmVyXCIpLFxuLy8gKTtcblxuLy8gaWYgKGZvdW5kTW9kdWxlcy5sZW5ndGggPT09IDEpIHtcbi8vICAgY29uc3QgY29tcG9uZW50ID0gZm91bmRNb2R1bGVzLmZsYXRNYXAoKFtpZF0pID0+IE9iamVjdC52YWx1ZXMocmVxdWlyZShpZCkpKVswXTtcbi8vICAgZ2xvYmFsVGhpcy5TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuQ29uZmlybURpYWxvZyA9IGNvbXBvbmVudDtcbi8vIH0gZWxzZSB7XG4vLyAgIGNvbnNvbGUuZXJyb3IoXCJDb25maXJtRGlhbG9nIG5vdCBmb3VuZFwiKTtcbi8vIH1cblxuLy8gY29uc3QgcGxheWVySW5zdGFuY2UgPSBTcGljZXRpZnkuUGxhdGZvcm0uU3RhbmRhbG9uZVBsYXllckNvb3JkaW5hdG9yQVBJLmNyZWF0ZVN0YW5kYWxvbmVQbGF5ZXJJbnN0YW5jZSh7fSk7XG5cbi8vICAgY29uc3QgZ2V0Q2lyY3VsYXJSZXBsYWNlciA9ICgpID0+IHtcbi8vICAgICAgIGNvbnN0IHNlZW4gPSBuZXcgV2Vha1NldCgpO1xuLy8gICAgICAgcmV0dXJuIChrZXksIHZhbHVlKSA9PiB7XG4vLyAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbi8vICAgICAgICAgICBpZiAoc2Vlbi5oYXModmFsdWUpKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gXCJbQ2lyY3VsYXJdXCI7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIHNlZW4uYWRkKHZhbHVlKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgICB9O1xuLy8gICAgIH07XG4vLyAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLkNsaXBib2FyZEFQSS5jb3B5KEpTT04uc3RyaW5naWZ5KHBsYXllckluc3RhbmNlLCBnZXRDaXJjdWxhclJlcGxhY2VyKCkpKVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7O0FBT08sU0FBUyxXQUFXLE9BQW9EO0FBQzdFLE1BQUksQ0FBQyxNQUFPLFFBQU8sQ0FBQztBQUVwQixRQUFNLFNBQXVCLENBQUM7QUFFOUIsUUFBTSxhQUFhLENBQUMsUUFBeUMsV0FBeUI7QUFDcEYsUUFBSSxDQUFDLFVBQVUsT0FBTyxXQUFXLFNBQVU7QUFDM0MsZUFBVyxPQUFPLFFBQVE7QUFDeEIsVUFBSSxPQUFPLE9BQU8sUUFBUSxHQUFHLEdBQUc7QUFDOUIsWUFBSSxPQUFPLEdBQUcsTUFBTSxRQUFXO0FBQzdCLGlCQUFPLEdBQUcsSUFBSSxPQUFPLEdBQUc7QUFBQSxRQUMxQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUVBLGFBQVcsT0FBTyxNQUFNO0FBQ3hCLGFBQVcsTUFBTSxNQUFNLE1BQU07QUFDN0IsYUFBVyxNQUFNLFdBQVcsTUFBTTtBQUVsQyxTQUFPO0FBQ1Q7OztBQzVCTyxJQUFNLEVBQUUsVUFBVSxLQUFLLEtBQUssSUFBSSxVQUFVOzs7QUNXakQsSUFBTSxXQUFXO0FBQUEsRUFDZixZQUFZO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFD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
