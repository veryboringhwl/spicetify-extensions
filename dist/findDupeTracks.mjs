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
  const Component2 = ({ size = defaultSize, fill = "currentColor" }) => /* @__PURE__ */ jsx(
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
  Component2.defaultProps = {
    size: defaultSize,
    fill: "currentColor"
  };
  return Component2;
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

// tasks/shims/react-shim.ts
var {
  Children,
  Component,
  Fragment: Fragment2,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  act,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  unstable_act,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  version
} = Spicetify.React;
var react_shim_default = Spicetify.React;

// tasks/shims/react-dom-shim.ts
var {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
  createPortal,
  createRoot,
  findDOMNode,
  flushSync,
  hydrate,
  hydrateRoot,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
  version: version2
} = Spicetify.ReactDOM;
var react_dom_shim_default = Spicetify.ReactDOM;

// shared/styles/popupModal.css
var sheet = new CSSStyleSheet();
sheet.replaceSync(`.modal {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--spice-rgb-shadow), 0.5);
}

.modal__container {
  display: flex;
  flex-direction: column;
  width: 500px;
  max-height: 500px;
  background-color: rgba(var(--spice-rgb-main), 0.9);
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(var(--spice-rgb-shadow), 0.5);
  backdrop-filter: blur(20px) saturate(1.4) brightness(1.2);
}

.modal__container--large {
  width: clamp(550px, 60vw, 650px);
  max-height: 80vh;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 8px;
  border-bottom: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);
}

.modal__titleContainer {
  display: flex;
  gap: 8px;
}

.modal__icon {
  display: flex;
  align-items: center;
}

.modal__title {
  display: flex;
}

.modal__buttonContainer {
  display: flex;
  gap: 8px;
  align-items: center;
}

.modal__buttonContainer .modal__button {
  height: 32px;
  padding: 8px;
  cursor: pointer;
  background-color: var(--spice-highlight);
  border: 0;
  border-radius: 8px;
}

.modal__buttonContainer .modal__button:hover {
  transform: scale(1.1);
}

.modal__buttonContainer .modal__button:active {
  transform: scale(0.9);
}

.modal__content {
  display: flex;
  padding: 16px 24px;
  overflow: auto;
  scrollbar-gutter: stable both-edges;
}

.modal__content > * {
  width: 100%;
}
`);
var popupModal_default = sheet;

// shared/components/popupModal.tsx
document.adoptedStyleSheets.push(popupModal_default);
var modalRoot = null;
var modalContainerId = "popup-modal-container";
var closeModal = () => {
  const container = document.getElementById(modalContainerId);
  if (modalRoot) {
    modalRoot.unmount();
    modalRoot = null;
  }
  if (container) {
    container.remove();
  }
  document.body.style.overflow = "auto";
};
var ModalComponent = memo(
  ({ title, content, isLarge, buttons, icon, onClose }) => {
    const modalRef = useRef(null);
    useEffect(() => {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose]);
    const handleClose = () => {
      onClose();
    };
    const handleBackdropClick = (event) => {
      if (event.target === modalRef.current) {
        handleClose();
      }
    };
    const renderContent = () => {
      if (isValidElement(content)) {
        return content;
      }
      if (typeof content === "function") {
        const ContentComponent = content;
        return /* @__PURE__ */ jsx(ContentComponent, {});
      }
      return content;
    };
    return /* @__PURE__ */ jsx("div", { className: "modal", onClick: handleBackdropClick, ref: modalRef, children: /* @__PURE__ */ jsxs("div", { className: `modal__container${isLarge ? " modal__container--large" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "modal__header", children: [
        /* @__PURE__ */ jsxs("div", { className: "modal__titleContainer", children: [
          icon && /* @__PURE__ */ jsx("div", { className: "modal__icon", children: icon }),
          /* @__PURE__ */ jsx("h1", { className: "modal__title", children: title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "modal__buttonContainer", children: [
          buttons,
          /* @__PURE__ */ jsx(Spicetify.ReactComponent.TooltipWrapper, { label: "Close", placement: "top", children: /* @__PURE__ */ jsx("button", { className: "modal__button modal__button--close", onClick: handleClose, children: /* @__PURE__ */ jsx(Icons.React.close, { size: 18 }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "modal__content", children: renderContent() })
    ] }) });
  }
);
var PopupModal = (props) => {
  if (document.getElementById(modalContainerId)) {
    closeModal();
  }
  const container = document.createElement("div");
  container.id = modalContainerId;
  document.body.appendChild(container);
  modalRoot = createRoot(container);
  modalRoot.render(/* @__PURE__ */ jsx(ModalComponent, { ...props, onClose: closeModal }));
};
PopupModal.hide = closeModal;

// oazmi-loader-http:https://esm.sh/dexie@4.0.11/denonext/dexie.mjs
var __setImmediate$ = (cb, ...args) => ({ $t: setTimeout(cb, 0, ...args), [Symbol.dispose]() {
  clearTimeout(this.t);
} });
var sa = Object.create;
var Er = Object.defineProperty;
var ca = Object.getOwnPropertyDescriptor;
var la = Object.getOwnPropertyNames;
var fa = Object.getPrototypeOf;
var ha = Object.prototype.hasOwnProperty;
var da = (W, Y) => () => (Y || W((Y = { exports: {} }).exports, Y), Y.exports);
var va = (W, Y, C, we) => {
  if (Y && typeof Y == "object" || typeof Y == "function") for (let N of la(Y)) !ha.call(W, N) && N !== C && Er(W, N, { get: () => Y[N], enumerable: !(we = ca(Y, N)) || we.enumerable });
  return W;
};
var pa = (W, Y, C) => (C = W != null ? sa(fa(W)) : {}, va(Y || !W || !W.__esModule ? Er(C, "default", { value: W, enumerable: true }) : C, W));
var Kr = da((Ot, Dt) => {
  (function(W, Y) {
    typeof Ot == "object" && typeof Dt < "u" ? Dt.exports = Y() : typeof define == "function" && define.amd ? define(Y) : (W = typeof globalThis < "u" ? globalThis : W || self, W.Dexie = Y());
  })(Ot, function() {
    "use strict";
    var W = function(e, n) {
      return W = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
        t.__proto__ = r;
      } || function(t, r) {
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
      }, W(e, n);
    };
    function Y(e, n) {
      if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
      W(e, n);
      function t() {
        this.constructor = e;
      }
      e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
    }
    var C = function() {
      return C = Object.assign || function(n) {
        for (var t, r = 1, i = arguments.length; r < i; r++) {
          t = arguments[r];
          for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
        }
        return n;
      }, C.apply(this, arguments);
    };
    function we(e, n, t) {
      if (t || arguments.length === 2) for (var r = 0, i = n.length, a; r < i; r++) (a || !(r in n)) && (a || (a = Array.prototype.slice.call(n, 0, r)), a[r] = n[r]);
      return e.concat(a || Array.prototype.slice.call(n));
    }
    var N = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : globalThis, U = Object.keys, L = Array.isArray;
    typeof Promise < "u" && !N.Promise && (N.Promise = Promise);
    function J(e, n) {
      return typeof n != "object" || U(n).forEach(function(t) {
        e[t] = n[t];
      }), e;
    }
    var Ce = Object.getPrototypeOf, Ar = {}.hasOwnProperty;
    function X(e, n) {
      return Ar.call(e, n);
    }
    function Ie(e, n) {
      typeof n == "function" && (n = n(Ce(e))), (typeof Reflect > "u" ? U : Reflect.ownKeys)(n).forEach(function(t) {
        le(e, t, n[t]);
      });
    }
    var Pt = Object.defineProperty;
    function le(e, n, t, r) {
      Pt(e, n, J(t && X(t, "get") && typeof t.get == "function" ? { get: t.get, set: t.set, configurable: true } : { value: t, configurable: true, writable: true }, r));
    }
    function Re(e) {
      return { from: function(n) {
        return e.prototype = Object.create(n.prototype), le(e.prototype, "constructor", e), { extend: Ie.bind(null, e.prototype) };
      } };
    }
    var kr = Object.getOwnPropertyDescriptor;
    function Tt(e, n) {
      var t = kr(e, n), r;
      return t || (r = Ce(e)) && Tt(r, n);
    }
    var Or = [].slice;
    function on(e, n, t) {
      return Or.call(e, n, t);
    }
    function Ct(e, n) {
      return n(e);
    }
    function Ye(e) {
      if (!e) throw new Error("Assertion Failed");
    }
    function It(e) {
      N.setImmediate ? __setImmediate$(e) : setTimeout(e, 0);
    }
    function Dr(e, n) {
      return e.reduce(function(t, r, i) {
        var a = n(r, i);
        return a && (t[a[0]] = a[1]), t;
      }, {});
    }
    function ue(e, n) {
      if (typeof n == "string" && X(e, n)) return e[n];
      if (!n) return e;
      if (typeof n != "string") {
        for (var t = [], r = 0, i = n.length; r < i; ++r) {
          var a = ue(e, n[r]);
          t.push(a);
        }
        return t;
      }
      var u = n.indexOf(".");
      if (u !== -1) {
        var o = e[n.substr(0, u)];
        return o == null ? void 0 : ue(o, n.substr(u + 1));
      }
    }
    function Z(e, n, t) {
      if (!(!e || n === void 0) && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
        Ye(typeof t != "string" && "length" in t);
        for (var r = 0, i = n.length; r < i; ++r) Z(e, n[r], t[r]);
      } else {
        var a = n.indexOf(".");
        if (a !== -1) {
          var u = n.substr(0, a), o = n.substr(a + 1);
          if (o === "") t === void 0 ? L(e) && !isNaN(parseInt(u)) ? e.splice(u, 1) : delete e[u] : e[u] = t;
          else {
            var s = e[u];
            (!s || !X(e, u)) && (s = e[u] = {}), Z(s, o, t);
          }
        } else t === void 0 ? L(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = t;
      }
    }
    function Pr(e, n) {
      typeof n == "string" ? Z(e, n, void 0) : "length" in n && [].map.call(n, function(t) {
        Z(e, t, void 0);
      });
    }
    function Rt(e) {
      var n = {};
      for (var t in e) X(e, t) && (n[t] = e[t]);
      return n;
    }
    var Tr = [].concat;
    function Bt(e) {
      return Tr.apply([], e);
    }
    var Cr = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Bt([8, 16, 32, 64].map(function(e) {
      return ["Int", "Uint", "Float"].map(function(n) {
        return n + e + "Array";
      });
    }))).filter(function(e) {
      return N[e];
    }), Mt = new Set(Cr.map(function(e) {
      return N[e];
    }));
    function Ft(e) {
      var n = {};
      for (var t in e) if (X(e, t)) {
        var r = e[t];
        n[t] = !r || typeof r != "object" || Mt.has(r.constructor) ? r : Ft(r);
      }
      return n;
    }
    function Ir(e) {
      for (var n in e) if (X(e, n)) return false;
      return true;
    }
    var Ue = null;
    function _e(e) {
      Ue = /* @__PURE__ */ new WeakMap();
      var n = Fn(e);
      return Ue = null, n;
    }
    function Fn(e) {
      if (!e || typeof e != "object") return e;
      var n = Ue.get(e);
      if (n) return n;
      if (L(e)) {
        n = [], Ue.set(e, n);
        for (var t = 0, r = e.length; t < r; ++t) n.push(Fn(e[t]));
      } else if (Mt.has(e.constructor)) n = e;
      else {
        var i = Ce(e);
        n = i === Object.prototype ? {} : Object.create(i), Ue.set(e, n);
        for (var a in e) X(e, a) && (n[a] = Fn(e[a]));
      }
      return n;
    }
    var Rr = {}.toString;
    function jn(e) {
      return Rr.call(e).slice(8, -1);
    }
    var Nn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Br = typeof Nn == "symbol" ? function(e) {
      var n;
      return e != null && (n = e[Nn]) && n.apply(e);
    } : function() {
      return null;
    };
    function xe(e, n) {
      var t = e.indexOf(n);
      return t >= 0 && e.splice(t, 1), t >= 0;
    }
    var Be = {};
    function oe(e) {
      var n, t, r, i;
      if (arguments.length === 1) {
        if (L(e)) return e.slice();
        if (this === Be && typeof e == "string") return [e];
        if (i = Br(e)) {
          for (t = []; r = i.next(), !r.done; ) t.push(r.value);
          return t;
        }
        if (e == null) return [e];
        if (n = e.length, typeof n == "number") {
          for (t = new Array(n); n--; ) t[n] = e[n];
          return t;
        }
        return [e];
      }
      for (n = arguments.length, t = new Array(n); n--; ) t[n] = arguments[n];
      return t;
    }
    var Ln = typeof Symbol < "u" ? function(e) {
      return e[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return false;
    }, Mr = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"], jt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Vn = Mr.concat(jt), Fr = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function Me(e, n) {
      this.name = e, this.message = n;
    }
    Re(Me).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } });
    function Nt(e, n) {
      return e + ". Errors: " + Object.keys(n).map(function(t) {
        return n[t].toString();
      }).filter(function(t, r, i) {
        return i.indexOf(t) === r;
      }).join(`
`);
    }
    function sn(e, n, t, r) {
      this.failures = n, this.failedKeys = r, this.successCount = t, this.message = Nt(e, n);
    }
    Re(sn).from(Me);
    function Fe(e, n) {
      this.name = "BulkError", this.failures = Object.keys(n).map(function(t) {
        return n[t];
      }), this.failuresByPos = n, this.message = Nt(e, this.failures);
    }
    Re(Fe).from(Me);
    var zn = Vn.reduce(function(e, n) {
      return e[n] = n + "Error", e;
    }, {}), jr = Me, D = Vn.reduce(function(e, n) {
      var t = n + "Error";
      function r(i, a) {
        this.name = t, i ? typeof i == "string" ? (this.message = "".concat(i).concat(a ? `
 ` + a : ""), this.inner = a || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Fr[n] || t, this.inner = null);
      }
      return Re(r).from(jr), e[n] = r, e;
    }, {});
    D.Syntax = SyntaxError, D.Type = TypeError, D.Range = RangeError;
    var Lt = jt.reduce(function(e, n) {
      return e[n + "Error"] = D[n], e;
    }, {});
    function Nr(e, n) {
      if (!e || e instanceof Me || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Lt[e.name]) return e;
      var t = new Lt[e.name](n || e.message, e);
      return "stack" in e && le(t, "stack", { get: function() {
        return this.inner.stack;
      } }), t;
    }
    var cn = Vn.reduce(function(e, n) {
      return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = D[n]), e;
    }, {});
    cn.ModifyError = sn, cn.DexieError = Me, cn.BulkError = Fe;
    function F() {
    }
    function $e(e) {
      return e;
    }
    function Lr(e, n) {
      return e == null || e === $e ? n : function(t) {
        return n(e(t));
      };
    }
    function Ee(e, n) {
      return function() {
        e.apply(this, arguments), n.apply(this, arguments);
      };
    }
    function Vr(e, n) {
      return e === F ? n : function() {
        var t = e.apply(this, arguments);
        t !== void 0 && (arguments[0] = t);
        var r = this.onsuccess, i = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var a = n.apply(this, arguments);
        return r && (this.onsuccess = this.onsuccess ? Ee(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Ee(i, this.onerror) : i), a !== void 0 ? a : t;
      };
    }
    function zr(e, n) {
      return e === F ? n : function() {
        e.apply(this, arguments);
        var t = this.onsuccess, r = this.onerror;
        this.onsuccess = this.onerror = null, n.apply(this, arguments), t && (this.onsuccess = this.onsuccess ? Ee(t, this.onsuccess) : t), r && (this.onerror = this.onerror ? Ee(r, this.onerror) : r);
      };
    }
    function Wr(e, n) {
      return e === F ? n : function(t) {
        var r = e.apply(this, arguments);
        J(t, r);
        var i = this.onsuccess, a = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var u = n.apply(this, arguments);
        return i && (this.onsuccess = this.onsuccess ? Ee(i, this.onsuccess) : i), a && (this.onerror = this.onerror ? Ee(a, this.onerror) : a), r === void 0 ? u === void 0 ? void 0 : u : J(r, u);
      };
    }
    function Yr(e, n) {
      return e === F ? n : function() {
        return n.apply(this, arguments) === false ? false : e.apply(this, arguments);
      };
    }
    function Wn(e, n) {
      return e === F ? n : function() {
        var t = e.apply(this, arguments);
        if (t && typeof t.then == "function") {
          for (var r = this, i = arguments.length, a = new Array(i); i--; ) a[i] = arguments[i];
          return t.then(function() {
            return n.apply(r, a);
          });
        }
        return n.apply(this, arguments);
      };
    }
    var te = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function Vt(e, n) {
      te = e;
    }
    var Qe = {}, zt = 100, Yn = typeof Promise > "u" ? [] : function() {
      var e = Promise.resolve();
      if (typeof crypto > "u" || !crypto.subtle) return [e, Ce(e), e];
      var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [n, Ce(n), e];
    }(), Wt = Yn[0], Yt = Yn[1], Ur = Yn[2], $r = Yt && Yt.then, Ke = Wt && Wt.constructor, Un = !!Ur;
    function Qr() {
      queueMicrotask(Xr);
    }
    var He = function(e, n) {
      Xe.push([e, n]), ln && (Qr(), ln = false);
    }, $n = true, ln = true, Se = [], fn = [], Qn = $e, fe = { id: "global", global: true, ref: 0, unhandleds: [], onunhandled: F, pgp: false, env: {}, finalize: F }, k = fe, Xe = [], Ae = 0, hn = [];
    function K(e) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = false;
      var n = this._PSD = k;
      if (typeof e != "function") {
        if (e !== Qe) throw new TypeError("Not a function");
        this._state = arguments[1], this._value = arguments[2], this._state === false && Xn(this, this._value);
        return;
      }
      this._state = null, this._value = null, ++n.ref, $t(this, e);
    }
    var Hn = { get: function() {
      var e = k, n = yn;
      function t(r, i) {
        var a = this, u = !e.global && (e !== k || n !== yn), o = u && !de(), s = new K(function(c, h) {
          Gn(a, new Ut(Xt(r, e, u, o), Xt(i, e, u, o), c, h, e));
        });
        return this._consoleTask && (s._consoleTask = this._consoleTask), s;
      }
      return t.prototype = Qe, t;
    }, set: function(e) {
      le(this, "then", e && e.prototype === Qe ? Hn : { get: function() {
        return e;
      }, set: Hn.set });
    } };
    Ie(K.prototype, { then: Hn, _then: function(e, n) {
      Gn(this, new Ut(null, null, e, n, k));
    }, catch: function(e) {
      if (arguments.length === 1) return this.then(null, e);
      var n = arguments[0], t = arguments[1];
      return typeof n == "function" ? this.then(null, function(r) {
        return r instanceof n ? t(r) : dn(r);
      }) : this.then(null, function(r) {
        return r && r.name === n ? t(r) : dn(r);
      });
    }, finally: function(e) {
      return this.then(function(n) {
        return K.resolve(e()).then(function() {
          return n;
        });
      }, function(n) {
        return K.resolve(e()).then(function() {
          return dn(n);
        });
      });
    }, timeout: function(e, n) {
      var t = this;
      return e < 1 / 0 ? new K(function(r, i) {
        var a = setTimeout(function() {
          return i(new D.Timeout(n));
        }, e);
        t.then(r, i).finally(clearTimeout.bind(null, a));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && le(K.prototype, Symbol.toStringTag, "Dexie.Promise"), fe.env = Ht();
    function Ut(e, n, t, r, i) {
      this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = t, this.reject = r, this.psd = i;
    }
    Ie(K, { all: function() {
      var e = oe.apply(null, arguments).map(mn);
      return new K(function(n, t) {
        e.length === 0 && n([]);
        var r = e.length;
        e.forEach(function(i, a) {
          return K.resolve(i).then(function(u) {
            e[a] = u, --r || n(e);
          }, t);
        });
      });
    }, resolve: function(e) {
      if (e instanceof K) return e;
      if (e && typeof e.then == "function") return new K(function(t, r) {
        e.then(t, r);
      });
      var n = new K(Qe, true, e);
      return n;
    }, reject: dn, race: function() {
      var e = oe.apply(null, arguments).map(mn);
      return new K(function(n, t) {
        e.map(function(r) {
          return K.resolve(r).then(n, t);
        });
      });
    }, PSD: { get: function() {
      return k;
    }, set: function(e) {
      return k = e;
    } }, totalEchoes: { get: function() {
      return yn;
    } }, newPSD: he, usePSD: ke, scheduler: { get: function() {
      return He;
    }, set: function(e) {
      He = e;
    } }, rejectionMapper: { get: function() {
      return Qn;
    }, set: function(e) {
      Qn = e;
    } }, follow: function(e, n) {
      return new K(function(t, r) {
        return he(function(i, a) {
          var u = k;
          u.unhandleds = [], u.onunhandled = a, u.finalize = Ee(function() {
            var o = this;
            Gr(function() {
              o.unhandleds.length === 0 ? i() : a(o.unhandleds[0]);
            });
          }, u.finalize), e();
        }, n, t, r);
      });
    } }), Ke && (Ke.allSettled && le(K, "allSettled", function() {
      var e = oe.apply(null, arguments).map(mn);
      return new K(function(n) {
        e.length === 0 && n([]);
        var t = e.length, r = new Array(t);
        e.forEach(function(i, a) {
          return K.resolve(i).then(function(u) {
            return r[a] = { status: "fulfilled", value: u };
          }, function(u) {
            return r[a] = { status: "rejected", reason: u };
          }).then(function() {
            return --t || n(r);
          });
        });
      });
    }), Ke.any && typeof AggregateError < "u" && le(K, "any", function() {
      var e = oe.apply(null, arguments).map(mn);
      return new K(function(n, t) {
        e.length === 0 && t(new AggregateError([]));
        var r = e.length, i = new Array(r);
        e.forEach(function(a, u) {
          return K.resolve(a).then(function(o) {
            return n(o);
          }, function(o) {
            i[u] = o, --r || t(new AggregateError(i));
          });
        });
      });
    }), Ke.withResolvers && (K.withResolvers = Ke.withResolvers));
    function $t(e, n) {
      try {
        n(function(t) {
          if (e._state === null) {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            var r = e._lib && je();
            t && typeof t.then == "function" ? $t(e, function(i, a) {
              t instanceof K ? t._then(i, a) : t.then(i, a);
            }) : (e._state = true, e._value = t, Qt(e)), r && Ne();
          }
        }, Xn.bind(null, e));
      } catch (t) {
        Xn(e, t);
      }
    }
    function Xn(e, n) {
      if (fn.push(n), e._state === null) {
        var t = e._lib && je();
        n = Qn(n), e._state = false, e._value = n, Jr(e), Qt(e), t && Ne();
      }
    }
    function Qt(e) {
      var n = e._listeners;
      e._listeners = [];
      for (var t = 0, r = n.length; t < r; ++t) Gn(e, n[t]);
      var i = e._PSD;
      --i.ref || i.finalize(), Ae === 0 && (++Ae, He(function() {
        --Ae === 0 && Jn();
      }, []));
    }
    function Gn(e, n) {
      if (e._state === null) {
        e._listeners.push(n);
        return;
      }
      var t = e._state ? n.onFulfilled : n.onRejected;
      if (t === null) return (e._state ? n.resolve : n.reject)(e._value);
      ++n.psd.ref, ++Ae, He(Hr, [t, e, n]);
    }
    function Hr(e, n, t) {
      try {
        var r, i = n._value;
        !n._state && fn.length && (fn = []), r = te && n._consoleTask ? n._consoleTask.run(function() {
          return e(i);
        }) : e(i), !n._state && fn.indexOf(i) === -1 && Zr(n), t.resolve(r);
      } catch (a) {
        t.reject(a);
      } finally {
        --Ae === 0 && Jn(), --t.psd.ref || t.psd.finalize();
      }
    }
    function Xr() {
      ke(fe, function() {
        je() && Ne();
      });
    }
    function je() {
      var e = $n;
      return $n = false, ln = false, e;
    }
    function Ne() {
      var e, n, t;
      do
        for (; Xe.length > 0; ) for (e = Xe, Xe = [], t = e.length, n = 0; n < t; ++n) {
          var r = e[n];
          r[0].apply(null, r[1]);
        }
      while (Xe.length > 0);
      $n = true, ln = true;
    }
    function Jn() {
      var e = Se;
      Se = [], e.forEach(function(r) {
        r._PSD.onunhandled.call(null, r._value, r);
      });
      for (var n = hn.slice(0), t = n.length; t; ) n[--t]();
    }
    function Gr(e) {
      function n() {
        e(), hn.splice(hn.indexOf(n), 1);
      }
      hn.push(n), ++Ae, He(function() {
        --Ae === 0 && Jn();
      }, []);
    }
    function Jr(e) {
      Se.some(function(n) {
        return n._value === e._value;
      }) || Se.push(e);
    }
    function Zr(e) {
      for (var n = Se.length; n; ) if (Se[--n]._value === e._value) {
        Se.splice(n, 1);
        return;
      }
    }
    function dn(e) {
      return new K(Qe, false, e);
    }
    function j(e, n) {
      var t = k;
      return function() {
        var r = je(), i = k;
        try {
          return ve(t, true), e.apply(this, arguments);
        } catch (a) {
          n && n(a);
        } finally {
          ve(i, false), r && Ne();
        }
      };
    }
    var $ = { awaits: 0, echoes: 0, id: 0 }, qr = 0, vn = [], pn = 0, yn = 0, ei = 0;
    function he(e, n, t, r) {
      var i = k, a = Object.create(i);
      a.parent = i, a.ref = 0, a.global = false, a.id = ++ei, fe.env, a.env = Un ? { Promise: K, PromiseProp: { value: K, configurable: true, writable: true }, all: K.all, race: K.race, allSettled: K.allSettled, any: K.any, resolve: K.resolve, reject: K.reject } : {}, n && J(a, n), ++i.ref, a.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      };
      var u = ke(a, e, t, r);
      return a.ref === 0 && a.finalize(), u;
    }
    function Le() {
      return $.id || ($.id = ++qr), ++$.awaits, $.echoes += zt, $.id;
    }
    function de() {
      return $.awaits ? (--$.awaits === 0 && ($.id = 0), $.echoes = $.awaits * zt, true) : false;
    }
    ("" + $r).indexOf("[native code]") === -1 && (Le = de = F);
    function mn(e) {
      return $.echoes && e && e.constructor === Ke ? (Le(), e.then(function(n) {
        return de(), n;
      }, function(n) {
        return de(), z(n);
      })) : e;
    }
    function ni(e) {
      ++yn, (!$.echoes || --$.echoes === 0) && ($.echoes = $.awaits = $.id = 0), vn.push(k), ve(e, true);
    }
    function ti() {
      var e = vn[vn.length - 1];
      vn.pop(), ve(e, false);
    }
    function ve(e, n) {
      var t = k;
      if ((n ? $.echoes && (!pn++ || e !== k) : pn && (!--pn || e !== k)) && queueMicrotask(n ? ni.bind(null, e) : ti), e !== k && (k = e, t === fe && (fe.env = Ht()), Un)) {
        var r = fe.env.Promise, i = e.env;
        (t.global || e.global) && (Object.defineProperty(N, "Promise", i.PromiseProp), r.all = i.all, r.race = i.race, r.resolve = i.resolve, r.reject = i.reject, i.allSettled && (r.allSettled = i.allSettled), i.any && (r.any = i.any));
      }
    }
    function Ht() {
      var e = N.Promise;
      return Un ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(N, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
    }
    function ke(e, n, t, r, i) {
      var a = k;
      try {
        return ve(e, true), n(t, r, i);
      } finally {
        ve(a, false);
      }
    }
    function Xt(e, n, t, r) {
      return typeof e != "function" ? e : function() {
        var i = k;
        t && Le(), ve(n, true);
        try {
          return e.apply(this, arguments);
        } finally {
          ve(i, false), r && queueMicrotask(de);
        }
      };
    }
    function Zn(e) {
      Promise === Ke && $.echoes === 0 ? pn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
    }
    var z = K.reject;
    function qn(e, n, t, r) {
      if (!e.idbdb || !e._state.openComplete && !k.letThrough && !e._vip) {
        if (e._state.openComplete) return z(new D.DatabaseClosed(e._state.dbOpenError));
        if (!e._state.isBeingOpened) {
          if (!e._state.autoOpen) return z(new D.DatabaseClosed());
          e.open().catch(F);
        }
        return e._state.dbReadyPromise.then(function() {
          return qn(e, n, t, r);
        });
      } else {
        var i = e._createTransaction(n, t, e._dbSchema);
        try {
          i.create(), e._state.PR1398_maxLoop = 3;
        } catch (a) {
          return a.name === zn.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: false }), e.open().then(function() {
            return qn(e, n, t, r);
          })) : z(a);
        }
        return i._promise(n, function(a, u) {
          return he(function() {
            return k.trans = i, r(a, u, i);
          });
        }).then(function(a) {
          if (n === "readwrite") try {
            i.idbtrans.commit();
          } catch {
          }
          return n === "readonly" ? a : i._completion.then(function() {
            return a;
          });
        });
      }
    }
    var Gt = "4.0.11", Oe = "\uFFFF", et = -1 / 0, se = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Jt = "String expected.", Ve = [], gn = "__dbnames", nt = "readonly", tt = "readwrite";
    function De(e, n) {
      return e ? n ? function() {
        return e.apply(this, arguments) && n.apply(this, arguments);
      } : e : n;
    }
    var Zt = { type: 3, lower: -1 / 0, lowerOpen: false, upper: [[]], upperOpen: false };
    function bn(e) {
      return typeof e == "string" && !/\./.test(e) ? function(n) {
        return n[e] === void 0 && e in n && (n = _e(n), delete n[e]), n;
      } : function(n) {
        return n;
      };
    }
    function qt() {
      throw D.Type();
    }
    function B(e, n) {
      try {
        var t = er(e), r = er(n);
        if (t !== r) return t === "Array" ? 1 : r === "Array" ? -1 : t === "binary" ? 1 : r === "binary" ? -1 : t === "string" ? 1 : r === "string" ? -1 : t === "Date" ? 1 : r !== "Date" ? NaN : -1;
        switch (t) {
          case "number":
          case "Date":
          case "string":
            return e > n ? 1 : e < n ? -1 : 0;
          case "binary":
            return ii(nr(e), nr(n));
          case "Array":
            return ri(e, n);
        }
      } catch {
      }
      return NaN;
    }
    function ri(e, n) {
      for (var t = e.length, r = n.length, i = t < r ? t : r, a = 0; a < i; ++a) {
        var u = B(e[a], n[a]);
        if (u !== 0) return u;
      }
      return t === r ? 0 : t < r ? -1 : 1;
    }
    function ii(e, n) {
      for (var t = e.length, r = n.length, i = t < r ? t : r, a = 0; a < i; ++a) if (e[a] !== n[a]) return e[a] < n[a] ? -1 : 1;
      return t === r ? 0 : t < r ? -1 : 1;
    }
    function er(e) {
      var n = typeof e;
      if (n !== "object") return n;
      if (ArrayBuffer.isView(e)) return "binary";
      var t = jn(e);
      return t === "ArrayBuffer" ? "binary" : t;
    }
    function nr(e) {
      return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
    }
    var tr = function() {
      function e() {
      }
      return e.prototype._trans = function(n, t, r) {
        var i = this._tx || k.trans, a = this.name, u = te && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(n === "readonly" ? "read" : "write", " ").concat(this.name));
        function o(h, l, p) {
          if (!p.schema[a]) throw new D.NotFound("Table " + a + " not part of transaction");
          return t(p.idbtrans, p);
        }
        var s = je();
        try {
          var c = i && i.db._novip === this.db._novip ? i === k.trans ? i._promise(n, o, r) : he(function() {
            return i._promise(n, o, r);
          }, { trans: i, transless: k.transless || k }) : qn(this.db, n, [this.name], o);
          return u && (c._consoleTask = u, c = c.catch(function(h) {
            return console.trace(h), z(h);
          })), c;
        } finally {
          s && Ne();
        }
      }, e.prototype.get = function(n, t) {
        var r = this;
        return n && n.constructor === Object ? this.where(n).first(t) : n == null ? z(new D.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(i) {
          return r.core.get({ trans: i, key: n }).then(function(a) {
            return r.hook.reading.fire(a);
          });
        }).then(t);
      }, e.prototype.where = function(n) {
        if (typeof n == "string") return new this.db.WhereClause(this, n);
        if (L(n)) return new this.db.WhereClause(this, "[".concat(n.join("+"), "]"));
        var t = U(n);
        if (t.length === 1) return this.where(t[0]).equals(n[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(h) {
          if (h.compound && t.every(function(p) {
            return h.keyPath.indexOf(p) >= 0;
          })) {
            for (var l = 0; l < t.length; ++l) if (t.indexOf(h.keyPath[l]) === -1) return false;
            return true;
          }
          return false;
        }).sort(function(h, l) {
          return h.keyPath.length - l.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Oe) {
          var i = r.keyPath.slice(0, t.length);
          return this.where(i).equals(i.map(function(h) {
            return n[h];
          }));
        }
        !r && te && console.warn("The query ".concat(JSON.stringify(n), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var a = this.schema.idxByName;
        function u(h, l) {
          return B(h, l) === 0;
        }
        var o = t.reduce(function(h, l) {
          var p = h[0], _ = h[1], f = a[l], d = n[l];
          return [p || f, p || !f ? De(_, f && f.multi ? function(v) {
            var b = ue(v, l);
            return L(b) && b.some(function(m) {
              return u(d, m);
            });
          } : function(v) {
            return u(d, ue(v, l));
          }) : _];
        }, [null, null]), s = o[0], c = o[1];
        return s ? this.where(s.name).equals(n[s.keyPath]).filter(c) : r ? this.filter(c) : this.where(t).equals("");
      }, e.prototype.filter = function(n) {
        return this.toCollection().and(n);
      }, e.prototype.count = function(n) {
        return this.toCollection().count(n);
      }, e.prototype.offset = function(n) {
        return this.toCollection().offset(n);
      }, e.prototype.limit = function(n) {
        return this.toCollection().limit(n);
      }, e.prototype.each = function(n) {
        return this.toCollection().each(n);
      }, e.prototype.toArray = function(n) {
        return this.toCollection().toArray(n);
      }, e.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, e.prototype.orderBy = function(n) {
        return new this.db.Collection(new this.db.WhereClause(this, L(n) ? "[".concat(n.join("+"), "]") : n));
      }, e.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, e.prototype.mapToClass = function(n) {
        var t = this, r = t.db, i = t.name;
        this.schema.mappedClass = n, n.prototype instanceof qt && (n = function(s) {
          Y(c, s);
          function c() {
            return s !== null && s.apply(this, arguments) || this;
          }
          return Object.defineProperty(c.prototype, "db", { get: function() {
            return r;
          }, enumerable: false, configurable: true }), c.prototype.table = function() {
            return i;
          }, c;
        }(n));
        for (var a = /* @__PURE__ */ new Set(), u = n.prototype; u; u = Ce(u)) Object.getOwnPropertyNames(u).forEach(function(s) {
          return a.add(s);
        });
        var o = function(s) {
          if (!s) return s;
          var c = Object.create(n.prototype);
          for (var h in s) if (!a.has(h)) try {
            c[h] = s[h];
          } catch {
          }
          return c;
        };
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = o, this.hook("reading", o), n;
      }, e.prototype.defineClass = function() {
        function n(t) {
          J(this, t);
        }
        return this.mapToClass(n);
      }, e.prototype.add = function(n, t) {
        var r = this, i = this.schema.primKey, a = i.auto, u = i.keyPath, o = n;
        return u && a && (o = bn(u)(n)), this._trans("readwrite", function(s) {
          return r.core.mutate({ trans: s, type: "add", keys: t != null ? [t] : null, values: [o] });
        }).then(function(s) {
          return s.numFailures ? K.reject(s.failures[0]) : s.lastResult;
        }).then(function(s) {
          if (u) try {
            Z(n, u, s);
          } catch {
          }
          return s;
        });
      }, e.prototype.update = function(n, t) {
        if (typeof n == "object" && !L(n)) {
          var r = ue(n, this.schema.primKey.keyPath);
          return r === void 0 ? z(new D.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(r).modify(t);
        } else return this.where(":id").equals(n).modify(t);
      }, e.prototype.put = function(n, t) {
        var r = this, i = this.schema.primKey, a = i.auto, u = i.keyPath, o = n;
        return u && a && (o = bn(u)(n)), this._trans("readwrite", function(s) {
          return r.core.mutate({ trans: s, type: "put", values: [o], keys: t != null ? [t] : null });
        }).then(function(s) {
          return s.numFailures ? K.reject(s.failures[0]) : s.lastResult;
        }).then(function(s) {
          if (u) try {
            Z(n, u, s);
          } catch {
          }
          return s;
        });
      }, e.prototype.delete = function(n) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [n] });
        }).then(function(r) {
          return r.numFailures ? K.reject(r.failures[0]) : void 0;
        });
      }, e.prototype.clear = function() {
        var n = this;
        return this._trans("readwrite", function(t) {
          return n.core.mutate({ trans: t, type: "deleteRange", range: Zt });
        }).then(function(t) {
          return t.numFailures ? K.reject(t.failures[0]) : void 0;
        });
      }, e.prototype.bulkGet = function(n) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: n, trans: r }).then(function(i) {
            return i.map(function(a) {
              return t.hook.reading.fire(a);
            });
          });
        });
      }, e.prototype.bulkAdd = function(n, t, r) {
        var i = this, a = Array.isArray(t) ? t : void 0;
        r = r || (a ? void 0 : t);
        var u = r ? r.allKeys : void 0;
        return this._trans("readwrite", function(o) {
          var s = i.schema.primKey, c = s.auto, h = s.keyPath;
          if (h && a) throw new D.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== n.length) throw new D.InvalidArgument("Arguments objects and keys must have the same length");
          var l = n.length, p = h && c ? n.map(bn(h)) : n;
          return i.core.mutate({ trans: o, type: "add", keys: a, values: p, wantResults: u }).then(function(_) {
            var f = _.numFailures, d = _.results, v = _.lastResult, b = _.failures, m = u ? d : v;
            if (f === 0) return m;
            throw new Fe("".concat(i.name, ".bulkAdd(): ").concat(f, " of ").concat(l, " operations failed"), b);
          });
        });
      }, e.prototype.bulkPut = function(n, t, r) {
        var i = this, a = Array.isArray(t) ? t : void 0;
        r = r || (a ? void 0 : t);
        var u = r ? r.allKeys : void 0;
        return this._trans("readwrite", function(o) {
          var s = i.schema.primKey, c = s.auto, h = s.keyPath;
          if (h && a) throw new D.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (a && a.length !== n.length) throw new D.InvalidArgument("Arguments objects and keys must have the same length");
          var l = n.length, p = h && c ? n.map(bn(h)) : n;
          return i.core.mutate({ trans: o, type: "put", keys: a, values: p, wantResults: u }).then(function(_) {
            var f = _.numFailures, d = _.results, v = _.lastResult, b = _.failures, m = u ? d : v;
            if (f === 0) return m;
            throw new Fe("".concat(i.name, ".bulkPut(): ").concat(f, " of ").concat(l, " operations failed"), b);
          });
        });
      }, e.prototype.bulkUpdate = function(n) {
        var t = this, r = this.core, i = n.map(function(o) {
          return o.key;
        }), a = n.map(function(o) {
          return o.changes;
        }), u = [];
        return this._trans("readwrite", function(o) {
          return r.getMany({ trans: o, keys: i, cache: "clone" }).then(function(s) {
            var c = [], h = [];
            n.forEach(function(p, _) {
              var f = p.key, d = p.changes, v = s[_];
              if (v) {
                for (var b = 0, m = Object.keys(d); b < m.length; b++) {
                  var g = m[b], w = d[g];
                  if (g === t.schema.primKey.keyPath) {
                    if (B(w, f) !== 0) throw new D.Constraint("Cannot update primary key in bulkUpdate()");
                  } else Z(v, g, w);
                }
                u.push(_), c.push(f), h.push(v);
              }
            });
            var l = c.length;
            return r.mutate({ trans: o, type: "put", keys: c, values: h, updates: { keys: i, changeSpecs: a } }).then(function(p) {
              var _ = p.numFailures, f = p.failures;
              if (_ === 0) return l;
              for (var d = 0, v = Object.keys(f); d < v.length; d++) {
                var b = v[d], m = u[Number(b)];
                if (m != null) {
                  var g = f[b];
                  delete f[b], f[m] = g;
                }
              }
              throw new Fe("".concat(t.name, ".bulkUpdate(): ").concat(_, " of ").concat(l, " operations failed"), f);
            });
          });
        });
      }, e.prototype.bulkDelete = function(n) {
        var t = this, r = n.length;
        return this._trans("readwrite", function(i) {
          return t.core.mutate({ trans: i, type: "delete", keys: n });
        }).then(function(i) {
          var a = i.numFailures, u = i.lastResult, o = i.failures;
          if (a === 0) return u;
          throw new Fe("".concat(t.name, ".bulkDelete(): ").concat(a, " of ").concat(r, " operations failed"), o);
        });
      }, e;
    }();
    function Ge(e) {
      var n = {}, t = function(o, s) {
        if (s) {
          for (var c = arguments.length, h = new Array(c - 1); --c; ) h[c - 1] = arguments[c];
          return n[o].subscribe.apply(null, h), e;
        } else if (typeof o == "string") return n[o];
      };
      t.addEventType = a;
      for (var r = 1, i = arguments.length; r < i; ++r) a(arguments[r]);
      return t;
      function a(o, s, c) {
        if (typeof o == "object") return u(o);
        s || (s = Yr), c || (c = F);
        var h = { subscribers: [], fire: c, subscribe: function(l) {
          h.subscribers.indexOf(l) === -1 && (h.subscribers.push(l), h.fire = s(h.fire, l));
        }, unsubscribe: function(l) {
          h.subscribers = h.subscribers.filter(function(p) {
            return p !== l;
          }), h.fire = h.subscribers.reduce(s, c);
        } };
        return n[o] = t[o] = h, h;
      }
      function u(o) {
        U(o).forEach(function(s) {
          var c = o[s];
          if (L(c)) a(s, o[s][0], o[s][1]);
          else if (c === "asap") var h = a(s, $e, function() {
            for (var p = arguments.length, _ = new Array(p); p--; ) _[p] = arguments[p];
            h.subscribers.forEach(function(f) {
              It(function() {
                f.apply(null, _);
              });
            });
          });
          else throw new D.InvalidArgument("Invalid event config");
        });
      }
    }
    function Je(e, n) {
      return Re(n).from({ prototype: e }), n;
    }
    function ai(e) {
      return Je(tr.prototype, function(t, r, i) {
        this.db = e, this._tx = i, this.name = t, this.schema = r, this.hook = e._allTables[t] ? e._allTables[t].hook : Ge(null, { creating: [Vr, F], reading: [Lr, $e], updating: [Wr, F], deleting: [zr, F] });
      });
    }
    function ze(e, n) {
      return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
    }
    function rt(e, n) {
      e.filter = De(e.filter, n);
    }
    function it(e, n, t) {
      var r = e.replayFilter;
      e.replayFilter = r ? function() {
        return De(r(), n());
      } : n, e.justLimit = t && !r;
    }
    function ui(e, n) {
      e.isMatch = De(e.isMatch, n);
    }
    function wn(e, n) {
      if (e.isPrimKey) return n.primaryKey;
      var t = n.getIndexByKeyPath(e.index);
      if (!t) throw new D.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
      return t;
    }
    function rr(e, n, t) {
      var r = wn(e, n.schema);
      return n.openCursor({ trans: t, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
    }
    function _n(e, n, t, r) {
      var i = e.replayFilter ? De(e.filter, e.replayFilter()) : e.filter;
      if (e.or) {
        var a = {}, u = function(o, s, c) {
          if (!i || i(s, c, function(p) {
            return s.stop(p);
          }, function(p) {
            return s.fail(p);
          })) {
            var h = s.primaryKey, l = "" + h;
            l === "[object ArrayBuffer]" && (l = "" + new Uint8Array(h)), X(a, l) || (a[l] = true, n(o, s, c));
          }
        };
        return Promise.all([e.or._iterate(u, t), ir(rr(e, r, t), e.algorithm, u, !e.keysOnly && e.valueMapper)]);
      } else return ir(rr(e, r, t), De(e.algorithm, i), n, !e.keysOnly && e.valueMapper);
    }
    function ir(e, n, t, r) {
      var i = r ? function(u, o, s) {
        return t(r(u), o, s);
      } : t, a = j(i);
      return e.then(function(u) {
        if (u) return u.start(function() {
          var o = function() {
            return u.continue();
          };
          (!n || n(u, function(s) {
            return o = s;
          }, function(s) {
            u.stop(s), o = F;
          }, function(s) {
            u.fail(s), o = F;
          })) && a(u.value, u, function(s) {
            return o = s;
          }), o();
        });
      });
    }
    var Ze = function() {
      function e(n) {
        this["@@propmod"] = n;
      }
      return e.prototype.execute = function(n) {
        var t, r = this["@@propmod"];
        if (r.add !== void 0) {
          var i = r.add;
          if (L(i)) return we(we([], L(n) ? n : [], true), i, true).sort();
          if (typeof i == "number") return (Number(n) || 0) + i;
          if (typeof i == "bigint") try {
            return BigInt(n) + i;
          } catch {
            return BigInt(0) + i;
          }
          throw new TypeError("Invalid term ".concat(i));
        }
        if (r.remove !== void 0) {
          var a = r.remove;
          if (L(a)) return L(n) ? n.filter(function(o) {
            return !a.includes(o);
          }).sort() : [];
          if (typeof a == "number") return Number(n) - a;
          if (typeof a == "bigint") try {
            return BigInt(n) - a;
          } catch {
            return BigInt(0) - a;
          }
          throw new TypeError("Invalid subtrahend ".concat(a));
        }
        var u = (t = r.replacePrefix) === null || t === void 0 ? void 0 : t[0];
        return u && typeof n == "string" && n.startsWith(u) ? r.replacePrefix[1] + n.substring(u.length) : n;
      }, e;
    }(), oi = function() {
      function e() {
      }
      return e.prototype._read = function(n, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, z.bind(null, r.error)) : r.table._trans("readonly", n).then(t);
      }, e.prototype._write = function(n) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, z.bind(null, t.error)) : t.table._trans("readwrite", n, "locked");
      }, e.prototype._addAlgorithm = function(n) {
        var t = this._ctx;
        t.algorithm = De(t.algorithm, n);
      }, e.prototype._iterate = function(n, t) {
        return _n(this._ctx, n, t, this._ctx.table.core);
      }, e.prototype.clone = function(n) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return n && J(r, n), t._ctx = r, t;
      }, e.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, e.prototype.each = function(n) {
        var t = this._ctx;
        return this._read(function(r) {
          return _n(t, n, r, t.table.core);
        });
      }, e.prototype.count = function(n) {
        var t = this;
        return this._read(function(r) {
          var i = t._ctx, a = i.table.core;
          if (ze(i, true)) return a.count({ trans: r, query: { index: wn(i, a.schema), range: i.range } }).then(function(o) {
            return Math.min(o, i.limit);
          });
          var u = 0;
          return _n(i, function() {
            return ++u, false;
          }, r, a).then(function() {
            return u;
          });
        }).then(n);
      }, e.prototype.sortBy = function(n, t) {
        var r = n.split(".").reverse(), i = r[0], a = r.length - 1;
        function u(c, h) {
          return h ? u(c[r[h]], h - 1) : c[i];
        }
        var o = this._ctx.dir === "next" ? 1 : -1;
        function s(c, h) {
          var l = u(c, a), p = u(h, a);
          return B(l, p) * o;
        }
        return this.toArray(function(c) {
          return c.sort(s);
        }).then(t);
      }, e.prototype.toArray = function(n) {
        var t = this;
        return this._read(function(r) {
          var i = t._ctx;
          if (i.dir === "next" && ze(i, true) && i.limit > 0) {
            var a = i.valueMapper, u = wn(i, i.table.core.schema);
            return i.table.core.query({ trans: r, limit: i.limit, values: true, query: { index: u, range: i.range } }).then(function(s) {
              var c = s.result;
              return a ? c.map(a) : c;
            });
          } else {
            var o = [];
            return _n(i, function(s) {
              return o.push(s);
            }, r, i.table.core).then(function() {
              return o;
            });
          }
        }, n);
      }, e.prototype.offset = function(n) {
        var t = this._ctx;
        return n <= 0 ? this : (t.offset += n, ze(t) ? it(t, function() {
          var r = n;
          return function(i, a) {
            return r === 0 ? true : r === 1 ? (--r, false) : (a(function() {
              i.advance(r), r = 0;
            }), false);
          };
        }) : it(t, function() {
          var r = n;
          return function() {
            return --r < 0;
          };
        }), this);
      }, e.prototype.limit = function(n) {
        return this._ctx.limit = Math.min(this._ctx.limit, n), it(this._ctx, function() {
          var t = n;
          return function(r, i, a) {
            return --t <= 0 && i(a), t >= 0;
          };
        }, true), this;
      }, e.prototype.until = function(n, t) {
        return rt(this._ctx, function(r, i, a) {
          return n(r.value) ? (i(a), t) : true;
        }), this;
      }, e.prototype.first = function(n) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(n);
      }, e.prototype.last = function(n) {
        return this.reverse().first(n);
      }, e.prototype.filter = function(n) {
        return rt(this._ctx, function(t) {
          return n(t.value);
        }), ui(this._ctx, n), this;
      }, e.prototype.and = function(n) {
        return this.filter(n);
      }, e.prototype.or = function(n) {
        return new this.db.WhereClause(this._ctx.table, n, this);
      }, e.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, e.prototype.desc = function() {
        return this.reverse();
      }, e.prototype.eachKey = function(n) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, i) {
          n(i.key, i);
        });
      }, e.prototype.eachUniqueKey = function(n) {
        return this._ctx.unique = "unique", this.eachKey(n);
      }, e.prototype.eachPrimaryKey = function(n) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, i) {
          n(i.primaryKey, i);
        });
      }, e.prototype.keys = function(n) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(i, a) {
          r.push(a.key);
        }).then(function() {
          return r;
        }).then(n);
      }, e.prototype.primaryKeys = function(n) {
        var t = this._ctx;
        if (t.dir === "next" && ze(t, true) && t.limit > 0) return this._read(function(i) {
          var a = wn(t, t.table.core.schema);
          return t.table.core.query({ trans: i, values: false, limit: t.limit, query: { index: a, range: t.range } });
        }).then(function(i) {
          var a = i.result;
          return a;
        }).then(n);
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(i, a) {
          r.push(a.primaryKey);
        }).then(function() {
          return r;
        }).then(n);
      }, e.prototype.uniqueKeys = function(n) {
        return this._ctx.unique = "unique", this.keys(n);
      }, e.prototype.firstKey = function(n) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(n);
      }, e.prototype.lastKey = function(n) {
        return this.reverse().firstKey(n);
      }, e.prototype.distinct = function() {
        var n = this._ctx, t = n.index && n.table.schema.idxByName[n.index];
        if (!t || !t.multi) return this;
        var r = {};
        return rt(this._ctx, function(i) {
          var a = i.primaryKey.toString(), u = X(r, a);
          return r[a] = true, !u;
        }), this;
      }, e.prototype.modify = function(n) {
        var t = this, r = this._ctx;
        return this._write(function(i) {
          var a;
          if (typeof n == "function") a = n;
          else {
            var u = U(n), o = u.length;
            a = function(m) {
              for (var g = false, w = 0; w < o; ++w) {
                var y = u[w], x = n[y], S = ue(m, y);
                x instanceof Ze ? (Z(m, y, x.execute(S)), g = true) : S !== x && (Z(m, y, x), g = true);
              }
              return g;
            };
          }
          var s = r.table.core, c = s.schema.primaryKey, h = c.outbound, l = c.extractKey, p = 200, _ = t.db._options.modifyChunkSize;
          _ && (typeof _ == "object" ? p = _[s.name] || _["*"] || 200 : p = _);
          var f = [], d = 0, v = [], b = function(m, g) {
            var w = g.failures, y = g.numFailures;
            d += m - y;
            for (var x = 0, S = U(w); x < S.length; x++) {
              var E = S[x];
              f.push(w[E]);
            }
          };
          return t.clone().primaryKeys().then(function(m) {
            var g = ze(r) && r.limit === 1 / 0 && (typeof n != "function" || n === at) && { index: r.index, range: r.range }, w = function(y) {
              var x = Math.min(p, m.length - y);
              return s.getMany({ trans: i, keys: m.slice(y, y + x), cache: "immutable" }).then(function(S) {
                for (var E = [], P = [], R = h ? [] : null, A = [], I = 0; I < x; ++I) {
                  var T = S[I], M = { value: _e(T), primKey: m[y + I] };
                  a.call(M, M.value, M) !== false && (M.value == null ? A.push(m[y + I]) : !h && B(l(T), l(M.value)) !== 0 ? (A.push(m[y + I]), E.push(M.value)) : (P.push(M.value), h && R.push(m[y + I])));
                }
                return Promise.resolve(E.length > 0 && s.mutate({ trans: i, type: "add", values: E }).then(function(O) {
                  for (var V in O.failures) A.splice(parseInt(V), 1);
                  b(E.length, O);
                })).then(function() {
                  return (P.length > 0 || g && typeof n == "object") && s.mutate({ trans: i, type: "put", keys: R, values: P, criteria: g, changeSpec: typeof n != "function" && n, isAdditionalChunk: y > 0 }).then(function(O) {
                    return b(P.length, O);
                  });
                }).then(function() {
                  return (A.length > 0 || g && n === at) && s.mutate({ trans: i, type: "delete", keys: A, criteria: g, isAdditionalChunk: y > 0 }).then(function(O) {
                    return b(A.length, O);
                  });
                }).then(function() {
                  return m.length > y + x && w(y + p);
                });
              });
            };
            return w(0).then(function() {
              if (f.length > 0) throw new sn("Error modifying one or more objects", f, d, v);
              return m.length;
            });
          });
        });
      }, e.prototype.delete = function() {
        var n = this._ctx, t = n.range;
        return ze(n) && (n.isPrimKey || t.type === 3) ? this._write(function(r) {
          var i = n.table.core.schema.primaryKey, a = t;
          return n.table.core.count({ trans: r, query: { index: i, range: a } }).then(function(u) {
            return n.table.core.mutate({ trans: r, type: "deleteRange", range: a }).then(function(o) {
              var s = o.failures;
              o.lastResult, o.results;
              var c = o.numFailures;
              if (c) throw new sn("Could not delete some values", Object.keys(s).map(function(h) {
                return s[h];
              }), u - c);
              return u - c;
            });
          });
        }) : this.modify(at);
      }, e;
    }(), at = function(e, n) {
      return n.value = null;
    };
    function si(e) {
      return Je(oi.prototype, function(t, r) {
        this.db = e;
        var i = Zt, a = null;
        if (r) try {
          i = r();
        } catch (c) {
          a = c;
        }
        var u = t._ctx, o = u.table, s = o.hook.reading.fire;
        this._ctx = { table: o, index: u.index, isPrimKey: !u.index || o.schema.primKey.keyPath && u.index === o.schema.primKey.name, range: i, keysOnly: false, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: true, isMatch: null, offset: 0, limit: 1 / 0, error: a, or: u.or, valueMapper: s !== $e ? s : null };
      });
    }
    function ci(e, n) {
      return e < n ? -1 : e === n ? 0 : 1;
    }
    function li(e, n) {
      return e > n ? -1 : e === n ? 0 : 1;
    }
    function q(e, n, t) {
      var r = e instanceof ur ? new e.Collection(e) : e;
      return r._ctx.error = t ? new t(n) : new TypeError(n), r;
    }
    function We(e) {
      return new e.Collection(e, function() {
        return ar("");
      }).limit(0);
    }
    function fi(e) {
      return e === "next" ? function(n) {
        return n.toUpperCase();
      } : function(n) {
        return n.toLowerCase();
      };
    }
    function hi(e) {
      return e === "next" ? function(n) {
        return n.toLowerCase();
      } : function(n) {
        return n.toUpperCase();
      };
    }
    function di(e, n, t, r, i, a) {
      for (var u = Math.min(e.length, r.length), o = -1, s = 0; s < u; ++s) {
        var c = n[s];
        if (c !== r[s]) return i(e[s], t[s]) < 0 ? e.substr(0, s) + t[s] + t.substr(s + 1) : i(e[s], r[s]) < 0 ? e.substr(0, s) + r[s] + t.substr(s + 1) : o >= 0 ? e.substr(0, o) + n[o] + t.substr(o + 1) : null;
        i(e[s], c) < 0 && (o = s);
      }
      return u < r.length && a === "next" ? e + t.substr(e.length) : u < e.length && a === "prev" ? e.substr(0, t.length) : o < 0 ? null : e.substr(0, o) + r[o] + t.substr(o + 1);
    }
    function xn(e, n, t, r) {
      var i, a, u, o, s, c, h, l = t.length;
      if (!t.every(function(d) {
        return typeof d == "string";
      })) return q(e, Jt);
      function p(d) {
        i = fi(d), a = hi(d), u = d === "next" ? ci : li;
        var v = t.map(function(b) {
          return { lower: a(b), upper: i(b) };
        }).sort(function(b, m) {
          return u(b.lower, m.lower);
        });
        o = v.map(function(b) {
          return b.upper;
        }), s = v.map(function(b) {
          return b.lower;
        }), c = d, h = d === "next" ? "" : r;
      }
      p("next");
      var _ = new e.Collection(e, function() {
        return pe(o[0], s[l - 1] + r);
      });
      _._ondirectionchange = function(d) {
        p(d);
      };
      var f = 0;
      return _._addAlgorithm(function(d, v, b) {
        var m = d.key;
        if (typeof m != "string") return false;
        var g = a(m);
        if (n(g, s, f)) return true;
        for (var w = null, y = f; y < l; ++y) {
          var x = di(m, g, o[y], s[y], u, c);
          x === null && w === null ? f = y + 1 : (w === null || u(w, x) > 0) && (w = x);
        }
        return v(w !== null ? function() {
          d.continue(w + h);
        } : b), false;
      }), _;
    }
    function pe(e, n, t, r) {
      return { type: 2, lower: e, upper: n, lowerOpen: t, upperOpen: r };
    }
    function ar(e) {
      return { type: 1, lower: e, upper: e };
    }
    var ur = function() {
      function e() {
      }
      return Object.defineProperty(e.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: false, configurable: true }), e.prototype.between = function(n, t, r, i) {
        r = r !== false, i = i === true;
        try {
          return this._cmp(n, t) > 0 || this._cmp(n, t) === 0 && (r || i) && !(r && i) ? We(this) : new this.Collection(this, function() {
            return pe(n, t, !r, !i);
          });
        } catch {
          return q(this, se);
        }
      }, e.prototype.equals = function(n) {
        return n == null ? q(this, se) : new this.Collection(this, function() {
          return ar(n);
        });
      }, e.prototype.above = function(n) {
        return n == null ? q(this, se) : new this.Collection(this, function() {
          return pe(n, void 0, true);
        });
      }, e.prototype.aboveOrEqual = function(n) {
        return n == null ? q(this, se) : new this.Collection(this, function() {
          return pe(n, void 0, false);
        });
      }, e.prototype.below = function(n) {
        return n == null ? q(this, se) : new this.Collection(this, function() {
          return pe(void 0, n, false, true);
        });
      }, e.prototype.belowOrEqual = function(n) {
        return n == null ? q(this, se) : new this.Collection(this, function() {
          return pe(void 0, n);
        });
      }, e.prototype.startsWith = function(n) {
        return typeof n != "string" ? q(this, Jt) : this.between(n, n + Oe, true, true);
      }, e.prototype.startsWithIgnoreCase = function(n) {
        return n === "" ? this.startsWith(n) : xn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [n], Oe);
      }, e.prototype.equalsIgnoreCase = function(n) {
        return xn(this, function(t, r) {
          return t === r[0];
        }, [n], "");
      }, e.prototype.anyOfIgnoreCase = function() {
        var n = oe.apply(Be, arguments);
        return n.length === 0 ? We(this) : xn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, n, "");
      }, e.prototype.startsWithAnyOfIgnoreCase = function() {
        var n = oe.apply(Be, arguments);
        return n.length === 0 ? We(this) : xn(this, function(t, r) {
          return r.some(function(i) {
            return t.indexOf(i) === 0;
          });
        }, n, Oe);
      }, e.prototype.anyOf = function() {
        var n = this, t = oe.apply(Be, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return q(this, se);
        }
        if (t.length === 0) return We(this);
        var i = new this.Collection(this, function() {
          return pe(t[0], t[t.length - 1]);
        });
        i._ondirectionchange = function(u) {
          r = u === "next" ? n._ascending : n._descending, t.sort(r);
        };
        var a = 0;
        return i._addAlgorithm(function(u, o, s) {
          for (var c = u.key; r(c, t[a]) > 0; ) if (++a, a === t.length) return o(s), false;
          return r(c, t[a]) === 0 ? true : (o(function() {
            u.continue(t[a]);
          }), false);
        }), i;
      }, e.prototype.notEqual = function(n) {
        return this.inAnyRange([[et, n], [n, this.db._maxKey]], { includeLowers: false, includeUppers: false });
      }, e.prototype.noneOf = function() {
        var n = oe.apply(Be, arguments);
        if (n.length === 0) return new this.Collection(this);
        try {
          n.sort(this._ascending);
        } catch {
          return q(this, se);
        }
        var t = n.reduce(function(r, i) {
          return r ? r.concat([[r[r.length - 1][1], i]]) : [[et, i]];
        }, null);
        return t.push([n[n.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: false, includeUppers: false });
      }, e.prototype.inAnyRange = function(n, t) {
        var r = this, i = this._cmp, a = this._ascending, u = this._descending, o = this._min, s = this._max;
        if (n.length === 0) return We(this);
        if (!n.every(function(y) {
          return y[0] !== void 0 && y[1] !== void 0 && a(y[0], y[1]) <= 0;
        })) return q(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", D.InvalidArgument);
        var c = !t || t.includeLowers !== false, h = t && t.includeUppers === true;
        function l(y, x) {
          for (var S = 0, E = y.length; S < E; ++S) {
            var P = y[S];
            if (i(x[0], P[1]) < 0 && i(x[1], P[0]) > 0) {
              P[0] = o(P[0], x[0]), P[1] = s(P[1], x[1]);
              break;
            }
          }
          return S === E && y.push(x), y;
        }
        var p = a;
        function _(y, x) {
          return p(y[0], x[0]);
        }
        var f;
        try {
          f = n.reduce(l, []), f.sort(_);
        } catch {
          return q(this, se);
        }
        var d = 0, v = h ? function(y) {
          return a(y, f[d][1]) > 0;
        } : function(y) {
          return a(y, f[d][1]) >= 0;
        }, b = c ? function(y) {
          return u(y, f[d][0]) > 0;
        } : function(y) {
          return u(y, f[d][0]) >= 0;
        };
        function m(y) {
          return !v(y) && !b(y);
        }
        var g = v, w = new this.Collection(this, function() {
          return pe(f[0][0], f[f.length - 1][1], !c, !h);
        });
        return w._ondirectionchange = function(y) {
          y === "next" ? (g = v, p = a) : (g = b, p = u), f.sort(_);
        }, w._addAlgorithm(function(y, x, S) {
          for (var E = y.key; g(E); ) if (++d, d === f.length) return x(S), false;
          return m(E) ? true : (r._cmp(E, f[d][1]) === 0 || r._cmp(E, f[d][0]) === 0 || x(function() {
            p === a ? y.continue(f[d][0]) : y.continue(f[d][1]);
          }), false);
        }), w;
      }, e.prototype.startsWithAnyOf = function() {
        var n = oe.apply(Be, arguments);
        return n.every(function(t) {
          return typeof t == "string";
        }) ? n.length === 0 ? We(this) : this.inAnyRange(n.map(function(t) {
          return [t, t + Oe];
        })) : q(this, "startsWithAnyOf() only works with strings");
      }, e;
    }();
    function vi(e) {
      return Je(ur.prototype, function(t, r, i) {
        if (this.db = e, this._ctx = { table: t, index: r === ":id" ? null : r, or: i }, this._cmp = this._ascending = B, this._descending = function(a, u) {
          return B(u, a);
        }, this._max = function(a, u) {
          return B(a, u) > 0 ? a : u;
        }, this._min = function(a, u) {
          return B(a, u) < 0 ? a : u;
        }, this._IDBKeyRange = e._deps.IDBKeyRange, !this._IDBKeyRange) throw new D.MissingAPI();
      });
    }
    function re(e) {
      return j(function(n) {
        return qe(n), e(n.target.error), false;
      });
    }
    function qe(e) {
      e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
    }
    var en = "storagemutated", ut = "x-storagemutated-1", ye = Ge(null, en), pi = function() {
      function e() {
      }
      return e.prototype._lock = function() {
        return Ye(!k.global), ++this._reculock, this._reculock === 1 && !k.global && (k.lockOwnerFor = this), this;
      }, e.prototype._unlock = function() {
        if (Ye(!k.global), --this._reculock === 0) for (k.global || (k.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
          var n = this._blockedFuncs.shift();
          try {
            ke(n[1], n[0]);
          } catch {
          }
        }
        return this;
      }, e.prototype._locked = function() {
        return this._reculock && k.lockOwnerFor !== this;
      }, e.prototype.create = function(n) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, i = this.db._state.dbOpenError;
        if (Ye(!this.idbtrans), !n && !r) switch (i && i.name) {
          case "DatabaseClosedError":
            throw new D.DatabaseClosed(i);
          case "MissingAPIError":
            throw new D.MissingAPI(i.message, i);
          default:
            throw new D.OpenFailed(i);
        }
        if (!this.active) throw new D.TransactionInactive();
        return Ye(this._completion._state === null), n = this.idbtrans = n || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : r.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })), n.onerror = j(function(a) {
          qe(a), t._reject(n.error);
        }), n.onabort = j(function(a) {
          qe(a), t.active && t._reject(new D.Abort(n.error)), t.active = false, t.on("abort").fire(a);
        }), n.oncomplete = j(function() {
          t.active = false, t._resolve(), "mutatedParts" in n && ye.storagemutated.fire(n.mutatedParts);
        }), this;
      }, e.prototype._promise = function(n, t, r) {
        var i = this;
        if (n === "readwrite" && this.mode !== "readwrite") return z(new D.ReadOnly("Transaction is readonly"));
        if (!this.active) return z(new D.TransactionInactive());
        if (this._locked()) return new K(function(u, o) {
          i._blockedFuncs.push([function() {
            i._promise(n, t, r).then(u, o);
          }, k]);
        });
        if (r) return he(function() {
          var u = new K(function(o, s) {
            i._lock();
            var c = t(o, s, i);
            c && c.then && c.then(o, s);
          });
          return u.finally(function() {
            return i._unlock();
          }), u._lib = true, u;
        });
        var a = new K(function(u, o) {
          var s = t(u, o, i);
          s && s.then && s.then(u, o);
        });
        return a._lib = true, a;
      }, e.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, e.prototype.waitFor = function(n) {
        var t = this._root(), r = K.resolve(n);
        if (t._waitingFor) t._waitingFor = t._waitingFor.then(function() {
          return r;
        });
        else {
          t._waitingFor = r, t._waitingQueue = [];
          var i = t.idbtrans.objectStore(t.storeNames[0]);
          (function u() {
            for (++t._spinCount; t._waitingQueue.length; ) t._waitingQueue.shift()();
            t._waitingFor && (i.get(-1 / 0).onsuccess = u);
          })();
        }
        var a = t._waitingFor;
        return new K(function(u, o) {
          r.then(function(s) {
            return t._waitingQueue.push(j(u.bind(null, s)));
          }, function(s) {
            return t._waitingQueue.push(j(o.bind(null, s)));
          }).finally(function() {
            t._waitingFor === a && (t._waitingFor = null);
          });
        });
      }, e.prototype.abort = function() {
        this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new D.Abort()));
      }, e.prototype.table = function(n) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (X(t, n)) return t[n];
        var r = this.schema[n];
        if (!r) throw new D.NotFound("Table " + n + " not part of transaction");
        var i = new this.db.Table(n, r, this);
        return i.core = this.db.core.table(n), t[n] = i, i;
      }, e;
    }();
    function yi(e) {
      return Je(pi.prototype, function(t, r, i, a, u) {
        var o = this;
        this.db = e, this.mode = t, this.storeNames = r, this.schema = i, this.chromeTransactionDurability = a, this.idbtrans = null, this.on = Ge(this, "complete", "error", "abort"), this.parent = u || null, this.active = true, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new K(function(s, c) {
          o._resolve = s, o._reject = c;
        }), this._completion.then(function() {
          o.active = false, o.on.complete.fire();
        }, function(s) {
          var c = o.active;
          return o.active = false, o.on.error.fire(s), o.parent ? o.parent._reject(s) : c && o.idbtrans && o.idbtrans.abort(), z(s);
        });
      });
    }
    function ot(e, n, t, r, i, a, u) {
      return { name: e, keyPath: n, unique: t, multi: r, auto: i, compound: a, src: (t && !u ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + or(n) };
    }
    function or(e) {
      return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
    }
    function st(e, n, t) {
      return { name: e, primKey: n, indexes: t, mappedClass: null, idxByName: Dr(t, function(r) {
        return [r.name, r];
      }) };
    }
    function mi(e) {
      return e.length === 1 ? e[0] : e;
    }
    var nn = function(e) {
      try {
        return e.only([[]]), nn = function() {
          return [[]];
        }, [[]];
      } catch {
        return nn = function() {
          return Oe;
        }, Oe;
      }
    };
    function ct(e) {
      return e == null ? function() {
      } : typeof e == "string" ? gi(e) : function(n) {
        return ue(n, e);
      };
    }
    function gi(e) {
      var n = e.split(".");
      return n.length === 1 ? function(t) {
        return t[e];
      } : function(t) {
        return ue(t, e);
      };
    }
    function sr(e) {
      return [].slice.call(e);
    }
    var bi = 0;
    function tn(e) {
      return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
    }
    function wi(e, n, t) {
      function r(l, p) {
        var _ = sr(l.objectStoreNames);
        return { schema: { name: l.name, tables: _.map(function(f) {
          return p.objectStore(f);
        }).map(function(f) {
          var d = f.keyPath, v = f.autoIncrement, b = L(d), m = d == null, g = {}, w = { name: f.name, primaryKey: { name: null, isPrimaryKey: true, outbound: m, compound: b, keyPath: d, autoIncrement: v, unique: true, extractKey: ct(d) }, indexes: sr(f.indexNames).map(function(y) {
            return f.index(y);
          }).map(function(y) {
            var x = y.name, S = y.unique, E = y.multiEntry, P = y.keyPath, R = L(P), A = { name: x, compound: R, keyPath: P, unique: S, multiEntry: E, extractKey: ct(P) };
            return g[tn(P)] = A, A;
          }), getIndexByKeyPath: function(y) {
            return g[tn(y)];
          } };
          return g[":id"] = w.primaryKey, d != null && (g[tn(d)] = w.primaryKey), w;
        }) }, hasGetAll: _.length > 0 && "getAll" in p.objectStore(_[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) };
      }
      function i(l) {
        if (l.type === 3) return null;
        if (l.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var p = l.lower, _ = l.upper, f = l.lowerOpen, d = l.upperOpen, v = p === void 0 ? _ === void 0 ? null : n.upperBound(_, !!d) : _ === void 0 ? n.lowerBound(p, !!f) : n.bound(p, _, !!f, !!d);
        return v;
      }
      function a(l) {
        var p = l.name;
        function _(v) {
          var b = v.trans, m = v.type, g = v.keys, w = v.values, y = v.range;
          return new Promise(function(x, S) {
            x = j(x);
            var E = b.objectStore(p), P = E.keyPath == null, R = m === "put" || m === "add";
            if (!R && m !== "delete" && m !== "deleteRange") throw new Error("Invalid operation type: " + m);
            var A = (g || w || { length: 1 }).length;
            if (g && w && g.length !== w.length) throw new Error("Given keys array must have same length as given values array.");
            if (A === 0) return x({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            var I, T = [], M = [], O = 0, V = function(ae) {
              ++O, qe(ae);
            };
            if (m === "deleteRange") {
              if (y.type === 4) return x({ numFailures: O, failures: M, results: [], lastResult: void 0 });
              y.type === 3 ? T.push(I = E.clear()) : T.push(I = E.delete(i(y)));
            } else {
              var H = R ? P ? [w, g] : [w, null] : [g, null], ie = H[0], G = H[1];
              if (R) for (var ee = 0; ee < A; ++ee) T.push(I = G && G[ee] !== void 0 ? E[m](ie[ee], G[ee]) : E[m](ie[ee])), I.onerror = V;
              else for (var ee = 0; ee < A; ++ee) T.push(I = E[m](ie[ee])), I.onerror = V;
            }
            var be = function(ae) {
              var un = ae.target.result;
              T.forEach(function(ne, Rn) {
                return ne.error != null && (M[Rn] = ne.error);
              }), x({ numFailures: O, failures: M, results: m === "delete" ? g : T.map(function(ne) {
                return ne.result;
              }), lastResult: un });
            };
            I.onerror = function(ae) {
              V(ae), be(ae);
            }, I.onsuccess = be;
          });
        }
        function f(v) {
          var b = v.trans, m = v.values, g = v.query, w = v.reverse, y = v.unique;
          return new Promise(function(x, S) {
            x = j(x);
            var E = g.index, P = g.range, R = b.objectStore(p), A = E.isPrimaryKey ? R : R.index(E.name), I = w ? y ? "prevunique" : "prev" : y ? "nextunique" : "next", T = m || !("openKeyCursor" in A) ? A.openCursor(i(P), I) : A.openKeyCursor(i(P), I);
            T.onerror = re(S), T.onsuccess = j(function(M) {
              var O = T.result;
              if (!O) {
                x(null);
                return;
              }
              O.___id = ++bi, O.done = false;
              var V = O.continue.bind(O), H = O.continuePrimaryKey;
              H && (H = H.bind(O));
              var ie = O.advance.bind(O), G = function() {
                throw new Error("Cursor not started");
              }, ee = function() {
                throw new Error("Cursor not stopped");
              };
              O.trans = b, O.stop = O.continue = O.continuePrimaryKey = O.advance = G, O.fail = j(S), O.next = function() {
                var be = this, ae = 1;
                return this.start(function() {
                  return ae-- ? be.continue() : be.stop();
                }).then(function() {
                  return be;
                });
              }, O.start = function(be) {
                var ae = new Promise(function(ne, Rn) {
                  ne = j(ne), T.onerror = re(Rn), O.fail = Rn, O.stop = function(oa) {
                    O.stop = O.continue = O.continuePrimaryKey = O.advance = ee, ne(oa);
                  };
                }), un = function() {
                  if (T.result) try {
                    be();
                  } catch (ne) {
                    O.fail(ne);
                  }
                  else O.done = true, O.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, O.stop();
                };
                return T.onsuccess = j(function(ne) {
                  T.onsuccess = un, un();
                }), O.continue = V, O.continuePrimaryKey = H, O.advance = ie, un(), ae;
              }, x(O);
            }, S);
          });
        }
        function d(v) {
          return function(b) {
            return new Promise(function(m, g) {
              m = j(m);
              var w = b.trans, y = b.values, x = b.limit, S = b.query, E = x === 1 / 0 ? void 0 : x, P = S.index, R = S.range, A = w.objectStore(p), I = P.isPrimaryKey ? A : A.index(P.name), T = i(R);
              if (x === 0) return m({ result: [] });
              if (v) {
                var M = y ? I.getAll(T, E) : I.getAllKeys(T, E);
                M.onsuccess = function(ie) {
                  return m({ result: ie.target.result });
                }, M.onerror = re(g);
              } else {
                var O = 0, V = y || !("openKeyCursor" in I) ? I.openCursor(T) : I.openKeyCursor(T), H = [];
                V.onsuccess = function(ie) {
                  var G = V.result;
                  if (!G) return m({ result: H });
                  if (H.push(y ? G.value : G.primaryKey), ++O === x) return m({ result: H });
                  G.continue();
                }, V.onerror = re(g);
              }
            });
          };
        }
        return { name: p, schema: l, mutate: _, getMany: function(v) {
          var b = v.trans, m = v.keys;
          return new Promise(function(g, w) {
            g = j(g);
            for (var y = b.objectStore(p), x = m.length, S = new Array(x), E = 0, P = 0, R, A = function(O) {
              var V = O.target;
              (S[V._pos] = V.result) != null, ++P === E && g(S);
            }, I = re(w), T = 0; T < x; ++T) {
              var M = m[T];
              M != null && (R = y.get(m[T]), R._pos = T, R.onsuccess = A, R.onerror = I, ++E);
            }
            E === 0 && g(S);
          });
        }, get: function(v) {
          var b = v.trans, m = v.key;
          return new Promise(function(g, w) {
            g = j(g);
            var y = b.objectStore(p), x = y.get(m);
            x.onsuccess = function(S) {
              return g(S.target.result);
            }, x.onerror = re(w);
          });
        }, query: d(s), openCursor: f, count: function(v) {
          var b = v.query, m = v.trans, g = b.index, w = b.range;
          return new Promise(function(y, x) {
            var S = m.objectStore(p), E = g.isPrimaryKey ? S : S.index(g.name), P = i(w), R = P ? E.count(P) : E.count();
            R.onsuccess = j(function(A) {
              return y(A.target.result);
            }), R.onerror = re(x);
          });
        } };
      }
      var u = r(e, t), o = u.schema, s = u.hasGetAll, c = o.tables.map(function(l) {
        return a(l);
      }), h = {};
      return c.forEach(function(l) {
        return h[l.name] = l;
      }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(l) {
        var p = h[l];
        if (!p) throw new Error("Table '".concat(l, "' not found"));
        return h[l];
      }, MIN_KEY: -1 / 0, MAX_KEY: nn(n), schema: o };
    }
    function _i(e, n) {
      return n.reduce(function(t, r) {
        var i = r.create;
        return C(C({}, t), i(t));
      }, e);
    }
    function xi(e, n, t, r) {
      var i = t.IDBKeyRange;
      t.indexedDB;
      var a = _i(wi(n, i, r), e.dbcore);
      return { dbcore: a };
    }
    function En(e, n) {
      var t = n.db, r = xi(e._middlewares, t, e._deps, n);
      e.core = r.dbcore, e.tables.forEach(function(i) {
        var a = i.name;
        e.core.schema.tables.some(function(u) {
          return u.name === a;
        }) && (i.core = e.core.table(a), e[a] instanceof e.Table && (e[a].core = i.core));
      });
    }
    function Kn(e, n, t, r) {
      t.forEach(function(i) {
        var a = r[i];
        n.forEach(function(u) {
          var o = Tt(u, i);
          (!o || "value" in o && o.value === void 0) && (u === e.Transaction.prototype || u instanceof e.Transaction ? le(u, i, { get: function() {
            return this.table(i);
          }, set: function(s) {
            Pt(this, i, { value: s, writable: true, configurable: true, enumerable: true });
          } }) : u[i] = new e.Table(i, a));
        });
      });
    }
    function lt(e, n) {
      n.forEach(function(t) {
        for (var r in t) t[r] instanceof e.Table && delete t[r];
      });
    }
    function Ei(e, n) {
      return e._cfg.version - n._cfg.version;
    }
    function Ki(e, n, t, r) {
      var i = e._dbSchema;
      t.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = st("$meta", lr("")[0], []), e._storeNames.push("$meta"));
      var a = e._createTransaction("readwrite", e._storeNames, i);
      a.create(t), a._completion.catch(r);
      var u = a._reject.bind(a), o = k.transless || k;
      he(function() {
        if (k.trans = a, k.transless = o, n === 0) U(i).forEach(function(s) {
          ht(t, s, i[s].primKey, i[s].indexes);
        }), En(e, t), K.follow(function() {
          return e.on.populate.fire(a);
        }).catch(u);
        else return En(e, t), Ai(e, a, n).then(function(s) {
          return ki(e, s, a, t);
        }).catch(u);
      });
    }
    function Si(e, n) {
      cr(e._dbSchema, n), n.db.version % 10 === 0 && !n.objectStoreNames.contains("$meta") && n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
      var t = An(e, e.idbdb, n);
      kn(e, e._dbSchema, n);
      for (var r = ft(t, e._dbSchema), i = function(c) {
        if (c.change.length || c.recreate) return console.warn("Unable to patch indexes of table ".concat(c.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
        var h = n.objectStore(c.name);
        c.add.forEach(function(l) {
          te && console.debug("Dexie upgrade patch: Creating missing index ".concat(c.name, ".").concat(l.src)), Sn(h, l);
        });
      }, a = 0, u = r.change; a < u.length; a++) {
        var o = u[a], s = i(o);
        if (typeof s == "object") return s.value;
      }
    }
    function Ai(e, n, t) {
      return n.storeNames.includes("$meta") ? n.table("$meta").get("version").then(function(r) {
        return r ?? t;
      }) : K.resolve(t);
    }
    function ki(e, n, t, r) {
      var i = [], a = e._versions, u = e._dbSchema = An(e, e.idbdb, r), o = a.filter(function(c) {
        return c._cfg.version >= n;
      });
      if (o.length === 0) return K.resolve();
      o.forEach(function(c) {
        i.push(function() {
          var h = u, l = c._cfg.dbschema;
          kn(e, h, r), kn(e, l, r), u = e._dbSchema = l;
          var p = ft(h, l);
          p.add.forEach(function(m) {
            ht(r, m[0], m[1].primKey, m[1].indexes);
          }), p.change.forEach(function(m) {
            if (m.recreate) throw new D.Upgrade("Not yet support for changing primary key");
            var g = r.objectStore(m.name);
            m.add.forEach(function(w) {
              return Sn(g, w);
            }), m.change.forEach(function(w) {
              g.deleteIndex(w.name), Sn(g, w);
            }), m.del.forEach(function(w) {
              return g.deleteIndex(w);
            });
          });
          var _ = c._cfg.contentUpgrade;
          if (_ && c._cfg.version > n) {
            En(e, r), t._memoizedTables = {};
            var f = Rt(l);
            p.del.forEach(function(m) {
              f[m] = h[m];
            }), lt(e, [e.Transaction.prototype]), Kn(e, [e.Transaction.prototype], U(f), f), t.schema = f;
            var d = Ln(_);
            d && Le();
            var v, b = K.follow(function() {
              if (v = _(t), v && d) {
                var m = de.bind(null, null);
                v.then(m, m);
              }
            });
            return v && typeof v.then == "function" ? K.resolve(v) : b.then(function() {
              return v;
            });
          }
        }), i.push(function(h) {
          var l = c._cfg.dbschema;
          Oi(l, h), lt(e, [e.Transaction.prototype]), Kn(e, [e.Transaction.prototype], e._storeNames, e._dbSchema), t.schema = e._dbSchema;
        }), i.push(function(h) {
          e.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(e.idbdb.version / 10) === c._cfg.version ? (e.idbdb.deleteObjectStore("$meta"), delete e._dbSchema.$meta, e._storeNames = e._storeNames.filter(function(l) {
            return l !== "$meta";
          })) : h.objectStore("$meta").put(c._cfg.version, "version"));
        });
      });
      function s() {
        return i.length ? K.resolve(i.shift()(t.idbtrans)).then(s) : K.resolve();
      }
      return s().then(function() {
        cr(u, r);
      });
    }
    function ft(e, n) {
      var t = { del: [], add: [], change: [] }, r;
      for (r in e) n[r] || t.del.push(r);
      for (r in n) {
        var i = e[r], a = n[r];
        if (!i) t.add.push([r, a]);
        else {
          var u = { name: r, def: a, recreate: false, del: [], add: [], change: [] };
          if ("" + (i.primKey.keyPath || "") != "" + (a.primKey.keyPath || "") || i.primKey.auto !== a.primKey.auto) u.recreate = true, t.change.push(u);
          else {
            var o = i.idxByName, s = a.idxByName, c = void 0;
            for (c in o) s[c] || u.del.push(c);
            for (c in s) {
              var h = o[c], l = s[c];
              h ? h.src !== l.src && u.change.push(l) : u.add.push(l);
            }
            (u.del.length > 0 || u.add.length > 0 || u.change.length > 0) && t.change.push(u);
          }
        }
      }
      return t;
    }
    function ht(e, n, t, r) {
      var i = e.db.createObjectStore(n, t.keyPath ? { keyPath: t.keyPath, autoIncrement: t.auto } : { autoIncrement: t.auto });
      return r.forEach(function(a) {
        return Sn(i, a);
      }), i;
    }
    function cr(e, n) {
      U(e).forEach(function(t) {
        n.db.objectStoreNames.contains(t) || (te && console.debug("Dexie: Creating missing table", t), ht(n, t, e[t].primKey, e[t].indexes));
      });
    }
    function Oi(e, n) {
      [].slice.call(n.db.objectStoreNames).forEach(function(t) {
        return e[t] == null && n.db.deleteObjectStore(t);
      });
    }
    function Sn(e, n) {
      e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
    }
    function An(e, n, t) {
      var r = {}, i = on(n.objectStoreNames, 0);
      return i.forEach(function(a) {
        for (var u = t.objectStore(a), o = u.keyPath, s = ot(or(o), o || "", true, false, !!u.autoIncrement, o && typeof o != "string", true), c = [], h = 0; h < u.indexNames.length; ++h) {
          var l = u.index(u.indexNames[h]);
          o = l.keyPath;
          var p = ot(l.name, o, !!l.unique, !!l.multiEntry, false, o && typeof o != "string", false);
          c.push(p);
        }
        r[a] = st(a, s, c);
      }), r;
    }
    function Di(e, n, t) {
      e.verno = n.version / 10;
      var r = e._dbSchema = An(e, n, t);
      e._storeNames = on(n.objectStoreNames, 0), Kn(e, [e._allTables], U(r), r);
    }
    function Pi(e, n) {
      var t = An(e, e.idbdb, n), r = ft(t, e._dbSchema);
      return !(r.add.length || r.change.some(function(i) {
        return i.add.length || i.change.length;
      }));
    }
    function kn(e, n, t) {
      for (var r = t.db.objectStoreNames, i = 0; i < r.length; ++i) {
        var a = r[i], u = t.objectStore(a);
        e._hasGetAll = "getAll" in u;
        for (var o = 0; o < u.indexNames.length; ++o) {
          var s = u.indexNames[o], c = u.index(s).keyPath, h = typeof c == "string" ? c : "[" + on(c).join("+") + "]";
          if (n[a]) {
            var l = n[a].idxByName[h];
            l && (l.name = s, delete n[a].idxByName[h], n[a].idxByName[s] = l);
          }
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && N.WorkerGlobalScope && N instanceof N.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = false);
    }
    function lr(e) {
      return e.split(",").map(function(n, t) {
        n = n.trim();
        var r = n.replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
        return ot(r, i || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), L(i), t === 0);
      });
    }
    var Ti = function() {
      function e() {
      }
      return e.prototype._parseStoresSpec = function(n, t) {
        U(n).forEach(function(r) {
          if (n[r] !== null) {
            var i = lr(n[r]), a = i.shift();
            if (a.unique = true, a.multi) throw new D.Schema("Primary key cannot be multi-valued");
            i.forEach(function(u) {
              if (u.auto) throw new D.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!u.keyPath) throw new D.Schema("Index must have a name and cannot be an empty string");
            }), t[r] = st(r, a, i);
          }
        });
      }, e.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? J(this._cfg.storesSource, n) : n;
        var r = t._versions, i = {}, a = {};
        return r.forEach(function(u) {
          J(i, u._cfg.storesSource), a = u._cfg.dbschema = {}, u._parseStoresSpec(i, a);
        }), t._dbSchema = a, lt(t, [t._allTables, t, t.Transaction.prototype]), Kn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], U(a), a), t._storeNames = U(a), this;
      }, e.prototype.upgrade = function(n) {
        return this._cfg.contentUpgrade = Wn(this._cfg.contentUpgrade || F, n), this;
      }, e;
    }();
    function Ci(e) {
      return Je(Ti.prototype, function(t) {
        this.db = e, this._cfg = { version: t, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      });
    }
    function dt(e, n) {
      var t = e._dbNamesDB;
      return t || (t = e._dbNamesDB = new ce(gn, { addons: [], indexedDB: e, IDBKeyRange: n }), t.version(1).stores({ dbnames: "name" })), t.table("dbnames");
    }
    function vt(e) {
      return e && typeof e.databases == "function";
    }
    function Ii(e) {
      var n = e.indexedDB, t = e.IDBKeyRange;
      return vt(n) ? Promise.resolve(n.databases()).then(function(r) {
        return r.map(function(i) {
          return i.name;
        }).filter(function(i) {
          return i !== gn;
        });
      }) : dt(n, t).toCollection().primaryKeys();
    }
    function Ri(e, n) {
      var t = e.indexedDB, r = e.IDBKeyRange;
      !vt(t) && n !== gn && dt(t, r).put({ name: n }).catch(F);
    }
    function Bi(e, n) {
      var t = e.indexedDB, r = e.IDBKeyRange;
      !vt(t) && n !== gn && dt(t, r).delete(n).catch(F);
    }
    function pt(e) {
      return he(function() {
        return k.letThrough = true, e();
      });
    }
    function Mi() {
      var e = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
      if (!e || !indexedDB.databases) return Promise.resolve();
      var n;
      return new Promise(function(t) {
        var r = function() {
          return indexedDB.databases().finally(t);
        };
        n = setInterval(r, 100), r();
      }).finally(function() {
        return clearInterval(n);
      });
    }
    var yt;
    function mt(e) {
      return !("from" in e);
    }
    var Q = function(e, n) {
      if (this) J(this, arguments.length ? { d: 1, from: e, to: arguments.length > 1 ? n : e } : { d: 0 });
      else {
        var t = new Q();
        return e && "d" in e && J(t, e), t;
      }
    };
    Ie(Q.prototype, (yt = { add: function(e) {
      return an(this, e), this;
    }, addKey: function(e) {
      return rn(this, e, e), this;
    }, addKeys: function(e) {
      var n = this;
      return e.forEach(function(t) {
        return rn(n, t, t);
      }), this;
    }, hasKey: function(e) {
      var n = On(this).next(e).value;
      return n && B(n.from, e) <= 0 && B(n.to, e) >= 0;
    } }, yt[Nn] = function() {
      return On(this);
    }, yt));
    function rn(e, n, t) {
      var r = B(n, t);
      if (!isNaN(r)) {
        if (r > 0) throw RangeError();
        if (mt(e)) return J(e, { from: n, to: t, d: 1 });
        var i = e.l, a = e.r;
        if (B(t, e.from) < 0) return i ? rn(i, n, t) : e.l = { from: n, to: t, d: 1, l: null, r: null }, hr(e);
        if (B(n, e.to) > 0) return a ? rn(a, n, t) : e.r = { from: n, to: t, d: 1, l: null, r: null }, hr(e);
        B(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), B(t, e.to) > 0 && (e.to = t, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
        var u = !e.r;
        i && !e.l && an(e, i), a && u && an(e, a);
      }
    }
    function an(e, n) {
      function t(r, i) {
        var a = i.from, u = i.to, o = i.l, s = i.r;
        rn(r, a, u), o && t(r, o), s && t(r, s);
      }
      mt(n) || t(e, n);
    }
    function fr(e, n) {
      var t = On(n), r = t.next();
      if (r.done) return false;
      for (var i = r.value, a = On(e), u = a.next(i.from), o = u.value; !r.done && !u.done; ) {
        if (B(o.from, i.to) <= 0 && B(o.to, i.from) >= 0) return true;
        B(i.from, o.from) < 0 ? i = (r = t.next(o.from)).value : o = (u = a.next(i.from)).value;
      }
      return false;
    }
    function On(e) {
      var n = mt(e) ? null : { s: 0, n: e };
      return { next: function(t) {
        for (var r = arguments.length > 0; n; ) switch (n.s) {
          case 0:
            if (n.s = 1, r) for (; n.n.l && B(t, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
            else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
          case 1:
            if (n.s = 2, !r || B(t, n.n.to) <= 0) return { value: n.n, done: false };
          case 2:
            if (n.n.r) {
              n.s = 3, n = { up: n, n: n.n.r, s: 0 };
              continue;
            }
          case 3:
            n = n.up;
        }
        return { done: true };
      } };
    }
    function hr(e) {
      var n, t, r = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((t = e.l) === null || t === void 0 ? void 0 : t.d) || 0), i = r > 1 ? "r" : r < -1 ? "l" : "";
      if (i) {
        var a = i === "r" ? "l" : "r", u = C({}, e), o = e[i];
        e.from = o.from, e.to = o.to, e[i] = o[i], u[i] = o[a], e[a] = u, u.d = dr(u);
      }
      e.d = dr(e);
    }
    function dr(e) {
      var n = e.r, t = e.l;
      return (n ? t ? Math.max(n.d, t.d) : n.d : t ? t.d : 0) + 1;
    }
    function Dn(e, n) {
      return U(n).forEach(function(t) {
        e[t] ? an(e[t], n[t]) : e[t] = Ft(n[t]);
      }), e;
    }
    function gt(e, n) {
      return e.all || n.all || Object.keys(e).some(function(t) {
        return n[t] && fr(n[t], e[t]);
      });
    }
    var Pe = {}, bt = {}, wt = false;
    function Pn(e, n) {
      Dn(bt, e), wt || (wt = true, setTimeout(function() {
        wt = false;
        var t = bt;
        bt = {}, _t(t, false);
      }, 0));
    }
    function _t(e, n) {
      n === void 0 && (n = false);
      var t = /* @__PURE__ */ new Set();
      if (e.all) for (var r = 0, i = Object.values(Pe); r < i.length; r++) {
        var a = i[r];
        vr(a, e, t, n);
      }
      else for (var u in e) {
        var o = /^idb\:\/\/(.*)\/(.*)\//.exec(u);
        if (o) {
          var s = o[1], c = o[2], a = Pe["idb://".concat(s, "/").concat(c)];
          a && vr(a, e, t, n);
        }
      }
      t.forEach(function(h) {
        return h();
      });
    }
    function vr(e, n, t, r) {
      for (var i = [], a = 0, u = Object.entries(e.queries.query); a < u.length; a++) {
        for (var o = u[a], s = o[0], c = o[1], h = [], l = 0, p = c; l < p.length; l++) {
          var _ = p[l];
          gt(n, _.obsSet) ? _.subscribers.forEach(function(b) {
            return t.add(b);
          }) : r && h.push(_);
        }
        r && i.push([s, h]);
      }
      if (r) for (var f = 0, d = i; f < d.length; f++) {
        var v = d[f], s = v[0], h = v[1];
        e.queries.query[s] = h;
      }
    }
    function Fi(e) {
      var n = e._state, t = e._deps.indexedDB;
      if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
        return n.dbOpenError ? z(n.dbOpenError) : e;
      });
      n.isBeingOpened = true, n.dbOpenError = null, n.openComplete = false;
      var r = n.openCanceller, i = Math.round(e.verno * 10), a = false;
      function u() {
        if (n.openCanceller !== r) throw new D.DatabaseClosed("db.open() was cancelled");
      }
      var o = n.dbReadyResolve, s = null, c = false, h = function() {
        return new K(function(l, p) {
          if (u(), !t) throw new D.MissingAPI();
          var _ = e.name, f = n.autoSchema || !i ? t.open(_) : t.open(_, i);
          if (!f) throw new D.MissingAPI();
          f.onerror = re(p), f.onblocked = j(e._fireOnBlocked), f.onupgradeneeded = j(function(d) {
            if (s = f.transaction, n.autoSchema && !e._options.allowEmptyDB) {
              f.onerror = qe, s.abort(), f.result.close();
              var v = t.deleteDatabase(_);
              v.onsuccess = v.onerror = j(function() {
                p(new D.NoSuchDatabase("Database ".concat(_, " doesnt exist")));
              });
            } else {
              s.onerror = re(p);
              var b = d.oldVersion > Math.pow(2, 62) ? 0 : d.oldVersion;
              c = b < 1, e.idbdb = f.result, a && Si(e, s), Ki(e, b / 10, s, p);
            }
          }, p), f.onsuccess = j(function() {
            s = null;
            var d = e.idbdb = f.result, v = on(d.objectStoreNames);
            if (v.length > 0) try {
              var b = d.transaction(mi(v), "readonly");
              if (n.autoSchema) Di(e, d, b);
              else if (kn(e, e._dbSchema, b), !Pi(e, b) && !a) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), d.close(), i = d.version + 1, a = true, l(h());
              En(e, b);
            } catch {
            }
            Ve.push(e), d.onversionchange = j(function(m) {
              n.vcFired = true, e.on("versionchange").fire(m);
            }), d.onclose = j(function(m) {
              e.on("close").fire(m);
            }), c && Ri(e._deps, _), l();
          }, p);
        }).catch(function(l) {
          switch (l?.name) {
            case "UnknownError":
              if (n.PR1398_maxLoop > 0) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), h();
              break;
            case "VersionError":
              if (i > 0) return i = 0, h();
              break;
          }
          return K.reject(l);
        });
      };
      return K.race([r, (typeof navigator > "u" ? K.resolve() : Mi()).then(h)]).then(function() {
        return u(), n.onReadyBeingFired = [], K.resolve(pt(function() {
          return e.on.ready.fire(e.vip);
        })).then(function l() {
          if (n.onReadyBeingFired.length > 0) {
            var p = n.onReadyBeingFired.reduce(Wn, F);
            return n.onReadyBeingFired = [], K.resolve(pt(function() {
              return p(e.vip);
            })).then(l);
          }
        });
      }).finally(function() {
        n.openCanceller === r && (n.onReadyBeingFired = null, n.isBeingOpened = false);
      }).catch(function(l) {
        n.dbOpenError = l;
        try {
          s && s.abort();
        } catch {
        }
        return r === n.openCanceller && e._close(), z(l);
      }).finally(function() {
        n.openComplete = true, o();
      }).then(function() {
        if (c) {
          var l = {};
          e.tables.forEach(function(p) {
            p.schema.indexes.forEach(function(_) {
              _.name && (l["idb://".concat(e.name, "/").concat(p.name, "/").concat(_.name)] = new Q(-1 / 0, [[[]]]));
            }), l["idb://".concat(e.name, "/").concat(p.name, "/")] = l["idb://".concat(e.name, "/").concat(p.name, "/:dels")] = new Q(-1 / 0, [[[]]]);
          }), ye(en).fire(l), _t(l, true);
        }
        return e;
      });
    }
    function xt(e) {
      var n = function(u) {
        return e.next(u);
      }, t = function(u) {
        return e.throw(u);
      }, r = a(n), i = a(t);
      function a(u) {
        return function(o) {
          var s = u(o), c = s.value;
          return s.done ? c : !c || typeof c.then != "function" ? L(c) ? Promise.all(c).then(r, i) : r(c) : c.then(r, i);
        };
      }
      return a(n)();
    }
    function ji(e, n, t) {
      var r = arguments.length;
      if (r < 2) throw new D.InvalidArgument("Too few arguments");
      for (var i = new Array(r - 1); --r; ) i[r - 1] = arguments[r];
      t = i.pop();
      var a = Bt(i);
      return [e, a, t];
    }
    function pr(e, n, t, r, i) {
      return K.resolve().then(function() {
        var a = k.transless || k, u = e._createTransaction(n, t, e._dbSchema, r);
        u.explicit = true;
        var o = { trans: u, transless: a };
        if (r) u.idbtrans = r.idbtrans;
        else try {
          u.create(), u.idbtrans._explicit = true, e._state.PR1398_maxLoop = 3;
        } catch (l) {
          return l.name === zn.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), e.close({ disableAutoOpen: false }), e.open().then(function() {
            return pr(e, n, t, null, i);
          })) : z(l);
        }
        var s = Ln(i);
        s && Le();
        var c, h = K.follow(function() {
          if (c = i.call(u, u), c) if (s) {
            var l = de.bind(null, null);
            c.then(l, l);
          } else typeof c.next == "function" && typeof c.throw == "function" && (c = xt(c));
        }, o);
        return (c && typeof c.then == "function" ? K.resolve(c).then(function(l) {
          return u.active ? l : z(new D.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
        }) : h.then(function() {
          return c;
        })).then(function(l) {
          return r && u._resolve(), u._completion.then(function() {
            return l;
          });
        }).catch(function(l) {
          return u._reject(l), z(l);
        });
      });
    }
    function Tn(e, n, t) {
      for (var r = L(e) ? e.slice() : [e], i = 0; i < t; ++i) r.push(n);
      return r;
    }
    function Ni(e) {
      return C(C({}, e), { table: function(n) {
        var t = e.table(n), r = t.schema, i = {}, a = [];
        function u(d, v, b) {
          var m = tn(d), g = i[m] = i[m] || [], w = d == null ? 0 : typeof d == "string" ? 1 : d.length, y = v > 0, x = C(C({}, b), { name: y ? "".concat(m, "(virtual-from:").concat(b.name, ")") : b.name, lowLevelIndex: b, isVirtual: y, keyTail: v, keyLength: w, extractKey: ct(d), unique: !y && b.unique });
          if (g.push(x), x.isPrimaryKey || a.push(x), w > 1) {
            var S = w === 2 ? d[0] : d.slice(0, w - 1);
            u(S, v + 1, b);
          }
          return g.sort(function(E, P) {
            return E.keyTail - P.keyTail;
          }), x;
        }
        var o = u(r.primaryKey.keyPath, 0, r.primaryKey);
        i[":id"] = [o];
        for (var s = 0, c = r.indexes; s < c.length; s++) {
          var h = c[s];
          u(h.keyPath, 0, h);
        }
        function l(d) {
          var v = i[tn(d)];
          return v && v[0];
        }
        function p(d, v) {
          return { type: d.type === 1 ? 2 : d.type, lower: Tn(d.lower, d.lowerOpen ? e.MAX_KEY : e.MIN_KEY, v), lowerOpen: true, upper: Tn(d.upper, d.upperOpen ? e.MIN_KEY : e.MAX_KEY, v), upperOpen: true };
        }
        function _(d) {
          var v = d.query.index;
          return v.isVirtual ? C(C({}, d), { query: { index: v.lowLevelIndex, range: p(d.query.range, v.keyTail) } }) : d;
        }
        var f = C(C({}, t), { schema: C(C({}, r), { primaryKey: o, indexes: a, getIndexByKeyPath: l }), count: function(d) {
          return t.count(_(d));
        }, query: function(d) {
          return t.query(_(d));
        }, openCursor: function(d) {
          var v = d.query.index, b = v.keyTail, m = v.isVirtual, g = v.keyLength;
          if (!m) return t.openCursor(d);
          function w(y) {
            function x(E) {
              E != null ? y.continue(Tn(E, d.reverse ? e.MAX_KEY : e.MIN_KEY, b)) : d.unique ? y.continue(y.key.slice(0, g).concat(d.reverse ? e.MIN_KEY : e.MAX_KEY, b)) : y.continue();
            }
            var S = Object.create(y, { continue: { value: x }, continuePrimaryKey: { value: function(E, P) {
              y.continuePrimaryKey(Tn(E, e.MAX_KEY, b), P);
            } }, primaryKey: { get: function() {
              return y.primaryKey;
            } }, key: { get: function() {
              var E = y.key;
              return g === 1 ? E[0] : E.slice(0, g);
            } }, value: { get: function() {
              return y.value;
            } } });
            return S;
          }
          return t.openCursor(_(d)).then(function(y) {
            return y && w(y);
          });
        } });
        return f;
      } });
    }
    var Li = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: Ni };
    function Et(e, n, t, r) {
      return t = t || {}, r = r || "", U(e).forEach(function(i) {
        if (!X(n, i)) t[r + i] = void 0;
        else {
          var a = e[i], u = n[i];
          if (typeof a == "object" && typeof u == "object" && a && u) {
            var o = jn(a), s = jn(u);
            o !== s ? t[r + i] = n[i] : o === "Object" ? Et(a, u, t, r + i + ".") : a !== u && (t[r + i] = n[i]);
          } else a !== u && (t[r + i] = n[i]);
        }
      }), U(n).forEach(function(i) {
        X(e, i) || (t[r + i] = n[i]);
      }), t;
    }
    function Kt(e, n) {
      return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
    }
    var Vi = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
      return C(C({}, e), { table: function(n) {
        var t = e.table(n), r = t.schema.primaryKey, i = C(C({}, t), { mutate: function(a) {
          var u = k.trans, o = u.table(n).hook, s = o.deleting, c = o.creating, h = o.updating;
          switch (a.type) {
            case "add":
              if (c.fire === F) break;
              return u._promise("readwrite", function() {
                return l(a);
              }, true);
            case "put":
              if (c.fire === F && h.fire === F) break;
              return u._promise("readwrite", function() {
                return l(a);
              }, true);
            case "delete":
              if (s.fire === F) break;
              return u._promise("readwrite", function() {
                return l(a);
              }, true);
            case "deleteRange":
              if (s.fire === F) break;
              return u._promise("readwrite", function() {
                return p(a);
              }, true);
          }
          return t.mutate(a);
          function l(f) {
            var d = k.trans, v = f.keys || Kt(r, f);
            if (!v) throw new Error("Keys missing");
            return f = f.type === "add" || f.type === "put" ? C(C({}, f), { keys: v }) : C({}, f), f.type !== "delete" && (f.values = we([], f.values, true)), f.keys && (f.keys = we([], f.keys, true)), zi(t, f, v).then(function(b) {
              var m = v.map(function(g, w) {
                var y = b[w], x = { onerror: null, onsuccess: null };
                if (f.type === "delete") s.fire.call(x, g, y, d);
                else if (f.type === "add" || y === void 0) {
                  var S = c.fire.call(x, g, f.values[w], d);
                  g == null && S != null && (g = S, f.keys[w] = g, r.outbound || Z(f.values[w], r.keyPath, g));
                } else {
                  var E = Et(y, f.values[w]), P = h.fire.call(x, E, g, y, d);
                  if (P) {
                    var R = f.values[w];
                    Object.keys(P).forEach(function(A) {
                      X(R, A) ? R[A] = P[A] : Z(R, A, P[A]);
                    });
                  }
                }
                return x;
              });
              return t.mutate(f).then(function(g) {
                for (var w = g.failures, y = g.results, x = g.numFailures, S = g.lastResult, E = 0; E < v.length; ++E) {
                  var P = y ? y[E] : v[E], R = m[E];
                  P == null ? R.onerror && R.onerror(w[E]) : R.onsuccess && R.onsuccess(f.type === "put" && b[E] ? f.values[E] : P);
                }
                return { failures: w, results: y, numFailures: x, lastResult: S };
              }).catch(function(g) {
                return m.forEach(function(w) {
                  return w.onerror && w.onerror(g);
                }), Promise.reject(g);
              });
            });
          }
          function p(f) {
            return _(f.trans, f.range, 1e4);
          }
          function _(f, d, v) {
            return t.query({ trans: f, values: false, query: { index: r, range: d }, limit: v }).then(function(b) {
              var m = b.result;
              return l({ type: "delete", keys: m, trans: f }).then(function(g) {
                return g.numFailures > 0 ? Promise.reject(g.failures[0]) : m.length < v ? { failures: [], numFailures: 0, lastResult: void 0 } : _(f, C(C({}, d), { lower: m[m.length - 1], lowerOpen: true }), v);
              });
            });
          }
        } });
        return i;
      } });
    } };
    function zi(e, n, t) {
      return n.type === "add" ? Promise.resolve([]) : e.getMany({ trans: n.trans, keys: t, cache: "immutable" });
    }
    function yr(e, n, t) {
      try {
        if (!n || n.keys.length < e.length) return null;
        for (var r = [], i = 0, a = 0; i < n.keys.length && a < e.length; ++i) B(n.keys[i], e[a]) === 0 && (r.push(t ? _e(n.values[i]) : n.values[i]), ++a);
        return r.length === e.length ? r : null;
      } catch {
        return null;
      }
    }
    var Wi = { stack: "dbcore", level: -1, create: function(e) {
      return { table: function(n) {
        var t = e.table(n);
        return C(C({}, t), { getMany: function(r) {
          if (!r.cache) return t.getMany(r);
          var i = yr(r.keys, r.trans._cache, r.cache === "clone");
          return i ? K.resolve(i) : t.getMany(r).then(function(a) {
            return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? _e(a) : a }, a;
          });
        }, mutate: function(r) {
          return r.type !== "add" && (r.trans._cache = null), t.mutate(r);
        } });
      } };
    } };
    function mr(e, n) {
      return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
    }
    function gr(e, n) {
      switch (e) {
        case "query":
          return n.values && !n.unique;
        case "get":
          return false;
        case "getMany":
          return false;
        case "count":
          return false;
        case "openCursor":
          return false;
      }
    }
    var Yi = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
      var n = e.schema.name, t = new Q(e.MIN_KEY, e.MAX_KEY);
      return C(C({}, e), { transaction: function(r, i, a) {
        if (k.subscr && i !== "readonly") throw new D.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(k.querier));
        return e.transaction(r, i, a);
      }, table: function(r) {
        var i = e.table(r), a = i.schema, u = a.primaryKey, o = a.indexes, s = u.extractKey, c = u.outbound, h = u.autoIncrement && o.filter(function(f) {
          return f.compound && f.keyPath.includes(u.keyPath);
        }), l = C(C({}, i), { mutate: function(f) {
          var d, v, b = f.trans, m = f.mutatedParts || (f.mutatedParts = {}), g = function(T) {
            var M = "idb://".concat(n, "/").concat(r, "/").concat(T);
            return m[M] || (m[M] = new Q());
          }, w = g(""), y = g(":dels"), x = f.type, S = f.type === "deleteRange" ? [f.range] : f.type === "delete" ? [f.keys] : f.values.length < 50 ? [Kt(u, f).filter(function(T) {
            return T;
          }), f.values] : [], E = S[0], P = S[1], R = f.trans._cache;
          if (L(E)) {
            w.addKeys(E);
            var A = x === "delete" || E.length === P.length ? yr(E, R) : null;
            A || y.addKeys(E), (A || P) && Ui(g, a, A, P);
          } else if (E) {
            var I = { from: (d = E.lower) !== null && d !== void 0 ? d : e.MIN_KEY, to: (v = E.upper) !== null && v !== void 0 ? v : e.MAX_KEY };
            y.add(I), w.add(I);
          } else w.add(t), y.add(t), a.indexes.forEach(function(T) {
            return g(T.name).add(t);
          });
          return i.mutate(f).then(function(T) {
            return E && (f.type === "add" || f.type === "put") && (w.addKeys(T.results), h && h.forEach(function(M) {
              for (var O = f.values.map(function(G) {
                return M.extractKey(G);
              }), V = M.keyPath.findIndex(function(G) {
                return G === u.keyPath;
              }), H = 0, ie = T.results.length; H < ie; ++H) O[H][V] = T.results[H];
              g(M.name).addKeys(O);
            })), b.mutatedParts = Dn(b.mutatedParts || {}, m), T;
          });
        } }), p = function(f) {
          var d, v, b = f.query, m = b.index, g = b.range;
          return [m, new Q((d = g.lower) !== null && d !== void 0 ? d : e.MIN_KEY, (v = g.upper) !== null && v !== void 0 ? v : e.MAX_KEY)];
        }, _ = { get: function(f) {
          return [u, new Q(f.key)];
        }, getMany: function(f) {
          return [u, new Q().addKeys(f.keys)];
        }, count: p, query: p, openCursor: p };
        return U(_).forEach(function(f) {
          l[f] = function(d) {
            var v = k.subscr, b = !!v, m = mr(k, i) && gr(f, d), g = m ? d.obsSet = {} : v;
            if (b) {
              var w = function(A) {
                var I = "idb://".concat(n, "/").concat(r, "/").concat(A);
                return g[I] || (g[I] = new Q());
              }, y = w(""), x = w(":dels"), S = _[f](d), E = S[0], P = S[1];
              if (f === "query" && E.isPrimaryKey && !d.values ? x.add(P) : w(E.name || "").add(P), !E.isPrimaryKey) if (f === "count") x.add(t);
              else {
                var R = f === "query" && c && d.values && i.query(C(C({}, d), { values: false }));
                return i[f].apply(this, arguments).then(function(A) {
                  if (f === "query") {
                    if (c && d.values) return R.then(function(O) {
                      var V = O.result;
                      return y.addKeys(V), A;
                    });
                    var I = d.values ? A.result.map(s) : A.result;
                    d.values ? y.addKeys(I) : x.addKeys(I);
                  } else if (f === "openCursor") {
                    var T = A, M = d.values;
                    return T && Object.create(T, { key: { get: function() {
                      return x.addKey(T.primaryKey), T.key;
                    } }, primaryKey: { get: function() {
                      var O = T.primaryKey;
                      return x.addKey(O), O;
                    } }, value: { get: function() {
                      return M && y.addKey(T.primaryKey), T.value;
                    } } });
                  }
                  return A;
                });
              }
            }
            return i[f].apply(this, arguments);
          };
        }), l;
      } });
    } };
    function Ui(e, n, t, r) {
      function i(a) {
        var u = e(a.name || "");
        function o(c) {
          return c != null ? a.extractKey(c) : null;
        }
        var s = function(c) {
          return a.multiEntry && L(c) ? c.forEach(function(h) {
            return u.addKey(h);
          }) : u.addKey(c);
        };
        (t || r).forEach(function(c, h) {
          var l = t && o(t[h]), p = r && o(r[h]);
          B(l, p) !== 0 && (l != null && s(l), p != null && s(p));
        });
      }
      n.indexes.forEach(i);
    }
    function br(e, n, t) {
      if (t.numFailures === 0) return n;
      if (n.type === "deleteRange") return null;
      var r = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
      if (t.numFailures === r) return null;
      var i = C({}, n);
      return L(i.keys) && (i.keys = i.keys.filter(function(a, u) {
        return !(u in t.failures);
      })), "values" in i && L(i.values) && (i.values = i.values.filter(function(a, u) {
        return !(u in t.failures);
      })), i;
    }
    function $i(e, n) {
      return n.lower === void 0 ? true : n.lowerOpen ? B(e, n.lower) > 0 : B(e, n.lower) >= 0;
    }
    function Qi(e, n) {
      return n.upper === void 0 ? true : n.upperOpen ? B(e, n.upper) < 0 : B(e, n.upper) <= 0;
    }
    function St(e, n) {
      return $i(e, n) && Qi(e, n);
    }
    function wr(e, n, t, r, i, a) {
      if (!t || t.length === 0) return e;
      var u = n.query.index, o = u.multiEntry, s = n.query.range, c = r.schema.primaryKey, h = c.extractKey, l = u.extractKey, p = (u.lowLevelIndex || u).extractKey, _ = t.reduce(function(f, d) {
        var v = f, b = [];
        if (d.type === "add" || d.type === "put") for (var m = new Q(), g = d.values.length - 1; g >= 0; --g) {
          var w = d.values[g], y = h(w);
          if (!m.hasKey(y)) {
            var x = l(w);
            (o && L(x) ? x.some(function(A) {
              return St(A, s);
            }) : St(x, s)) && (m.addKey(y), b.push(w));
          }
        }
        switch (d.type) {
          case "add": {
            var S = new Q().addKeys(n.values ? f.map(function(A) {
              return h(A);
            }) : f);
            v = f.concat(n.values ? b.filter(function(A) {
              var I = h(A);
              return S.hasKey(I) ? false : (S.addKey(I), true);
            }) : b.map(function(A) {
              return h(A);
            }).filter(function(A) {
              return S.hasKey(A) ? false : (S.addKey(A), true);
            }));
            break;
          }
          case "put": {
            var E = new Q().addKeys(d.values.map(function(A) {
              return h(A);
            }));
            v = f.filter(function(A) {
              return !E.hasKey(n.values ? h(A) : A);
            }).concat(n.values ? b : b.map(function(A) {
              return h(A);
            }));
            break;
          }
          case "delete":
            var P = new Q().addKeys(d.keys);
            v = f.filter(function(A) {
              return !P.hasKey(n.values ? h(A) : A);
            });
            break;
          case "deleteRange":
            var R = d.range;
            v = f.filter(function(A) {
              return !St(h(A), R);
            });
            break;
        }
        return v;
      }, e);
      return _ === e ? e : (_.sort(function(f, d) {
        return B(p(f), p(d)) || B(h(f), h(d));
      }), n.limit && n.limit < 1 / 0 && (_.length > n.limit ? _.length = n.limit : e.length === n.limit && _.length < n.limit && (i.dirty = true)), a ? Object.freeze(_) : _);
    }
    function _r(e, n) {
      return B(e.lower, n.lower) === 0 && B(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
    }
    function Hi(e, n, t, r) {
      if (e === void 0) return n !== void 0 ? -1 : 0;
      if (n === void 0) return 1;
      var i = B(e, n);
      if (i === 0) {
        if (t && r) return 0;
        if (t) return 1;
        if (r) return -1;
      }
      return i;
    }
    function Xi(e, n, t, r) {
      if (e === void 0) return n !== void 0 ? 1 : 0;
      if (n === void 0) return -1;
      var i = B(e, n);
      if (i === 0) {
        if (t && r) return 0;
        if (t) return -1;
        if (r) return 1;
      }
      return i;
    }
    function Gi(e, n) {
      return Hi(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && Xi(e.upper, n.upper, e.upperOpen, n.upperOpen) >= 0;
    }
    function Ji(e, n, t, r) {
      var i = Pe["idb://".concat(e, "/").concat(n)];
      if (!i) return [];
      var a = i.queries[t];
      if (!a) return [null, false, i, null];
      var u = r.query ? r.query.index.name : null, o = a[u || ""];
      if (!o) return [null, false, i, null];
      switch (t) {
        case "query":
          var s = o.find(function(l) {
            return l.req.limit === r.limit && l.req.values === r.values && _r(l.req.query.range, r.query.range);
          });
          if (s) return [s, true, i, o];
          var c = o.find(function(l) {
            var p = "limit" in l.req ? l.req.limit : 1 / 0;
            return p >= r.limit && (r.values ? l.req.values : true) && Gi(l.req.query.range, r.query.range);
          });
          return [c, false, i, o];
        case "count":
          var h = o.find(function(l) {
            return _r(l.req.query.range, r.query.range);
          });
          return [h, !!h, i, o];
      }
    }
    function Zi(e, n, t, r) {
      e.subscribers.add(t), r.addEventListener("abort", function() {
        e.subscribers.delete(t), e.subscribers.size === 0 && qi(e, n);
      });
    }
    function qi(e, n) {
      setTimeout(function() {
        e.subscribers.size === 0 && xe(n, e);
      }, 3e3);
    }
    var ea = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
      var n = e.schema.name, t = C(C({}, e), { transaction: function(r, i, a) {
        var u = e.transaction(r, i, a);
        if (i === "readwrite") {
          var o = new AbortController(), s = o.signal, c = function(h) {
            return function() {
              if (o.abort(), i === "readwrite") {
                for (var l = /* @__PURE__ */ new Set(), p = 0, _ = r; p < _.length; p++) {
                  var f = _[p], d = Pe["idb://".concat(n, "/").concat(f)];
                  if (d) {
                    var v = e.table(f), b = d.optimisticOps.filter(function(M) {
                      return M.trans === u;
                    });
                    if (u._explicit && h && u.mutatedParts) for (var m = 0, g = Object.values(d.queries.query); m < g.length; m++) for (var w = g[m], y = 0, x = w.slice(); y < x.length; y++) {
                      var S = x[y];
                      gt(S.obsSet, u.mutatedParts) && (xe(w, S), S.subscribers.forEach(function(M) {
                        return l.add(M);
                      }));
                    }
                    else if (b.length > 0) {
                      d.optimisticOps = d.optimisticOps.filter(function(M) {
                        return M.trans !== u;
                      });
                      for (var E = 0, P = Object.values(d.queries.query); E < P.length; E++) for (var w = P[E], R = 0, A = w.slice(); R < A.length; R++) {
                        var S = A[R];
                        if (S.res != null && u.mutatedParts) if (h && !S.dirty) {
                          var I = Object.isFrozen(S.res), T = wr(S.res, S.req, b, v, S, I);
                          S.dirty ? (xe(w, S), S.subscribers.forEach(function(V) {
                            return l.add(V);
                          })) : T !== S.res && (S.res = T, S.promise = K.resolve({ result: T }));
                        } else S.dirty && xe(w, S), S.subscribers.forEach(function(V) {
                          return l.add(V);
                        });
                      }
                    }
                  }
                }
                l.forEach(function(M) {
                  return M();
                });
              }
            };
          };
          u.addEventListener("abort", c(false), { signal: s }), u.addEventListener("error", c(false), { signal: s }), u.addEventListener("complete", c(true), { signal: s });
        }
        return u;
      }, table: function(r) {
        var i = e.table(r), a = i.schema.primaryKey, u = C(C({}, i), { mutate: function(o) {
          var s = k.trans;
          if (a.outbound || s.db._options.cache === "disabled" || s.explicit || s.idbtrans.mode !== "readwrite") return i.mutate(o);
          var c = Pe["idb://".concat(n, "/").concat(r)];
          if (!c) return i.mutate(o);
          var h = i.mutate(o);
          return (o.type === "add" || o.type === "put") && (o.values.length >= 50 || Kt(a, o).some(function(l) {
            return l == null;
          })) ? h.then(function(l) {
            var p = C(C({}, o), { values: o.values.map(function(f, d) {
              var v;
              if (l.failures[d]) return f;
              var b = !((v = a.keyPath) === null || v === void 0) && v.includes(".") ? _e(f) : C({}, f);
              return Z(b, a.keyPath, l.results[d]), b;
            }) }), _ = br(c, p, l);
            c.optimisticOps.push(_), queueMicrotask(function() {
              return o.mutatedParts && Pn(o.mutatedParts);
            });
          }) : (c.optimisticOps.push(o), o.mutatedParts && Pn(o.mutatedParts), h.then(function(l) {
            if (l.numFailures > 0) {
              xe(c.optimisticOps, o);
              var p = br(c, o, l);
              p && c.optimisticOps.push(p), o.mutatedParts && Pn(o.mutatedParts);
            }
          }), h.catch(function() {
            xe(c.optimisticOps, o), o.mutatedParts && Pn(o.mutatedParts);
          })), h;
        }, query: function(o) {
          var s;
          if (!mr(k, i) || !gr("query", o)) return i.query(o);
          var c = ((s = k.trans) === null || s === void 0 ? void 0 : s.db._options.cache) === "immutable", h = k, l = h.requery, p = h.signal, _ = Ji(n, r, "query", o), f = _[0], d = _[1], v = _[2], b = _[3];
          if (f && d) f.obsSet = o.obsSet;
          else {
            var m = i.query(o).then(function(g) {
              var w = g.result;
              if (f && (f.res = w), c) {
                for (var y = 0, x = w.length; y < x; ++y) Object.freeze(w[y]);
                Object.freeze(w);
              } else g.result = _e(w);
              return g;
            }).catch(function(g) {
              return b && f && xe(b, f), Promise.reject(g);
            });
            f = { obsSet: o.obsSet, promise: m, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: false }, b ? b.push(f) : (b = [f], v || (v = Pe["idb://".concat(n, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} }), v.queries.query[o.query.index.name || ""] = b);
          }
          return Zi(f, b, l, p), f.promise.then(function(g) {
            return { result: wr(g.result, o, v?.optimisticOps, i, f, c) };
          });
        } });
        return u;
      } });
      return t;
    } };
    function Cn(e, n) {
      return new Proxy(e, { get: function(t, r, i) {
        return r === "db" ? n : Reflect.get(t, r, i);
      } });
    }
    var ce = function() {
      function e(n, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var i = e.dependencies;
        this._options = t = C({ addons: e.addons, autoOpen: true, indexedDB: i.indexedDB, IDBKeyRange: i.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange };
        var a = t.addons;
        this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var u = { dbOpenError: null, isBeingOpened: false, onReadyBeingFired: null, openComplete: false, dbReadyResolve: F, dbReadyPromise: null, cancelOpen: F, openCanceller: null, autoSchema: true, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        u.dbReadyPromise = new K(function(s) {
          u.dbReadyResolve = s;
        }), u.openCanceller = new K(function(s, c) {
          u.cancelOpen = c;
        }), this._state = u, this.name = n, this.on = Ge(this, "populate", "blocked", "versionchange", "close", { ready: [Wn, F] }), this.on.ready.subscribe = Ct(this.on.ready.subscribe, function(s) {
          return function(c, h) {
            e.vip(function() {
              var l = r._state;
              if (l.openComplete) l.dbOpenError || K.resolve().then(c), h && s(c);
              else if (l.onReadyBeingFired) l.onReadyBeingFired.push(c), h && s(c);
              else {
                s(c);
                var p = r;
                h || s(function _() {
                  p.on.ready.unsubscribe(c), p.on.ready.unsubscribe(_);
                });
              }
            });
          };
        }), this.Collection = si(this), this.Table = ai(this), this.Transaction = yi(this), this.Version = Ci(this), this.WhereClause = vi(this), this.on("versionchange", function(s) {
          s.newVersion > 0 ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: false });
        }), this.on("blocked", function(s) {
          !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
        }), this._maxKey = nn(t.IDBKeyRange), this._createTransaction = function(s, c, h, l) {
          return new r.Transaction(s, c, h, r._options.chromeTransactionDurability, l);
        }, this._fireOnBlocked = function(s) {
          r.on("blocked").fire(s), Ve.filter(function(c) {
            return c.name === r.name && c !== r && !c._state.vcFired;
          }).map(function(c) {
            return c.on("versionchange").fire(s);
          });
        }, this.use(Wi), this.use(ea), this.use(Yi), this.use(Li), this.use(Vi);
        var o = new Proxy(this, { get: function(s, c, h) {
          if (c === "_vip") return true;
          if (c === "table") return function(p) {
            return Cn(r.table(p), o);
          };
          var l = Reflect.get(s, c, h);
          return l instanceof tr ? Cn(l, o) : c === "tables" ? l.map(function(p) {
            return Cn(p, o);
          }) : c === "_createTransaction" ? function() {
            var p = l.apply(this, arguments);
            return Cn(p, o);
          } : l;
        } });
        this.vip = o, a.forEach(function(s) {
          return s(r);
        });
      }
      return e.prototype.version = function(n) {
        if (isNaN(n) || n < 0.1) throw new D.Type("Given version is not a positive number");
        if (n = Math.round(n * 10) / 10, this.idbdb || this._state.isBeingOpened) throw new D.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, n);
        var t = this._versions, r = t.filter(function(i) {
          return i._cfg.version === n;
        })[0];
        return r || (r = new this.Version(n), t.push(r), t.sort(Ei), r.stores({}), this._state.autoSchema = false, r);
      }, e.prototype._whenReady = function(n) {
        var t = this;
        return this.idbdb && (this._state.openComplete || k.letThrough || this._vip) ? n() : new K(function(r, i) {
          if (t._state.openComplete) return i(new D.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) {
              i(new D.DatabaseClosed());
              return;
            }
            t.open().catch(F);
          }
          t._state.dbReadyPromise.then(r, i);
        }).then(n);
      }, e.prototype.use = function(n) {
        var t = n.stack, r = n.create, i = n.level, a = n.name;
        a && this.unuse({ stack: t, name: a });
        var u = this._middlewares[t] || (this._middlewares[t] = []);
        return u.push({ stack: t, create: r, level: i ?? 10, name: a }), u.sort(function(o, s) {
          return o.level - s.level;
        }), this;
      }, e.prototype.unuse = function(n) {
        var t = n.stack, r = n.name, i = n.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(a) {
          return i ? a.create !== i : r ? a.name !== r : false;
        })), this;
      }, e.prototype.open = function() {
        var n = this;
        return ke(fe, function() {
          return Fi(n);
        });
      }, e.prototype._close = function() {
        var n = this._state, t = Ve.indexOf(this);
        if (t >= 0 && Ve.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        n.isBeingOpened || (n.dbReadyPromise = new K(function(r) {
          n.dbReadyResolve = r;
        }), n.openCanceller = new K(function(r, i) {
          n.cancelOpen = i;
        }));
      }, e.prototype.close = function(n) {
        var t = n === void 0 ? { disableAutoOpen: true } : n, r = t.disableAutoOpen, i = this._state;
        r ? (i.isBeingOpened && i.cancelOpen(new D.DatabaseClosed()), this._close(), i.autoOpen = false, i.dbOpenError = new D.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = false, i.dbOpenError = null);
      }, e.prototype.delete = function(n) {
        var t = this;
        n === void 0 && (n = { disableAutoOpen: true });
        var r = arguments.length > 0 && typeof arguments[0] != "object", i = this._state;
        return new K(function(a, u) {
          var o = function() {
            t.close(n);
            var s = t._deps.indexedDB.deleteDatabase(t.name);
            s.onsuccess = j(function() {
              Bi(t._deps, t.name), a();
            }), s.onerror = re(u), s.onblocked = t._fireOnBlocked;
          };
          if (r) throw new D.InvalidArgument("Invalid closeOptions argument to db.delete()");
          i.isBeingOpened ? i.dbReadyPromise.then(o) : o();
        });
      }, e.prototype.backendDB = function() {
        return this.idbdb;
      }, e.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, e.prototype.hasBeenClosed = function() {
        var n = this._state.dbOpenError;
        return n && n.name === "DatabaseClosed";
      }, e.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, e.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(e.prototype, "tables", { get: function() {
        var n = this;
        return U(this._allTables).map(function(t) {
          return n._allTables[t];
        });
      }, enumerable: false, configurable: true }), e.prototype.transaction = function() {
        var n = ji.apply(this, arguments);
        return this._transaction.apply(this, n);
      }, e.prototype._transaction = function(n, t, r) {
        var i = this, a = k.trans;
        (!a || a.db !== this || n.indexOf("!") !== -1) && (a = null);
        var u = n.indexOf("?") !== -1;
        n = n.replace("!", "").replace("?", "");
        var o, s;
        try {
          if (s = t.map(function(h) {
            var l = h instanceof i.Table ? h.name : h;
            if (typeof l != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return l;
          }), n == "r" || n === nt) o = nt;
          else if (n == "rw" || n == tt) o = tt;
          else throw new D.InvalidArgument("Invalid transaction mode: " + n);
          if (a) {
            if (a.mode === nt && o === tt) if (u) a = null;
            else throw new D.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            a && s.forEach(function(h) {
              if (a && a.storeNames.indexOf(h) === -1) if (u) a = null;
              else throw new D.SubTransaction("Table " + h + " not included in parent transaction.");
            }), u && a && !a.active && (a = null);
          }
        } catch (h) {
          return a ? a._promise(null, function(l, p) {
            p(h);
          }) : z(h);
        }
        var c = pr.bind(null, this, o, s, a, r);
        return a ? a._promise(o, c, "lock") : k.trans ? ke(k.transless, function() {
          return i._whenReady(c);
        }) : this._whenReady(c);
      }, e.prototype.table = function(n) {
        if (!X(this._allTables, n)) throw new D.InvalidTable("Table ".concat(n, " does not exist"));
        return this._allTables[n];
      }, e;
    }(), na = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ta = function() {
      function e(n) {
        this._subscribe = n;
      }
      return e.prototype.subscribe = function(n, t, r) {
        return this._subscribe(!n || typeof n == "function" ? { next: n, error: t, complete: r } : n);
      }, e.prototype[na] = function() {
        return this;
      }, e;
    }(), In;
    try {
      In = { indexedDB: N.indexedDB || N.mozIndexedDB || N.webkitIndexedDB || N.msIndexedDB, IDBKeyRange: N.IDBKeyRange || N.webkitIDBKeyRange };
    } catch {
      In = { indexedDB: null, IDBKeyRange: null };
    }
    function xr(e) {
      var n = false, t, r = new ta(function(i) {
        var a = Ln(e);
        function u(b) {
          var m = je();
          try {
            a && Le();
            var g = he(e, b);
            return a && (g = g.finally(de)), g;
          } finally {
            m && Ne();
          }
        }
        var o = false, s, c = {}, h = {}, l = { get closed() {
          return o;
        }, unsubscribe: function() {
          o || (o = true, s && s.abort(), p && ye.storagemutated.unsubscribe(d));
        } };
        i.start && i.start(l);
        var p = false, _ = function() {
          return Zn(v);
        };
        function f() {
          return gt(h, c);
        }
        var d = function(b) {
          Dn(c, b), f() && _();
        }, v = function() {
          if (!(o || !In.indexedDB)) {
            c = {};
            var b = {};
            s && s.abort(), s = new AbortController();
            var m = { subscr: b, signal: s.signal, requery: _, querier: e, trans: null }, g = u(m);
            Promise.resolve(g).then(function(w) {
              n = true, t = w, !(o || m.signal.aborted) && (c = {}, h = b, !Ir(h) && !p && (ye(en, d), p = true), Zn(function() {
                return !o && i.next && i.next(w);
              }));
            }, function(w) {
              n = false, ["DatabaseClosedError", "AbortError"].includes(w?.name) || o || Zn(function() {
                o || i.error && i.error(w);
              });
            });
          }
        };
        return setTimeout(_, 0), l;
      });
      return r.hasValue = function() {
        return n;
      }, r.getValue = function() {
        return t;
      }, r;
    }
    var Te = ce;
    Ie(Te, C(C({}, cn), { delete: function(e) {
      var n = new Te(e, { addons: [] });
      return n.delete();
    }, exists: function(e) {
      return new Te(e, { addons: [] }).open().then(function(n) {
        return n.close(), true;
      }).catch("NoSuchDatabaseError", function() {
        return false;
      });
    }, getDatabaseNames: function(e) {
      try {
        return Ii(Te.dependencies).then(e);
      } catch {
        return z(new D.MissingAPI());
      }
    }, defineClass: function() {
      function e(n) {
        J(this, n);
      }
      return e;
    }, ignoreTransaction: function(e) {
      return k.trans ? ke(k.transless, e) : e();
    }, vip: pt, async: function(e) {
      return function() {
        try {
          var n = xt(e.apply(this, arguments));
          return !n || typeof n.then != "function" ? K.resolve(n) : n;
        } catch (t) {
          return z(t);
        }
      };
    }, spawn: function(e, n, t) {
      try {
        var r = xt(e.apply(t, n || []));
        return !r || typeof r.then != "function" ? K.resolve(r) : r;
      } catch (i) {
        return z(i);
      }
    }, currentTransaction: { get: function() {
      return k.trans || null;
    } }, waitFor: function(e, n) {
      var t = K.resolve(typeof e == "function" ? Te.ignoreTransaction(e) : e).timeout(n || 6e4);
      return k.trans ? k.trans.waitFor(t) : t;
    }, Promise: K, debug: { get: function() {
      return te;
    }, set: function(e) {
      Vt(e);
    } }, derive: Re, extend: J, props: Ie, override: Ct, Events: Ge, on: ye, liveQuery: xr, extendObservabilitySet: Dn, getByKeyPath: ue, setByKeyPath: Z, delByKeyPath: Pr, shallowClone: Rt, deepClone: _e, getObjectDiff: Et, cmp: B, asap: It, minKey: et, addons: [], connections: Ve, errnames: zn, dependencies: In, cache: Pe, semVer: Gt, version: Gt.split(".").map(function(e) {
      return parseInt(e);
    }).reduce(function(e, n, t) {
      return e + n / Math.pow(10, t * 2);
    }) })), Te.maxKey = nn(Te.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (ye(en, function(e) {
      if (!me) {
        var n;
        n = new CustomEvent(ut, { detail: e }), me = true, dispatchEvent(n), me = false;
      }
    }), addEventListener(ut, function(e) {
      var n = e.detail;
      me || At(n);
    }));
    function At(e) {
      var n = me;
      try {
        me = true, ye.storagemutated.fire(e), _t(e, true);
      } finally {
        me = n;
      }
    }
    var me = false, ge, kt = function() {
    };
    typeof BroadcastChannel < "u" && (kt = function() {
      ge = new BroadcastChannel(ut), ge.onmessage = function(e) {
        return e.data && At(e.data);
      };
    }, kt(), typeof ge.unref == "function" && ge.unref(), ye(en, function(e) {
      me || ge.postMessage(e);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
      if (!ce.disableBfCache && e.persisted) {
        te && console.debug("Dexie: handling persisted pagehide"), ge?.close();
        for (var n = 0, t = Ve; n < t.length; n++) {
          var r = t[n];
          r.close({ disableAutoOpen: false });
        }
      }
    }), addEventListener("pageshow", function(e) {
      !ce.disableBfCache && e.persisted && (te && console.debug("Dexie: handling persisted pageshow"), kt(), At({ all: new Q(-1 / 0, [[]]) }));
    }));
    function ra(e) {
      return new Ze({ add: e });
    }
    function ia(e) {
      return new Ze({ remove: e });
    }
    function aa(e, n) {
      return new Ze({ replacePrefix: [e, n] });
    }
    K.rejectionMapper = Nr, Vt(te);
    var ua = Object.freeze({ __proto__: null, Dexie: ce, liveQuery: xr, Entity: qt, cmp: B, PropModification: Ze, replacePrefix: aa, add: ra, remove: ia, default: ce, RangeSet: Q, mergeRanges: an, rangesOverlap: fr });
    return C(ce, ua, { default: ce }), ce;
  });
});
var Bn = pa(Kr(), 1);
var Sr = Symbol.for("Dexie");
var Mn = globalThis[Sr] || (globalThis[Sr] = Bn.default);
if (Bn.default.semVer !== Mn.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${Bn.default.semVer} and ${Mn.semVer}`);
var { liveQuery: ma, mergeRanges: ga, rangesOverlap: ba, RangeSet: wa, cmp: _a, Entity: xa, PropModification: Ea, replacePrefix: Ka, add: Sa, remove: Aa } = Mn;
var ka = Mn;

// shared/api/fetchAllLibraryContents.ts
var LibraryAPI = Spicetify.Platform.LibraryAPI || Spicetify.Platform.Registry.resolve(Symbol.for("LibraryAPI"));
async function fetchAllLibraryContents() {
  const response = await LibraryAPI.getContents({
    offset: 0,
    limit: 1e7,
    flattenTree: true
  });
  return response.items;
}

// shared/api/fetchAllPlaylistTracks.ts
var PlaylistAPI = Spicetify.Platform.PlaylistAPI || Spicetify.Platform.Registry.resolve(Symbol.for("PlaylistAPI"));
async function fetchAllPlaylistTracks(playlistUri) {
  const response = await PlaylistAPI.getContents(playlistUri, {
    offset: 0,
    limit: -1
  });
  return {
    items: response.items
  };
}

// shared/api/fetchGraphQLForAlbumTracks.ts
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

// shared/api/fetchWebAPIForTracks.ts
async function fetchWebAPIForTracks(trackURIs) {
  const dataMap = /* @__PURE__ */ new Map();
  const trackIdsToFetch = /* @__PURE__ */ new Map();
  for (const uri of trackURIs) {
    if (uri) {
      const id = Spicetify.URI.fromString(uri).id;
      if (id) {
        trackIdsToFetch.set(uri, id);
      }
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

// shared/components/confirmDialog.tsx
var require2 = webpackChunkclient_web.push([[Symbol()], {}, (re) => re]);
var chunks = Object.entries(require2.m);
var foundModules = chunks.filter(
  ([_, definition]) => typeof definition === "function" && definition.toString().includes("main-confirmDialog-container")
);
var component = foundModules.flatMap(([id]) => Object.values(require2(id)))[0];
Spicetify.ReactComponent.ConfirmDialog = component;
function ConfirmDialog({
  titleText,
  descriptionText,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  onClose,
  onOpen,
  onOutside,
  allowHTML,
  confirmLabel,
  shouldCloseOnEsc,
  shouldCloseOnOverlayClick,
  shouldFocusAfterRender,
  width
}) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  const ConfirmDialogComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const dialogRef = useRef(null);
    useEffect(() => {
      onOpen?.();
    }, [onOpen]);
    useEffect(() => {
      if (isOpen) {
        return;
      }
      const unmountAndRemove = () => {
        root.unmount();
        container.remove();
      };
      const dialogElement = dialogRef.current;
      if (dialogElement) {
        dialogElement.addEventListener("animationend", unmountAndRemove, { once: true });
        return () => {
          dialogElement.removeEventListener("animationend", unmountAndRemove);
        };
      } else {
        unmountAndRemove();
      }
    }, [isOpen]);
    const wrapAction = (action) => {
      return () => {
        action?.();
        setIsOpen(false);
      };
    };
    return /* @__PURE__ */ jsx(
      Spicetify.ReactComponent.ConfirmDialog,
      {
        allowHTML,
        cancelText,
        confirmLabel,
        confirmText,
        descriptionText,
        isOpen,
        onClose: wrapAction(onClose),
        onConfirm: wrapAction(onConfirm),
        onOutside: wrapAction(onOutside),
        ref: dialogRef,
        shouldCloseOnEsc,
        shouldCloseOnOverlayClick,
        shouldFocusAfterRender,
        titleText,
        width
      }
    );
  };
  root.render(/* @__PURE__ */ jsx(ConfirmDialogComponent, {}));
}

// shared/styles/dropdown.css
var sheet2 = new CSSStyleSheet();
sheet2.replaceSync(`.dropdown {
  position: relative;
  width: fit-content;
  min-width: 101px;
  font-size: 14px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .dropdown__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 32px;
    padding: 0 8px;
    color: rgba(var(--spice-rgb-text), 0.8);
    background: rgba(var(--spice-rgb-selected-row), 0.1);
    border: none;
    border-radius: 4px;
  }

  .dropdown__arrow {
    display: flex;
  }

  .dropdown__menu {
    max-height: 250px;
    overflow-y: scroll;
    color: rgba(var(--spice-rgb-text), 0.8);
    scrollbar-width: none;
    background: var(--spice-card);
    border: solid rgba(255, 255, 255, 0.1) 1px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .dropdown__option {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 8px;
    margin: 4px;
    cursor: pointer;
    border-radius: 4px;

    &:hover,
    .dropdown__option--selected {
      background: var(--spice-button);
    }
  }
}
`);
var dropdown_default = sheet2;

// shared/components/dropdown.tsx
document.adoptedStyleSheets.push(dropdown_default);
var Dropdown = memo(({ value, options, onChange, disabled }) => {
  const popoverId = useId();
  const popoverRef = useRef(null);
  const anchorName = `--dropdown-anchor-${popoverId.replace(/:/g, "id")}`;
  const handleSelect = (option) => {
    onChange?.(option.value);
    popoverRef.current?.hidePopover();
  };
  const selectedLabel = options.find((opt) => opt.value === value)?.label || "Select...";
  return (
    // @ts-expect-error
    /* @__PURE__ */ jsxs("div", { className: "dropdown", disabled, children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "dropdown__button",
          popoverTarget: popoverId,
          popoverTargetAction: "toggle",
          style: { anchorName },
          children: [
            /* @__PURE__ */ jsx("div", { className: "dropdown__text", children: selectedLabel }),
            /* @__PURE__ */ jsx("div", { className: "dropdown__arrow", children: /* @__PURE__ */ jsx(Icons.React.dropdown, { size: 12 }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "dropdown__menu",
          id: popoverId,
          popover: "auto",
          ref: popoverRef,
          style: {
            top: `calc(anchor(${anchorName} bottom) + 4px)`,
            left: `anchor(${anchorName} left)`,
            width: `anchor-size(${anchorName} width)`
          },
          children: options.map((option) => /* @__PURE__ */ jsx(
            "div",
            {
              className: `dropdown__option${value === option.value ? " dropdown__option--selected" : ""}`,
              onClick: () => handleSelect(option),
              onKeyDown: (e) => e.key === "Enter" && handleSelect(option),
              role: "option",
              tabIndex: 0,
              children: option.label
            },
            option.value
          ))
        }
      )
    ] })
  );
});

// shared/styles/slider.css
var sheet3 = new CSSStyleSheet();
sheet3.replaceSync(`.slider {
  --fill-color: var(--spice-button-active, #1ed760);
  --track-color: var(--spice-button-disabled, #535353);
  --thumb-color: var(--spice-text, #ffffff);
  --text-color: var(--spice-subtext, #b3b3b3);
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    .slider__thumb {
      opacity: 1;
    }

    .slider__fill {
      background-color: var(--fill-color);
    }
  }

  .slider-time {
    min-width: 40px;
    font-size: 12px;
    color: var(--text-color);
    text-align: center;
    user-select: none;
  }

  .slider-container {
    display: flex;
    flex-grow: 1;
    align-items: center;
    height: 12px;
    cursor: pointer;

    .slider__track {
      position: relative;
      width: 100%;
      height: 4px;
      background-color: var(--track-color);
      border-radius: 2px;

      .slider__fill {
        position: absolute;
        height: 100%;
        background-color: var(--fill-color);
        border-radius: 2px;
      }

      .slider__thumb {
        position: absolute;
        top: 50%;
        width: 12px;
        height: 12px;
        background-color: var(--thumb-color);
        border-radius: 50%;
        opacity: 0;
        transform: translate(-50%, -50%);
        transition: opacity 0.2s ease;
      }
    }
  }
}
`);
var slider_default = sheet3;

// shared/components/slider.tsx
document.adoptedStyleSheets.push(slider_default);
var Slider = memo(
  ({ value, min = 0, max = 100, step = 1, defaultValue, onChange, onRelease, disabled }) => {
    const sliderRef = useRef(null);
    const isDragging = useRef(false);
    const controlledValue = value !== void 0 ? value : defaultValue;
    const progress = max > min && controlledValue !== void 0 ? (controlledValue - min) / (max - min) * 100 : 0;
    const handleInteraction = useCallback(
      (e) => {
        if (!sliderRef.current || disabled) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const clientX = e.clientX;
        const newX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        let newValue = newX / rect.width * (max - min) + min;
        newValue = Math.round(newValue / step) * step;
        newValue = Math.max(min, Math.min(newValue, max));
        onChange(newValue);
      },
      [min, max, step, onChange, disabled]
    );
    const handlePointerDown = useCallback(
      (e) => {
        if (disabled || !sliderRef.current) return;
        isDragging.current = true;
        sliderRef.current.setPointerCapture(e.pointerId);
        handleInteraction(e.nativeEvent);
      },
      [handleInteraction, disabled]
    );
    const handlePointerMove = useCallback(
      (e) => {
        if (!isDragging.current) return;
        handleInteraction(e.nativeEvent);
      },
      [handleInteraction]
    );
    const handlePointerRelease = useCallback(
      (e) => {
        if (!isDragging.current || !sliderRef.current) return;
        isDragging.current = false;
        sliderRef.current.releasePointerCapture(e.pointerId);
        onRelease?.();
      },
      [onRelease]
    );
    return (
      // @ts-expect-error
      /* @__PURE__ */ jsx("div", { className: "slider", disabled, children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "slider-container",
          onPointerCancel: handlePointerRelease,
          onPointerDown: handlePointerDown,
          onPointerMove: handlePointerMove,
          onPointerUp: handlePointerRelease,
          ref: sliderRef,
          children: /* @__PURE__ */ jsxs("div", { className: "slider__track", children: [
            /* @__PURE__ */ jsx("div", { className: "slider__fill", style: { width: `${progress}%` } }),
            /* @__PURE__ */ jsx("div", { className: "slider__thumb", style: { left: `${progress}%` } })
          ] })
        }
      ) })
    );
  }
);

// shared/components/spotifyComponents.tsx
var spotifyComponents = () => {
  const require3 = globalThis.webpackChunkclient_web.push([[Symbol()], {}, (re) => re]);
  const discoveryRegex = /"data-encore-id":(?:\w+\.)+([A-Z]\w*)\b/;
  const discovered = {};
  for (const [moduleId, definition] of Object.entries(require3.m)) {
    if (typeof definition !== "function") continue;
    const moduleExports = require3(moduleId);
    if (!moduleExports || typeof moduleExports !== "object") continue;
    for (const exp of Object.values(moduleExports)) {
      const componentSource = typeof exp === "function" ? exp : exp?.render;
      if (!componentSource) continue;
      const match = componentSource.toString().match(discoveryRegex);
      if (match?.[1] && !discovered[match[1]]) {
        discovered[match[1]] = exp;
      }
    }
  }
  console.log(
    `ComponentMenu: Discovery finished. Found ${Object.keys(discovered).length} components.`
  );
  globalThis.UI = discovered;
};

// shared/hooks/usePlayer.ts
var listenerCount = 0;
var intervalId = null;
var startProgressTracking = () => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    const currentState = Spicetify.Platform.PlayerAPI._state;
    Spicetify.Platform.PlayerAPI._events.emit("progress", currentState);
  }, 100);
};
var stopProgressTracking = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};
var usePlayer = (trackUri, trackDuration) => {
  const [playerState, setPlayerState] = useState(Spicetify.Platform.PlayerAPI._state);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(trackDuration);
  const isSliderDragging = useRef(false);
  const seekPositionRef = useRef(0);
  const updatePlayerData = useCallback(
    (newPlayerState, isProgressUpdate = false) => {
      setPlayerState(newPlayerState);
      const isPlayingThisTrack = newPlayerState.item?.uri === trackUri;
      if (isPlayingThisTrack) {
        if (!isProgressUpdate && seekPositionRef.current !== 0 && newPlayerState.positionAsOfTimestamp < 500) {
          Spicetify.Platform.PlayerAPI.seekTo(seekPositionRef.current);
          seekPositionRef.current = 0;
        }
        if (!isSliderDragging.current) {
          const calculatedPosition = isProgressUpdate && !newPlayerState.isPaused ? newPlayerState.positionAsOfTimestamp + (Date.now() - newPlayerState.timestamp) : newPlayerState.positionAsOfTimestamp;
          setPosition(Math.min(calculatedPosition, newPlayerState.duration));
        }
        setDuration(newPlayerState.duration);
      } else {
        setPosition(0);
        setDuration(trackDuration);
      }
    },
    [trackUri, trackDuration]
  );
  useEffect(() => {
    if (listenerCount === 0) {
      startProgressTracking();
    }
    listenerCount++;
    const initialPlayerState = Spicetify.Platform.PlayerAPI._state;
    updatePlayerData(initialPlayerState);
    const updateListener = (event) => updatePlayerData(event.data);
    const progressListener = (event) => updatePlayerData(event.data, true);
    Spicetify.Platform.PlayerAPI._events.addListener("update", updateListener, {});
    Spicetify.Platform.PlayerAPI._events.addListener("progress", progressListener, {});
    return () => {
      listenerCount--;
      if (listenerCount === 0) {
        stopProgressTracking();
      }
      Spicetify.Platform.PlayerAPI._events.removeListener("update", updateListener, {});
      Spicetify.Platform.PlayerAPI._events.removeListener("progress", progressListener, {});
    };
  }, [updatePlayerData]);
  const togglePlay = useCallback(() => {
    const currentPlayingTrack = playerState.item?.uri;
    if (currentPlayingTrack === trackUri) {
      playerState.isPaused ? Spicetify.Platform.PlayerAPI.resume({}) : Spicetify.Platform.PlayerAPI.pause({});
    } else {
      Spicetify.Platform.PlayerAPI.play(
        {
          uri: trackUri
        },
        {}
      );
    }
  }, [playerState, trackUri]);
  const handleSliderChange = useCallback((newPosition) => {
    isSliderDragging.current = true;
    setPosition(newPosition);
    seekPositionRef.current = newPosition;
  }, []);
  const handleSliderRelease = useCallback(() => {
    if (isSliderDragging.current) {
      const isSameTrackInPlayer = playerState.item?.uri === trackUri;
      if (!isSameTrackInPlayer) {
        Spicetify.Platform.PlayerAPI.play(
          {
            uri: trackUri
          },
          {}
        );
      } else {
        Spicetify.Platform.PlayerAPI.seekTo(position);
      }
      isSliderDragging.current = false;
    }
  }, [position, trackUri, playerState]);
  const isCurrentlyPlayingThisTrack = useMemo(
    () => !playerState.isPaused && playerState.item?.uri === trackUri,
    [playerState, trackUri]
  );
  return {
    position,
    duration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease
  };
};

// shared/styles/input.css
var sheet4 = new CSSStyleSheet();
sheet4.replaceSync(`.input {
  width: 128px;
  height: 32px;
  padding-left: 10px;
  text-overflow: ellipsis;
  color: rgba(var(--spice-rgb-text), 0.8);
  background: rgba(var(--spice-rgb-selected-row), 0.1);
  border: 0;
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
`);
var input_default = sheet4;

// shared/components/input.tsx
document.adoptedStyleSheets.push(input_default);
var Input = memo(({ value, onChange, placeholder, disabled = false }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return /* @__PURE__ */ jsx(
    "input",
    {
      className: "input",
      disabled,
      onChange: handleChange,
      placeholder,
      type: "text",
      value
    }
  );
});

// shared/styles/optionRow.css
var sheet5 = new CSSStyleSheet();
sheet5.replaceSync(`.option__row {
  display: flex;
  justify-content: space-between;

  .option__content {
    display: flex;
    gap: 8px;
    align-items: center;

    .option__desc {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 15px;
      color: var(--spice-subtext);
    }
  }

  .option__control {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}
`);
var optionRow_default = sheet5;

// shared/styles/toggle.css
var sheet6 = new CSSStyleSheet();
sheet6.replaceSync(`.toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .toggle__background {
    display: flex;
    align-items: center;
    width: 42px;
    height: 24px;
    background: rgba(var(--spice-rgb-selected-row), 0.1);
    border-radius: 12px;

    &:has(.toggle__slider--enabled) {
      background: var(--spice-button);
    }

    .toggle__slider--enabled {
      margin-left: 20px;
    }
  }

  .toggle__slider {
    width: 20px;
    height: 20px;
    margin-left: 2px;
    background: var(--spice-text);
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(var(--spice-rgb-shadow), 0.3);
    transition: 0.1s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }
}
`);
var toggle_default = sheet6;

// shared/components/toggle.tsx
document.adoptedStyleSheets.push(toggle_default);
var Toggle = memo(({ value, onChange, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!value);
    }
  };
  return /* @__PURE__ */ jsx("button", { className: "toggle", disabled, onClick: handleClick, role: "switch", children: /* @__PURE__ */ jsx("span", { className: "toggle__background", children: /* @__PURE__ */ jsx(
    "span",
    {
      className: `toggle__slider${value ? " toggle__slider--enabled" : ""}${disabled ? " toggle__slider--disabled" : ""}`
    }
  ) }) });
});

// shared/components/optionType.tsx
var OptionType = memo(({ option, value, onChange, disabled }) => {
  switch (option.type) {
    case "toggle":
      return /* @__PURE__ */ jsx(Toggle, { disabled, onChange, value });
    case "input":
      return /* @__PURE__ */ jsx(
        Input,
        {
          disabled,
          onChange,
          placeholder: option.placeholder,
          value
        }
      );
    case "dropdown":
      return /* @__PURE__ */ jsx(
        Dropdown,
        {
          disabled,
          onChange,
          options: option.options || [],
          value
        }
      );
    case "slider":
      return /* @__PURE__ */ jsx(
        Slider,
        {
          disabled,
          max: option.max,
          min: option.min,
          onChange,
          step: option.step,
          value
        }
      );
    default:
      console.warn(`Unknown option type for option "${option.name || "N/A"}"`);
      return null;
  }
});

// shared/components/popupButton.tsx
var PopupButton = memo(({ name, popupModal: PopupModalContent }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "popup-button",
      onClick: () => PopupModal({
        title: name,
        content: /* @__PURE__ */ jsx(PopupModalContent, {}),
        isLarge: false
      }),
      children: /* @__PURE__ */ jsx(Icons.React.editButton, { size: 16 })
    }
  );
});

// shared/components/tippyButton.tsx
var TippyButton = memo(({ tippy }) => {
  return /* @__PURE__ */ jsx(Spicetify.ReactComponent.TooltipWrapper, { label: tippy, placement: "top", showDelay: 0, children: /* @__PURE__ */ jsx("div", { className: "info-tippy", children: /* @__PURE__ */ jsx(Icons.React.questionMark, { fill: "var(--spice-subtext)", size: 20 }) }) });
});

// shared/components/optionRow.tsx
document.adoptedStyleSheets.push(optionRow_default);
var OptionRow = memo(
  ({ name, desc, tippy, popupModal, option, value, onChange, disabled }) => /* @__PURE__ */ jsxs("div", { className: "option__row", children: [
    /* @__PURE__ */ jsxs("div", { className: "option__content", children: [
      /* @__PURE__ */ jsx("div", { className: "option__desc", children: desc }),
      tippy && /* @__PURE__ */ jsx(TippyButton, { tippy })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "option__control", children: [
      popupModal && /* @__PURE__ */ jsx(PopupButton, { name, popupModal }),
      option && /* @__PURE__ */ jsx(
        OptionType,
        {
          disabled,
          onChange: onChange || (() => {
          }),
          option,
          value
        }
      )
    ] })
  ] })
);

// extensions/findDupeTracks/src/settings.tsx
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
var SETTINGS_STORAGE_KEY = "findDupeTracks";
var SETTINGS_CHANGED_EVENT = "findDupeTracks:settingsChanged";
var DEFAULT_SETTINGS = {
  groupSettings: {
    exact: true,
    isrc: true,
    probable: true,
    likely: true,
    possible: true
  },
  confirmSettings: {
    exact: false,
    isrc: false,
    probable: true,
    likely: true,
    possible: true
  },
  defaultNormalizeWords: [...DEFAULT_NORMALIZE_WORDS],
  customNormalizeWords: []
};
var loadSettings = () => {
  const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
  if (savedSettings) {
    const parsed = JSON.parse(savedSettings);
    if (!parsed.defaultNormalizeWords) {
      parsed.defaultNormalizeWords = [...DEFAULT_NORMALIZE_WORDS];
    }
    const settings = { ...DEFAULT_SETTINGS, ...parsed };
    settings.groupSettings = { ...DEFAULT_SETTINGS.groupSettings, ...parsed.groupSettings || {} };
    settings.confirmSettings = {
      ...DEFAULT_SETTINGS.confirmSettings,
      ...parsed.confirmSettings || {}
    };
    return settings;
  }
  return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
};
var saveSettings = (settings) => {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  window.dispatchEvent(new CustomEvent(SETTINGS_CHANGED_EVENT));
};
var getSettings = () => {
  return loadSettings();
};
var SettingsMenu = () => {
  const [settings, setSettings] = useState(loadSettings());
  const [newWord, setNewWord] = useState("");
  useEffect(() => {
    saveSettings(settings);
  }, [settings]);
  const renderToggles = (title, settingsKey, labels) => /* @__PURE__ */ jsxs("section", { className: "duplicate-settings__section", children: [
    /* @__PURE__ */ jsx("h3", { className: "duplicate-settings__section-title", children: title }),
    /* @__PURE__ */ jsx("div", { className: "duplicate-settings__options", children: Object.entries(labels).map(([key, desc]) => {
      const option = {
        type: "toggle",
        name: `${key}-${settingsKey}`,
        desc,
        defaultVal: DEFAULT_SETTINGS[settingsKey][key]
      };
      return /* @__PURE__ */ jsx(
        OptionRow,
        {
          desc,
          name: `${key}-${settingsKey}`,
          onChange: (newValue) => setSettings((prev) => ({
            ...prev,
            [settingsKey]: {
              ...prev[settingsKey],
              [key]: newValue
            }
          })),
          option,
          value: settings[settingsKey][key]
        },
        key
      );
    }) })
  ] });
  const addCustomWord = () => {
    const word = newWord.trim().toLowerCase();
    if (!word) return;
    if ((settings.customNormalizeWords || []).includes(word) || (settings.defaultNormalizeWords || []).includes(word))
      return;
    setSettings((prev) => ({
      ...prev,
      customNormalizeWords: [...prev.customNormalizeWords || [], word]
    }));
    setNewWord("");
  };
  const removeWord = (word, isDefault) => {
    setSettings(
      (prev) => isDefault ? {
        ...prev,
        defaultNormalizeWords: (prev.defaultNormalizeWords || []).filter(
          (w) => w !== word
        )
      } : {
        ...prev,
        customNormalizeWords: (prev.customNormalizeWords || []).filter(
          (w) => w !== word
        )
      }
    );
  };
  const resetSettings = () => {
    ConfirmDialog({
      titleText: "Are you sure?",
      descriptionText: "This will reset all settings to default!",
      confirmText: "Reset",
      onConfirm: () => setSettings(JSON.parse(JSON.stringify(DEFAULT_SETTINGS)))
    });
  };
  const allWords = [
    ...(settings.defaultNormalizeWords || []).map((word) => ({ word, isDefault: true })),
    ...(settings.customNormalizeWords || []).map((word) => ({ word, isDefault: false }))
  ];
  return /* @__PURE__ */ jsxs("div", { className: "duplicate-settings", children: [
    renderToggles("Duplicate Groups to Display", "groupSettings", {
      exact: "Exact Duplicates (Same URI)",
      isrc: "ISRC Duplicates (Same Recording)",
      probable: "Probable Duplicates (Same Name + Artist)",
      likely: "Likely Duplicates (Same Name)",
      possible: "Possible Duplicates (Similar Name)"
    }),
    renderToggles("Confirm Before Deleting", "confirmSettings", {
      exact: "Exact Duplicates",
      isrc: "ISRC Duplicates",
      probable: "Probable Duplicates",
      likely: "Likely Duplicates",
      possible: "Possible Duplicates"
    }),
    /* @__PURE__ */ jsxs("section", { className: "duplicate-settings__section", children: [
      /* @__PURE__ */ jsx("h3", { className: "duplicate-settings__section-title", children: "Normalization Words" }),
      /* @__PURE__ */ jsx("p", { className: "duplicate-settings__description", children: "Add or remove words to be ignored when comparing track names for similarity." }),
      /* @__PURE__ */ jsxs("div", { className: "option__row", children: [
        /* @__PURE__ */ jsx("div", { className: "option__content", children: /* @__PURE__ */ jsx("div", { className: "option__desc", children: "Add a word to normalization list" }) }),
        /* @__PURE__ */ jsxs("div", { className: "option__control", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              disabled: false,
              onChange: (value) => setNewWord(value),
              placeholder: "Enter word to normalize",
              value: newWord
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: addCustomWord,
              onKeyDown: (e) => e.key === "Enter" && addCustomWord(),
              style: { marginLeft: 8 },
              type: "button",
              children: "Add"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "duplicate-settings__words-list", children: allWords.length > 0 ? /* @__PURE__ */ jsx("div", { className: "duplicate-settings__words-ul", children: allWords.map(({ word, isDefault }) => /* @__PURE__ */ jsxs("div", { className: "duplicate-settings__word-item", children: [
        word,
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "duplicate-settings__word-remove",
            onClick: () => removeWord(word, isDefault),
            type: "button",
            children: "Remove"
          }
        )
      ] }, word)) }) : /* @__PURE__ */ jsx("p", { className: "duplicate-settings__no-words", children: "No normalization words" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "duplicate-settings__actions", children: /* @__PURE__ */ jsx("button", { className: "duplicate-settings__reset", onClick: resetSettings, type: "button", children: "Reset to Defaults" }) })
  ] });
};
var settings_default = SettingsMenu;

// extensions/findDupeTracks/src/menu.tsx
spotifyComponents();
var FindDupeTracksDB = class extends ka {
  tracks;
  constructor() {
    super("findDupeTracks");
    this.version(0.1).stores({
      tracks: "&trackUri, trackName, trackDuration, albumUri, trackPlayCount, trackIsrc, ignoreDuplicates"
    });
  }
};
var db = new FindDupeTracksDB();
async function fetchEditablePlaylists() {
  const playlists = await fetchAllLibraryContents();
  return playlists.filter(
    (item) => item.type === "playlist" && Boolean(item.canAddTo)
  );
}
async function fetchPlaylistTracksAndCache(playlistUri) {
  const response = await fetchAllPlaylistTracks(playlistUri);
  const items = response.items;
  const trackUris = items.map((track) => track.uri);
  const existingTracks = await db.tracks.bulkGet(trackUris);
  const existingTracksMap = new Map(
    existingTracks.filter((t) => Boolean(t)).map((t) => [t.trackUri, t])
  );
  const tracksToPut = items.flatMap((item) => {
    const existing = existingTracksMap.get(item.uri);
    if (!existing || existing.trackName !== item.name || existing.albumUri !== item.album.uri) {
      return [
        {
          trackUri: item.uri,
          trackName: item.name,
          albumUri: item.album.uri,
          trackDuration: existing?.trackDuration ?? null,
          trackPlayCount: existing?.trackPlayCount ?? null,
          trackIsrc: existing?.trackIsrc ?? null
        }
      ];
    }
    return [];
  });
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
  if (trackUris.length === 0) return { isrcMap };
  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map(
    cachedTracksData.filter((t) => Boolean(t)).map((t) => [t.trackUri, t])
  );
  for (const track of validTracks) {
    const cachedTrack = cachedTracksMap.get(track.uri);
    if (cachedTrack?.trackIsrc) {
      isrcMap.set(track.uri, cachedTrack.trackIsrc);
    } else {
      tracksToFetch.push(track);
    }
  }
  if (tracksToFetch.length > 0) {
    const fetchedTracksFromAPI = await fetchWebAPIForTracks(tracksToFetch.map((t) => t.uri));
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
  return { isrcMap };
}
async function fetchPlayCountsAndDurationForTracksWithCache(tracks) {
  const trackPlayCountMap = /* @__PURE__ */ new Map();
  const trackDurationMap = /* @__PURE__ */ new Map();
  const tracksToFetch = [];
  const validTracks = tracks.filter((track) => track?.uri);
  const trackUris = validTracks.map((track) => track.uri);
  if (trackUris.length === 0) return { trackPlayCountMap, trackDurationMap };
  const cachedTracksData = await db.tracks.bulkGet(trackUris);
  const cachedTracksMap = new Map(
    cachedTracksData.filter((t) => Boolean(t)).map((t) => [t.trackUri, t])
  );
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
    const fetchedDataFromAPI = await fetchGraphQLForAlbumTracks(albumUrisToFetch);
    const updatesForDb = [];
    for (const [trackUri, track] of fetchedDataFromAPI.entries()) {
      const t = track;
      const trackPlayCount = t.playcount != null ? Number.parseInt(String(t.playcount), 10) : null;
      const trackDuration = t.duration?.totalMilliseconds ?? null;
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
var normalizeForSimilarity = (name) => {
  const settings = getSettings();
  const termsToRemove = [...settings.defaultNormalizeWords, ...settings.customNormalizeWords];
  const regexRemoveTerms = new RegExp(`\\b(${termsToRemove.join("|")})\\b`, "gi");
  return name.toLowerCase().replace(/\(.*?\)|\[.*?\]/g, "").replace(regexRemoveTerms, "").replace(/-/g, " ").replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ").trim();
};
var TrackDetails = memo(function TrackDetails2({
  track,
  trackPlayCounts,
  trackIsrcs
}) {
  const trackPlayCount = trackPlayCounts.get(track.uri);
  const displayCount = trackPlayCount != null ? trackPlayCount.toLocaleString() : "N/A";
  const trackIsrc = trackIsrcs.get(track.uri) || "N/A";
  const albumName = track.album?.name || "N/A";
  const artists = track.artists?.map((a) => a.name).join(", ") || "N/A";
  return /* @__PURE__ */ jsxs("div", { className: "track-details", children: [
    /* @__PURE__ */ jsxs("div", { className: "track-details__line", children: [
      /* @__PURE__ */ jsxs("span", { className: "track-details__artists", children: [
        "Artists: ",
        artists
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "track-details__album", children: [
        "Album: ",
        albumName
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "track-details__line", children: [
      /* @__PURE__ */ jsxs("span", { className: "track-details__playcount", children: [
        "Plays: ",
        displayCount
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "track-details__isrc", children: [
        "ISRC: ",
        trackIsrc
      ] })
    ] })
  ] });
});
var TrackControls = memo(function TrackControls2({ trackUri, trackDuration }) {
  const {
    position,
    duration,
    isCurrentlyPlayingThisTrack,
    togglePlay,
    handleSliderChange,
    handleSliderRelease
  } = usePlayer(trackUri, trackDuration ?? 0);
  const formatTime = (ms) => {
    if (ms == null || Number.isNaN(ms) || ms < 0) return "N/A";
    const totalSeconds = Math.floor(ms / 1e3);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const leftText = formatTime(position);
  const rightText = formatTime(duration);
  return /* @__PURE__ */ jsxs("div", { className: "duplicate-group__playback-controls", children: [
    /* @__PURE__ */ jsx("button", { className: "duplicate-group__playback-button", onClick: togglePlay, type: "button", children: isCurrentlyPlayingThisTrack ? /* @__PURE__ */ jsx(Icons.React.pause, {}) : /* @__PURE__ */ jsx(Icons.React.play, {}) }),
    /* @__PURE__ */ jsx("span", { className: "slider-time", children: leftText }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        ...{
          max: duration || 0,
          min: 0,
          onChange: handleSliderChange,
          onRelease: handleSliderRelease,
          step: 1,
          value: position || 0
        }
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "slider-time", children: rightText })
  ] });
});
var DuplicateItem = memo(function DuplicateItem2({
  track,
  category,
  onDelete,
  isSource,
  trackPlayCounts,
  trackIsrcs,
  trackDurations
}) {
  return /* @__PURE__ */ jsxs("div", { className: `duplicate-group__duplicate-item duplicate-group__item--${category}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "duplicate-group__duplicate-info", children: [
      /* @__PURE__ */ jsxs("div", { className: "duplicate-group__duplicate-content", children: [
        /* @__PURE__ */ jsxs("span", { className: "duplicate-group__duplicate-name", children: [
          isSource ? "Source: " : "",
          track.name
        ] }),
        /* @__PURE__ */ jsx(TrackDetails, { track, trackIsrcs, trackPlayCounts })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "duplicate-group__delete-button",
          onClick: () => onDelete(category, track),
          type: "button",
          children: "Delete"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "duplicate-group__actions", children: /* @__PURE__ */ jsx(TrackControls, { trackDuration: trackDurations.get(track.uri), trackUri: track.uri }) })
  ] });
});
var DuplicateGroupComponent = memo(function DuplicateGroupComponent2({
  group,
  category,
  groupIndex,
  onDelete,
  trackPlayCounts,
  trackIsrcs,
  trackDurations
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `duplicate-group__item duplicate-group__item--${category}`,
      children: [
        /* @__PURE__ */ jsx(
          DuplicateItem,
          {
            category,
            groupIndex,
            isSource: true,
            onDelete,
            track: group.mainTrack,
            trackDurations,
            trackIsrcs,
            trackPlayCounts
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "duplicate-group__duplicates-label", children: "Duplicates:" }),
        /* @__PURE__ */ jsx("div", { className: "duplicate-group__duplicates-list", children: group.duplicates.map((dup) => /* @__PURE__ */ jsx(
          DuplicateItem,
          {
            category,
            groupIndex,
            onDelete,
            track: dup,
            trackDurations,
            trackIsrcs,
            trackPlayCounts
          },
          `${dup.uri}-${dup.uid || dup.uri}`
        )) })
      ]
    },
    `${group.mainTrack.uri}-${group.mainTrack.uid || groupIndex}`
  );
});
var DuplicateGroupList = memo(function DuplicateGroupList2({
  title,
  groups,
  category,
  onDelete,
  trackPlayCounts,
  trackIsrcs,
  trackDurations
}) {
  const settings = getSettings();
  if (!settings.groupSettings[category]) return null;
  return /* @__PURE__ */ jsxs("div", { className: "duplicate-group", children: [
    /* @__PURE__ */ jsxs("div", { className: "duplicate-group__heading", children: [
      /* @__PURE__ */ jsx("div", { className: "duplicate-group__heading-title", children: title }),
      /* @__PURE__ */ jsxs("div", { className: "duplicate-group__heading-length", children: [
        groups.length,
        " found"
      ] })
    ] }),
    groups.length > 0 ? /* @__PURE__ */ jsx("div", { className: "duplicate-group__list", children: groups.map((group, index) => /* @__PURE__ */ jsx(
      DuplicateGroupComponent,
      {
        category,
        group,
        groupIndex: index,
        onDelete,
        trackDurations,
        trackIsrcs,
        trackPlayCounts
      },
      `${group.mainTrack.uri}-${index}`
    )) }) : /* @__PURE__ */ jsx("div", { className: "duplicate-group__empty", children: "No duplicates found in this category." })
  ] });
});
var keyBasedStrategy = (keyFn, normalizer) => (tracks, trackPlayCountMap) => {
  const tracksWithKey = tracks.filter((t) => {
    const key = normalizer(keyFn(t));
    return key != null && key !== "";
  });
  if (tracksWithKey.length < 2) return [];
  const groups = Object.groupBy(tracksWithKey, (t) => normalizer(keyFn(t)));
  const duplicatesResult = [];
  for (const group of Object.values(groups)) {
    if (group && group.length > 1) {
      const sorted = group.toSorted(
        (a, b) => (trackPlayCountMap.get(b.uri) ?? 0) - (trackPlayCountMap.get(a.uri) ?? 0)
      );
      duplicatesResult.push({ mainTrack: sorted[0], duplicates: sorted.slice(1) });
    }
  }
  return duplicatesResult;
};
var sharedArtistStrategy = (tracks, trackPlayCountMap) => {
  const duplicatesResult = [];
  const tracksByName = Object.groupBy(tracks, (t) => t.name.toLowerCase().trim());
  for (const tracksWithSameName of Object.values(tracksByName)) {
    if (!tracksWithSameName || tracksWithSameName.length < 2) continue;
    const visitedInGroup = /* @__PURE__ */ new Set();
    for (const track of tracksWithSameName) {
      if (visitedInGroup.has(track.uid)) continue;
      const component2 = [];
      const queue = [track];
      visitedInGroup.add(track.uid);
      while (true) {
        const currentTrack = queue.shift();
        if (currentTrack === void 0) {
          break;
        }
        component2.push(currentTrack);
        const currentArtists = new Set(currentTrack.artists.map((a) => a.name));
        for (const potentialMatch of tracksWithSameName) {
          if (visitedInGroup.has(potentialMatch.uid)) continue;
          if (potentialMatch.artists.some((a) => currentArtists.has(a.name))) {
            visitedInGroup.add(potentialMatch.uid);
            queue.push(potentialMatch);
          }
        }
      }
      if (component2.length > 1) {
        const sorted = component2.toSorted(
          (a, b) => (trackPlayCountMap.get(b.uri) ?? 0) - (trackPlayCountMap.get(a.uri) ?? 0)
        );
        duplicatesResult.push({ mainTrack: sorted[0], duplicates: sorted.slice(1) });
      }
    }
  }
  return duplicatesResult;
};
function findGroups(tracks, trackPlayCountMap, strategy) {
  const groups = strategy(tracks, trackPlayCountMap);
  return groups.sort((a, b) => {
    const aPlayCount = trackPlayCountMap.get(a.mainTrack.uri) ?? 0;
    const bPlayCount = trackPlayCountMap.get(b.mainTrack.uri) ?? 0;
    if (bPlayCount !== aPlayCount) return bPlayCount - aPlayCount;
    return a.mainTrack.name.localeCompare(b.mainTrack.name);
  });
}
var findPotentialDuplicates = (tracks, trackPlayCountMap, trackIsrcMap) => {
  const processedUris = /* @__PURE__ */ new Set();
  const markAsProcessed = (groups) => {
    for (const group of groups) {
      processedUris.add(group.mainTrack.uri);
      for (const dup of group.duplicates) {
        processedUris.add(dup.uri);
      }
    }
  };
  const exact = findGroups(
    tracks,
    trackPlayCountMap,
    keyBasedStrategy(
      (t) => t.uri,
      (k) => k
    )
  );
  markAsProcessed(exact);
  let unprocessedTracks = tracks.filter((t) => !processedUris.has(t.uri));
  const isrc = findGroups(
    unprocessedTracks,
    trackPlayCountMap,
    keyBasedStrategy(
      (t) => trackIsrcMap.get(t.uri),
      (k) => k
    )
  );
  markAsProcessed(isrc);
  unprocessedTracks = tracks.filter((t) => !processedUris.has(t.uri));
  const probable = findGroups(unprocessedTracks, trackPlayCountMap, sharedArtistStrategy);
  markAsProcessed(probable);
  unprocessedTracks = tracks.filter((t) => !processedUris.has(t.uri));
  const likely = findGroups(
    unprocessedTracks,
    trackPlayCountMap,
    keyBasedStrategy(
      (t) => t.name,
      (name) => name?.toLowerCase().trim()
    )
  );
  markAsProcessed(likely);
  unprocessedTracks = tracks.filter((t) => !processedUris.has(t.uri));
  const possible = findGroups(
    unprocessedTracks,
    trackPlayCountMap,
    keyBasedStrategy(
      (t) => t.name,
      (name) => name ? normalizeForSimilarity(name) : void 0
    )
  );
  return { exact, isrc, probable, likely, possible };
};
function PlaylistDuplicateFinder({
  selectedPlaylist: initialSelectedPlaylist
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [ownedPlaylists, setOwnedPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(
    initialSelectedPlaylist || null
  );
  const [_playlistTracks, setPlaylistTracks] = useState([]);
  const [trackPlayCounts, setTrackPlayCounts] = useState(/* @__PURE__ */ new Map());
  const [trackDurations, setTrackDurations] = useState(/* @__PURE__ */ new Map());
  const [trackIsrcs, setTrackIsrcs] = useState(/* @__PURE__ */ new Map());
  const [duplicateGroups, setDuplicateGroups] = useState({
    exact: [],
    isrc: [],
    probable: [],
    likely: [],
    possible: []
  });
  useEffect(() => {
    let cancelled = false;
    const fetchInitialData = async () => {
      const playlists = await fetchEditablePlaylists();
      if (cancelled) return;
      setOwnedPlaylists(playlists);
      setSelectedPlaylist(initialSelectedPlaylist || playlists.at(0) || null);
    };
    void fetchInitialData();
    return () => {
      cancelled = true;
    };
  }, [initialSelectedPlaylist]);
  useEffect(() => {
    let cancelled = false;
    const loadAndProcessData = async () => {
      if (!selectedPlaylist) {
        setPlaylistTracks([]);
        setDuplicateGroups({ exact: [], isrc: [], probable: [], likely: [], possible: [] });
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      const { items: fetchedTracks } = await fetchPlaylistTracksAndCache(selectedPlaylist.uri);
      if (cancelled) return;
      if (fetchedTracks.length === 0) {
        setPlaylistTracks([]);
        setDuplicateGroups({ exact: [], isrc: [], probable: [], likely: [], possible: [] });
        setIsLoading(false);
        return;
      }
      const [countsAndDurationResult, isrcResult] = await Promise.all([
        fetchPlayCountsAndDurationForTracksWithCache(fetchedTracks),
        fetchISRCsForTracksWithCache(fetchedTracks)
      ]);
      if (cancelled) return;
      const newPlayCounts = countsAndDurationResult.trackPlayCountMap;
      const newDurations = countsAndDurationResult.trackDurationMap;
      const newIsrcs = isrcResult.isrcMap;
      const newDuplicateGroups = findPotentialDuplicates(fetchedTracks, newPlayCounts, newIsrcs);
      setPlaylistTracks(fetchedTracks);
      setTrackPlayCounts(newPlayCounts);
      setTrackDurations(newDurations);
      setTrackIsrcs(newIsrcs);
      setDuplicateGroups(newDuplicateGroups);
      if (!cancelled) {
        setIsLoading(false);
      }
    };
    void loadAndProcessData();
    return () => {
      cancelled = true;
    };
  }, [selectedPlaylist]);
  const handlePlaylistChange = useCallback(
    (uri) => {
      const newPlaylist = ownedPlaylists.find((p) => p.uri === uri) ?? null;
      setSelectedPlaylist(newPlaylist);
    },
    [ownedPlaylists]
  );
  const removeTrackFromPlaylist = useCallback(
    async (trackToRemove) => {
      if (!selectedPlaylist) return;
      await Spicetify.Platform.PlaylistAPI.remove(selectedPlaylist.uri, [
        { uid: trackToRemove.uid }
      ]);
      setPlaylistTracks((prevTracks) => {
        const updatedTracks = prevTracks.filter(
          (track) => !(track.uri === trackToRemove.uri && track.uid === trackToRemove.uid)
        );
        const newDuplicateGroups = findPotentialDuplicates(
          updatedTracks,
          trackPlayCounts,
          trackIsrcs
        );
        setDuplicateGroups(newDuplicateGroups);
        return updatedTracks;
      });
    },
    [selectedPlaylist, trackPlayCounts, trackIsrcs]
  );
  const handleDeleteTrack = useCallback(
    async (duplicateCategory, trackToRemove) => {
      const settings = getSettings();
      if (!settings.confirmSettings[duplicateCategory]) {
        await removeTrackFromPlaylist(trackToRemove);
        return;
      }
      ConfirmDialog({
        titleText: "Remove Track",
        descriptionText: `Are you sure you want to remove "${trackToRemove.name}"? This cannot be undone.`,
        confirmText: "Remove",
        onConfirm: () => void removeTrackFromPlaylist(trackToRemove)
      });
    },
    [removeTrackFromPlaylist]
  );
  const playlistOptions = useMemo(
    () => ownedPlaylists.map((p) => ({ value: p.uri, label: p.name })),
    [ownedPlaylists]
  );
  return /* @__PURE__ */ jsxs("div", { className: "find-duplicates", children: [
    /* @__PURE__ */ jsxs("div", { className: "find-duplicates__header", children: [
      /* @__PURE__ */ jsx("span", { className: "find-duplicates__header-label", children: "Select Playlist:" }),
      /* @__PURE__ */ jsx(
        Dropdown,
        {
          disabled: ownedPlaylists.length === 0 || isLoading,
          onChange: handlePlaylistChange,
          options: playlistOptions,
          value: selectedPlaylist?.uri || ""
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsx("div", { className: "find-duplicates__loading", children: /* @__PURE__ */ jsx(UI.ProgressDots, { size: "large" }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        DuplicateGroupList,
        {
          category: "exact",
          groups: duplicateGroups.exact,
          onDelete: handleDeleteTrack,
          title: "Exact URI Matches",
          trackDurations,
          trackIsrcs,
          trackPlayCounts
        }
      ),
      /* @__PURE__ */ jsx(
        DuplicateGroupList,
        {
          category: "isrc",
          groups: duplicateGroups.isrc,
          onDelete: handleDeleteTrack,
          title: "Same ISRC",
          trackDurations,
          trackIsrcs,
          trackPlayCounts
        }
      ),
      /* @__PURE__ */ jsx(
        DuplicateGroupList,
        {
          category: "probable",
          groups: duplicateGroups.probable,
          onDelete: handleDeleteTrack,
          title: "Same Title + Shared Artist",
          trackDurations,
          trackIsrcs,
          trackPlayCounts
        }
      ),
      /* @__PURE__ */ jsx(
        DuplicateGroupList,
        {
          category: "likely",
          groups: duplicateGroups.likely,
          onDelete: handleDeleteTrack,
          title: "Same Title",
          trackDurations,
          trackIsrcs,
          trackPlayCounts
        }
      ),
      /* @__PURE__ */ jsx(
        DuplicateGroupList,
        {
          category: "possible",
          groups: duplicateGroups.possible,
          onDelete: handleDeleteTrack,
          title: "Similar Title",
          trackDurations,
          trackIsrcs,
          trackPlayCounts
        }
      )
    ] })
  ] });
}

// extensions/findDupeTracks/src/styles.css
var sheet7 = new CSSStyleSheet();
sheet7.replaceSync(`.find-duplicates {
  --fdp-radius-lg: 14px;
  --fdp-radius: 10px;
  --fdp-radius-sm: 8px;
  --fdp-gap: 14px;
  --fdp-border: rgba(var(--spice-rgb-selected-row), 0.14);
  --fdp-border-strong: rgba(var(--spice-rgb-selected-row), 0.22);
  --fdp-surface: var(--spice-player);
  --fdp-surface-2: var(--spice-player);
  --fdp-overlay: rgba(255, 255, 255, 0.02);
  --fdp-shadow: 0 4px 12px rgba(0, 0, 0, 0.28);
  --fdp-shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.2);
  --fdp-text: var(--spice-text);
  --fdp-subtext: var(--spice-subtext);
  --fdp-accent: var(--spice-primary, #1db954);

  --fdp-exact: 255 90 90; /* #ff5a5a */
  --fdp-isrc: 255 144 80; /* #ff9050 */
  --fdp-likely: 234 234 102; /* #eaea66 */
  --fdp-possible: 128 239 128; /* #80ef80 */

  display: flex;
  flex-direction: column;
  gap: var(--fdp-gap);
  width: 100%;
  min-height: 500px;
  animation: fdp-fade-in 240ms ease-out both;

  .find-duplicates__header {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 14px;
    background: var(--fdp-surface);
    border: 1px solid var(--fdp-border);
    border-radius: var(--fdp-radius);
    box-shadow: none;

    .find-duplicates__header-label {
      font-weight: 700;
      color: var(--fdp-text);
      letter-spacing: 0.2px;
    }
  }

  .find-duplicates__details {
    font-size: 1.1rem;
    color: var(--fdp-subtext);
  }

  .find-duplicates__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}

.duplicate-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: var(--fdp-surface);
  border: 1px solid var(--fdp-border);
  border-radius: var(--fdp-radius-lg);
  box-shadow: none;
  transition:
    border-color 200ms ease,
    background-color 200ms ease;

  &:hover {
    background-color: var(--fdp-surface);
    border-color: var(--fdp-border-strong);
  }

  .duplicate-group__heading {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--fdp-text);

    .duplicate-group__heading-length {
      align-content: center;
      padding: 2px 10px;
      font-size: 12px;
      font-weight: 600;
      color: var(--fdp-text);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--fdp-border);
      border-radius: 999px;
      box-shadow: none;
    }
  }

  .duplicate-group__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .duplicate-group__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 14px;
    background: transparent;
    border: 1px solid var(--fdp-border);
    border-left: 4px solid;
    border-radius: var(--fdp-radius);
    transition:
      background-color 160ms ease,
      border-color 160ms ease;

    &:hover {
      background-color: rgba(var(--spice-rgb-selected-row), 0.06);
      border-color: var(--fdp-border-strong);
    }

    &.duplicate-group__item--exact {
      border-left-color: rgb(var(--fdp-exact));
      box-shadow: none;
    }

    &.duplicate-group__item--isrc {
      border-left-color: rgb(var(--fdp-isrc));
      box-shadow: none;
    }

    &.duplicate-group__item--likely {
      border-left-color: rgb(var(--fdp-likely));
      box-shadow: none;
    }

    &.duplicate-group__item--possible {
      border-left-color: rgb(var(--fdp-possible));
      box-shadow: none;
    }
  }

  .duplicate-group__playback-controls {
    display: flex;
    flex-grow: 1;
    gap: 10px;
    align-items: center;
    width: 100%;
  }

  .duplicate-group__playback-button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    color: white;
    cursor: pointer;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 50%;
    transition:
      background-color 140ms ease,
      border-color 140ms ease;

    &:hover {
      background-color: rgba(var(--spice-rgb-selected-row), 0.08);
      border-color: var(--fdp-border);
    }

    &:active {
      background-color: rgba(var(--spice-rgb-selected-row), 0.12);
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .slider-time {
    min-width: 38px;
    font-size: 13px;
    color: var(--fdp-subtext);
    text-align: center;
  }

  .duplicate-group__duplicates-label {
    padding-left: 15px;
    font-size: 14px;
    font-weight: 700;
    color: var(--fdp-subtext);
  }

  .duplicate-group__duplicates-list {
    padding-left: 15px;
  }

  .duplicate-group__duplicate-name {
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    color: var(--fdp-text);
    letter-spacing: 0.2px;
    white-space: nowrap;
  }

  .duplicate-group__duplicate-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1rem;
    border-bottom: 1px solid var(--fdp-border);

    &:last-child {
      border-bottom: none;
    }
  }

  .duplicate-group__actions {
    padding-bottom: 8px;
  }

  .duplicate-group__duplicate-info {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
  }

  .duplicate-group__duplicate-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }

  .duplicate-group__delete-button {
    padding: 8px 14px;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    cursor: pointer;
    background-color: #e91429; /* Spotify danger */
    border: 1px solid rgba(233, 20, 41, 0.4);
    border-radius: 20px;
    transition:
      filter 140ms ease,
      background-color 140ms ease,
      border-color 140ms ease;

    &:hover {
      border-color: rgba(233, 20, 41, 0.6);
      filter: brightness(1.05);
    }

    &:active {
      background-color: #c71124;
    }
  }
}

.track-details {
  display: flex;
  flex-direction: column;
  font-size: 0.92rem;
  color: var(--fdp-subtext);

  .track-details__line {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}

.duplicate-settings {
  width: 100%;

  .duplicate-settings__section {
    margin-bottom: 24px;

    .duplicate-settings__section-title {
      padding-bottom: 8px;
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: 800;
      border-bottom: 1px solid var(--fdp-border);
    }
  }

  .duplicate-settings__description {
    margin-bottom: 12px;
    font-size: 13px;
    color: var(--fdp-subtext);
  }

  .duplicate-settings__options {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 12px;
  }

  .duplicate-settings__option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015));
    border: 1px solid var(--fdp-border);
    border-radius: var(--fdp-radius-sm);
  }

  .duplicate-settings__words-list {
    max-height: 200px;
    overflow-y: auto;

    .duplicate-settings__no-words {
      padding: 12px;
      color: var(--fdp-subtext);
      text-align: center;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015));
      border: 1px solid var(--fdp-border);
      border-radius: var(--fdp-radius-sm);
    }
  }

  .duplicate-settings__words-ul {
    padding: 0;
    margin: 0;
  }

  .duplicate-settings__word-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    margin-bottom: 8px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015));
    border: 1px solid var(--fdp-border);
    border-radius: var(--fdp-radius-sm);

    .duplicate-settings__word-remove {
      padding: 6px 10px;
      font-size: 12px;
      color: white;
      cursor: pointer;
      background: linear-gradient(180deg, rgba(255, 90, 90, 0.9), rgba(255, 60, 60, 0.9));
      border: 1px solid rgba(255, 90, 90, 0.35);
      border-radius: 999px;
      transition:
        transform 140ms ease,
        box-shadow 160ms ease,
        filter 160ms ease;

      &:hover {
        box-shadow: 0 6px 16px rgba(255, 90, 90, 0.25);
        filter: brightness(1.06);
      }
    }
  }

  .duplicate-settings__actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;

    .duplicate-settings__reset {
      padding: 8px 14px;
      color: white;
      cursor: pointer;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
      border: 1px solid var(--fdp-border);
      border-radius: 999px;
      transition:
        filter 160ms ease,
        transform 140ms ease,
        border-color 160ms ease;

      &:hover {
        border-color: var(--fdp-border-strong);
        filter: brightness(1.08);
      }
    }
  }
}

.find-duplicates :is(button, [role="button"], a, input, select, textarea):focus-visible {
  outline: none;
  border-color: color-mix(in srgb, var(--fdp-accent), transparent 40%);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--fdp-accent), transparent 50%);
}

@keyframes fdp-fade-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 820px) {
  .duplicate-group {
    padding: 12px;

    .duplicate-group__empty,
    .duplicate-group__heading {
      flex-direction: column;
      gap: 6px;
      align-items: flex-start;
    }
  }
}
`);
var styles_default = sheet7;

// extensions/findDupeTracks/src/app.tsx
document.adoptedStyleSheets.push(styles_default);
var showDuplicateFinderModal = (selectedPlaylist, initialView = "main") => {
  const renderModal = (view) => {
    const isSettings = view === "settings";
    PopupModal({
      title: isSettings ? "Find Duplicates Settings" : "Find Duplicates",
      content: isSettings ? /* @__PURE__ */ jsx(settings_default, {}) : /* @__PURE__ */ jsx(PlaylistDuplicateFinder, { selectedPlaylist }),
      isLarge: true,
      buttons: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          Spicetify.ReactComponent.TooltipWrapper,
          {
            label: isSettings ? "Back to Duplicates" : "Settings",
            placement: "top",
            children: /* @__PURE__ */ jsx(
              "button",
              {
                className: `modal__button modal__button--${isSettings ? "back" : "settings"}`,
                onClick: () => renderModal(isSettings ? "main" : "settings"),
                children: isSettings ? /* @__PURE__ */ jsx(Icons.React.duplicate, { size: 18 }) : /* @__PURE__ */ jsx(Icons.React.settings, { size: 18 })
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(Spicetify.ReactComponent.TooltipWrapper, { label: "GitHub", placement: "top", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "modal__button modal__button--github",
            onClick: () => window.open("https://github.com/veryboringhwl/spicetify-extensions"),
            children: /* @__PURE__ */ jsx(Icons.React.github, { size: 18 })
          }
        ) })
      ] })
    });
  };
  renderModal(initialView);
};
var findDuplicatesMenuItem = new Spicetify.ContextMenuV2.Item({
  children: "Find Duplicates",
  leadingIcon: Icons.HTML.duplicate,
  onClick: async (context, _item, _event) => {
    const parsed = parseProps(context.props);
    const uri = parsed.uri;
    const name = parsed.name;
    const type = Spicetify.URI.from(uri)?.type;
    const PlaylistAPI2 = Spicetify.Platform.PlaylistAPI || Spicetify.Platform.Registry.resolve(Symbol.for("PlaylistAPI"));
    const selectedPlaylist = {
      uri,
      name: name || (await PlaylistAPI2.getMetadata(uri, {}))?.name || "",
      type: type || ""
    };
    showDuplicateFinderModal(selectedPlaylist);
  },
  divider: "after",
  shouldAdd: (props, _trigger, _target) => {
    const parsed = parseProps(props);
    const type = Spicetify.URI.from(parsed.uri)?.type;
    return type === Spicetify.URI.Type.PLAYLIST || type === Spicetify.URI.Type.PLAYLIST_V2;
  }
});
findDuplicatesMenuItem.register();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc2hhcmVkL2FwaS9wYXJzZVByb3BzLnRzIiwgIi4uL3Rhc2tzL3NoaW1zL2pzeC1ydW50aW1lLXNoaW0udHMiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4IiwgIi4uL3Rhc2tzL3NoaW1zL3JlYWN0LXNoaW0udHMiLCAiLi4vdGFza3Mvc2hpbXMvcmVhY3QtZG9tLXNoaW0udHMiLCAiLi4vc2hhcmVkL3N0eWxlcy9wb3B1cE1vZGFsLmNzcyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9wb3B1cE1vZGFsLnRzeCIsICJvYXptaS1sb2FkZXItaHR0cDpodHRwczovL2VzbS5zaC9kZXhpZUA0LjAuMTEvZGVub25leHQvZGV4aWUubWpzIiwgIi4uL3NoYXJlZC9hcGkvZmV0Y2hBbGxMaWJyYXJ5Q29udGVudHMudHMiLCAiLi4vc2hhcmVkL2FwaS9mZXRjaEFsbFBsYXlsaXN0VHJhY2tzLnRzIiwgIi4uL3NoYXJlZC9hcGkvZmV0Y2hHcmFwaFFMRm9yQWxidW1UcmFja3MudHMiLCAiLi4vc2hhcmVkL2FwaS9mZXRjaFdlYkFQSUZvclRyYWNrcy50cyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtRGlhbG9nLnRzeCIsICIuLi9zaGFyZWQvc3R5bGVzL2Ryb3Bkb3duLmNzcyIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9kcm9wZG93bi50c3giLCAiLi4vc2hhcmVkL3N0eWxlcy9zbGlkZXIuY3NzIiwgIi4uL3NoYXJlZC9jb21wb25lbnRzL3NsaWRlci50c3giLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvc3BvdGlmeUNvbXBvbmVudHMudHN4IiwgIi4uL3NoYXJlZC9ob29rcy91c2VQbGF5ZXIudHMiLCAiLi4vc2hhcmVkL3N0eWxlcy9pbnB1dC5jc3MiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQudHN4IiwgIi4uL3NoYXJlZC9zdHlsZXMvb3B0aW9uUm93LmNzcyIsICIuLi9zaGFyZWQvc3R5bGVzL3RvZ2dsZS5jc3MiLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvdG9nZ2xlLnRzeCIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9vcHRpb25UeXBlLnRzeCIsICIuLi9zaGFyZWQvY29tcG9uZW50cy9wb3B1cEJ1dHRvbi50c3giLCAiLi4vc2hhcmVkL2NvbXBvbmVudHMvdGlwcHlCdXR0b24udHN4IiwgIi4uL3NoYXJlZC9jb21wb25lbnRzL29wdGlvblJvdy50c3giLCAiLi4vZXh0ZW5zaW9ucy9maW5kRHVwZVRyYWNrcy9zcmMvc2V0dGluZ3MudHN4IiwgIi4uL2V4dGVuc2lvbnMvZmluZER1cGVUcmFja3Mvc3JjL21lbnUudHN4IiwgIi4uL2V4dGVuc2lvbnMvZmluZER1cGVUcmFja3Mvc3JjL3N0eWxlcy5jc3MiLCAiLi4vZXh0ZW5zaW9ucy9maW5kRHVwZVRyYWNrcy9zcmMvYXBwLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsidHlwZSBNZXJnZWRPYmplY3QgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG5pbnRlcmZhY2UgUHJvcHNJbnB1dCBleHRlbmRzIE1lcmdlZE9iamVjdCB7XG4gIGl0ZW0/OiBNZXJnZWRPYmplY3Q7XG4gIHJlZmVyZW5jZT86IE1lcmdlZE9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJvcHMocHJvcHM6IFByb3BzSW5wdXQgfCBudWxsIHwgdW5kZWZpbmVkKTogTWVyZ2VkT2JqZWN0IHtcbiAgaWYgKCFwcm9wcykgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IHBhcnNlZDogTWVyZ2VkT2JqZWN0ID0ge307XG5cbiAgY29uc3QgbWVyZ2VQcm9wcyA9IChzb3VyY2U6IE1lcmdlZE9iamVjdCB8IG51bGwgfCB1bmRlZmluZWQsIHRhcmdldDogTWVyZ2VkT2JqZWN0KSA9PiB7XG4gICAgaWYgKCFzb3VyY2UgfHwgdHlwZW9mIHNvdXJjZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5oYXNPd24oc291cmNlLCBrZXkpKSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBtZXJnZVByb3BzKHByb3BzLCBwYXJzZWQpO1xuICBtZXJnZVByb3BzKHByb3BzLml0ZW0sIHBhcnNlZCk7XG4gIG1lcmdlUHJvcHMocHJvcHMucmVmZXJlbmNlLCBwYXJzZWQpO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iLCAiZXhwb3J0IGNvbnN0IHsgRnJhZ21lbnQsIGpzeCwganN4cyB9ID0gU3BpY2V0aWZ5LlJlYWN0SlNYO1xuIiwgImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uUHJvcHMge1xuICBzaXplPzogbnVtYmVyO1xuICBmaWxsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZWFjdEljb25Db21wb25lbnQgPSBGQzxJY29uUHJvcHM+ICYge1xuICBkZWZhdWx0UHJvcHM/OiBQYXJ0aWFsPEljb25Qcm9wcz47XG59O1xuXG5jb25zdCBpY29uRGF0YSA9IHtcbiAgZWRpdEJ1dHRvbjoge1xuICAgIHBhdGg6IFwiTTE3LjMxOCAxLjk3NWEzLjMyOSAzLjMyOSAwIDExNC43MDcgNC43MDdMOC40NTEgMjAuMjU2Yy0uNDkuNDktMS4wODIuODY3LTEuNzM1IDEuMTAzTDIuMzQgMjIuOTRhMSAxIDAgMDEtMS4yOC0xLjI4bDEuNTgxLTQuMzc2YTQuNzI2IDQuNzI2IDAgMDExLjEwMy0xLjczNUwxNy4zMTggMS45NzV6bTMuMjkzIDEuNDE0YTEuMzI5IDEuMzI5IDAgMDAtMS44OCAwTDUuMTU5IDE2Ljk2M2MtLjI4My4yODMtLjUuNjI0LS42MzYgMWwtLjg1NyAyLjM3MiAyLjM3MS0uODU3YTIuNzI2IDIuNzI2IDAgMDAxLjAwMS0uNjM2TDIwLjYxMSA1LjI2OGExLjMyOSAxLjMyOSAwIDAwMC0xLjg3OXpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgc2V0dGluZ3M6IHtcbiAgICBwYXRoOiBcIk03Ljk2IDUuMzNhMi42NyAyLjY3IDkwIDEwMCA1LjM0IDIuNjcgMi42NyA5MCAwMDAtNS4zNFpNNi42NyA4QTEuMzMgMS4zMyA5MCAxMTkuMzMgOCAxLjMzIDEuMzMgOTAgMDE2LjY3IDhabTQuODItNC44MWEuOTUuOTQgOTAgMDEtMS4xLS43NUwxMC4wNS41NUEuNDcuNDcgOTAgMDA5LjY4LjE3IDguMSA4LjEgOTAgMDA2LjMyLjE3LjQ3LjQ3IDkwIDAwNS45Ni41NUw1LjYxIDIuNDRhLjk1Ljk1IDkwIDAxLTEuMjUuNzFMMi41NSAyLjUxYS40Ny40NyA5MCAwMC0uNTEuMTNDMS4yOCAzLjQ3LjcxIDQuNDYuMzYgNS41M2EuNDcuNDcgOTAgMDAuMTQuNTFMMS45NyA3LjI4YS45NC45NCA5MCAwMTAgMS40M0wuNSA5Ljk1YS40Ny40NyA5MCAwMC0uMTQuNTEgNy45OCA3Ljk4IDkwIDAwMS42OCAyLjkuNDcuNDcgOTAgMDAuNTEuMTNsMS44MS0uNjVhLjk0Ljk0IDkwIDAxMS4yNS43MmwuMzQgMS44OWMuMDQuMTguMTguMzMuMzcuMzdhOC4xIDguMSA5MCAwMDMuMzYgMCAuNDcuNDcgOTAgMDAuMzctLjM3bC4zNC0xLjg5YS45NS45NSA5MCAwMTEuMjUtLjcybDEuODEuNjVjLjE4LjA2LjM4LjAxLjUxLS4xMy43Ni0uODQgMS4zNC0xLjgyIDEuNjgtMi45YS40Ny40NyA5MCAwMC0uMTQtLjVMMTQuMDMgOC43MmEuOTQuOTQgOTAgMDEwLTEuNDRMMTUuNSA2LjA0YS40Ny40NyA5MCAwMC4xNC0uNSA3Ljk4IDcuOTggOTAgMDAtMS42OC0yLjkuNDcuNDcgOTAgMDAtLjUxLS4xM2wtMS44MS42NWEuOTUuOTUgOTAgMDEtLjE1LjA0Wm0tOC44Mi43OCAxLjI1LjQ0YTIuMjggMi4yOCA5MCAwMDMtMS43M2wuMjQtMS4zYTYuODEgNi44MSA5MCAwMTEuNjggMGwuMjQgMS4zYTIuMjggMi4yOCA5MCAwMDMuMDEgMS43M2wxLjI0LS40NGMuMzQuNDQuNjMuOTMuODQgMS40NGwtMSAuODVhMi4yNyAyLjI3IDkwIDAwMCAzLjQ4bDEgLjg1YTYuNjUgNi42NSA5MCAwMS0uODQgMS40NGwtMS4yNC0uNDRBMi4yOCAyLjI4IDkwIDAwOS4wOCAxMy4zMmwtLjI0IDEuMjlhNi44IDYuOCA5MCAwMS0xLjY5IDBsLS4yMy0xLjI5QTIuMjggMi4yOCA5MCAwMDMuOTEgMTEuNTlsLTEuMjQuNDRhNi42NSA2LjY1IDkwIDAxLS44NC0xLjQ0bDEtLjg2YTIuMjcgMi4yNyA5MCAwMDAtMy40N2wtMS0uODVjLjIxLS41MS41LTEgLjg0LTEuNDRaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIGdpdGh1Yjoge1xuICAgIHBhdGg6IFwiTTEyLjIxMzUgMEMxOC45NDcgMCAyNC40MjY3IDUuNSAyNC40MDY2IDEyLjMwNDFjMCA1LjQzOTEtMy40OTgzIDEwLjA0MjgtOC4zNTEzIDExLjY3MjgtLjYwNjUuMTIyMy0uODI5LS4yNjUtLjgyOS0uNTkxIDAtLjQwNzIuMDItMS43MzE1LjAyLTMuMzgxNSAwLTEuMTYxMy0uMzg0LTEuODk0NS0uODI5LTIuMjgxNSAyLjczLS4zMDU4IDUuNTgxLTEuMzQ0NSA1LjU4MS02LjA3MDggMC0xLjM0NDUtLjQ2NS0yLjQ0NDUtMS4yNTM3LTMuMy4xMjEzLS4zMDU1LjU0NjMtMS41Njg4LS4xMjEyLTMuMjU5NSAwIDAtMS4wMzEyLS4zMjYtMy4zNTY3IDEuMjYzLS45NzA3LS4yNjQ4LTIuMDIxOS0uNDA3NS0zLjA1MzItLjQwNzVBMTEuNzQyNSAxMS43NDI1IDkwIDAwOS4xNiA2LjM1NTZjLTIuMzI1Mi0xLjU4OS0zLjM1NjUtMS4yNjMtMy4zNTY1LTEuMjYzLS42Njc1IDEuNjkwNy0uMjQyNyAyLjk1NC0uMTIxNSAzLjI1OTUtLjc2ODUuODU1NS0xLjI1MzUgMS45NTU1LTEuMjUzNSAzLjMgMCA0LjcyNjMgMi44NTA5IDUuNzg1NSA1LjU2MDcgNi4wNzA4LS4zNDM3LjMwNTUtLjY2NzUuODU1NS0uNzY4NSAxLjY1LS43MDc3LjMyNi0yLjQ2Ny44NTU1LTMuNTU4Ny0xLjAxODUgMCAwLS42NDcyLTEuMTgxNS0xLjg4MDctMS4yNjMgMCAwLTEuMTkzIDAtLjA4MS43NTM4IDAgMCAuODA5LjM2NjUgMS4zNTUgMS43OTI1IDAgMCAuNzA3NSAyLjIwMDIgNC4xMDUgMS40NjY3IDAgMS4wMTg4LjAyIDEuOTk2NS4wMiAyLjI4MTggMCAuMzI1OC0uMjIyMi43MTMtLjgyOS41OTA1QzMuNDk4MyAyMi4zNDcyIDAgMTcuNzQzMiAwIDEyLjMwNDIgMCA1LjUgNS40NTk3IDAgMTIuMjEzNSAwWlwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBjbG9zZToge1xuICAgIHBhdGg6IFwiTTMxLjA5OCAyOS43OTQgMTYuOTU1IDE1LjY1IDMxLjA5NyAxLjUxIDI5LjY4My4wOTMgMTUuNTQgMTQuMjM3IDEuNC4wOTQtLjAxNiAxLjUwOCAxNC4xMjYgMTUuNjUtLjAxNiAyOS43OTVsMS40MTQgMS40MTRMMTUuNTQgMTcuMDY1bDE0LjE0NCAxNC4xNDNcIixcbiAgICBzaXplOiAzMixcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIHBhdGg6IFwiTTEzIDE0VjlIMTF2NVptMCAySDExdjJoMlptOC44ODQgMy41QTEgMSAwIDAxMjEgMjFIM2ExIDEgMCAwMS0uODg0LTEuNDY4bDktMTdjLjM0Ni0uNjU0IDEuNDIyLS42NTQgMS43NjggMFpcIixcbiAgICBzaXplOiAyNCxcbiAgfSxcbiAgbW9yZToge1xuICAgIHBhdGg6IFwiTTMgOEExLjUgMS41IDAgMTEwIDhhMS41IDEuNSAwIDAxMyAwem02LjUgMGExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpNMTYgOGExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbiAgcXVlc3Rpb25NYXJrOiB7XG4gICAgcGF0aDogXCJNMTIgMmM1LjUyMyAwIDEwIDQuNDc4IDEwIDEwcy00LjQ3NyAxMC0xMCAxMFMyIDE3LjUyMiAyIDEyIDYuNDc3IDIgMTIgMlptMCAxLjY2N2MtNC41OTUgMC04LjMzMyAzLjczOC04LjMzMyA4LjMzM1M3LjQwNSAyMC4zMzMgMTIgMjAuMzMzIDIwLjMzMyAxNi41OTUgMjAuMzMzIDEyYzAtNC41OTUtMy43MzgtOC4zMzMtOC4zMzMtOC4zMzNaTTEyIDE1LjVhMSAxIDAgMTEwIDIgMSAxIDAgMDEwLTJabTAtOC43NWEyLjc1IDIuNzUgMCAwMTIuNzUgMi43NWMwIDEuMDEtLjI5NyAxLjU3NC0xLjA1MSAyLjM1OWwtLjE2OS4xNzFjLS42MjIuNjIyLS43OC44ODYtLjc4IDEuNDdhLjc1Ljc1IDAgMDEtMS41IDBjMC0xLjAxLjI5Ny0xLjU3NCAxLjA1MS0yLjM1OWwtLjE2OS0uMTcxYy42MjItLjYyMi43OC0uODg2Ljc4LTEuNDdhMS4yNSAxLjI1IDAgMDAtMi40OTMtLjEyOGwtLjAwNy4xMjhhLjc1Ljc1IDAgMDEtMS41IDBBMi43NSAyLjc1IDAgMDExMiA2Ljc1WlwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBkcm9wZG93bjoge1xuICAgIHBhdGg6IFwiTTIwLjQ2MTQgNi4zNDY5YTEuNTA2IDEuNTA2IDkwIDAwLTIuMTEyNS4xOTE5TDEyIDE0LjE1NjQgNS42NTEgNi41Mzg5YTEuNDk5NyAxLjQ5OTcgOTAgMTAtMi4zMDI4IDEuOTIybDcuNTAwNCA5LjAwMDRhMS40OTkyIDEuNDk5MiA5MCAwMDIuMzAyOCAwbDcuNTAwNC05LjAwMDVhMS41MDE5IDEuNTAxOSA5MCAwMC0uMTkwNC0yLjExMzlaXCIsXG4gICAgc2l6ZTogMjQsXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBwYXRoOiBcIk0xMiAyYzUuNDYxIDAgOS45NjUgNC4wMTIgOS45OTIgOC44NCAwIDMuMDUxLTIuNTA0IDUuNTU0LTUuNTU1IDUuNTU0SDE0LjQ0MWExLjY0IDEuNjQgMCAwMC0xLjY2OCAxLjY2OGMwIC40NzMuMTQ4LjgzNi40MzggMS4xMjUuMjU3LjI5LjQzNy42ODguNDM3IDEuMTI1QzEzLjY0OCAyMS4yNTQgMTIuOTI2IDIyIDEyIDIyIDYuNSAyMiAyIDE3LjUgMiAxMlM2LjUgMiAxMiAyWlwiLFxuICAgIHNpemU6IDI0LFxuICB9LFxuICBkdXBsaWNhdGU6IHtcbiAgICBwYXRoOiBcIk0xNSAzLjVjMC0uNS0uNS0xLTEtMUgxMVYxYzAtLjUtLjUtMS0xLTFIMkMxLjUgMCAxIC41IDEgMVYxMS41YzAgLjUuNSAxIDEgMUg0LjVWMTVjMCAuNS41IDEgMSAxSDE0Yy41IDAgMS0uNSAxLTFaTTIuNSAyYzAtLjI1LjI1LS41LjUtLjVIOWMuMjUgMCAuNS4yNS41LjV2OC41YzAgLjI1LS4yNS41LS41LjVIM2MtLjI1IDAtLjUtLjI1LS41LS41Wm00IDEyLjVjLS4yNSAwLS41LS4yNS0uNS0uNVYxMi41aDRjLjUgMCAxLS41IDEtMVY0aDJjLjI1IDAgLjUuMjUuNS41VjE0YzAgLjI1LS4yNS41LS41LjVaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIHRlcm1pbmFsOiB7XG4gICAgcGF0aDogXCJNMy45MjQgNS4wMmEuNzUuNzUgMCAwMTEuMDU2LS4wOTZsMyAyLjVhLjc1Ljc1IDAgMDEwIDEuMTUybC0zIDIuNWEuNzUuNzUgMCAxMS0uOTYtMS4xNTJMNi4zMjggOCA0LjAyIDYuMDc2QS43NS43NSAwIDAxMy45MjQgNS4wMnpNOC4yNSAxMC41YS43NS43NSAwIDAwMCAxLjVoM2EuNzUuNzUgMCAwMDAtMS41aC0zek0wIDMuMjVBMi4yNSAyLjI1IDAgMDEyLjI1IDFoMTEuNUEyLjI1IDIuMjUgMCAwMTE2IDMuMjV2OS41QTIuMjUgMi4yNSAwIDAxMTMuNzUgMTVIMi4yNUEyLjI1IDIuMjUgMCAwMTAgMTIuNzV2LTkuNXptMi4yNS0uNzVhLjc1Ljc1IDAgMDAtLjc1Ljc1djkuNWMwIC40MTQuMzM2Ljc1Ljc1Ljc1aDExLjVhLjc1Ljc1IDAgMDAuNzUtLjc1di05LjVhLjc1Ljc1IDAgMDAtLjc1LS43NUgyLjI1elwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBjdXN0b21BcnR3b3JrOiB7XG4gICAgcGF0aDogXCJNMCAydjEyYTIgMiA5MCAwMDIgMmgxMmEyIDIgOTAgMDAyLTJWNy4zM2wtMS4zMyAxLjMzdjUuMzNhLjY2LjY2IDkwIDAxLS42Ni42NkgyYS42Ni42NiA5MCAwMS0uNjYtLjY2VjJBLjY2LjY2IDkwIDAxMiAxLjM0aDkuNjZMMTMgMEgyQTIgMiA5MCAwMDAgMnptMi42NiAzLjMzQzQuMzIgNSA0Ljk5IDMuNjcgNS4zMiAyLjY3aC4zM2MuMzMgMSAxIDIuMzMgMi42NiAyLjZ2LjMzYy0xLjY2LjMzLTIuMzMgMS42Ni0yLjY2IDIuNjZoLS4zM2MtLjMzLTEtMS0yLjMzLTIuNjYtMi42NnptMTMtMi42NmExLjMzIDEuMzMgOTAgMDAtMS42NiAwTDcgOS4zM2EwIDAgOTAgMDAwIDBsLTEuNjYgM2EuMzMuMzMgOTAgMDAuMzMuMzNsMy0xLjY2YTAgMCA5MCAwMDAgMGw3LTdhMS4zMyAxLjMzIDkwIDAwMC0xLjMzelwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBwbGF5OiB7XG4gICAgcGF0aDogXCJNMy4zMzMzIDMuNTE2YzAtMS4xMzggMS4yMTczLTEuODYxMyAyLjIxNjctMS4zMThsOC4yNDEzIDQuNDg0YzEuMDQ0LjU2ODcgMS4wNDQgMi4wNjczIDAgMi42MzUzTDUuNTUgMTMuODAxM0M0LjU1MDcgMTQuMzQ1MyAzLjMzMzMgMTMuNjIxMyAzLjMzMzMgMTIuNDg0VjMuNTE2WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBwYXVzZToge1xuICAgIHBhdGg6IFwiTTMuODMwNyAyQTEuMTY2NyAxLjE2NjcgOTAgMDAyLjY2NCAzLjE2NjdWMTIuODMzM0MyLjY2NCAxMy40NzczIDMuMTg2NyAxNCAzLjgzMDcgMTRINi4xNjRBMS4xNjY3IDEuMTY2NyA5MCAwMDcuMzMwNyAxMi44MzMzVjMuMTY2N0ExLjE2NjcgMS4xNjY3IDkwIDAwNi4xNjQgMkgzLjgzMDdaTTkuODMwNyAyQTEuMTY2NyAxLjE2NjcgOTAgMDA4LjY2NCAzLjE2NjdWMTIuODMzM0M4LjY2NCAxMy40NzczIDkuMTg2NyAxNCA5LjgzMDcgMTRIMTIuMTY0QTEuMTY2NyAxLjE2NjcgOTAgMDAxMy4zMzA3IDEyLjgzMzNWMy4xNjY3QTEuMTY2NyAxLjE2NjcgOTAgMDAxMi4xNjQgMkg5LjgzMDdaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIHBvd2VyOiB7XG4gICAgcGF0aDogXCJNMTEuNjA4MSAyLjIwNDVjMS4zOTQuODAyOCAyLjQ4NCAyLjA0MzQgMy4xMDEgMy41MjkuNjE2OSAxLjQ4NTYuNzI2NCAzLjEzMzQuMzExMiA0LjY4NzctLjQxNTIgMS41NTQyLTEuMzMxNyAyLjkyOC0yLjYwNzIgMy45MDgxLTEuMjc1NS45ODAxLTIuODM4OSAxLjUxMTktNC40NDc4IDEuNTEyNi0xLjYwODYuMDAwOS0zLjE3MjYtLjUyOTItNC40NDkyLTEuNTA4UzEuMzIxNiAxMS45ODIzLjkwNDkgMTAuNDI4NmMtLjQxNjgtMS41NTM4LS4zMDkxLTMuMjAxNy4zMDY0LTQuNjg3OS42MTUzLTEuNDg2MyAxLjcwNC0yLjcyOCAzLjA5NzItMy41MzIzLjM0OTUtLjIwMTguNzk2My0uMDgyMS45OTguMjY3NC4yMDE4LjM0OTUuMDgyMS43OTYzLS4yNjc0Ljk5OC0xLjExNDYuNjQzNC0xLjk4NTUgMS42MzY4LTIuNDc3OSAyLjgyNTgtLjQ5MjMgMS4xODkxLS41Nzg1IDIuNTA3NC0uMjQ1MSAzLjc1MDQuMzMzNCAxLjI0MjkgMS4wNjc3IDIuMzQxMiAyLjA4OTEgMy4xMjQzIDEuMDIxMy43ODMgMi4yNzI1IDEuMjA3MSAzLjU1OTMgMS4yMDY0IDEuMjg3LS4wMDA3IDIuNTM3Ny0uNDI2IDMuNTU4Mi0xLjIxMDIgMS4wMjA0LS43ODQyIDEuNzUzNy0xLjg4MzIgMi4wODU4LTMuMTI2NC4zMzIxLTEuMjQzMy4yNDQ1LTIuNTYxNi0uMjQ5LTMuNzUtLjQ5MzctMS4xODg1LTEuMzY1Ny0yLjE4MDktMi40ODA4LTIuODIzMi0uMzQ5Ny0uMjAxNC0uNDY5OS0uNjQ4MS0uMjY4NS0uOTk3OC4yMDE0LS4zNDk2LjY0ODEtLjQ2OTkuOTk3OC0uMjY4NVpNOC42OTIyLjc0MjR2NS44NDVjMCAuNDAzNS0uMzI3MS43MzA2LS43MzA2LjczMDZzLS43MzA2LS4zMjcxLS43MzA2LS43MzA2Vi43NDI0YzAtLjQwMzUuMzI3MS0uNzMwNi43MzA2LS43MzA2cy43MzA2LjMyNzEuNzMwNi43MzA2WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICByZXN0YXJ0OiB7XG4gICAgcGF0aDogXCJNMTIuNTAwMiA4QzEyLjUwMDIgNS41MTQ3MiAxMC40ODU1IDMuNSA4LjAwMDIgMy41QzYuNjY4MDYgMy41IDUuNDcwNTcgNC4wNzg1NCA0LjY0NTkzIDVINi4yNTAyQzYuNjY0NDEgNSA3LjAwMDIgNS4zMzU3OSA3LjAwMDIgNS43NUM3LjAwMDIgNi4xNjQyMSA2LjY2NDQxIDYuNSA2LjI1MDIgNi41SDMuMjUwMkMyLjgzNTk4IDYuNSAyLjUwMDIgNi4xNjQyMSAyLjUwMDIgNS43NVYyLjc1QzIuNTAwMiAyLjMzNTc5IDIuODM1OTggMiAzLjI1MDIgMkMzLjY2NDQxIDIgNC4wMDAyIDIuMzM1NzkgNC4wMDAyIDIuNzVWMy41Mjc5M0M1LjA2MTI2IDIuNTc4MjkgNi40NjMwMiAyIDguMDAwMiAyQzExLjMxMzkgMiAxNC4wMDAyIDQuNjg2MjkgMTQuMDAwMiA4QzE0LjAwMDIgMTEuMzEzNyAxMS4zMTM5IDE0IDguMDAwMiAxNEM0Ljk3NTM4IDE0IDIuNDc0NDggMTEuNzYyNCAyLjA2MDMxIDguODUxOTJDMi4wMDE5NSA4LjQ0MTg0IDIuMjg3MDggOC4wNjIxIDIuNjk3MTcgOC4wMDM3NEMzLjEwNzI1IDcuOTQ1MzggMy40ODY5OSA4LjIzMDUyIDMuNTQ1MzUgOC42NDA2QzMuODU1OCAxMC44MjIyIDUuNzMyNzEgMTIuNSA4LjAwMDIgMTIuNUMxMC40ODU1IDEyLjUgMTIuNTAwMiAxMC40ODUzIDEyLjUwMDIgOFpcIixcbiAgICBzaXplOiAxNixcbiAgfSxcbiAgcmVsb2FkOiB7XG4gICAgcGF0aDogXCJNMy41IDhDMy41IDUuNTE0NzIgNS41MTQ3MiAzLjUgOCAzLjVDOS4zMzIxMyAzLjUgMTAuNTI5NiA0LjA3ODU0IDExLjM1NDMgNUg5Ljc1QzkuMzM1NzkgNSA5IDUuMzM1NzkgOSA1Ljc1QzkgNi4xNjQyMSA5LjMzNTc5IDYuNSA5Ljc1IDYuNUgxMi43NUMxMy4xNjQyIDYuNSAxMy41IDYuMTY0MjEgMTMuNSA1Ljc1VjIuNzVDMTMuNSAyLjMzNTc5IDEzLjE2NDIgMiAxMi43NSAyQzEyLjMzNTggMiAxMiAyLjMzNTc5IDEyIDIuNzVWMy41Mjc5M0MxMC45Mzg5IDIuNTc4MjkgOS41MzcxOCAyIDggMkM0LjY4NjI5IDIgMiA0LjY4NjI5IDIgOEMyIDExLjMxMzcgNC42ODYyOSAxNCA4IDE0QzExLjAyNDggMTQgMTMuNTI1NyAxMS43NjI0IDEzLjkzOTkgOC44NTE5MkMxMy45OTgyIDguNDQxODQgMTMuNzEzMSA4LjA2MjEgMTMuMzAzIDguMDAzNzRDMTIuODkyOSA3Ljk0NTM4IDEyLjUxMzIgOC4yMzA1MiAxMi40NTQ4IDguNjQwNkMxMi4xNDQ0IDEwLjgyMjIgMTAuMjY3NSAxMi41IDggMTIuNUM1LjUxNDcyIDEyLjUgMy41IDEwLjQ4NTMgMy41IDhaXCIsXG4gICAgc2l6ZTogMTYsXG4gIH0sXG4gIGJvb2s6IHtcbiAgICBwYXRoOiBcIk0yLjc1IDJDMS43ODM1IDIgMSAyLjc4MzUgMSAzLjc1VjEyLjI1QzEgMTMuMjE2NSAxLjc4MzUgMTQgMi43NSAxNEg2QzYuNzg4MDIgMTQgNy40OTg2MiAxMy42Njg2IDggMTMuMTM3NUM4LjUwMTM5IDEzLjY2ODYgOS4yMTE5OCAxNCAxMCAxNEgxMy4yNUMxNC4yMTY1IDE0IDE1IDEzLjIxNjUgMTUgMTIuMjVWMy43NUMxNSAyLjc4MzUgMTQuMjE2NSAyIDEzLjI1IDJIMTBDOS4yMTE5OSAyIDguNTAxMzggMi4zMzE0NCA4IDIuODYyNTNDNy40OTg2MiAyLjMzMTQ0IDYuNzg4MDEgMiA2IDJIMi43NVpNNy4yNSA0Ljc1VjExLjI1QzcuMjUgMTEuOTQwNCA2LjY5MDM2IDEyLjUgNiAxMi41SDIuNzVDMi42MTE5MyAxMi41IDIuNSAxMi4zODgxIDIuNSAxMi4yNVYzLjc1QzIuNSAzLjYxMTkzIDIuNjExOTMgMy41IDIuNzUgMy41SDZDNi42OTAzNiAzLjUgNy4yNSA0LjA1OTY0IDcuMjUgNC43NVpNOC43NSAxMS4yNVY0Ljc1QzguNzUgNC4wNTk2NCA5LjMwOTY0IDMuNSAxMCAzLjVIMTMuMjVDMTMuMzg4MSAzLjUgMTMuNSAzLjYxMTkzIDEzLjUgMy43NVYxMi4yNUMxMy41IDEyLjM4ODEgMTMuMzg4MSAxMi41IDEzLjI1IDEyLjVIMTBDOS4zMDk2NCAxMi41IDguNzUgMTEuOTQwNCA4Ljc1IDExLjI1WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBjb2RlOiB7XG4gICAgcGF0aDogXCJNMTAuMjkxMiAyLjIwODljLjQzMTUuMTkxOC42MjU5LjY5NzEuNDM0MSAxLjEyODZsLTQuNTYgMTAuMjZjLS4xOTE4LjQzMTUtLjY5NzEuNjI1OS0xLjEyODYuNDM0LS40MzE1LS4xOTE3LS42MjU4LS42OTctLjQzNDEtMS4xMjg1bDQuNTYtMTAuMjZjLjE5MTgtLjQzMTUuNjk3MS0uNjI1OCAxLjEyODYtLjQzNDFaTTQuMTI4IDQuOTE2MmMuMzUyOS4zMTM3LjM4NDcuODU0MS4wNzEgMS4yMDcxTDIuNDI0IDguMTIwMmwxLjc3NTEgMS45OTdjLjMxMzcuMzUyOS4yODE5Ljg5MzQtLjA3MSAxLjIwNy0uMzUyOS4zMTM3LS44OTMzLjI4MTktMS4yMDcxLS4wNzA5TC42NDEgOC42ODgyYy0uMjg4LS4zMjM5LS4yODgtLjgxMjEgMC0xLjEzNjFsMi4yOC0yLjU2NWMuMzEzNy0uMzUyOS44NTQxLS4zODQ3IDEuMjA3MS0uMDcxWm03Ljk4MzkgMGMuMzUyOS0uMzEzNy44OTM0LS4yODE5IDEuMjA3MS4wNzFsMi4yOCAyLjU2NWMuMjg3OC4zMjQuMjg3OC44MTIxIDAgMS4xMzYxbC0yLjI4IDIuNTY1Yy0uMzEzNy4zNTI4LS44NTQyLjM4NDYtMS4yMDcxLjA3MDktLjM1MjktLjMxMzYtLjM4NDYtLjg1NDEtLjA3MS0xLjIwN2wxLjc3NTEtMS45OTctMS43NzUxLTEuOTk3Yy0uMzEzNi0uMzUyOS0uMjgxOS0uODkzMy4wNzEtMS4yMDcxWlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxuICBwZXJzb246IHtcbiAgICBwYXRoOiBcIk04LjExIDEuMzI1YzEuMjI3NS0wIDIuMjIyNS45OTUgMi4yMjI1IDIuMjIyNVM5LjMzNzUgNS43NyA4LjExIDUuNzdjLTEuMjI3NSAwLTIuMjIyNS0uOTk1LTIuMjIyNS0yLjIyMjUgMC0xLjIyNzUuOTk1LTIuMjIyNSAyLjIyMjUtMi4yMjI1Wm0wLTEuMjdjLTEuOTI4OSAwLTMuNDkyNSAxLjU2MzYtMy40OTI1IDMuNDkyNVM2LjE4MTEgNy4wNCA4LjExIDcuMDRjMS45Mjg5IDAgMy40OTI1LTEuNTYzNiAzLjQ5MjUtMy40OTI1QzExLjYwMjUgMS42MTg2IDEwLjAzODkuMDU1IDguMTEuMDU1Wk0xMi41NTUgOS41OGMuMzUwNiAwIC42MzUuMjg0My42MzUuNjM1di42MzVjMCAxLjgyNTgtMS44MTg5IDMuODEtNS4wOCAzLjgxLTMuMjYxMiAwLTUuMDgtMS45ODQyLTUuMDgtMy44MXYtLjYzNWMwLS4zNTA3LjI4NDMtLjYzNS42MzUtLjYzNWg4Ljg5Wm0wLTEuMjdIMy42NjVjLTEuMDUyMSAwLTEuOTA1Ljg1MjktMS45MDUgMS45MDV2LjYzNWMwIDIuNTAzNyAyLjM2MTYgNS4wOCA2LjM1IDUuMDhzNi4zNS0yLjU3NjMgNi4zNS01LjA4di0uNjM1YzAtMS4wNTIxLS44NTI5LTEuOTA1LTEuOTA1LTEuOTA1WlwiLFxuICAgIHNpemU6IDE2LFxuICB9LFxufSBhcyBjb25zdDtcbmV4cG9ydCB0eXBlIEljb25OYW1lID0ga2V5b2YgdHlwZW9mIGljb25EYXRhO1xuXG5jb25zdCBjcmVhdGVSZWFjdENvbXBvbmVudCA9IChuYW1lOiBJY29uTmFtZSk6IFJlYWN0SWNvbkNvbXBvbmVudCA9PiB7XG4gIGNvbnN0IHsgcGF0aCwgc2l6ZTogZGVmYXVsdFNpemUgfSA9IGljb25EYXRhW25hbWVdO1xuICBjb25zdCBDb21wb25lbnQ6IFJlYWN0SWNvbkNvbXBvbmVudCA9ICh7IHNpemUgPSBkZWZhdWx0U2l6ZSwgZmlsbCA9IFwiY3VycmVudENvbG9yXCIgfSkgPT4gKFxuICAgIDxzdmdcbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICByb2xlPVwiaW1nXCJcbiAgICAgIHZpZXdCb3g9e2AwIDAgJHtkZWZhdWx0U2l6ZX0gJHtkZWZhdWx0U2l6ZX1gfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgPlxuICAgICAgPHBhdGggZD17cGF0aH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiBkZWZhdWx0U2l6ZSxcbiAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICB9O1xuICByZXR1cm4gQ29tcG9uZW50O1xufTtcblxuaW50ZXJmYWNlIEljb25Db2xsZWN0aW9uIHtcbiAgcmF3OiBSZWNvcmQ8SWNvbk5hbWUsIHN0cmluZz47XG4gIHJlYWN0OiBSZWNvcmQ8SWNvbk5hbWUsIFJlYWN0SWNvbkNvbXBvbmVudD47XG4gIGh0bWw6IFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPjtcbn1cblxuY29uc3QgeyByYXcsIHJlYWN0LCBodG1sIH0gPSAoT2JqZWN0LmtleXMoaWNvbkRhdGEpIGFzIEljb25OYW1lW10pLnJlZHVjZTxJY29uQ29sbGVjdGlvbj4oXG4gIChhY2MsIG5hbWUpID0+IHtcbiAgICBhY2MucmF3W25hbWVdID0gaWNvbkRhdGFbbmFtZV0ucGF0aDtcbiAgICBhY2MucmVhY3RbbmFtZV0gPSBjcmVhdGVSZWFjdENvbXBvbmVudChuYW1lKTtcbiAgICBhY2MuaHRtbFtuYW1lXSA9IGA8cGF0aCBkPVwiJHtpY29uRGF0YVtuYW1lXS5wYXRofVwiLz5gO1xuICAgIHJldHVybiBhY2M7XG4gIH0sXG4gIHtcbiAgICByYXc6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPixcbiAgICByZWFjdDoge30gYXMgUmVjb3JkPEljb25OYW1lLCBSZWFjdEljb25Db21wb25lbnQ+LFxuICAgIGh0bWw6IHt9IGFzIFJlY29yZDxJY29uTmFtZSwgc3RyaW5nPixcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBJY29ucyA9IHtcbiAgUmVhY3Q6IHJlYWN0LFxuICBIVE1MOiBodG1sLFxuICBSQVc6IHJhdyxcbn07XG4iLCAiZXhwb3J0IGNvbnN0IHtcbiAgQ2hpbGRyZW4sXG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnQsXG4gIFByb2ZpbGVyLFxuICBQdXJlQ29tcG9uZW50LFxuICBTdHJpY3RNb2RlLFxuICBTdXNwZW5zZSxcbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsXG4gIGFjdCxcbiAgY2xvbmVFbGVtZW50LFxuICBjcmVhdGVDb250ZXh0LFxuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVGYWN0b3J5LFxuICBjcmVhdGVSZWYsXG4gIGZvcndhcmRSZWYsXG4gIGlzVmFsaWRFbGVtZW50LFxuICBsYXp5LFxuICBtZW1vLFxuICBzdGFydFRyYW5zaXRpb24sXG4gIHVuc3RhYmxlX2FjdCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZURlYnVnVmFsdWUsXG4gIHVzZURlZmVycmVkVmFsdWUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlSWQsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZUluc2VydGlvbkVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWR1Y2VyLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxuICB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxcbiAgdXNlVHJhbnNpdGlvbixcbiAgdmVyc2lvbixcbn0gPSBTcGljZXRpZnkuUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IFNwaWNldGlmeS5SZWFjdDtcbiIsICJleHBvcnQgY29uc3Qge1xuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxcbiAgY3JlYXRlUG9ydGFsLFxuICBjcmVhdGVSb290LFxuICBmaW5kRE9NTm9kZSxcbiAgZmx1c2hTeW5jLFxuICBoeWRyYXRlLFxuICBoeWRyYXRlUm9vdCxcbiAgcmVuZGVyLFxuICB1bm1vdW50Q29tcG9uZW50QXROb2RlLFxuICB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxcbiAgdW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIsXG4gIHZlcnNpb24sXG59ID0gU3BpY2V0aWZ5LlJlYWN0RE9NO1xuXG5leHBvcnQgZGVmYXVsdCBTcGljZXRpZnkuUmVhY3RET007XG4iLCAiXG4gICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgIHNoZWV0LnJlcGxhY2VTeW5jKGAubW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNoYWRvdyksIDAuNSk7XG59XG5cbi5tb2RhbF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zcGljZS1yZ2ItbWFpbiksIDAuOSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2hhZG93KSwgMC41KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpIHNhdHVyYXRlKDEuNCkgYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubW9kYWxfX2NvbnRhaW5lci0tbGFyZ2Uge1xuICB3aWR0aDogY2xhbXAoNTUwcHgsIDYwdncsIDY1MHB4KTtcbiAgbWF4LWhlaWdodDogODB2aDtcbn1cblxuLm1vZGFsX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMycHggMzJweCA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjEpO1xufVxuXG4ubW9kYWxfX3RpdGxlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5tb2RhbF9faWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbF9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciAubW9kYWxfX2J1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwaWNlLWhpZ2hsaWdodCk7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubW9kYWxfX2J1dHRvbkNvbnRhaW5lciAubW9kYWxfX2J1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLm1vZGFsX19idXR0b25Db250YWluZXIgLm1vZGFsX19idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4ubW9kYWxfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGUgYm90aC1lZGdlcztcbn1cblxuLm1vZGFsX19jb250ZW50ID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJpbXBvcnQgdHlwZSB7IENvbXBvbmVudFR5cGUsIEZDLCBLZXlib2FyZEV2ZW50LCBNb3VzZUV2ZW50LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50LCBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCwgdHlwZSBSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3B1cE1vZGFsLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuL2ljb25zLnRzeFwiO1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChzdHlsZXMpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcHVwTW9kYWxQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IFJlYWN0Tm9kZSB8IENvbXBvbmVudFR5cGU8YW55PjtcbiAgaXNMYXJnZT86IGJvb2xlYW47XG4gIGJ1dHRvbnM/OiBSZWFjdE5vZGU7XG4gIGljb24/OiBSZWFjdE5vZGU7XG59XG5cbmludGVyZmFjZSBNb2RhbENvbXBvbmVudFByb3BzIGV4dGVuZHMgUG9wdXBNb2RhbFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxubGV0IG1vZGFsUm9vdDogUm9vdCB8IG51bGwgPSBudWxsO1xuY29uc3QgbW9kYWxDb250YWluZXJJZCA9IFwicG9wdXAtbW9kYWwtY29udGFpbmVyXCI7XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsQ29udGFpbmVySWQpO1xuICBpZiAobW9kYWxSb290KSB7XG4gICAgbW9kYWxSb290LnVubW91bnQoKTtcbiAgICBtb2RhbFJvb3QgPSBudWxsO1xuICB9XG4gIGlmIChjb250YWluZXIpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufTtcblxuY29uc3QgTW9kYWxDb21wb25lbnQ6IEZDPE1vZGFsQ29tcG9uZW50UHJvcHM+ID0gbWVtbyhcbiAgKHsgdGl0bGUsIGNvbnRlbnQsIGlzTGFyZ2UsIGJ1dHRvbnMsIGljb24sIG9uQ2xvc2UgfSkgPT4ge1xuICAgIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICAgICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24gYXMgYW55KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93biBhcyBhbnkpO1xuICAgICAgfTtcbiAgICB9LCBbb25DbG9zZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUJhY2tkcm9wQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckNvbnRlbnQgPSAoKTogUmVhY3ROb2RlID0+IHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjb250ZW50KSkge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IENvbnRlbnRDb21wb25lbnQgPSBjb250ZW50IGFzIENvbXBvbmVudFR5cGU7XG4gICAgICAgIHJldHVybiA8Q29udGVudENvbXBvbmVudCAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIG9uQ2xpY2s9e2hhbmRsZUJhY2tkcm9wQ2xpY2t9IHJlZj17bW9kYWxSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsX19jb250YWluZXIke2lzTGFyZ2UgPyBcIiBtb2RhbF9fY29udGFpbmVyLS1sYXJnZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtpY29uICYmIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2ljb25cIj57aWNvbn08L2Rpdj59XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtidXR0b25zfVxuICAgICAgICAgICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyIGxhYmVsPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsX19idXR0b24gbW9kYWxfX2J1dHRvbi0tY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbnMuUmVhY3QuY2xvc2Ugc2l6ZT17MTh9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fY29udGVudFwiPntyZW5kZXJDb250ZW50KCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCBQb3B1cE1vZGFsID0gKHByb3BzOiBQb3B1cE1vZGFsUHJvcHMpOiB2b2lkID0+IHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsQ29udGFpbmVySWQpKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5pZCA9IG1vZGFsQ29udGFpbmVySWQ7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBtb2RhbFJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG4gIG1vZGFsUm9vdC5yZW5kZXIoPE1vZGFsQ29tcG9uZW50IHsuLi5wcm9wc30gb25DbG9zZT17Y2xvc2VNb2RhbH0gLz4pO1xufTtcblxuUG9wdXBNb2RhbC5oaWRlID0gY2xvc2VNb2RhbDtcbiIsICIvKiBlc20uc2ggLSBkZXhpZUA0LjAuMTEgKi9cbnZhciBfX3NldEltbWVkaWF0ZSQgPSAoY2IsIC4uLmFyZ3MpID0+ICggeyAkdDogc2V0VGltZW91dChjYiwgMCwgLi4uYXJncyksIFtTeW1ib2wuZGlzcG9zZV0oKXsgY2xlYXJUaW1lb3V0KHRoaXMudCkgfSB9KTtcbnZhciBzYT1PYmplY3QuY3JlYXRlO3ZhciBFcj1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIGNhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIGxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBmYT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsaGE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgZGE9KFcsWSk9PigpPT4oWXx8VygoWT17ZXhwb3J0czp7fX0pLmV4cG9ydHMsWSksWS5leHBvcnRzKTt2YXIgdmE9KFcsWSxDLHdlKT0+e2lmKFkmJnR5cGVvZiBZPT1cIm9iamVjdFwifHx0eXBlb2YgWT09XCJmdW5jdGlvblwiKWZvcihsZXQgTiBvZiBsYShZKSkhaGEuY2FsbChXLE4pJiZOIT09QyYmRXIoVyxOLHtnZXQ6KCk9PllbTl0sZW51bWVyYWJsZTohKHdlPWNhKFksTikpfHx3ZS5lbnVtZXJhYmxlfSk7cmV0dXJuIFd9O3ZhciBwYT0oVyxZLEMpPT4oQz1XIT1udWxsP3NhKGZhKFcpKTp7fSx2YShZfHwhV3x8IVcuX19lc01vZHVsZT9FcihDLFwiZGVmYXVsdFwiLHt2YWx1ZTpXLGVudW1lcmFibGU6ITB9KTpDLFcpKTt2YXIgS3I9ZGEoKE90LER0KT0+eyhmdW5jdGlvbihXLFkpe3R5cGVvZiBPdD09XCJvYmplY3RcIiYmdHlwZW9mIER0PFwidVwiP0R0LmV4cG9ydHM9WSgpOnR5cGVvZiBkZWZpbmU9PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZD9kZWZpbmUoWSk6KFc9dHlwZW9mIGdsb2JhbFRoaXM8XCJ1XCI/Z2xvYmFsVGhpczpXfHxzZWxmLFcuRGV4aWU9WSgpKX0pKE90LGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIFc9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gVz1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxyKXt0Ll9fcHJvdG9fXz1yfXx8ZnVuY3Rpb24odCxyKXtmb3IodmFyIGkgaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixpKSYmKHRbaV09cltpXSl9LFcoZSxuKX07ZnVuY3Rpb24gWShlLG4pe2lmKHR5cGVvZiBuIT1cImZ1bmN0aW9uXCImJm4hPT1udWxsKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhuKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1coZSxuKTtmdW5jdGlvbiB0KCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfWUucHJvdG90eXBlPW49PT1udWxsP09iamVjdC5jcmVhdGUobik6KHQucHJvdG90eXBlPW4ucHJvdG90eXBlLG5ldyB0KX12YXIgQz1mdW5jdGlvbigpe3JldHVybiBDPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKG4pe2Zvcih2YXIgdCxyPTEsaT1hcmd1bWVudHMubGVuZ3RoO3I8aTtyKyspe3Q9YXJndW1lbnRzW3JdO2Zvcih2YXIgYSBpbiB0KU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGEpJiYoblthXT10W2FdKX1yZXR1cm4gbn0sQy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHdlKGUsbix0KXtpZih0fHxhcmd1bWVudHMubGVuZ3RoPT09Milmb3IodmFyIHI9MCxpPW4ubGVuZ3RoLGE7cjxpO3IrKykoYXx8IShyIGluIG4pKSYmKGF8fChhPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4sMCxyKSksYVtyXT1uW3JdKTtyZXR1cm4gZS5jb25jYXQoYXx8QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobikpfXZhciBOPXR5cGVvZiBnbG9iYWxUaGlzPFwidVwiP2dsb2JhbFRoaXM6dHlwZW9mIHNlbGY8XCJ1XCI/c2VsZjpnbG9iYWxUaGlzLFU9T2JqZWN0LmtleXMsTD1BcnJheS5pc0FycmF5O3R5cGVvZiBQcm9taXNlPFwidVwiJiYhTi5Qcm9taXNlJiYoTi5Qcm9taXNlPVByb21pc2UpO2Z1bmN0aW9uIEooZSxuKXtyZXR1cm4gdHlwZW9mIG4hPVwib2JqZWN0XCJ8fFUobikuZm9yRWFjaChmdW5jdGlvbih0KXtlW3RdPW5bdF19KSxlfXZhciBDZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsQXI9e30uaGFzT3duUHJvcGVydHk7ZnVuY3Rpb24gWChlLG4pe3JldHVybiBBci5jYWxsKGUsbil9ZnVuY3Rpb24gSWUoZSxuKXt0eXBlb2Ygbj09XCJmdW5jdGlvblwiJiYobj1uKENlKGUpKSksKHR5cGVvZiBSZWZsZWN0PlwidVwiP1U6UmVmbGVjdC5vd25LZXlzKShuKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2xlKGUsdCxuW3RdKX0pfXZhciBQdD1PYmplY3QuZGVmaW5lUHJvcGVydHk7ZnVuY3Rpb24gbGUoZSxuLHQscil7UHQoZSxuLEoodCYmWCh0LFwiZ2V0XCIpJiZ0eXBlb2YgdC5nZXQ9PVwiZnVuY3Rpb25cIj97Z2V0OnQuZ2V0LHNldDp0LnNldCxjb25maWd1cmFibGU6ITB9Ont2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0scikpfWZ1bmN0aW9uIFJlKGUpe3JldHVybntmcm9tOmZ1bmN0aW9uKG4pe3JldHVybiBlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKG4ucHJvdG90eXBlKSxsZShlLnByb3RvdHlwZSxcImNvbnN0cnVjdG9yXCIsZSkse2V4dGVuZDpJZS5iaW5kKG51bGwsZS5wcm90b3R5cGUpfX19fXZhciBrcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Z1bmN0aW9uIFR0KGUsbil7dmFyIHQ9a3IoZSxuKSxyO3JldHVybiB0fHwocj1DZShlKSkmJlR0KHIsbil9dmFyIE9yPVtdLnNsaWNlO2Z1bmN0aW9uIG9uKGUsbix0KXtyZXR1cm4gT3IuY2FsbChlLG4sdCl9ZnVuY3Rpb24gQ3QoZSxuKXtyZXR1cm4gbihlKX1mdW5jdGlvbiBZZShlKXtpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJBc3NlcnRpb24gRmFpbGVkXCIpfWZ1bmN0aW9uIEl0KGUpe04uc2V0SW1tZWRpYXRlP19fc2V0SW1tZWRpYXRlJChlKTpzZXRUaW1lb3V0KGUsMCl9ZnVuY3Rpb24gRHIoZSxuKXtyZXR1cm4gZS5yZWR1Y2UoZnVuY3Rpb24odCxyLGkpe3ZhciBhPW4ocixpKTtyZXR1cm4gYSYmKHRbYVswXV09YVsxXSksdH0se30pfWZ1bmN0aW9uIHVlKGUsbil7aWYodHlwZW9mIG49PVwic3RyaW5nXCImJlgoZSxuKSlyZXR1cm4gZVtuXTtpZighbilyZXR1cm4gZTtpZih0eXBlb2YgbiE9XCJzdHJpbmdcIil7Zm9yKHZhciB0PVtdLHI9MCxpPW4ubGVuZ3RoO3I8aTsrK3Ipe3ZhciBhPXVlKGUsbltyXSk7dC5wdXNoKGEpfXJldHVybiB0fXZhciB1PW4uaW5kZXhPZihcIi5cIik7aWYodSE9PS0xKXt2YXIgbz1lW24uc3Vic3RyKDAsdSldO3JldHVybiBvPT1udWxsP3ZvaWQgMDp1ZShvLG4uc3Vic3RyKHUrMSkpfX1mdW5jdGlvbiBaKGUsbix0KXtpZighKCFlfHxuPT09dm9pZCAwKSYmIShcImlzRnJvemVuXCJpbiBPYmplY3QmJk9iamVjdC5pc0Zyb3plbihlKSkpaWYodHlwZW9mIG4hPVwic3RyaW5nXCImJlwibGVuZ3RoXCJpbiBuKXtZZSh0eXBlb2YgdCE9XCJzdHJpbmdcIiYmXCJsZW5ndGhcImluIHQpO2Zvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpOysrcilaKGUsbltyXSx0W3JdKX1lbHNle3ZhciBhPW4uaW5kZXhPZihcIi5cIik7aWYoYSE9PS0xKXt2YXIgdT1uLnN1YnN0cigwLGEpLG89bi5zdWJzdHIoYSsxKTtpZihvPT09XCJcIil0PT09dm9pZCAwP0woZSkmJiFpc05hTihwYXJzZUludCh1KSk/ZS5zcGxpY2UodSwxKTpkZWxldGUgZVt1XTplW3VdPXQ7ZWxzZXt2YXIgcz1lW3VdOyghc3x8IVgoZSx1KSkmJihzPWVbdV09e30pLFoocyxvLHQpfX1lbHNlIHQ9PT12b2lkIDA/TChlKSYmIWlzTmFOKHBhcnNlSW50KG4pKT9lLnNwbGljZShuLDEpOmRlbGV0ZSBlW25dOmVbbl09dH19ZnVuY3Rpb24gUHIoZSxuKXt0eXBlb2Ygbj09XCJzdHJpbmdcIj9aKGUsbix2b2lkIDApOlwibGVuZ3RoXCJpbiBuJiZbXS5tYXAuY2FsbChuLGZ1bmN0aW9uKHQpe1ooZSx0LHZvaWQgMCl9KX1mdW5jdGlvbiBSdChlKXt2YXIgbj17fTtmb3IodmFyIHQgaW4gZSlYKGUsdCkmJihuW3RdPWVbdF0pO3JldHVybiBufXZhciBUcj1bXS5jb25jYXQ7ZnVuY3Rpb24gQnQoZSl7cmV0dXJuIFRyLmFwcGx5KFtdLGUpfXZhciBDcj1cIkJpZ1VpbnQ2NEFycmF5LEJpZ0ludDY0QXJyYXksQXJyYXksQm9vbGVhbixTdHJpbmcsRGF0ZSxSZWdFeHAsQmxvYixGaWxlLEZpbGVMaXN0LEZpbGVTeXN0ZW1GaWxlSGFuZGxlLEZpbGVTeXN0ZW1EaXJlY3RvcnlIYW5kbGUsQXJyYXlCdWZmZXIsRGF0YVZpZXcsVWludDhDbGFtcGVkQXJyYXksSW1hZ2VCaXRtYXAsSW1hZ2VEYXRhLE1hcCxTZXQsQ3J5cHRvS2V5XCIuc3BsaXQoXCIsXCIpLmNvbmNhdChCdChbOCwxNiwzMiw2NF0ubWFwKGZ1bmN0aW9uKGUpe3JldHVybltcIkludFwiLFwiVWludFwiLFwiRmxvYXRcIl0ubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuK2UrXCJBcnJheVwifSl9KSkpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gTltlXX0pLE10PW5ldyBTZXQoQ3IubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBOW2VdfSkpO2Z1bmN0aW9uIEZ0KGUpe3ZhciBuPXt9O2Zvcih2YXIgdCBpbiBlKWlmKFgoZSx0KSl7dmFyIHI9ZVt0XTtuW3RdPSFyfHx0eXBlb2YgciE9XCJvYmplY3RcInx8TXQuaGFzKHIuY29uc3RydWN0b3IpP3I6RnQocil9cmV0dXJuIG59ZnVuY3Rpb24gSXIoZSl7Zm9yKHZhciBuIGluIGUpaWYoWChlLG4pKXJldHVybiExO3JldHVybiEwfXZhciBVZT1udWxsO2Z1bmN0aW9uIF9lKGUpe1VlPW5ldyBXZWFrTWFwO3ZhciBuPUZuKGUpO3JldHVybiBVZT1udWxsLG59ZnVuY3Rpb24gRm4oZSl7aWYoIWV8fHR5cGVvZiBlIT1cIm9iamVjdFwiKXJldHVybiBlO3ZhciBuPVVlLmdldChlKTtpZihuKXJldHVybiBuO2lmKEwoZSkpe249W10sVWUuc2V0KGUsbik7Zm9yKHZhciB0PTAscj1lLmxlbmd0aDt0PHI7Kyt0KW4ucHVzaChGbihlW3RdKSl9ZWxzZSBpZihNdC5oYXMoZS5jb25zdHJ1Y3Rvcikpbj1lO2Vsc2V7dmFyIGk9Q2UoZSk7bj1pPT09T2JqZWN0LnByb3RvdHlwZT97fTpPYmplY3QuY3JlYXRlKGkpLFVlLnNldChlLG4pO2Zvcih2YXIgYSBpbiBlKVgoZSxhKSYmKG5bYV09Rm4oZVthXSkpfXJldHVybiBufXZhciBScj17fS50b1N0cmluZztmdW5jdGlvbiBqbihlKXtyZXR1cm4gUnIuY2FsbChlKS5zbGljZSg4LC0xKX12YXIgTm49dHlwZW9mIFN5bWJvbDxcInVcIj9TeW1ib2wuaXRlcmF0b3I6XCJAQGl0ZXJhdG9yXCIsQnI9dHlwZW9mIE5uPT1cInN5bWJvbFwiP2Z1bmN0aW9uKGUpe3ZhciBuO3JldHVybiBlIT1udWxsJiYobj1lW05uXSkmJm4uYXBwbHkoZSl9OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O2Z1bmN0aW9uIHhlKGUsbil7dmFyIHQ9ZS5pbmRleE9mKG4pO3JldHVybiB0Pj0wJiZlLnNwbGljZSh0LDEpLHQ+PTB9dmFyIEJlPXt9O2Z1bmN0aW9uIG9lKGUpe3ZhciBuLHQscixpO2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0xKXtpZihMKGUpKXJldHVybiBlLnNsaWNlKCk7aWYodGhpcz09PUJlJiZ0eXBlb2YgZT09XCJzdHJpbmdcIilyZXR1cm5bZV07aWYoaT1CcihlKSl7Zm9yKHQ9W107cj1pLm5leHQoKSwhci5kb25lOyl0LnB1c2goci52YWx1ZSk7cmV0dXJuIHR9aWYoZT09bnVsbClyZXR1cm5bZV07aWYobj1lLmxlbmd0aCx0eXBlb2Ygbj09XCJudW1iZXJcIil7Zm9yKHQ9bmV3IEFycmF5KG4pO24tLTspdFtuXT1lW25dO3JldHVybiB0fXJldHVybltlXX1mb3Iobj1hcmd1bWVudHMubGVuZ3RoLHQ9bmV3IEFycmF5KG4pO24tLTspdFtuXT1hcmd1bWVudHNbbl07cmV0dXJuIHR9dmFyIExuPXR5cGVvZiBTeW1ib2w8XCJ1XCI/ZnVuY3Rpb24oZSl7cmV0dXJuIGVbU3ltYm9sLnRvU3RyaW5nVGFnXT09PVwiQXN5bmNGdW5jdGlvblwifTpmdW5jdGlvbigpe3JldHVybiExfSxNcj1bXCJNb2RpZnlcIixcIkJ1bGtcIixcIk9wZW5GYWlsZWRcIixcIlZlcnNpb25DaGFuZ2VcIixcIlNjaGVtYVwiLFwiVXBncmFkZVwiLFwiSW52YWxpZFRhYmxlXCIsXCJNaXNzaW5nQVBJXCIsXCJOb1N1Y2hEYXRhYmFzZVwiLFwiSW52YWxpZEFyZ3VtZW50XCIsXCJTdWJUcmFuc2FjdGlvblwiLFwiVW5zdXBwb3J0ZWRcIixcIkludGVybmFsXCIsXCJEYXRhYmFzZUNsb3NlZFwiLFwiUHJlbWF0dXJlQ29tbWl0XCIsXCJGb3JlaWduQXdhaXRcIl0sanQ9W1wiVW5rbm93blwiLFwiQ29uc3RyYWludFwiLFwiRGF0YVwiLFwiVHJhbnNhY3Rpb25JbmFjdGl2ZVwiLFwiUmVhZE9ubHlcIixcIlZlcnNpb25cIixcIk5vdEZvdW5kXCIsXCJJbnZhbGlkU3RhdGVcIixcIkludmFsaWRBY2Nlc3NcIixcIkFib3J0XCIsXCJUaW1lb3V0XCIsXCJRdW90YUV4Y2VlZGVkXCIsXCJTeW50YXhcIixcIkRhdGFDbG9uZVwiXSxWbj1Nci5jb25jYXQoanQpLEZyPXtWZXJzaW9uQ2hhbmdlZDpcIkRhdGFiYXNlIHZlcnNpb24gY2hhbmdlZCBieSBvdGhlciBkYXRhYmFzZSBjb25uZWN0aW9uXCIsRGF0YWJhc2VDbG9zZWQ6XCJEYXRhYmFzZSBoYXMgYmVlbiBjbG9zZWRcIixBYm9ydDpcIlRyYW5zYWN0aW9uIGFib3J0ZWRcIixUcmFuc2FjdGlvbkluYWN0aXZlOlwiVHJhbnNhY3Rpb24gaGFzIGFscmVhZHkgY29tcGxldGVkIG9yIGZhaWxlZFwiLE1pc3NpbmdBUEk6XCJJbmRleGVkREIgQVBJIG1pc3NpbmcuIFBsZWFzZSB2aXNpdCBodHRwczovL3Rpbnl1cmwuY29tL3kydXV2c2tiXCJ9O2Z1bmN0aW9uIE1lKGUsbil7dGhpcy5uYW1lPWUsdGhpcy5tZXNzYWdlPW59UmUoTWUpLmZyb20oRXJyb3IpLmV4dGVuZCh7dG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5uYW1lK1wiOiBcIit0aGlzLm1lc3NhZ2V9fSk7ZnVuY3Rpb24gTnQoZSxuKXtyZXR1cm4gZStcIi4gRXJyb3JzOiBcIitPYmplY3Qua2V5cyhuKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG5bdF0udG9TdHJpbmcoKX0pLmZpbHRlcihmdW5jdGlvbih0LHIsaSl7cmV0dXJuIGkuaW5kZXhPZih0KT09PXJ9KS5qb2luKGBcbmApfWZ1bmN0aW9uIHNuKGUsbix0LHIpe3RoaXMuZmFpbHVyZXM9bix0aGlzLmZhaWxlZEtleXM9cix0aGlzLnN1Y2Nlc3NDb3VudD10LHRoaXMubWVzc2FnZT1OdChlLG4pfVJlKHNuKS5mcm9tKE1lKTtmdW5jdGlvbiBGZShlLG4pe3RoaXMubmFtZT1cIkJ1bGtFcnJvclwiLHRoaXMuZmFpbHVyZXM9T2JqZWN0LmtleXMobikubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuW3RdfSksdGhpcy5mYWlsdXJlc0J5UG9zPW4sdGhpcy5tZXNzYWdlPU50KGUsdGhpcy5mYWlsdXJlcyl9UmUoRmUpLmZyb20oTWUpO3ZhciB6bj1Wbi5yZWR1Y2UoZnVuY3Rpb24oZSxuKXtyZXR1cm4gZVtuXT1uK1wiRXJyb3JcIixlfSx7fSksanI9TWUsRD1Wbi5yZWR1Y2UoZnVuY3Rpb24oZSxuKXt2YXIgdD1uK1wiRXJyb3JcIjtmdW5jdGlvbiByKGksYSl7dGhpcy5uYW1lPXQsaT90eXBlb2YgaT09XCJzdHJpbmdcIj8odGhpcy5tZXNzYWdlPVwiXCIuY29uY2F0KGkpLmNvbmNhdChhP2BcbiBgK2E6XCJcIiksdGhpcy5pbm5lcj1hfHxudWxsKTp0eXBlb2YgaT09XCJvYmplY3RcIiYmKHRoaXMubWVzc2FnZT1cIlwiLmNvbmNhdChpLm5hbWUsXCIgXCIpLmNvbmNhdChpLm1lc3NhZ2UpLHRoaXMuaW5uZXI9aSk6KHRoaXMubWVzc2FnZT1GcltuXXx8dCx0aGlzLmlubmVyPW51bGwpfXJldHVybiBSZShyKS5mcm9tKGpyKSxlW25dPXIsZX0se30pO0QuU3ludGF4PVN5bnRheEVycm9yLEQuVHlwZT1UeXBlRXJyb3IsRC5SYW5nZT1SYW5nZUVycm9yO3ZhciBMdD1qdC5yZWR1Y2UoZnVuY3Rpb24oZSxuKXtyZXR1cm4gZVtuK1wiRXJyb3JcIl09RFtuXSxlfSx7fSk7ZnVuY3Rpb24gTnIoZSxuKXtpZighZXx8ZSBpbnN0YW5jZW9mIE1lfHxlIGluc3RhbmNlb2YgVHlwZUVycm9yfHxlIGluc3RhbmNlb2YgU3ludGF4RXJyb3J8fCFlLm5hbWV8fCFMdFtlLm5hbWVdKXJldHVybiBlO3ZhciB0PW5ldyBMdFtlLm5hbWVdKG58fGUubWVzc2FnZSxlKTtyZXR1cm5cInN0YWNrXCJpbiBlJiZsZSh0LFwic3RhY2tcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5uZXIuc3RhY2t9fSksdH12YXIgY249Vm4ucmVkdWNlKGZ1bmN0aW9uKGUsbil7cmV0dXJuW1wiU3ludGF4XCIsXCJUeXBlXCIsXCJSYW5nZVwiXS5pbmRleE9mKG4pPT09LTEmJihlW24rXCJFcnJvclwiXT1EW25dKSxlfSx7fSk7Y24uTW9kaWZ5RXJyb3I9c24sY24uRGV4aWVFcnJvcj1NZSxjbi5CdWxrRXJyb3I9RmU7ZnVuY3Rpb24gRigpe31mdW5jdGlvbiAkZShlKXtyZXR1cm4gZX1mdW5jdGlvbiBMcihlLG4pe3JldHVybiBlPT1udWxsfHxlPT09JGU/bjpmdW5jdGlvbih0KXtyZXR1cm4gbihlKHQpKX19ZnVuY3Rpb24gRWUoZSxuKXtyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19ZnVuY3Rpb24gVnIoZSxuKXtyZXR1cm4gZT09PUY/bjpmdW5jdGlvbigpe3ZhciB0PWUuYXBwbHkodGhpcyxhcmd1bWVudHMpO3QhPT12b2lkIDAmJihhcmd1bWVudHNbMF09dCk7dmFyIHI9dGhpcy5vbnN1Y2Nlc3MsaT10aGlzLm9uZXJyb3I7dGhpcy5vbnN1Y2Nlc3M9bnVsbCx0aGlzLm9uZXJyb3I9bnVsbDt2YXIgYT1uLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gciYmKHRoaXMub25zdWNjZXNzPXRoaXMub25zdWNjZXNzP0VlKHIsdGhpcy5vbnN1Y2Nlc3MpOnIpLGkmJih0aGlzLm9uZXJyb3I9dGhpcy5vbmVycm9yP0VlKGksdGhpcy5vbmVycm9yKTppKSxhIT09dm9pZCAwP2E6dH19ZnVuY3Rpb24genIoZSxuKXtyZXR1cm4gZT09PUY/bjpmdW5jdGlvbigpe2UuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciB0PXRoaXMub25zdWNjZXNzLHI9dGhpcy5vbmVycm9yO3RoaXMub25zdWNjZXNzPXRoaXMub25lcnJvcj1udWxsLG4uYXBwbHkodGhpcyxhcmd1bWVudHMpLHQmJih0aGlzLm9uc3VjY2Vzcz10aGlzLm9uc3VjY2Vzcz9FZSh0LHRoaXMub25zdWNjZXNzKTp0KSxyJiYodGhpcy5vbmVycm9yPXRoaXMub25lcnJvcj9FZShyLHRoaXMub25lcnJvcik6cil9fWZ1bmN0aW9uIFdyKGUsbil7cmV0dXJuIGU9PT1GP246ZnVuY3Rpb24odCl7dmFyIHI9ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7Sih0LHIpO3ZhciBpPXRoaXMub25zdWNjZXNzLGE9dGhpcy5vbmVycm9yO3RoaXMub25zdWNjZXNzPW51bGwsdGhpcy5vbmVycm9yPW51bGw7dmFyIHU9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIGkmJih0aGlzLm9uc3VjY2Vzcz10aGlzLm9uc3VjY2Vzcz9FZShpLHRoaXMub25zdWNjZXNzKTppKSxhJiYodGhpcy5vbmVycm9yPXRoaXMub25lcnJvcj9FZShhLHRoaXMub25lcnJvcik6YSkscj09PXZvaWQgMD91PT09dm9pZCAwP3ZvaWQgMDp1Okoocix1KX19ZnVuY3Rpb24gWXIoZSxuKXtyZXR1cm4gZT09PUY/bjpmdW5jdGlvbigpe3JldHVybiBuLmFwcGx5KHRoaXMsYXJndW1lbnRzKT09PSExPyExOmUuYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mdW5jdGlvbiBXbihlLG4pe3JldHVybiBlPT09Rj9uOmZ1bmN0aW9uKCl7dmFyIHQ9ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7aWYodCYmdHlwZW9mIHQudGhlbj09XCJmdW5jdGlvblwiKXtmb3IodmFyIHI9dGhpcyxpPWFyZ3VtZW50cy5sZW5ndGgsYT1uZXcgQXJyYXkoaSk7aS0tOylhW2ldPWFyZ3VtZW50c1tpXTtyZXR1cm4gdC50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG4uYXBwbHkocixhKX0pfXJldHVybiBuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19dmFyIHRlPXR5cGVvZiBsb2NhdGlvbjxcInVcIiYmL14oaHR0cHxodHRwcyk6XFwvXFwvKGxvY2FsaG9zdHwxMjdcXC4wXFwuMFxcLjEpLy50ZXN0KGxvY2F0aW9uLmhyZWYpO2Z1bmN0aW9uIFZ0KGUsbil7dGU9ZX12YXIgUWU9e30senQ9MTAwLFluPXR5cGVvZiBQcm9taXNlPlwidVwiP1tdOmZ1bmN0aW9uKCl7dmFyIGU9UHJvbWlzZS5yZXNvbHZlKCk7aWYodHlwZW9mIGNyeXB0bz5cInVcInx8IWNyeXB0by5zdWJ0bGUpcmV0dXJuW2UsQ2UoZSksZV07dmFyIG49Y3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtNTEyXCIsbmV3IFVpbnQ4QXJyYXkoWzBdKSk7cmV0dXJuW24sQ2UobiksZV19KCksV3Q9WW5bMF0sWXQ9WW5bMV0sVXI9WW5bMl0sJHI9WXQmJll0LnRoZW4sS2U9V3QmJld0LmNvbnN0cnVjdG9yLFVuPSEhVXI7ZnVuY3Rpb24gUXIoKXtxdWV1ZU1pY3JvdGFzayhYcil9dmFyIEhlPWZ1bmN0aW9uKGUsbil7WGUucHVzaChbZSxuXSksbG4mJihRcigpLGxuPSExKX0sJG49ITAsbG49ITAsU2U9W10sZm49W10sUW49JGUsZmU9e2lkOlwiZ2xvYmFsXCIsZ2xvYmFsOiEwLHJlZjowLHVuaGFuZGxlZHM6W10sb251bmhhbmRsZWQ6RixwZ3A6ITEsZW52Ont9LGZpbmFsaXplOkZ9LGs9ZmUsWGU9W10sQWU9MCxobj1bXTtmdW5jdGlvbiBLKGUpe2lmKHR5cGVvZiB0aGlzIT1cIm9iamVjdFwiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7dGhpcy5fbGlzdGVuZXJzPVtdLHRoaXMuX2xpYj0hMTt2YXIgbj10aGlzLl9QU0Q9aztpZih0eXBlb2YgZSE9XCJmdW5jdGlvblwiKXtpZihlIT09UWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO3RoaXMuX3N0YXRlPWFyZ3VtZW50c1sxXSx0aGlzLl92YWx1ZT1hcmd1bWVudHNbMl0sdGhpcy5fc3RhdGU9PT0hMSYmWG4odGhpcyx0aGlzLl92YWx1ZSk7cmV0dXJufXRoaXMuX3N0YXRlPW51bGwsdGhpcy5fdmFsdWU9bnVsbCwrK24ucmVmLCR0KHRoaXMsZSl9dmFyIEhuPXtnZXQ6ZnVuY3Rpb24oKXt2YXIgZT1rLG49eW47ZnVuY3Rpb24gdChyLGkpe3ZhciBhPXRoaXMsdT0hZS5nbG9iYWwmJihlIT09a3x8biE9PXluKSxvPXUmJiFkZSgpLHM9bmV3IEsoZnVuY3Rpb24oYyxoKXtHbihhLG5ldyBVdChYdChyLGUsdSxvKSxYdChpLGUsdSxvKSxjLGgsZSkpfSk7cmV0dXJuIHRoaXMuX2NvbnNvbGVUYXNrJiYocy5fY29uc29sZVRhc2s9dGhpcy5fY29uc29sZVRhc2spLHN9cmV0dXJuIHQucHJvdG90eXBlPVFlLHR9LHNldDpmdW5jdGlvbihlKXtsZSh0aGlzLFwidGhlblwiLGUmJmUucHJvdG90eXBlPT09UWU/SG46e2dldDpmdW5jdGlvbigpe3JldHVybiBlfSxzZXQ6SG4uc2V0fSl9fTtJZShLLnByb3RvdHlwZSx7dGhlbjpIbixfdGhlbjpmdW5jdGlvbihlLG4pe0duKHRoaXMsbmV3IFV0KG51bGwsbnVsbCxlLG4saykpfSxjYXRjaDpmdW5jdGlvbihlKXtpZihhcmd1bWVudHMubGVuZ3RoPT09MSlyZXR1cm4gdGhpcy50aGVuKG51bGwsZSk7dmFyIG49YXJndW1lbnRzWzBdLHQ9YXJndW1lbnRzWzFdO3JldHVybiB0eXBlb2Ygbj09XCJmdW5jdGlvblwiP3RoaXMudGhlbihudWxsLGZ1bmN0aW9uKHIpe3JldHVybiByIGluc3RhbmNlb2Ygbj90KHIpOmRuKHIpfSk6dGhpcy50aGVuKG51bGwsZnVuY3Rpb24ocil7cmV0dXJuIHImJnIubmFtZT09PW4/dChyKTpkbihyKX0pfSxmaW5hbGx5OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIEsucmVzb2x2ZShlKCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gbn0pfSxmdW5jdGlvbihuKXtyZXR1cm4gSy5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBkbihuKX0pfSl9LHRpbWVvdXQ6ZnVuY3Rpb24oZSxuKXt2YXIgdD10aGlzO3JldHVybiBlPDEvMD9uZXcgSyhmdW5jdGlvbihyLGkpe3ZhciBhPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gaShuZXcgRC5UaW1lb3V0KG4pKX0sZSk7dC50aGVuKHIsaSkuZmluYWxseShjbGVhclRpbWVvdXQuYmluZChudWxsLGEpKX0pOnRoaXN9fSksdHlwZW9mIFN5bWJvbDxcInVcIiYmU3ltYm9sLnRvU3RyaW5nVGFnJiZsZShLLnByb3RvdHlwZSxTeW1ib2wudG9TdHJpbmdUYWcsXCJEZXhpZS5Qcm9taXNlXCIpLGZlLmVudj1IdCgpO2Z1bmN0aW9uIFV0KGUsbix0LHIsaSl7dGhpcy5vbkZ1bGZpbGxlZD10eXBlb2YgZT09XCJmdW5jdGlvblwiP2U6bnVsbCx0aGlzLm9uUmVqZWN0ZWQ9dHlwZW9mIG49PVwiZnVuY3Rpb25cIj9uOm51bGwsdGhpcy5yZXNvbHZlPXQsdGhpcy5yZWplY3Q9cix0aGlzLnBzZD1pfUllKEsse2FsbDpmdW5jdGlvbigpe3ZhciBlPW9lLmFwcGx5KG51bGwsYXJndW1lbnRzKS5tYXAobW4pO3JldHVybiBuZXcgSyhmdW5jdGlvbihuLHQpe2UubGVuZ3RoPT09MCYmbihbXSk7dmFyIHI9ZS5sZW5ndGg7ZS5mb3JFYWNoKGZ1bmN0aW9uKGksYSl7cmV0dXJuIEsucmVzb2x2ZShpKS50aGVuKGZ1bmN0aW9uKHUpe2VbYV09dSwtLXJ8fG4oZSl9LHQpfSl9KX0scmVzb2x2ZTpmdW5jdGlvbihlKXtpZihlIGluc3RhbmNlb2YgSylyZXR1cm4gZTtpZihlJiZ0eXBlb2YgZS50aGVuPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG5ldyBLKGZ1bmN0aW9uKHQscil7ZS50aGVuKHQscil9KTt2YXIgbj1uZXcgSyhRZSwhMCxlKTtyZXR1cm4gbn0scmVqZWN0OmRuLHJhY2U6ZnVuY3Rpb24oKXt2YXIgZT1vZS5hcHBseShudWxsLGFyZ3VtZW50cykubWFwKG1uKTtyZXR1cm4gbmV3IEsoZnVuY3Rpb24obix0KXtlLm1hcChmdW5jdGlvbihyKXtyZXR1cm4gSy5yZXNvbHZlKHIpLnRoZW4obix0KX0pfSl9LFBTRDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGt9LHNldDpmdW5jdGlvbihlKXtyZXR1cm4gaz1lfX0sdG90YWxFY2hvZXM6e2dldDpmdW5jdGlvbigpe3JldHVybiB5bn19LG5ld1BTRDpoZSx1c2VQU0Q6a2Usc2NoZWR1bGVyOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGV9LHNldDpmdW5jdGlvbihlKXtIZT1lfX0scmVqZWN0aW9uTWFwcGVyOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUW59LHNldDpmdW5jdGlvbihlKXtRbj1lfX0sZm9sbG93OmZ1bmN0aW9uKGUsbil7cmV0dXJuIG5ldyBLKGZ1bmN0aW9uKHQscil7cmV0dXJuIGhlKGZ1bmN0aW9uKGksYSl7dmFyIHU9azt1LnVuaGFuZGxlZHM9W10sdS5vbnVuaGFuZGxlZD1hLHUuZmluYWxpemU9RWUoZnVuY3Rpb24oKXt2YXIgbz10aGlzO0dyKGZ1bmN0aW9uKCl7by51bmhhbmRsZWRzLmxlbmd0aD09PTA/aSgpOmEoby51bmhhbmRsZWRzWzBdKX0pfSx1LmZpbmFsaXplKSxlKCl9LG4sdCxyKX0pfX0pLEtlJiYoS2UuYWxsU2V0dGxlZCYmbGUoSyxcImFsbFNldHRsZWRcIixmdW5jdGlvbigpe3ZhciBlPW9lLmFwcGx5KG51bGwsYXJndW1lbnRzKS5tYXAobW4pO3JldHVybiBuZXcgSyhmdW5jdGlvbihuKXtlLmxlbmd0aD09PTAmJm4oW10pO3ZhciB0PWUubGVuZ3RoLHI9bmV3IEFycmF5KHQpO2UuZm9yRWFjaChmdW5jdGlvbihpLGEpe3JldHVybiBLLnJlc29sdmUoaSkudGhlbihmdW5jdGlvbih1KXtyZXR1cm4gclthXT17c3RhdHVzOlwiZnVsZmlsbGVkXCIsdmFsdWU6dX19LGZ1bmN0aW9uKHUpe3JldHVybiByW2FdPXtzdGF0dXM6XCJyZWplY3RlZFwiLHJlYXNvbjp1fX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4tLXR8fG4ocil9KX0pfSl9KSxLZS5hbnkmJnR5cGVvZiBBZ2dyZWdhdGVFcnJvcjxcInVcIiYmbGUoSyxcImFueVwiLGZ1bmN0aW9uKCl7dmFyIGU9b2UuYXBwbHkobnVsbCxhcmd1bWVudHMpLm1hcChtbik7cmV0dXJuIG5ldyBLKGZ1bmN0aW9uKG4sdCl7ZS5sZW5ndGg9PT0wJiZ0KG5ldyBBZ2dyZWdhdGVFcnJvcihbXSkpO3ZhciByPWUubGVuZ3RoLGk9bmV3IEFycmF5KHIpO2UuZm9yRWFjaChmdW5jdGlvbihhLHUpe3JldHVybiBLLnJlc29sdmUoYSkudGhlbihmdW5jdGlvbihvKXtyZXR1cm4gbihvKX0sZnVuY3Rpb24obyl7aVt1XT1vLC0tcnx8dChuZXcgQWdncmVnYXRlRXJyb3IoaSkpfSl9KX0pfSksS2Uud2l0aFJlc29sdmVycyYmKEsud2l0aFJlc29sdmVycz1LZS53aXRoUmVzb2x2ZXJzKSk7ZnVuY3Rpb24gJHQoZSxuKXt0cnl7bihmdW5jdGlvbih0KXtpZihlLl9zdGF0ZT09PW51bGwpe2lmKHQ9PT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2UgY2Fubm90IGJlIHJlc29sdmVkIHdpdGggaXRzZWxmLlwiKTt2YXIgcj1lLl9saWImJmplKCk7dCYmdHlwZW9mIHQudGhlbj09XCJmdW5jdGlvblwiPyR0KGUsZnVuY3Rpb24oaSxhKXt0IGluc3RhbmNlb2YgSz90Ll90aGVuKGksYSk6dC50aGVuKGksYSl9KTooZS5fc3RhdGU9ITAsZS5fdmFsdWU9dCxRdChlKSksciYmTmUoKX19LFhuLmJpbmQobnVsbCxlKSl9Y2F0Y2godCl7WG4oZSx0KX19ZnVuY3Rpb24gWG4oZSxuKXtpZihmbi5wdXNoKG4pLGUuX3N0YXRlPT09bnVsbCl7dmFyIHQ9ZS5fbGliJiZqZSgpO249UW4obiksZS5fc3RhdGU9ITEsZS5fdmFsdWU9bixKcihlKSxRdChlKSx0JiZOZSgpfX1mdW5jdGlvbiBRdChlKXt2YXIgbj1lLl9saXN0ZW5lcnM7ZS5fbGlzdGVuZXJzPVtdO2Zvcih2YXIgdD0wLHI9bi5sZW5ndGg7dDxyOysrdClHbihlLG5bdF0pO3ZhciBpPWUuX1BTRDstLWkucmVmfHxpLmZpbmFsaXplKCksQWU9PT0wJiYoKytBZSxIZShmdW5jdGlvbigpey0tQWU9PT0wJiZKbigpfSxbXSkpfWZ1bmN0aW9uIEduKGUsbil7aWYoZS5fc3RhdGU9PT1udWxsKXtlLl9saXN0ZW5lcnMucHVzaChuKTtyZXR1cm59dmFyIHQ9ZS5fc3RhdGU/bi5vbkZ1bGZpbGxlZDpuLm9uUmVqZWN0ZWQ7aWYodD09PW51bGwpcmV0dXJuKGUuX3N0YXRlP24ucmVzb2x2ZTpuLnJlamVjdCkoZS5fdmFsdWUpOysrbi5wc2QucmVmLCsrQWUsSGUoSHIsW3QsZSxuXSl9ZnVuY3Rpb24gSHIoZSxuLHQpe3RyeXt2YXIgcixpPW4uX3ZhbHVlOyFuLl9zdGF0ZSYmZm4ubGVuZ3RoJiYoZm49W10pLHI9dGUmJm4uX2NvbnNvbGVUYXNrP24uX2NvbnNvbGVUYXNrLnJ1bihmdW5jdGlvbigpe3JldHVybiBlKGkpfSk6ZShpKSwhbi5fc3RhdGUmJmZuLmluZGV4T2YoaSk9PT0tMSYmWnIobiksdC5yZXNvbHZlKHIpfWNhdGNoKGEpe3QucmVqZWN0KGEpfWZpbmFsbHl7LS1BZT09PTAmJkpuKCksLS10LnBzZC5yZWZ8fHQucHNkLmZpbmFsaXplKCl9fWZ1bmN0aW9uIFhyKCl7a2UoZmUsZnVuY3Rpb24oKXtqZSgpJiZOZSgpfSl9ZnVuY3Rpb24gamUoKXt2YXIgZT0kbjtyZXR1cm4gJG49ITEsbG49ITEsZX1mdW5jdGlvbiBOZSgpe3ZhciBlLG4sdDtkbyBmb3IoO1hlLmxlbmd0aD4wOylmb3IoZT1YZSxYZT1bXSx0PWUubGVuZ3RoLG49MDtuPHQ7KytuKXt2YXIgcj1lW25dO3JbMF0uYXBwbHkobnVsbCxyWzFdKX13aGlsZShYZS5sZW5ndGg+MCk7JG49ITAsbG49ITB9ZnVuY3Rpb24gSm4oKXt2YXIgZT1TZTtTZT1bXSxlLmZvckVhY2goZnVuY3Rpb24ocil7ci5fUFNELm9udW5oYW5kbGVkLmNhbGwobnVsbCxyLl92YWx1ZSxyKX0pO2Zvcih2YXIgbj1obi5zbGljZSgwKSx0PW4ubGVuZ3RoO3Q7KW5bLS10XSgpfWZ1bmN0aW9uIEdyKGUpe2Z1bmN0aW9uIG4oKXtlKCksaG4uc3BsaWNlKGhuLmluZGV4T2YobiksMSl9aG4ucHVzaChuKSwrK0FlLEhlKGZ1bmN0aW9uKCl7LS1BZT09PTAmJkpuKCl9LFtdKX1mdW5jdGlvbiBKcihlKXtTZS5zb21lKGZ1bmN0aW9uKG4pe3JldHVybiBuLl92YWx1ZT09PWUuX3ZhbHVlfSl8fFNlLnB1c2goZSl9ZnVuY3Rpb24gWnIoZSl7Zm9yKHZhciBuPVNlLmxlbmd0aDtuOylpZihTZVstLW5dLl92YWx1ZT09PWUuX3ZhbHVlKXtTZS5zcGxpY2UobiwxKTtyZXR1cm59fWZ1bmN0aW9uIGRuKGUpe3JldHVybiBuZXcgSyhRZSwhMSxlKX1mdW5jdGlvbiBqKGUsbil7dmFyIHQ9aztyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcj1qZSgpLGk9azt0cnl7cmV0dXJuIHZlKHQsITApLGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfWNhdGNoKGEpe24mJm4oYSl9ZmluYWxseXt2ZShpLCExKSxyJiZOZSgpfX19dmFyICQ9e2F3YWl0czowLGVjaG9lczowLGlkOjB9LHFyPTAsdm49W10scG49MCx5bj0wLGVpPTA7ZnVuY3Rpb24gaGUoZSxuLHQscil7dmFyIGk9ayxhPU9iamVjdC5jcmVhdGUoaSk7YS5wYXJlbnQ9aSxhLnJlZj0wLGEuZ2xvYmFsPSExLGEuaWQ9KytlaSxmZS5lbnYsYS5lbnY9VW4/e1Byb21pc2U6SyxQcm9taXNlUHJvcDp7dmFsdWU6Syxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9LGFsbDpLLmFsbCxyYWNlOksucmFjZSxhbGxTZXR0bGVkOksuYWxsU2V0dGxlZCxhbnk6Sy5hbnkscmVzb2x2ZTpLLnJlc29sdmUscmVqZWN0OksucmVqZWN0fTp7fSxuJiZKKGEsbiksKytpLnJlZixhLmZpbmFsaXplPWZ1bmN0aW9uKCl7LS10aGlzLnBhcmVudC5yZWZ8fHRoaXMucGFyZW50LmZpbmFsaXplKCl9O3ZhciB1PWtlKGEsZSx0LHIpO3JldHVybiBhLnJlZj09PTAmJmEuZmluYWxpemUoKSx1fWZ1bmN0aW9uIExlKCl7cmV0dXJuICQuaWR8fCgkLmlkPSsrcXIpLCsrJC5hd2FpdHMsJC5lY2hvZXMrPXp0LCQuaWR9ZnVuY3Rpb24gZGUoKXtyZXR1cm4gJC5hd2FpdHM/KC0tJC5hd2FpdHM9PT0wJiYoJC5pZD0wKSwkLmVjaG9lcz0kLmF3YWl0cyp6dCwhMCk6ITF9KFwiXCIrJHIpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpPT09LTEmJihMZT1kZT1GKTtmdW5jdGlvbiBtbihlKXtyZXR1cm4gJC5lY2hvZXMmJmUmJmUuY29uc3RydWN0b3I9PT1LZT8oTGUoKSxlLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIGRlKCksbn0sZnVuY3Rpb24obil7cmV0dXJuIGRlKCkseihuKX0pKTplfWZ1bmN0aW9uIG5pKGUpeysreW4sKCEkLmVjaG9lc3x8LS0kLmVjaG9lcz09PTApJiYoJC5lY2hvZXM9JC5hd2FpdHM9JC5pZD0wKSx2bi5wdXNoKGspLHZlKGUsITApfWZ1bmN0aW9uIHRpKCl7dmFyIGU9dm5bdm4ubGVuZ3RoLTFdO3ZuLnBvcCgpLHZlKGUsITEpfWZ1bmN0aW9uIHZlKGUsbil7dmFyIHQ9aztpZigobj8kLmVjaG9lcyYmKCFwbisrfHxlIT09ayk6cG4mJighLS1wbnx8ZSE9PWspKSYmcXVldWVNaWNyb3Rhc2sobj9uaS5iaW5kKG51bGwsZSk6dGkpLGUhPT1rJiYoaz1lLHQ9PT1mZSYmKGZlLmVudj1IdCgpKSxVbikpe3ZhciByPWZlLmVudi5Qcm9taXNlLGk9ZS5lbnY7KHQuZ2xvYmFsfHxlLmdsb2JhbCkmJihPYmplY3QuZGVmaW5lUHJvcGVydHkoTixcIlByb21pc2VcIixpLlByb21pc2VQcm9wKSxyLmFsbD1pLmFsbCxyLnJhY2U9aS5yYWNlLHIucmVzb2x2ZT1pLnJlc29sdmUsci5yZWplY3Q9aS5yZWplY3QsaS5hbGxTZXR0bGVkJiYoci5hbGxTZXR0bGVkPWkuYWxsU2V0dGxlZCksaS5hbnkmJihyLmFueT1pLmFueSkpfX1mdW5jdGlvbiBIdCgpe3ZhciBlPU4uUHJvbWlzZTtyZXR1cm4gVW4/e1Byb21pc2U6ZSxQcm9taXNlUHJvcDpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE4sXCJQcm9taXNlXCIpLGFsbDplLmFsbCxyYWNlOmUucmFjZSxhbGxTZXR0bGVkOmUuYWxsU2V0dGxlZCxhbnk6ZS5hbnkscmVzb2x2ZTplLnJlc29sdmUscmVqZWN0OmUucmVqZWN0fTp7fX1mdW5jdGlvbiBrZShlLG4sdCxyLGkpe3ZhciBhPWs7dHJ5e3JldHVybiB2ZShlLCEwKSxuKHQscixpKX1maW5hbGx5e3ZlKGEsITEpfX1mdW5jdGlvbiBYdChlLG4sdCxyKXtyZXR1cm4gdHlwZW9mIGUhPVwiZnVuY3Rpb25cIj9lOmZ1bmN0aW9uKCl7dmFyIGk9azt0JiZMZSgpLHZlKG4sITApO3RyeXtyZXR1cm4gZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXt2ZShpLCExKSxyJiZxdWV1ZU1pY3JvdGFzayhkZSl9fX1mdW5jdGlvbiBabihlKXtQcm9taXNlPT09S2UmJiQuZWNob2VzPT09MD9wbj09PTA/ZSgpOmVucXVldWVOYXRpdmVNaWNyb1Rhc2soZSk6c2V0VGltZW91dChlLDApfXZhciB6PUsucmVqZWN0O2Z1bmN0aW9uIHFuKGUsbix0LHIpe2lmKCFlLmlkYmRifHwhZS5fc3RhdGUub3BlbkNvbXBsZXRlJiYhay5sZXRUaHJvdWdoJiYhZS5fdmlwKXtpZihlLl9zdGF0ZS5vcGVuQ29tcGxldGUpcmV0dXJuIHoobmV3IEQuRGF0YWJhc2VDbG9zZWQoZS5fc3RhdGUuZGJPcGVuRXJyb3IpKTtpZighZS5fc3RhdGUuaXNCZWluZ09wZW5lZCl7aWYoIWUuX3N0YXRlLmF1dG9PcGVuKXJldHVybiB6KG5ldyBELkRhdGFiYXNlQ2xvc2VkKTtlLm9wZW4oKS5jYXRjaChGKX1yZXR1cm4gZS5fc3RhdGUuZGJSZWFkeVByb21pc2UudGhlbihmdW5jdGlvbigpe3JldHVybiBxbihlLG4sdCxyKX0pfWVsc2V7dmFyIGk9ZS5fY3JlYXRlVHJhbnNhY3Rpb24obix0LGUuX2RiU2NoZW1hKTt0cnl7aS5jcmVhdGUoKSxlLl9zdGF0ZS5QUjEzOThfbWF4TG9vcD0zfWNhdGNoKGEpe3JldHVybiBhLm5hbWU9PT16bi5JbnZhbGlkU3RhdGUmJmUuaXNPcGVuKCkmJi0tZS5fc3RhdGUuUFIxMzk4X21heExvb3A+MD8oY29uc29sZS53YXJuKFwiRGV4aWU6IE5lZWQgdG8gcmVvcGVuIGRiXCIpLGUuY2xvc2Uoe2Rpc2FibGVBdXRvT3BlbjohMX0pLGUub3BlbigpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gcW4oZSxuLHQscil9KSk6eihhKX1yZXR1cm4gaS5fcHJvbWlzZShuLGZ1bmN0aW9uKGEsdSl7cmV0dXJuIGhlKGZ1bmN0aW9uKCl7cmV0dXJuIGsudHJhbnM9aSxyKGEsdSxpKX0pfSkudGhlbihmdW5jdGlvbihhKXtpZihuPT09XCJyZWFkd3JpdGVcIil0cnl7aS5pZGJ0cmFucy5jb21taXQoKX1jYXRjaHt9cmV0dXJuIG49PT1cInJlYWRvbmx5XCI/YTppLl9jb21wbGV0aW9uLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYX0pfSl9fXZhciBHdD1cIjQuMC4xMVwiLE9lPVwiXFx1RkZGRlwiLGV0PS0xLzAsc2U9XCJJbnZhbGlkIGtleSBwcm92aWRlZC4gS2V5cyBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLCBudW1iZXIsIERhdGUgb3IgQXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgRGF0ZT4uXCIsSnQ9XCJTdHJpbmcgZXhwZWN0ZWQuXCIsVmU9W10sZ249XCJfX2RibmFtZXNcIixudD1cInJlYWRvbmx5XCIsdHQ9XCJyZWFkd3JpdGVcIjtmdW5jdGlvbiBEZShlLG4pe3JldHVybiBlP24/ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0aGlzLGFyZ3VtZW50cykmJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpfTplOm59dmFyIFp0PXt0eXBlOjMsbG93ZXI6LTEvMCxsb3dlck9wZW46ITEsdXBwZXI6W1tdXSx1cHBlck9wZW46ITF9O2Z1bmN0aW9uIGJuKGUpe3JldHVybiB0eXBlb2YgZT09XCJzdHJpbmdcIiYmIS9cXC4vLnRlc3QoZSk/ZnVuY3Rpb24obil7cmV0dXJuIG5bZV09PT12b2lkIDAmJmUgaW4gbiYmKG49X2UobiksZGVsZXRlIG5bZV0pLG59OmZ1bmN0aW9uKG4pe3JldHVybiBufX1mdW5jdGlvbiBxdCgpe3Rocm93IEQuVHlwZSgpfWZ1bmN0aW9uIEIoZSxuKXt0cnl7dmFyIHQ9ZXIoZSkscj1lcihuKTtpZih0IT09cilyZXR1cm4gdD09PVwiQXJyYXlcIj8xOnI9PT1cIkFycmF5XCI/LTE6dD09PVwiYmluYXJ5XCI/MTpyPT09XCJiaW5hcnlcIj8tMTp0PT09XCJzdHJpbmdcIj8xOnI9PT1cInN0cmluZ1wiPy0xOnQ9PT1cIkRhdGVcIj8xOnIhPT1cIkRhdGVcIj9OYU46LTE7c3dpdGNoKHQpe2Nhc2VcIm51bWJlclwiOmNhc2VcIkRhdGVcIjpjYXNlXCJzdHJpbmdcIjpyZXR1cm4gZT5uPzE6ZTxuPy0xOjA7Y2FzZVwiYmluYXJ5XCI6cmV0dXJuIGlpKG5yKGUpLG5yKG4pKTtjYXNlXCJBcnJheVwiOnJldHVybiByaShlLG4pfX1jYXRjaHt9cmV0dXJuIE5hTn1mdW5jdGlvbiByaShlLG4pe2Zvcih2YXIgdD1lLmxlbmd0aCxyPW4ubGVuZ3RoLGk9dDxyP3Q6cixhPTA7YTxpOysrYSl7dmFyIHU9QihlW2FdLG5bYV0pO2lmKHUhPT0wKXJldHVybiB1fXJldHVybiB0PT09cj8wOnQ8cj8tMToxfWZ1bmN0aW9uIGlpKGUsbil7Zm9yKHZhciB0PWUubGVuZ3RoLHI9bi5sZW5ndGgsaT10PHI/dDpyLGE9MDthPGk7KythKWlmKGVbYV0hPT1uW2FdKXJldHVybiBlW2FdPG5bYV0/LTE6MTtyZXR1cm4gdD09PXI/MDp0PHI/LTE6MX1mdW5jdGlvbiBlcihlKXt2YXIgbj10eXBlb2YgZTtpZihuIT09XCJvYmplY3RcIilyZXR1cm4gbjtpZihBcnJheUJ1ZmZlci5pc1ZpZXcoZSkpcmV0dXJuXCJiaW5hcnlcIjt2YXIgdD1qbihlKTtyZXR1cm4gdD09PVwiQXJyYXlCdWZmZXJcIj9cImJpbmFyeVwiOnR9ZnVuY3Rpb24gbnIoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBVaW50OEFycmF5P2U6QXJyYXlCdWZmZXIuaXNWaWV3KGUpP25ldyBVaW50OEFycmF5KGUuYnVmZmVyLGUuYnl0ZU9mZnNldCxlLmJ5dGVMZW5ndGgpOm5ldyBVaW50OEFycmF5KGUpfXZhciB0cj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9cmV0dXJuIGUucHJvdG90eXBlLl90cmFucz1mdW5jdGlvbihuLHQscil7dmFyIGk9dGhpcy5fdHh8fGsudHJhbnMsYT10aGlzLm5hbWUsdT10ZSYmdHlwZW9mIGNvbnNvbGU8XCJ1XCImJmNvbnNvbGUuY3JlYXRlVGFzayYmY29uc29sZS5jcmVhdGVUYXNrKFwiRGV4aWU6IFwiLmNvbmNhdChuPT09XCJyZWFkb25seVwiP1wicmVhZFwiOlwid3JpdGVcIixcIiBcIikuY29uY2F0KHRoaXMubmFtZSkpO2Z1bmN0aW9uIG8oaCxsLHApe2lmKCFwLnNjaGVtYVthXSl0aHJvdyBuZXcgRC5Ob3RGb3VuZChcIlRhYmxlIFwiK2ErXCIgbm90IHBhcnQgb2YgdHJhbnNhY3Rpb25cIik7cmV0dXJuIHQocC5pZGJ0cmFucyxwKX12YXIgcz1qZSgpO3RyeXt2YXIgYz1pJiZpLmRiLl9ub3ZpcD09PXRoaXMuZGIuX25vdmlwP2k9PT1rLnRyYW5zP2kuX3Byb21pc2UobixvLHIpOmhlKGZ1bmN0aW9uKCl7cmV0dXJuIGkuX3Byb21pc2UobixvLHIpfSx7dHJhbnM6aSx0cmFuc2xlc3M6ay50cmFuc2xlc3N8fGt9KTpxbih0aGlzLmRiLG4sW3RoaXMubmFtZV0sbyk7cmV0dXJuIHUmJihjLl9jb25zb2xlVGFzaz11LGM9Yy5jYXRjaChmdW5jdGlvbihoKXtyZXR1cm4gY29uc29sZS50cmFjZShoKSx6KGgpfSkpLGN9ZmluYWxseXtzJiZOZSgpfX0sZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpcztyZXR1cm4gbiYmbi5jb25zdHJ1Y3Rvcj09PU9iamVjdD90aGlzLndoZXJlKG4pLmZpcnN0KHQpOm49PW51bGw/eihuZXcgRC5UeXBlKFwiSW52YWxpZCBhcmd1bWVudCB0byBUYWJsZS5nZXQoKVwiKSk6dGhpcy5fdHJhbnMoXCJyZWFkb25seVwiLGZ1bmN0aW9uKGkpe3JldHVybiByLmNvcmUuZ2V0KHt0cmFuczppLGtleTpufSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gci5ob29rLnJlYWRpbmcuZmlyZShhKX0pfSkudGhlbih0KX0sZS5wcm90b3R5cGUud2hlcmU9ZnVuY3Rpb24obil7aWYodHlwZW9mIG49PVwic3RyaW5nXCIpcmV0dXJuIG5ldyB0aGlzLmRiLldoZXJlQ2xhdXNlKHRoaXMsbik7aWYoTChuKSlyZXR1cm4gbmV3IHRoaXMuZGIuV2hlcmVDbGF1c2UodGhpcyxcIltcIi5jb25jYXQobi5qb2luKFwiK1wiKSxcIl1cIikpO3ZhciB0PVUobik7aWYodC5sZW5ndGg9PT0xKXJldHVybiB0aGlzLndoZXJlKHRbMF0pLmVxdWFscyhuW3RbMF1dKTt2YXIgcj10aGlzLnNjaGVtYS5pbmRleGVzLmNvbmNhdCh0aGlzLnNjaGVtYS5wcmltS2V5KS5maWx0ZXIoZnVuY3Rpb24oaCl7aWYoaC5jb21wb3VuZCYmdC5ldmVyeShmdW5jdGlvbihwKXtyZXR1cm4gaC5rZXlQYXRoLmluZGV4T2YocCk+PTB9KSl7Zm9yKHZhciBsPTA7bDx0Lmxlbmd0aDsrK2wpaWYodC5pbmRleE9mKGgua2V5UGF0aFtsXSk9PT0tMSlyZXR1cm4hMTtyZXR1cm4hMH1yZXR1cm4hMX0pLnNvcnQoZnVuY3Rpb24oaCxsKXtyZXR1cm4gaC5rZXlQYXRoLmxlbmd0aC1sLmtleVBhdGgubGVuZ3RofSlbMF07aWYociYmdGhpcy5kYi5fbWF4S2V5IT09T2Upe3ZhciBpPXIua2V5UGF0aC5zbGljZSgwLHQubGVuZ3RoKTtyZXR1cm4gdGhpcy53aGVyZShpKS5lcXVhbHMoaS5tYXAoZnVuY3Rpb24oaCl7cmV0dXJuIG5baF19KSl9IXImJnRlJiZjb25zb2xlLndhcm4oXCJUaGUgcXVlcnkgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KG4pLFwiIG9uIFwiKS5jb25jYXQodGhpcy5uYW1lLFwiIHdvdWxkIGJlbmVmaXQgZnJvbSBhIFwiKStcImNvbXBvdW5kIGluZGV4IFtcIi5jb25jYXQodC5qb2luKFwiK1wiKSxcIl1cIikpO3ZhciBhPXRoaXMuc2NoZW1hLmlkeEJ5TmFtZTtmdW5jdGlvbiB1KGgsbCl7cmV0dXJuIEIoaCxsKT09PTB9dmFyIG89dC5yZWR1Y2UoZnVuY3Rpb24oaCxsKXt2YXIgcD1oWzBdLF89aFsxXSxmPWFbbF0sZD1uW2xdO3JldHVybltwfHxmLHB8fCFmP0RlKF8sZiYmZi5tdWx0aT9mdW5jdGlvbih2KXt2YXIgYj11ZSh2LGwpO3JldHVybiBMKGIpJiZiLnNvbWUoZnVuY3Rpb24obSl7cmV0dXJuIHUoZCxtKX0pfTpmdW5jdGlvbih2KXtyZXR1cm4gdShkLHVlKHYsbCkpfSk6X119LFtudWxsLG51bGxdKSxzPW9bMF0sYz1vWzFdO3JldHVybiBzP3RoaXMud2hlcmUocy5uYW1lKS5lcXVhbHMobltzLmtleVBhdGhdKS5maWx0ZXIoYyk6cj90aGlzLmZpbHRlcihjKTp0aGlzLndoZXJlKHQpLmVxdWFscyhcIlwiKX0sZS5wcm90b3R5cGUuZmlsdGVyPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnRvQ29sbGVjdGlvbigpLmFuZChuKX0sZS5wcm90b3R5cGUuY291bnQ9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMudG9Db2xsZWN0aW9uKCkuY291bnQobil9LGUucHJvdG90eXBlLm9mZnNldD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy50b0NvbGxlY3Rpb24oKS5vZmZzZXQobil9LGUucHJvdG90eXBlLmxpbWl0PWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnRvQ29sbGVjdGlvbigpLmxpbWl0KG4pfSxlLnByb3RvdHlwZS5lYWNoPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnRvQ29sbGVjdGlvbigpLmVhY2gobil9LGUucHJvdG90eXBlLnRvQXJyYXk9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMudG9Db2xsZWN0aW9uKCkudG9BcnJheShuKX0sZS5wcm90b3R5cGUudG9Db2xsZWN0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0aGlzLmRiLkNvbGxlY3Rpb24obmV3IHRoaXMuZGIuV2hlcmVDbGF1c2UodGhpcykpfSxlLnByb3RvdHlwZS5vcmRlckJ5PWZ1bmN0aW9uKG4pe3JldHVybiBuZXcgdGhpcy5kYi5Db2xsZWN0aW9uKG5ldyB0aGlzLmRiLldoZXJlQ2xhdXNlKHRoaXMsTChuKT9cIltcIi5jb25jYXQobi5qb2luKFwiK1wiKSxcIl1cIik6bikpfSxlLnByb3RvdHlwZS5yZXZlcnNlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9Db2xsZWN0aW9uKCkucmV2ZXJzZSgpfSxlLnByb3RvdHlwZS5tYXBUb0NsYXNzPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMscj10LmRiLGk9dC5uYW1lO3RoaXMuc2NoZW1hLm1hcHBlZENsYXNzPW4sbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBxdCYmKG49ZnVuY3Rpb24ocyl7WShjLHMpO2Z1bmN0aW9uIGMoKXtyZXR1cm4gcyE9PW51bGwmJnMuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoYy5wcm90b3R5cGUsXCJkYlwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcn0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxjLnByb3RvdHlwZS50YWJsZT1mdW5jdGlvbigpe3JldHVybiBpfSxjfShuKSk7Zm9yKHZhciBhPW5ldyBTZXQsdT1uLnByb3RvdHlwZTt1O3U9Q2UodSkpT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModSkuZm9yRWFjaChmdW5jdGlvbihzKXtyZXR1cm4gYS5hZGQocyl9KTt2YXIgbz1mdW5jdGlvbihzKXtpZighcylyZXR1cm4gczt2YXIgYz1PYmplY3QuY3JlYXRlKG4ucHJvdG90eXBlKTtmb3IodmFyIGggaW4gcylpZighYS5oYXMoaCkpdHJ5e2NbaF09c1toXX1jYXRjaHt9cmV0dXJuIGN9O3JldHVybiB0aGlzLnNjaGVtYS5yZWFkSG9vayYmdGhpcy5ob29rLnJlYWRpbmcudW5zdWJzY3JpYmUodGhpcy5zY2hlbWEucmVhZEhvb2spLHRoaXMuc2NoZW1hLnJlYWRIb29rPW8sdGhpcy5ob29rKFwicmVhZGluZ1wiLG8pLG59LGUucHJvdG90eXBlLmRlZmluZUNsYXNzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbih0KXtKKHRoaXMsdCl9cmV0dXJuIHRoaXMubWFwVG9DbGFzcyhuKX0sZS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpcyxpPXRoaXMuc2NoZW1hLnByaW1LZXksYT1pLmF1dG8sdT1pLmtleVBhdGgsbz1uO3JldHVybiB1JiZhJiYobz1ibih1KShuKSksdGhpcy5fdHJhbnMoXCJyZWFkd3JpdGVcIixmdW5jdGlvbihzKXtyZXR1cm4gci5jb3JlLm11dGF0ZSh7dHJhbnM6cyx0eXBlOlwiYWRkXCIsa2V5czp0IT1udWxsP1t0XTpudWxsLHZhbHVlczpbb119KX0pLnRoZW4oZnVuY3Rpb24ocyl7cmV0dXJuIHMubnVtRmFpbHVyZXM/Sy5yZWplY3Qocy5mYWlsdXJlc1swXSk6cy5sYXN0UmVzdWx0fSkudGhlbihmdW5jdGlvbihzKXtpZih1KXRyeXtaKG4sdSxzKX1jYXRjaHt9cmV0dXJuIHN9KX0sZS5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKG4sdCl7aWYodHlwZW9mIG49PVwib2JqZWN0XCImJiFMKG4pKXt2YXIgcj11ZShuLHRoaXMuc2NoZW1hLnByaW1LZXkua2V5UGF0aCk7cmV0dXJuIHI9PT12b2lkIDA/eihuZXcgRC5JbnZhbGlkQXJndW1lbnQoXCJHaXZlbiBvYmplY3QgZG9lcyBub3QgY29udGFpbiBpdHMgcHJpbWFyeSBrZXlcIikpOnRoaXMud2hlcmUoXCI6aWRcIikuZXF1YWxzKHIpLm1vZGlmeSh0KX1lbHNlIHJldHVybiB0aGlzLndoZXJlKFwiOmlkXCIpLmVxdWFscyhuKS5tb2RpZnkodCl9LGUucHJvdG90eXBlLnB1dD1mdW5jdGlvbihuLHQpe3ZhciByPXRoaXMsaT10aGlzLnNjaGVtYS5wcmltS2V5LGE9aS5hdXRvLHU9aS5rZXlQYXRoLG89bjtyZXR1cm4gdSYmYSYmKG89Ym4odSkobikpLHRoaXMuX3RyYW5zKFwicmVhZHdyaXRlXCIsZnVuY3Rpb24ocyl7cmV0dXJuIHIuY29yZS5tdXRhdGUoe3RyYW5zOnMsdHlwZTpcInB1dFwiLHZhbHVlczpbb10sa2V5czp0IT1udWxsP1t0XTpudWxsfSl9KS50aGVuKGZ1bmN0aW9uKHMpe3JldHVybiBzLm51bUZhaWx1cmVzP0sucmVqZWN0KHMuZmFpbHVyZXNbMF0pOnMubGFzdFJlc3VsdH0pLnRoZW4oZnVuY3Rpb24ocyl7aWYodSl0cnl7WihuLHUscyl9Y2F0Y2h7fXJldHVybiBzfSl9LGUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzO3JldHVybiB0aGlzLl90cmFucyhcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKHIpe3JldHVybiB0LmNvcmUubXV0YXRlKHt0cmFuczpyLHR5cGU6XCJkZWxldGVcIixrZXlzOltuXX0pfSkudGhlbihmdW5jdGlvbihyKXtyZXR1cm4gci5udW1GYWlsdXJlcz9LLnJlamVjdChyLmZhaWx1cmVzWzBdKTp2b2lkIDB9KX0sZS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3JldHVybiB0aGlzLl90cmFucyhcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKHQpe3JldHVybiBuLmNvcmUubXV0YXRlKHt0cmFuczp0LHR5cGU6XCJkZWxldGVSYW5nZVwiLHJhbmdlOlp0fSl9KS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiB0Lm51bUZhaWx1cmVzP0sucmVqZWN0KHQuZmFpbHVyZXNbMF0pOnZvaWQgMH0pfSxlLnByb3RvdHlwZS5idWxrR2V0PWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXM7cmV0dXJuIHRoaXMuX3RyYW5zKFwicmVhZG9ubHlcIixmdW5jdGlvbihyKXtyZXR1cm4gdC5jb3JlLmdldE1hbnkoe2tleXM6bix0cmFuczpyfSkudGhlbihmdW5jdGlvbihpKXtyZXR1cm4gaS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHQuaG9vay5yZWFkaW5nLmZpcmUoYSl9KX0pfSl9LGUucHJvdG90eXBlLmJ1bGtBZGQ9ZnVuY3Rpb24obix0LHIpe3ZhciBpPXRoaXMsYT1BcnJheS5pc0FycmF5KHQpP3Q6dm9pZCAwO3I9cnx8KGE/dm9pZCAwOnQpO3ZhciB1PXI/ci5hbGxLZXlzOnZvaWQgMDtyZXR1cm4gdGhpcy5fdHJhbnMoXCJyZWFkd3JpdGVcIixmdW5jdGlvbihvKXt2YXIgcz1pLnNjaGVtYS5wcmltS2V5LGM9cy5hdXRvLGg9cy5rZXlQYXRoO2lmKGgmJmEpdGhyb3cgbmV3IEQuSW52YWxpZEFyZ3VtZW50KFwiYnVsa0FkZCgpOiBrZXlzIGFyZ3VtZW50IGludmFsaWQgb24gdGFibGVzIHdpdGggaW5ib3VuZCBrZXlzXCIpO2lmKGEmJmEubGVuZ3RoIT09bi5sZW5ndGgpdGhyb3cgbmV3IEQuSW52YWxpZEFyZ3VtZW50KFwiQXJndW1lbnRzIG9iamVjdHMgYW5kIGtleXMgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aFwiKTt2YXIgbD1uLmxlbmd0aCxwPWgmJmM/bi5tYXAoYm4oaCkpOm47cmV0dXJuIGkuY29yZS5tdXRhdGUoe3RyYW5zOm8sdHlwZTpcImFkZFwiLGtleXM6YSx2YWx1ZXM6cCx3YW50UmVzdWx0czp1fSkudGhlbihmdW5jdGlvbihfKXt2YXIgZj1fLm51bUZhaWx1cmVzLGQ9Xy5yZXN1bHRzLHY9Xy5sYXN0UmVzdWx0LGI9Xy5mYWlsdXJlcyxtPXU/ZDp2O2lmKGY9PT0wKXJldHVybiBtO3Rocm93IG5ldyBGZShcIlwiLmNvbmNhdChpLm5hbWUsXCIuYnVsa0FkZCgpOiBcIikuY29uY2F0KGYsXCIgb2YgXCIpLmNvbmNhdChsLFwiIG9wZXJhdGlvbnMgZmFpbGVkXCIpLGIpfSl9KX0sZS5wcm90b3R5cGUuYnVsa1B1dD1mdW5jdGlvbihuLHQscil7dmFyIGk9dGhpcyxhPUFycmF5LmlzQXJyYXkodCk/dDp2b2lkIDA7cj1yfHwoYT92b2lkIDA6dCk7dmFyIHU9cj9yLmFsbEtleXM6dm9pZCAwO3JldHVybiB0aGlzLl90cmFucyhcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKG8pe3ZhciBzPWkuc2NoZW1hLnByaW1LZXksYz1zLmF1dG8saD1zLmtleVBhdGg7aWYoaCYmYSl0aHJvdyBuZXcgRC5JbnZhbGlkQXJndW1lbnQoXCJidWxrUHV0KCk6IGtleXMgYXJndW1lbnQgaW52YWxpZCBvbiB0YWJsZXMgd2l0aCBpbmJvdW5kIGtleXNcIik7aWYoYSYmYS5sZW5ndGghPT1uLmxlbmd0aCl0aHJvdyBuZXcgRC5JbnZhbGlkQXJndW1lbnQoXCJBcmd1bWVudHMgb2JqZWN0cyBhbmQga2V5cyBtdXN0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoXCIpO3ZhciBsPW4ubGVuZ3RoLHA9aCYmYz9uLm1hcChibihoKSk6bjtyZXR1cm4gaS5jb3JlLm11dGF0ZSh7dHJhbnM6byx0eXBlOlwicHV0XCIsa2V5czphLHZhbHVlczpwLHdhbnRSZXN1bHRzOnV9KS50aGVuKGZ1bmN0aW9uKF8pe3ZhciBmPV8ubnVtRmFpbHVyZXMsZD1fLnJlc3VsdHMsdj1fLmxhc3RSZXN1bHQsYj1fLmZhaWx1cmVzLG09dT9kOnY7aWYoZj09PTApcmV0dXJuIG07dGhyb3cgbmV3IEZlKFwiXCIuY29uY2F0KGkubmFtZSxcIi5idWxrUHV0KCk6IFwiKS5jb25jYXQoZixcIiBvZiBcIikuY29uY2F0KGwsXCIgb3BlcmF0aW9ucyBmYWlsZWRcIiksYil9KX0pfSxlLnByb3RvdHlwZS5idWxrVXBkYXRlPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMscj10aGlzLmNvcmUsaT1uLm1hcChmdW5jdGlvbihvKXtyZXR1cm4gby5rZXl9KSxhPW4ubWFwKGZ1bmN0aW9uKG8pe3JldHVybiBvLmNoYW5nZXN9KSx1PVtdO3JldHVybiB0aGlzLl90cmFucyhcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKG8pe3JldHVybiByLmdldE1hbnkoe3RyYW5zOm8sa2V5czppLGNhY2hlOlwiY2xvbmVcIn0pLnRoZW4oZnVuY3Rpb24ocyl7dmFyIGM9W10saD1bXTtuLmZvckVhY2goZnVuY3Rpb24ocCxfKXt2YXIgZj1wLmtleSxkPXAuY2hhbmdlcyx2PXNbX107aWYodil7Zm9yKHZhciBiPTAsbT1PYmplY3Qua2V5cyhkKTtiPG0ubGVuZ3RoO2IrKyl7dmFyIGc9bVtiXSx3PWRbZ107aWYoZz09PXQuc2NoZW1hLnByaW1LZXkua2V5UGF0aCl7aWYoQih3LGYpIT09MCl0aHJvdyBuZXcgRC5Db25zdHJhaW50KFwiQ2Fubm90IHVwZGF0ZSBwcmltYXJ5IGtleSBpbiBidWxrVXBkYXRlKClcIil9ZWxzZSBaKHYsZyx3KX11LnB1c2goXyksYy5wdXNoKGYpLGgucHVzaCh2KX19KTt2YXIgbD1jLmxlbmd0aDtyZXR1cm4gci5tdXRhdGUoe3RyYW5zOm8sdHlwZTpcInB1dFwiLGtleXM6Yyx2YWx1ZXM6aCx1cGRhdGVzOntrZXlzOmksY2hhbmdlU3BlY3M6YX19KS50aGVuKGZ1bmN0aW9uKHApe3ZhciBfPXAubnVtRmFpbHVyZXMsZj1wLmZhaWx1cmVzO2lmKF89PT0wKXJldHVybiBsO2Zvcih2YXIgZD0wLHY9T2JqZWN0LmtleXMoZik7ZDx2Lmxlbmd0aDtkKyspe3ZhciBiPXZbZF0sbT11W051bWJlcihiKV07aWYobSE9bnVsbCl7dmFyIGc9ZltiXTtkZWxldGUgZltiXSxmW21dPWd9fXRocm93IG5ldyBGZShcIlwiLmNvbmNhdCh0Lm5hbWUsXCIuYnVsa1VwZGF0ZSgpOiBcIikuY29uY2F0KF8sXCIgb2YgXCIpLmNvbmNhdChsLFwiIG9wZXJhdGlvbnMgZmFpbGVkXCIpLGYpfSl9KX0pfSxlLnByb3RvdHlwZS5idWxrRGVsZXRlPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMscj1uLmxlbmd0aDtyZXR1cm4gdGhpcy5fdHJhbnMoXCJyZWFkd3JpdGVcIixmdW5jdGlvbihpKXtyZXR1cm4gdC5jb3JlLm11dGF0ZSh7dHJhbnM6aSx0eXBlOlwiZGVsZXRlXCIsa2V5czpufSl9KS50aGVuKGZ1bmN0aW9uKGkpe3ZhciBhPWkubnVtRmFpbHVyZXMsdT1pLmxhc3RSZXN1bHQsbz1pLmZhaWx1cmVzO2lmKGE9PT0wKXJldHVybiB1O3Rocm93IG5ldyBGZShcIlwiLmNvbmNhdCh0Lm5hbWUsXCIuYnVsa0RlbGV0ZSgpOiBcIikuY29uY2F0KGEsXCIgb2YgXCIpLmNvbmNhdChyLFwiIG9wZXJhdGlvbnMgZmFpbGVkXCIpLG8pfSl9LGV9KCk7ZnVuY3Rpb24gR2UoZSl7dmFyIG49e30sdD1mdW5jdGlvbihvLHMpe2lmKHMpe2Zvcih2YXIgYz1hcmd1bWVudHMubGVuZ3RoLGg9bmV3IEFycmF5KGMtMSk7LS1jOyloW2MtMV09YXJndW1lbnRzW2NdO3JldHVybiBuW29dLnN1YnNjcmliZS5hcHBseShudWxsLGgpLGV9ZWxzZSBpZih0eXBlb2Ygbz09XCJzdHJpbmdcIilyZXR1cm4gbltvXX07dC5hZGRFdmVudFR5cGU9YTtmb3IodmFyIHI9MSxpPWFyZ3VtZW50cy5sZW5ndGg7cjxpOysrcilhKGFyZ3VtZW50c1tyXSk7cmV0dXJuIHQ7ZnVuY3Rpb24gYShvLHMsYyl7aWYodHlwZW9mIG89PVwib2JqZWN0XCIpcmV0dXJuIHUobyk7c3x8KHM9WXIpLGN8fChjPUYpO3ZhciBoPXtzdWJzY3JpYmVyczpbXSxmaXJlOmMsc3Vic2NyaWJlOmZ1bmN0aW9uKGwpe2guc3Vic2NyaWJlcnMuaW5kZXhPZihsKT09PS0xJiYoaC5zdWJzY3JpYmVycy5wdXNoKGwpLGguZmlyZT1zKGguZmlyZSxsKSl9LHVuc3Vic2NyaWJlOmZ1bmN0aW9uKGwpe2guc3Vic2NyaWJlcnM9aC5zdWJzY3JpYmVycy5maWx0ZXIoZnVuY3Rpb24ocCl7cmV0dXJuIHAhPT1sfSksaC5maXJlPWguc3Vic2NyaWJlcnMucmVkdWNlKHMsYyl9fTtyZXR1cm4gbltvXT10W29dPWgsaH1mdW5jdGlvbiB1KG8pe1UobykuZm9yRWFjaChmdW5jdGlvbihzKXt2YXIgYz1vW3NdO2lmKEwoYykpYShzLG9bc11bMF0sb1tzXVsxXSk7ZWxzZSBpZihjPT09XCJhc2FwXCIpdmFyIGg9YShzLCRlLGZ1bmN0aW9uKCl7Zm9yKHZhciBwPWFyZ3VtZW50cy5sZW5ndGgsXz1uZXcgQXJyYXkocCk7cC0tOylfW3BdPWFyZ3VtZW50c1twXTtoLnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24oZil7SXQoZnVuY3Rpb24oKXtmLmFwcGx5KG51bGwsXyl9KX0pfSk7ZWxzZSB0aHJvdyBuZXcgRC5JbnZhbGlkQXJndW1lbnQoXCJJbnZhbGlkIGV2ZW50IGNvbmZpZ1wiKX0pfX1mdW5jdGlvbiBKZShlLG4pe3JldHVybiBSZShuKS5mcm9tKHtwcm90b3R5cGU6ZX0pLG59ZnVuY3Rpb24gYWkoZSl7cmV0dXJuIEplKHRyLnByb3RvdHlwZSxmdW5jdGlvbih0LHIsaSl7dGhpcy5kYj1lLHRoaXMuX3R4PWksdGhpcy5uYW1lPXQsdGhpcy5zY2hlbWE9cix0aGlzLmhvb2s9ZS5fYWxsVGFibGVzW3RdP2UuX2FsbFRhYmxlc1t0XS5ob29rOkdlKG51bGwse2NyZWF0aW5nOltWcixGXSxyZWFkaW5nOltMciwkZV0sdXBkYXRpbmc6W1dyLEZdLGRlbGV0aW5nOlt6cixGXX0pfSl9ZnVuY3Rpb24gemUoZSxuKXtyZXR1cm4hKGUuZmlsdGVyfHxlLmFsZ29yaXRobXx8ZS5vcikmJihuP2UuanVzdExpbWl0OiFlLnJlcGxheUZpbHRlcil9ZnVuY3Rpb24gcnQoZSxuKXtlLmZpbHRlcj1EZShlLmZpbHRlcixuKX1mdW5jdGlvbiBpdChlLG4sdCl7dmFyIHI9ZS5yZXBsYXlGaWx0ZXI7ZS5yZXBsYXlGaWx0ZXI9cj9mdW5jdGlvbigpe3JldHVybiBEZShyKCksbigpKX06bixlLmp1c3RMaW1pdD10JiYhcn1mdW5jdGlvbiB1aShlLG4pe2UuaXNNYXRjaD1EZShlLmlzTWF0Y2gsbil9ZnVuY3Rpb24gd24oZSxuKXtpZihlLmlzUHJpbUtleSlyZXR1cm4gbi5wcmltYXJ5S2V5O3ZhciB0PW4uZ2V0SW5kZXhCeUtleVBhdGgoZS5pbmRleCk7aWYoIXQpdGhyb3cgbmV3IEQuU2NoZW1hKFwiS2V5UGF0aCBcIitlLmluZGV4K1wiIG9uIG9iamVjdCBzdG9yZSBcIituLm5hbWUrXCIgaXMgbm90IGluZGV4ZWRcIik7cmV0dXJuIHR9ZnVuY3Rpb24gcnIoZSxuLHQpe3ZhciByPXduKGUsbi5zY2hlbWEpO3JldHVybiBuLm9wZW5DdXJzb3Ioe3RyYW5zOnQsdmFsdWVzOiFlLmtleXNPbmx5LHJldmVyc2U6ZS5kaXI9PT1cInByZXZcIix1bmlxdWU6ISFlLnVuaXF1ZSxxdWVyeTp7aW5kZXg6cixyYW5nZTplLnJhbmdlfX0pfWZ1bmN0aW9uIF9uKGUsbix0LHIpe3ZhciBpPWUucmVwbGF5RmlsdGVyP0RlKGUuZmlsdGVyLGUucmVwbGF5RmlsdGVyKCkpOmUuZmlsdGVyO2lmKGUub3Ipe3ZhciBhPXt9LHU9ZnVuY3Rpb24obyxzLGMpe2lmKCFpfHxpKHMsYyxmdW5jdGlvbihwKXtyZXR1cm4gcy5zdG9wKHApfSxmdW5jdGlvbihwKXtyZXR1cm4gcy5mYWlsKHApfSkpe3ZhciBoPXMucHJpbWFyeUtleSxsPVwiXCIraDtsPT09XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiJiYobD1cIlwiK25ldyBVaW50OEFycmF5KGgpKSxYKGEsbCl8fChhW2xdPSEwLG4obyxzLGMpKX19O3JldHVybiBQcm9taXNlLmFsbChbZS5vci5faXRlcmF0ZSh1LHQpLGlyKHJyKGUscix0KSxlLmFsZ29yaXRobSx1LCFlLmtleXNPbmx5JiZlLnZhbHVlTWFwcGVyKV0pfWVsc2UgcmV0dXJuIGlyKHJyKGUscix0KSxEZShlLmFsZ29yaXRobSxpKSxuLCFlLmtleXNPbmx5JiZlLnZhbHVlTWFwcGVyKX1mdW5jdGlvbiBpcihlLG4sdCxyKXt2YXIgaT1yP2Z1bmN0aW9uKHUsbyxzKXtyZXR1cm4gdChyKHUpLG8scyl9OnQsYT1qKGkpO3JldHVybiBlLnRoZW4oZnVuY3Rpb24odSl7aWYodSlyZXR1cm4gdS5zdGFydChmdW5jdGlvbigpe3ZhciBvPWZ1bmN0aW9uKCl7cmV0dXJuIHUuY29udGludWUoKX07KCFufHxuKHUsZnVuY3Rpb24ocyl7cmV0dXJuIG89c30sZnVuY3Rpb24ocyl7dS5zdG9wKHMpLG89Rn0sZnVuY3Rpb24ocyl7dS5mYWlsKHMpLG89Rn0pKSYmYSh1LnZhbHVlLHUsZnVuY3Rpb24ocyl7cmV0dXJuIG89c30pLG8oKX0pfSl9dmFyIFplPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShuKXt0aGlzW1wiQEBwcm9wbW9kXCJdPW59cmV0dXJuIGUucHJvdG90eXBlLmV4ZWN1dGU9ZnVuY3Rpb24obil7dmFyIHQscj10aGlzW1wiQEBwcm9wbW9kXCJdO2lmKHIuYWRkIT09dm9pZCAwKXt2YXIgaT1yLmFkZDtpZihMKGkpKXJldHVybiB3ZSh3ZShbXSxMKG4pP246W10sITApLGksITApLnNvcnQoKTtpZih0eXBlb2YgaT09XCJudW1iZXJcIilyZXR1cm4oTnVtYmVyKG4pfHwwKStpO2lmKHR5cGVvZiBpPT1cImJpZ2ludFwiKXRyeXtyZXR1cm4gQmlnSW50KG4pK2l9Y2F0Y2h7cmV0dXJuIEJpZ0ludCgwKStpfXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHRlcm0gXCIuY29uY2F0KGkpKX1pZihyLnJlbW92ZSE9PXZvaWQgMCl7dmFyIGE9ci5yZW1vdmU7aWYoTChhKSlyZXR1cm4gTChuKT9uLmZpbHRlcihmdW5jdGlvbihvKXtyZXR1cm4hYS5pbmNsdWRlcyhvKX0pLnNvcnQoKTpbXTtpZih0eXBlb2YgYT09XCJudW1iZXJcIilyZXR1cm4gTnVtYmVyKG4pLWE7aWYodHlwZW9mIGE9PVwiYmlnaW50XCIpdHJ5e3JldHVybiBCaWdJbnQobiktYX1jYXRjaHtyZXR1cm4gQmlnSW50KDApLWF9dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgc3VidHJhaGVuZCBcIi5jb25jYXQoYSkpfXZhciB1PSh0PXIucmVwbGFjZVByZWZpeCk9PT1udWxsfHx0PT09dm9pZCAwP3ZvaWQgMDp0WzBdO3JldHVybiB1JiZ0eXBlb2Ygbj09XCJzdHJpbmdcIiYmbi5zdGFydHNXaXRoKHUpP3IucmVwbGFjZVByZWZpeFsxXStuLnN1YnN0cmluZyh1Lmxlbmd0aCk6bn0sZX0oKSxvaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9cmV0dXJuIGUucHJvdG90eXBlLl9yZWFkPWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpcy5fY3R4O3JldHVybiByLmVycm9yP3IudGFibGUuX3RyYW5zKG51bGwsei5iaW5kKG51bGwsci5lcnJvcikpOnIudGFibGUuX3RyYW5zKFwicmVhZG9ubHlcIixuKS50aGVuKHQpfSxlLnByb3RvdHlwZS5fd3JpdGU9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcy5fY3R4O3JldHVybiB0LmVycm9yP3QudGFibGUuX3RyYW5zKG51bGwsei5iaW5kKG51bGwsdC5lcnJvcikpOnQudGFibGUuX3RyYW5zKFwicmVhZHdyaXRlXCIsbixcImxvY2tlZFwiKX0sZS5wcm90b3R5cGUuX2FkZEFsZ29yaXRobT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLl9jdHg7dC5hbGdvcml0aG09RGUodC5hbGdvcml0aG0sbil9LGUucHJvdG90eXBlLl9pdGVyYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIF9uKHRoaXMuX2N0eCxuLHQsdGhpcy5fY3R4LnRhYmxlLmNvcmUpfSxlLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbihuKXt2YXIgdD1PYmplY3QuY3JlYXRlKHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKSxyPU9iamVjdC5jcmVhdGUodGhpcy5fY3R4KTtyZXR1cm4gbiYmSihyLG4pLHQuX2N0eD1yLHR9LGUucHJvdG90eXBlLnJhdz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9jdHgudmFsdWVNYXBwZXI9bnVsbCx0aGlzfSxlLnByb3RvdHlwZS5lYWNoPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuX2N0eDtyZXR1cm4gdGhpcy5fcmVhZChmdW5jdGlvbihyKXtyZXR1cm4gX24odCxuLHIsdC50YWJsZS5jb3JlKX0pfSxlLnByb3RvdHlwZS5jb3VudD1mdW5jdGlvbihuKXt2YXIgdD10aGlzO3JldHVybiB0aGlzLl9yZWFkKGZ1bmN0aW9uKHIpe3ZhciBpPXQuX2N0eCxhPWkudGFibGUuY29yZTtpZih6ZShpLCEwKSlyZXR1cm4gYS5jb3VudCh7dHJhbnM6cixxdWVyeTp7aW5kZXg6d24oaSxhLnNjaGVtYSkscmFuZ2U6aS5yYW5nZX19KS50aGVuKGZ1bmN0aW9uKG8pe3JldHVybiBNYXRoLm1pbihvLGkubGltaXQpfSk7dmFyIHU9MDtyZXR1cm4gX24oaSxmdW5jdGlvbigpe3JldHVybisrdSwhMX0scixhKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KX0pLnRoZW4obil9LGUucHJvdG90eXBlLnNvcnRCeT1mdW5jdGlvbihuLHQpe3ZhciByPW4uc3BsaXQoXCIuXCIpLnJldmVyc2UoKSxpPXJbMF0sYT1yLmxlbmd0aC0xO2Z1bmN0aW9uIHUoYyxoKXtyZXR1cm4gaD91KGNbcltoXV0saC0xKTpjW2ldfXZhciBvPXRoaXMuX2N0eC5kaXI9PT1cIm5leHRcIj8xOi0xO2Z1bmN0aW9uIHMoYyxoKXt2YXIgbD11KGMsYSkscD11KGgsYSk7cmV0dXJuIEIobCxwKSpvfXJldHVybiB0aGlzLnRvQXJyYXkoZnVuY3Rpb24oYyl7cmV0dXJuIGMuc29ydChzKX0pLnRoZW4odCl9LGUucHJvdG90eXBlLnRvQXJyYXk9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5fcmVhZChmdW5jdGlvbihyKXt2YXIgaT10Ll9jdHg7aWYoaS5kaXI9PT1cIm5leHRcIiYmemUoaSwhMCkmJmkubGltaXQ+MCl7dmFyIGE9aS52YWx1ZU1hcHBlcix1PXduKGksaS50YWJsZS5jb3JlLnNjaGVtYSk7cmV0dXJuIGkudGFibGUuY29yZS5xdWVyeSh7dHJhbnM6cixsaW1pdDppLmxpbWl0LHZhbHVlczohMCxxdWVyeTp7aW5kZXg6dSxyYW5nZTppLnJhbmdlfX0pLnRoZW4oZnVuY3Rpb24ocyl7dmFyIGM9cy5yZXN1bHQ7cmV0dXJuIGE/Yy5tYXAoYSk6Y30pfWVsc2V7dmFyIG89W107cmV0dXJuIF9uKGksZnVuY3Rpb24ocyl7cmV0dXJuIG8ucHVzaChzKX0scixpLnRhYmxlLmNvcmUpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gb30pfX0sbil9LGUucHJvdG90eXBlLm9mZnNldD1mdW5jdGlvbihuKXt2YXIgdD10aGlzLl9jdHg7cmV0dXJuIG48PTA/dGhpczoodC5vZmZzZXQrPW4semUodCk/aXQodCxmdW5jdGlvbigpe3ZhciByPW47cmV0dXJuIGZ1bmN0aW9uKGksYSl7cmV0dXJuIHI9PT0wPyEwOnI9PT0xPygtLXIsITEpOihhKGZ1bmN0aW9uKCl7aS5hZHZhbmNlKHIpLHI9MH0pLCExKX19KTppdCh0LGZ1bmN0aW9uKCl7dmFyIHI9bjtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4tLXI8MH19KSx0aGlzKX0sZS5wcm90b3R5cGUubGltaXQ9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuX2N0eC5saW1pdD1NYXRoLm1pbih0aGlzLl9jdHgubGltaXQsbiksaXQodGhpcy5fY3R4LGZ1bmN0aW9uKCl7dmFyIHQ9bjtyZXR1cm4gZnVuY3Rpb24ocixpLGEpe3JldHVybi0tdDw9MCYmaShhKSx0Pj0wfX0sITApLHRoaXN9LGUucHJvdG90eXBlLnVudGlsPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIHJ0KHRoaXMuX2N0eCxmdW5jdGlvbihyLGksYSl7cmV0dXJuIG4oci52YWx1ZSk/KGkoYSksdCk6ITB9KSx0aGlzfSxlLnByb3RvdHlwZS5maXJzdD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5saW1pdCgxKS50b0FycmF5KGZ1bmN0aW9uKHQpe3JldHVybiB0WzBdfSkudGhlbihuKX0sZS5wcm90b3R5cGUubGFzdD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5yZXZlcnNlKCkuZmlyc3Qobil9LGUucHJvdG90eXBlLmZpbHRlcj1mdW5jdGlvbihuKXtyZXR1cm4gcnQodGhpcy5fY3R4LGZ1bmN0aW9uKHQpe3JldHVybiBuKHQudmFsdWUpfSksdWkodGhpcy5fY3R4LG4pLHRoaXN9LGUucHJvdG90eXBlLmFuZD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5maWx0ZXIobil9LGUucHJvdG90eXBlLm9yPWZ1bmN0aW9uKG4pe3JldHVybiBuZXcgdGhpcy5kYi5XaGVyZUNsYXVzZSh0aGlzLl9jdHgudGFibGUsbix0aGlzKX0sZS5wcm90b3R5cGUucmV2ZXJzZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9jdHguZGlyPXRoaXMuX2N0eC5kaXI9PT1cInByZXZcIj9cIm5leHRcIjpcInByZXZcIix0aGlzLl9vbmRpcmVjdGlvbmNoYW5nZSYmdGhpcy5fb25kaXJlY3Rpb25jaGFuZ2UodGhpcy5fY3R4LmRpciksdGhpc30sZS5wcm90b3R5cGUuZGVzYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnJldmVyc2UoKX0sZS5wcm90b3R5cGUuZWFjaEtleT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLl9jdHg7cmV0dXJuIHQua2V5c09ubHk9IXQuaXNNYXRjaCx0aGlzLmVhY2goZnVuY3Rpb24ocixpKXtuKGkua2V5LGkpfSl9LGUucHJvdG90eXBlLmVhY2hVbmlxdWVLZXk9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuX2N0eC51bmlxdWU9XCJ1bmlxdWVcIix0aGlzLmVhY2hLZXkobil9LGUucHJvdG90eXBlLmVhY2hQcmltYXJ5S2V5PWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuX2N0eDtyZXR1cm4gdC5rZXlzT25seT0hdC5pc01hdGNoLHRoaXMuZWFjaChmdW5jdGlvbihyLGkpe24oaS5wcmltYXJ5S2V5LGkpfSl9LGUucHJvdG90eXBlLmtleXM9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcy5fY3R4O3Qua2V5c09ubHk9IXQuaXNNYXRjaDt2YXIgcj1bXTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGksYSl7ci5wdXNoKGEua2V5KX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gcn0pLnRoZW4obil9LGUucHJvdG90eXBlLnByaW1hcnlLZXlzPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuX2N0eDtpZih0LmRpcj09PVwibmV4dFwiJiZ6ZSh0LCEwKSYmdC5saW1pdD4wKXJldHVybiB0aGlzLl9yZWFkKGZ1bmN0aW9uKGkpe3ZhciBhPXduKHQsdC50YWJsZS5jb3JlLnNjaGVtYSk7cmV0dXJuIHQudGFibGUuY29yZS5xdWVyeSh7dHJhbnM6aSx2YWx1ZXM6ITEsbGltaXQ6dC5saW1pdCxxdWVyeTp7aW5kZXg6YSxyYW5nZTp0LnJhbmdlfX0pfSkudGhlbihmdW5jdGlvbihpKXt2YXIgYT1pLnJlc3VsdDtyZXR1cm4gYX0pLnRoZW4obik7dC5rZXlzT25seT0hdC5pc01hdGNoO3ZhciByPVtdO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSxhKXtyLnB1c2goYS5wcmltYXJ5S2V5KX0pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gcn0pLnRoZW4obil9LGUucHJvdG90eXBlLnVuaXF1ZUtleXM9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuX2N0eC51bmlxdWU9XCJ1bmlxdWVcIix0aGlzLmtleXMobil9LGUucHJvdG90eXBlLmZpcnN0S2V5PWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLmxpbWl0KDEpLmtleXMoZnVuY3Rpb24odCl7cmV0dXJuIHRbMF19KS50aGVuKG4pfSxlLnByb3RvdHlwZS5sYXN0S2V5PWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnJldmVyc2UoKS5maXJzdEtleShuKX0sZS5wcm90b3R5cGUuZGlzdGluY3Q9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLl9jdHgsdD1uLmluZGV4JiZuLnRhYmxlLnNjaGVtYS5pZHhCeU5hbWVbbi5pbmRleF07aWYoIXR8fCF0Lm11bHRpKXJldHVybiB0aGlzO3ZhciByPXt9O3JldHVybiBydCh0aGlzLl9jdHgsZnVuY3Rpb24oaSl7dmFyIGE9aS5wcmltYXJ5S2V5LnRvU3RyaW5nKCksdT1YKHIsYSk7cmV0dXJuIHJbYV09ITAsIXV9KSx0aGlzfSxlLnByb3RvdHlwZS5tb2RpZnk9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxyPXRoaXMuX2N0eDtyZXR1cm4gdGhpcy5fd3JpdGUoZnVuY3Rpb24oaSl7dmFyIGE7aWYodHlwZW9mIG49PVwiZnVuY3Rpb25cIilhPW47ZWxzZXt2YXIgdT1VKG4pLG89dS5sZW5ndGg7YT1mdW5jdGlvbihtKXtmb3IodmFyIGc9ITEsdz0wO3c8bzsrK3cpe3ZhciB5PXVbd10seD1uW3ldLFM9dWUobSx5KTt4IGluc3RhbmNlb2YgWmU/KFoobSx5LHguZXhlY3V0ZShTKSksZz0hMCk6UyE9PXgmJihaKG0seSx4KSxnPSEwKX1yZXR1cm4gZ319dmFyIHM9ci50YWJsZS5jb3JlLGM9cy5zY2hlbWEucHJpbWFyeUtleSxoPWMub3V0Ym91bmQsbD1jLmV4dHJhY3RLZXkscD0yMDAsXz10LmRiLl9vcHRpb25zLm1vZGlmeUNodW5rU2l6ZTtfJiYodHlwZW9mIF89PVwib2JqZWN0XCI/cD1fW3MubmFtZV18fF9bXCIqXCJdfHwyMDA6cD1fKTt2YXIgZj1bXSxkPTAsdj1bXSxiPWZ1bmN0aW9uKG0sZyl7dmFyIHc9Zy5mYWlsdXJlcyx5PWcubnVtRmFpbHVyZXM7ZCs9bS15O2Zvcih2YXIgeD0wLFM9VSh3KTt4PFMubGVuZ3RoO3grKyl7dmFyIEU9U1t4XTtmLnB1c2god1tFXSl9fTtyZXR1cm4gdC5jbG9uZSgpLnByaW1hcnlLZXlzKCkudGhlbihmdW5jdGlvbihtKXt2YXIgZz16ZShyKSYmci5saW1pdD09PTEvMCYmKHR5cGVvZiBuIT1cImZ1bmN0aW9uXCJ8fG49PT1hdCkmJntpbmRleDpyLmluZGV4LHJhbmdlOnIucmFuZ2V9LHc9ZnVuY3Rpb24oeSl7dmFyIHg9TWF0aC5taW4ocCxtLmxlbmd0aC15KTtyZXR1cm4gcy5nZXRNYW55KHt0cmFuczppLGtleXM6bS5zbGljZSh5LHkreCksY2FjaGU6XCJpbW11dGFibGVcIn0pLnRoZW4oZnVuY3Rpb24oUyl7Zm9yKHZhciBFPVtdLFA9W10sUj1oP1tdOm51bGwsQT1bXSxJPTA7STx4OysrSSl7dmFyIFQ9U1tJXSxNPXt2YWx1ZTpfZShUKSxwcmltS2V5Om1beStJXX07YS5jYWxsKE0sTS52YWx1ZSxNKSE9PSExJiYoTS52YWx1ZT09bnVsbD9BLnB1c2gobVt5K0ldKTohaCYmQihsKFQpLGwoTS52YWx1ZSkpIT09MD8oQS5wdXNoKG1beStJXSksRS5wdXNoKE0udmFsdWUpKTooUC5wdXNoKE0udmFsdWUpLGgmJlIucHVzaChtW3krSV0pKSl9cmV0dXJuIFByb21pc2UucmVzb2x2ZShFLmxlbmd0aD4wJiZzLm11dGF0ZSh7dHJhbnM6aSx0eXBlOlwiYWRkXCIsdmFsdWVzOkV9KS50aGVuKGZ1bmN0aW9uKE8pe2Zvcih2YXIgViBpbiBPLmZhaWx1cmVzKUEuc3BsaWNlKHBhcnNlSW50KFYpLDEpO2IoRS5sZW5ndGgsTyl9KSkudGhlbihmdW5jdGlvbigpe3JldHVybihQLmxlbmd0aD4wfHxnJiZ0eXBlb2Ygbj09XCJvYmplY3RcIikmJnMubXV0YXRlKHt0cmFuczppLHR5cGU6XCJwdXRcIixrZXlzOlIsdmFsdWVzOlAsY3JpdGVyaWE6ZyxjaGFuZ2VTcGVjOnR5cGVvZiBuIT1cImZ1bmN0aW9uXCImJm4saXNBZGRpdGlvbmFsQ2h1bms6eT4wfSkudGhlbihmdW5jdGlvbihPKXtyZXR1cm4gYihQLmxlbmd0aCxPKX0pfSkudGhlbihmdW5jdGlvbigpe3JldHVybihBLmxlbmd0aD4wfHxnJiZuPT09YXQpJiZzLm11dGF0ZSh7dHJhbnM6aSx0eXBlOlwiZGVsZXRlXCIsa2V5czpBLGNyaXRlcmlhOmcsaXNBZGRpdGlvbmFsQ2h1bms6eT4wfSkudGhlbihmdW5jdGlvbihPKXtyZXR1cm4gYihBLmxlbmd0aCxPKX0pfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBtLmxlbmd0aD55K3gmJncoeStwKX0pfSl9O3JldHVybiB3KDApLnRoZW4oZnVuY3Rpb24oKXtpZihmLmxlbmd0aD4wKXRocm93IG5ldyBzbihcIkVycm9yIG1vZGlmeWluZyBvbmUgb3IgbW9yZSBvYmplY3RzXCIsZixkLHYpO3JldHVybiBtLmxlbmd0aH0pfSl9KX0sZS5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fY3R4LHQ9bi5yYW5nZTtyZXR1cm4gemUobikmJihuLmlzUHJpbUtleXx8dC50eXBlPT09Myk/dGhpcy5fd3JpdGUoZnVuY3Rpb24ocil7dmFyIGk9bi50YWJsZS5jb3JlLnNjaGVtYS5wcmltYXJ5S2V5LGE9dDtyZXR1cm4gbi50YWJsZS5jb3JlLmNvdW50KHt0cmFuczpyLHF1ZXJ5OntpbmRleDppLHJhbmdlOmF9fSkudGhlbihmdW5jdGlvbih1KXtyZXR1cm4gbi50YWJsZS5jb3JlLm11dGF0ZSh7dHJhbnM6cix0eXBlOlwiZGVsZXRlUmFuZ2VcIixyYW5nZTphfSkudGhlbihmdW5jdGlvbihvKXt2YXIgcz1vLmZhaWx1cmVzO28ubGFzdFJlc3VsdCxvLnJlc3VsdHM7dmFyIGM9by5udW1GYWlsdXJlcztpZihjKXRocm93IG5ldyBzbihcIkNvdWxkIG5vdCBkZWxldGUgc29tZSB2YWx1ZXNcIixPYmplY3Qua2V5cyhzKS5tYXAoZnVuY3Rpb24oaCl7cmV0dXJuIHNbaF19KSx1LWMpO3JldHVybiB1LWN9KX0pfSk6dGhpcy5tb2RpZnkoYXQpfSxlfSgpLGF0PWZ1bmN0aW9uKGUsbil7cmV0dXJuIG4udmFsdWU9bnVsbH07ZnVuY3Rpb24gc2koZSl7cmV0dXJuIEplKG9pLnByb3RvdHlwZSxmdW5jdGlvbih0LHIpe3RoaXMuZGI9ZTt2YXIgaT1adCxhPW51bGw7aWYocil0cnl7aT1yKCl9Y2F0Y2goYyl7YT1jfXZhciB1PXQuX2N0eCxvPXUudGFibGUscz1vLmhvb2sucmVhZGluZy5maXJlO3RoaXMuX2N0eD17dGFibGU6byxpbmRleDp1LmluZGV4LGlzUHJpbUtleTohdS5pbmRleHx8by5zY2hlbWEucHJpbUtleS5rZXlQYXRoJiZ1LmluZGV4PT09by5zY2hlbWEucHJpbUtleS5uYW1lLHJhbmdlOmksa2V5c09ubHk6ITEsZGlyOlwibmV4dFwiLHVuaXF1ZTpcIlwiLGFsZ29yaXRobTpudWxsLGZpbHRlcjpudWxsLHJlcGxheUZpbHRlcjpudWxsLGp1c3RMaW1pdDohMCxpc01hdGNoOm51bGwsb2Zmc2V0OjAsbGltaXQ6MS8wLGVycm9yOmEsb3I6dS5vcix2YWx1ZU1hcHBlcjpzIT09JGU/czpudWxsfX0pfWZ1bmN0aW9uIGNpKGUsbil7cmV0dXJuIGU8bj8tMTplPT09bj8wOjF9ZnVuY3Rpb24gbGkoZSxuKXtyZXR1cm4gZT5uPy0xOmU9PT1uPzA6MX1mdW5jdGlvbiBxKGUsbix0KXt2YXIgcj1lIGluc3RhbmNlb2YgdXI/bmV3IGUuQ29sbGVjdGlvbihlKTplO3JldHVybiByLl9jdHguZXJyb3I9dD9uZXcgdChuKTpuZXcgVHlwZUVycm9yKG4pLHJ9ZnVuY3Rpb24gV2UoZSl7cmV0dXJuIG5ldyBlLkNvbGxlY3Rpb24oZSxmdW5jdGlvbigpe3JldHVybiBhcihcIlwiKX0pLmxpbWl0KDApfWZ1bmN0aW9uIGZpKGUpe3JldHVybiBlPT09XCJuZXh0XCI/ZnVuY3Rpb24obil7cmV0dXJuIG4udG9VcHBlckNhc2UoKX06ZnVuY3Rpb24obil7cmV0dXJuIG4udG9Mb3dlckNhc2UoKX19ZnVuY3Rpb24gaGkoZSl7cmV0dXJuIGU9PT1cIm5leHRcIj9mdW5jdGlvbihuKXtyZXR1cm4gbi50b0xvd2VyQ2FzZSgpfTpmdW5jdGlvbihuKXtyZXR1cm4gbi50b1VwcGVyQ2FzZSgpfX1mdW5jdGlvbiBkaShlLG4sdCxyLGksYSl7Zm9yKHZhciB1PU1hdGgubWluKGUubGVuZ3RoLHIubGVuZ3RoKSxvPS0xLHM9MDtzPHU7KytzKXt2YXIgYz1uW3NdO2lmKGMhPT1yW3NdKXJldHVybiBpKGVbc10sdFtzXSk8MD9lLnN1YnN0cigwLHMpK3Rbc10rdC5zdWJzdHIocysxKTppKGVbc10scltzXSk8MD9lLnN1YnN0cigwLHMpK3Jbc10rdC5zdWJzdHIocysxKTpvPj0wP2Uuc3Vic3RyKDAsbykrbltvXSt0LnN1YnN0cihvKzEpOm51bGw7aShlW3NdLGMpPDAmJihvPXMpfXJldHVybiB1PHIubGVuZ3RoJiZhPT09XCJuZXh0XCI/ZSt0LnN1YnN0cihlLmxlbmd0aCk6dTxlLmxlbmd0aCYmYT09PVwicHJldlwiP2Uuc3Vic3RyKDAsdC5sZW5ndGgpOm88MD9udWxsOmUuc3Vic3RyKDAsbykrcltvXSt0LnN1YnN0cihvKzEpfWZ1bmN0aW9uIHhuKGUsbix0LHIpe3ZhciBpLGEsdSxvLHMsYyxoLGw9dC5sZW5ndGg7aWYoIXQuZXZlcnkoZnVuY3Rpb24oZCl7cmV0dXJuIHR5cGVvZiBkPT1cInN0cmluZ1wifSkpcmV0dXJuIHEoZSxKdCk7ZnVuY3Rpb24gcChkKXtpPWZpKGQpLGE9aGkoZCksdT1kPT09XCJuZXh0XCI/Y2k6bGk7dmFyIHY9dC5tYXAoZnVuY3Rpb24oYil7cmV0dXJue2xvd2VyOmEoYiksdXBwZXI6aShiKX19KS5zb3J0KGZ1bmN0aW9uKGIsbSl7cmV0dXJuIHUoYi5sb3dlcixtLmxvd2VyKX0pO289di5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIGIudXBwZXJ9KSxzPXYubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBiLmxvd2VyfSksYz1kLGg9ZD09PVwibmV4dFwiP1wiXCI6cn1wKFwibmV4dFwiKTt2YXIgXz1uZXcgZS5Db2xsZWN0aW9uKGUsZnVuY3Rpb24oKXtyZXR1cm4gcGUob1swXSxzW2wtMV0rcil9KTtfLl9vbmRpcmVjdGlvbmNoYW5nZT1mdW5jdGlvbihkKXtwKGQpfTt2YXIgZj0wO3JldHVybiBfLl9hZGRBbGdvcml0aG0oZnVuY3Rpb24oZCx2LGIpe3ZhciBtPWQua2V5O2lmKHR5cGVvZiBtIT1cInN0cmluZ1wiKXJldHVybiExO3ZhciBnPWEobSk7aWYobihnLHMsZikpcmV0dXJuITA7Zm9yKHZhciB3PW51bGwseT1mO3k8bDsrK3kpe3ZhciB4PWRpKG0sZyxvW3ldLHNbeV0sdSxjKTt4PT09bnVsbCYmdz09PW51bGw/Zj15KzE6KHc9PT1udWxsfHx1KHcseCk+MCkmJih3PXgpfXJldHVybiB2KHchPT1udWxsP2Z1bmN0aW9uKCl7ZC5jb250aW51ZSh3K2gpfTpiKSwhMX0pLF99ZnVuY3Rpb24gcGUoZSxuLHQscil7cmV0dXJue3R5cGU6Mixsb3dlcjplLHVwcGVyOm4sbG93ZXJPcGVuOnQsdXBwZXJPcGVuOnJ9fWZ1bmN0aW9uIGFyKGUpe3JldHVybnt0eXBlOjEsbG93ZXI6ZSx1cHBlcjplfX12YXIgdXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJDb2xsZWN0aW9uXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9jdHgudGFibGUuZGIuQ29sbGVjdGlvbn0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSxlLnByb3RvdHlwZS5iZXR3ZWVuPWZ1bmN0aW9uKG4sdCxyLGkpe3I9ciE9PSExLGk9aT09PSEwO3RyeXtyZXR1cm4gdGhpcy5fY21wKG4sdCk+MHx8dGhpcy5fY21wKG4sdCk9PT0wJiYocnx8aSkmJiEociYmaSk/V2UodGhpcyk6bmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIHBlKG4sdCwhciwhaSl9KX1jYXRjaHtyZXR1cm4gcSh0aGlzLHNlKX19LGUucHJvdG90eXBlLmVxdWFscz1mdW5jdGlvbihuKXtyZXR1cm4gbj09bnVsbD9xKHRoaXMsc2UpOm5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcyxmdW5jdGlvbigpe3JldHVybiBhcihuKX0pfSxlLnByb3RvdHlwZS5hYm92ZT1mdW5jdGlvbihuKXtyZXR1cm4gbj09bnVsbD9xKHRoaXMsc2UpOm5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcyxmdW5jdGlvbigpe3JldHVybiBwZShuLHZvaWQgMCwhMCl9KX0sZS5wcm90b3R5cGUuYWJvdmVPckVxdWFsPWZ1bmN0aW9uKG4pe3JldHVybiBuPT1udWxsP3EodGhpcyxzZSk6bmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIHBlKG4sdm9pZCAwLCExKX0pfSxlLnByb3RvdHlwZS5iZWxvdz1mdW5jdGlvbihuKXtyZXR1cm4gbj09bnVsbD9xKHRoaXMsc2UpOm5ldyB0aGlzLkNvbGxlY3Rpb24odGhpcyxmdW5jdGlvbigpe3JldHVybiBwZSh2b2lkIDAsbiwhMSwhMCl9KX0sZS5wcm90b3R5cGUuYmVsb3dPckVxdWFsPWZ1bmN0aW9uKG4pe3JldHVybiBuPT1udWxsP3EodGhpcyxzZSk6bmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIHBlKHZvaWQgMCxuKX0pfSxlLnByb3RvdHlwZS5zdGFydHNXaXRoPWZ1bmN0aW9uKG4pe3JldHVybiB0eXBlb2YgbiE9XCJzdHJpbmdcIj9xKHRoaXMsSnQpOnRoaXMuYmV0d2VlbihuLG4rT2UsITAsITApfSxlLnByb3RvdHlwZS5zdGFydHNXaXRoSWdub3JlQ2FzZT1mdW5jdGlvbihuKXtyZXR1cm4gbj09PVwiXCI/dGhpcy5zdGFydHNXaXRoKG4pOnhuKHRoaXMsZnVuY3Rpb24odCxyKXtyZXR1cm4gdC5pbmRleE9mKHJbMF0pPT09MH0sW25dLE9lKX0sZS5wcm90b3R5cGUuZXF1YWxzSWdub3JlQ2FzZT1mdW5jdGlvbihuKXtyZXR1cm4geG4odGhpcyxmdW5jdGlvbih0LHIpe3JldHVybiB0PT09clswXX0sW25dLFwiXCIpfSxlLnByb3RvdHlwZS5hbnlPZklnbm9yZUNhc2U9ZnVuY3Rpb24oKXt2YXIgbj1vZS5hcHBseShCZSxhcmd1bWVudHMpO3JldHVybiBuLmxlbmd0aD09PTA/V2UodGhpcyk6eG4odGhpcyxmdW5jdGlvbih0LHIpe3JldHVybiByLmluZGV4T2YodCkhPT0tMX0sbixcIlwiKX0sZS5wcm90b3R5cGUuc3RhcnRzV2l0aEFueU9mSWdub3JlQ2FzZT1mdW5jdGlvbigpe3ZhciBuPW9lLmFwcGx5KEJlLGFyZ3VtZW50cyk7cmV0dXJuIG4ubGVuZ3RoPT09MD9XZSh0aGlzKTp4bih0aGlzLGZ1bmN0aW9uKHQscil7cmV0dXJuIHIuc29tZShmdW5jdGlvbihpKXtyZXR1cm4gdC5pbmRleE9mKGkpPT09MH0pfSxuLE9lKX0sZS5wcm90b3R5cGUuYW55T2Y9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLHQ9b2UuYXBwbHkoQmUsYXJndW1lbnRzKSxyPXRoaXMuX2NtcDt0cnl7dC5zb3J0KHIpfWNhdGNoe3JldHVybiBxKHRoaXMsc2UpfWlmKHQubGVuZ3RoPT09MClyZXR1cm4gV2UodGhpcyk7dmFyIGk9bmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIHBlKHRbMF0sdFt0Lmxlbmd0aC0xXSl9KTtpLl9vbmRpcmVjdGlvbmNoYW5nZT1mdW5jdGlvbih1KXtyPXU9PT1cIm5leHRcIj9uLl9hc2NlbmRpbmc6bi5fZGVzY2VuZGluZyx0LnNvcnQocil9O3ZhciBhPTA7cmV0dXJuIGkuX2FkZEFsZ29yaXRobShmdW5jdGlvbih1LG8scyl7Zm9yKHZhciBjPXUua2V5O3IoYyx0W2FdKT4wOylpZigrK2EsYT09PXQubGVuZ3RoKXJldHVybiBvKHMpLCExO3JldHVybiByKGMsdFthXSk9PT0wPyEwOihvKGZ1bmN0aW9uKCl7dS5jb250aW51ZSh0W2FdKX0pLCExKX0pLGl9LGUucHJvdG90eXBlLm5vdEVxdWFsPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLmluQW55UmFuZ2UoW1tldCxuXSxbbix0aGlzLmRiLl9tYXhLZXldXSx7aW5jbHVkZUxvd2VyczohMSxpbmNsdWRlVXBwZXJzOiExfSl9LGUucHJvdG90eXBlLm5vbmVPZj1mdW5jdGlvbigpe3ZhciBuPW9lLmFwcGx5KEJlLGFyZ3VtZW50cyk7aWYobi5sZW5ndGg9PT0wKXJldHVybiBuZXcgdGhpcy5Db2xsZWN0aW9uKHRoaXMpO3RyeXtuLnNvcnQodGhpcy5fYXNjZW5kaW5nKX1jYXRjaHtyZXR1cm4gcSh0aGlzLHNlKX12YXIgdD1uLnJlZHVjZShmdW5jdGlvbihyLGkpe3JldHVybiByP3IuY29uY2F0KFtbcltyLmxlbmd0aC0xXVsxXSxpXV0pOltbZXQsaV1dfSxudWxsKTtyZXR1cm4gdC5wdXNoKFtuW24ubGVuZ3RoLTFdLHRoaXMuZGIuX21heEtleV0pLHRoaXMuaW5BbnlSYW5nZSh0LHtpbmNsdWRlTG93ZXJzOiExLGluY2x1ZGVVcHBlcnM6ITF9KX0sZS5wcm90b3R5cGUuaW5BbnlSYW5nZT1mdW5jdGlvbihuLHQpe3ZhciByPXRoaXMsaT10aGlzLl9jbXAsYT10aGlzLl9hc2NlbmRpbmcsdT10aGlzLl9kZXNjZW5kaW5nLG89dGhpcy5fbWluLHM9dGhpcy5fbWF4O2lmKG4ubGVuZ3RoPT09MClyZXR1cm4gV2UodGhpcyk7aWYoIW4uZXZlcnkoZnVuY3Rpb24oeSl7cmV0dXJuIHlbMF0hPT12b2lkIDAmJnlbMV0hPT12b2lkIDAmJmEoeVswXSx5WzFdKTw9MH0pKXJldHVybiBxKHRoaXMsXCJGaXJzdCBhcmd1bWVudCB0byBpbkFueVJhbmdlKCkgbXVzdCBiZSBhbiBBcnJheSBvZiB0d28tdmFsdWUgQXJyYXlzIFtsb3dlcix1cHBlcl0gd2hlcmUgdXBwZXIgbXVzdCBub3QgYmUgbG93ZXIgdGhhbiBsb3dlclwiLEQuSW52YWxpZEFyZ3VtZW50KTt2YXIgYz0hdHx8dC5pbmNsdWRlTG93ZXJzIT09ITEsaD10JiZ0LmluY2x1ZGVVcHBlcnM9PT0hMDtmdW5jdGlvbiBsKHkseCl7Zm9yKHZhciBTPTAsRT15Lmxlbmd0aDtTPEU7KytTKXt2YXIgUD15W1NdO2lmKGkoeFswXSxQWzFdKTwwJiZpKHhbMV0sUFswXSk+MCl7UFswXT1vKFBbMF0seFswXSksUFsxXT1zKFBbMV0seFsxXSk7YnJlYWt9fXJldHVybiBTPT09RSYmeS5wdXNoKHgpLHl9dmFyIHA9YTtmdW5jdGlvbiBfKHkseCl7cmV0dXJuIHAoeVswXSx4WzBdKX12YXIgZjt0cnl7Zj1uLnJlZHVjZShsLFtdKSxmLnNvcnQoXyl9Y2F0Y2h7cmV0dXJuIHEodGhpcyxzZSl9dmFyIGQ9MCx2PWg/ZnVuY3Rpb24oeSl7cmV0dXJuIGEoeSxmW2RdWzFdKT4wfTpmdW5jdGlvbih5KXtyZXR1cm4gYSh5LGZbZF1bMV0pPj0wfSxiPWM/ZnVuY3Rpb24oeSl7cmV0dXJuIHUoeSxmW2RdWzBdKT4wfTpmdW5jdGlvbih5KXtyZXR1cm4gdSh5LGZbZF1bMF0pPj0wfTtmdW5jdGlvbiBtKHkpe3JldHVybiF2KHkpJiYhYih5KX12YXIgZz12LHc9bmV3IHRoaXMuQ29sbGVjdGlvbih0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIHBlKGZbMF1bMF0sZltmLmxlbmd0aC0xXVsxXSwhYywhaCl9KTtyZXR1cm4gdy5fb25kaXJlY3Rpb25jaGFuZ2U9ZnVuY3Rpb24oeSl7eT09PVwibmV4dFwiPyhnPXYscD1hKTooZz1iLHA9dSksZi5zb3J0KF8pfSx3Ll9hZGRBbGdvcml0aG0oZnVuY3Rpb24oeSx4LFMpe2Zvcih2YXIgRT15LmtleTtnKEUpOylpZigrK2QsZD09PWYubGVuZ3RoKXJldHVybiB4KFMpLCExO3JldHVybiBtKEUpPyEwOihyLl9jbXAoRSxmW2RdWzFdKT09PTB8fHIuX2NtcChFLGZbZF1bMF0pPT09MHx8eChmdW5jdGlvbigpe3A9PT1hP3kuY29udGludWUoZltkXVswXSk6eS5jb250aW51ZShmW2RdWzFdKX0pLCExKX0pLHd9LGUucHJvdG90eXBlLnN0YXJ0c1dpdGhBbnlPZj1mdW5jdGlvbigpe3ZhciBuPW9lLmFwcGx5KEJlLGFyZ3VtZW50cyk7cmV0dXJuIG4uZXZlcnkoZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0PT1cInN0cmluZ1wifSk/bi5sZW5ndGg9PT0wP1dlKHRoaXMpOnRoaXMuaW5BbnlSYW5nZShuLm1hcChmdW5jdGlvbih0KXtyZXR1cm5bdCx0K09lXX0pKTpxKHRoaXMsXCJzdGFydHNXaXRoQW55T2YoKSBvbmx5IHdvcmtzIHdpdGggc3RyaW5nc1wiKX0sZX0oKTtmdW5jdGlvbiB2aShlKXtyZXR1cm4gSmUodXIucHJvdG90eXBlLGZ1bmN0aW9uKHQscixpKXtpZih0aGlzLmRiPWUsdGhpcy5fY3R4PXt0YWJsZTp0LGluZGV4OnI9PT1cIjppZFwiP251bGw6cixvcjppfSx0aGlzLl9jbXA9dGhpcy5fYXNjZW5kaW5nPUIsdGhpcy5fZGVzY2VuZGluZz1mdW5jdGlvbihhLHUpe3JldHVybiBCKHUsYSl9LHRoaXMuX21heD1mdW5jdGlvbihhLHUpe3JldHVybiBCKGEsdSk+MD9hOnV9LHRoaXMuX21pbj1mdW5jdGlvbihhLHUpe3JldHVybiBCKGEsdSk8MD9hOnV9LHRoaXMuX0lEQktleVJhbmdlPWUuX2RlcHMuSURCS2V5UmFuZ2UsIXRoaXMuX0lEQktleVJhbmdlKXRocm93IG5ldyBELk1pc3NpbmdBUEl9KX1mdW5jdGlvbiByZShlKXtyZXR1cm4gaihmdW5jdGlvbihuKXtyZXR1cm4gcWUobiksZShuLnRhcmdldC5lcnJvciksITF9KX1mdW5jdGlvbiBxZShlKXtlLnN0b3BQcm9wYWdhdGlvbiYmZS5zdG9wUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0JiZlLnByZXZlbnREZWZhdWx0KCl9dmFyIGVuPVwic3RvcmFnZW11dGF0ZWRcIix1dD1cIngtc3RvcmFnZW11dGF0ZWQtMVwiLHllPUdlKG51bGwsZW4pLHBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe31yZXR1cm4gZS5wcm90b3R5cGUuX2xvY2s9ZnVuY3Rpb24oKXtyZXR1cm4gWWUoIWsuZ2xvYmFsKSwrK3RoaXMuX3JlY3Vsb2NrLHRoaXMuX3JlY3Vsb2NrPT09MSYmIWsuZ2xvYmFsJiYoay5sb2NrT3duZXJGb3I9dGhpcyksdGhpc30sZS5wcm90b3R5cGUuX3VubG9jaz1mdW5jdGlvbigpe2lmKFllKCFrLmdsb2JhbCksLS10aGlzLl9yZWN1bG9jaz09PTApZm9yKGsuZ2xvYmFsfHwoay5sb2NrT3duZXJGb3I9bnVsbCk7dGhpcy5fYmxvY2tlZEZ1bmNzLmxlbmd0aD4wJiYhdGhpcy5fbG9ja2VkKCk7KXt2YXIgbj10aGlzLl9ibG9ja2VkRnVuY3Muc2hpZnQoKTt0cnl7a2UoblsxXSxuWzBdKX1jYXRjaHt9fXJldHVybiB0aGlzfSxlLnByb3RvdHlwZS5fbG9ja2VkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3JlY3Vsb2NrJiZrLmxvY2tPd25lckZvciE9PXRoaXN9LGUucHJvdG90eXBlLmNyZWF0ZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzO2lmKCF0aGlzLm1vZGUpcmV0dXJuIHRoaXM7dmFyIHI9dGhpcy5kYi5pZGJkYixpPXRoaXMuZGIuX3N0YXRlLmRiT3BlbkVycm9yO2lmKFllKCF0aGlzLmlkYnRyYW5zKSwhbiYmIXIpc3dpdGNoKGkmJmkubmFtZSl7Y2FzZVwiRGF0YWJhc2VDbG9zZWRFcnJvclwiOnRocm93IG5ldyBELkRhdGFiYXNlQ2xvc2VkKGkpO2Nhc2VcIk1pc3NpbmdBUElFcnJvclwiOnRocm93IG5ldyBELk1pc3NpbmdBUEkoaS5tZXNzYWdlLGkpO2RlZmF1bHQ6dGhyb3cgbmV3IEQuT3BlbkZhaWxlZChpKX1pZighdGhpcy5hY3RpdmUpdGhyb3cgbmV3IEQuVHJhbnNhY3Rpb25JbmFjdGl2ZTtyZXR1cm4gWWUodGhpcy5fY29tcGxldGlvbi5fc3RhdGU9PT1udWxsKSxuPXRoaXMuaWRidHJhbnM9bnx8KHRoaXMuZGIuY29yZT90aGlzLmRiLmNvcmUudHJhbnNhY3Rpb24odGhpcy5zdG9yZU5hbWVzLHRoaXMubW9kZSx7ZHVyYWJpbGl0eTp0aGlzLmNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eX0pOnIudHJhbnNhY3Rpb24odGhpcy5zdG9yZU5hbWVzLHRoaXMubW9kZSx7ZHVyYWJpbGl0eTp0aGlzLmNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eX0pKSxuLm9uZXJyb3I9aihmdW5jdGlvbihhKXtxZShhKSx0Ll9yZWplY3Qobi5lcnJvcil9KSxuLm9uYWJvcnQ9aihmdW5jdGlvbihhKXtxZShhKSx0LmFjdGl2ZSYmdC5fcmVqZWN0KG5ldyBELkFib3J0KG4uZXJyb3IpKSx0LmFjdGl2ZT0hMSx0Lm9uKFwiYWJvcnRcIikuZmlyZShhKX0pLG4ub25jb21wbGV0ZT1qKGZ1bmN0aW9uKCl7dC5hY3RpdmU9ITEsdC5fcmVzb2x2ZSgpLFwibXV0YXRlZFBhcnRzXCJpbiBuJiZ5ZS5zdG9yYWdlbXV0YXRlZC5maXJlKG4ubXV0YXRlZFBhcnRzKX0pLHRoaXN9LGUucHJvdG90eXBlLl9wcm9taXNlPWZ1bmN0aW9uKG4sdCxyKXt2YXIgaT10aGlzO2lmKG49PT1cInJlYWR3cml0ZVwiJiZ0aGlzLm1vZGUhPT1cInJlYWR3cml0ZVwiKXJldHVybiB6KG5ldyBELlJlYWRPbmx5KFwiVHJhbnNhY3Rpb24gaXMgcmVhZG9ubHlcIikpO2lmKCF0aGlzLmFjdGl2ZSlyZXR1cm4geihuZXcgRC5UcmFuc2FjdGlvbkluYWN0aXZlKTtpZih0aGlzLl9sb2NrZWQoKSlyZXR1cm4gbmV3IEsoZnVuY3Rpb24odSxvKXtpLl9ibG9ja2VkRnVuY3MucHVzaChbZnVuY3Rpb24oKXtpLl9wcm9taXNlKG4sdCxyKS50aGVuKHUsbyl9LGtdKX0pO2lmKHIpcmV0dXJuIGhlKGZ1bmN0aW9uKCl7dmFyIHU9bmV3IEsoZnVuY3Rpb24obyxzKXtpLl9sb2NrKCk7dmFyIGM9dChvLHMsaSk7YyYmYy50aGVuJiZjLnRoZW4obyxzKX0pO3JldHVybiB1LmZpbmFsbHkoZnVuY3Rpb24oKXtyZXR1cm4gaS5fdW5sb2NrKCl9KSx1Ll9saWI9ITAsdX0pO3ZhciBhPW5ldyBLKGZ1bmN0aW9uKHUsbyl7dmFyIHM9dCh1LG8saSk7cyYmcy50aGVuJiZzLnRoZW4odSxvKX0pO3JldHVybiBhLl9saWI9ITAsYX0sZS5wcm90b3R5cGUuX3Jvb3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQ/dGhpcy5wYXJlbnQuX3Jvb3QoKTp0aGlzfSxlLnByb3RvdHlwZS53YWl0Rm9yPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuX3Jvb3QoKSxyPUsucmVzb2x2ZShuKTtpZih0Ll93YWl0aW5nRm9yKXQuX3dhaXRpbmdGb3I9dC5fd2FpdGluZ0Zvci50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTtlbHNle3QuX3dhaXRpbmdGb3I9cix0Ll93YWl0aW5nUXVldWU9W107dmFyIGk9dC5pZGJ0cmFucy5vYmplY3RTdG9yZSh0LnN0b3JlTmFtZXNbMF0pOyhmdW5jdGlvbiB1KCl7Zm9yKCsrdC5fc3BpbkNvdW50O3QuX3dhaXRpbmdRdWV1ZS5sZW5ndGg7KXQuX3dhaXRpbmdRdWV1ZS5zaGlmdCgpKCk7dC5fd2FpdGluZ0ZvciYmKGkuZ2V0KC0xLzApLm9uc3VjY2Vzcz11KX0pKCl9dmFyIGE9dC5fd2FpdGluZ0ZvcjtyZXR1cm4gbmV3IEsoZnVuY3Rpb24odSxvKXtyLnRoZW4oZnVuY3Rpb24ocyl7cmV0dXJuIHQuX3dhaXRpbmdRdWV1ZS5wdXNoKGoodS5iaW5kKG51bGwscykpKX0sZnVuY3Rpb24ocyl7cmV0dXJuIHQuX3dhaXRpbmdRdWV1ZS5wdXNoKGooby5iaW5kKG51bGwscykpKX0pLmZpbmFsbHkoZnVuY3Rpb24oKXt0Ll93YWl0aW5nRm9yPT09YSYmKHQuX3dhaXRpbmdGb3I9bnVsbCl9KX0pfSxlLnByb3RvdHlwZS5hYm9ydD1mdW5jdGlvbigpe3RoaXMuYWN0aXZlJiYodGhpcy5hY3RpdmU9ITEsdGhpcy5pZGJ0cmFucyYmdGhpcy5pZGJ0cmFucy5hYm9ydCgpLHRoaXMuX3JlamVjdChuZXcgRC5BYm9ydCkpfSxlLnByb3RvdHlwZS50YWJsZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLl9tZW1vaXplZFRhYmxlc3x8KHRoaXMuX21lbW9pemVkVGFibGVzPXt9KTtpZihYKHQsbikpcmV0dXJuIHRbbl07dmFyIHI9dGhpcy5zY2hlbWFbbl07aWYoIXIpdGhyb3cgbmV3IEQuTm90Rm91bmQoXCJUYWJsZSBcIituK1wiIG5vdCBwYXJ0IG9mIHRyYW5zYWN0aW9uXCIpO3ZhciBpPW5ldyB0aGlzLmRiLlRhYmxlKG4scix0aGlzKTtyZXR1cm4gaS5jb3JlPXRoaXMuZGIuY29yZS50YWJsZShuKSx0W25dPWksaX0sZX0oKTtmdW5jdGlvbiB5aShlKXtyZXR1cm4gSmUocGkucHJvdG90eXBlLGZ1bmN0aW9uKHQscixpLGEsdSl7dmFyIG89dGhpczt0aGlzLmRiPWUsdGhpcy5tb2RlPXQsdGhpcy5zdG9yZU5hbWVzPXIsdGhpcy5zY2hlbWE9aSx0aGlzLmNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eT1hLHRoaXMuaWRidHJhbnM9bnVsbCx0aGlzLm9uPUdlKHRoaXMsXCJjb21wbGV0ZVwiLFwiZXJyb3JcIixcImFib3J0XCIpLHRoaXMucGFyZW50PXV8fG51bGwsdGhpcy5hY3RpdmU9ITAsdGhpcy5fcmVjdWxvY2s9MCx0aGlzLl9ibG9ja2VkRnVuY3M9W10sdGhpcy5fcmVzb2x2ZT1udWxsLHRoaXMuX3JlamVjdD1udWxsLHRoaXMuX3dhaXRpbmdGb3I9bnVsbCx0aGlzLl93YWl0aW5nUXVldWU9bnVsbCx0aGlzLl9zcGluQ291bnQ9MCx0aGlzLl9jb21wbGV0aW9uPW5ldyBLKGZ1bmN0aW9uKHMsYyl7by5fcmVzb2x2ZT1zLG8uX3JlamVjdD1jfSksdGhpcy5fY29tcGxldGlvbi50aGVuKGZ1bmN0aW9uKCl7by5hY3RpdmU9ITEsby5vbi5jb21wbGV0ZS5maXJlKCl9LGZ1bmN0aW9uKHMpe3ZhciBjPW8uYWN0aXZlO3JldHVybiBvLmFjdGl2ZT0hMSxvLm9uLmVycm9yLmZpcmUocyksby5wYXJlbnQ/by5wYXJlbnQuX3JlamVjdChzKTpjJiZvLmlkYnRyYW5zJiZvLmlkYnRyYW5zLmFib3J0KCkseihzKX0pfSl9ZnVuY3Rpb24gb3QoZSxuLHQscixpLGEsdSl7cmV0dXJue25hbWU6ZSxrZXlQYXRoOm4sdW5pcXVlOnQsbXVsdGk6cixhdXRvOmksY29tcG91bmQ6YSxzcmM6KHQmJiF1P1wiJlwiOlwiXCIpKyhyP1wiKlwiOlwiXCIpKyhpP1wiKytcIjpcIlwiKStvcihuKX19ZnVuY3Rpb24gb3IoZSl7cmV0dXJuIHR5cGVvZiBlPT1cInN0cmluZ1wiP2U6ZT9cIltcIitbXS5qb2luLmNhbGwoZSxcIitcIikrXCJdXCI6XCJcIn1mdW5jdGlvbiBzdChlLG4sdCl7cmV0dXJue25hbWU6ZSxwcmltS2V5Om4saW5kZXhlczp0LG1hcHBlZENsYXNzOm51bGwsaWR4QnlOYW1lOkRyKHQsZnVuY3Rpb24ocil7cmV0dXJuW3IubmFtZSxyXX0pfX1mdW5jdGlvbiBtaShlKXtyZXR1cm4gZS5sZW5ndGg9PT0xP2VbMF06ZX12YXIgbm49ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBlLm9ubHkoW1tdXSksbm49ZnVuY3Rpb24oKXtyZXR1cm5bW11dfSxbW11dfWNhdGNoe3JldHVybiBubj1mdW5jdGlvbigpe3JldHVybiBPZX0sT2V9fTtmdW5jdGlvbiBjdChlKXtyZXR1cm4gZT09bnVsbD9mdW5jdGlvbigpe306dHlwZW9mIGU9PVwic3RyaW5nXCI/Z2koZSk6ZnVuY3Rpb24obil7cmV0dXJuIHVlKG4sZSl9fWZ1bmN0aW9uIGdpKGUpe3ZhciBuPWUuc3BsaXQoXCIuXCIpO3JldHVybiBuLmxlbmd0aD09PTE/ZnVuY3Rpb24odCl7cmV0dXJuIHRbZV19OmZ1bmN0aW9uKHQpe3JldHVybiB1ZSh0LGUpfX1mdW5jdGlvbiBzcihlKXtyZXR1cm5bXS5zbGljZS5jYWxsKGUpfXZhciBiaT0wO2Z1bmN0aW9uIHRuKGUpe3JldHVybiBlPT1udWxsP1wiOmlkXCI6dHlwZW9mIGU9PVwic3RyaW5nXCI/ZTpcIltcIi5jb25jYXQoZS5qb2luKFwiK1wiKSxcIl1cIil9ZnVuY3Rpb24gd2koZSxuLHQpe2Z1bmN0aW9uIHIobCxwKXt2YXIgXz1zcihsLm9iamVjdFN0b3JlTmFtZXMpO3JldHVybntzY2hlbWE6e25hbWU6bC5uYW1lLHRhYmxlczpfLm1hcChmdW5jdGlvbihmKXtyZXR1cm4gcC5vYmplY3RTdG9yZShmKX0pLm1hcChmdW5jdGlvbihmKXt2YXIgZD1mLmtleVBhdGgsdj1mLmF1dG9JbmNyZW1lbnQsYj1MKGQpLG09ZD09bnVsbCxnPXt9LHc9e25hbWU6Zi5uYW1lLHByaW1hcnlLZXk6e25hbWU6bnVsbCxpc1ByaW1hcnlLZXk6ITAsb3V0Ym91bmQ6bSxjb21wb3VuZDpiLGtleVBhdGg6ZCxhdXRvSW5jcmVtZW50OnYsdW5pcXVlOiEwLGV4dHJhY3RLZXk6Y3QoZCl9LGluZGV4ZXM6c3IoZi5pbmRleE5hbWVzKS5tYXAoZnVuY3Rpb24oeSl7cmV0dXJuIGYuaW5kZXgoeSl9KS5tYXAoZnVuY3Rpb24oeSl7dmFyIHg9eS5uYW1lLFM9eS51bmlxdWUsRT15Lm11bHRpRW50cnksUD15LmtleVBhdGgsUj1MKFApLEE9e25hbWU6eCxjb21wb3VuZDpSLGtleVBhdGg6UCx1bmlxdWU6UyxtdWx0aUVudHJ5OkUsZXh0cmFjdEtleTpjdChQKX07cmV0dXJuIGdbdG4oUCldPUEsQX0pLGdldEluZGV4QnlLZXlQYXRoOmZ1bmN0aW9uKHkpe3JldHVybiBnW3RuKHkpXX19O3JldHVybiBnW1wiOmlkXCJdPXcucHJpbWFyeUtleSxkIT1udWxsJiYoZ1t0bihkKV09dy5wcmltYXJ5S2V5KSx3fSl9LGhhc0dldEFsbDpfLmxlbmd0aD4wJiZcImdldEFsbFwiaW4gcC5vYmplY3RTdG9yZShfWzBdKSYmISh0eXBlb2YgbmF2aWdhdG9yPFwidVwiJiYvU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhLyhDaHJvbWVcXC98RWRnZVxcLykvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJltdLmNvbmNhdChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9TYWZhcmlcXC8oXFxkKikvKSlbMV08NjA0KX19ZnVuY3Rpb24gaShsKXtpZihsLnR5cGU9PT0zKXJldHVybiBudWxsO2lmKGwudHlwZT09PTQpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgbmV2ZXIgdHlwZSB0byBJREJLZXlSYW5nZVwiKTt2YXIgcD1sLmxvd2VyLF89bC51cHBlcixmPWwubG93ZXJPcGVuLGQ9bC51cHBlck9wZW4sdj1wPT09dm9pZCAwP189PT12b2lkIDA/bnVsbDpuLnVwcGVyQm91bmQoXywhIWQpOl89PT12b2lkIDA/bi5sb3dlckJvdW5kKHAsISFmKTpuLmJvdW5kKHAsXywhIWYsISFkKTtyZXR1cm4gdn1mdW5jdGlvbiBhKGwpe3ZhciBwPWwubmFtZTtmdW5jdGlvbiBfKHYpe3ZhciBiPXYudHJhbnMsbT12LnR5cGUsZz12LmtleXMsdz12LnZhbHVlcyx5PXYucmFuZ2U7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHgsUyl7eD1qKHgpO3ZhciBFPWIub2JqZWN0U3RvcmUocCksUD1FLmtleVBhdGg9PW51bGwsUj1tPT09XCJwdXRcInx8bT09PVwiYWRkXCI7aWYoIVImJm0hPT1cImRlbGV0ZVwiJiZtIT09XCJkZWxldGVSYW5nZVwiKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3BlcmF0aW9uIHR5cGU6IFwiK20pO3ZhciBBPShnfHx3fHx7bGVuZ3RoOjF9KS5sZW5ndGg7aWYoZyYmdyYmZy5sZW5ndGghPT13Lmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJHaXZlbiBrZXlzIGFycmF5IG11c3QgaGF2ZSBzYW1lIGxlbmd0aCBhcyBnaXZlbiB2YWx1ZXMgYXJyYXkuXCIpO2lmKEE9PT0wKXJldHVybiB4KHtudW1GYWlsdXJlczowLGZhaWx1cmVzOnt9LHJlc3VsdHM6W10sbGFzdFJlc3VsdDp2b2lkIDB9KTt2YXIgSSxUPVtdLE09W10sTz0wLFY9ZnVuY3Rpb24oYWUpeysrTyxxZShhZSl9O2lmKG09PT1cImRlbGV0ZVJhbmdlXCIpe2lmKHkudHlwZT09PTQpcmV0dXJuIHgoe251bUZhaWx1cmVzOk8sZmFpbHVyZXM6TSxyZXN1bHRzOltdLGxhc3RSZXN1bHQ6dm9pZCAwfSk7eS50eXBlPT09Mz9ULnB1c2goST1FLmNsZWFyKCkpOlQucHVzaChJPUUuZGVsZXRlKGkoeSkpKX1lbHNle3ZhciBIPVI/UD9bdyxnXTpbdyxudWxsXTpbZyxudWxsXSxpZT1IWzBdLEc9SFsxXTtpZihSKWZvcih2YXIgZWU9MDtlZTxBOysrZWUpVC5wdXNoKEk9RyYmR1tlZV0hPT12b2lkIDA/RVttXShpZVtlZV0sR1tlZV0pOkVbbV0oaWVbZWVdKSksSS5vbmVycm9yPVY7ZWxzZSBmb3IodmFyIGVlPTA7ZWU8QTsrK2VlKVQucHVzaChJPUVbbV0oaWVbZWVdKSksSS5vbmVycm9yPVZ9dmFyIGJlPWZ1bmN0aW9uKGFlKXt2YXIgdW49YWUudGFyZ2V0LnJlc3VsdDtULmZvckVhY2goZnVuY3Rpb24obmUsUm4pe3JldHVybiBuZS5lcnJvciE9bnVsbCYmKE1bUm5dPW5lLmVycm9yKX0pLHgoe251bUZhaWx1cmVzOk8sZmFpbHVyZXM6TSxyZXN1bHRzOm09PT1cImRlbGV0ZVwiP2c6VC5tYXAoZnVuY3Rpb24obmUpe3JldHVybiBuZS5yZXN1bHR9KSxsYXN0UmVzdWx0OnVufSl9O0kub25lcnJvcj1mdW5jdGlvbihhZSl7VihhZSksYmUoYWUpfSxJLm9uc3VjY2Vzcz1iZX0pfWZ1bmN0aW9uIGYodil7dmFyIGI9di50cmFucyxtPXYudmFsdWVzLGc9di5xdWVyeSx3PXYucmV2ZXJzZSx5PXYudW5pcXVlO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih4LFMpe3g9aih4KTt2YXIgRT1nLmluZGV4LFA9Zy5yYW5nZSxSPWIub2JqZWN0U3RvcmUocCksQT1FLmlzUHJpbWFyeUtleT9SOlIuaW5kZXgoRS5uYW1lKSxJPXc/eT9cInByZXZ1bmlxdWVcIjpcInByZXZcIjp5P1wibmV4dHVuaXF1ZVwiOlwibmV4dFwiLFQ9bXx8IShcIm9wZW5LZXlDdXJzb3JcImluIEEpP0Eub3BlbkN1cnNvcihpKFApLEkpOkEub3BlbktleUN1cnNvcihpKFApLEkpO1Qub25lcnJvcj1yZShTKSxULm9uc3VjY2Vzcz1qKGZ1bmN0aW9uKE0pe3ZhciBPPVQucmVzdWx0O2lmKCFPKXt4KG51bGwpO3JldHVybn1PLl9fX2lkPSsrYmksTy5kb25lPSExO3ZhciBWPU8uY29udGludWUuYmluZChPKSxIPU8uY29udGludWVQcmltYXJ5S2V5O0gmJihIPUguYmluZChPKSk7dmFyIGllPU8uYWR2YW5jZS5iaW5kKE8pLEc9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJDdXJzb3Igbm90IHN0YXJ0ZWRcIil9LGVlPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiQ3Vyc29yIG5vdCBzdG9wcGVkXCIpfTtPLnRyYW5zPWIsTy5zdG9wPU8uY29udGludWU9Ty5jb250aW51ZVByaW1hcnlLZXk9Ty5hZHZhbmNlPUcsTy5mYWlsPWooUyksTy5uZXh0PWZ1bmN0aW9uKCl7dmFyIGJlPXRoaXMsYWU9MTtyZXR1cm4gdGhpcy5zdGFydChmdW5jdGlvbigpe3JldHVybiBhZS0tP2JlLmNvbnRpbnVlKCk6YmUuc3RvcCgpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBiZX0pfSxPLnN0YXJ0PWZ1bmN0aW9uKGJlKXt2YXIgYWU9bmV3IFByb21pc2UoZnVuY3Rpb24obmUsUm4pe25lPWoobmUpLFQub25lcnJvcj1yZShSbiksTy5mYWlsPVJuLE8uc3RvcD1mdW5jdGlvbihvYSl7Ty5zdG9wPU8uY29udGludWU9Ty5jb250aW51ZVByaW1hcnlLZXk9Ty5hZHZhbmNlPWVlLG5lKG9hKX19KSx1bj1mdW5jdGlvbigpe2lmKFQucmVzdWx0KXRyeXtiZSgpfWNhdGNoKG5lKXtPLmZhaWwobmUpfWVsc2UgTy5kb25lPSEwLE8uc3RhcnQ9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJDdXJzb3IgYmVoaW5kIGxhc3QgZW50cnlcIil9LE8uc3RvcCgpfTtyZXR1cm4gVC5vbnN1Y2Nlc3M9aihmdW5jdGlvbihuZSl7VC5vbnN1Y2Nlc3M9dW4sdW4oKX0pLE8uY29udGludWU9VixPLmNvbnRpbnVlUHJpbWFyeUtleT1ILE8uYWR2YW5jZT1pZSx1bigpLGFlfSx4KE8pfSxTKX0pfWZ1bmN0aW9uIGQodil7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihtLGcpe209aihtKTt2YXIgdz1iLnRyYW5zLHk9Yi52YWx1ZXMseD1iLmxpbWl0LFM9Yi5xdWVyeSxFPXg9PT0xLzA/dm9pZCAwOngsUD1TLmluZGV4LFI9Uy5yYW5nZSxBPXcub2JqZWN0U3RvcmUocCksST1QLmlzUHJpbWFyeUtleT9BOkEuaW5kZXgoUC5uYW1lKSxUPWkoUik7aWYoeD09PTApcmV0dXJuIG0oe3Jlc3VsdDpbXX0pO2lmKHYpe3ZhciBNPXk/SS5nZXRBbGwoVCxFKTpJLmdldEFsbEtleXMoVCxFKTtNLm9uc3VjY2Vzcz1mdW5jdGlvbihpZSl7cmV0dXJuIG0oe3Jlc3VsdDppZS50YXJnZXQucmVzdWx0fSl9LE0ub25lcnJvcj1yZShnKX1lbHNle3ZhciBPPTAsVj15fHwhKFwib3BlbktleUN1cnNvclwiaW4gSSk/SS5vcGVuQ3Vyc29yKFQpOkkub3BlbktleUN1cnNvcihUKSxIPVtdO1Yub25zdWNjZXNzPWZ1bmN0aW9uKGllKXt2YXIgRz1WLnJlc3VsdDtpZighRylyZXR1cm4gbSh7cmVzdWx0Okh9KTtpZihILnB1c2goeT9HLnZhbHVlOkcucHJpbWFyeUtleSksKytPPT09eClyZXR1cm4gbSh7cmVzdWx0Okh9KTtHLmNvbnRpbnVlKCl9LFYub25lcnJvcj1yZShnKX19KX19cmV0dXJue25hbWU6cCxzY2hlbWE6bCxtdXRhdGU6XyxnZXRNYW55OmZ1bmN0aW9uKHYpe3ZhciBiPXYudHJhbnMsbT12LmtleXM7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGcsdyl7Zz1qKGcpO2Zvcih2YXIgeT1iLm9iamVjdFN0b3JlKHApLHg9bS5sZW5ndGgsUz1uZXcgQXJyYXkoeCksRT0wLFA9MCxSLEE9ZnVuY3Rpb24oTyl7dmFyIFY9Ty50YXJnZXQ7KFNbVi5fcG9zXT1WLnJlc3VsdCkhPW51bGwsKytQPT09RSYmZyhTKX0sST1yZSh3KSxUPTA7VDx4OysrVCl7dmFyIE09bVtUXTtNIT1udWxsJiYoUj15LmdldChtW1RdKSxSLl9wb3M9VCxSLm9uc3VjY2Vzcz1BLFIub25lcnJvcj1JLCsrRSl9RT09PTAmJmcoUyl9KX0sZ2V0OmZ1bmN0aW9uKHYpe3ZhciBiPXYudHJhbnMsbT12LmtleTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZyx3KXtnPWooZyk7dmFyIHk9Yi5vYmplY3RTdG9yZShwKSx4PXkuZ2V0KG0pO3gub25zdWNjZXNzPWZ1bmN0aW9uKFMpe3JldHVybiBnKFMudGFyZ2V0LnJlc3VsdCl9LHgub25lcnJvcj1yZSh3KX0pfSxxdWVyeTpkKHMpLG9wZW5DdXJzb3I6Zixjb3VudDpmdW5jdGlvbih2KXt2YXIgYj12LnF1ZXJ5LG09di50cmFucyxnPWIuaW5kZXgsdz1iLnJhbmdlO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih5LHgpe3ZhciBTPW0ub2JqZWN0U3RvcmUocCksRT1nLmlzUHJpbWFyeUtleT9TOlMuaW5kZXgoZy5uYW1lKSxQPWkodyksUj1QP0UuY291bnQoUCk6RS5jb3VudCgpO1Iub25zdWNjZXNzPWooZnVuY3Rpb24oQSl7cmV0dXJuIHkoQS50YXJnZXQucmVzdWx0KX0pLFIub25lcnJvcj1yZSh4KX0pfX19dmFyIHU9cihlLHQpLG89dS5zY2hlbWEscz11Lmhhc0dldEFsbCxjPW8udGFibGVzLm1hcChmdW5jdGlvbihsKXtyZXR1cm4gYShsKX0pLGg9e307cmV0dXJuIGMuZm9yRWFjaChmdW5jdGlvbihsKXtyZXR1cm4gaFtsLm5hbWVdPWx9KSx7c3RhY2s6XCJkYmNvcmVcIix0cmFuc2FjdGlvbjplLnRyYW5zYWN0aW9uLmJpbmQoZSksdGFibGU6ZnVuY3Rpb24obCl7dmFyIHA9aFtsXTtpZighcCl0aHJvdyBuZXcgRXJyb3IoXCJUYWJsZSAnXCIuY29uY2F0KGwsXCInIG5vdCBmb3VuZFwiKSk7cmV0dXJuIGhbbF19LE1JTl9LRVk6LTEvMCxNQVhfS0VZOm5uKG4pLHNjaGVtYTpvfX1mdW5jdGlvbiBfaShlLG4pe3JldHVybiBuLnJlZHVjZShmdW5jdGlvbih0LHIpe3ZhciBpPXIuY3JlYXRlO3JldHVybiBDKEMoe30sdCksaSh0KSl9LGUpfWZ1bmN0aW9uIHhpKGUsbix0LHIpe3ZhciBpPXQuSURCS2V5UmFuZ2U7dC5pbmRleGVkREI7dmFyIGE9X2kod2kobixpLHIpLGUuZGJjb3JlKTtyZXR1cm57ZGJjb3JlOmF9fWZ1bmN0aW9uIEVuKGUsbil7dmFyIHQ9bi5kYixyPXhpKGUuX21pZGRsZXdhcmVzLHQsZS5fZGVwcyxuKTtlLmNvcmU9ci5kYmNvcmUsZS50YWJsZXMuZm9yRWFjaChmdW5jdGlvbihpKXt2YXIgYT1pLm5hbWU7ZS5jb3JlLnNjaGVtYS50YWJsZXMuc29tZShmdW5jdGlvbih1KXtyZXR1cm4gdS5uYW1lPT09YX0pJiYoaS5jb3JlPWUuY29yZS50YWJsZShhKSxlW2FdaW5zdGFuY2VvZiBlLlRhYmxlJiYoZVthXS5jb3JlPWkuY29yZSkpfSl9ZnVuY3Rpb24gS24oZSxuLHQscil7dC5mb3JFYWNoKGZ1bmN0aW9uKGkpe3ZhciBhPXJbaV07bi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBvPVR0KHUsaSk7KCFvfHxcInZhbHVlXCJpbiBvJiZvLnZhbHVlPT09dm9pZCAwKSYmKHU9PT1lLlRyYW5zYWN0aW9uLnByb3RvdHlwZXx8dSBpbnN0YW5jZW9mIGUuVHJhbnNhY3Rpb24/bGUodSxpLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWJsZShpKX0sc2V0OmZ1bmN0aW9uKHMpe1B0KHRoaXMsaSx7dmFsdWU6cyx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMH0pfX0pOnVbaV09bmV3IGUuVGFibGUoaSxhKSl9KX0pfWZ1bmN0aW9uIGx0KGUsbil7bi5mb3JFYWNoKGZ1bmN0aW9uKHQpe2Zvcih2YXIgciBpbiB0KXRbcl1pbnN0YW5jZW9mIGUuVGFibGUmJmRlbGV0ZSB0W3JdfSl9ZnVuY3Rpb24gRWkoZSxuKXtyZXR1cm4gZS5fY2ZnLnZlcnNpb24tbi5fY2ZnLnZlcnNpb259ZnVuY3Rpb24gS2koZSxuLHQscil7dmFyIGk9ZS5fZGJTY2hlbWE7dC5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFwiJG1ldGFcIikmJiFpLiRtZXRhJiYoaS4kbWV0YT1zdChcIiRtZXRhXCIsbHIoXCJcIilbMF0sW10pLGUuX3N0b3JlTmFtZXMucHVzaChcIiRtZXRhXCIpKTt2YXIgYT1lLl9jcmVhdGVUcmFuc2FjdGlvbihcInJlYWR3cml0ZVwiLGUuX3N0b3JlTmFtZXMsaSk7YS5jcmVhdGUodCksYS5fY29tcGxldGlvbi5jYXRjaChyKTt2YXIgdT1hLl9yZWplY3QuYmluZChhKSxvPWsudHJhbnNsZXNzfHxrO2hlKGZ1bmN0aW9uKCl7aWYoay50cmFucz1hLGsudHJhbnNsZXNzPW8sbj09PTApVShpKS5mb3JFYWNoKGZ1bmN0aW9uKHMpe2h0KHQscyxpW3NdLnByaW1LZXksaVtzXS5pbmRleGVzKX0pLEVuKGUsdCksSy5mb2xsb3coZnVuY3Rpb24oKXtyZXR1cm4gZS5vbi5wb3B1bGF0ZS5maXJlKGEpfSkuY2F0Y2godSk7ZWxzZSByZXR1cm4gRW4oZSx0KSxBaShlLGEsbikudGhlbihmdW5jdGlvbihzKXtyZXR1cm4ga2koZSxzLGEsdCl9KS5jYXRjaCh1KX0pfWZ1bmN0aW9uIFNpKGUsbil7Y3IoZS5fZGJTY2hlbWEsbiksbi5kYi52ZXJzaW9uJTEwPT09MCYmIW4ub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhcIiRtZXRhXCIpJiZuLmRiLmNyZWF0ZU9iamVjdFN0b3JlKFwiJG1ldGFcIikuYWRkKE1hdGguY2VpbChuLmRiLnZlcnNpb24vMTAtMSksXCJ2ZXJzaW9uXCIpO3ZhciB0PUFuKGUsZS5pZGJkYixuKTtrbihlLGUuX2RiU2NoZW1hLG4pO2Zvcih2YXIgcj1mdCh0LGUuX2RiU2NoZW1hKSxpPWZ1bmN0aW9uKGMpe2lmKGMuY2hhbmdlLmxlbmd0aHx8Yy5yZWNyZWF0ZSlyZXR1cm4gY29uc29sZS53YXJuKFwiVW5hYmxlIHRvIHBhdGNoIGluZGV4ZXMgb2YgdGFibGUgXCIuY29uY2F0KGMubmFtZSxcIiBiZWNhdXNlIGl0IGhhcyBjaGFuZ2VzIG9uIHRoZSB0eXBlIG9mIGluZGV4IG9yIHByaW1hcnkga2V5LlwiKSkse3ZhbHVlOnZvaWQgMH07dmFyIGg9bi5vYmplY3RTdG9yZShjLm5hbWUpO2MuYWRkLmZvckVhY2goZnVuY3Rpb24obCl7dGUmJmNvbnNvbGUuZGVidWcoXCJEZXhpZSB1cGdyYWRlIHBhdGNoOiBDcmVhdGluZyBtaXNzaW5nIGluZGV4IFwiLmNvbmNhdChjLm5hbWUsXCIuXCIpLmNvbmNhdChsLnNyYykpLFNuKGgsbCl9KX0sYT0wLHU9ci5jaGFuZ2U7YTx1Lmxlbmd0aDthKyspe3ZhciBvPXVbYV0scz1pKG8pO2lmKHR5cGVvZiBzPT1cIm9iamVjdFwiKXJldHVybiBzLnZhbHVlfX1mdW5jdGlvbiBBaShlLG4sdCl7cmV0dXJuIG4uc3RvcmVOYW1lcy5pbmNsdWRlcyhcIiRtZXRhXCIpP24udGFibGUoXCIkbWV0YVwiKS5nZXQoXCJ2ZXJzaW9uXCIpLnRoZW4oZnVuY3Rpb24ocil7cmV0dXJuIHI/P3R9KTpLLnJlc29sdmUodCl9ZnVuY3Rpb24ga2koZSxuLHQscil7dmFyIGk9W10sYT1lLl92ZXJzaW9ucyx1PWUuX2RiU2NoZW1hPUFuKGUsZS5pZGJkYixyKSxvPWEuZmlsdGVyKGZ1bmN0aW9uKGMpe3JldHVybiBjLl9jZmcudmVyc2lvbj49bn0pO2lmKG8ubGVuZ3RoPT09MClyZXR1cm4gSy5yZXNvbHZlKCk7by5mb3JFYWNoKGZ1bmN0aW9uKGMpe2kucHVzaChmdW5jdGlvbigpe3ZhciBoPXUsbD1jLl9jZmcuZGJzY2hlbWE7a24oZSxoLHIpLGtuKGUsbCxyKSx1PWUuX2RiU2NoZW1hPWw7dmFyIHA9ZnQoaCxsKTtwLmFkZC5mb3JFYWNoKGZ1bmN0aW9uKG0pe2h0KHIsbVswXSxtWzFdLnByaW1LZXksbVsxXS5pbmRleGVzKX0pLHAuY2hhbmdlLmZvckVhY2goZnVuY3Rpb24obSl7aWYobS5yZWNyZWF0ZSl0aHJvdyBuZXcgRC5VcGdyYWRlKFwiTm90IHlldCBzdXBwb3J0IGZvciBjaGFuZ2luZyBwcmltYXJ5IGtleVwiKTt2YXIgZz1yLm9iamVjdFN0b3JlKG0ubmFtZSk7bS5hZGQuZm9yRWFjaChmdW5jdGlvbih3KXtyZXR1cm4gU24oZyx3KX0pLG0uY2hhbmdlLmZvckVhY2goZnVuY3Rpb24odyl7Zy5kZWxldGVJbmRleCh3Lm5hbWUpLFNuKGcsdyl9KSxtLmRlbC5mb3JFYWNoKGZ1bmN0aW9uKHcpe3JldHVybiBnLmRlbGV0ZUluZGV4KHcpfSl9KTt2YXIgXz1jLl9jZmcuY29udGVudFVwZ3JhZGU7aWYoXyYmYy5fY2ZnLnZlcnNpb24+bil7RW4oZSxyKSx0Ll9tZW1vaXplZFRhYmxlcz17fTt2YXIgZj1SdChsKTtwLmRlbC5mb3JFYWNoKGZ1bmN0aW9uKG0pe2ZbbV09aFttXX0pLGx0KGUsW2UuVHJhbnNhY3Rpb24ucHJvdG90eXBlXSksS24oZSxbZS5UcmFuc2FjdGlvbi5wcm90b3R5cGVdLFUoZiksZiksdC5zY2hlbWE9Zjt2YXIgZD1MbihfKTtkJiZMZSgpO3ZhciB2LGI9Sy5mb2xsb3coZnVuY3Rpb24oKXtpZih2PV8odCksdiYmZCl7dmFyIG09ZGUuYmluZChudWxsLG51bGwpO3YudGhlbihtLG0pfX0pO3JldHVybiB2JiZ0eXBlb2Ygdi50aGVuPT1cImZ1bmN0aW9uXCI/Sy5yZXNvbHZlKHYpOmIudGhlbihmdW5jdGlvbigpe3JldHVybiB2fSl9fSksaS5wdXNoKGZ1bmN0aW9uKGgpe3ZhciBsPWMuX2NmZy5kYnNjaGVtYTtPaShsLGgpLGx0KGUsW2UuVHJhbnNhY3Rpb24ucHJvdG90eXBlXSksS24oZSxbZS5UcmFuc2FjdGlvbi5wcm90b3R5cGVdLGUuX3N0b3JlTmFtZXMsZS5fZGJTY2hlbWEpLHQuc2NoZW1hPWUuX2RiU2NoZW1hfSksaS5wdXNoKGZ1bmN0aW9uKGgpe2UuaWRiZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhcIiRtZXRhXCIpJiYoTWF0aC5jZWlsKGUuaWRiZGIudmVyc2lvbi8xMCk9PT1jLl9jZmcudmVyc2lvbj8oZS5pZGJkYi5kZWxldGVPYmplY3RTdG9yZShcIiRtZXRhXCIpLGRlbGV0ZSBlLl9kYlNjaGVtYS4kbWV0YSxlLl9zdG9yZU5hbWVzPWUuX3N0b3JlTmFtZXMuZmlsdGVyKGZ1bmN0aW9uKGwpe3JldHVybiBsIT09XCIkbWV0YVwifSkpOmgub2JqZWN0U3RvcmUoXCIkbWV0YVwiKS5wdXQoYy5fY2ZnLnZlcnNpb24sXCJ2ZXJzaW9uXCIpKX0pfSk7ZnVuY3Rpb24gcygpe3JldHVybiBpLmxlbmd0aD9LLnJlc29sdmUoaS5zaGlmdCgpKHQuaWRidHJhbnMpKS50aGVuKHMpOksucmVzb2x2ZSgpfXJldHVybiBzKCkudGhlbihmdW5jdGlvbigpe2NyKHUscil9KX1mdW5jdGlvbiBmdChlLG4pe3ZhciB0PXtkZWw6W10sYWRkOltdLGNoYW5nZTpbXX0scjtmb3IociBpbiBlKW5bcl18fHQuZGVsLnB1c2gocik7Zm9yKHIgaW4gbil7dmFyIGk9ZVtyXSxhPW5bcl07aWYoIWkpdC5hZGQucHVzaChbcixhXSk7ZWxzZXt2YXIgdT17bmFtZTpyLGRlZjphLHJlY3JlYXRlOiExLGRlbDpbXSxhZGQ6W10sY2hhbmdlOltdfTtpZihcIlwiKyhpLnByaW1LZXkua2V5UGF0aHx8XCJcIikhPVwiXCIrKGEucHJpbUtleS5rZXlQYXRofHxcIlwiKXx8aS5wcmltS2V5LmF1dG8hPT1hLnByaW1LZXkuYXV0byl1LnJlY3JlYXRlPSEwLHQuY2hhbmdlLnB1c2godSk7ZWxzZXt2YXIgbz1pLmlkeEJ5TmFtZSxzPWEuaWR4QnlOYW1lLGM9dm9pZCAwO2ZvcihjIGluIG8pc1tjXXx8dS5kZWwucHVzaChjKTtmb3IoYyBpbiBzKXt2YXIgaD1vW2NdLGw9c1tjXTtoP2guc3JjIT09bC5zcmMmJnUuY2hhbmdlLnB1c2gobCk6dS5hZGQucHVzaChsKX0odS5kZWwubGVuZ3RoPjB8fHUuYWRkLmxlbmd0aD4wfHx1LmNoYW5nZS5sZW5ndGg+MCkmJnQuY2hhbmdlLnB1c2godSl9fX1yZXR1cm4gdH1mdW5jdGlvbiBodChlLG4sdCxyKXt2YXIgaT1lLmRiLmNyZWF0ZU9iamVjdFN0b3JlKG4sdC5rZXlQYXRoP3trZXlQYXRoOnQua2V5UGF0aCxhdXRvSW5jcmVtZW50OnQuYXV0b306e2F1dG9JbmNyZW1lbnQ6dC5hdXRvfSk7cmV0dXJuIHIuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gU24oaSxhKX0pLGl9ZnVuY3Rpb24gY3IoZSxuKXtVKGUpLmZvckVhY2goZnVuY3Rpb24odCl7bi5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHQpfHwodGUmJmNvbnNvbGUuZGVidWcoXCJEZXhpZTogQ3JlYXRpbmcgbWlzc2luZyB0YWJsZVwiLHQpLGh0KG4sdCxlW3RdLnByaW1LZXksZVt0XS5pbmRleGVzKSl9KX1mdW5jdGlvbiBPaShlLG4pe1tdLnNsaWNlLmNhbGwobi5kYi5vYmplY3RTdG9yZU5hbWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdPT1udWxsJiZuLmRiLmRlbGV0ZU9iamVjdFN0b3JlKHQpfSl9ZnVuY3Rpb24gU24oZSxuKXtlLmNyZWF0ZUluZGV4KG4ubmFtZSxuLmtleVBhdGgse3VuaXF1ZTpuLnVuaXF1ZSxtdWx0aUVudHJ5Om4ubXVsdGl9KX1mdW5jdGlvbiBBbihlLG4sdCl7dmFyIHI9e30saT1vbihuLm9iamVjdFN0b3JlTmFtZXMsMCk7cmV0dXJuIGkuZm9yRWFjaChmdW5jdGlvbihhKXtmb3IodmFyIHU9dC5vYmplY3RTdG9yZShhKSxvPXUua2V5UGF0aCxzPW90KG9yKG8pLG98fFwiXCIsITAsITEsISF1LmF1dG9JbmNyZW1lbnQsbyYmdHlwZW9mIG8hPVwic3RyaW5nXCIsITApLGM9W10saD0wO2g8dS5pbmRleE5hbWVzLmxlbmd0aDsrK2gpe3ZhciBsPXUuaW5kZXgodS5pbmRleE5hbWVzW2hdKTtvPWwua2V5UGF0aDt2YXIgcD1vdChsLm5hbWUsbywhIWwudW5pcXVlLCEhbC5tdWx0aUVudHJ5LCExLG8mJnR5cGVvZiBvIT1cInN0cmluZ1wiLCExKTtjLnB1c2gocCl9clthXT1zdChhLHMsYyl9KSxyfWZ1bmN0aW9uIERpKGUsbix0KXtlLnZlcm5vPW4udmVyc2lvbi8xMDt2YXIgcj1lLl9kYlNjaGVtYT1BbihlLG4sdCk7ZS5fc3RvcmVOYW1lcz1vbihuLm9iamVjdFN0b3JlTmFtZXMsMCksS24oZSxbZS5fYWxsVGFibGVzXSxVKHIpLHIpfWZ1bmN0aW9uIFBpKGUsbil7dmFyIHQ9QW4oZSxlLmlkYmRiLG4pLHI9ZnQodCxlLl9kYlNjaGVtYSk7cmV0dXJuIShyLmFkZC5sZW5ndGh8fHIuY2hhbmdlLnNvbWUoZnVuY3Rpb24oaSl7cmV0dXJuIGkuYWRkLmxlbmd0aHx8aS5jaGFuZ2UubGVuZ3RofSkpfWZ1bmN0aW9uIGtuKGUsbix0KXtmb3IodmFyIHI9dC5kYi5vYmplY3RTdG9yZU5hbWVzLGk9MDtpPHIubGVuZ3RoOysraSl7dmFyIGE9cltpXSx1PXQub2JqZWN0U3RvcmUoYSk7ZS5faGFzR2V0QWxsPVwiZ2V0QWxsXCJpbiB1O2Zvcih2YXIgbz0wO288dS5pbmRleE5hbWVzLmxlbmd0aDsrK28pe3ZhciBzPXUuaW5kZXhOYW1lc1tvXSxjPXUuaW5kZXgocykua2V5UGF0aCxoPXR5cGVvZiBjPT1cInN0cmluZ1wiP2M6XCJbXCIrb24oYykuam9pbihcIitcIikrXCJdXCI7aWYoblthXSl7dmFyIGw9blthXS5pZHhCeU5hbWVbaF07bCYmKGwubmFtZT1zLGRlbGV0ZSBuW2FdLmlkeEJ5TmFtZVtoXSxuW2FdLmlkeEJ5TmFtZVtzXT1sKX19fXR5cGVvZiBuYXZpZ2F0b3I8XCJ1XCImJi9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiEvKENocm9tZVxcL3xFZGdlXFwvKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmTi5Xb3JrZXJHbG9iYWxTY29wZSYmTiBpbnN0YW5jZW9mIE4uV29ya2VyR2xvYmFsU2NvcGUmJltdLmNvbmNhdChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9TYWZhcmlcXC8oXFxkKikvKSlbMV08NjA0JiYoZS5faGFzR2V0QWxsPSExKX1mdW5jdGlvbiBscihlKXtyZXR1cm4gZS5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uKG4sdCl7bj1uLnRyaW0oKTt2YXIgcj1uLnJlcGxhY2UoLyhbJipdfFxcK1xcKykvZyxcIlwiKSxpPS9eXFxbLy50ZXN0KHIpP3IubWF0Y2goL15cXFsoLiopXFxdJC8pWzFdLnNwbGl0KFwiK1wiKTpyO3JldHVybiBvdChyLGl8fG51bGwsL1xcJi8udGVzdChuKSwvXFwqLy50ZXN0KG4pLC9cXCtcXCsvLnRlc3QobiksTChpKSx0PT09MCl9KX12YXIgVGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXJldHVybiBlLnByb3RvdHlwZS5fcGFyc2VTdG9yZXNTcGVjPWZ1bmN0aW9uKG4sdCl7VShuKS5mb3JFYWNoKGZ1bmN0aW9uKHIpe2lmKG5bcl0hPT1udWxsKXt2YXIgaT1scihuW3JdKSxhPWkuc2hpZnQoKTtpZihhLnVuaXF1ZT0hMCxhLm11bHRpKXRocm93IG5ldyBELlNjaGVtYShcIlByaW1hcnkga2V5IGNhbm5vdCBiZSBtdWx0aS12YWx1ZWRcIik7aS5mb3JFYWNoKGZ1bmN0aW9uKHUpe2lmKHUuYXV0byl0aHJvdyBuZXcgRC5TY2hlbWEoXCJPbmx5IHByaW1hcnkga2V5IGNhbiBiZSBtYXJrZWQgYXMgYXV0b0luY3JlbWVudCAoKyspXCIpO2lmKCF1LmtleVBhdGgpdGhyb3cgbmV3IEQuU2NoZW1hKFwiSW5kZXggbXVzdCBoYXZlIGEgbmFtZSBhbmQgY2Fubm90IGJlIGFuIGVtcHR5IHN0cmluZ1wiKX0pLHRbcl09c3QocixhLGkpfX0pfSxlLnByb3RvdHlwZS5zdG9yZXM9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcy5kYjt0aGlzLl9jZmcuc3RvcmVzU291cmNlPXRoaXMuX2NmZy5zdG9yZXNTb3VyY2U/Sih0aGlzLl9jZmcuc3RvcmVzU291cmNlLG4pOm47dmFyIHI9dC5fdmVyc2lvbnMsaT17fSxhPXt9O3JldHVybiByLmZvckVhY2goZnVuY3Rpb24odSl7SihpLHUuX2NmZy5zdG9yZXNTb3VyY2UpLGE9dS5fY2ZnLmRic2NoZW1hPXt9LHUuX3BhcnNlU3RvcmVzU3BlYyhpLGEpfSksdC5fZGJTY2hlbWE9YSxsdCh0LFt0Ll9hbGxUYWJsZXMsdCx0LlRyYW5zYWN0aW9uLnByb3RvdHlwZV0pLEtuKHQsW3QuX2FsbFRhYmxlcyx0LHQuVHJhbnNhY3Rpb24ucHJvdG90eXBlLHRoaXMuX2NmZy50YWJsZXNdLFUoYSksYSksdC5fc3RvcmVOYW1lcz1VKGEpLHRoaXN9LGUucHJvdG90eXBlLnVwZ3JhZGU9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuX2NmZy5jb250ZW50VXBncmFkZT1Xbih0aGlzLl9jZmcuY29udGVudFVwZ3JhZGV8fEYsbiksdGhpc30sZX0oKTtmdW5jdGlvbiBDaShlKXtyZXR1cm4gSmUoVGkucHJvdG90eXBlLGZ1bmN0aW9uKHQpe3RoaXMuZGI9ZSx0aGlzLl9jZmc9e3ZlcnNpb246dCxzdG9yZXNTb3VyY2U6bnVsbCxkYnNjaGVtYTp7fSx0YWJsZXM6e30sY29udGVudFVwZ3JhZGU6bnVsbH19KX1mdW5jdGlvbiBkdChlLG4pe3ZhciB0PWUuX2RiTmFtZXNEQjtyZXR1cm4gdHx8KHQ9ZS5fZGJOYW1lc0RCPW5ldyBjZShnbix7YWRkb25zOltdLGluZGV4ZWREQjplLElEQktleVJhbmdlOm59KSx0LnZlcnNpb24oMSkuc3RvcmVzKHtkYm5hbWVzOlwibmFtZVwifSkpLHQudGFibGUoXCJkYm5hbWVzXCIpfWZ1bmN0aW9uIHZ0KGUpe3JldHVybiBlJiZ0eXBlb2YgZS5kYXRhYmFzZXM9PVwiZnVuY3Rpb25cIn1mdW5jdGlvbiBJaShlKXt2YXIgbj1lLmluZGV4ZWREQix0PWUuSURCS2V5UmFuZ2U7cmV0dXJuIHZ0KG4pP1Byb21pc2UucmVzb2x2ZShuLmRhdGFiYXNlcygpKS50aGVuKGZ1bmN0aW9uKHIpe3JldHVybiByLm1hcChmdW5jdGlvbihpKXtyZXR1cm4gaS5uYW1lfSkuZmlsdGVyKGZ1bmN0aW9uKGkpe3JldHVybiBpIT09Z259KX0pOmR0KG4sdCkudG9Db2xsZWN0aW9uKCkucHJpbWFyeUtleXMoKX1mdW5jdGlvbiBSaShlLG4pe3ZhciB0PWUuaW5kZXhlZERCLHI9ZS5JREJLZXlSYW5nZTshdnQodCkmJm4hPT1nbiYmZHQodCxyKS5wdXQoe25hbWU6bn0pLmNhdGNoKEYpfWZ1bmN0aW9uIEJpKGUsbil7dmFyIHQ9ZS5pbmRleGVkREIscj1lLklEQktleVJhbmdlOyF2dCh0KSYmbiE9PWduJiZkdCh0LHIpLmRlbGV0ZShuKS5jYXRjaChGKX1mdW5jdGlvbiBwdChlKXtyZXR1cm4gaGUoZnVuY3Rpb24oKXtyZXR1cm4gay5sZXRUaHJvdWdoPSEwLGUoKX0pfWZ1bmN0aW9uIE1pKCl7dmFyIGU9IW5hdmlnYXRvci51c2VyQWdlbnREYXRhJiYvU2FmYXJpXFwvLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhL0Nocm9tKGV8aXVtKVxcLy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZighZXx8IWluZGV4ZWREQi5kYXRhYmFzZXMpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO3ZhciBuO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0KXt2YXIgcj1mdW5jdGlvbigpe3JldHVybiBpbmRleGVkREIuZGF0YWJhc2VzKCkuZmluYWxseSh0KX07bj1zZXRJbnRlcnZhbChyLDEwMCkscigpfSkuZmluYWxseShmdW5jdGlvbigpe3JldHVybiBjbGVhckludGVydmFsKG4pfSl9dmFyIHl0O2Z1bmN0aW9uIG10KGUpe3JldHVybiEoXCJmcm9tXCJpbiBlKX12YXIgUT1mdW5jdGlvbihlLG4pe2lmKHRoaXMpSih0aGlzLGFyZ3VtZW50cy5sZW5ndGg/e2Q6MSxmcm9tOmUsdG86YXJndW1lbnRzLmxlbmd0aD4xP246ZX06e2Q6MH0pO2Vsc2V7dmFyIHQ9bmV3IFE7cmV0dXJuIGUmJlwiZFwiaW4gZSYmSih0LGUpLHR9fTtJZShRLnByb3RvdHlwZSwoeXQ9e2FkZDpmdW5jdGlvbihlKXtyZXR1cm4gYW4odGhpcyxlKSx0aGlzfSxhZGRLZXk6ZnVuY3Rpb24oZSl7cmV0dXJuIHJuKHRoaXMsZSxlKSx0aGlzfSxhZGRLZXlzOmZ1bmN0aW9uKGUpe3ZhciBuPXRoaXM7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gcm4obix0LHQpfSksdGhpc30saGFzS2V5OmZ1bmN0aW9uKGUpe3ZhciBuPU9uKHRoaXMpLm5leHQoZSkudmFsdWU7cmV0dXJuIG4mJkIobi5mcm9tLGUpPD0wJiZCKG4udG8sZSk+PTB9fSx5dFtObl09ZnVuY3Rpb24oKXtyZXR1cm4gT24odGhpcyl9LHl0KSk7ZnVuY3Rpb24gcm4oZSxuLHQpe3ZhciByPUIobix0KTtpZighaXNOYU4ocikpe2lmKHI+MCl0aHJvdyBSYW5nZUVycm9yKCk7aWYobXQoZSkpcmV0dXJuIEooZSx7ZnJvbTpuLHRvOnQsZDoxfSk7dmFyIGk9ZS5sLGE9ZS5yO2lmKEIodCxlLmZyb20pPDApcmV0dXJuIGk/cm4oaSxuLHQpOmUubD17ZnJvbTpuLHRvOnQsZDoxLGw6bnVsbCxyOm51bGx9LGhyKGUpO2lmKEIobixlLnRvKT4wKXJldHVybiBhP3JuKGEsbix0KTplLnI9e2Zyb206bix0bzp0LGQ6MSxsOm51bGwscjpudWxsfSxocihlKTtCKG4sZS5mcm9tKTwwJiYoZS5mcm9tPW4sZS5sPW51bGwsZS5kPWE/YS5kKzE6MSksQih0LGUudG8pPjAmJihlLnRvPXQsZS5yPW51bGwsZS5kPWUubD9lLmwuZCsxOjEpO3ZhciB1PSFlLnI7aSYmIWUubCYmYW4oZSxpKSxhJiZ1JiZhbihlLGEpfX1mdW5jdGlvbiBhbihlLG4pe2Z1bmN0aW9uIHQocixpKXt2YXIgYT1pLmZyb20sdT1pLnRvLG89aS5sLHM9aS5yO3JuKHIsYSx1KSxvJiZ0KHIsbykscyYmdChyLHMpfW10KG4pfHx0KGUsbil9ZnVuY3Rpb24gZnIoZSxuKXt2YXIgdD1PbihuKSxyPXQubmV4dCgpO2lmKHIuZG9uZSlyZXR1cm4hMTtmb3IodmFyIGk9ci52YWx1ZSxhPU9uKGUpLHU9YS5uZXh0KGkuZnJvbSksbz11LnZhbHVlOyFyLmRvbmUmJiF1LmRvbmU7KXtpZihCKG8uZnJvbSxpLnRvKTw9MCYmQihvLnRvLGkuZnJvbSk+PTApcmV0dXJuITA7QihpLmZyb20sby5mcm9tKTwwP2k9KHI9dC5uZXh0KG8uZnJvbSkpLnZhbHVlOm89KHU9YS5uZXh0KGkuZnJvbSkpLnZhbHVlfXJldHVybiExfWZ1bmN0aW9uIE9uKGUpe3ZhciBuPW10KGUpP251bGw6e3M6MCxuOmV9O3JldHVybntuZXh0OmZ1bmN0aW9uKHQpe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjA7bjspc3dpdGNoKG4ucyl7Y2FzZSAwOmlmKG4ucz0xLHIpZm9yKDtuLm4ubCYmQih0LG4ubi5mcm9tKTwwOyluPXt1cDpuLG46bi5uLmwsczoxfTtlbHNlIGZvcig7bi5uLmw7KW49e3VwOm4sbjpuLm4ubCxzOjF9O2Nhc2UgMTppZihuLnM9Miwhcnx8Qih0LG4ubi50byk8PTApcmV0dXJue3ZhbHVlOm4ubixkb25lOiExfTtjYXNlIDI6aWYobi5uLnIpe24ucz0zLG49e3VwOm4sbjpuLm4ucixzOjB9O2NvbnRpbnVlfWNhc2UgMzpuPW4udXB9cmV0dXJue2RvbmU6ITB9fX19ZnVuY3Rpb24gaHIoZSl7dmFyIG4sdCxyPSgoKG49ZS5yKT09PW51bGx8fG49PT12b2lkIDA/dm9pZCAwOm4uZCl8fDApLSgoKHQ9ZS5sKT09PW51bGx8fHQ9PT12b2lkIDA/dm9pZCAwOnQuZCl8fDApLGk9cj4xP1wiclwiOnI8LTE/XCJsXCI6XCJcIjtpZihpKXt2YXIgYT1pPT09XCJyXCI/XCJsXCI6XCJyXCIsdT1DKHt9LGUpLG89ZVtpXTtlLmZyb209by5mcm9tLGUudG89by50byxlW2ldPW9baV0sdVtpXT1vW2FdLGVbYV09dSx1LmQ9ZHIodSl9ZS5kPWRyKGUpfWZ1bmN0aW9uIGRyKGUpe3ZhciBuPWUucix0PWUubDtyZXR1cm4obj90P01hdGgubWF4KG4uZCx0LmQpOm4uZDp0P3QuZDowKSsxfWZ1bmN0aW9uIERuKGUsbil7cmV0dXJuIFUobikuZm9yRWFjaChmdW5jdGlvbih0KXtlW3RdP2FuKGVbdF0sblt0XSk6ZVt0XT1GdChuW3RdKX0pLGV9ZnVuY3Rpb24gZ3QoZSxuKXtyZXR1cm4gZS5hbGx8fG4uYWxsfHxPYmplY3Qua2V5cyhlKS5zb21lKGZ1bmN0aW9uKHQpe3JldHVybiBuW3RdJiZmcihuW3RdLGVbdF0pfSl9dmFyIFBlPXt9LGJ0PXt9LHd0PSExO2Z1bmN0aW9uIFBuKGUsbil7RG4oYnQsZSksd3R8fCh3dD0hMCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7d3Q9ITE7dmFyIHQ9YnQ7YnQ9e30sX3QodCwhMSl9LDApKX1mdW5jdGlvbiBfdChlLG4pe249PT12b2lkIDAmJihuPSExKTt2YXIgdD1uZXcgU2V0O2lmKGUuYWxsKWZvcih2YXIgcj0wLGk9T2JqZWN0LnZhbHVlcyhQZSk7cjxpLmxlbmd0aDtyKyspe3ZhciBhPWlbcl07dnIoYSxlLHQsbil9ZWxzZSBmb3IodmFyIHUgaW4gZSl7dmFyIG89L15pZGJcXDpcXC9cXC8oLiopXFwvKC4qKVxcLy8uZXhlYyh1KTtpZihvKXt2YXIgcz1vWzFdLGM9b1syXSxhPVBlW1wiaWRiOi8vXCIuY29uY2F0KHMsXCIvXCIpLmNvbmNhdChjKV07YSYmdnIoYSxlLHQsbil9fXQuZm9yRWFjaChmdW5jdGlvbihoKXtyZXR1cm4gaCgpfSl9ZnVuY3Rpb24gdnIoZSxuLHQscil7Zm9yKHZhciBpPVtdLGE9MCx1PU9iamVjdC5lbnRyaWVzKGUucXVlcmllcy5xdWVyeSk7YTx1Lmxlbmd0aDthKyspe2Zvcih2YXIgbz11W2FdLHM9b1swXSxjPW9bMV0saD1bXSxsPTAscD1jO2w8cC5sZW5ndGg7bCsrKXt2YXIgXz1wW2xdO2d0KG4sXy5vYnNTZXQpP18uc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbihiKXtyZXR1cm4gdC5hZGQoYil9KTpyJiZoLnB1c2goXyl9ciYmaS5wdXNoKFtzLGhdKX1pZihyKWZvcih2YXIgZj0wLGQ9aTtmPGQubGVuZ3RoO2YrKyl7dmFyIHY9ZFtmXSxzPXZbMF0saD12WzFdO2UucXVlcmllcy5xdWVyeVtzXT1ofX1mdW5jdGlvbiBGaShlKXt2YXIgbj1lLl9zdGF0ZSx0PWUuX2RlcHMuaW5kZXhlZERCO2lmKG4uaXNCZWluZ09wZW5lZHx8ZS5pZGJkYilyZXR1cm4gbi5kYlJlYWR5UHJvbWlzZS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIG4uZGJPcGVuRXJyb3I/eihuLmRiT3BlbkVycm9yKTplfSk7bi5pc0JlaW5nT3BlbmVkPSEwLG4uZGJPcGVuRXJyb3I9bnVsbCxuLm9wZW5Db21wbGV0ZT0hMTt2YXIgcj1uLm9wZW5DYW5jZWxsZXIsaT1NYXRoLnJvdW5kKGUudmVybm8qMTApLGE9ITE7ZnVuY3Rpb24gdSgpe2lmKG4ub3BlbkNhbmNlbGxlciE9PXIpdGhyb3cgbmV3IEQuRGF0YWJhc2VDbG9zZWQoXCJkYi5vcGVuKCkgd2FzIGNhbmNlbGxlZFwiKX12YXIgbz1uLmRiUmVhZHlSZXNvbHZlLHM9bnVsbCxjPSExLGg9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEsoZnVuY3Rpb24obCxwKXtpZih1KCksIXQpdGhyb3cgbmV3IEQuTWlzc2luZ0FQSTt2YXIgXz1lLm5hbWUsZj1uLmF1dG9TY2hlbWF8fCFpP3Qub3BlbihfKTp0Lm9wZW4oXyxpKTtpZighZil0aHJvdyBuZXcgRC5NaXNzaW5nQVBJO2Yub25lcnJvcj1yZShwKSxmLm9uYmxvY2tlZD1qKGUuX2ZpcmVPbkJsb2NrZWQpLGYub251cGdyYWRlbmVlZGVkPWooZnVuY3Rpb24oZCl7aWYocz1mLnRyYW5zYWN0aW9uLG4uYXV0b1NjaGVtYSYmIWUuX29wdGlvbnMuYWxsb3dFbXB0eURCKXtmLm9uZXJyb3I9cWUscy5hYm9ydCgpLGYucmVzdWx0LmNsb3NlKCk7dmFyIHY9dC5kZWxldGVEYXRhYmFzZShfKTt2Lm9uc3VjY2Vzcz12Lm9uZXJyb3I9aihmdW5jdGlvbigpe3AobmV3IEQuTm9TdWNoRGF0YWJhc2UoXCJEYXRhYmFzZSBcIi5jb25jYXQoXyxcIiBkb2VzbnQgZXhpc3RcIikpKX0pfWVsc2V7cy5vbmVycm9yPXJlKHApO3ZhciBiPWQub2xkVmVyc2lvbj5NYXRoLnBvdygyLDYyKT8wOmQub2xkVmVyc2lvbjtjPWI8MSxlLmlkYmRiPWYucmVzdWx0LGEmJlNpKGUscyksS2koZSxiLzEwLHMscCl9fSxwKSxmLm9uc3VjY2Vzcz1qKGZ1bmN0aW9uKCl7cz1udWxsO3ZhciBkPWUuaWRiZGI9Zi5yZXN1bHQsdj1vbihkLm9iamVjdFN0b3JlTmFtZXMpO2lmKHYubGVuZ3RoPjApdHJ5e3ZhciBiPWQudHJhbnNhY3Rpb24obWkodiksXCJyZWFkb25seVwiKTtpZihuLmF1dG9TY2hlbWEpRGkoZSxkLGIpO2Vsc2UgaWYoa24oZSxlLl9kYlNjaGVtYSxiKSwhUGkoZSxiKSYmIWEpcmV0dXJuIGNvbnNvbGUud2FybihcIkRleGllIFNjaGVtYURpZmY6IFNjaGVtYSB3YXMgZXh0ZW5kZWQgd2l0aG91dCBpbmNyZWFzaW5nIHRoZSBudW1iZXIgcGFzc2VkIHRvIGRiLnZlcnNpb24oKS4gRGV4aWUgd2lsbCBhZGQgbWlzc2luZyBwYXJ0cyBhbmQgaW5jcmVtZW50IG5hdGl2ZSB2ZXJzaW9uIG51bWJlciB0byB3b3JrYXJvdW5kIHRoaXMuXCIpLGQuY2xvc2UoKSxpPWQudmVyc2lvbisxLGE9ITAsbChoKCkpO0VuKGUsYil9Y2F0Y2h7fVZlLnB1c2goZSksZC5vbnZlcnNpb25jaGFuZ2U9aihmdW5jdGlvbihtKXtuLnZjRmlyZWQ9ITAsZS5vbihcInZlcnNpb25jaGFuZ2VcIikuZmlyZShtKX0pLGQub25jbG9zZT1qKGZ1bmN0aW9uKG0pe2Uub24oXCJjbG9zZVwiKS5maXJlKG0pfSksYyYmUmkoZS5fZGVwcyxfKSxsKCl9LHApfSkuY2F0Y2goZnVuY3Rpb24obCl7c3dpdGNoKGw/Lm5hbWUpe2Nhc2VcIlVua25vd25FcnJvclwiOmlmKG4uUFIxMzk4X21heExvb3A+MClyZXR1cm4gbi5QUjEzOThfbWF4TG9vcC0tLGNvbnNvbGUud2FybihcIkRleGllOiBXb3JrYXJvdW5kIGZvciBDaHJvbWUgVW5rbm93bkVycm9yIG9uIG9wZW4oKVwiKSxoKCk7YnJlYWs7Y2FzZVwiVmVyc2lvbkVycm9yXCI6aWYoaT4wKXJldHVybiBpPTAsaCgpO2JyZWFrfXJldHVybiBLLnJlamVjdChsKX0pfTtyZXR1cm4gSy5yYWNlKFtyLCh0eXBlb2YgbmF2aWdhdG9yPlwidVwiP0sucmVzb2x2ZSgpOk1pKCkpLnRoZW4oaCldKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHUoKSxuLm9uUmVhZHlCZWluZ0ZpcmVkPVtdLEsucmVzb2x2ZShwdChmdW5jdGlvbigpe3JldHVybiBlLm9uLnJlYWR5LmZpcmUoZS52aXApfSkpLnRoZW4oZnVuY3Rpb24gbCgpe2lmKG4ub25SZWFkeUJlaW5nRmlyZWQubGVuZ3RoPjApe3ZhciBwPW4ub25SZWFkeUJlaW5nRmlyZWQucmVkdWNlKFduLEYpO3JldHVybiBuLm9uUmVhZHlCZWluZ0ZpcmVkPVtdLEsucmVzb2x2ZShwdChmdW5jdGlvbigpe3JldHVybiBwKGUudmlwKX0pKS50aGVuKGwpfX0pfSkuZmluYWxseShmdW5jdGlvbigpe24ub3BlbkNhbmNlbGxlcj09PXImJihuLm9uUmVhZHlCZWluZ0ZpcmVkPW51bGwsbi5pc0JlaW5nT3BlbmVkPSExKX0pLmNhdGNoKGZ1bmN0aW9uKGwpe24uZGJPcGVuRXJyb3I9bDt0cnl7cyYmcy5hYm9ydCgpfWNhdGNoe31yZXR1cm4gcj09PW4ub3BlbkNhbmNlbGxlciYmZS5fY2xvc2UoKSx6KGwpfSkuZmluYWxseShmdW5jdGlvbigpe24ub3BlbkNvbXBsZXRlPSEwLG8oKX0pLnRoZW4oZnVuY3Rpb24oKXtpZihjKXt2YXIgbD17fTtlLnRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKHApe3Auc2NoZW1hLmluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihfKXtfLm5hbWUmJihsW1wiaWRiOi8vXCIuY29uY2F0KGUubmFtZSxcIi9cIikuY29uY2F0KHAubmFtZSxcIi9cIikuY29uY2F0KF8ubmFtZSldPW5ldyBRKC0xLzAsW1tbXV1dKSl9KSxsW1wiaWRiOi8vXCIuY29uY2F0KGUubmFtZSxcIi9cIikuY29uY2F0KHAubmFtZSxcIi9cIildPWxbXCJpZGI6Ly9cIi5jb25jYXQoZS5uYW1lLFwiL1wiKS5jb25jYXQocC5uYW1lLFwiLzpkZWxzXCIpXT1uZXcgUSgtMS8wLFtbW11dXSl9KSx5ZShlbikuZmlyZShsKSxfdChsLCEwKX1yZXR1cm4gZX0pfWZ1bmN0aW9uIHh0KGUpe3ZhciBuPWZ1bmN0aW9uKHUpe3JldHVybiBlLm5leHQodSl9LHQ9ZnVuY3Rpb24odSl7cmV0dXJuIGUudGhyb3codSl9LHI9YShuKSxpPWEodCk7ZnVuY3Rpb24gYSh1KXtyZXR1cm4gZnVuY3Rpb24obyl7dmFyIHM9dShvKSxjPXMudmFsdWU7cmV0dXJuIHMuZG9uZT9jOiFjfHx0eXBlb2YgYy50aGVuIT1cImZ1bmN0aW9uXCI/TChjKT9Qcm9taXNlLmFsbChjKS50aGVuKHIsaSk6cihjKTpjLnRoZW4ocixpKX19cmV0dXJuIGEobikoKX1mdW5jdGlvbiBqaShlLG4sdCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDtpZihyPDIpdGhyb3cgbmV3IEQuSW52YWxpZEFyZ3VtZW50KFwiVG9vIGZldyBhcmd1bWVudHNcIik7Zm9yKHZhciBpPW5ldyBBcnJheShyLTEpOy0tcjspaVtyLTFdPWFyZ3VtZW50c1tyXTt0PWkucG9wKCk7dmFyIGE9QnQoaSk7cmV0dXJuW2UsYSx0XX1mdW5jdGlvbiBwcihlLG4sdCxyLGkpe3JldHVybiBLLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCl7dmFyIGE9ay50cmFuc2xlc3N8fGssdT1lLl9jcmVhdGVUcmFuc2FjdGlvbihuLHQsZS5fZGJTY2hlbWEscik7dS5leHBsaWNpdD0hMDt2YXIgbz17dHJhbnM6dSx0cmFuc2xlc3M6YX07aWYocil1LmlkYnRyYW5zPXIuaWRidHJhbnM7ZWxzZSB0cnl7dS5jcmVhdGUoKSx1LmlkYnRyYW5zLl9leHBsaWNpdD0hMCxlLl9zdGF0ZS5QUjEzOThfbWF4TG9vcD0zfWNhdGNoKGwpe3JldHVybiBsLm5hbWU9PT16bi5JbnZhbGlkU3RhdGUmJmUuaXNPcGVuKCkmJi0tZS5fc3RhdGUuUFIxMzk4X21heExvb3A+MD8oY29uc29sZS53YXJuKFwiRGV4aWU6IE5lZWQgdG8gcmVvcGVuIGRiXCIpLGUuY2xvc2Uoe2Rpc2FibGVBdXRvT3BlbjohMX0pLGUub3BlbigpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gcHIoZSxuLHQsbnVsbCxpKX0pKTp6KGwpfXZhciBzPUxuKGkpO3MmJkxlKCk7dmFyIGMsaD1LLmZvbGxvdyhmdW5jdGlvbigpe2lmKGM9aS5jYWxsKHUsdSksYylpZihzKXt2YXIgbD1kZS5iaW5kKG51bGwsbnVsbCk7Yy50aGVuKGwsbCl9ZWxzZSB0eXBlb2YgYy5uZXh0PT1cImZ1bmN0aW9uXCImJnR5cGVvZiBjLnRocm93PT1cImZ1bmN0aW9uXCImJihjPXh0KGMpKX0sbyk7cmV0dXJuKGMmJnR5cGVvZiBjLnRoZW49PVwiZnVuY3Rpb25cIj9LLnJlc29sdmUoYykudGhlbihmdW5jdGlvbihsKXtyZXR1cm4gdS5hY3RpdmU/bDp6KG5ldyBELlByZW1hdHVyZUNvbW1pdChcIlRyYW5zYWN0aW9uIGNvbW1pdHRlZCB0b28gZWFybHkuIFNlZSBodHRwOi8vYml0Lmx5LzJrZGNrTW5cIikpfSk6aC50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSkudGhlbihmdW5jdGlvbihsKXtyZXR1cm4gciYmdS5fcmVzb2x2ZSgpLHUuX2NvbXBsZXRpb24udGhlbihmdW5jdGlvbigpe3JldHVybiBsfSl9KS5jYXRjaChmdW5jdGlvbihsKXtyZXR1cm4gdS5fcmVqZWN0KGwpLHoobCl9KX0pfWZ1bmN0aW9uIFRuKGUsbix0KXtmb3IodmFyIHI9TChlKT9lLnNsaWNlKCk6W2VdLGk9MDtpPHQ7KytpKXIucHVzaChuKTtyZXR1cm4gcn1mdW5jdGlvbiBOaShlKXtyZXR1cm4gQyhDKHt9LGUpLHt0YWJsZTpmdW5jdGlvbihuKXt2YXIgdD1lLnRhYmxlKG4pLHI9dC5zY2hlbWEsaT17fSxhPVtdO2Z1bmN0aW9uIHUoZCx2LGIpe3ZhciBtPXRuKGQpLGc9aVttXT1pW21dfHxbXSx3PWQ9PW51bGw/MDp0eXBlb2YgZD09XCJzdHJpbmdcIj8xOmQubGVuZ3RoLHk9dj4wLHg9QyhDKHt9LGIpLHtuYW1lOnk/XCJcIi5jb25jYXQobSxcIih2aXJ0dWFsLWZyb206XCIpLmNvbmNhdChiLm5hbWUsXCIpXCIpOmIubmFtZSxsb3dMZXZlbEluZGV4OmIsaXNWaXJ0dWFsOnksa2V5VGFpbDp2LGtleUxlbmd0aDp3LGV4dHJhY3RLZXk6Y3QoZCksdW5pcXVlOiF5JiZiLnVuaXF1ZX0pO2lmKGcucHVzaCh4KSx4LmlzUHJpbWFyeUtleXx8YS5wdXNoKHgpLHc+MSl7dmFyIFM9dz09PTI/ZFswXTpkLnNsaWNlKDAsdy0xKTt1KFMsdisxLGIpfXJldHVybiBnLnNvcnQoZnVuY3Rpb24oRSxQKXtyZXR1cm4gRS5rZXlUYWlsLVAua2V5VGFpbH0pLHh9dmFyIG89dShyLnByaW1hcnlLZXkua2V5UGF0aCwwLHIucHJpbWFyeUtleSk7aVtcIjppZFwiXT1bb107Zm9yKHZhciBzPTAsYz1yLmluZGV4ZXM7czxjLmxlbmd0aDtzKyspe3ZhciBoPWNbc107dShoLmtleVBhdGgsMCxoKX1mdW5jdGlvbiBsKGQpe3ZhciB2PWlbdG4oZCldO3JldHVybiB2JiZ2WzBdfWZ1bmN0aW9uIHAoZCx2KXtyZXR1cm57dHlwZTpkLnR5cGU9PT0xPzI6ZC50eXBlLGxvd2VyOlRuKGQubG93ZXIsZC5sb3dlck9wZW4/ZS5NQVhfS0VZOmUuTUlOX0tFWSx2KSxsb3dlck9wZW46ITAsdXBwZXI6VG4oZC51cHBlcixkLnVwcGVyT3Blbj9lLk1JTl9LRVk6ZS5NQVhfS0VZLHYpLHVwcGVyT3BlbjohMH19ZnVuY3Rpb24gXyhkKXt2YXIgdj1kLnF1ZXJ5LmluZGV4O3JldHVybiB2LmlzVmlydHVhbD9DKEMoe30sZCkse3F1ZXJ5OntpbmRleDp2Lmxvd0xldmVsSW5kZXgscmFuZ2U6cChkLnF1ZXJ5LnJhbmdlLHYua2V5VGFpbCl9fSk6ZH12YXIgZj1DKEMoe30sdCkse3NjaGVtYTpDKEMoe30scikse3ByaW1hcnlLZXk6byxpbmRleGVzOmEsZ2V0SW5kZXhCeUtleVBhdGg6bH0pLGNvdW50OmZ1bmN0aW9uKGQpe3JldHVybiB0LmNvdW50KF8oZCkpfSxxdWVyeTpmdW5jdGlvbihkKXtyZXR1cm4gdC5xdWVyeShfKGQpKX0sb3BlbkN1cnNvcjpmdW5jdGlvbihkKXt2YXIgdj1kLnF1ZXJ5LmluZGV4LGI9di5rZXlUYWlsLG09di5pc1ZpcnR1YWwsZz12LmtleUxlbmd0aDtpZighbSlyZXR1cm4gdC5vcGVuQ3Vyc29yKGQpO2Z1bmN0aW9uIHcoeSl7ZnVuY3Rpb24geChFKXtFIT1udWxsP3kuY29udGludWUoVG4oRSxkLnJldmVyc2U/ZS5NQVhfS0VZOmUuTUlOX0tFWSxiKSk6ZC51bmlxdWU/eS5jb250aW51ZSh5LmtleS5zbGljZSgwLGcpLmNvbmNhdChkLnJldmVyc2U/ZS5NSU5fS0VZOmUuTUFYX0tFWSxiKSk6eS5jb250aW51ZSgpfXZhciBTPU9iamVjdC5jcmVhdGUoeSx7Y29udGludWU6e3ZhbHVlOnh9LGNvbnRpbnVlUHJpbWFyeUtleTp7dmFsdWU6ZnVuY3Rpb24oRSxQKXt5LmNvbnRpbnVlUHJpbWFyeUtleShUbihFLGUuTUFYX0tFWSxiKSxQKX19LHByaW1hcnlLZXk6e2dldDpmdW5jdGlvbigpe3JldHVybiB5LnByaW1hcnlLZXl9fSxrZXk6e2dldDpmdW5jdGlvbigpe3ZhciBFPXkua2V5O3JldHVybiBnPT09MT9FWzBdOkUuc2xpY2UoMCxnKX19LHZhbHVlOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4geS52YWx1ZX19fSk7cmV0dXJuIFN9cmV0dXJuIHQub3BlbkN1cnNvcihfKGQpKS50aGVuKGZ1bmN0aW9uKHkpe3JldHVybiB5JiZ3KHkpfSl9fSk7cmV0dXJuIGZ9fSl9dmFyIExpPXtzdGFjazpcImRiY29yZVwiLG5hbWU6XCJWaXJ0dWFsSW5kZXhNaWRkbGV3YXJlXCIsbGV2ZWw6MSxjcmVhdGU6Tml9O2Z1bmN0aW9uIEV0KGUsbix0LHIpe3JldHVybiB0PXR8fHt9LHI9cnx8XCJcIixVKGUpLmZvckVhY2goZnVuY3Rpb24oaSl7aWYoIVgobixpKSl0W3IraV09dm9pZCAwO2Vsc2V7dmFyIGE9ZVtpXSx1PW5baV07aWYodHlwZW9mIGE9PVwib2JqZWN0XCImJnR5cGVvZiB1PT1cIm9iamVjdFwiJiZhJiZ1KXt2YXIgbz1qbihhKSxzPWpuKHUpO28hPT1zP3RbcitpXT1uW2ldOm89PT1cIk9iamVjdFwiP0V0KGEsdSx0LHIraStcIi5cIik6YSE9PXUmJih0W3IraV09bltpXSl9ZWxzZSBhIT09dSYmKHRbcitpXT1uW2ldKX19KSxVKG4pLmZvckVhY2goZnVuY3Rpb24oaSl7WChlLGkpfHwodFtyK2ldPW5baV0pfSksdH1mdW5jdGlvbiBLdChlLG4pe3JldHVybiBuLnR5cGU9PT1cImRlbGV0ZVwiP24ua2V5czpuLmtleXN8fG4udmFsdWVzLm1hcChlLmV4dHJhY3RLZXkpfXZhciBWaT17c3RhY2s6XCJkYmNvcmVcIixuYW1lOlwiSG9va3NNaWRkbGV3YXJlXCIsbGV2ZWw6MixjcmVhdGU6ZnVuY3Rpb24oZSl7cmV0dXJuIEMoQyh7fSxlKSx7dGFibGU6ZnVuY3Rpb24obil7dmFyIHQ9ZS50YWJsZShuKSxyPXQuc2NoZW1hLnByaW1hcnlLZXksaT1DKEMoe30sdCkse211dGF0ZTpmdW5jdGlvbihhKXt2YXIgdT1rLnRyYW5zLG89dS50YWJsZShuKS5ob29rLHM9by5kZWxldGluZyxjPW8uY3JlYXRpbmcsaD1vLnVwZGF0aW5nO3N3aXRjaChhLnR5cGUpe2Nhc2VcImFkZFwiOmlmKGMuZmlyZT09PUYpYnJlYWs7cmV0dXJuIHUuX3Byb21pc2UoXCJyZWFkd3JpdGVcIixmdW5jdGlvbigpe3JldHVybiBsKGEpfSwhMCk7Y2FzZVwicHV0XCI6aWYoYy5maXJlPT09RiYmaC5maXJlPT09RilicmVhaztyZXR1cm4gdS5fcHJvbWlzZShcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIGwoYSl9LCEwKTtjYXNlXCJkZWxldGVcIjppZihzLmZpcmU9PT1GKWJyZWFrO3JldHVybiB1Ll9wcm9taXNlKFwicmVhZHdyaXRlXCIsZnVuY3Rpb24oKXtyZXR1cm4gbChhKX0sITApO2Nhc2VcImRlbGV0ZVJhbmdlXCI6aWYocy5maXJlPT09RilicmVhaztyZXR1cm4gdS5fcHJvbWlzZShcInJlYWR3cml0ZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHAoYSl9LCEwKX1yZXR1cm4gdC5tdXRhdGUoYSk7ZnVuY3Rpb24gbChmKXt2YXIgZD1rLnRyYW5zLHY9Zi5rZXlzfHxLdChyLGYpO2lmKCF2KXRocm93IG5ldyBFcnJvcihcIktleXMgbWlzc2luZ1wiKTtyZXR1cm4gZj1mLnR5cGU9PT1cImFkZFwifHxmLnR5cGU9PT1cInB1dFwiP0MoQyh7fSxmKSx7a2V5czp2fSk6Qyh7fSxmKSxmLnR5cGUhPT1cImRlbGV0ZVwiJiYoZi52YWx1ZXM9d2UoW10sZi52YWx1ZXMsITApKSxmLmtleXMmJihmLmtleXM9d2UoW10sZi5rZXlzLCEwKSksemkodCxmLHYpLnRoZW4oZnVuY3Rpb24oYil7dmFyIG09di5tYXAoZnVuY3Rpb24oZyx3KXt2YXIgeT1iW3ddLHg9e29uZXJyb3I6bnVsbCxvbnN1Y2Nlc3M6bnVsbH07aWYoZi50eXBlPT09XCJkZWxldGVcIilzLmZpcmUuY2FsbCh4LGcseSxkKTtlbHNlIGlmKGYudHlwZT09PVwiYWRkXCJ8fHk9PT12b2lkIDApe3ZhciBTPWMuZmlyZS5jYWxsKHgsZyxmLnZhbHVlc1t3XSxkKTtnPT1udWxsJiZTIT1udWxsJiYoZz1TLGYua2V5c1t3XT1nLHIub3V0Ym91bmR8fFooZi52YWx1ZXNbd10sci5rZXlQYXRoLGcpKX1lbHNle3ZhciBFPUV0KHksZi52YWx1ZXNbd10pLFA9aC5maXJlLmNhbGwoeCxFLGcseSxkKTtpZihQKXt2YXIgUj1mLnZhbHVlc1t3XTtPYmplY3Qua2V5cyhQKS5mb3JFYWNoKGZ1bmN0aW9uKEEpe1goUixBKT9SW0FdPVBbQV06WihSLEEsUFtBXSl9KX19cmV0dXJuIHh9KTtyZXR1cm4gdC5tdXRhdGUoZikudGhlbihmdW5jdGlvbihnKXtmb3IodmFyIHc9Zy5mYWlsdXJlcyx5PWcucmVzdWx0cyx4PWcubnVtRmFpbHVyZXMsUz1nLmxhc3RSZXN1bHQsRT0wO0U8di5sZW5ndGg7KytFKXt2YXIgUD15P3lbRV06dltFXSxSPW1bRV07UD09bnVsbD9SLm9uZXJyb3ImJlIub25lcnJvcih3W0VdKTpSLm9uc3VjY2VzcyYmUi5vbnN1Y2Nlc3MoZi50eXBlPT09XCJwdXRcIiYmYltFXT9mLnZhbHVlc1tFXTpQKX1yZXR1cm57ZmFpbHVyZXM6dyxyZXN1bHRzOnksbnVtRmFpbHVyZXM6eCxsYXN0UmVzdWx0OlN9fSkuY2F0Y2goZnVuY3Rpb24oZyl7cmV0dXJuIG0uZm9yRWFjaChmdW5jdGlvbih3KXtyZXR1cm4gdy5vbmVycm9yJiZ3Lm9uZXJyb3IoZyl9KSxQcm9taXNlLnJlamVjdChnKX0pfSl9ZnVuY3Rpb24gcChmKXtyZXR1cm4gXyhmLnRyYW5zLGYucmFuZ2UsMWU0KX1mdW5jdGlvbiBfKGYsZCx2KXtyZXR1cm4gdC5xdWVyeSh7dHJhbnM6Zix2YWx1ZXM6ITEscXVlcnk6e2luZGV4OnIscmFuZ2U6ZH0sbGltaXQ6dn0pLnRoZW4oZnVuY3Rpb24oYil7dmFyIG09Yi5yZXN1bHQ7cmV0dXJuIGwoe3R5cGU6XCJkZWxldGVcIixrZXlzOm0sdHJhbnM6Zn0pLnRoZW4oZnVuY3Rpb24oZyl7cmV0dXJuIGcubnVtRmFpbHVyZXM+MD9Qcm9taXNlLnJlamVjdChnLmZhaWx1cmVzWzBdKTptLmxlbmd0aDx2P3tmYWlsdXJlczpbXSxudW1GYWlsdXJlczowLGxhc3RSZXN1bHQ6dm9pZCAwfTpfKGYsQyhDKHt9LGQpLHtsb3dlcjptW20ubGVuZ3RoLTFdLGxvd2VyT3BlbjohMH0pLHYpfSl9KX19fSk7cmV0dXJuIGl9fSl9fTtmdW5jdGlvbiB6aShlLG4sdCl7cmV0dXJuIG4udHlwZT09PVwiYWRkXCI/UHJvbWlzZS5yZXNvbHZlKFtdKTplLmdldE1hbnkoe3RyYW5zOm4udHJhbnMsa2V5czp0LGNhY2hlOlwiaW1tdXRhYmxlXCJ9KX1mdW5jdGlvbiB5cihlLG4sdCl7dHJ5e2lmKCFufHxuLmtleXMubGVuZ3RoPGUubGVuZ3RoKXJldHVybiBudWxsO2Zvcih2YXIgcj1bXSxpPTAsYT0wO2k8bi5rZXlzLmxlbmd0aCYmYTxlLmxlbmd0aDsrK2kpQihuLmtleXNbaV0sZVthXSk9PT0wJiYoci5wdXNoKHQ/X2Uobi52YWx1ZXNbaV0pOm4udmFsdWVzW2ldKSwrK2EpO3JldHVybiByLmxlbmd0aD09PWUubGVuZ3RoP3I6bnVsbH1jYXRjaHtyZXR1cm4gbnVsbH19dmFyIFdpPXtzdGFjazpcImRiY29yZVwiLGxldmVsOi0xLGNyZWF0ZTpmdW5jdGlvbihlKXtyZXR1cm57dGFibGU6ZnVuY3Rpb24obil7dmFyIHQ9ZS50YWJsZShuKTtyZXR1cm4gQyhDKHt9LHQpLHtnZXRNYW55OmZ1bmN0aW9uKHIpe2lmKCFyLmNhY2hlKXJldHVybiB0LmdldE1hbnkocik7dmFyIGk9eXIoci5rZXlzLHIudHJhbnMuX2NhY2hlLHIuY2FjaGU9PT1cImNsb25lXCIpO3JldHVybiBpP0sucmVzb2x2ZShpKTp0LmdldE1hbnkocikudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gci50cmFucy5fY2FjaGU9e2tleXM6ci5rZXlzLHZhbHVlczpyLmNhY2hlPT09XCJjbG9uZVwiP19lKGEpOmF9LGF9KX0sbXV0YXRlOmZ1bmN0aW9uKHIpe3JldHVybiByLnR5cGUhPT1cImFkZFwiJiYoci50cmFucy5fY2FjaGU9bnVsbCksdC5tdXRhdGUocil9fSl9fX19O2Z1bmN0aW9uIG1yKGUsbil7cmV0dXJuIGUudHJhbnMubW9kZT09PVwicmVhZG9ubHlcIiYmISFlLnN1YnNjciYmIWUudHJhbnMuZXhwbGljaXQmJmUudHJhbnMuZGIuX29wdGlvbnMuY2FjaGUhPT1cImRpc2FibGVkXCImJiFuLnNjaGVtYS5wcmltYXJ5S2V5Lm91dGJvdW5kfWZ1bmN0aW9uIGdyKGUsbil7c3dpdGNoKGUpe2Nhc2VcInF1ZXJ5XCI6cmV0dXJuIG4udmFsdWVzJiYhbi51bmlxdWU7Y2FzZVwiZ2V0XCI6cmV0dXJuITE7Y2FzZVwiZ2V0TWFueVwiOnJldHVybiExO2Nhc2VcImNvdW50XCI6cmV0dXJuITE7Y2FzZVwib3BlbkN1cnNvclwiOnJldHVybiExfX12YXIgWWk9e3N0YWNrOlwiZGJjb3JlXCIsbGV2ZWw6MCxuYW1lOlwiT2JzZXJ2YWJpbGl0eVwiLGNyZWF0ZTpmdW5jdGlvbihlKXt2YXIgbj1lLnNjaGVtYS5uYW1lLHQ9bmV3IFEoZS5NSU5fS0VZLGUuTUFYX0tFWSk7cmV0dXJuIEMoQyh7fSxlKSx7dHJhbnNhY3Rpb246ZnVuY3Rpb24ocixpLGEpe2lmKGsuc3Vic2NyJiZpIT09XCJyZWFkb25seVwiKXRocm93IG5ldyBELlJlYWRPbmx5KFwiUmVhZHdyaXRlIHRyYW5zYWN0aW9uIGluIGxpdmVRdWVyeSBjb250ZXh0LiBRdWVyaWVyIHNvdXJjZTogXCIuY29uY2F0KGsucXVlcmllcikpO3JldHVybiBlLnRyYW5zYWN0aW9uKHIsaSxhKX0sdGFibGU6ZnVuY3Rpb24ocil7dmFyIGk9ZS50YWJsZShyKSxhPWkuc2NoZW1hLHU9YS5wcmltYXJ5S2V5LG89YS5pbmRleGVzLHM9dS5leHRyYWN0S2V5LGM9dS5vdXRib3VuZCxoPXUuYXV0b0luY3JlbWVudCYmby5maWx0ZXIoZnVuY3Rpb24oZil7cmV0dXJuIGYuY29tcG91bmQmJmYua2V5UGF0aC5pbmNsdWRlcyh1LmtleVBhdGgpfSksbD1DKEMoe30saSkse211dGF0ZTpmdW5jdGlvbihmKXt2YXIgZCx2LGI9Zi50cmFucyxtPWYubXV0YXRlZFBhcnRzfHwoZi5tdXRhdGVkUGFydHM9e30pLGc9ZnVuY3Rpb24oVCl7dmFyIE09XCJpZGI6Ly9cIi5jb25jYXQobixcIi9cIikuY29uY2F0KHIsXCIvXCIpLmNvbmNhdChUKTtyZXR1cm4gbVtNXXx8KG1bTV09bmV3IFEpfSx3PWcoXCJcIikseT1nKFwiOmRlbHNcIikseD1mLnR5cGUsUz1mLnR5cGU9PT1cImRlbGV0ZVJhbmdlXCI/W2YucmFuZ2VdOmYudHlwZT09PVwiZGVsZXRlXCI/W2Yua2V5c106Zi52YWx1ZXMubGVuZ3RoPDUwP1tLdCh1LGYpLmZpbHRlcihmdW5jdGlvbihUKXtyZXR1cm4gVH0pLGYudmFsdWVzXTpbXSxFPVNbMF0sUD1TWzFdLFI9Zi50cmFucy5fY2FjaGU7aWYoTChFKSl7dy5hZGRLZXlzKEUpO3ZhciBBPXg9PT1cImRlbGV0ZVwifHxFLmxlbmd0aD09PVAubGVuZ3RoP3lyKEUsUik6bnVsbDtBfHx5LmFkZEtleXMoRSksKEF8fFApJiZVaShnLGEsQSxQKX1lbHNlIGlmKEUpe3ZhciBJPXtmcm9tOihkPUUubG93ZXIpIT09bnVsbCYmZCE9PXZvaWQgMD9kOmUuTUlOX0tFWSx0bzoodj1FLnVwcGVyKSE9PW51bGwmJnYhPT12b2lkIDA/djplLk1BWF9LRVl9O3kuYWRkKEkpLHcuYWRkKEkpfWVsc2Ugdy5hZGQodCkseS5hZGQodCksYS5pbmRleGVzLmZvckVhY2goZnVuY3Rpb24oVCl7cmV0dXJuIGcoVC5uYW1lKS5hZGQodCl9KTtyZXR1cm4gaS5tdXRhdGUoZikudGhlbihmdW5jdGlvbihUKXtyZXR1cm4gRSYmKGYudHlwZT09PVwiYWRkXCJ8fGYudHlwZT09PVwicHV0XCIpJiYody5hZGRLZXlzKFQucmVzdWx0cyksaCYmaC5mb3JFYWNoKGZ1bmN0aW9uKE0pe2Zvcih2YXIgTz1mLnZhbHVlcy5tYXAoZnVuY3Rpb24oRyl7cmV0dXJuIE0uZXh0cmFjdEtleShHKX0pLFY9TS5rZXlQYXRoLmZpbmRJbmRleChmdW5jdGlvbihHKXtyZXR1cm4gRz09PXUua2V5UGF0aH0pLEg9MCxpZT1ULnJlc3VsdHMubGVuZ3RoO0g8aWU7KytIKU9bSF1bVl09VC5yZXN1bHRzW0hdO2coTS5uYW1lKS5hZGRLZXlzKE8pfSkpLGIubXV0YXRlZFBhcnRzPURuKGIubXV0YXRlZFBhcnRzfHx7fSxtKSxUfSl9fSkscD1mdW5jdGlvbihmKXt2YXIgZCx2LGI9Zi5xdWVyeSxtPWIuaW5kZXgsZz1iLnJhbmdlO3JldHVyblttLG5ldyBRKChkPWcubG93ZXIpIT09bnVsbCYmZCE9PXZvaWQgMD9kOmUuTUlOX0tFWSwodj1nLnVwcGVyKSE9PW51bGwmJnYhPT12b2lkIDA/djplLk1BWF9LRVkpXX0sXz17Z2V0OmZ1bmN0aW9uKGYpe3JldHVyblt1LG5ldyBRKGYua2V5KV19LGdldE1hbnk6ZnVuY3Rpb24oZil7cmV0dXJuW3UsbmV3IFEoKS5hZGRLZXlzKGYua2V5cyldfSxjb3VudDpwLHF1ZXJ5OnAsb3BlbkN1cnNvcjpwfTtyZXR1cm4gVShfKS5mb3JFYWNoKGZ1bmN0aW9uKGYpe2xbZl09ZnVuY3Rpb24oZCl7dmFyIHY9ay5zdWJzY3IsYj0hIXYsbT1tcihrLGkpJiZncihmLGQpLGc9bT9kLm9ic1NldD17fTp2O2lmKGIpe3ZhciB3PWZ1bmN0aW9uKEEpe3ZhciBJPVwiaWRiOi8vXCIuY29uY2F0KG4sXCIvXCIpLmNvbmNhdChyLFwiL1wiKS5jb25jYXQoQSk7cmV0dXJuIGdbSV18fChnW0ldPW5ldyBRKX0seT13KFwiXCIpLHg9dyhcIjpkZWxzXCIpLFM9X1tmXShkKSxFPVNbMF0sUD1TWzFdO2lmKGY9PT1cInF1ZXJ5XCImJkUuaXNQcmltYXJ5S2V5JiYhZC52YWx1ZXM/eC5hZGQoUCk6dyhFLm5hbWV8fFwiXCIpLmFkZChQKSwhRS5pc1ByaW1hcnlLZXkpaWYoZj09PVwiY291bnRcIil4LmFkZCh0KTtlbHNle3ZhciBSPWY9PT1cInF1ZXJ5XCImJmMmJmQudmFsdWVzJiZpLnF1ZXJ5KEMoQyh7fSxkKSx7dmFsdWVzOiExfSkpO3JldHVybiBpW2ZdLmFwcGx5KHRoaXMsYXJndW1lbnRzKS50aGVuKGZ1bmN0aW9uKEEpe2lmKGY9PT1cInF1ZXJ5XCIpe2lmKGMmJmQudmFsdWVzKXJldHVybiBSLnRoZW4oZnVuY3Rpb24oTyl7dmFyIFY9Ty5yZXN1bHQ7cmV0dXJuIHkuYWRkS2V5cyhWKSxBfSk7dmFyIEk9ZC52YWx1ZXM/QS5yZXN1bHQubWFwKHMpOkEucmVzdWx0O2QudmFsdWVzP3kuYWRkS2V5cyhJKTp4LmFkZEtleXMoSSl9ZWxzZSBpZihmPT09XCJvcGVuQ3Vyc29yXCIpe3ZhciBUPUEsTT1kLnZhbHVlcztyZXR1cm4gVCYmT2JqZWN0LmNyZWF0ZShULHtrZXk6e2dldDpmdW5jdGlvbigpe3JldHVybiB4LmFkZEtleShULnByaW1hcnlLZXkpLFQua2V5fX0scHJpbWFyeUtleTp7Z2V0OmZ1bmN0aW9uKCl7dmFyIE89VC5wcmltYXJ5S2V5O3JldHVybiB4LmFkZEtleShPKSxPfX0sdmFsdWU6e2dldDpmdW5jdGlvbigpe3JldHVybiBNJiZ5LmFkZEtleShULnByaW1hcnlLZXkpLFQudmFsdWV9fX0pfXJldHVybiBBfSl9fXJldHVybiBpW2ZdLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSxsfX0pfX07ZnVuY3Rpb24gVWkoZSxuLHQscil7ZnVuY3Rpb24gaShhKXt2YXIgdT1lKGEubmFtZXx8XCJcIik7ZnVuY3Rpb24gbyhjKXtyZXR1cm4gYyE9bnVsbD9hLmV4dHJhY3RLZXkoYyk6bnVsbH12YXIgcz1mdW5jdGlvbihjKXtyZXR1cm4gYS5tdWx0aUVudHJ5JiZMKGMpP2MuZm9yRWFjaChmdW5jdGlvbihoKXtyZXR1cm4gdS5hZGRLZXkoaCl9KTp1LmFkZEtleShjKX07KHR8fHIpLmZvckVhY2goZnVuY3Rpb24oYyxoKXt2YXIgbD10JiZvKHRbaF0pLHA9ciYmbyhyW2hdKTtCKGwscCkhPT0wJiYobCE9bnVsbCYmcyhsKSxwIT1udWxsJiZzKHApKX0pfW4uaW5kZXhlcy5mb3JFYWNoKGkpfWZ1bmN0aW9uIGJyKGUsbix0KXtpZih0Lm51bUZhaWx1cmVzPT09MClyZXR1cm4gbjtpZihuLnR5cGU9PT1cImRlbGV0ZVJhbmdlXCIpcmV0dXJuIG51bGw7dmFyIHI9bi5rZXlzP24ua2V5cy5sZW5ndGg6XCJ2YWx1ZXNcImluIG4mJm4udmFsdWVzP24udmFsdWVzLmxlbmd0aDoxO2lmKHQubnVtRmFpbHVyZXM9PT1yKXJldHVybiBudWxsO3ZhciBpPUMoe30sbik7cmV0dXJuIEwoaS5rZXlzKSYmKGkua2V5cz1pLmtleXMuZmlsdGVyKGZ1bmN0aW9uKGEsdSl7cmV0dXJuISh1IGluIHQuZmFpbHVyZXMpfSkpLFwidmFsdWVzXCJpbiBpJiZMKGkudmFsdWVzKSYmKGkudmFsdWVzPWkudmFsdWVzLmZpbHRlcihmdW5jdGlvbihhLHUpe3JldHVybiEodSBpbiB0LmZhaWx1cmVzKX0pKSxpfWZ1bmN0aW9uICRpKGUsbil7cmV0dXJuIG4ubG93ZXI9PT12b2lkIDA/ITA6bi5sb3dlck9wZW4/QihlLG4ubG93ZXIpPjA6QihlLG4ubG93ZXIpPj0wfWZ1bmN0aW9uIFFpKGUsbil7cmV0dXJuIG4udXBwZXI9PT12b2lkIDA/ITA6bi51cHBlck9wZW4/QihlLG4udXBwZXIpPDA6QihlLG4udXBwZXIpPD0wfWZ1bmN0aW9uIFN0KGUsbil7cmV0dXJuICRpKGUsbikmJlFpKGUsbil9ZnVuY3Rpb24gd3IoZSxuLHQscixpLGEpe2lmKCF0fHx0Lmxlbmd0aD09PTApcmV0dXJuIGU7dmFyIHU9bi5xdWVyeS5pbmRleCxvPXUubXVsdGlFbnRyeSxzPW4ucXVlcnkucmFuZ2UsYz1yLnNjaGVtYS5wcmltYXJ5S2V5LGg9Yy5leHRyYWN0S2V5LGw9dS5leHRyYWN0S2V5LHA9KHUubG93TGV2ZWxJbmRleHx8dSkuZXh0cmFjdEtleSxfPXQucmVkdWNlKGZ1bmN0aW9uKGYsZCl7dmFyIHY9ZixiPVtdO2lmKGQudHlwZT09PVwiYWRkXCJ8fGQudHlwZT09PVwicHV0XCIpZm9yKHZhciBtPW5ldyBRLGc9ZC52YWx1ZXMubGVuZ3RoLTE7Zz49MDstLWcpe3ZhciB3PWQudmFsdWVzW2ddLHk9aCh3KTtpZighbS5oYXNLZXkoeSkpe3ZhciB4PWwodyk7KG8mJkwoeCk/eC5zb21lKGZ1bmN0aW9uKEEpe3JldHVybiBTdChBLHMpfSk6U3QoeCxzKSkmJihtLmFkZEtleSh5KSxiLnB1c2godykpfX1zd2l0Y2goZC50eXBlKXtjYXNlXCJhZGRcIjp7dmFyIFM9bmV3IFEoKS5hZGRLZXlzKG4udmFsdWVzP2YubWFwKGZ1bmN0aW9uKEEpe3JldHVybiBoKEEpfSk6Zik7dj1mLmNvbmNhdChuLnZhbHVlcz9iLmZpbHRlcihmdW5jdGlvbihBKXt2YXIgST1oKEEpO3JldHVybiBTLmhhc0tleShJKT8hMTooUy5hZGRLZXkoSSksITApfSk6Yi5tYXAoZnVuY3Rpb24oQSl7cmV0dXJuIGgoQSl9KS5maWx0ZXIoZnVuY3Rpb24oQSl7cmV0dXJuIFMuaGFzS2V5KEEpPyExOihTLmFkZEtleShBKSwhMCl9KSk7YnJlYWt9Y2FzZVwicHV0XCI6e3ZhciBFPW5ldyBRKCkuYWRkS2V5cyhkLnZhbHVlcy5tYXAoZnVuY3Rpb24oQSl7cmV0dXJuIGgoQSl9KSk7dj1mLmZpbHRlcihmdW5jdGlvbihBKXtyZXR1cm4hRS5oYXNLZXkobi52YWx1ZXM/aChBKTpBKX0pLmNvbmNhdChuLnZhbHVlcz9iOmIubWFwKGZ1bmN0aW9uKEEpe3JldHVybiBoKEEpfSkpO2JyZWFrfWNhc2VcImRlbGV0ZVwiOnZhciBQPW5ldyBRKCkuYWRkS2V5cyhkLmtleXMpO3Y9Zi5maWx0ZXIoZnVuY3Rpb24oQSl7cmV0dXJuIVAuaGFzS2V5KG4udmFsdWVzP2goQSk6QSl9KTticmVhaztjYXNlXCJkZWxldGVSYW5nZVwiOnZhciBSPWQucmFuZ2U7dj1mLmZpbHRlcihmdW5jdGlvbihBKXtyZXR1cm4hU3QoaChBKSxSKX0pO2JyZWFrfXJldHVybiB2fSxlKTtyZXR1cm4gXz09PWU/ZTooXy5zb3J0KGZ1bmN0aW9uKGYsZCl7cmV0dXJuIEIocChmKSxwKGQpKXx8QihoKGYpLGgoZCkpfSksbi5saW1pdCYmbi5saW1pdDwxLzAmJihfLmxlbmd0aD5uLmxpbWl0P18ubGVuZ3RoPW4ubGltaXQ6ZS5sZW5ndGg9PT1uLmxpbWl0JiZfLmxlbmd0aDxuLmxpbWl0JiYoaS5kaXJ0eT0hMCkpLGE/T2JqZWN0LmZyZWV6ZShfKTpfKX1mdW5jdGlvbiBfcihlLG4pe3JldHVybiBCKGUubG93ZXIsbi5sb3dlcik9PT0wJiZCKGUudXBwZXIsbi51cHBlcik9PT0wJiYhIWUubG93ZXJPcGVuPT0hIW4ubG93ZXJPcGVuJiYhIWUudXBwZXJPcGVuPT0hIW4udXBwZXJPcGVufWZ1bmN0aW9uIEhpKGUsbix0LHIpe2lmKGU9PT12b2lkIDApcmV0dXJuIG4hPT12b2lkIDA/LTE6MDtpZihuPT09dm9pZCAwKXJldHVybiAxO3ZhciBpPUIoZSxuKTtpZihpPT09MCl7aWYodCYmcilyZXR1cm4gMDtpZih0KXJldHVybiAxO2lmKHIpcmV0dXJuLTF9cmV0dXJuIGl9ZnVuY3Rpb24gWGkoZSxuLHQscil7aWYoZT09PXZvaWQgMClyZXR1cm4gbiE9PXZvaWQgMD8xOjA7aWYobj09PXZvaWQgMClyZXR1cm4tMTt2YXIgaT1CKGUsbik7aWYoaT09PTApe2lmKHQmJnIpcmV0dXJuIDA7aWYodClyZXR1cm4tMTtpZihyKXJldHVybiAxfXJldHVybiBpfWZ1bmN0aW9uIEdpKGUsbil7cmV0dXJuIEhpKGUubG93ZXIsbi5sb3dlcixlLmxvd2VyT3BlbixuLmxvd2VyT3Blbik8PTAmJlhpKGUudXBwZXIsbi51cHBlcixlLnVwcGVyT3BlbixuLnVwcGVyT3Blbik+PTB9ZnVuY3Rpb24gSmkoZSxuLHQscil7dmFyIGk9UGVbXCJpZGI6Ly9cIi5jb25jYXQoZSxcIi9cIikuY29uY2F0KG4pXTtpZighaSlyZXR1cm5bXTt2YXIgYT1pLnF1ZXJpZXNbdF07aWYoIWEpcmV0dXJuW251bGwsITEsaSxudWxsXTt2YXIgdT1yLnF1ZXJ5P3IucXVlcnkuaW5kZXgubmFtZTpudWxsLG89YVt1fHxcIlwiXTtpZighbylyZXR1cm5bbnVsbCwhMSxpLG51bGxdO3N3aXRjaCh0KXtjYXNlXCJxdWVyeVwiOnZhciBzPW8uZmluZChmdW5jdGlvbihsKXtyZXR1cm4gbC5yZXEubGltaXQ9PT1yLmxpbWl0JiZsLnJlcS52YWx1ZXM9PT1yLnZhbHVlcyYmX3IobC5yZXEucXVlcnkucmFuZ2Usci5xdWVyeS5yYW5nZSl9KTtpZihzKXJldHVybltzLCEwLGksb107dmFyIGM9by5maW5kKGZ1bmN0aW9uKGwpe3ZhciBwPVwibGltaXRcImluIGwucmVxP2wucmVxLmxpbWl0OjEvMDtyZXR1cm4gcD49ci5saW1pdCYmKHIudmFsdWVzP2wucmVxLnZhbHVlczohMCkmJkdpKGwucmVxLnF1ZXJ5LnJhbmdlLHIucXVlcnkucmFuZ2UpfSk7cmV0dXJuW2MsITEsaSxvXTtjYXNlXCJjb3VudFwiOnZhciBoPW8uZmluZChmdW5jdGlvbihsKXtyZXR1cm4gX3IobC5yZXEucXVlcnkucmFuZ2Usci5xdWVyeS5yYW5nZSl9KTtyZXR1cm5baCwhIWgsaSxvXX19ZnVuY3Rpb24gWmkoZSxuLHQscil7ZS5zdWJzY3JpYmVycy5hZGQodCksci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIixmdW5jdGlvbigpe2Uuc3Vic2NyaWJlcnMuZGVsZXRlKHQpLGUuc3Vic2NyaWJlcnMuc2l6ZT09PTAmJnFpKGUsbil9KX1mdW5jdGlvbiBxaShlLG4pe3NldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnN1YnNjcmliZXJzLnNpemU9PT0wJiZ4ZShuLGUpfSwzZTMpfXZhciBlYT17c3RhY2s6XCJkYmNvcmVcIixsZXZlbDowLG5hbWU6XCJDYWNoZVwiLGNyZWF0ZTpmdW5jdGlvbihlKXt2YXIgbj1lLnNjaGVtYS5uYW1lLHQ9QyhDKHt9LGUpLHt0cmFuc2FjdGlvbjpmdW5jdGlvbihyLGksYSl7dmFyIHU9ZS50cmFuc2FjdGlvbihyLGksYSk7aWYoaT09PVwicmVhZHdyaXRlXCIpe3ZhciBvPW5ldyBBYm9ydENvbnRyb2xsZXIscz1vLnNpZ25hbCxjPWZ1bmN0aW9uKGgpe3JldHVybiBmdW5jdGlvbigpe2lmKG8uYWJvcnQoKSxpPT09XCJyZWFkd3JpdGVcIil7Zm9yKHZhciBsPW5ldyBTZXQscD0wLF89cjtwPF8ubGVuZ3RoO3ArKyl7dmFyIGY9X1twXSxkPVBlW1wiaWRiOi8vXCIuY29uY2F0KG4sXCIvXCIpLmNvbmNhdChmKV07aWYoZCl7dmFyIHY9ZS50YWJsZShmKSxiPWQub3B0aW1pc3RpY09wcy5maWx0ZXIoZnVuY3Rpb24oTSl7cmV0dXJuIE0udHJhbnM9PT11fSk7aWYodS5fZXhwbGljaXQmJmgmJnUubXV0YXRlZFBhcnRzKWZvcih2YXIgbT0wLGc9T2JqZWN0LnZhbHVlcyhkLnF1ZXJpZXMucXVlcnkpO208Zy5sZW5ndGg7bSsrKWZvcih2YXIgdz1nW21dLHk9MCx4PXcuc2xpY2UoKTt5PHgubGVuZ3RoO3krKyl7dmFyIFM9eFt5XTtndChTLm9ic1NldCx1Lm11dGF0ZWRQYXJ0cykmJih4ZSh3LFMpLFMuc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbihNKXtyZXR1cm4gbC5hZGQoTSl9KSl9ZWxzZSBpZihiLmxlbmd0aD4wKXtkLm9wdGltaXN0aWNPcHM9ZC5vcHRpbWlzdGljT3BzLmZpbHRlcihmdW5jdGlvbihNKXtyZXR1cm4gTS50cmFucyE9PXV9KTtmb3IodmFyIEU9MCxQPU9iamVjdC52YWx1ZXMoZC5xdWVyaWVzLnF1ZXJ5KTtFPFAubGVuZ3RoO0UrKylmb3IodmFyIHc9UFtFXSxSPTAsQT13LnNsaWNlKCk7UjxBLmxlbmd0aDtSKyspe3ZhciBTPUFbUl07aWYoUy5yZXMhPW51bGwmJnUubXV0YXRlZFBhcnRzKWlmKGgmJiFTLmRpcnR5KXt2YXIgST1PYmplY3QuaXNGcm96ZW4oUy5yZXMpLFQ9d3IoUy5yZXMsUy5yZXEsYix2LFMsSSk7Uy5kaXJ0eT8oeGUodyxTKSxTLnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24oVil7cmV0dXJuIGwuYWRkKFYpfSkpOlQhPT1TLnJlcyYmKFMucmVzPVQsUy5wcm9taXNlPUsucmVzb2x2ZSh7cmVzdWx0OlR9KSl9ZWxzZSBTLmRpcnR5JiZ4ZSh3LFMpLFMuc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbihWKXtyZXR1cm4gbC5hZGQoVil9KX19fX1sLmZvckVhY2goZnVuY3Rpb24oTSl7cmV0dXJuIE0oKX0pfX19O3UuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsYyghMSkse3NpZ25hbDpzfSksdS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixjKCExKSx7c2lnbmFsOnN9KSx1LmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLGMoITApLHtzaWduYWw6c30pfXJldHVybiB1fSx0YWJsZTpmdW5jdGlvbihyKXt2YXIgaT1lLnRhYmxlKHIpLGE9aS5zY2hlbWEucHJpbWFyeUtleSx1PUMoQyh7fSxpKSx7bXV0YXRlOmZ1bmN0aW9uKG8pe3ZhciBzPWsudHJhbnM7aWYoYS5vdXRib3VuZHx8cy5kYi5fb3B0aW9ucy5jYWNoZT09PVwiZGlzYWJsZWRcInx8cy5leHBsaWNpdHx8cy5pZGJ0cmFucy5tb2RlIT09XCJyZWFkd3JpdGVcIilyZXR1cm4gaS5tdXRhdGUobyk7dmFyIGM9UGVbXCJpZGI6Ly9cIi5jb25jYXQobixcIi9cIikuY29uY2F0KHIpXTtpZighYylyZXR1cm4gaS5tdXRhdGUobyk7dmFyIGg9aS5tdXRhdGUobyk7cmV0dXJuKG8udHlwZT09PVwiYWRkXCJ8fG8udHlwZT09PVwicHV0XCIpJiYoby52YWx1ZXMubGVuZ3RoPj01MHx8S3QoYSxvKS5zb21lKGZ1bmN0aW9uKGwpe3JldHVybiBsPT1udWxsfSkpP2gudGhlbihmdW5jdGlvbihsKXt2YXIgcD1DKEMoe30sbykse3ZhbHVlczpvLnZhbHVlcy5tYXAoZnVuY3Rpb24oZixkKXt2YXIgdjtpZihsLmZhaWx1cmVzW2RdKXJldHVybiBmO3ZhciBiPSEoKHY9YS5rZXlQYXRoKT09PW51bGx8fHY9PT12b2lkIDApJiZ2LmluY2x1ZGVzKFwiLlwiKT9fZShmKTpDKHt9LGYpO3JldHVybiBaKGIsYS5rZXlQYXRoLGwucmVzdWx0c1tkXSksYn0pfSksXz1icihjLHAsbCk7Yy5vcHRpbWlzdGljT3BzLnB1c2goXykscXVldWVNaWNyb3Rhc2soZnVuY3Rpb24oKXtyZXR1cm4gby5tdXRhdGVkUGFydHMmJlBuKG8ubXV0YXRlZFBhcnRzKX0pfSk6KGMub3B0aW1pc3RpY09wcy5wdXNoKG8pLG8ubXV0YXRlZFBhcnRzJiZQbihvLm11dGF0ZWRQYXJ0cyksaC50aGVuKGZ1bmN0aW9uKGwpe2lmKGwubnVtRmFpbHVyZXM+MCl7eGUoYy5vcHRpbWlzdGljT3BzLG8pO3ZhciBwPWJyKGMsbyxsKTtwJiZjLm9wdGltaXN0aWNPcHMucHVzaChwKSxvLm11dGF0ZWRQYXJ0cyYmUG4oby5tdXRhdGVkUGFydHMpfX0pLGguY2F0Y2goZnVuY3Rpb24oKXt4ZShjLm9wdGltaXN0aWNPcHMsbyksby5tdXRhdGVkUGFydHMmJlBuKG8ubXV0YXRlZFBhcnRzKX0pKSxofSxxdWVyeTpmdW5jdGlvbihvKXt2YXIgcztpZighbXIoayxpKXx8IWdyKFwicXVlcnlcIixvKSlyZXR1cm4gaS5xdWVyeShvKTt2YXIgYz0oKHM9ay50cmFucyk9PT1udWxsfHxzPT09dm9pZCAwP3ZvaWQgMDpzLmRiLl9vcHRpb25zLmNhY2hlKT09PVwiaW1tdXRhYmxlXCIsaD1rLGw9aC5yZXF1ZXJ5LHA9aC5zaWduYWwsXz1KaShuLHIsXCJxdWVyeVwiLG8pLGY9X1swXSxkPV9bMV0sdj1fWzJdLGI9X1szXTtpZihmJiZkKWYub2JzU2V0PW8ub2JzU2V0O2Vsc2V7dmFyIG09aS5xdWVyeShvKS50aGVuKGZ1bmN0aW9uKGcpe3ZhciB3PWcucmVzdWx0O2lmKGYmJihmLnJlcz13KSxjKXtmb3IodmFyIHk9MCx4PXcubGVuZ3RoO3k8eDsrK3kpT2JqZWN0LmZyZWV6ZSh3W3ldKTtPYmplY3QuZnJlZXplKHcpfWVsc2UgZy5yZXN1bHQ9X2Uodyk7cmV0dXJuIGd9KS5jYXRjaChmdW5jdGlvbihnKXtyZXR1cm4gYiYmZiYmeGUoYixmKSxQcm9taXNlLnJlamVjdChnKX0pO2Y9e29ic1NldDpvLm9ic1NldCxwcm9taXNlOm0sc3Vic2NyaWJlcnM6bmV3IFNldCx0eXBlOlwicXVlcnlcIixyZXE6byxkaXJ0eTohMX0sYj9iLnB1c2goZik6KGI9W2ZdLHZ8fCh2PVBlW1wiaWRiOi8vXCIuY29uY2F0KG4sXCIvXCIpLmNvbmNhdChyKV09e3F1ZXJpZXM6e3F1ZXJ5Ont9LGNvdW50Ont9fSxvYmpzOm5ldyBNYXAsb3B0aW1pc3RpY09wczpbXSx1bnNpZ25hbGVkUGFydHM6e319KSx2LnF1ZXJpZXMucXVlcnlbby5xdWVyeS5pbmRleC5uYW1lfHxcIlwiXT1iKX1yZXR1cm4gWmkoZixiLGwscCksZi5wcm9taXNlLnRoZW4oZnVuY3Rpb24oZyl7cmV0dXJue3Jlc3VsdDp3cihnLnJlc3VsdCxvLHY/Lm9wdGltaXN0aWNPcHMsaSxmLGMpfX0pfX0pO3JldHVybiB1fX0pO3JldHVybiB0fX07ZnVuY3Rpb24gQ24oZSxuKXtyZXR1cm4gbmV3IFByb3h5KGUse2dldDpmdW5jdGlvbih0LHIsaSl7cmV0dXJuIHI9PT1cImRiXCI/bjpSZWZsZWN0LmdldCh0LHIsaSl9fSl9dmFyIGNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShuLHQpe3ZhciByPXRoaXM7dGhpcy5fbWlkZGxld2FyZXM9e30sdGhpcy52ZXJubz0wO3ZhciBpPWUuZGVwZW5kZW5jaWVzO3RoaXMuX29wdGlvbnM9dD1DKHthZGRvbnM6ZS5hZGRvbnMsYXV0b09wZW46ITAsaW5kZXhlZERCOmkuaW5kZXhlZERCLElEQktleVJhbmdlOmkuSURCS2V5UmFuZ2UsY2FjaGU6XCJjbG9uZWRcIn0sdCksdGhpcy5fZGVwcz17aW5kZXhlZERCOnQuaW5kZXhlZERCLElEQktleVJhbmdlOnQuSURCS2V5UmFuZ2V9O3ZhciBhPXQuYWRkb25zO3RoaXMuX2RiU2NoZW1hPXt9LHRoaXMuX3ZlcnNpb25zPVtdLHRoaXMuX3N0b3JlTmFtZXM9W10sdGhpcy5fYWxsVGFibGVzPXt9LHRoaXMuaWRiZGI9bnVsbCx0aGlzLl9ub3ZpcD10aGlzO3ZhciB1PXtkYk9wZW5FcnJvcjpudWxsLGlzQmVpbmdPcGVuZWQ6ITEsb25SZWFkeUJlaW5nRmlyZWQ6bnVsbCxvcGVuQ29tcGxldGU6ITEsZGJSZWFkeVJlc29sdmU6RixkYlJlYWR5UHJvbWlzZTpudWxsLGNhbmNlbE9wZW46RixvcGVuQ2FuY2VsbGVyOm51bGwsYXV0b1NjaGVtYTohMCxQUjEzOThfbWF4TG9vcDozLGF1dG9PcGVuOnQuYXV0b09wZW59O3UuZGJSZWFkeVByb21pc2U9bmV3IEsoZnVuY3Rpb24ocyl7dS5kYlJlYWR5UmVzb2x2ZT1zfSksdS5vcGVuQ2FuY2VsbGVyPW5ldyBLKGZ1bmN0aW9uKHMsYyl7dS5jYW5jZWxPcGVuPWN9KSx0aGlzLl9zdGF0ZT11LHRoaXMubmFtZT1uLHRoaXMub249R2UodGhpcyxcInBvcHVsYXRlXCIsXCJibG9ja2VkXCIsXCJ2ZXJzaW9uY2hhbmdlXCIsXCJjbG9zZVwiLHtyZWFkeTpbV24sRl19KSx0aGlzLm9uLnJlYWR5LnN1YnNjcmliZT1DdCh0aGlzLm9uLnJlYWR5LnN1YnNjcmliZSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oYyxoKXtlLnZpcChmdW5jdGlvbigpe3ZhciBsPXIuX3N0YXRlO2lmKGwub3BlbkNvbXBsZXRlKWwuZGJPcGVuRXJyb3J8fEsucmVzb2x2ZSgpLnRoZW4oYyksaCYmcyhjKTtlbHNlIGlmKGwub25SZWFkeUJlaW5nRmlyZWQpbC5vblJlYWR5QmVpbmdGaXJlZC5wdXNoKGMpLGgmJnMoYyk7ZWxzZXtzKGMpO3ZhciBwPXI7aHx8cyhmdW5jdGlvbiBfKCl7cC5vbi5yZWFkeS51bnN1YnNjcmliZShjKSxwLm9uLnJlYWR5LnVuc3Vic2NyaWJlKF8pfSl9fSl9fSksdGhpcy5Db2xsZWN0aW9uPXNpKHRoaXMpLHRoaXMuVGFibGU9YWkodGhpcyksdGhpcy5UcmFuc2FjdGlvbj15aSh0aGlzKSx0aGlzLlZlcnNpb249Q2kodGhpcyksdGhpcy5XaGVyZUNsYXVzZT12aSh0aGlzKSx0aGlzLm9uKFwidmVyc2lvbmNoYW5nZVwiLGZ1bmN0aW9uKHMpe3MubmV3VmVyc2lvbj4wP2NvbnNvbGUud2FybihcIkFub3RoZXIgY29ubmVjdGlvbiB3YW50cyB0byB1cGdyYWRlIGRhdGFiYXNlICdcIi5jb25jYXQoci5uYW1lLFwiJy4gQ2xvc2luZyBkYiBub3cgdG8gcmVzdW1lIHRoZSB1cGdyYWRlLlwiKSk6Y29uc29sZS53YXJuKFwiQW5vdGhlciBjb25uZWN0aW9uIHdhbnRzIHRvIGRlbGV0ZSBkYXRhYmFzZSAnXCIuY29uY2F0KHIubmFtZSxcIicuIENsb3NpbmcgZGIgbm93IHRvIHJlc3VtZSB0aGUgZGVsZXRlIHJlcXVlc3QuXCIpKSxyLmNsb3NlKHtkaXNhYmxlQXV0b09wZW46ITF9KX0pLHRoaXMub24oXCJibG9ja2VkXCIsZnVuY3Rpb24ocyl7IXMubmV3VmVyc2lvbnx8cy5uZXdWZXJzaW9uPHMub2xkVmVyc2lvbj9jb25zb2xlLndhcm4oXCJEZXhpZS5kZWxldGUoJ1wiLmNvbmNhdChyLm5hbWUsXCInKSB3YXMgYmxvY2tlZFwiKSk6Y29uc29sZS53YXJuKFwiVXBncmFkZSAnXCIuY29uY2F0KHIubmFtZSxcIicgYmxvY2tlZCBieSBvdGhlciBjb25uZWN0aW9uIGhvbGRpbmcgdmVyc2lvbiBcIikuY29uY2F0KHMub2xkVmVyc2lvbi8xMCkpfSksdGhpcy5fbWF4S2V5PW5uKHQuSURCS2V5UmFuZ2UpLHRoaXMuX2NyZWF0ZVRyYW5zYWN0aW9uPWZ1bmN0aW9uKHMsYyxoLGwpe3JldHVybiBuZXcgci5UcmFuc2FjdGlvbihzLGMsaCxyLl9vcHRpb25zLmNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eSxsKX0sdGhpcy5fZmlyZU9uQmxvY2tlZD1mdW5jdGlvbihzKXtyLm9uKFwiYmxvY2tlZFwiKS5maXJlKHMpLFZlLmZpbHRlcihmdW5jdGlvbihjKXtyZXR1cm4gYy5uYW1lPT09ci5uYW1lJiZjIT09ciYmIWMuX3N0YXRlLnZjRmlyZWR9KS5tYXAoZnVuY3Rpb24oYyl7cmV0dXJuIGMub24oXCJ2ZXJzaW9uY2hhbmdlXCIpLmZpcmUocyl9KX0sdGhpcy51c2UoV2kpLHRoaXMudXNlKGVhKSx0aGlzLnVzZShZaSksdGhpcy51c2UoTGkpLHRoaXMudXNlKFZpKTt2YXIgbz1uZXcgUHJveHkodGhpcyx7Z2V0OmZ1bmN0aW9uKHMsYyxoKXtpZihjPT09XCJfdmlwXCIpcmV0dXJuITA7aWYoYz09PVwidGFibGVcIilyZXR1cm4gZnVuY3Rpb24ocCl7cmV0dXJuIENuKHIudGFibGUocCksbyl9O3ZhciBsPVJlZmxlY3QuZ2V0KHMsYyxoKTtyZXR1cm4gbCBpbnN0YW5jZW9mIHRyP0NuKGwsbyk6Yz09PVwidGFibGVzXCI/bC5tYXAoZnVuY3Rpb24ocCl7cmV0dXJuIENuKHAsbyl9KTpjPT09XCJfY3JlYXRlVHJhbnNhY3Rpb25cIj9mdW5jdGlvbigpe3ZhciBwPWwuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBDbihwLG8pfTpsfX0pO3RoaXMudmlwPW8sYS5mb3JFYWNoKGZ1bmN0aW9uKHMpe3JldHVybiBzKHIpfSl9cmV0dXJuIGUucHJvdG90eXBlLnZlcnNpb249ZnVuY3Rpb24obil7aWYoaXNOYU4obil8fG48LjEpdGhyb3cgbmV3IEQuVHlwZShcIkdpdmVuIHZlcnNpb24gaXMgbm90IGEgcG9zaXRpdmUgbnVtYmVyXCIpO2lmKG49TWF0aC5yb3VuZChuKjEwKS8xMCx0aGlzLmlkYmRifHx0aGlzLl9zdGF0ZS5pc0JlaW5nT3BlbmVkKXRocm93IG5ldyBELlNjaGVtYShcIkNhbm5vdCBhZGQgdmVyc2lvbiB3aGVuIGRhdGFiYXNlIGlzIG9wZW5cIik7dGhpcy52ZXJubz1NYXRoLm1heCh0aGlzLnZlcm5vLG4pO3ZhciB0PXRoaXMuX3ZlcnNpb25zLHI9dC5maWx0ZXIoZnVuY3Rpb24oaSl7cmV0dXJuIGkuX2NmZy52ZXJzaW9uPT09bn0pWzBdO3JldHVybiByfHwocj1uZXcgdGhpcy5WZXJzaW9uKG4pLHQucHVzaChyKSx0LnNvcnQoRWkpLHIuc3RvcmVzKHt9KSx0aGlzLl9zdGF0ZS5hdXRvU2NoZW1hPSExLHIpfSxlLnByb3RvdHlwZS5fd2hlblJlYWR5PWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXM7cmV0dXJuIHRoaXMuaWRiZGImJih0aGlzLl9zdGF0ZS5vcGVuQ29tcGxldGV8fGsubGV0VGhyb3VnaHx8dGhpcy5fdmlwKT9uKCk6bmV3IEsoZnVuY3Rpb24ocixpKXtpZih0Ll9zdGF0ZS5vcGVuQ29tcGxldGUpcmV0dXJuIGkobmV3IEQuRGF0YWJhc2VDbG9zZWQodC5fc3RhdGUuZGJPcGVuRXJyb3IpKTtpZighdC5fc3RhdGUuaXNCZWluZ09wZW5lZCl7aWYoIXQuX3N0YXRlLmF1dG9PcGVuKXtpKG5ldyBELkRhdGFiYXNlQ2xvc2VkKTtyZXR1cm59dC5vcGVuKCkuY2F0Y2goRil9dC5fc3RhdGUuZGJSZWFkeVByb21pc2UudGhlbihyLGkpfSkudGhlbihuKX0sZS5wcm90b3R5cGUudXNlPWZ1bmN0aW9uKG4pe3ZhciB0PW4uc3RhY2sscj1uLmNyZWF0ZSxpPW4ubGV2ZWwsYT1uLm5hbWU7YSYmdGhpcy51bnVzZSh7c3RhY2s6dCxuYW1lOmF9KTt2YXIgdT10aGlzLl9taWRkbGV3YXJlc1t0XXx8KHRoaXMuX21pZGRsZXdhcmVzW3RdPVtdKTtyZXR1cm4gdS5wdXNoKHtzdGFjazp0LGNyZWF0ZTpyLGxldmVsOmk/PzEwLG5hbWU6YX0pLHUuc29ydChmdW5jdGlvbihvLHMpe3JldHVybiBvLmxldmVsLXMubGV2ZWx9KSx0aGlzfSxlLnByb3RvdHlwZS51bnVzZT1mdW5jdGlvbihuKXt2YXIgdD1uLnN0YWNrLHI9bi5uYW1lLGk9bi5jcmVhdGU7cmV0dXJuIHQmJnRoaXMuX21pZGRsZXdhcmVzW3RdJiYodGhpcy5fbWlkZGxld2FyZXNbdF09dGhpcy5fbWlkZGxld2FyZXNbdF0uZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBpP2EuY3JlYXRlIT09aTpyP2EubmFtZSE9PXI6ITF9KSksdGhpc30sZS5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3ZhciBuPXRoaXM7cmV0dXJuIGtlKGZlLGZ1bmN0aW9uKCl7cmV0dXJuIEZpKG4pfSl9LGUucHJvdG90eXBlLl9jbG9zZT1mdW5jdGlvbigpe3ZhciBuPXRoaXMuX3N0YXRlLHQ9VmUuaW5kZXhPZih0aGlzKTtpZih0Pj0wJiZWZS5zcGxpY2UodCwxKSx0aGlzLmlkYmRiKXt0cnl7dGhpcy5pZGJkYi5jbG9zZSgpfWNhdGNoe310aGlzLmlkYmRiPW51bGx9bi5pc0JlaW5nT3BlbmVkfHwobi5kYlJlYWR5UHJvbWlzZT1uZXcgSyhmdW5jdGlvbihyKXtuLmRiUmVhZHlSZXNvbHZlPXJ9KSxuLm9wZW5DYW5jZWxsZXI9bmV3IEsoZnVuY3Rpb24ocixpKXtuLmNhbmNlbE9wZW49aX0pKX0sZS5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24obil7dmFyIHQ9bj09PXZvaWQgMD97ZGlzYWJsZUF1dG9PcGVuOiEwfTpuLHI9dC5kaXNhYmxlQXV0b09wZW4saT10aGlzLl9zdGF0ZTtyPyhpLmlzQmVpbmdPcGVuZWQmJmkuY2FuY2VsT3BlbihuZXcgRC5EYXRhYmFzZUNsb3NlZCksdGhpcy5fY2xvc2UoKSxpLmF1dG9PcGVuPSExLGkuZGJPcGVuRXJyb3I9bmV3IEQuRGF0YWJhc2VDbG9zZWQpOih0aGlzLl9jbG9zZSgpLGkuYXV0b09wZW49dGhpcy5fb3B0aW9ucy5hdXRvT3Blbnx8aS5pc0JlaW5nT3BlbmVkLGkub3BlbkNvbXBsZXRlPSExLGkuZGJPcGVuRXJyb3I9bnVsbCl9LGUucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzO249PT12b2lkIDAmJihuPXtkaXNhYmxlQXV0b09wZW46ITB9KTt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjAmJnR5cGVvZiBhcmd1bWVudHNbMF0hPVwib2JqZWN0XCIsaT10aGlzLl9zdGF0ZTtyZXR1cm4gbmV3IEsoZnVuY3Rpb24oYSx1KXt2YXIgbz1mdW5jdGlvbigpe3QuY2xvc2Uobik7dmFyIHM9dC5fZGVwcy5pbmRleGVkREIuZGVsZXRlRGF0YWJhc2UodC5uYW1lKTtzLm9uc3VjY2Vzcz1qKGZ1bmN0aW9uKCl7QmkodC5fZGVwcyx0Lm5hbWUpLGEoKX0pLHMub25lcnJvcj1yZSh1KSxzLm9uYmxvY2tlZD10Ll9maXJlT25CbG9ja2VkfTtpZihyKXRocm93IG5ldyBELkludmFsaWRBcmd1bWVudChcIkludmFsaWQgY2xvc2VPcHRpb25zIGFyZ3VtZW50IHRvIGRiLmRlbGV0ZSgpXCIpO2kuaXNCZWluZ09wZW5lZD9pLmRiUmVhZHlQcm9taXNlLnRoZW4obyk6bygpfSl9LGUucHJvdG90eXBlLmJhY2tlbmREQj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlkYmRifSxlLnByb3RvdHlwZS5pc09wZW49ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pZGJkYiE9PW51bGx9LGUucHJvdG90eXBlLmhhc0JlZW5DbG9zZWQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLl9zdGF0ZS5kYk9wZW5FcnJvcjtyZXR1cm4gbiYmbi5uYW1lPT09XCJEYXRhYmFzZUNsb3NlZFwifSxlLnByb3RvdHlwZS5oYXNGYWlsZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc3RhdGUuZGJPcGVuRXJyb3IhPT1udWxsfSxlLnByb3RvdHlwZS5keW5hbWljYWxseU9wZW5lZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9zdGF0ZS5hdXRvU2NoZW1hfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJ0YWJsZXNcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIG49dGhpcztyZXR1cm4gVSh0aGlzLl9hbGxUYWJsZXMpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbi5fYWxsVGFibGVzW3RdfSl9LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksZS5wcm90b3R5cGUudHJhbnNhY3Rpb249ZnVuY3Rpb24oKXt2YXIgbj1qaS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHRoaXMuX3RyYW5zYWN0aW9uLmFwcGx5KHRoaXMsbil9LGUucHJvdG90eXBlLl90cmFuc2FjdGlvbj1mdW5jdGlvbihuLHQscil7dmFyIGk9dGhpcyxhPWsudHJhbnM7KCFhfHxhLmRiIT09dGhpc3x8bi5pbmRleE9mKFwiIVwiKSE9PS0xKSYmKGE9bnVsbCk7dmFyIHU9bi5pbmRleE9mKFwiP1wiKSE9PS0xO249bi5yZXBsYWNlKFwiIVwiLFwiXCIpLnJlcGxhY2UoXCI/XCIsXCJcIik7dmFyIG8sczt0cnl7aWYocz10Lm1hcChmdW5jdGlvbihoKXt2YXIgbD1oIGluc3RhbmNlb2YgaS5UYWJsZT9oLm5hbWU6aDtpZih0eXBlb2YgbCE9XCJzdHJpbmdcIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCB0YWJsZSBhcmd1bWVudCB0byBEZXhpZS50cmFuc2FjdGlvbigpLiBPbmx5IFRhYmxlIG9yIFN0cmluZyBhcmUgYWxsb3dlZFwiKTtyZXR1cm4gbH0pLG49PVwiclwifHxuPT09bnQpbz1udDtlbHNlIGlmKG49PVwicndcInx8bj09dHQpbz10dDtlbHNlIHRocm93IG5ldyBELkludmFsaWRBcmd1bWVudChcIkludmFsaWQgdHJhbnNhY3Rpb24gbW9kZTogXCIrbik7aWYoYSl7aWYoYS5tb2RlPT09bnQmJm89PT10dClpZih1KWE9bnVsbDtlbHNlIHRocm93IG5ldyBELlN1YlRyYW5zYWN0aW9uKFwiQ2Fubm90IGVudGVyIGEgc3ViLXRyYW5zYWN0aW9uIHdpdGggUkVBRFdSSVRFIG1vZGUgd2hlbiBwYXJlbnQgdHJhbnNhY3Rpb24gaXMgUkVBRE9OTFlcIik7YSYmcy5mb3JFYWNoKGZ1bmN0aW9uKGgpe2lmKGEmJmEuc3RvcmVOYW1lcy5pbmRleE9mKGgpPT09LTEpaWYodSlhPW51bGw7ZWxzZSB0aHJvdyBuZXcgRC5TdWJUcmFuc2FjdGlvbihcIlRhYmxlIFwiK2grXCIgbm90IGluY2x1ZGVkIGluIHBhcmVudCB0cmFuc2FjdGlvbi5cIil9KSx1JiZhJiYhYS5hY3RpdmUmJihhPW51bGwpfX1jYXRjaChoKXtyZXR1cm4gYT9hLl9wcm9taXNlKG51bGwsZnVuY3Rpb24obCxwKXtwKGgpfSk6eihoKX12YXIgYz1wci5iaW5kKG51bGwsdGhpcyxvLHMsYSxyKTtyZXR1cm4gYT9hLl9wcm9taXNlKG8sYyxcImxvY2tcIik6ay50cmFucz9rZShrLnRyYW5zbGVzcyxmdW5jdGlvbigpe3JldHVybiBpLl93aGVuUmVhZHkoYyl9KTp0aGlzLl93aGVuUmVhZHkoYyl9LGUucHJvdG90eXBlLnRhYmxlPWZ1bmN0aW9uKG4pe2lmKCFYKHRoaXMuX2FsbFRhYmxlcyxuKSl0aHJvdyBuZXcgRC5JbnZhbGlkVGFibGUoXCJUYWJsZSBcIi5jb25jYXQobixcIiBkb2VzIG5vdCBleGlzdFwiKSk7cmV0dXJuIHRoaXMuX2FsbFRhYmxlc1tuXX0sZX0oKSxuYT10eXBlb2YgU3ltYm9sPFwidVwiJiZcIm9ic2VydmFibGVcImluIFN5bWJvbD9TeW1ib2wub2JzZXJ2YWJsZTpcIkBAb2JzZXJ2YWJsZVwiLHRhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShuKXt0aGlzLl9zdWJzY3JpYmU9bn1yZXR1cm4gZS5wcm90b3R5cGUuc3Vic2NyaWJlPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gdGhpcy5fc3Vic2NyaWJlKCFufHx0eXBlb2Ygbj09XCJmdW5jdGlvblwiP3tuZXh0Om4sZXJyb3I6dCxjb21wbGV0ZTpyfTpuKX0sZS5wcm90b3R5cGVbbmFdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGV9KCksSW47dHJ5e0luPXtpbmRleGVkREI6Ti5pbmRleGVkREJ8fE4ubW96SW5kZXhlZERCfHxOLndlYmtpdEluZGV4ZWREQnx8Ti5tc0luZGV4ZWREQixJREJLZXlSYW5nZTpOLklEQktleVJhbmdlfHxOLndlYmtpdElEQktleVJhbmdlfX1jYXRjaHtJbj17aW5kZXhlZERCOm51bGwsSURCS2V5UmFuZ2U6bnVsbH19ZnVuY3Rpb24geHIoZSl7dmFyIG49ITEsdCxyPW5ldyB0YShmdW5jdGlvbihpKXt2YXIgYT1MbihlKTtmdW5jdGlvbiB1KGIpe3ZhciBtPWplKCk7dHJ5e2EmJkxlKCk7dmFyIGc9aGUoZSxiKTtyZXR1cm4gYSYmKGc9Zy5maW5hbGx5KGRlKSksZ31maW5hbGx5e20mJk5lKCl9fXZhciBvPSExLHMsYz17fSxoPXt9LGw9e2dldCBjbG9zZWQoKXtyZXR1cm4gb30sdW5zdWJzY3JpYmU6ZnVuY3Rpb24oKXtvfHwobz0hMCxzJiZzLmFib3J0KCkscCYmeWUuc3RvcmFnZW11dGF0ZWQudW5zdWJzY3JpYmUoZCkpfX07aS5zdGFydCYmaS5zdGFydChsKTt2YXIgcD0hMSxfPWZ1bmN0aW9uKCl7cmV0dXJuIFpuKHYpfTtmdW5jdGlvbiBmKCl7cmV0dXJuIGd0KGgsYyl9dmFyIGQ9ZnVuY3Rpb24oYil7RG4oYyxiKSxmKCkmJl8oKX0sdj1mdW5jdGlvbigpe2lmKCEob3x8IUluLmluZGV4ZWREQikpe2M9e307dmFyIGI9e307cyYmcy5hYm9ydCgpLHM9bmV3IEFib3J0Q29udHJvbGxlcjt2YXIgbT17c3Vic2NyOmIsc2lnbmFsOnMuc2lnbmFsLHJlcXVlcnk6XyxxdWVyaWVyOmUsdHJhbnM6bnVsbH0sZz11KG0pO1Byb21pc2UucmVzb2x2ZShnKS50aGVuKGZ1bmN0aW9uKHcpe249ITAsdD13LCEob3x8bS5zaWduYWwuYWJvcnRlZCkmJihjPXt9LGg9YiwhSXIoaCkmJiFwJiYoeWUoZW4sZCkscD0hMCksWm4oZnVuY3Rpb24oKXtyZXR1cm4hbyYmaS5uZXh0JiZpLm5leHQodyl9KSl9LGZ1bmN0aW9uKHcpe249ITEsW1wiRGF0YWJhc2VDbG9zZWRFcnJvclwiLFwiQWJvcnRFcnJvclwiXS5pbmNsdWRlcyh3Py5uYW1lKXx8b3x8Wm4oZnVuY3Rpb24oKXtvfHxpLmVycm9yJiZpLmVycm9yKHcpfSl9KX19O3JldHVybiBzZXRUaW1lb3V0KF8sMCksbH0pO3JldHVybiByLmhhc1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIG59LHIuZ2V0VmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gdH0scn12YXIgVGU9Y2U7SWUoVGUsQyhDKHt9LGNuKSx7ZGVsZXRlOmZ1bmN0aW9uKGUpe3ZhciBuPW5ldyBUZShlLHthZGRvbnM6W119KTtyZXR1cm4gbi5kZWxldGUoKX0sZXhpc3RzOmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgVGUoZSx7YWRkb25zOltdfSkub3BlbigpLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIG4uY2xvc2UoKSwhMH0pLmNhdGNoKFwiTm9TdWNoRGF0YWJhc2VFcnJvclwiLGZ1bmN0aW9uKCl7cmV0dXJuITF9KX0sZ2V0RGF0YWJhc2VOYW1lczpmdW5jdGlvbihlKXt0cnl7cmV0dXJuIElpKFRlLmRlcGVuZGVuY2llcykudGhlbihlKX1jYXRjaHtyZXR1cm4geihuZXcgRC5NaXNzaW5nQVBJKX19LGRlZmluZUNsYXNzOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShuKXtKKHRoaXMsbil9cmV0dXJuIGV9LGlnbm9yZVRyYW5zYWN0aW9uOmZ1bmN0aW9uKGUpe3JldHVybiBrLnRyYW5zP2tlKGsudHJhbnNsZXNzLGUpOmUoKX0sdmlwOnB0LGFzeW5jOmZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe3RyeXt2YXIgbj14dChlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSk7cmV0dXJuIW58fHR5cGVvZiBuLnRoZW4hPVwiZnVuY3Rpb25cIj9LLnJlc29sdmUobik6bn1jYXRjaCh0KXtyZXR1cm4geih0KX19fSxzcGF3bjpmdW5jdGlvbihlLG4sdCl7dHJ5e3ZhciByPXh0KGUuYXBwbHkodCxufHxbXSkpO3JldHVybiFyfHx0eXBlb2Ygci50aGVuIT1cImZ1bmN0aW9uXCI/Sy5yZXNvbHZlKHIpOnJ9Y2F0Y2goaSl7cmV0dXJuIHooaSl9fSxjdXJyZW50VHJhbnNhY3Rpb246e2dldDpmdW5jdGlvbigpe3JldHVybiBrLnRyYW5zfHxudWxsfX0sd2FpdEZvcjpmdW5jdGlvbihlLG4pe3ZhciB0PUsucmVzb2x2ZSh0eXBlb2YgZT09XCJmdW5jdGlvblwiP1RlLmlnbm9yZVRyYW5zYWN0aW9uKGUpOmUpLnRpbWVvdXQobnx8NmU0KTtyZXR1cm4gay50cmFucz9rLnRyYW5zLndhaXRGb3IodCk6dH0sUHJvbWlzZTpLLGRlYnVnOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGV9LHNldDpmdW5jdGlvbihlKXtWdChlKX19LGRlcml2ZTpSZSxleHRlbmQ6Sixwcm9wczpJZSxvdmVycmlkZTpDdCxFdmVudHM6R2Usb246eWUsbGl2ZVF1ZXJ5OnhyLGV4dGVuZE9ic2VydmFiaWxpdHlTZXQ6RG4sZ2V0QnlLZXlQYXRoOnVlLHNldEJ5S2V5UGF0aDpaLGRlbEJ5S2V5UGF0aDpQcixzaGFsbG93Q2xvbmU6UnQsZGVlcENsb25lOl9lLGdldE9iamVjdERpZmY6RXQsY21wOkIsYXNhcDpJdCxtaW5LZXk6ZXQsYWRkb25zOltdLGNvbm5lY3Rpb25zOlZlLGVycm5hbWVzOnpuLGRlcGVuZGVuY2llczpJbixjYWNoZTpQZSxzZW1WZXI6R3QsdmVyc2lvbjpHdC5zcGxpdChcIi5cIikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBwYXJzZUludChlKX0pLnJlZHVjZShmdW5jdGlvbihlLG4sdCl7cmV0dXJuIGUrbi9NYXRoLnBvdygxMCx0KjIpfSl9KSksVGUubWF4S2V5PW5uKFRlLmRlcGVuZGVuY2llcy5JREJLZXlSYW5nZSksdHlwZW9mIGRpc3BhdGNoRXZlbnQ8XCJ1XCImJnR5cGVvZiBhZGRFdmVudExpc3RlbmVyPFwidVwiJiYoeWUoZW4sZnVuY3Rpb24oZSl7aWYoIW1lKXt2YXIgbjtuPW5ldyBDdXN0b21FdmVudCh1dCx7ZGV0YWlsOmV9KSxtZT0hMCxkaXNwYXRjaEV2ZW50KG4pLG1lPSExfX0pLGFkZEV2ZW50TGlzdGVuZXIodXQsZnVuY3Rpb24oZSl7dmFyIG49ZS5kZXRhaWw7bWV8fEF0KG4pfSkpO2Z1bmN0aW9uIEF0KGUpe3ZhciBuPW1lO3RyeXttZT0hMCx5ZS5zdG9yYWdlbXV0YXRlZC5maXJlKGUpLF90KGUsITApfWZpbmFsbHl7bWU9bn19dmFyIG1lPSExLGdlLGt0PWZ1bmN0aW9uKCl7fTt0eXBlb2YgQnJvYWRjYXN0Q2hhbm5lbDxcInVcIiYmKGt0PWZ1bmN0aW9uKCl7Z2U9bmV3IEJyb2FkY2FzdENoYW5uZWwodXQpLGdlLm9ubWVzc2FnZT1mdW5jdGlvbihlKXtyZXR1cm4gZS5kYXRhJiZBdChlLmRhdGEpfX0sa3QoKSx0eXBlb2YgZ2UudW5yZWY9PVwiZnVuY3Rpb25cIiYmZ2UudW5yZWYoKSx5ZShlbixmdW5jdGlvbihlKXttZXx8Z2UucG9zdE1lc3NhZ2UoZSl9KSksdHlwZW9mIGFkZEV2ZW50TGlzdGVuZXI8XCJ1XCImJihhZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIixmdW5jdGlvbihlKXtpZighY2UuZGlzYWJsZUJmQ2FjaGUmJmUucGVyc2lzdGVkKXt0ZSYmY29uc29sZS5kZWJ1ZyhcIkRleGllOiBoYW5kbGluZyBwZXJzaXN0ZWQgcGFnZWhpZGVcIiksZ2U/LmNsb3NlKCk7Zm9yKHZhciBuPTAsdD1WZTtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmNsb3NlKHtkaXNhYmxlQXV0b09wZW46ITF9KX19fSksYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsZnVuY3Rpb24oZSl7IWNlLmRpc2FibGVCZkNhY2hlJiZlLnBlcnNpc3RlZCYmKHRlJiZjb25zb2xlLmRlYnVnKFwiRGV4aWU6IGhhbmRsaW5nIHBlcnNpc3RlZCBwYWdlc2hvd1wiKSxrdCgpLEF0KHthbGw6bmV3IFEoLTEvMCxbW11dKX0pKX0pKTtmdW5jdGlvbiByYShlKXtyZXR1cm4gbmV3IFplKHthZGQ6ZX0pfWZ1bmN0aW9uIGlhKGUpe3JldHVybiBuZXcgWmUoe3JlbW92ZTplfSl9ZnVuY3Rpb24gYWEoZSxuKXtyZXR1cm4gbmV3IFplKHtyZXBsYWNlUHJlZml4OltlLG5dfSl9Sy5yZWplY3Rpb25NYXBwZXI9TnIsVnQodGUpO3ZhciB1YT1PYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxEZXhpZTpjZSxsaXZlUXVlcnk6eHIsRW50aXR5OnF0LGNtcDpCLFByb3BNb2RpZmljYXRpb246WmUscmVwbGFjZVByZWZpeDphYSxhZGQ6cmEscmVtb3ZlOmlhLGRlZmF1bHQ6Y2UsUmFuZ2VTZXQ6USxtZXJnZVJhbmdlczphbixyYW5nZXNPdmVybGFwOmZyfSk7cmV0dXJuIEMoY2UsdWEse2RlZmF1bHQ6Y2V9KSxjZX0pfSk7dmFyIEJuPXBhKEtyKCksMSksU3I9U3ltYm9sLmZvcihcIkRleGllXCIpLE1uPWdsb2JhbFRoaXNbU3JdfHwoZ2xvYmFsVGhpc1tTcl09Qm4uZGVmYXVsdCk7aWYoQm4uZGVmYXVsdC5zZW1WZXIhPT1Nbi5zZW1WZXIpdGhyb3cgbmV3IEVycm9yKGBUd28gZGlmZmVyZW50IHZlcnNpb25zIG9mIERleGllIGxvYWRlZCBpbiB0aGUgc2FtZSBhcHA6ICR7Qm4uZGVmYXVsdC5zZW1WZXJ9IGFuZCAke01uLnNlbVZlcn1gKTt2YXJ7bGl2ZVF1ZXJ5Om1hLG1lcmdlUmFuZ2VzOmdhLHJhbmdlc092ZXJsYXA6YmEsUmFuZ2VTZXQ6d2EsY21wOl9hLEVudGl0eTp4YSxQcm9wTW9kaWZpY2F0aW9uOkVhLHJlcGxhY2VQcmVmaXg6S2EsYWRkOlNhLHJlbW92ZTpBYX09TW47dmFyIGthPU1uO2V4cG9ydHtNbiBhcyBEZXhpZSx4YSBhcyBFbnRpdHksRWEgYXMgUHJvcE1vZGlmaWNhdGlvbix3YSBhcyBSYW5nZVNldCxTYSBhcyBhZGQsX2EgYXMgY21wLGthIGFzIGRlZmF1bHQsbWEgYXMgbGl2ZVF1ZXJ5LGdhIGFzIG1lcmdlUmFuZ2VzLGJhIGFzIHJhbmdlc092ZXJsYXAsQWEgYXMgcmVtb3ZlLEthIGFzIHJlcGxhY2VQcmVmaXh9O1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxuZGV4aWUvZGlzdC9kZXhpZS5qczpcbiAgKCohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuICBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbiAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG4gIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG4gIElORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuICBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG4gIFBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICopXG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV4aWUubWpzLm1hcCIsICJjb25zdCBMaWJyYXJ5QVBJID1cbiAgU3BpY2V0aWZ5LlBsYXRmb3JtLkxpYnJhcnlBUEkgfHwgU3BpY2V0aWZ5LlBsYXRmb3JtLlJlZ2lzdHJ5LnJlc29sdmUoU3ltYm9sLmZvcihcIkxpYnJhcnlBUElcIikpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGxMaWJyYXJ5Q29udGVudHMoKTogUHJvbWlzZTxvYmplY3RbXT4ge1xuICBjb25zdCByZXNwb25zZTogeyBpdGVtczogb2JqZWN0W10gfSA9IChhd2FpdCBMaWJyYXJ5QVBJLmdldENvbnRlbnRzKHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgbGltaXQ6IDEwMDAwMDAwLFxuICAgIGZsYXR0ZW5UcmVlOiB0cnVlLFxuICB9KSkgYXMgeyBpdGVtczogb2JqZWN0W10gfTtcblxuICByZXR1cm4gcmVzcG9uc2UuaXRlbXM7XG59XG4iLCAiY29uc3QgUGxheWxpc3RBUEkgPVxuICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWxpc3RBUEkgfHwgU3BpY2V0aWZ5LlBsYXRmb3JtLlJlZ2lzdHJ5LnJlc29sdmUoU3ltYm9sLmZvcihcIlBsYXlsaXN0QVBJXCIpKTtcblxuaW50ZXJmYWNlIFJlc3BvbnNlIHtcbiAgaXRlbXM6IG9iamVjdFtdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGxQbGF5bGlzdFRyYWNrcyhwbGF5bGlzdFVyaTogc3RyaW5nKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICBjb25zdCByZXNwb25zZTogeyBpdGVtczogb2JqZWN0W10gfSA9IChhd2FpdCBQbGF5bGlzdEFQSS5nZXRDb250ZW50cyhwbGF5bGlzdFVyaSwge1xuICAgIG9mZnNldDogMCxcbiAgICBsaW1pdDogLTEsXG4gIH0pKSBhcyB7IGl0ZW1zOiBvYmplY3RbXSB9O1xuXG4gIHJldHVybiB7XG4gICAgaXRlbXM6IHJlc3BvbnNlLml0ZW1zLFxuICB9O1xufVxuIiwgImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEdyYXBoUUxGb3JBbGJ1bVRyYWNrcyhcbiAgYWxidW1VUklzOiBTZXQ8c3RyaW5nPixcbik6IFByb21pc2U8TWFwPHN0cmluZywgb2JqZWN0Pj4ge1xuICBjb25zdCBkYXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsIG9iamVjdD4oKTtcblxuICBjb25zdCBiYXRjaEZldGNoUHJvbWlzZXMgPSBBcnJheS5mcm9tKGFsYnVtVVJJcykubWFwKGFzeW5jIChhbGJ1bVVyaTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLkdyYXBoUUxMb2FkZXIoXG4gICAgICBTcGljZXRpZnkuR3JhcGhRTC5EZWZpbml0aW9ucy5xdWVyeUFsYnVtVHJhY2tzLFxuICAgICAge1xuICAgICAgICB1cmk6IGFsYnVtVXJpLFxuICAgICAgICBsb2NhbGU6IFNwaWNldGlmeS5Mb2NhbGUuZ2V0TG9jYWxlKCksXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgbGltaXQ6IDUwMDAsXG4gICAgICB9LFxuICAgICkpIGFzIHsgZGF0YTogYW55IH07XG4gICAgY29uc3QgYWxidW1UcmFja3NEYXRhID0gcmVzcG9uc2U/LmRhdGE/LmFsYnVtVW5pb24/LnRyYWNrc1YyPy5pdGVtcztcbiAgICBpZiAoYWxidW1UcmFja3NEYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYWxidW1UcmFja3NEYXRhKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrVXJpOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBpdGVtPy50cmFjaz8udXJpO1xuICAgICAgICBpZiAodHJhY2tVcmkpIHtcbiAgICAgICAgICBkYXRhTWFwLnNldCh0cmFja1VyaSwgaXRlbS50cmFjayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKGJhdGNoRmV0Y2hQcm9taXNlcyk7XG4gIHJldHVybiBkYXRhTWFwO1xufVxuIiwgImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYkFQSUZvclRyYWNrcyh0cmFja1VSSXM6IEFycmF5PHN0cmluZz4pOiBQcm9taXNlPE1hcDxzdHJpbmcsIG9iamVjdD4+IHtcbiAgY29uc3QgZGF0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBvYmplY3Q+KCk7XG4gIGNvbnN0IHRyYWNrSWRzVG9GZXRjaCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgZm9yIChjb25zdCB1cmkgb2YgdHJhY2tVUklzKSB7XG4gICAgaWYgKHVyaSkge1xuICAgICAgY29uc3QgaWQgPSBTcGljZXRpZnkuVVJJLmZyb21TdHJpbmcodXJpKS5pZDtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICB0cmFja0lkc1RvRmV0Y2guc2V0KHVyaSwgaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMgaXMgdGhlIG1heGltdW0gbnVtYmVyIHNwb3RpZnkgYWxsb3dzIGluIGEgc2luZ2xlIHJlcXVlc3RcbiAgY29uc3QgYmF0Y2hTaXplID0gNTA7XG4gIGNvbnN0IGJhdGNoRmV0Y2hQcm9taXNlcyA9IEFycmF5LmZyb20odHJhY2tJZHNUb0ZldGNoLnZhbHVlcygpKVxuICAgIC5yZWR1Y2UoKGJhdGNoZXM6IHN0cmluZ1tdW10sIGlkOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgYmF0Y2hJbmRleCA9IE1hdGguZmxvb3IoaSAvIGJhdGNoU2l6ZSk7XG4gICAgICBiYXRjaGVzW2JhdGNoSW5kZXhdID0gYmF0Y2hlc1tiYXRjaEluZGV4XSB8fCBbXTtcbiAgICAgIGJhdGNoZXNbYmF0Y2hJbmRleF0ucHVzaChpZCk7XG4gICAgICByZXR1cm4gYmF0Y2hlcztcbiAgICB9LCBbXSBhcyBzdHJpbmdbXVtdKVxuICAgIC5tYXAoYXN5bmMgKGJhdGNoSWRzOiBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3RyYWNrcz9pZHM9JHtiYXRjaElkcy5qb2luKFwiLFwiKX1gO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBTcGljZXRpZnkuQ29zbW9zQXN5bmMuZ2V0KHVybCk7XG4gICAgICBpZiAocmVzcG9uc2U/LnRyYWNrcykge1xuICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHJlc3BvbnNlLnRyYWNrcykge1xuICAgICAgICAgIGNvbnN0IHRyYWNrVXJpOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0cmFjaz8udXJpO1xuICAgICAgICAgIGlmICh0cmFja1VyaSkge1xuICAgICAgICAgICAgZGF0YU1hcC5zZXQodHJhY2tVcmksIHRyYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChiYXRjaEZldGNoUHJvbWlzZXMpO1xuICByZXR1cm4gZGF0YU1hcDtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yXG5jb25zdCByZXF1aXJlID0gd2VicGFja0NodW5rY2xpZW50X3dlYi5wdXNoKFtbU3ltYm9sKCldLCB7fSwgKHJlKSA9PiByZV0pO1xuY29uc3QgY2h1bmtzID0gT2JqZWN0LmVudHJpZXMocmVxdWlyZS5tKTtcblxuY29uc3QgZm91bmRNb2R1bGVzID0gY2h1bmtzLmZpbHRlcihcbiAgKFtfLCBkZWZpbml0aW9uXSkgPT5cbiAgICB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgZGVmaW5pdGlvbi50b1N0cmluZygpLmluY2x1ZGVzKFwibWFpbi1jb25maXJtRGlhbG9nLWNvbnRhaW5lclwiKSxcbik7XG5cbmNvbnN0IGNvbXBvbmVudCA9IGZvdW5kTW9kdWxlcy5mbGF0TWFwKChbaWRdKSA9PiBPYmplY3QudmFsdWVzKHJlcXVpcmUoaWQpKSlbMF07XG5TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuQ29uZmlybURpYWxvZyA9IGNvbXBvbmVudDtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtRGlhbG9nUHJvcHMge1xuICB0aXRsZVRleHQ6IHN0cmluZztcbiAgZGVzY3JpcHRpb25UZXh0OiBzdHJpbmc7XG4gIGNhbmNlbFRleHQ/OiBzdHJpbmc7XG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICBvbkNvbmZpcm0/OiAoKSA9PiB2b2lkO1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgb25PcGVuPzogKCkgPT4gdm9pZDtcbiAgb25PdXRzaWRlPzogKCkgPT4gdm9pZDtcbiAgYWxsb3dIVE1MPzogYm9vbGVhbjtcbiAgY29uZmlybUxhYmVsPzogc3RyaW5nO1xuICBzaG91bGRDbG9zZU9uRXNjPzogYm9vbGVhbjtcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaz86IGJvb2xlYW47XG4gIHNob3VsZEZvY3VzQWZ0ZXJSZW5kZXI/OiBib29sZWFuO1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbmZpcm1EaWFsb2coe1xuICB0aXRsZVRleHQsXG4gIGRlc2NyaXB0aW9uVGV4dCxcbiAgY2FuY2VsVGV4dCA9IFwiQ2FuY2VsXCIsXG4gIGNvbmZpcm1UZXh0ID0gXCJDb25maXJtXCIsXG4gIG9uQ29uZmlybSxcbiAgb25DbG9zZSxcbiAgb25PcGVuLFxuICBvbk91dHNpZGUsXG4gIGFsbG93SFRNTCxcbiAgY29uZmlybUxhYmVsLFxuICBzaG91bGRDbG9zZU9uRXNjLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxuICBzaG91bGRGb2N1c0FmdGVyUmVuZGVyLFxuICB3aWR0aCxcbn06IENvbmZpcm1EaWFsb2dQcm9wcykge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuICBjb25zdCBDb25maXJtRGlhbG9nQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIG9uT3Blbj8uKCk7XG4gICAgfSwgW29uT3Blbl0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1bm1vdW50QW5kUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICByb290LnVubW91bnQoKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgZGlhbG9nRWxlbWVudCA9IGRpYWxvZ1JlZi5jdXJyZW50O1xuXG4gICAgICBpZiAoZGlhbG9nRWxlbWVudCkge1xuICAgICAgICBkaWFsb2dFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdW5tb3VudEFuZFJlbW92ZSwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgZGlhbG9nRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIHVubW91bnRBbmRSZW1vdmUpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdW5tb3VudEFuZFJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0sIFtpc09wZW5dKTtcblxuICAgIGNvbnN0IHdyYXBBY3Rpb24gPSAoYWN0aW9uOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGFjdGlvbj8uKCk7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Db25maXJtRGlhbG9nXG4gICAgICAgIGFsbG93SFRNTD17YWxsb3dIVE1MfVxuICAgICAgICBjYW5jZWxUZXh0PXtjYW5jZWxUZXh0fVxuICAgICAgICBjb25maXJtTGFiZWw9e2NvbmZpcm1MYWJlbH1cbiAgICAgICAgY29uZmlybVRleHQ9e2NvbmZpcm1UZXh0fVxuICAgICAgICBkZXNjcmlwdGlvblRleHQ9e2Rlc2NyaXB0aW9uVGV4dH1cbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIG9uQ2xvc2U9e3dyYXBBY3Rpb24ob25DbG9zZSl9XG4gICAgICAgIG9uQ29uZmlybT17d3JhcEFjdGlvbihvbkNvbmZpcm0pfVxuICAgICAgICBvbk91dHNpZGU9e3dyYXBBY3Rpb24ob25PdXRzaWRlKX1cbiAgICAgICAgcmVmPXtkaWFsb2dSZWZ9XG4gICAgICAgIHNob3VsZENsb3NlT25Fc2M9e3Nob3VsZENsb3NlT25Fc2N9XG4gICAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s9e3Nob3VsZENsb3NlT25PdmVybGF5Q2xpY2t9XG4gICAgICAgIHNob3VsZEZvY3VzQWZ0ZXJSZW5kZXI9e3Nob3VsZEZvY3VzQWZ0ZXJSZW5kZXJ9XG4gICAgICAgIHRpdGxlVGV4dD17dGl0bGVUZXh0fVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcm9vdC5yZW5kZXIoPENvbmZpcm1EaWFsb2dDb21wb25lbnQgLz4pO1xufVxuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1pbi13aWR0aDogMTAxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgLmRyb3Bkb3duX19idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIGNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi10ZXh0KSwgMC44KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjEpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAuZHJvcGRvd25fX2Fycm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmRyb3Bkb3duX19tZW51IHtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgY29sb3I6IHJnYmEodmFyKC0tc3BpY2UtcmdiLXRleHQpLCAwLjgpO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1jYXJkKTtcbiAgICBib3JkZXI6IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgLmRyb3Bkb3duX19vcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICY6aG92ZXIsXG4gICAgLmRyb3Bkb3duX19vcHRpb24tLXNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImltcG9ydCB7IHR5cGUgRkMsIG1lbW8sIHVzZUlkLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkcm9wZG93blN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Ryb3Bkb3duLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuL2ljb25zLnRzeFwiO1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChkcm9wZG93blN0eWxlcyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25PcHRpb25EZWYge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBvcHRpb25zOiBEcm9wZG93bk9wdGlvbkRlZltdO1xuICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bjogRkM8RHJvcGRvd25Qcm9wcz4gPSBtZW1vKCh7IHZhbHVlLCBvcHRpb25zLCBvbkNoYW5nZSwgZGlzYWJsZWQgfSkgPT4ge1xuICBjb25zdCBwb3BvdmVySWQgPSB1c2VJZCgpO1xuICBjb25zdCBwb3BvdmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgYW5jaG9yTmFtZSA9IGAtLWRyb3Bkb3duLWFuY2hvci0ke3BvcG92ZXJJZC5yZXBsYWNlKC86L2csIFwiaWRcIil9YDtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAob3B0aW9uOiBEcm9wZG93bk9wdGlvbkRlZikgPT4ge1xuICAgIG9uQ2hhbmdlPy4ob3B0aW9uLnZhbHVlKTtcbiAgICBwb3BvdmVyUmVmLmN1cnJlbnQ/LmhpZGVQb3BvdmVyKCk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0ZWRMYWJlbCA9IG9wdGlvbnMuZmluZCgob3B0KSA9PiBvcHQudmFsdWUgPT09IHZhbHVlKT8ubGFiZWwgfHwgXCJTZWxlY3QuLi5cIjtcblxuICByZXR1cm4gKFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCIgZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd25fX2J1dHRvblwiXG4gICAgICAgIHBvcG92ZXJUYXJnZXQ9e3BvcG92ZXJJZH1cbiAgICAgICAgcG9wb3ZlclRhcmdldEFjdGlvbj1cInRvZ2dsZVwiXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgc3R5bGU9e3sgYW5jaG9yTmFtZTogYW5jaG9yTmFtZSB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duX190ZXh0XCI+e3NlbGVjdGVkTGFiZWx9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25fX2Fycm93XCI+XG4gICAgICAgICAgPEljb25zLlJlYWN0LmRyb3Bkb3duIHNpemU9ezEyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bl9fbWVudVwiXG4gICAgICAgIGlkPXtwb3BvdmVySWR9XG4gICAgICAgIHBvcG92ZXI9XCJhdXRvXCJcbiAgICAgICAgcmVmPXtwb3BvdmVyUmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRvcDogYGNhbGMoYW5jaG9yKCR7YW5jaG9yTmFtZX0gYm90dG9tKSArIDRweClgLFxuICAgICAgICAgIGxlZnQ6IGBhbmNob3IoJHthbmNob3JOYW1lfSBsZWZ0KWAsXG4gICAgICAgICAgd2lkdGg6IGBhbmNob3Itc2l6ZSgke2FuY2hvck5hbWV9IHdpZHRoKWAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd25fX29wdGlvbiR7dmFsdWUgPT09IG9wdGlvbi52YWx1ZSA/IFwiIGRyb3Bkb3duX19vcHRpb24tLXNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBrZXk9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdChvcHRpb24pfVxuICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBoYW5kbGVTZWxlY3Qob3B0aW9uKX1cbiAgICAgICAgICAgIHJvbGU9XCJvcHRpb25cIlxuICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLnNsaWRlciB7XG4gIC0tZmlsbC1jb2xvcjogdmFyKC0tc3BpY2UtYnV0dG9uLWFjdGl2ZSwgIzFlZDc2MCk7XG4gIC0tdHJhY2stY29sb3I6IHZhcigtLXNwaWNlLWJ1dHRvbi1kaXNhYmxlZCwgIzUzNTM1Myk7XG4gIC0tdGh1bWItY29sb3I6IHZhcigtLXNwaWNlLXRleHQsICNmZmZmZmYpO1xuICAtLXRleHQtY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQsICNiM2IzYjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAuc2xpZGVyX190aHVtYiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5zbGlkZXJfX2ZpbGwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLnNsaWRlci10aW1lIHtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAuc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnNsaWRlcl9fdHJhY2sge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYWNrLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgLnNsaWRlcl9fZmlsbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgfVxuXG4gICAgICAuc2xpZGVyX190aHVtYiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImltcG9ydCB7IHR5cGUgRkMsIG1lbW8sIHR5cGUgUG9pbnRlckV2ZW50IGFzIFJlYWN0UG9pbnRlckV2ZW50LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc2xpZGVyU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2xpZGVyLmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNsaWRlclN0eWxlcyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUHJvcHMge1xuICB2YWx1ZTogbnVtYmVyO1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbiAgc3RlcD86IG51bWJlcjtcbiAgZGVmYXVsdFZhbHVlPzogbnVtYmVyO1xuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uUmVsZWFzZT86ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFNsaWRlcjogRkM8U2xpZGVyUHJvcHM+ID0gbWVtbyhcbiAgKHsgdmFsdWUsIG1pbiA9IDAsIG1heCA9IDEwMCwgc3RlcCA9IDEsIGRlZmF1bHRWYWx1ZSwgb25DaGFuZ2UsIG9uUmVsZWFzZSwgZGlzYWJsZWQgfSkgPT4ge1xuICAgIGNvbnN0IHNsaWRlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgaXNEcmFnZ2luZyA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICBjb25zdCBjb250cm9sbGVkVmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPVxuICAgICAgbWF4ID4gbWluICYmIGNvbnRyb2xsZWRWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKChjb250cm9sbGVkVmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwXG4gICAgICAgIDogMDtcblxuICAgIGNvbnN0IGhhbmRsZUludGVyYWN0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgICAoZTogUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghc2xpZGVyUmVmLmN1cnJlbnQgfHwgZGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgICBjb25zdCByZWN0ID0gc2xpZGVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGNsaWVudFggPSBlLmNsaWVudFg7XG5cbiAgICAgICAgY29uc3QgbmV3WCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGNsaWVudFggLSByZWN0LmxlZnQsIHJlY3Qud2lkdGgpKTtcblxuICAgICAgICBsZXQgbmV3VmFsdWUgPSAobmV3WCAvIHJlY3Qud2lkdGgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgICAgIG5ld1ZhbHVlID0gTWF0aC5yb3VuZChuZXdWYWx1ZSAvIHN0ZXApICogc3RlcDtcbiAgICAgICAgbmV3VmFsdWUgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKG5ld1ZhbHVlLCBtYXgpKTtcblxuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICB9LFxuICAgICAgW21pbiwgbWF4LCBzdGVwLCBvbkNoYW5nZSwgZGlzYWJsZWRdLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVQb2ludGVyRG93biA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0UG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChkaXNhYmxlZCB8fCAhc2xpZGVyUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgICAgICBpc0RyYWdnaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5zZXRQb2ludGVyQ2FwdHVyZShlLnBvaW50ZXJJZCk7XG5cbiAgICAgICAgaGFuZGxlSW50ZXJhY3Rpb24oZS5uYXRpdmVFdmVudCBhcyBQb2ludGVyRXZlbnQpO1xuICAgICAgfSxcbiAgICAgIFtoYW5kbGVJbnRlcmFjdGlvbiwgZGlzYWJsZWRdLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVQb2ludGVyTW92ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0UG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZy5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIGhhbmRsZUludGVyYWN0aW9uKGUubmF0aXZlRXZlbnQgYXMgUG9pbnRlckV2ZW50KTtcbiAgICAgIH0sXG4gICAgICBbaGFuZGxlSW50ZXJhY3Rpb25dLFxuICAgICk7XG5cbiAgICBjb25zdCBoYW5kbGVQb2ludGVyUmVsZWFzZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0UG9pbnRlckV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZy5jdXJyZW50IHx8ICFzbGlkZXJSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICAgIGlzRHJhZ2dpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBzbGlkZXJSZWYuY3VycmVudC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoZS5wb2ludGVySWQpO1xuXG4gICAgICAgIG9uUmVsZWFzZT8uKCk7XG4gICAgICB9LFxuICAgICAgW29uUmVsZWFzZV0sXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlclwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItY29udGFpbmVyXCJcbiAgICAgICAgICBvblBvaW50ZXJDYW5jZWw9e2hhbmRsZVBvaW50ZXJSZWxlYXNlfVxuICAgICAgICAgIG9uUG9pbnRlckRvd249e2hhbmRsZVBvaW50ZXJEb3dufVxuICAgICAgICAgIG9uUG9pbnRlck1vdmU9e2hhbmRsZVBvaW50ZXJNb3ZlfVxuICAgICAgICAgIG9uUG9pbnRlclVwPXtoYW5kbGVQb2ludGVyUmVsZWFzZX1cbiAgICAgICAgICByZWY9e3NsaWRlclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX190cmFja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfX2ZpbGxcIiBzdHlsZT17eyB3aWR0aDogYCR7cHJvZ3Jlc3N9JWAgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX190aHVtYlwiIHN0eWxlPXt7IGxlZnQ6IGAke3Byb2dyZXNzfSVgIH19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbik7XG4iLCAiZXhwb3J0IGNvbnN0IHNwb3RpZnlDb21wb25lbnRzID0gKCkgPT4ge1xuICBjb25zdCByZXF1aXJlID0gZ2xvYmFsVGhpcy53ZWJwYWNrQ2h1bmtjbGllbnRfd2ViLnB1c2goW1tTeW1ib2woKV0sIHt9LCAocmUpID0+IHJlXSk7XG4gIGNvbnN0IGRpc2NvdmVyeVJlZ2V4ID0gL1wiZGF0YS1lbmNvcmUtaWRcIjooPzpcXHcrXFwuKSsoW0EtWl1cXHcqKVxcYi87XG4gIGNvbnN0IGRpc2NvdmVyZWQgPSB7fTtcblxuICBmb3IgKGNvbnN0IFttb2R1bGVJZCwgZGVmaW5pdGlvbl0gb2YgT2JqZWN0LmVudHJpZXMocmVxdWlyZS5tKSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5pdGlvbiAhPT0gXCJmdW5jdGlvblwiKSBjb250aW51ZTtcbiAgICBjb25zdCBtb2R1bGVFeHBvcnRzID0gcmVxdWlyZShtb2R1bGVJZCk7XG4gICAgaWYgKCFtb2R1bGVFeHBvcnRzIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSBcIm9iamVjdFwiKSBjb250aW51ZTtcblxuICAgIGZvciAoY29uc3QgZXhwIG9mIE9iamVjdC52YWx1ZXMobW9kdWxlRXhwb3J0cykpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFNvdXJjZSA9IHR5cGVvZiBleHAgPT09IFwiZnVuY3Rpb25cIiA/IGV4cCA6IGV4cD8ucmVuZGVyO1xuICAgICAgaWYgKCFjb21wb25lbnRTb3VyY2UpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBtYXRjaCA9IGNvbXBvbmVudFNvdXJjZS50b1N0cmluZygpLm1hdGNoKGRpc2NvdmVyeVJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaD8uWzFdICYmICFkaXNjb3ZlcmVkW21hdGNoWzFdXSkge1xuICAgICAgICBkaXNjb3ZlcmVkW21hdGNoWzFdXSA9IGV4cDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhcbiAgICBgQ29tcG9uZW50TWVudTogRGlzY292ZXJ5IGZpbmlzaGVkLiBGb3VuZCAke09iamVjdC5rZXlzKGRpc2NvdmVyZWQpLmxlbmd0aH0gY29tcG9uZW50cy5gLFxuICApO1xuICBnbG9iYWxUaGlzLlVJID0gZGlzY292ZXJlZDtcbn07XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgbGlzdGVuZXJDb3VudCA9IDA7XG5sZXQgaW50ZXJ2YWxJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbmNvbnN0IHN0YXJ0UHJvZ3Jlc3NUcmFja2luZyA9ICgpOiB2b2lkID0+IHtcbiAgaWYgKGludGVydmFsSWQpIHJldHVybjtcbiAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9zdGF0ZTtcbiAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMuZW1pdChcInByb2dyZXNzXCIsIGN1cnJlbnRTdGF0ZSk7XG4gIH0sIDEwMCk7XG59O1xuXG5jb25zdCBzdG9wUHJvZ3Jlc3NUcmFja2luZyA9ICgpOiB2b2lkID0+IHtcbiAgaWYgKGludGVydmFsSWQpIHtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgIGludGVydmFsSWQgPSBudWxsO1xuICB9XG59O1xuXG5pbnRlcmZhY2UgUGxheWVyU3RhdGVJdGVtIHtcbiAgdXJpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQbGF5ZXJTdGF0ZSB7XG4gIGl0ZW0/OiBQbGF5ZXJTdGF0ZUl0ZW07XG4gIGlzUGF1c2VkOiBib29sZWFuO1xuICBwb3NpdGlvbkFzT2ZUaW1lc3RhbXA6IG51bWJlcjtcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBVc2VQbGF5ZXJSZXR1cm4ge1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBpc0N1cnJlbnRseVBsYXlpbmdUaGlzVHJhY2s6IGJvb2xlYW47XG4gIHRvZ2dsZVBsYXk6ICgpID0+IHZvaWQ7XG4gIGhhbmRsZVNsaWRlckNoYW5nZTogKG5ld1Bvc2l0aW9uOiBudW1iZXIpID0+IHZvaWQ7XG4gIGhhbmRsZVNsaWRlclJlbGVhc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQbGF5ZXIgPSAodHJhY2tVcmk6IHN0cmluZywgdHJhY2tEdXJhdGlvbjogbnVtYmVyKTogVXNlUGxheWVyUmV0dXJuID0+IHtcbiAgY29uc3QgW3BsYXllclN0YXRlLCBzZXRQbGF5ZXJTdGF0ZV0gPSB1c2VTdGF0ZTxQbGF5ZXJTdGF0ZT4oU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fc3RhdGUpO1xuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyPih0cmFja0R1cmF0aW9uKTtcblxuICBjb25zdCBpc1NsaWRlckRyYWdnaW5nID0gdXNlUmVmPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3Qgc2Vla1Bvc2l0aW9uUmVmID0gdXNlUmVmPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgdXBkYXRlUGxheWVyRGF0YSA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdQbGF5ZXJTdGF0ZTogUGxheWVyU3RhdGUsIGlzUHJvZ3Jlc3NVcGRhdGUgPSBmYWxzZSk6IHZvaWQgPT4ge1xuICAgICAgc2V0UGxheWVyU3RhdGUobmV3UGxheWVyU3RhdGUpO1xuXG4gICAgICBjb25zdCBpc1BsYXlpbmdUaGlzVHJhY2sgPSBuZXdQbGF5ZXJTdGF0ZS5pdGVtPy51cmkgPT09IHRyYWNrVXJpO1xuXG4gICAgICBpZiAoaXNQbGF5aW5nVGhpc1RyYWNrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaXNQcm9ncmVzc1VwZGF0ZSAmJlxuICAgICAgICAgIHNlZWtQb3NpdGlvblJlZi5jdXJyZW50ICE9PSAwICYmXG4gICAgICAgICAgbmV3UGxheWVyU3RhdGUucG9zaXRpb25Bc09mVGltZXN0YW1wIDwgNTAwXG4gICAgICAgICkge1xuICAgICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuc2Vla1RvKHNlZWtQb3NpdGlvblJlZi5jdXJyZW50KTtcbiAgICAgICAgICBzZWVrUG9zaXRpb25SZWYuY3VycmVudCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzU2xpZGVyRHJhZ2dpbmcuY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQb3NpdGlvbiA9XG4gICAgICAgICAgICBpc1Byb2dyZXNzVXBkYXRlICYmICFuZXdQbGF5ZXJTdGF0ZS5pc1BhdXNlZFxuICAgICAgICAgICAgICA/IG5ld1BsYXllclN0YXRlLnBvc2l0aW9uQXNPZlRpbWVzdGFtcCArIChEYXRlLm5vdygpIC0gbmV3UGxheWVyU3RhdGUudGltZXN0YW1wKVxuICAgICAgICAgICAgICA6IG5ld1BsYXllclN0YXRlLnBvc2l0aW9uQXNPZlRpbWVzdGFtcDtcblxuICAgICAgICAgIHNldFBvc2l0aW9uKE1hdGgubWluKGNhbGN1bGF0ZWRQb3NpdGlvbiwgbmV3UGxheWVyU3RhdGUuZHVyYXRpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldER1cmF0aW9uKG5ld1BsYXllclN0YXRlLmR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBvc2l0aW9uKDApO1xuICAgICAgICBzZXREdXJhdGlvbih0cmFja0R1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt0cmFja1VyaSwgdHJhY2tEdXJhdGlvbl0sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgc3RhcnRQcm9ncmVzc1RyYWNraW5nKCk7XG4gICAgfVxuICAgIGxpc3RlbmVyQ291bnQrKztcblxuICAgIGNvbnN0IGluaXRpYWxQbGF5ZXJTdGF0ZSA9IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX3N0YXRlO1xuICAgIHVwZGF0ZVBsYXllckRhdGEoaW5pdGlhbFBsYXllclN0YXRlKTtcblxuICAgIGNvbnN0IHVwZGF0ZUxpc3RlbmVyID0gKGV2ZW50OiB7IGRhdGE6IFBsYXllclN0YXRlIH0pOiB2b2lkID0+IHVwZGF0ZVBsYXllckRhdGEoZXZlbnQuZGF0YSk7XG4gICAgY29uc3QgcHJvZ3Jlc3NMaXN0ZW5lciA9IChldmVudDogeyBkYXRhOiBQbGF5ZXJTdGF0ZSB9KTogdm9pZCA9PlxuICAgICAgdXBkYXRlUGxheWVyRGF0YShldmVudC5kYXRhLCB0cnVlKTtcblxuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5hZGRMaXN0ZW5lcihcInVwZGF0ZVwiLCB1cGRhdGVMaXN0ZW5lciwge30pO1xuICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkuX2V2ZW50cy5hZGRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHByb2dyZXNzTGlzdGVuZXIsIHt9KTtcblxuICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICBsaXN0ZW5lckNvdW50LS07XG4gICAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgICBzdG9wUHJvZ3Jlc3NUcmFja2luZygpO1xuICAgICAgfVxuICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXllckFQSS5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKFwidXBkYXRlXCIsIHVwZGF0ZUxpc3RlbmVyLCB7fSk7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBwcm9ncmVzc0xpc3RlbmVyLCB7fSk7XG4gICAgfTtcbiAgfSwgW3VwZGF0ZVBsYXllckRhdGFdKTtcblxuICBjb25zdCB0b2dnbGVQbGF5ID0gdXNlQ2FsbGJhY2soKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQbGF5aW5nVHJhY2sgPSBwbGF5ZXJTdGF0ZS5pdGVtPy51cmk7XG4gICAgaWYgKGN1cnJlbnRQbGF5aW5nVHJhY2sgPT09IHRyYWNrVXJpKSB7XG4gICAgICBwbGF5ZXJTdGF0ZS5pc1BhdXNlZFxuICAgICAgICA/IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucmVzdW1lKHt9KVxuICAgICAgICA6IFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGF1c2Uoe30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnBsYXkoXG4gICAgICAgIHtcbiAgICAgICAgICB1cmk6IHRyYWNrVXJpLFxuICAgICAgICB9LFxuICAgICAgICB7fSxcbiAgICAgICk7XG4gICAgfVxuICB9LCBbcGxheWVyU3RhdGUsIHRyYWNrVXJpXSk7XG5cbiAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld1Bvc2l0aW9uOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBpc1NsaWRlckRyYWdnaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgIHNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgICBzZWVrUG9zaXRpb25SZWYuY3VycmVudCA9IG5ld1Bvc2l0aW9uO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2xpZGVyUmVsZWFzZSA9IHVzZUNhbGxiYWNrKCgpOiB2b2lkID0+IHtcbiAgICBpZiAoaXNTbGlkZXJEcmFnZ2luZy5jdXJyZW50KSB7XG4gICAgICBjb25zdCBpc1NhbWVUcmFja0luUGxheWVyID0gcGxheWVyU3RhdGUuaXRlbT8udXJpID09PSB0cmFja1VyaTtcblxuICAgICAgaWYgKCFpc1NhbWVUcmFja0luUGxheWVyKSB7XG4gICAgICAgIFNwaWNldGlmeS5QbGF0Zm9ybS5QbGF5ZXJBUEkucGxheShcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmk6IHRyYWNrVXJpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge30sXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUGxheWVyQVBJLnNlZWtUbyhwb3NpdGlvbik7XG4gICAgICB9XG4gICAgICBpc1NsaWRlckRyYWdnaW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG4gIH0sIFtwb3NpdGlvbiwgdHJhY2tVcmksIHBsYXllclN0YXRlXSk7XG5cbiAgY29uc3QgaXNDdXJyZW50bHlQbGF5aW5nVGhpc1RyYWNrID0gdXNlTWVtbyhcbiAgICAoKTogYm9vbGVhbiA9PiAhcGxheWVyU3RhdGUuaXNQYXVzZWQgJiYgcGxheWVyU3RhdGUuaXRlbT8udXJpID09PSB0cmFja1VyaSxcbiAgICBbcGxheWVyU3RhdGUsIHRyYWNrVXJpXSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uLFxuICAgIGR1cmF0aW9uLFxuICAgIGlzQ3VycmVudGx5UGxheWluZ1RoaXNUcmFjayxcbiAgICB0b2dnbGVQbGF5LFxuICAgIGhhbmRsZVNsaWRlckNoYW5nZSxcbiAgICBoYW5kbGVTbGlkZXJSZWxlYXNlLFxuICB9O1xufTtcbiIsICJcbiAgICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoYC5pbnB1dCB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogcmdiYSh2YXIoLS1zcGljZS1yZ2ItdGV4dCksIDAuOCk7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNlbGVjdGVkLXJvdyksIDAuMSk7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImltcG9ydCB7IHR5cGUgQ2hhbmdlRXZlbnQsIHR5cGUgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbnB1dFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2lucHV0LmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5cbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKGlucHV0U3R5bGVzKTtcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgSW5wdXQ6IEZDPElucHV0UHJvcHM+ID0gbWVtbygoeyB2YWx1ZSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZCA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgLz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsICJcbiAgICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoYC5vcHRpb25fX3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAub3B0aW9uX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAub3B0aW9uX19kZXNjIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6IHZhcigtLXNwaWNlLXN1YnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5vcHRpb25fX2NvbnRyb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuYCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJcbiAgICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoYC50b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcblxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIC50b2dnbGVfX2JhY2tncm91bmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2VsZWN0ZWQtcm93KSwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gICAgJjpoYXMoLnRvZ2dsZV9fc2xpZGVyLS1lbmFibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zcGljZS1idXR0b24pO1xuICAgIH1cblxuICAgIC50b2dnbGVfX3NsaWRlci0tZW5hYmxlZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gIH1cblxuICAudG9nZ2xlX19zbGlkZXIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNwaWNlLXRleHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKHZhcigtLXNwaWNlLXJnYi1zaGFkb3cpLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IDAuMXMgY3ViaWMtYmV6aWVyKDAuNDUsIDAuMDUsIDAuNTUsIDAuOTUpO1xuICB9XG59XG5gKTtcbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCBzaGVldDtcbiAgICAgICAgIiwgImltcG9ydCB7IHR5cGUgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0b2dnbGVTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90b2dnbGUuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2godG9nZ2xlU3R5bGVzKTtcblxuZXhwb3J0IGludGVyZmFjZSBUb2dnbGVQcm9wcyB7XG4gIHZhbHVlOiBib29sZWFuO1xuICBvbkNoYW5nZTogKG5ld1ZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBUb2dnbGU6IEZDPFRvZ2dsZVByb3BzPiA9IG1lbW8oKHsgdmFsdWUsIG9uQ2hhbmdlLCBkaXNhYmxlZCB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIG9uQ2hhbmdlKCF2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0b2dnbGVcIiBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSByb2xlPVwic3dpdGNoXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGVfX2JhY2tncm91bmRcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e2B0b2dnbGVfX3NsaWRlciR7dmFsdWUgPyBcIiB0b2dnbGVfX3NsaWRlci0tZW5hYmxlZFwiIDogXCJcIn0ke2Rpc2FibGVkID8gXCIgdG9nZ2xlX19zbGlkZXItLWRpc2FibGVkXCIgOiBcIlwifWB9XG4gICAgICAgIC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG59KTtcbiIsICJpbXBvcnQgeyB0eXBlIENvbXBvbmVudFR5cGUsIHR5cGUgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcIi4vZHJvcGRvd24udHN4XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2lucHV0LnRzeFwiO1xuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIi4vc2xpZGVyLnRzeFwiO1xuaW1wb3J0IHsgVG9nZ2xlIH0gZnJvbSBcIi4vdG9nZ2xlLnRzeFwiO1xuXG5pbnRlcmZhY2UgQmFzZU9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzYzogc3RyaW5nO1xuICB0aXBweT86IHN0cmluZztcbiAgcnVuPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XG4gIHBvcHVwTW9kYWw/OiBDb21wb25lbnRUeXBlPGFueT47XG4gIGluY29tcGF0aWJsZT86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvZ2dsZU9wdGlvbiBleHRlbmRzIEJhc2VPcHRpb24ge1xuICB0eXBlOiBcInRvZ2dsZVwiO1xuICBkZWZhdWx0VmFsOiBib29sZWFuO1xuICByZXZlYWw/OiBPcHRpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dE9wdGlvbiBleHRlbmRzIEJhc2VPcHRpb24ge1xuICB0eXBlOiBcImlucHV0XCI7XG4gIGRlZmF1bHRWYWw6IHN0cmluZyB8IG51bWJlcjtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25PcHRpb25EZWYge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duT3B0aW9uIGV4dGVuZHMgQmFzZU9wdGlvbiB7XG4gIHR5cGU6IFwiZHJvcGRvd25cIjtcbiAgb3B0aW9uczogRHJvcGRvd25PcHRpb25EZWZbXTtcbiAgZGVmYXVsdFZhbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhZGlvQnV0dG9uT3B0aW9uRGVmIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSYWRpb0J1dHRvbk9wdGlvbiBleHRlbmRzIEJhc2VPcHRpb24ge1xuICB0eXBlOiBcInJhZGlvYnV0dG9uXCI7XG4gIG9wdGlvbnM6IFJhZGlvQnV0dG9uT3B0aW9uRGVmW107XG4gIGRlZmF1bHRWYWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJPcHRpb24gZXh0ZW5kcyBCYXNlT3B0aW9uIHtcbiAgdHlwZTogXCJzbGlkZXJcIjtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIGRlZmF1bHRWYWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgT3B0aW9uID0gVG9nZ2xlT3B0aW9uIHwgSW5wdXRPcHRpb24gfCBEcm9wZG93bk9wdGlvbiB8IFJhZGlvQnV0dG9uT3B0aW9uIHwgU2xpZGVyT3B0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvblR5cGVQcm9wcyB7XG4gIG9wdGlvbjogT3B0aW9uO1xuICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcjtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcikgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3B0aW9uVHlwZTogRkM8T3B0aW9uVHlwZVByb3BzPiA9IG1lbW8oKHsgb3B0aW9uLCB2YWx1ZSwgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IHtcbiAgc3dpdGNoIChvcHRpb24udHlwZSkge1xuICAgIGNhc2UgXCJ0b2dnbGVcIjpcbiAgICAgIHJldHVybiA8VG9nZ2xlIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWUgYXMgYm9vbGVhbn0gLz47XG4gICAgY2FzZSBcImlucHV0XCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtvcHRpb24ucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlIGFzIHN0cmluZ31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgY2FzZSBcImRyb3Bkb3duXCI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbi5vcHRpb25zIHx8IFtdfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZSBhcyBzdHJpbmd9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGNhc2UgXCJzbGlkZXJcIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTbGlkZXJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgbWF4PXtvcHRpb24ubWF4fVxuICAgICAgICAgIG1pbj17b3B0aW9uLm1pbn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgc3RlcD17b3B0aW9uLnN0ZXB9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlIGFzIG51bWJlcn1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBvcHRpb24gdHlwZSBmb3Igb3B0aW9uIFwiJHsob3B0aW9uIGFzIE9wdGlvbikubmFtZSB8fCBcIk4vQVwifVwiYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufSk7XG4iLCAiaW1wb3J0IHsgdHlwZSBDb21wb25lbnRUeXBlLCB0eXBlIEZDLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuL2ljb25zLnRzeFwiO1xuaW1wb3J0IHsgUG9wdXBNb2RhbCB9IGZyb20gXCIuL3BvcHVwTW9kYWwudHN4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9wdXBCdXR0b25Qcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9wdXBNb2RhbDogQ29tcG9uZW50VHlwZTtcbn1cblxuZXhwb3J0IGNvbnN0IFBvcHVwQnV0dG9uOiBGQzxQb3B1cEJ1dHRvblByb3BzPiA9IG1lbW8oKHsgbmFtZSwgcG9wdXBNb2RhbDogUG9wdXBNb2RhbENvbnRlbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInBvcHVwLWJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBQb3B1cE1vZGFsKHtcbiAgICAgICAgICB0aXRsZTogbmFtZSxcbiAgICAgICAgICBjb250ZW50OiA8UG9wdXBNb2RhbENvbnRlbnQgLz4sXG4gICAgICAgICAgaXNMYXJnZTogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPlxuICAgICAgPEljb25zLlJlYWN0LmVkaXRCdXR0b24gc2l6ZT17MTZ9IC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59KTtcbiIsICJpbXBvcnQgeyB0eXBlIEZDLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IFRpcHB5QnV0dG9uUHJvcHMgfSBmcm9tIFwiLi4vdHlwZXMvdGVtcC5kLnRzXCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuL2ljb25zLnRzeFwiO1xuXG5leHBvcnQgY29uc3QgVGlwcHlCdXR0b246IEZDPFRpcHB5QnV0dG9uUHJvcHM+ID0gbWVtbygoeyB0aXBweSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlciBsYWJlbD17dGlwcHl9IHBsYWNlbWVudD1cInRvcFwiIHNob3dEZWxheT17MH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tdGlwcHlcIj5cbiAgICAgICAgPEljb25zLlJlYWN0LnF1ZXN0aW9uTWFyayBmaWxsPVwidmFyKC0tc3BpY2Utc3VidGV4dClcIiBzaXplPXsyMH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyPlxuICApO1xufSk7XG4iLCAiaW1wb3J0IHsgdHlwZSBDb21wb25lbnRUeXBlLCB0eXBlIEZDLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgb3B0aW9uUm93U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvb3B0aW9uUm93LmNzc1wiIHdpdGggeyB0eXBlOiBcImNzc1wiIH07XG5pbXBvcnQgeyBPcHRpb25UeXBlIH0gZnJvbSBcIi4vb3B0aW9uVHlwZS50c3hcIjtcbmltcG9ydCB7IFBvcHVwQnV0dG9uIH0gZnJvbSBcIi4vcG9wdXBCdXR0b24udHN4XCI7XG5pbXBvcnQgeyBUaXBweUJ1dHRvbiB9IGZyb20gXCIuL3RpcHB5QnV0dG9uLnRzeFwiO1xuXG5kb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChvcHRpb25Sb3dTdHlsZXMpO1xuXG5pbnRlcmZhY2UgQmFzZU9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzYzogc3RyaW5nO1xuICB0aXBweT86IHN0cmluZztcbiAgcnVuPzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XG4gIHBvcHVwTW9kYWw/OiBDb21wb25lbnRUeXBlPGFueT47XG4gIGluY29tcGF0aWJsZT86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvZ2dsZU9wdGlvbiBleHRlbmRzIEJhc2VPcHRpb24ge1xuICB0eXBlOiBcInRvZ2dsZVwiO1xuICBkZWZhdWx0VmFsOiBib29sZWFuO1xuICByZXZlYWw/OiBPcHRpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dE9wdGlvbiBleHRlbmRzIEJhc2VPcHRpb24ge1xuICB0eXBlOiBcImlucHV0XCI7XG4gIGRlZmF1bHRWYWw6IHN0cmluZyB8IG51bWJlcjtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25PcHRpb25EZWYge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duT3B0aW9uIGV4dGVuZHMgQmFzZU9wdGlvbiB7XG4gIHR5cGU6IFwiZHJvcGRvd25cIjtcbiAgb3B0aW9uczogRHJvcGRvd25PcHRpb25EZWZbXTtcbiAgZGVmYXVsdFZhbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhZGlvQnV0dG9uT3B0aW9uRGVmIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSYWRpb0J1dHRvbk9wdGlvbiBleHRlbmRzIEJhc2VPcHRpb24ge1xuICB0eXBlOiBcInJhZGlvYnV0dG9uXCI7XG4gIG9wdGlvbnM6IFJhZGlvQnV0dG9uT3B0aW9uRGVmW107XG4gIGRlZmF1bHRWYWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJPcHRpb24gZXh0ZW5kcyBCYXNlT3B0aW9uIHtcbiAgdHlwZTogXCJzbGlkZXJcIjtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIGRlZmF1bHRWYWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgT3B0aW9uID0gVG9nZ2xlT3B0aW9uIHwgSW5wdXRPcHRpb24gfCBEcm9wZG93bk9wdGlvbiB8IFJhZGlvQnV0dG9uT3B0aW9uIHwgU2xpZGVyT3B0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvblJvd1Byb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjOiBzdHJpbmc7XG4gIHRpcHB5Pzogc3RyaW5nO1xuICBwb3B1cE1vZGFsPzogQ29tcG9uZW50VHlwZTtcbiAgb3B0aW9uPzogT3B0aW9uO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbiAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE9wdGlvblJvdzogRkM8T3B0aW9uUm93UHJvcHM+ID0gbWVtbyhcbiAgKHsgbmFtZSwgZGVzYywgdGlwcHksIHBvcHVwTW9kYWwsIG9wdGlvbiwgdmFsdWUsIG9uQ2hhbmdlLCBkaXNhYmxlZCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25fX3Jvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25fX2NvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25fX2Rlc2NcIj57ZGVzY308L2Rpdj5cbiAgICAgICAge3RpcHB5ICYmIDxUaXBweUJ1dHRvbiB0aXBweT17dGlwcHl9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbl9fY29udHJvbFwiPlxuICAgICAgICB7cG9wdXBNb2RhbCAmJiA8UG9wdXBCdXR0b24gbmFtZT17bmFtZX0gcG9wdXBNb2RhbD17cG9wdXBNb2RhbH0gLz59XG4gICAgICAgIHtvcHRpb24gJiYgKFxuICAgICAgICAgIDxPcHRpb25UeXBlXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2UgfHwgKCgpID0+IHt9KX1cbiAgICAgICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKSxcbik7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtRGlhbG9nLnRzeFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQudHN4XCI7XG5pbXBvcnQgeyB0eXBlIE9wdGlvbiwgT3B0aW9uUm93IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL29wdGlvblJvdy50c3hcIjtcblxuY29uc3QgREVGQVVMVF9OT1JNQUxJWkVfV09SRFMgPSBbXG4gIFwibGl2ZVwiLFxuICBcInJlbWl4XCIsXG4gIFwibWl4XCIsXG4gIFwiYWNvdXN0aWNcIixcbiAgXCJpbnN0cnVtZW50YWxcIixcbiAgXCJyYWRpb1wiLFxuICBcInZlcnNpb25cIixcbiAgXCJ2ZXJcIixcbiAgXCJlZGl0XCIsXG4gIFwibW9ub1wiLFxuICBcInN0ZXJlb1wiLFxuICBcImRlbHV4ZVwiLFxuICBcImludHJvXCIsXG4gIFwib3V0cm9cIixcbiAgXCJyZW1hc3RlcmVkXCIsXG4gIFwiYm9udXNcIixcbiAgXCJmZWF0XCIsXG4gIFwiZnRcIixcbiAgXCJleHBsaWNpdFwiLFxuICBcImNsZWFuXCIsXG4gIFwicGlhbm9cIixcbiAgXCJndWl0YXJcIixcbiAgXCJjb3ZlclwiLFxuICBcIm9yaWdpbmFsXCIsXG4gIFwiZXh0ZW5kZWRcIixcbiAgXCJhbGJ1bVwiLFxuICBcInNpbmdsZVwiLFxuXTtcblxuZXhwb3J0IHR5cGUgVG9nZ2xlU2V0dGluZ3MgPSB7XG4gIGV4YWN0OiBib29sZWFuO1xuICBpc3JjOiBib29sZWFuO1xuICBwcm9iYWJsZTogYm9vbGVhbjtcbiAgbGlrZWx5OiBib29sZWFuO1xuICBwb3NzaWJsZTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3Mge1xuICBncm91cFNldHRpbmdzOiBUb2dnbGVTZXR0aW5ncztcbiAgY29uZmlybVNldHRpbmdzOiBUb2dnbGVTZXR0aW5ncztcbiAgZGVmYXVsdE5vcm1hbGl6ZVdvcmRzOiBzdHJpbmdbXTtcbiAgY3VzdG9tTm9ybWFsaXplV29yZHM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgU0VUVElOR1NfU1RPUkFHRV9LRVkgPSBcImZpbmREdXBlVHJhY2tzXCI7XG5leHBvcnQgY29uc3QgU0VUVElOR1NfQ0hBTkdFRF9FVkVOVCA9IFwiZmluZER1cGVUcmFja3M6c2V0dGluZ3NDaGFuZ2VkXCI7XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFNldHRpbmdzID0ge1xuICBncm91cFNldHRpbmdzOiB7XG4gICAgZXhhY3Q6IHRydWUsXG4gICAgaXNyYzogdHJ1ZSxcbiAgICBwcm9iYWJsZTogdHJ1ZSxcbiAgICBsaWtlbHk6IHRydWUsXG4gICAgcG9zc2libGU6IHRydWUsXG4gIH0sXG4gIGNvbmZpcm1TZXR0aW5nczoge1xuICAgIGV4YWN0OiBmYWxzZSxcbiAgICBpc3JjOiBmYWxzZSxcbiAgICBwcm9iYWJsZTogdHJ1ZSxcbiAgICBsaWtlbHk6IHRydWUsXG4gICAgcG9zc2libGU6IHRydWUsXG4gIH0sXG4gIGRlZmF1bHROb3JtYWxpemVXb3JkczogWy4uLkRFRkFVTFRfTk9STUFMSVpFX1dPUkRTXSxcbiAgY3VzdG9tTm9ybWFsaXplV29yZHM6IFtdLFxufTtcblxuY29uc3QgbG9hZFNldHRpbmdzID0gKCk6IFNldHRpbmdzID0+IHtcbiAgY29uc3Qgc2F2ZWRTZXR0aW5ncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNFVFRJTkdTX1NUT1JBR0VfS0VZKTtcbiAgaWYgKHNhdmVkU2V0dGluZ3MpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHNhdmVkU2V0dGluZ3MpO1xuICAgIGlmICghcGFyc2VkLmRlZmF1bHROb3JtYWxpemVXb3Jkcykge1xuICAgICAgcGFyc2VkLmRlZmF1bHROb3JtYWxpemVXb3JkcyA9IFsuLi5ERUZBVUxUX05PUk1BTElaRV9XT1JEU107XG4gICAgfVxuICAgIGNvbnN0IHNldHRpbmdzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTLCAuLi5wYXJzZWQgfTtcbiAgICBzZXR0aW5ncy5ncm91cFNldHRpbmdzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTLmdyb3VwU2V0dGluZ3MsIC4uLihwYXJzZWQuZ3JvdXBTZXR0aW5ncyB8fCB7fSkgfTtcbiAgICBzZXR0aW5ncy5jb25maXJtU2V0dGluZ3MgPSB7XG4gICAgICAuLi5ERUZBVUxUX1NFVFRJTkdTLmNvbmZpcm1TZXR0aW5ncyxcbiAgICAgIC4uLihwYXJzZWQuY29uZmlybVNldHRpbmdzIHx8IHt9KSxcbiAgICB9O1xuICAgIHJldHVybiBzZXR0aW5ncztcbiAgfVxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShERUZBVUxUX1NFVFRJTkdTKSk7XG59O1xuXG5jb25zdCBzYXZlU2V0dGluZ3MgPSAoc2V0dGluZ3M6IFNldHRpbmdzKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNFVFRJTkdTX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoU0VUVElOR1NfQ0hBTkdFRF9FVkVOVCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNldHRpbmdzID0gKCk6IFNldHRpbmdzID0+IHtcbiAgcmV0dXJuIGxvYWRTZXR0aW5ncygpO1xufTtcblxuY29uc3QgU2V0dGluZ3NNZW51ID0gKCkgPT4ge1xuICBjb25zdCBbc2V0dGluZ3MsIHNldFNldHRpbmdzXSA9IHVzZVN0YXRlPFNldHRpbmdzPihsb2FkU2V0dGluZ3MoKSk7XG4gIGNvbnN0IFtuZXdXb3JkLCBzZXROZXdXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2F2ZVNldHRpbmdzKHNldHRpbmdzKTtcbiAgfSwgW3NldHRpbmdzXSk7XG5cbiAgY29uc3QgcmVuZGVyVG9nZ2xlcyA9IChcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHNldHRpbmdzS2V5OiBcImdyb3VwU2V0dGluZ3NcIiB8IFwiY29uZmlybVNldHRpbmdzXCIsXG4gICAgbGFiZWxzOiBSZWNvcmQ8a2V5b2YgVG9nZ2xlU2V0dGluZ3MsIHN0cmluZz4sXG4gICkgPT4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1zZXR0aW5nc19fc2VjdGlvblwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1zZXR0aW5nc19fc2VjdGlvbi10aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtc2V0dGluZ3NfX29wdGlvbnNcIj5cbiAgICAgICAge09iamVjdC5lbnRyaWVzKGxhYmVscykubWFwKChba2V5LCBkZXNjXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbjogT3B0aW9uID0ge1xuICAgICAgICAgICAgdHlwZTogXCJ0b2dnbGVcIixcbiAgICAgICAgICAgIG5hbWU6IGAke2tleX0tJHtzZXR0aW5nc0tleX1gLFxuICAgICAgICAgICAgZGVzYyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWw6IERFRkFVTFRfU0VUVElOR1Nbc2V0dGluZ3NLZXldW2tleSBhcyBrZXlvZiBUb2dnbGVTZXR0aW5nc10sXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE9wdGlvblJvd1xuICAgICAgICAgICAgICBkZXNjPXtkZXNjfVxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgbmFtZT17YCR7a2V5fS0ke3NldHRpbmdzS2V5fWB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3VmFsdWUpID0+XG4gICAgICAgICAgICAgICAgc2V0U2V0dGluZ3MoKHByZXY6IFNldHRpbmdzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgIFtzZXR0aW5nc0tleV06IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucHJldltzZXR0aW5nc0tleV0sXG4gICAgICAgICAgICAgICAgICAgIFtrZXldOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5nc1tzZXR0aW5nc0tleV1ba2V5IGFzIGtleW9mIFRvZ2dsZVNldHRpbmdzXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG5cbiAgY29uc3QgYWRkQ3VzdG9tV29yZCA9ICgpID0+IHtcbiAgICBjb25zdCB3b3JkID0gbmV3V29yZC50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoIXdvcmQpIHJldHVybjtcbiAgICBpZiAoXG4gICAgICAoc2V0dGluZ3MuY3VzdG9tTm9ybWFsaXplV29yZHMgfHwgW10pLmluY2x1ZGVzKHdvcmQpIHx8XG4gICAgICAoc2V0dGluZ3MuZGVmYXVsdE5vcm1hbGl6ZVdvcmRzIHx8IFtdKS5pbmNsdWRlcyh3b3JkKVxuICAgIClcbiAgICAgIHJldHVybjtcbiAgICBzZXRTZXR0aW5ncygocHJldjogU2V0dGluZ3MpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgY3VzdG9tTm9ybWFsaXplV29yZHM6IFsuLi4ocHJldi5jdXN0b21Ob3JtYWxpemVXb3JkcyB8fCBbXSksIHdvcmRdLFxuICAgIH0pKTtcbiAgICBzZXROZXdXb3JkKFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVdvcmQgPSAod29yZDogc3RyaW5nLCBpc0RlZmF1bHQ6IGJvb2xlYW4pID0+IHtcbiAgICBzZXRTZXR0aW5ncygocHJldjogU2V0dGluZ3MpID0+XG4gICAgICBpc0RlZmF1bHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgZGVmYXVsdE5vcm1hbGl6ZVdvcmRzOiAocHJldi5kZWZhdWx0Tm9ybWFsaXplV29yZHMgfHwgW10pLmZpbHRlcihcbiAgICAgICAgICAgICAgKHc6IHN0cmluZykgPT4gdyAhPT0gd29yZCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBjdXN0b21Ob3JtYWxpemVXb3JkczogKHByZXYuY3VzdG9tTm9ybWFsaXplV29yZHMgfHwgW10pLmZpbHRlcihcbiAgICAgICAgICAgICAgKHc6IHN0cmluZykgPT4gdyAhPT0gd29yZCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0U2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgQ29uZmlybURpYWxvZyh7XG4gICAgICB0aXRsZVRleHQ6IFwiQXJlIHlvdSBzdXJlP1wiLFxuICAgICAgZGVzY3JpcHRpb25UZXh0OiBcIlRoaXMgd2lsbCByZXNldCBhbGwgc2V0dGluZ3MgdG8gZGVmYXVsdCFcIixcbiAgICAgIGNvbmZpcm1UZXh0OiBcIlJlc2V0XCIsXG4gICAgICBvbkNvbmZpcm06ICgpID0+IHNldFNldHRpbmdzKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoREVGQVVMVF9TRVRUSU5HUykpKSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhbGxXb3JkcyA9IFtcbiAgICAuLi4oc2V0dGluZ3MuZGVmYXVsdE5vcm1hbGl6ZVdvcmRzIHx8IFtdKS5tYXAoKHdvcmQ6IHN0cmluZykgPT4gKHsgd29yZCwgaXNEZWZhdWx0OiB0cnVlIH0pKSxcbiAgICAuLi4oc2V0dGluZ3MuY3VzdG9tTm9ybWFsaXplV29yZHMgfHwgW10pLm1hcCgod29yZDogc3RyaW5nKSA9PiAoeyB3b3JkLCBpc0RlZmF1bHQ6IGZhbHNlIH0pKSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzXCI+XG4gICAgICB7cmVuZGVyVG9nZ2xlcyhcIkR1cGxpY2F0ZSBHcm91cHMgdG8gRGlzcGxheVwiLCBcImdyb3VwU2V0dGluZ3NcIiwge1xuICAgICAgICBleGFjdDogXCJFeGFjdCBEdXBsaWNhdGVzIChTYW1lIFVSSSlcIixcbiAgICAgICAgaXNyYzogXCJJU1JDIER1cGxpY2F0ZXMgKFNhbWUgUmVjb3JkaW5nKVwiLFxuICAgICAgICBwcm9iYWJsZTogXCJQcm9iYWJsZSBEdXBsaWNhdGVzIChTYW1lIE5hbWUgKyBBcnRpc3QpXCIsXG4gICAgICAgIGxpa2VseTogXCJMaWtlbHkgRHVwbGljYXRlcyAoU2FtZSBOYW1lKVwiLFxuICAgICAgICBwb3NzaWJsZTogXCJQb3NzaWJsZSBEdXBsaWNhdGVzIChTaW1pbGFyIE5hbWUpXCIsXG4gICAgICB9KX1cblxuICAgICAge3JlbmRlclRvZ2dsZXMoXCJDb25maXJtIEJlZm9yZSBEZWxldGluZ1wiLCBcImNvbmZpcm1TZXR0aW5nc1wiLCB7XG4gICAgICAgIGV4YWN0OiBcIkV4YWN0IER1cGxpY2F0ZXNcIixcbiAgICAgICAgaXNyYzogXCJJU1JDIER1cGxpY2F0ZXNcIixcbiAgICAgICAgcHJvYmFibGU6IFwiUHJvYmFibGUgRHVwbGljYXRlc1wiLFxuICAgICAgICBsaWtlbHk6IFwiTGlrZWx5IER1cGxpY2F0ZXNcIixcbiAgICAgICAgcG9zc2libGU6IFwiUG9zc2libGUgRHVwbGljYXRlc1wiLFxuICAgICAgfSl9XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1zZXR0aW5nc19fc2VjdGlvblwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzX19zZWN0aW9uLXRpdGxlXCI+Tm9ybWFsaXphdGlvbiBXb3JkczwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1zZXR0aW5nc19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBBZGQgb3IgcmVtb3ZlIHdvcmRzIHRvIGJlIGlnbm9yZWQgd2hlbiBjb21wYXJpbmcgdHJhY2sgbmFtZXMgZm9yIHNpbWlsYXJpdHkuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25fX3Jvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uX19jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbl9fZGVzY1wiPkFkZCBhIHdvcmQgdG8gbm9ybWFsaXphdGlvbiBsaXN0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25fX2NvbnRyb2xcIj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4gc2V0TmV3V29yZCh2YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgd29yZCB0byBub3JtYWxpemVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmV3V29yZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZEN1c3RvbVdvcmR9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IGUua2V5ID09PSBcIkVudGVyXCIgJiYgYWRkQ3VzdG9tV29yZCgpfVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA4IH19XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtc2V0dGluZ3NfX3dvcmRzLWxpc3RcIj5cbiAgICAgICAgICB7YWxsV29yZHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzX193b3Jkcy11bFwiPlxuICAgICAgICAgICAgICB7YWxsV29yZHMubWFwKCh7IHdvcmQsIGlzRGVmYXVsdCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtc2V0dGluZ3NfX3dvcmQtaXRlbVwiIGtleT17d29yZH0+XG4gICAgICAgICAgICAgICAgICB7d29yZH1cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHVwbGljYXRlLXNldHRpbmdzX193b3JkLXJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVdvcmQod29yZCwgaXNEZWZhdWx0KX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1zZXR0aW5nc19fbm8td29yZHNcIj5ObyBub3JtYWxpemF0aW9uIHdvcmRzPC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtc2V0dGluZ3NfX2FjdGlvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtc2V0dGluZ3NfX3Jlc2V0XCIgb25DbGljaz17cmVzZXRTZXR0aW5nc30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIFJlc2V0IHRvIERlZmF1bHRzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc01lbnU7XG4iLCAiaW1wb3J0IERleGllLCB7IHR5cGUgVGFibGUgfSBmcm9tIFwiZGV4aWVcIjtcbmltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmZXRjaEFsbExpYnJhcnlDb250ZW50cyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvYXBpL2ZldGNoQWxsTGlicmFyeUNvbnRlbnRzLnRzXCI7XG5pbXBvcnQgeyBmZXRjaEFsbFBsYXlsaXN0VHJhY2tzIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9hcGkvZmV0Y2hBbGxQbGF5bGlzdFRyYWNrcy50c1wiO1xuaW1wb3J0IHsgZmV0Y2hHcmFwaFFMRm9yQWxidW1UcmFja3MgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2FwaS9mZXRjaEdyYXBoUUxGb3JBbGJ1bVRyYWNrcy50c1wiO1xuaW1wb3J0IHsgZmV0Y2hXZWJBUElGb3JUcmFja3MgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2FwaS9mZXRjaFdlYkFQSUZvclRyYWNrcy50c1wiO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtRGlhbG9nLnRzeFwiO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvZHJvcGRvd24udHN4XCI7XG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucy50c3hcIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zbGlkZXIudHN4XCI7XG5pbXBvcnQgeyBzcG90aWZ5Q29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcG90aWZ5Q29tcG9uZW50cy50c3hcIjtcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvaG9va3MvdXNlUGxheWVyLnRzXCI7XG5pbXBvcnQgeyBnZXRTZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzLnRzeFwiO1xuXG5zcG90aWZ5Q29tcG9uZW50cygpO1xuXG5pbnRlcmZhY2UgVHJhY2sge1xuICB1cmk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhbGJ1bToge1xuICAgIHVyaTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgfTtcbiAgYXJ0aXN0czogQXJyYXk8eyBuYW1lOiBzdHJpbmcgfT47XG4gIHVpZDogc3RyaW5nO1xufVxuXG5jb25zdCBEVVBMSUNBVEVfQ0FURUdPUklFUyA9IFtcImV4YWN0XCIsIFwiaXNyY1wiLCBcInByb2JhYmxlXCIsIFwibGlrZWx5XCIsIFwicG9zc2libGVcIl0gYXMgY29uc3Q7XG50eXBlIER1cGxpY2F0ZUNhdGVnb3J5ID0gKHR5cGVvZiBEVVBMSUNBVEVfQ0FURUdPUklFUylbbnVtYmVyXTtcblxuaW50ZXJmYWNlIFBsYXlsaXN0U3VtbWFyeSB7XG4gIHVyaTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFwicGxheWxpc3RcIiB8IHN0cmluZztcbiAgY2FuQWRkVG8/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgRGJUcmFjayB7XG4gIHRyYWNrVXJpOiBzdHJpbmc7XG4gIHRyYWNrTmFtZTogc3RyaW5nO1xuICB0cmFja0R1cmF0aW9uOiBudW1iZXIgfCBudWxsO1xuICBhbGJ1bVVyaTogc3RyaW5nO1xuICB0cmFja1BsYXlDb3VudDogbnVtYmVyIHwgbnVsbDtcbiAgdHJhY2tJc3JjOiBzdHJpbmcgfCBudWxsO1xuICBpZ25vcmVEdXBsaWNhdGVzPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRHVwbGljYXRlR3JvdXAge1xuICBtYWluVHJhY2s6IFRyYWNrO1xuICBkdXBsaWNhdGVzOiBUcmFja1tdO1xufVxuXG50eXBlIER1cGxpY2F0ZUdyb3VwcyA9IFJlY29yZDxEdXBsaWNhdGVDYXRlZ29yeSwgRHVwbGljYXRlR3JvdXBbXT47XG5cbmNsYXNzIEZpbmREdXBlVHJhY2tzREIgZXh0ZW5kcyBEZXhpZSB7XG4gIHB1YmxpYyB0cmFja3MhOiBUYWJsZTxEYlRyYWNrLCBzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiZmluZER1cGVUcmFja3NcIik7XG4gICAgdGhpcy52ZXJzaW9uKDAuMSkuc3RvcmVzKHtcbiAgICAgIHRyYWNrczpcbiAgICAgICAgXCImdHJhY2tVcmksIHRyYWNrTmFtZSwgdHJhY2tEdXJhdGlvbiwgYWxidW1VcmksIHRyYWNrUGxheUNvdW50LCB0cmFja0lzcmMsIGlnbm9yZUR1cGxpY2F0ZXNcIixcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBkYiA9IG5ldyBGaW5kRHVwZVRyYWNrc0RCKCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRWRpdGFibGVQbGF5bGlzdHMoKTogUHJvbWlzZTxQbGF5bGlzdFN1bW1hcnlbXT4ge1xuICBjb25zdCBwbGF5bGlzdHMgPSBhd2FpdCBmZXRjaEFsbExpYnJhcnlDb250ZW50cygpO1xuICByZXR1cm4gKHBsYXlsaXN0cyBhcyBQbGF5bGlzdFN1bW1hcnlbXSkuZmlsdGVyKFxuICAgIChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IFwicGxheWxpc3RcIiAmJiBCb29sZWFuKGl0ZW0uY2FuQWRkVG8pLFxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFBsYXlsaXN0VHJhY2tzQW5kQ2FjaGUocGxheWxpc3RVcmk6IHN0cmluZyk6IFByb21pc2U8eyBpdGVtczogVHJhY2tbXSB9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hBbGxQbGF5bGlzdFRyYWNrcyhwbGF5bGlzdFVyaSk7XG4gIGNvbnN0IGl0ZW1zID0gcmVzcG9uc2UuaXRlbXMgYXMgVHJhY2tbXTtcblxuICBjb25zdCB0cmFja1VyaXM6IHN0cmluZ1tdID0gaXRlbXMubWFwKCh0cmFjaykgPT4gdHJhY2sudXJpKTtcbiAgY29uc3QgZXhpc3RpbmdUcmFja3MgPSBhd2FpdCBkYi50cmFja3MuYnVsa0dldCh0cmFja1VyaXMpO1xuICBjb25zdCBleGlzdGluZ1RyYWNrc01hcCA9IG5ldyBNYXAoXG4gICAgZXhpc3RpbmdUcmFja3MuZmlsdGVyKCh0KTogdCBpcyBEYlRyYWNrID0+IEJvb2xlYW4odCkpLm1hcCgodCkgPT4gW3QudHJhY2tVcmksIHRdKSxcbiAgKTtcblxuICBjb25zdCB0cmFja3NUb1B1dDogRGJUcmFja1tdID0gaXRlbXMuZmxhdE1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nID0gZXhpc3RpbmdUcmFja3NNYXAuZ2V0KGl0ZW0udXJpKTtcbiAgICBpZiAoIWV4aXN0aW5nIHx8IGV4aXN0aW5nLnRyYWNrTmFtZSAhPT0gaXRlbS5uYW1lIHx8IGV4aXN0aW5nLmFsYnVtVXJpICE9PSBpdGVtLmFsYnVtLnVyaSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIHRyYWNrVXJpOiBpdGVtLnVyaSxcbiAgICAgICAgICB0cmFja05hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICBhbGJ1bVVyaTogaXRlbS5hbGJ1bS51cmksXG4gICAgICAgICAgdHJhY2tEdXJhdGlvbjogZXhpc3Rpbmc/LnRyYWNrRHVyYXRpb24gPz8gbnVsbCxcbiAgICAgICAgICB0cmFja1BsYXlDb3VudDogZXhpc3Rpbmc/LnRyYWNrUGxheUNvdW50ID8/IG51bGwsXG4gICAgICAgICAgdHJhY2tJc3JjOiBleGlzdGluZz8udHJhY2tJc3JjID8/IG51bGwsXG4gICAgICAgIH0gc2F0aXNmaWVzIERiVHJhY2ssXG4gICAgICBdO1xuICAgIH1cbiAgICByZXR1cm4gW10gYXMgRGJUcmFja1tdO1xuICB9KTtcblxuICBpZiAodHJhY2tzVG9QdXQubGVuZ3RoID4gMCkge1xuICAgIGF3YWl0IGRiLnRyYWNrcy5idWxrUHV0KHRyYWNrc1RvUHV0KTtcbiAgfVxuXG4gIHJldHVybiB7IGl0ZW1zIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoSVNSQ3NGb3JUcmFja3NXaXRoQ2FjaGUoXG4gIHRyYWNrczogVHJhY2tbXSxcbik6IFByb21pc2U8eyBpc3JjTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+IH0+IHtcbiAgY29uc3QgaXNyY01hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIGNvbnN0IHRyYWNrc1RvRmV0Y2g6IFRyYWNrW10gPSBbXTtcbiAgY29uc3QgdmFsaWRUcmFja3MgPSB0cmFja3MuZmlsdGVyKCh0cmFjaykgPT4gdHJhY2s/LnVyaSk7XG4gIGNvbnN0IHRyYWNrVXJpczogc3RyaW5nW10gPSB2YWxpZFRyYWNrcy5tYXAoKHRyYWNrKSA9PiB0cmFjay51cmkpO1xuXG4gIGlmICh0cmFja1VyaXMubGVuZ3RoID09PSAwKSByZXR1cm4geyBpc3JjTWFwIH07XG5cbiAgY29uc3QgY2FjaGVkVHJhY2tzRGF0YSA9IGF3YWl0IGRiLnRyYWNrcy5idWxrR2V0KHRyYWNrVXJpcyk7XG4gIGNvbnN0IGNhY2hlZFRyYWNrc01hcCA9IG5ldyBNYXAoXG4gICAgY2FjaGVkVHJhY2tzRGF0YS5maWx0ZXIoKHQpOiB0IGlzIERiVHJhY2sgPT4gQm9vbGVhbih0KSkubWFwKCh0KSA9PiBbdC50cmFja1VyaSwgdF0pLFxuICApO1xuXG4gIGZvciAoY29uc3QgdHJhY2sgb2YgdmFsaWRUcmFja3MpIHtcbiAgICBjb25zdCBjYWNoZWRUcmFjayA9IGNhY2hlZFRyYWNrc01hcC5nZXQodHJhY2sudXJpKTtcbiAgICBpZiAoY2FjaGVkVHJhY2s/LnRyYWNrSXNyYykge1xuICAgICAgaXNyY01hcC5zZXQodHJhY2sudXJpLCBjYWNoZWRUcmFjay50cmFja0lzcmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFja3NUb0ZldGNoLnB1c2godHJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0cmFja3NUb0ZldGNoLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBmZXRjaGVkVHJhY2tzRnJvbUFQSSA9IGF3YWl0IGZldGNoV2ViQVBJRm9yVHJhY2tzKHRyYWNrc1RvRmV0Y2gubWFwKCh0KSA9PiB0LnVyaSkpO1xuICAgIGludGVyZmFjZSBXZWJBcGlUcmFjayB7XG4gICAgICBleHRlcm5hbF9pZHM/OiB7IGlzcmM/OiBzdHJpbmcgfTtcbiAgICB9XG4gICAgY29uc3QgdXBkYXRlc0ZvckRiOiBBcnJheTx7IGtleTogc3RyaW5nOyBjaGFuZ2VzOiB7IHRyYWNrSXNyYzogc3RyaW5nIH0gfT4gPSBbXTtcblxuICAgIGZvciAoY29uc3QgW3RyYWNrVXJpLCB0cmFja10gb2YgZmV0Y2hlZFRyYWNrc0Zyb21BUEkuZW50cmllcygpKSB7XG4gICAgICBjb25zdCB0cmFja0lzcmMgPSAodHJhY2sgYXMgdW5rbm93biBhcyBXZWJBcGlUcmFjayk/LmV4dGVybmFsX2lkcz8uaXNyYztcbiAgICAgIGlmICh0cmFja0lzcmMpIHtcbiAgICAgICAgaXNyY01hcC5zZXQodHJhY2tVcmksIHRyYWNrSXNyYyk7XG4gICAgICAgIHVwZGF0ZXNGb3JEYi5wdXNoKHsga2V5OiB0cmFja1VyaSwgY2hhbmdlczogeyB0cmFja0lzcmMgfSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXBkYXRlc0ZvckRiLmxlbmd0aCA+IDApIHtcbiAgICAgIGF3YWl0IGRiLnRyYWNrcy5idWxrVXBkYXRlKHVwZGF0ZXNGb3JEYik7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGlzcmNNYXAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hQbGF5Q291bnRzQW5kRHVyYXRpb25Gb3JUcmFja3NXaXRoQ2FjaGUodHJhY2tzOiBUcmFja1tdKTogUHJvbWlzZTx7XG4gIHRyYWNrUGxheUNvdW50TWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+O1xuICB0cmFja0R1cmF0aW9uTWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+O1xufT4ge1xuICBjb25zdCB0cmFja1BsYXlDb3VudE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gIGNvbnN0IHRyYWNrRHVyYXRpb25NYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICBjb25zdCB0cmFja3NUb0ZldGNoOiBUcmFja1tdID0gW107XG4gIGNvbnN0IHZhbGlkVHJhY2tzID0gdHJhY2tzLmZpbHRlcigodHJhY2spID0+IHRyYWNrPy51cmkpO1xuICBjb25zdCB0cmFja1VyaXM6IHN0cmluZ1tdID0gdmFsaWRUcmFja3MubWFwKCh0cmFjaykgPT4gdHJhY2sudXJpKTtcblxuICBpZiAodHJhY2tVcmlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgdHJhY2tQbGF5Q291bnRNYXAsIHRyYWNrRHVyYXRpb25NYXAgfTtcblxuICBjb25zdCBjYWNoZWRUcmFja3NEYXRhID0gYXdhaXQgZGIudHJhY2tzLmJ1bGtHZXQodHJhY2tVcmlzKTtcbiAgY29uc3QgY2FjaGVkVHJhY2tzTWFwID0gbmV3IE1hcChcbiAgICBjYWNoZWRUcmFja3NEYXRhLmZpbHRlcigodCk6IHQgaXMgRGJUcmFjayA9PiBCb29sZWFuKHQpKS5tYXAoKHQpID0+IFt0LnRyYWNrVXJpLCB0XSksXG4gICk7XG5cbiAgZm9yIChjb25zdCB0cmFjayBvZiB2YWxpZFRyYWNrcykge1xuICAgIGNvbnN0IGNhY2hlZFRyYWNrID0gY2FjaGVkVHJhY2tzTWFwLmdldCh0cmFjay51cmkpO1xuICAgIGlmIChjYWNoZWRUcmFjaz8udHJhY2tQbGF5Q291bnQgIT0gbnVsbCkge1xuICAgICAgdHJhY2tQbGF5Q291bnRNYXAuc2V0KHRyYWNrLnVyaSwgY2FjaGVkVHJhY2sudHJhY2tQbGF5Q291bnQpO1xuICAgIH1cbiAgICBpZiAoY2FjaGVkVHJhY2s/LnRyYWNrRHVyYXRpb24gIT0gbnVsbCkge1xuICAgICAgdHJhY2tEdXJhdGlvbk1hcC5zZXQodHJhY2sudXJpLCBjYWNoZWRUcmFjay50cmFja0R1cmF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGNhY2hlZFRyYWNrPy50cmFja1BsYXlDb3VudCA9PSBudWxsIHx8IGNhY2hlZFRyYWNrPy50cmFja0R1cmF0aW9uID09IG51bGwpIHtcbiAgICAgIHRyYWNrc1RvRmV0Y2gucHVzaCh0cmFjayk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRyYWNrc1RvRmV0Y2gubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGFsYnVtVXJpc1RvRmV0Y2ggPSBuZXcgU2V0KHRyYWNrc1RvRmV0Y2gubWFwKCh0KSA9PiB0LmFsYnVtLnVyaSkuZmlsdGVyKEJvb2xlYW4pKTtcbiAgICBjb25zdCBmZXRjaGVkRGF0YUZyb21BUEkgPSBhd2FpdCBmZXRjaEdyYXBoUUxGb3JBbGJ1bVRyYWNrcyhhbGJ1bVVyaXNUb0ZldGNoKTtcbiAgICBjb25zdCB1cGRhdGVzRm9yRGI6IEFycmF5PHtcbiAgICAgIGtleTogc3RyaW5nO1xuICAgICAgY2hhbmdlczogeyB0cmFja1BsYXlDb3VudDogbnVtYmVyIHwgbnVsbDsgdHJhY2tEdXJhdGlvbjogbnVtYmVyIHwgbnVsbCB9O1xuICAgIH0+ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IFt0cmFja1VyaSwgdHJhY2tdIG9mIGZldGNoZWREYXRhRnJvbUFQSS5lbnRyaWVzKCkpIHtcbiAgICAgIGludGVyZmFjZSBHcmFwaFFMVHJhY2sge1xuICAgICAgICBwbGF5Y291bnQ/OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICAgICAgICBkdXJhdGlvbj86IHsgdG90YWxNaWxsaXNlY29uZHM/OiBudW1iZXIgfCBudWxsIH07XG4gICAgICB9XG4gICAgICBjb25zdCB0ID0gdHJhY2sgYXMgdW5rbm93biBhcyBHcmFwaFFMVHJhY2s7XG4gICAgICBjb25zdCB0cmFja1BsYXlDb3VudCA9IHQucGxheWNvdW50ICE9IG51bGwgPyBOdW1iZXIucGFyc2VJbnQoU3RyaW5nKHQucGxheWNvdW50KSwgMTApIDogbnVsbDtcbiAgICAgIGNvbnN0IHRyYWNrRHVyYXRpb24gPSB0LmR1cmF0aW9uPy50b3RhbE1pbGxpc2Vjb25kcyA/PyBudWxsO1xuXG4gICAgICBpZiAodHJhY2tQbGF5Q291bnQgIT09IG51bGwpIHtcbiAgICAgICAgdHJhY2tQbGF5Q291bnRNYXAuc2V0KHRyYWNrVXJpLCB0cmFja1BsYXlDb3VudCk7XG4gICAgICB9XG4gICAgICBpZiAodHJhY2tEdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0cmFja0R1cmF0aW9uTWFwLnNldCh0cmFja1VyaSwgdHJhY2tEdXJhdGlvbik7XG4gICAgICB9XG4gICAgICB1cGRhdGVzRm9yRGIucHVzaCh7XG4gICAgICAgIGtleTogdHJhY2tVcmksXG4gICAgICAgIGNoYW5nZXM6IHsgdHJhY2tQbGF5Q291bnQsIHRyYWNrRHVyYXRpb24gfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh1cGRhdGVzRm9yRGIubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgZGIudHJhY2tzLmJ1bGtVcGRhdGUodXBkYXRlc0ZvckRiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdHJhY2tQbGF5Q291bnRNYXAsIHRyYWNrRHVyYXRpb25NYXAgfTtcbn1cblxuY29uc3Qgbm9ybWFsaXplRm9yU2ltaWxhcml0eSA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKCk7XG4gIGNvbnN0IHRlcm1zVG9SZW1vdmUgPSBbLi4uc2V0dGluZ3MuZGVmYXVsdE5vcm1hbGl6ZVdvcmRzLCAuLi5zZXR0aW5ncy5jdXN0b21Ob3JtYWxpemVXb3Jkc107XG4gIGNvbnN0IHJlZ2V4UmVtb3ZlVGVybXMgPSBuZXcgUmVnRXhwKGBcXFxcYigke3Rlcm1zVG9SZW1vdmUuam9pbihcInxcIil9KVxcXFxiYCwgXCJnaVwiKTtcbiAgcmV0dXJuIG5hbWVcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXCguKj9cXCl8XFxbLio/XFxdL2csIFwiXCIpXG4gICAgLnJlcGxhY2UocmVnZXhSZW1vdmVUZXJtcywgXCJcIilcbiAgICAucmVwbGFjZSgvLS9nLCBcIiBcIilcbiAgICAucmVwbGFjZSgvW15cXHB7TH1cXHB7Tn1cXHNdL2d1LCBcIlwiKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKVxuICAgIC50cmltKCk7XG59O1xuXG5pbnRlcmZhY2UgVHJhY2tEZXRhaWxzUHJvcHMge1xuICB0cmFjazogVHJhY2s7XG4gIHRyYWNrUGxheUNvdW50czogTWFwPHN0cmluZywgbnVtYmVyPjtcbiAgdHJhY2tJc3JjczogTWFwPHN0cmluZywgc3RyaW5nPjtcbn1cblxuY29uc3QgVHJhY2tEZXRhaWxzID0gbWVtbyhmdW5jdGlvbiBUcmFja0RldGFpbHMoe1xuICB0cmFjayxcbiAgdHJhY2tQbGF5Q291bnRzLFxuICB0cmFja0lzcmNzLFxufTogVHJhY2tEZXRhaWxzUHJvcHMpIHtcbiAgY29uc3QgdHJhY2tQbGF5Q291bnQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHRyYWNrUGxheUNvdW50cy5nZXQodHJhY2sudXJpKTtcbiAgY29uc3QgZGlzcGxheUNvdW50OiBzdHJpbmcgPSB0cmFja1BsYXlDb3VudCAhPSBudWxsID8gdHJhY2tQbGF5Q291bnQudG9Mb2NhbGVTdHJpbmcoKSA6IFwiTi9BXCI7XG4gIGNvbnN0IHRyYWNrSXNyYzogc3RyaW5nID0gdHJhY2tJc3Jjcy5nZXQodHJhY2sudXJpKSB8fCBcIk4vQVwiO1xuICBjb25zdCBhbGJ1bU5hbWU6IHN0cmluZyA9IHRyYWNrLmFsYnVtPy5uYW1lIHx8IFwiTi9BXCI7XG4gIGNvbnN0IGFydGlzdHM6IHN0cmluZyA9IHRyYWNrLmFydGlzdHM/Lm1hcCgoYTogeyBuYW1lOiBzdHJpbmcgfSkgPT4gYS5uYW1lKS5qb2luKFwiLCBcIikgfHwgXCJOL0FcIjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrLWRldGFpbHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2stZGV0YWlsc19fbGluZVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFjay1kZXRhaWxzX19hcnRpc3RzXCI+QXJ0aXN0czoge2FydGlzdHN9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFjay1kZXRhaWxzX19hbGJ1bVwiPkFsYnVtOiB7YWxidW1OYW1lfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFjay1kZXRhaWxzX19saW5lXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNrLWRldGFpbHNfX3BsYXljb3VudFwiPlBsYXlzOiB7ZGlzcGxheUNvdW50fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhY2stZGV0YWlsc19faXNyY1wiPklTUkM6IHt0cmFja0lzcmN9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuaW50ZXJmYWNlIFRyYWNrQ29udHJvbHNQcm9wcyB7XG4gIHRyYWNrVXJpOiBzdHJpbmc7XG4gIHRyYWNrRHVyYXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgVHJhY2tDb250cm9scyA9IG1lbW8oZnVuY3Rpb24gVHJhY2tDb250cm9scyh7IHRyYWNrVXJpLCB0cmFja0R1cmF0aW9uIH06IFRyYWNrQ29udHJvbHNQcm9wcykge1xuICBjb25zdCB7XG4gICAgcG9zaXRpb24sXG4gICAgZHVyYXRpb24sXG4gICAgaXNDdXJyZW50bHlQbGF5aW5nVGhpc1RyYWNrLFxuICAgIHRvZ2dsZVBsYXksXG4gICAgaGFuZGxlU2xpZGVyQ2hhbmdlLFxuICAgIGhhbmRsZVNsaWRlclJlbGVhc2UsXG4gIH0gPSB1c2VQbGF5ZXIodHJhY2tVcmksIHRyYWNrRHVyYXRpb24gPz8gMCk7XG5cbiAgY29uc3QgZm9ybWF0VGltZSA9IChtczogbnVtYmVyIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcbiAgICBpZiAobXMgPT0gbnVsbCB8fCBOdW1iZXIuaXNOYU4obXMpIHx8IG1zIDwgMCkgcmV0dXJuIFwiTi9BXCI7XG4gICAgY29uc3QgdG90YWxTZWNvbmRzOiBudW1iZXIgPSBNYXRoLmZsb29yKG1zIC8gMTAwMCk7XG4gICAgY29uc3QgbWludXRlczogbnVtYmVyID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kczogbnVtYmVyID0gdG90YWxTZWNvbmRzICUgNjA7XG4gICAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICB9O1xuXG4gIGNvbnN0IGxlZnRUZXh0OiBzdHJpbmcgPSBmb3JtYXRUaW1lKHBvc2l0aW9uKTtcbiAgY29uc3QgcmlnaHRUZXh0OiBzdHJpbmcgPSBmb3JtYXRUaW1lKGR1cmF0aW9uKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwbGljYXRlLWdyb3VwX19wbGF5YmFjay1jb250cm9sc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX3BsYXliYWNrLWJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAge2lzQ3VycmVudGx5UGxheWluZ1RoaXNUcmFjayA/IDxJY29ucy5SZWFjdC5wYXVzZSAvPiA6IDxJY29ucy5SZWFjdC5wbGF5IC8+fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXItdGltZVwiPntsZWZ0VGV4dH08L3NwYW4+XG4gICAgICA8U2xpZGVyXG4gICAgICAgIHsuLi57XG4gICAgICAgICAgbWF4OiBkdXJhdGlvbiB8fCAwLFxuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBvbkNoYW5nZTogaGFuZGxlU2xpZGVyQ2hhbmdlLFxuICAgICAgICAgIG9uUmVsZWFzZTogaGFuZGxlU2xpZGVyUmVsZWFzZSxcbiAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgIHZhbHVlOiBwb3NpdGlvbiB8fCAwLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlci10aW1lXCI+e3JpZ2h0VGV4dH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuaW50ZXJmYWNlIER1cGxpY2F0ZUl0ZW1Qcm9wcyB7XG4gIHRyYWNrOiBUcmFjaztcbiAgY2F0ZWdvcnk6IER1cGxpY2F0ZUNhdGVnb3J5O1xuICBncm91cEluZGV4OiBudW1iZXI7XG4gIG9uRGVsZXRlOiAoY2F0ZWdvcnk6IER1cGxpY2F0ZUNhdGVnb3J5LCB0cmFjazogVHJhY2spID0+IHZvaWQ7XG4gIGlzU291cmNlPzogYm9vbGVhbjtcbiAgdHJhY2tQbGF5Q291bnRzOiBNYXA8c3RyaW5nLCBudW1iZXI+O1xuICB0cmFja0lzcmNzOiBNYXA8c3RyaW5nLCBzdHJpbmc+O1xuICB0cmFja0R1cmF0aW9uczogTWFwPHN0cmluZywgbnVtYmVyPjtcbn1cblxuY29uc3QgRHVwbGljYXRlSXRlbSA9IG1lbW8oZnVuY3Rpb24gRHVwbGljYXRlSXRlbSh7XG4gIHRyYWNrLFxuICBjYXRlZ29yeSxcbiAgb25EZWxldGUsXG4gIGlzU291cmNlLFxuICB0cmFja1BsYXlDb3VudHMsXG4gIHRyYWNrSXNyY3MsXG4gIHRyYWNrRHVyYXRpb25zLFxufTogRHVwbGljYXRlSXRlbVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BkdXBsaWNhdGUtZ3JvdXBfX2R1cGxpY2F0ZS1pdGVtIGR1cGxpY2F0ZS1ncm91cF9faXRlbS0tJHtjYXRlZ29yeX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwbGljYXRlLWdyb3VwX19kdXBsaWNhdGUtaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1ncm91cF9fZHVwbGljYXRlLWNvbnRlbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2R1cGxpY2F0ZS1uYW1lXCI+XG4gICAgICAgICAgICB7aXNTb3VyY2UgPyBcIlNvdXJjZTogXCIgOiBcIlwifVxuICAgICAgICAgICAge3RyYWNrLm5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxUcmFja0RldGFpbHMgdHJhY2s9e3RyYWNrfSB0cmFja0lzcmNzPXt0cmFja0lzcmNzfSB0cmFja1BsYXlDb3VudHM9e3RyYWNrUGxheUNvdW50c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2RlbGV0ZS1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGNhdGVnb3J5LCB0cmFjayl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICBEZWxldGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwbGljYXRlLWdyb3VwX19hY3Rpb25zXCI+XG4gICAgICAgIDxUcmFja0NvbnRyb2xzIHRyYWNrRHVyYXRpb249e3RyYWNrRHVyYXRpb25zLmdldCh0cmFjay51cmkpfSB0cmFja1VyaT17dHJhY2sudXJpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuaW50ZXJmYWNlIER1cGxpY2F0ZUdyb3VwQ29tcG9uZW50UHJvcHMge1xuICBncm91cDogRHVwbGljYXRlR3JvdXA7XG4gIGNhdGVnb3J5OiBEdXBsaWNhdGVDYXRlZ29yeTtcbiAgZ3JvdXBJbmRleDogbnVtYmVyO1xuICBvbkRlbGV0ZTogKGNhdGVnb3J5OiBEdXBsaWNhdGVDYXRlZ29yeSwgdHJhY2s6IFRyYWNrKSA9PiB2b2lkO1xuICB0cmFja1BsYXlDb3VudHM6IE1hcDxzdHJpbmcsIG51bWJlcj47XG4gIHRyYWNrSXNyY3M6IE1hcDxzdHJpbmcsIHN0cmluZz47XG4gIHRyYWNrRHVyYXRpb25zOiBNYXA8c3RyaW5nLCBudW1iZXI+O1xufVxuXG5jb25zdCBEdXBsaWNhdGVHcm91cENvbXBvbmVudCA9IG1lbW8oZnVuY3Rpb24gRHVwbGljYXRlR3JvdXBDb21wb25lbnQoe1xuICBncm91cCxcbiAgY2F0ZWdvcnksXG4gIGdyb3VwSW5kZXgsXG4gIG9uRGVsZXRlLFxuICB0cmFja1BsYXlDb3VudHMsXG4gIHRyYWNrSXNyY3MsXG4gIHRyYWNrRHVyYXRpb25zLFxufTogRHVwbGljYXRlR3JvdXBDb21wb25lbnRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGR1cGxpY2F0ZS1ncm91cF9faXRlbSBkdXBsaWNhdGUtZ3JvdXBfX2l0ZW0tLSR7Y2F0ZWdvcnl9YH1cbiAgICAgIGtleT17YCR7Z3JvdXAubWFpblRyYWNrLnVyaX0tJHtncm91cC5tYWluVHJhY2sudWlkIHx8IGdyb3VwSW5kZXh9YH1cbiAgICA+XG4gICAgICA8RHVwbGljYXRlSXRlbVxuICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgIGdyb3VwSW5kZXg9e2dyb3VwSW5kZXh9XG4gICAgICAgIGlzU291cmNlXG4gICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cbiAgICAgICAgdHJhY2s9e2dyb3VwLm1haW5UcmFja31cbiAgICAgICAgdHJhY2tEdXJhdGlvbnM9e3RyYWNrRHVyYXRpb25zfVxuICAgICAgICB0cmFja0lzcmNzPXt0cmFja0lzcmNzfVxuICAgICAgICB0cmFja1BsYXlDb3VudHM9e3RyYWNrUGxheUNvdW50c31cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1ncm91cF9fZHVwbGljYXRlcy1sYWJlbFwiPkR1cGxpY2F0ZXM6PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1ncm91cF9fZHVwbGljYXRlcy1saXN0XCI+XG4gICAgICAgIHtncm91cC5kdXBsaWNhdGVzLm1hcCgoZHVwOiBUcmFjaykgPT4gKFxuICAgICAgICAgIDxEdXBsaWNhdGVJdGVtXG4gICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICBncm91cEluZGV4PXtncm91cEluZGV4fVxuICAgICAgICAgICAga2V5PXtgJHtkdXAudXJpfS0ke2R1cC51aWQgfHwgZHVwLnVyaX1gfVxuICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlfVxuICAgICAgICAgICAgdHJhY2s9e2R1cH1cbiAgICAgICAgICAgIHRyYWNrRHVyYXRpb25zPXt0cmFja0R1cmF0aW9uc31cbiAgICAgICAgICAgIHRyYWNrSXNyY3M9e3RyYWNrSXNyY3N9XG4gICAgICAgICAgICB0cmFja1BsYXlDb3VudHM9e3RyYWNrUGxheUNvdW50c31cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmludGVyZmFjZSBEdXBsaWNhdGVHcm91cExpc3RQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGdyb3VwczogRHVwbGljYXRlR3JvdXBbXTtcbiAgY2F0ZWdvcnk6IER1cGxpY2F0ZUNhdGVnb3J5O1xuICBvbkRlbGV0ZTogKGNhdGVnb3J5OiBEdXBsaWNhdGVDYXRlZ29yeSwgdHJhY2s6IFRyYWNrKSA9PiB2b2lkO1xuICB0cmFja1BsYXlDb3VudHM6IE1hcDxzdHJpbmcsIG51bWJlcj47XG4gIHRyYWNrSXNyY3M6IE1hcDxzdHJpbmcsIHN0cmluZz47XG4gIHRyYWNrRHVyYXRpb25zOiBNYXA8c3RyaW5nLCBudW1iZXI+O1xufVxuXG5jb25zdCBEdXBsaWNhdGVHcm91cExpc3QgPSBtZW1vKGZ1bmN0aW9uIER1cGxpY2F0ZUdyb3VwTGlzdCh7XG4gIHRpdGxlLFxuICBncm91cHMsXG4gIGNhdGVnb3J5LFxuICBvbkRlbGV0ZSxcbiAgdHJhY2tQbGF5Q291bnRzLFxuICB0cmFja0lzcmNzLFxuICB0cmFja0R1cmF0aW9ucyxcbn06IER1cGxpY2F0ZUdyb3VwTGlzdFByb3BzKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcbiAgaWYgKCFzZXR0aW5ncy5ncm91cFNldHRpbmdzW2NhdGVnb3J5XSkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cGxpY2F0ZS1ncm91cFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2hlYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2hlYWRpbmctdGl0bGVcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwbGljYXRlLWdyb3VwX19oZWFkaW5nLWxlbmd0aFwiPntncm91cHMubGVuZ3RofSBmb3VuZDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7Z3JvdXBzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVwbGljYXRlLWdyb3VwX19saXN0XCI+XG4gICAgICAgICAge2dyb3Vwcy5tYXAoKGdyb3VwOiBEdXBsaWNhdGVHcm91cCwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPER1cGxpY2F0ZUdyb3VwQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgZ3JvdXA9e2dyb3VwfVxuICAgICAgICAgICAgICBncm91cEluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAga2V5PXtgJHtncm91cC5tYWluVHJhY2sudXJpfS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cbiAgICAgICAgICAgICAgdHJhY2tEdXJhdGlvbnM9e3RyYWNrRHVyYXRpb25zfVxuICAgICAgICAgICAgICB0cmFja0lzcmNzPXt0cmFja0lzcmNzfVxuICAgICAgICAgICAgICB0cmFja1BsYXlDb3VudHM9e3RyYWNrUGxheUNvdW50c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXBsaWNhdGUtZ3JvdXBfX2VtcHR5XCI+Tm8gZHVwbGljYXRlcyBmb3VuZCBpbiB0aGlzIGNhdGVnb3J5LjwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5jb25zdCBrZXlCYXNlZFN0cmF0ZWd5ID1cbiAgKFxuICAgIGtleUZuOiAodDogVHJhY2spID0+IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBub3JtYWxpemVyOiAoa2V5OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgKSA9PlxuICAodHJhY2tzOiBUcmFja1tdLCB0cmFja1BsYXlDb3VudE1hcDogTWFwPHN0cmluZywgbnVtYmVyPik6IER1cGxpY2F0ZUdyb3VwW10gPT4ge1xuICAgIGNvbnN0IHRyYWNrc1dpdGhLZXkgPSB0cmFja3MuZmlsdGVyKCh0KSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBub3JtYWxpemVyKGtleUZuKHQpKTtcbiAgICAgIHJldHVybiBrZXkgIT0gbnVsbCAmJiBrZXkgIT09IFwiXCI7XG4gICAgfSk7XG4gICAgaWYgKHRyYWNrc1dpdGhLZXkubGVuZ3RoIDwgMikgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgZ3JvdXBzID0gT2JqZWN0Lmdyb3VwQnkodHJhY2tzV2l0aEtleSwgKHQpID0+IG5vcm1hbGl6ZXIoa2V5Rm4odCkpIGFzIFByb3BlcnR5S2V5KTtcbiAgICBjb25zdCBkdXBsaWNhdGVzUmVzdWx0OiBEdXBsaWNhdGVHcm91cFtdID0gW107XG4gICAgZm9yIChjb25zdCBncm91cCBvZiBPYmplY3QudmFsdWVzKGdyb3VwcykpIHtcbiAgICAgIGlmIChncm91cCAmJiBncm91cC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGdyb3VwLnRvU29ydGVkKFxuICAgICAgICAgIChhLCBiKSA9PiAodHJhY2tQbGF5Q291bnRNYXAuZ2V0KGIudXJpKSA/PyAwKSAtICh0cmFja1BsYXlDb3VudE1hcC5nZXQoYS51cmkpID8/IDApLFxuICAgICAgICApO1xuICAgICAgICBkdXBsaWNhdGVzUmVzdWx0LnB1c2goeyBtYWluVHJhY2s6IHNvcnRlZFswXSwgZHVwbGljYXRlczogc29ydGVkLnNsaWNlKDEpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZHVwbGljYXRlc1Jlc3VsdDtcbiAgfTtcblxuY29uc3Qgc2hhcmVkQXJ0aXN0U3RyYXRlZ3kgPSAoXG4gIHRyYWNrczogVHJhY2tbXSxcbiAgdHJhY2tQbGF5Q291bnRNYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4sXG4pOiBEdXBsaWNhdGVHcm91cFtdID0+IHtcbiAgY29uc3QgZHVwbGljYXRlc1Jlc3VsdDogRHVwbGljYXRlR3JvdXBbXSA9IFtdO1xuICBjb25zdCB0cmFja3NCeU5hbWUgPSBPYmplY3QuZ3JvdXBCeSh0cmFja3MsICh0KSA9PiB0Lm5hbWUudG9Mb3dlckNhc2UoKS50cmltKCkpO1xuXG4gIGZvciAoY29uc3QgdHJhY2tzV2l0aFNhbWVOYW1lIG9mIE9iamVjdC52YWx1ZXModHJhY2tzQnlOYW1lKSkge1xuICAgIGlmICghdHJhY2tzV2l0aFNhbWVOYW1lIHx8IHRyYWNrc1dpdGhTYW1lTmFtZS5sZW5ndGggPCAyKSBjb250aW51ZTtcblxuICAgIGNvbnN0IHZpc2l0ZWRJbkdyb3VwID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCB0cmFjayBvZiB0cmFja3NXaXRoU2FtZU5hbWUpIHtcbiAgICAgIGlmICh2aXNpdGVkSW5Hcm91cC5oYXModHJhY2sudWlkKSkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudDogVHJhY2tbXSA9IFtdO1xuICAgICAgY29uc3QgcXVldWU6IFRyYWNrW10gPSBbdHJhY2tdO1xuICAgICAgdmlzaXRlZEluR3JvdXAuYWRkKHRyYWNrLnVpZCk7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFjayA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmIChjdXJyZW50VHJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50LnB1c2goY3VycmVudFRyYWNrKTtcbiAgICAgICAgY29uc3QgY3VycmVudEFydGlzdHMgPSBuZXcgU2V0KGN1cnJlbnRUcmFjay5hcnRpc3RzLm1hcCgoYSkgPT4gYS5uYW1lKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBwb3RlbnRpYWxNYXRjaCBvZiB0cmFja3NXaXRoU2FtZU5hbWUpIHtcbiAgICAgICAgICBpZiAodmlzaXRlZEluR3JvdXAuaGFzKHBvdGVudGlhbE1hdGNoLnVpZCkpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChwb3RlbnRpYWxNYXRjaC5hcnRpc3RzLnNvbWUoKGEpID0+IGN1cnJlbnRBcnRpc3RzLmhhcyhhLm5hbWUpKSkge1xuICAgICAgICAgICAgdmlzaXRlZEluR3JvdXAuYWRkKHBvdGVudGlhbE1hdGNoLnVpZCk7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKHBvdGVudGlhbE1hdGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBvbmVudC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGNvbXBvbmVudC50b1NvcnRlZChcbiAgICAgICAgICAoYSwgYikgPT4gKHRyYWNrUGxheUNvdW50TWFwLmdldChiLnVyaSkgPz8gMCkgLSAodHJhY2tQbGF5Q291bnRNYXAuZ2V0KGEudXJpKSA/PyAwKSxcbiAgICAgICAgKTtcbiAgICAgICAgZHVwbGljYXRlc1Jlc3VsdC5wdXNoKHsgbWFpblRyYWNrOiBzb3J0ZWRbMF0sIGR1cGxpY2F0ZXM6IHNvcnRlZC5zbGljZSgxKSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGR1cGxpY2F0ZXNSZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBmaW5kR3JvdXBzKFxuICB0cmFja3M6IFRyYWNrW10sXG4gIHRyYWNrUGxheUNvdW50TWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+LFxuICBzdHJhdGVneTogKHRyYWNrczogVHJhY2tbXSwgdHJhY2tQbGF5Q291bnRNYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4pID0+IER1cGxpY2F0ZUdyb3VwW10sXG4pOiBEdXBsaWNhdGVHcm91cFtdIHtcbiAgY29uc3QgZ3JvdXBzID0gc3RyYXRlZ3kodHJhY2tzLCB0cmFja1BsYXlDb3VudE1hcCk7XG5cbiAgcmV0dXJuIGdyb3Vwcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYVBsYXlDb3VudCA9IHRyYWNrUGxheUNvdW50TWFwLmdldChhLm1haW5UcmFjay51cmkpID8/IDA7XG4gICAgY29uc3QgYlBsYXlDb3VudCA9IHRyYWNrUGxheUNvdW50TWFwLmdldChiLm1haW5UcmFjay51cmkpID8/IDA7XG4gICAgaWYgKGJQbGF5Q291bnQgIT09IGFQbGF5Q291bnQpIHJldHVybiBiUGxheUNvdW50IC0gYVBsYXlDb3VudDtcbiAgICByZXR1cm4gYS5tYWluVHJhY2submFtZS5sb2NhbGVDb21wYXJlKGIubWFpblRyYWNrLm5hbWUpO1xuICB9KTtcbn1cblxuY29uc3QgZmluZFBvdGVudGlhbER1cGxpY2F0ZXMgPSAoXG4gIHRyYWNrczogVHJhY2tbXSxcbiAgdHJhY2tQbGF5Q291bnRNYXA6IE1hcDxzdHJpbmcsIG51bWJlcj4sXG4gIHRyYWNrSXNyY01hcDogTWFwPHN0cmluZywgc3RyaW5nPixcbik6IER1cGxpY2F0ZUdyb3VwcyA9PiB7XG4gIGNvbnN0IHByb2Nlc3NlZFVyaXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBjb25zdCBtYXJrQXNQcm9jZXNzZWQgPSAoZ3JvdXBzOiBEdXBsaWNhdGVHcm91cFtdKSA9PiB7XG4gICAgZm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcbiAgICAgIHByb2Nlc3NlZFVyaXMuYWRkKGdyb3VwLm1haW5UcmFjay51cmkpO1xuICAgICAgZm9yIChjb25zdCBkdXAgb2YgZ3JvdXAuZHVwbGljYXRlcykge1xuICAgICAgICBwcm9jZXNzZWRVcmlzLmFkZChkdXAudXJpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZXhhY3QgPSBmaW5kR3JvdXBzKFxuICAgIHRyYWNrcyxcbiAgICB0cmFja1BsYXlDb3VudE1hcCxcbiAgICBrZXlCYXNlZFN0cmF0ZWd5KFxuICAgICAgKHQpID0+IHQudXJpLFxuICAgICAgKGspID0+IGssXG4gICAgKSxcbiAgKTtcbiAgbWFya0FzUHJvY2Vzc2VkKGV4YWN0KTtcbiAgbGV0IHVucHJvY2Vzc2VkVHJhY2tzID0gdHJhY2tzLmZpbHRlcigodCkgPT4gIXByb2Nlc3NlZFVyaXMuaGFzKHQudXJpKSk7XG5cbiAgY29uc3QgaXNyYyA9IGZpbmRHcm91cHMoXG4gICAgdW5wcm9jZXNzZWRUcmFja3MsXG4gICAgdHJhY2tQbGF5Q291bnRNYXAsXG4gICAga2V5QmFzZWRTdHJhdGVneShcbiAgICAgICh0KSA9PiB0cmFja0lzcmNNYXAuZ2V0KHQudXJpKSxcbiAgICAgIChrKSA9PiBrLFxuICAgICksXG4gICk7XG4gIG1hcmtBc1Byb2Nlc3NlZChpc3JjKTtcbiAgdW5wcm9jZXNzZWRUcmFja3MgPSB0cmFja3MuZmlsdGVyKCh0KSA9PiAhcHJvY2Vzc2VkVXJpcy5oYXModC51cmkpKTtcblxuICBjb25zdCBwcm9iYWJsZSA9IGZpbmRHcm91cHModW5wcm9jZXNzZWRUcmFja3MsIHRyYWNrUGxheUNvdW50TWFwLCBzaGFyZWRBcnRpc3RTdHJhdGVneSk7XG4gIG1hcmtBc1Byb2Nlc3NlZChwcm9iYWJsZSk7XG4gIHVucHJvY2Vzc2VkVHJhY2tzID0gdHJhY2tzLmZpbHRlcigodCkgPT4gIXByb2Nlc3NlZFVyaXMuaGFzKHQudXJpKSk7XG5cbiAgY29uc3QgbGlrZWx5ID0gZmluZEdyb3VwcyhcbiAgICB1bnByb2Nlc3NlZFRyYWNrcyxcbiAgICB0cmFja1BsYXlDb3VudE1hcCxcbiAgICBrZXlCYXNlZFN0cmF0ZWd5KFxuICAgICAgKHQpID0+IHQubmFtZSxcbiAgICAgIChuYW1lKSA9PiBuYW1lPy50b0xvd2VyQ2FzZSgpLnRyaW0oKSxcbiAgICApLFxuICApO1xuICBtYXJrQXNQcm9jZXNzZWQobGlrZWx5KTtcbiAgdW5wcm9jZXNzZWRUcmFja3MgPSB0cmFja3MuZmlsdGVyKCh0KSA9PiAhcHJvY2Vzc2VkVXJpcy5oYXModC51cmkpKTtcblxuICBjb25zdCBwb3NzaWJsZSA9IGZpbmRHcm91cHMoXG4gICAgdW5wcm9jZXNzZWRUcmFja3MsXG4gICAgdHJhY2tQbGF5Q291bnRNYXAsXG4gICAga2V5QmFzZWRTdHJhdGVneShcbiAgICAgICh0KSA9PiB0Lm5hbWUsXG4gICAgICAobmFtZSkgPT4gKG5hbWUgPyBub3JtYWxpemVGb3JTaW1pbGFyaXR5KG5hbWUpIDogdW5kZWZpbmVkKSxcbiAgICApLFxuICApO1xuXG4gIHJldHVybiB7IGV4YWN0LCBpc3JjLCBwcm9iYWJsZSwgbGlrZWx5LCBwb3NzaWJsZSB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlsaXN0RHVwbGljYXRlRmluZGVyKHtcbiAgc2VsZWN0ZWRQbGF5bGlzdDogaW5pdGlhbFNlbGVjdGVkUGxheWxpc3QsXG59OiB7XG4gIHNlbGVjdGVkUGxheWxpc3Q/OiBQbGF5bGlzdFN1bW1hcnk7XG59KSB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbb3duZWRQbGF5bGlzdHMsIHNldE93bmVkUGxheWxpc3RzXSA9IHVzZVN0YXRlPFBsYXlsaXN0U3VtbWFyeVtdPihbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZFBsYXlsaXN0LCBzZXRTZWxlY3RlZFBsYXlsaXN0XSA9IHVzZVN0YXRlPFBsYXlsaXN0U3VtbWFyeSB8IG51bGw+KFxuICAgIGluaXRpYWxTZWxlY3RlZFBsYXlsaXN0IHx8IG51bGwsXG4gICk7XG4gIGNvbnN0IFtfcGxheWxpc3RUcmFja3MsIHNldFBsYXlsaXN0VHJhY2tzXSA9IHVzZVN0YXRlPFRyYWNrW10+KFtdKTtcbiAgY29uc3QgW3RyYWNrUGxheUNvdW50cywgc2V0VHJhY2tQbGF5Q291bnRzXSA9IHVzZVN0YXRlPE1hcDxzdHJpbmcsIG51bWJlcj4+KG5ldyBNYXAoKSk7XG4gIGNvbnN0IFt0cmFja0R1cmF0aW9ucywgc2V0VHJhY2tEdXJhdGlvbnNdID0gdXNlU3RhdGU8TWFwPHN0cmluZywgbnVtYmVyPj4obmV3IE1hcCgpKTtcbiAgY29uc3QgW3RyYWNrSXNyY3MsIHNldFRyYWNrSXNyY3NdID0gdXNlU3RhdGU8TWFwPHN0cmluZywgc3RyaW5nPj4obmV3IE1hcCgpKTtcbiAgY29uc3QgW2R1cGxpY2F0ZUdyb3Vwcywgc2V0RHVwbGljYXRlR3JvdXBzXSA9IHVzZVN0YXRlPER1cGxpY2F0ZUdyb3Vwcz4oe1xuICAgIGV4YWN0OiBbXSxcbiAgICBpc3JjOiBbXSxcbiAgICBwcm9iYWJsZTogW10sXG4gICAgbGlrZWx5OiBbXSxcbiAgICBwb3NzaWJsZTogW10sXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGZldGNoSW5pdGlhbERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwbGF5bGlzdHMgPSBhd2FpdCBmZXRjaEVkaXRhYmxlUGxheWxpc3RzKCk7XG4gICAgICBpZiAoY2FuY2VsbGVkKSByZXR1cm47XG4gICAgICBzZXRPd25lZFBsYXlsaXN0cyhwbGF5bGlzdHMpO1xuICAgICAgc2V0U2VsZWN0ZWRQbGF5bGlzdChpbml0aWFsU2VsZWN0ZWRQbGF5bGlzdCB8fCBwbGF5bGlzdHMuYXQoMCkgfHwgbnVsbCk7XG4gICAgfTtcbiAgICB2b2lkIGZldGNoSW5pdGlhbERhdGEoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB9O1xuICB9LCBbaW5pdGlhbFNlbGVjdGVkUGxheWxpc3RdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvYWRBbmRQcm9jZXNzRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmICghc2VsZWN0ZWRQbGF5bGlzdCkge1xuICAgICAgICBzZXRQbGF5bGlzdFRyYWNrcyhbXSk7XG4gICAgICAgIHNldER1cGxpY2F0ZUdyb3Vwcyh7IGV4YWN0OiBbXSwgaXNyYzogW10sIHByb2JhYmxlOiBbXSwgbGlrZWx5OiBbXSwgcG9zc2libGU6IFtdIH0pO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgeyBpdGVtczogZmV0Y2hlZFRyYWNrcyB9ID0gYXdhaXQgZmV0Y2hQbGF5bGlzdFRyYWNrc0FuZENhY2hlKHNlbGVjdGVkUGxheWxpc3QudXJpKTtcbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVybjtcblxuICAgICAgaWYgKGZldGNoZWRUcmFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNldFBsYXlsaXN0VHJhY2tzKFtdKTtcbiAgICAgICAgc2V0RHVwbGljYXRlR3JvdXBzKHsgZXhhY3Q6IFtdLCBpc3JjOiBbXSwgcHJvYmFibGU6IFtdLCBsaWtlbHk6IFtdLCBwb3NzaWJsZTogW10gfSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgW2NvdW50c0FuZER1cmF0aW9uUmVzdWx0LCBpc3JjUmVzdWx0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZmV0Y2hQbGF5Q291bnRzQW5kRHVyYXRpb25Gb3JUcmFja3NXaXRoQ2FjaGUoZmV0Y2hlZFRyYWNrcyksXG4gICAgICAgIGZldGNoSVNSQ3NGb3JUcmFja3NXaXRoQ2FjaGUoZmV0Y2hlZFRyYWNrcyksXG4gICAgICBdKTtcbiAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVybjtcblxuICAgICAgY29uc3QgbmV3UGxheUNvdW50cyA9IGNvdW50c0FuZER1cmF0aW9uUmVzdWx0LnRyYWNrUGxheUNvdW50TWFwO1xuICAgICAgY29uc3QgbmV3RHVyYXRpb25zID0gY291bnRzQW5kRHVyYXRpb25SZXN1bHQudHJhY2tEdXJhdGlvbk1hcDtcbiAgICAgIGNvbnN0IG5ld0lzcmNzID0gaXNyY1Jlc3VsdC5pc3JjTWFwO1xuXG4gICAgICBjb25zdCBuZXdEdXBsaWNhdGVHcm91cHMgPSBmaW5kUG90ZW50aWFsRHVwbGljYXRlcyhmZXRjaGVkVHJhY2tzLCBuZXdQbGF5Q291bnRzLCBuZXdJc3Jjcyk7XG5cbiAgICAgIHNldFBsYXlsaXN0VHJhY2tzKGZldGNoZWRUcmFja3MpO1xuICAgICAgc2V0VHJhY2tQbGF5Q291bnRzKG5ld1BsYXlDb3VudHMpO1xuICAgICAgc2V0VHJhY2tEdXJhdGlvbnMobmV3RHVyYXRpb25zKTtcbiAgICAgIHNldFRyYWNrSXNyY3MobmV3SXNyY3MpO1xuICAgICAgc2V0RHVwbGljYXRlR3JvdXBzKG5ld0R1cGxpY2F0ZUdyb3Vwcyk7XG5cbiAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZvaWQgbG9hZEFuZFByb2Nlc3NEYXRhKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB9O1xuICB9LCBbc2VsZWN0ZWRQbGF5bGlzdF0pO1xuXG4gIGNvbnN0IGhhbmRsZVBsYXlsaXN0Q2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHVyaTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBuZXdQbGF5bGlzdCA9IG93bmVkUGxheWxpc3RzLmZpbmQoKHApID0+IHAudXJpID09PSB1cmkpID8/IG51bGw7XG4gICAgICBzZXRTZWxlY3RlZFBsYXlsaXN0KG5ld1BsYXlsaXN0KTtcbiAgICB9LFxuICAgIFtvd25lZFBsYXlsaXN0c10sXG4gICk7XG5cbiAgY29uc3QgcmVtb3ZlVHJhY2tGcm9tUGxheWxpc3QgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAodHJhY2tUb1JlbW92ZTogVHJhY2spOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIGlmICghc2VsZWN0ZWRQbGF5bGlzdCkgcmV0dXJuO1xuICAgICAgYXdhaXQgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXlsaXN0QVBJLnJlbW92ZShzZWxlY3RlZFBsYXlsaXN0LnVyaSwgW1xuICAgICAgICB7IHVpZDogdHJhY2tUb1JlbW92ZS51aWQgfSxcbiAgICAgIF0pO1xuXG4gICAgICBzZXRQbGF5bGlzdFRyYWNrcygocHJldlRyYWNrcykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkVHJhY2tzID0gcHJldlRyYWNrcy5maWx0ZXIoXG4gICAgICAgICAgKHRyYWNrKSA9PiAhKHRyYWNrLnVyaSA9PT0gdHJhY2tUb1JlbW92ZS51cmkgJiYgdHJhY2sudWlkID09PSB0cmFja1RvUmVtb3ZlLnVpZCksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld0R1cGxpY2F0ZUdyb3VwcyA9IGZpbmRQb3RlbnRpYWxEdXBsaWNhdGVzKFxuICAgICAgICAgIHVwZGF0ZWRUcmFja3MsXG4gICAgICAgICAgdHJhY2tQbGF5Q291bnRzLFxuICAgICAgICAgIHRyYWNrSXNyY3MsXG4gICAgICAgICk7XG4gICAgICAgIHNldER1cGxpY2F0ZUdyb3VwcyhuZXdEdXBsaWNhdGVHcm91cHMpO1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRyYWNrcztcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW3NlbGVjdGVkUGxheWxpc3QsIHRyYWNrUGxheUNvdW50cywgdHJhY2tJc3Jjc10sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlVHJhY2sgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoZHVwbGljYXRlQ2F0ZWdvcnk6IER1cGxpY2F0ZUNhdGVnb3J5LCB0cmFja1RvUmVtb3ZlOiBUcmFjayk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuICAgICAgaWYgKCFzZXR0aW5ncy5jb25maXJtU2V0dGluZ3NbZHVwbGljYXRlQ2F0ZWdvcnldKSB7XG4gICAgICAgIGF3YWl0IHJlbW92ZVRyYWNrRnJvbVBsYXlsaXN0KHRyYWNrVG9SZW1vdmUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBDb25maXJtRGlhbG9nKHtcbiAgICAgICAgdGl0bGVUZXh0OiBcIlJlbW92ZSBUcmFja1wiLFxuICAgICAgICBkZXNjcmlwdGlvblRleHQ6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIFwiJHt0cmFja1RvUmVtb3ZlLm5hbWV9XCI/IFRoaXMgY2Fubm90IGJlIHVuZG9uZS5gLFxuICAgICAgICBjb25maXJtVGV4dDogXCJSZW1vdmVcIixcbiAgICAgICAgb25Db25maXJtOiAoKSA9PiB2b2lkIHJlbW92ZVRyYWNrRnJvbVBsYXlsaXN0KHRyYWNrVG9SZW1vdmUpLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBbcmVtb3ZlVHJhY2tGcm9tUGxheWxpc3RdLFxuICApO1xuXG4gIGNvbnN0IHBsYXlsaXN0T3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gb3duZWRQbGF5bGlzdHMubWFwKChwKSA9PiAoeyB2YWx1ZTogcC51cmksIGxhYmVsOiBwLm5hbWUgfSkpLFxuICAgIFtvd25lZFBsYXlsaXN0c10sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbmQtZHVwbGljYXRlc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW5kLWR1cGxpY2F0ZXNfX2hlYWRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaW5kLWR1cGxpY2F0ZXNfX2hlYWRlci1sYWJlbFwiPlNlbGVjdCBQbGF5bGlzdDo8L3NwYW4+XG4gICAgICAgIDxEcm9wZG93blxuICAgICAgICAgIGRpc2FibGVkPXtvd25lZFBsYXlsaXN0cy5sZW5ndGggPT09IDAgfHwgaXNMb2FkaW5nfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQbGF5bGlzdENoYW5nZX1cbiAgICAgICAgICBvcHRpb25zPXtwbGF5bGlzdE9wdGlvbnN9XG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkUGxheWxpc3Q/LnVyaSB8fCBcIlwifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmluZC1kdXBsaWNhdGVzX19sb2FkaW5nXCI+XG4gICAgICAgICAgey8qQHRzLWV4cGVjdC1lcnJvciovfVxuICAgICAgICAgIDxVSS5Qcm9ncmVzc0RvdHMgc2l6ZT17XCJsYXJnZVwifSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPER1cGxpY2F0ZUdyb3VwTGlzdFxuICAgICAgICAgICAgY2F0ZWdvcnk9XCJleGFjdFwiXG4gICAgICAgICAgICBncm91cHM9e2R1cGxpY2F0ZUdyb3Vwcy5leGFjdH1cbiAgICAgICAgICAgIG9uRGVsZXRlPXtoYW5kbGVEZWxldGVUcmFja31cbiAgICAgICAgICAgIHRpdGxlPVwiRXhhY3QgVVJJIE1hdGNoZXNcIlxuICAgICAgICAgICAgdHJhY2tEdXJhdGlvbnM9e3RyYWNrRHVyYXRpb25zfVxuICAgICAgICAgICAgdHJhY2tJc3Jjcz17dHJhY2tJc3Jjc31cbiAgICAgICAgICAgIHRyYWNrUGxheUNvdW50cz17dHJhY2tQbGF5Q291bnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPER1cGxpY2F0ZUdyb3VwTGlzdFxuICAgICAgICAgICAgY2F0ZWdvcnk9XCJpc3JjXCJcbiAgICAgICAgICAgIGdyb3Vwcz17ZHVwbGljYXRlR3JvdXBzLmlzcmN9XG4gICAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlVHJhY2t9XG4gICAgICAgICAgICB0aXRsZT1cIlNhbWUgSVNSQ1wiXG4gICAgICAgICAgICB0cmFja0R1cmF0aW9ucz17dHJhY2tEdXJhdGlvbnN9XG4gICAgICAgICAgICB0cmFja0lzcmNzPXt0cmFja0lzcmNzfVxuICAgICAgICAgICAgdHJhY2tQbGF5Q291bnRzPXt0cmFja1BsYXlDb3VudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RHVwbGljYXRlR3JvdXBMaXN0XG4gICAgICAgICAgICBjYXRlZ29yeT1cInByb2JhYmxlXCJcbiAgICAgICAgICAgIGdyb3Vwcz17ZHVwbGljYXRlR3JvdXBzLnByb2JhYmxlfVxuICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZVRyYWNrfVxuICAgICAgICAgICAgdGl0bGU9XCJTYW1lIFRpdGxlICsgU2hhcmVkIEFydGlzdFwiXG4gICAgICAgICAgICB0cmFja0R1cmF0aW9ucz17dHJhY2tEdXJhdGlvbnN9XG4gICAgICAgICAgICB0cmFja0lzcmNzPXt0cmFja0lzcmNzfVxuICAgICAgICAgICAgdHJhY2tQbGF5Q291bnRzPXt0cmFja1BsYXlDb3VudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RHVwbGljYXRlR3JvdXBMaXN0XG4gICAgICAgICAgICBjYXRlZ29yeT1cImxpa2VseVwiXG4gICAgICAgICAgICBncm91cHM9e2R1cGxpY2F0ZUdyb3Vwcy5saWtlbHl9XG4gICAgICAgICAgICBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlVHJhY2t9XG4gICAgICAgICAgICB0aXRsZT1cIlNhbWUgVGl0bGVcIlxuICAgICAgICAgICAgdHJhY2tEdXJhdGlvbnM9e3RyYWNrRHVyYXRpb25zfVxuICAgICAgICAgICAgdHJhY2tJc3Jjcz17dHJhY2tJc3Jjc31cbiAgICAgICAgICAgIHRyYWNrUGxheUNvdW50cz17dHJhY2tQbGF5Q291bnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPER1cGxpY2F0ZUdyb3VwTGlzdFxuICAgICAgICAgICAgY2F0ZWdvcnk9XCJwb3NzaWJsZVwiXG4gICAgICAgICAgICBncm91cHM9e2R1cGxpY2F0ZUdyb3Vwcy5wb3NzaWJsZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXtoYW5kbGVEZWxldGVUcmFja31cbiAgICAgICAgICAgIHRpdGxlPVwiU2ltaWxhciBUaXRsZVwiXG4gICAgICAgICAgICB0cmFja0R1cmF0aW9ucz17dHJhY2tEdXJhdGlvbnN9XG4gICAgICAgICAgICB0cmFja0lzcmNzPXt0cmFja0lzcmNzfVxuICAgICAgICAgICAgdHJhY2tQbGF5Q291bnRzPXt0cmFja1BsYXlDb3VudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgIlxuICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhgLmZpbmQtZHVwbGljYXRlcyB7XG4gIC0tZmRwLXJhZGl1cy1sZzogMTRweDtcbiAgLS1mZHAtcmFkaXVzOiAxMHB4O1xuICAtLWZkcC1yYWRpdXMtc206IDhweDtcbiAgLS1mZHAtZ2FwOiAxNHB4O1xuICAtLWZkcC1ib3JkZXI6IHJnYmEodmFyKC0tc3BpY2UtcmdiLXNlbGVjdGVkLXJvdyksIDAuMTQpO1xuICAtLWZkcC1ib3JkZXItc3Ryb25nOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjIyKTtcbiAgLS1mZHAtc3VyZmFjZTogdmFyKC0tc3BpY2UtcGxheWVyKTtcbiAgLS1mZHAtc3VyZmFjZS0yOiB2YXIoLS1zcGljZS1wbGF5ZXIpO1xuICAtLWZkcC1vdmVybGF5OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpO1xuICAtLWZkcC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgLS1mZHAtc2hhZG93LXNtOiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtLWZkcC10ZXh0OiB2YXIoLS1zcGljZS10ZXh0KTtcbiAgLS1mZHAtc3VidGV4dDogdmFyKC0tc3BpY2Utc3VidGV4dCk7XG4gIC0tZmRwLWFjY2VudDogdmFyKC0tc3BpY2UtcHJpbWFyeSwgIzFkYjk1NCk7XG5cbiAgLS1mZHAtZXhhY3Q6IDI1NSA5MCA5MDsgLyogI2ZmNWE1YSAqL1xuICAtLWZkcC1pc3JjOiAyNTUgMTQ0IDgwOyAvKiAjZmY5MDUwICovXG4gIC0tZmRwLWxpa2VseTogMjM0IDIzNCAxMDI7IC8qICNlYWVhNjYgKi9cbiAgLS1mZHAtcG9zc2libGU6IDEyOCAyMzkgMTI4OyAvKiAjODBlZjgwICovXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiB2YXIoLS1mZHAtZ2FwKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBhbmltYXRpb246IGZkcC1mYWRlLWluIDI0MG1zIGVhc2Utb3V0IGJvdGg7XG5cbiAgLmZpbmQtZHVwbGljYXRlc19faGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mZHAtc3VyZmFjZSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmRwLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZmRwLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgIC5maW5kLWR1cGxpY2F0ZXNfX2hlYWRlci1sYWJlbCB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6IHZhcigtLWZkcC10ZXh0KTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICB9XG4gIH1cblxuICAuZmluZC1kdXBsaWNhdGVzX19kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZmRwLXN1YnRleHQpO1xuICB9XG5cbiAgLmZpbmQtZHVwbGljYXRlc19fbG9hZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4uZHVwbGljYXRlLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mZHAtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZkcC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1mZHAtcmFkaXVzLWxnKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNpdGlvbjpcbiAgICBib3JkZXItY29sb3IgMjAwbXMgZWFzZSxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmRwLXN1cmZhY2UpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZmRwLWJvcmRlci1zdHJvbmcpO1xuICB9XG5cbiAgLmR1cGxpY2F0ZS1ncm91cF9faGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IHZhcigtLWZkcC10ZXh0KTtcblxuICAgIC5kdXBsaWNhdGUtZ3JvdXBfX2hlYWRpbmctbGVuZ3RoIHtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1mZHAtdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmRwLWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmR1cGxpY2F0ZS1ncm91cF9fbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5kdXBsaWNhdGUtZ3JvdXBfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mZHAtYm9yZGVyKTtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWZkcC1yYWRpdXMpO1xuICAgIHRyYW5zaXRpb246XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yIDE2MG1zIGVhc2UsXG4gICAgICBib3JkZXItY29sb3IgMTYwbXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2VsZWN0ZWQtcm93KSwgMC4wNik7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWZkcC1ib3JkZXItc3Ryb25nKTtcbiAgICB9XG5cbiAgICAmLmR1cGxpY2F0ZS1ncm91cF9faXRlbS0tZXhhY3Qge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYih2YXIoLS1mZHAtZXhhY3QpKTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuXG4gICAgJi5kdXBsaWNhdGUtZ3JvdXBfX2l0ZW0tLWlzcmMge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYih2YXIoLS1mZHAtaXNyYykpO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICAmLmR1cGxpY2F0ZS1ncm91cF9faXRlbS0tbGlrZWx5IHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IodmFyKC0tZmRwLWxpa2VseSkpO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICAmLmR1cGxpY2F0ZS1ncm91cF9faXRlbS0tcG9zc2libGUge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYih2YXIoLS1mZHAtcG9zc2libGUpKTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmR1cGxpY2F0ZS1ncm91cF9fcGxheWJhY2stY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmR1cGxpY2F0ZS1ncm91cF9fcGxheWJhY2stYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjpcbiAgICAgIGJhY2tncm91bmQtY29sb3IgMTQwbXMgZWFzZSxcbiAgICAgIGJvcmRlci1jb2xvciAxNDBtcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNwaWNlLXJnYi1zZWxlY3RlZC1yb3cpLCAwLjA4KTtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZmRwLWJvcmRlcik7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zcGljZS1yZ2Itc2VsZWN0ZWQtcm93KSwgMC4xMik7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zbGlkZXItdGltZSB7XG4gICAgbWluLXdpZHRoOiAzOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdmFyKC0tZmRwLXN1YnRleHQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5kdXBsaWNhdGUtZ3JvdXBfX2R1cGxpY2F0ZXMtbGFiZWwge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tZmRwLXN1YnRleHQpO1xuICB9XG5cbiAgLmR1cGxpY2F0ZS1ncm91cF9fZHVwbGljYXRlcy1saXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAuZHVwbGljYXRlLWdyb3VwX19kdXBsaWNhdGUtbmFtZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1mZHAtdGV4dCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAuZHVwbGljYXRlLWdyb3VwX19kdXBsaWNhdGUtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZkcC1ib3JkZXIpO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmR1cGxpY2F0ZS1ncm91cF9fYWN0aW9ucyB7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgfVxuXG4gIC5kdXBsaWNhdGUtZ3JvdXBfX2R1cGxpY2F0ZS1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgZ2FwOiAxMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmR1cGxpY2F0ZS1ncm91cF9fZHVwbGljYXRlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDZweDtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cblxuICAuZHVwbGljYXRlLWdyb3VwX19kZWxldGUtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxNDI5OyAvKiBTcG90aWZ5IGRhbmdlciAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMzLCAyMCwgNDEsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2l0aW9uOlxuICAgICAgZmlsdGVyIDE0MG1zIGVhc2UsXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zIGVhc2UsXG4gICAgICBib3JkZXItY29sb3IgMTQwbXMgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMywgMjAsIDQxLCAwLjYpO1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDUpO1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNzExMjQ7XG4gICAgfVxuICB9XG59XG5cbi50cmFjay1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBjb2xvcjogdmFyKC0tZmRwLXN1YnRleHQpO1xuXG4gIC50cmFjay1kZXRhaWxzX19saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbn1cblxuLmR1cGxpY2F0ZS1zZXR0aW5ncyB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5kdXBsaWNhdGUtc2V0dGluZ3NfX3NlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgICAuZHVwbGljYXRlLXNldHRpbmdzX19zZWN0aW9uLXRpdGxlIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mZHAtYm9yZGVyKTtcbiAgICB9XG4gIH1cblxuICAuZHVwbGljYXRlLXNldHRpbmdzX19kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLWZkcC1zdWJ0ZXh0KTtcbiAgfVxuXG4gIC5kdXBsaWNhdGUtc2V0dGluZ3NfX29wdGlvbnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5kdXBsaWNhdGUtc2V0dGluZ3NfX29wdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxNSkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZkcC1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWZkcC1yYWRpdXMtc20pO1xuICB9XG5cbiAgLmR1cGxpY2F0ZS1zZXR0aW5nc19fd29yZHMtbGlzdCB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC5kdXBsaWNhdGUtc2V0dGluZ3NfX25vLXdvcmRzIHtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBjb2xvcjogdmFyKC0tZmRwLXN1YnRleHQpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxNSkpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmRwLWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1mZHAtcmFkaXVzLXNtKTtcbiAgICB9XG4gIH1cblxuICAuZHVwbGljYXRlLXNldHRpbmdzX193b3Jkcy11bCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuZHVwbGljYXRlLXNldHRpbmdzX193b3JkLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMTUpKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mZHAtYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1mZHAtcmFkaXVzLXNtKTtcblxuICAgIC5kdXBsaWNhdGUtc2V0dGluZ3NfX3dvcmQtcmVtb3ZlIHtcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDkwLCA5MCwgMC45KSwgcmdiYSgyNTUsIDYwLCA2MCwgMC45KSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgOTAsIDkwLCAwLjM1KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgdHJhbnNmb3JtIDE0MG1zIGVhc2UsXG4gICAgICAgIGJveC1zaGFkb3cgMTYwbXMgZWFzZSxcbiAgICAgICAgZmlsdGVyIDE2MG1zIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMjU1LCA5MCwgOTAsIDAuMjUpO1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmR1cGxpY2F0ZS1zZXR0aW5nc19fYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG5cbiAgICAuZHVwbGljYXRlLXNldHRpbmdzX19yZXNldCB7XG4gICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmRwLWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICAgIHRyYW5zaXRpb246XG4gICAgICAgIGZpbHRlciAxNjBtcyBlYXNlLFxuICAgICAgICB0cmFuc2Zvcm0gMTQwbXMgZWFzZSxcbiAgICAgICAgYm9yZGVyLWNvbG9yIDE2MG1zIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWZkcC1ib3JkZXItc3Ryb25nKTtcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZmluZC1kdXBsaWNhdGVzIDppcyhidXR0b24sIFtyb2xlPVwiYnV0dG9uXCJdLCBhLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSk6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZkcC1hY2NlbnQpLCB0cmFuc3BhcmVudCA0MCUpO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZkcC1hY2NlbnQpLCB0cmFuc3BhcmVudCA1MCUpO1xufVxuXG5Aa2V5ZnJhbWVzIGZkcC1mYWRlLWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIC5kdXBsaWNhdGUtZ3JvdXAge1xuICAgIHBhZGRpbmc6IDEycHg7XG5cbiAgICAuZHVwbGljYXRlLWdyb3VwX19lbXB0eSxcbiAgICAuZHVwbGljYXRlLWdyb3VwX19oZWFkaW5nIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDZweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgfVxufVxuYCk7XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQgc2hlZXQ7XG4gICAgICAgICIsICJpbXBvcnQgeyBwYXJzZVByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9hcGkvcGFyc2VQcm9wcy50c1wiO1xuaW1wb3J0IHsgSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMudHN4XCI7XG5pbXBvcnQgeyBQb3B1cE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3BvcHVwTW9kYWwudHN4XCI7XG5pbXBvcnQgeyBQbGF5bGlzdER1cGxpY2F0ZUZpbmRlciB9IGZyb20gXCIuL21lbnUudHN4XCI7XG5pbXBvcnQgU2V0dGluZ3NNZW51IGZyb20gXCIuL3NldHRpbmdzLnRzeFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCIgd2l0aCB7IHR5cGU6IFwiY3NzXCIgfTtcblxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGVzKTtcblxuaW50ZXJmYWNlIFNlbGVjdGVkUGxheWxpc3Qge1xuICB1cmk6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbi8vIGFkZCBhIGlnbm9yZSBidXR0b24gdG8gbWVudSBzbyByZW1vdmVkIGZyb20gZHVwbGljYXRlIGxpc3Rcbi8vIHdvdWxkIGJlIHBsYXlsaXN0IHNwZWNpZmljPz9cblxuY29uc3Qgc2hvd0R1cGxpY2F0ZUZpbmRlck1vZGFsID0gKFxuICBzZWxlY3RlZFBsYXlsaXN0OiBTZWxlY3RlZFBsYXlsaXN0LFxuICBpbml0aWFsVmlldzogXCJtYWluXCIgfCBcInNldHRpbmdzXCIgPSBcIm1haW5cIixcbikgPT4ge1xuICBjb25zdCByZW5kZXJNb2RhbCA9ICh2aWV3OiBcIm1haW5cIiB8IFwic2V0dGluZ3NcIikgPT4ge1xuICAgIGNvbnN0IGlzU2V0dGluZ3MgPSB2aWV3ID09PSBcInNldHRpbmdzXCI7XG4gICAgUG9wdXBNb2RhbCh7XG4gICAgICB0aXRsZTogaXNTZXR0aW5ncyA/IFwiRmluZCBEdXBsaWNhdGVzIFNldHRpbmdzXCIgOiBcIkZpbmQgRHVwbGljYXRlc1wiLFxuICAgICAgY29udGVudDogaXNTZXR0aW5ncyA/IChcbiAgICAgICAgPFNldHRpbmdzTWVudSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFBsYXlsaXN0RHVwbGljYXRlRmluZGVyIHNlbGVjdGVkUGxheWxpc3Q9e3NlbGVjdGVkUGxheWxpc3R9IC8+XG4gICAgICApLFxuICAgICAgaXNMYXJnZTogdHJ1ZSxcbiAgICAgIGJ1dHRvbnM6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyXG4gICAgICAgICAgICBsYWJlbD17aXNTZXR0aW5ncyA/IFwiQmFjayB0byBEdXBsaWNhdGVzXCIgOiBcIlNldHRpbmdzXCJ9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW9kYWxfX2J1dHRvbiBtb2RhbF9fYnV0dG9uLS0ke2lzU2V0dGluZ3MgPyBcImJhY2tcIiA6IFwic2V0dGluZ3NcIn1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW5kZXJNb2RhbChpc1NldHRpbmdzID8gXCJtYWluXCIgOiBcInNldHRpbmdzXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNTZXR0aW5ncyA/IChcbiAgICAgICAgICAgICAgICA8SWNvbnMuUmVhY3QuZHVwbGljYXRlIHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxJY29ucy5SZWFjdC5zZXR0aW5ncyBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyPlxuICAgICAgICAgIDxTcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXIgbGFiZWw9XCJHaXRIdWJcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbiBtb2RhbF9fYnV0dG9uLS1naXRodWJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihcImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJ5Ym9yaW5naHdsL3NwaWNldGlmeS1leHRlbnNpb25zXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbnMuUmVhY3QuZ2l0aHViIHNpemU9ezE4fSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9TcGljZXRpZnkuUmVhY3RDb21wb25lbnQuVG9vbHRpcFdyYXBwZXI+XG4gICAgICAgIDwvPlxuICAgICAgKSxcbiAgICB9KTtcbiAgfTtcbiAgcmVuZGVyTW9kYWwoaW5pdGlhbFZpZXcpO1xufTtcblxuY29uc3QgZmluZER1cGxpY2F0ZXNNZW51SXRlbSA9IG5ldyBTcGljZXRpZnkuQ29udGV4dE1lbnVWMi5JdGVtKHtcbiAgY2hpbGRyZW46IFwiRmluZCBEdXBsaWNhdGVzXCIsXG4gIGxlYWRpbmdJY29uOiBJY29ucy5IVE1MLmR1cGxpY2F0ZSxcbiAgb25DbGljazogYXN5bmMgKGNvbnRleHQ6IGFueSwgX2l0ZW06IGFueSwgX2V2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCBwYXJzZWQ6IGFueSA9IHBhcnNlUHJvcHMoY29udGV4dC5wcm9wcyk7XG4gICAgY29uc3QgdXJpID0gcGFyc2VkLnVyaTtcbiAgICBjb25zdCBuYW1lID0gcGFyc2VkLm5hbWU7XG4gICAgY29uc3QgdHlwZSA9IFNwaWNldGlmeS5VUkkuZnJvbSh1cmkpPy50eXBlO1xuXG4gICAgY29uc3QgUGxheWxpc3RBUEkgPVxuICAgICAgU3BpY2V0aWZ5LlBsYXRmb3JtLlBsYXlsaXN0QVBJIHx8XG4gICAgICBTcGljZXRpZnkuUGxhdGZvcm0uUmVnaXN0cnkucmVzb2x2ZShTeW1ib2wuZm9yKFwiUGxheWxpc3RBUElcIikpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRQbGF5bGlzdDogU2VsZWN0ZWRQbGF5bGlzdCA9IHtcbiAgICAgIHVyaTogdXJpLFxuICAgICAgbmFtZTpcbiAgICAgICAgbmFtZSB8fFxuICAgICAgICAoXG4gICAgICAgICAgKGF3YWl0IFBsYXlsaXN0QVBJLmdldE1ldGFkYXRhKHVyaSwge30pKSBhcyB1bmtub3duIGFzIHtcbiAgICAgICAgICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgICAgICAgfVxuICAgICAgICApPy5uYW1lIHx8XG4gICAgICAgIFwiXCIsXG4gICAgICB0eXBlOiB0eXBlIHx8IFwiXCIsXG4gICAgfTtcbiAgICBzaG93RHVwbGljYXRlRmluZGVyTW9kYWwoc2VsZWN0ZWRQbGF5bGlzdCk7XG4gIH0sXG4gIGRpdmlkZXI6IFwiYWZ0ZXJcIixcbiAgc2hvdWxkQWRkOiAocHJvcHM6IGFueSwgX3RyaWdnZXI6IGFueSwgX3RhcmdldDogYW55KSA9PiB7XG4gICAgY29uc3QgcGFyc2VkOiBhbnkgPSBwYXJzZVByb3BzKHByb3BzKTtcbiAgICBjb25zdCB0eXBlID0gU3BpY2V0aWZ5LlVSSS5mcm9tKHBhcnNlZC51cmkpPy50eXBlO1xuICAgIHJldHVybiB0eXBlID09PSBTcGljZXRpZnkuVVJJLlR5cGUuUExBWUxJU1QgfHwgdHlwZSA9PT0gU3BpY2V0aWZ5LlVSSS5UeXBlLlBMQVlMSVNUX1YyO1xuICB9LFxufSk7XG5cbmZpbmREdXBsaWNhdGVzTWVudUl0ZW0ucmVnaXN0ZXIoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7OztBQU9PLFNBQVMsV0FBVyxPQUFvRDtBQUM3RSxNQUFJLENBQUMsTUFBTyxRQUFPLENBQUM7QUFFcEIsUUFBTSxTQUF1QixDQUFDO0FBRTlCLFFBQU0sYUFBYSxDQUFDLFFBQXlDLFdBQXlCO0FBQ3BGLFFBQUksQ0FBQyxVQUFVLE9BQU8sV0FBVyxTQUFVO0FBQzNDLGVBQVcsT0FBTyxRQUFRO0FBQ3hCLFVBQUksT0FBTyxPQUFPLFFBQVEsR0FBRyxHQUFHO0FBQzlCLFlBQUksT0FBTyxHQUFHLE1BQU0sUUFBVztBQUM3QixpQkFBTyxHQUFHLElBQUksT0FBTyxHQUFHO0FBQUEsUUFDMUI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFQSxhQUFXLE9BQU8sTUFBTTtBQUN4QixhQUFXLE1BQU0sTUFB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QVEsR0FBRSxJQUFFLEdBQUUsSUFBRSxVQUFVLFFBQU8sSUFBRSxHQUFFLEtBQUk7QUFBQyxjQUFFLFVBQVUsQ0FBQztBQUFFLG1CQUFRLEtBQUssRUFBRSxRQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFBLFFBQUU7QUFBQyxlQUFPO0FBQUEsTUFBQyxHQUFFLEVBQUUsTUFBTSxNQUFLLFNBQVM7QUFBQSxJQUFDO0FBQUUsYUFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBRyxLQUFHLFVBQVUsV0FBUyxFQUFFLFVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEdBQUUsSUFBRSxHQUFFLElBQUksRUFBQyxLQUFHLEVBQUUsS0FBSyxRQUFNLE1BQUksSUFBRSxNQUFNLFVBQVUsTUFBTSxLQUFLLEdBQUUsR0FBRSxDQUFDLElBQUcsRUFBRSxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUcsYUFBTyxFQUFFLE9BQU8sS0FBRyxNQUFNLFVBQVUsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxRQUFJLElBQUUsT0FBTyxhQUFXLE1BQUksYUFBVyxPQUFPLE9BQUssTUFBSSxPQUFLLFlBQVcsSUFBRSxPQUFPLE1BQUssSUFBRSxNQUFNO0FBQVEsV0FBTyxVQUFRLE9BQUssQ0FBQyxFQUFFLFlBQVUsRUFBRSxVQUFRO0FBQVMsYUFBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLGFBQU8sT0FBTyxLQUFHLFlBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxTQUFTLEdBQUU7QUFBQyxVQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBQSxNQUFDLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQyxRQUFJLEtBQUcsT0FBTyxnQkFBZSxLQUFHLENBQUMsRUFBRTtBQUFlLGFBQVMsRUFBRSxHQUFFLEdBQUU7QUFBQyxhQUFPLEdBQUcsS0FBSyxHQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLGFBQU8s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LFlBQVcsR0FBRTtBQUFDLFdBQUcsT0FBTyxLQUFHLFlBQVUsWUFBVyxDQUFDO0FBQUUsaUJBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsR0FBRSxFQUFFLEVBQUUsR0FBRSxHQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUEsTUFBQyxPQUFLO0FBQUMsWUFBSSxJQUFFLEVBQUUsUUFBUSxHQUFHO0FBQUUsWUFBRyxNQUFJLElBQUc7QUFBQyxjQUFJLElBQUUsRUFBRSxPQUFPLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxPQUFPLElBQUUsQ0FBQztBQUFFLGNBQUcsTUFBSSxHQUFHLE9BQUksU0FBTyxFQUFFLENBQUMsS0FBRyxDQUFDLE1BQU0sU0FBUyxDQUFDLENBQUMsSUFBRSxFQUFFLE9BQU8sR0FBRSxDQUFDLElBQUUsT0FBTyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRTtBQUFBLGVBQU07QUFBQyxnQkFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLGFBQUMsQ0FBQyxLQUFHLENBQUMsRUFBRSxHQUFFLENBQUMsT0FBSyxJQUFFLEVBQUUsQ0FBQyxJQUFFLENBQUMsSUFBRyxFQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsVUFBQztBQUFBLFFBQUMsTUFBTSxPQUFJLFNBQU8sRUFBRSxDQUFDLEtBQUcsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxDQUFDLElBQUUsRUFBRSxPQUFPLEdBQUUsQ0FBQyxJQUFFLE9BQU8sRUFBRSxDQUFDLElBQUUsRUFBRSxDQUFDLElBQUU7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxhQUFPLEtBQUcsV0FBUyxFQUFFLEdBQUUsR0FBRSxNQUFNLElBQUUsWUFBVyxLQUFHLENBQUMsRUFBRSxJQUFJLEtBQUssR0FBRSxTQUFTLEdBQUU7QUFBQyxVQUFFLEdBQUUsR0FBRSxNQUFNO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsVUFBSSxJQUFFLENBQUM7QUFBRSxlQUFRLEtBQUssRUFBRSxHQUFFLEdBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFHLGFBQU87QUFBQSxJQUFDO0FBQUMsUUFBSSxLQUFHLENBQUMsRUFBRTtBQUFPLGFBQVMsR0FBRyxHQUFFO0FBQUMsYUFBTyxHQUFHLE1BQU0sQ0FBQyxHQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBSSxLQUFHLGlOQUFpTixNQUFNLEdBQUcsRUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFFLElBQUcsSUFBRyxFQUFFLEVBQUUsSUFBSSxTQUFTLEdBQUU7QUFBQyxhQUFNLENBQUMsT0FBTSxRQUFPLE9BQU8sRUFBRSxJQUFJLFNBQVMsR0FBRTtBQUFDLGVBQU8sSUFBRSxJQUFFO0FBQUEsTUFBTyxDQUFDO0FBQUEsSUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sU0FBUyxHQUFFO0FBQUMsYUFBTyxFQUFFLENBQUM7QUFBQSxJQUFDLENBQUMsR0FBRSxLQUFHLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxHQUFFO0FBQUMsYUFBTyxFQUFFLENBQUM7QUFBQSxJQUFDLENBQUMsQ0FBQztBQUFFLGFBQVMsR0FBRyxHQUFFO0FBQUMsVUFBSSxJQUFFLENBQUM7QUFBRSxlQUFRLEtBQUssRUFBRSxLQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsVUFBRSxDQUFDLElBQUUsQ0FBQyxLQUFHLE9BQU8sS0FBRyxZQUFVLEdBQUcsSUFBSSxFQUFFLFdBQVcsSUFBRSxJQUFFLEdBQUcsQ0FBQztBQUFBLE1BQUM7QUFBQyxhQUFPO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsZUFBUSxLQUFLLEVBQUUsS0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFFLFFBQU07QUFBRyxhQUFNO0FBQUEsSUFBRTtBQUFDLFFBQUksS0FBRztBQUFLLGFBQVMsR0FBRyxHQUFFO0FBQUMsV0FBRyxvQkFBSTtBQUFRLFVBQUksSUFBRSxHQUFHLENBQUM7QUFBRSxhQUFPLEtBQUcsTUFBSztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLFVBQUcsQ0FBQyxLQUFHLE9BQU8sS0FBRyxTQUFTLFFBQU87QUFBRSxVQUFJLElBQUUsR0FBRyxJQUFJLENBQUM7QUFBRSxVQUFHLEVBQUUsUUFBTztBQUFFLFVBQUcsRUFBRSxDQUFDLEdBQUU7QUFBQyxZQUFFLENBQUMsR0FBRSxHQUFHLElBQUksR0FBRSxDQUFDO0FBQUUsaUJBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsR0FBRSxFQUFFLEVBQUUsR0FBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUFBLE1BQUMsV0FBUyxHQUFHLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBRTtBQUFBLFdBQU07QUFBQyxZQUFJLElBQUUsR0FBRyxDQUFDO0FBQUUsWUFBRSxNQUFJLE9BQU8sWUFBVSxDQUFDLElBQUUsT0FBTyxPQUFPLENBQUMsR0FBRSxHQUFHLElBQUksR0FBRSxDQUFDO0FBQUUsaUJBQVEsS0FBSyxFQUFFLEdBQUUsR0FBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLE1BQUU7QUFBQyxhQUFPO0FBQUEsSUFBQztBQUFDLFFBQUksS0FBRyxDQUFDLEVBQUU7QUFBUyxhQUFTLEdBQUcsR0FBRTtBQUFDLGFBQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxNQUFNLEdBQUUsRUFBRTtBQUFBLElBQUM7QUFBQyxRQUFJLEtBQUcsT0FBTyxTQUFPLE1BQUksT0FBTyxXQUFTLGNBQWEsS0FBRyxPQUFPLE1BQUksV0FBUyxTQUFTLEdBQUU7QUFBQyxVQUFJO0FBQUUsYUFBTyxLQUFHLFNBQU8sSUFBRSxFQUFFLEVBQUUsTUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBLElBQUMsSUFBRSxXQUFVO0FBQUMsYUFBTztBQUFBLElBQUk7QUFBRSxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsUUFBUSxDQUFDO0FB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UTtBQUFBLElBQUM7QUFBQyxPQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUU7QUFBRSxRQUFJLEtBQUcsR0FBRyxPQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsYUFBTyxFQUFFLENBQUMsSUFBRSxJQUFFLFNBQVE7QUFBQSxJQUFDLEdBQUUsQ0FBQyxDQUFDLEdBQUUsS0FBRyxJQUFHLElBQUUsR0FBRyxPQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLElBQUU7QUFBUSxlQUFTLEVBQUUsR0FBRSxHQUFFO0FBQUMsYUFBSyxPQUFLLEdBQUUsSUFBRSxPQUFPLEtBQUcsWUFBVSxLQUFLLFVBQVEsR0FBRyxPQUFPLENBQUMsRUFBRSxPQUFPLElBQUU7QUFBQSxLQUN6ZCxJQUFFLEVBQUUsR0FBRSxLQUFLLFFBQU0sS0FBRyxRQUFNLE9BQU8sS0FBRyxhQUFXLEtBQUssVUFBUSxHQUFHLE9BQU8sRUFBRSxNQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxHQUFFLEtBQUssUUFBTSxNQUFJLEtBQUssVUFBUSxHQUFHLENBQUMsS0FBRyxHQUFFLEtBQUssUUFBTTtBQUFBLE1BQUs7QUFBQyxhQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFFLEVBQUUsQ0FBQyxJQUFFLEdBQUU7QUFBQSxJQUFDLEdBQUUsQ0FBQyxDQUFDO0FBQUUsTUFBRSxTQUFPLGFBQVksRUFBRSxPQUFLLFdBQVUsRUFBRSxRQUFNO0FBQVcsUUFBSSxLQUFHLEdBQUcsT0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLGFBQU8sRUFBRSxJQUFFLE9BQU8sSUFBRSxFQUFFLENBQUMsR0FBRTtBQUFBLElBQUMsR0FBRSxDQUFDLENBQUM7QUFBRSxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBRyxDQUFDLEtBQUcsYUFBYSxNQUFJLGFBQWEsYUFBVyxhQUFhLGVBQWEsQ0FBQyxFQUFFLFFBQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQU87QUFBRSxVQUFJLElBQUUsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUcsRUFBRSxTQUFRLENBQUM7QUFBRSxhQUFNLFdBQVUsS0FBRyxHQUFHLEdBQUUsU0FBUSxFQUFDLEtBQUksV0FBVTtBQUFDLGVBQU8sS0FBSyxNQUFNO0FBQUEsTUFBSyxFQUFDLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQyxRQUFJLEtBQUcsR0FBRyxPQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsYUFBTSxDQUFDLFVBQVMsUUFBTyxPQUFPLEVBQUUsUUFBUSxDQUFDLE1BQUksT0FBSyxFQUFFLElBQUUsT0FBTyxJQUFFLEVBQUUsQ0FBQyxJQUFHO0FBQUEsSUFBQyxHQUFFLENBQUMsQ0FBQztBQUFFLE9BQUcsY0FBWSxJQUFHLEdBQUcsYUFBVyxJQUFHLEdBQUcsWUFBVTtBQUFHLGFBQVMsSUFBRztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLGFBQU87QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLGFBQU8sS0FBRyxRQUFNLE1BQUksS0FBRyxJQUFFLFNBQVMsR0FBRTtBQUFDLGVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLGFBQU8sV0FBVTtBQUFDLFVBQUUsTUFBTSxNQUFLLFNBQVMsR0FBRSxFQUFFLE1BQU0sTUFBSyxTQUFTO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsYUFBTyxNQUFJLElBQUUsSUFBRSxXQUFVO0FBQUMsWUFBSSxJQUFFLEVBQUUsTUFBTSxNQUFLLFNBQVM7QUFBRSxjQUFJLFdBQVMsVUFBVSxDQUFDLElBQUU7QUFBRyxZQUFJLElBQUUsS0FBSyxXQUFVLElBQUUsS0FBSztBQUFRLGFBQUssWUFBVSxNQUFLLEtBQUssVUFBUTtBQUFLLFlBQUksSUFBRSxFQUFFLE1BQU0sTUFBSyxTQUFTO0FBQUUsZUFBTyxNQUFJLEtBQUssWUFBVSxLQUFLLFlBQVUsR0FBRyxHQUFFLEtBQUssU0FBUyxJQUFFLElBQUcsTUFBSSxLQUFLLFVBQVEsS0FBSyxVQUFRLEdBQUcsR0FBRSxLQUFLLE9BQU8sSUFBRSxJQUFHLE1BQUksU0FBTyxJQUFFO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsYUFBTyxNQUFJLElBQUUsSUFBRSxXQUFVO0FBQUMsVUFBRSxNQUFNLE1BQUssU0FBUztBQUFFLFlBQUksSUFBRSxLQUFLLFdBQVUsSUFBRSxLQUFLO0FBQVEsYUFBSyxZQUFVLEtBQUssVUFBUSxNQUFLLEVBQUUsTUFBTSxNQUFLLFNBQVMsR0FBRSxNQUFJLEtBQUssWUFBVSxLQUFLLFlBQVUsR0FBRyxHQUFFLEtBQUssU0FBUyxJQUFFLElBQUcsTUFBSSxLQUFLLFVBQVEsS0FBSyxVQUFRLEdBQUcsR0FBRSxLQUFLLE9BQU8sSUFBRTtBQUFBLE1BQUU7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLGFBQU8sTUFBSSxJQUFFLElBQUUsU0FBUyxHQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUUsTUFBTSxNQUFLLFNBQVM7QUFBRSxVQUFFLEdBQUUsQ0FBQztBQUFFLFlBQUksSUFBRSxLQUFLLFdBQVUsSUFBRSxLQUFLO0FBQVEsYUFBSyxZQUFVLE1BQUssS0FBSyxVQUFRO0FBQUssWUFBSSxJQUFFLEVBQUUsTUFBTSxNQUFLLFNBQVM7QUFBRSxlQUFPLE1BQUksS0FBSyxZQUFVLEtBQUssWUFBVSxHQUFHLEdBQUUsS0FBSyxTQUFTLElBQUUsSUFBRyxNQUFJLEtBQUssVUFBUSxLQUFLLFVBQVEsR0FBRyxHQUFFLEtBQUssT0FBTyxJQUFFLElBQUcsTUFBSSxTQUFPLE1BQUksU0FBTyxTQUFPLElBQUUsRUFBRSxHQUFFLENBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxhQUFPLE1BQUksSUFBRSxJQUFFLFdBQVU7QUFBQyxlQUFPLEVBQUUsTUFBTSxNQUFLLFNBQVMsTUFBSSxRQUFHLFFBQUcsRUFBRSxNQUFNLE1BQUssU0FBUztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLGFBQU8sTUFBSSxJQUFFLElBQUUsV0FBVTtBQUFDLFlBQUksSUFBRSxFQUFFLE1BQU0sTUFBSyxTQUFTO0FBQUUsWUFBRyxLQUFHLE9BQU8sRUFBRSxRQUFNLFlBQVc7QUFBQyxtQkFBUSxJQUFFLE1BQUssSUFBRSxVQUFVLFFBQU8sSUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUFFLE1BQUssR0FBRSxDQUFDLElBQUUsVUFBVSxDQUFDO0FBQUUsaUJBQU8sRUFBRSxLQUFLLFdBQVU7QUFBQyxtQkFBTyxFQUFFLE1BQU0sR0FBRSxDQUFDO0FBQUEsVUFBQyxDQUFDO0FBQUEsUUFBQztBQUFDLGVBQU8sRUFBRSxNQUFNLE1BQUssU0FBUztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsUUFBSSxLQUFHLE9BQU8sV0FBUyxPQUFLLDZDQUE2QyxLQUFLLFNBQVMsSUFBSTtBQUFFLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxXQUFHO0FBQUEsSUFBQztBQUFDLFFBQUksS0FBRyxDQUFDLEdBQUUsS0FBRyxLQUFJLEtBQUcsT0FBTyxVQUFRLE1BQUksQ0FBQyxJQUFFLFdBQVU7QUFBQyxVQUFJLElBQUUsUUFBUSxRQUFRO0FBQUUsVUFBRyxPQUFPLFNBQU8sT0FBSyxDQUFDLE9BQU8sT0FBTyxRQUFNLENBQUMsR0FBRSxHQUFHLENBQUMsR0FBRSxDQUFDO0FBQUUsVUFBSSxJQUFFLE9BQU8sT0FBTyxPQUFPLFdBQVUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBRSxhQUFNLENBQUMsR0FBRSxHQUFHLENBQUMsR0FBRSxDQUFDO0FBQUEsSUFBQyxFQUFFLEdBQUUsS0FBRyxHQUFHLENBQUMsR0FBRSxLQUFHLEdBQUcsQ0FBQyxHQUFFLEtBQUcsR0FBRyxDQUFDLEdBQUUsS0FBRyxNQUFJLEdBQUcsTUFBSyxLQUFHLE1BQUksR0FBRyxhQUFZLEtBQUcsQ0FBQyxDQUFDO0FBQUcsYUFBUyxLQUFJO0FBQUMscUJBQWUsRUFBRTtBQUFBLElBQUM7QUFBQyxRQUFJLEtBQUcsU0FBUyxHQUFFLEdBQUU7QUFBQyxTQUFHLEtBQUssQ0FBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLE9BQUssR0FBRyxHQUFFLEtBQUc7QUFBQSxJQUFHLEdBQUUsS0FBRyxNQUFHLEtBQUcsTUFBRyxLQUFHLENBQUMsR0FBRSxLQUFHLENBQUMsR0FBRSxLQUFHLElBQUcsS0FBRyxFQUFDLElBQUcsVUFBUyxRQUFPLE1BQUcsS0FBSSxHQUFFLFlBQVcsQ0FBQyxHQUFFLGFBQVksR0FBRSxLQUFJLE9BQUcsS0FBSSxDQUFDLEdBQUUsVUFBUyxFQUFDLEdBQUUsSUFBRSxJQUFHLEtBQUcsQ0FBQyxHQUFFLEtBQUcsR0FBRSxLQUFHLENBQUM7QUFBRSxhQUFTLEVBQUUsR0FBRTtBQUFDLFVBQUcsT0FBTyxRQUFNLFNBQVMsT0FBTSxJQUFJLFVBQVUsc0NBQXNDO0FBQUUsV0FBSyxhQUFXLENBQUMsR0FBRSxLQUFLLE9BQUs7QUFBRyxVQUFJLElBQUUsS0FBSyxPQUFLO0FBQUUsVUFBRyxPQUFPLEtBQUcsWUFBVztBQUFDLFlBQUcsTUFBSSxHQUFHLE9BQU0sSUFBSSxVQUFVLGdCQUFnQjtBQUFFLGFBQUssU0FBTyxVQUFVLENBQUMsR0FBRSxLQUFLLFNBQU8sVUFBVSxDQUFDLEdBQUUsS0FBSyxXQUFTLFNBQUksR0FBRyxNQUFLLEtBQUssTUFBTTtBQUFFO0FBQUEsTUFBTTtBQUFDLFdBQUssU0FBTyxNQUFLLEtBQUssU0FBTyxNQUFLLEVBQUUsRUFBRSxLQUFJLEdBQUcsTUFBSyxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUksS0FBRyxFQUFDLEtBQUksV0FBVTtBQUFDLFVBQUksSUFBRSxHQUFFLElBQUU7QUFBRyxlQUFTLEVBQUUsR0FBRSxHQUFFO0FBQUMsWUFBSSxJQUFFLE1BQUssSUFBRSxDQUFDLEVBQUUsV0FBUyxNQUFJLEtBQUcsTUFBSSxLQUFJLElBQUUsS0FBRyxDQUFDLEdBQUcsR0FBRSxJQUFFLElBQUksRUFBRSxTQUFTLEdBQUUsR0FBRTtBQUFDLGFBQUcsR0FBRSxJQUFJLEdBQUcsR0FBRyxHQUFFLEdBQUUsR0FBRSxDQUFDLEdBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxDQUFDLEdBQUUsR0FBRSxHQUFFLENBQUMsQ0FBQztBQUFBLFFBQUMsQ0FBQztBQUFFLGVBQU8sS0FBSyxpQkFBZSxFQUFFLGVBQWEsS0FBSyxlQUFjO0FBQUEsTUFBQztBQUFDLGFBQU8sRUFBRSxZQUFVLElBQUc7QUFBQSxJQUFDLEdBQUUsS0FBSSxTQUFTLEdBQUU7QUFBQyxTQUFHLE1BQUssUUFBTyxLQUFHLEVBQUUsY0FBWSxLQUFHLEtBQUcsRUFBQyxLQUFJLFdBQVU7QUFBQyxlQUFPO0FBQUEsTUFBQyxHQUFFLEtBQUksR0FBRyxJQUFHLENBQUM7QUFBQSxJQUFDLEVBQUM7QUFBRSxPQUFHLEVBQUUsV0FBVSxFQUFDLE1BQUssSUFBRyxPQUFNLFNBQVMsR0FBRSxHQUFFO0FBQUMsU0FBRyxNQUFLLElBQUksR0FBRyxNQUFLLE1BQUssR0FBRSxHQUFFLENBQUMsQ0FBQztBQUFBLElBQUMsR0FBRSxPQUFNLFNBQVMsR0FBRTtBQUFDLFVBQUcsVUFBVSxXQUFTLEVBQUUsUUFBTyxLQUFLLEtBQUssTUFBSyxDQUFDO0FBQUUsVUFBSSxJQUFFLFVBQVUsQ0FBQyxHQUFFLElBQUUsVUFBVSxDQUFDO0FBQUUsYUFBTyxPQUFPLEtBQUcsYUFBVyxLQUFLLEtBQUssTUFBSyxTQUFTLEdBQUU7QUFBQyxlQUFPLGFBQWEsSUFBRSxFQUFFLENBQUMsSUFBRSxHQUFHLENBQUM7QUFBQSxNQUFDLENBQUMsSUFBRSxLQUFLLEtBQUssTUFBSyxTQUFTLEdBQUU7QUFBQyxlQUFPLEtBQUcsRUFBRSxTQUFPLElBQUUsRUFBRSxDQUFDLElBQUUsR0FBRyxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQyxHQUFFLFNBQVEsU0FBUyxHQUFFO0FBQUMsYUFBTyxLQUFLLEtBQUssU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxXQUFVO0FBQUMsaUJBQU87QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDLEdBQUUsU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxXQUFVO0FBQUMsaUJBQU8sR0FBRyxDQUFDO0FBQUEsUUFBQyxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQyxHQUFFLFNBQVEsU0FBUyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUU7QUFBSyxhQUFPLElBQUUsSUFBRSxJQUFFLElBQUksRUFBRSxTQUFTLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxXQUFXLFdBQVU7QUFBQyxpQkFBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUFBLFFBQUMsR0FBRSxDQUFDO0FBQUUsVUFBRSxLQUFLLEdBQUUsQ0FBQyxFQUFFLFFBQVEsYUFBYSxLQUFLLE1BQUssQ0FBQyxDQUFDO0FBQUEsTUFBQyxDQUFDLElBQUU7QUFBQSxJQUFJLEVBQUMsQ0FBQyxHQUFFLE9BQU8sU0FBTyxPQUFLLE9BQU8sZUFBYSxHQUFHLEVBQUUsV0FBVSxPQUFPLGFBQVksZUFBZSxHQUFFLEdBQUcsTUFBSSxHQUFHO0FBQUUsYUFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQUssY0FBWSxPQUFPLEtBQUcsYUFBVyxJQUFFLE1BQUssS0FBSyxhQUFXLE9BQU8sS0FBRyxhQUFXLElBQUUsTUFBSyxLQUFLLFVBQVEsR0FBRSxLQUFLLFNBQU8sR0FBRSxLQUFLLE1BQUk7QUFBQSxJQUFDO0FBQUMsT0FBRyxHQUFFLEVBQUMsS0FBSSxXQUFVO0FBQUMsVUFBSSxJQUFFLEdBQUcsTUFBTSxNQUFLLFNBQVMsRUFBRSxJQUFJLEVBQUU7QUFBRSxhQUFPLElBQUksRUFBRSxTQUFTLEdBQUUsR0FBRTtBQUFDLFVBQUUsV0FBUyxLQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUUsWUFBSSxJQUFFLEVBQUU7QUFBTyxVQUFFLFFBQVEsU0FBUyxHQUFFLEdBQUU7QUFBQyxpQkFBTyxFQUFFLFFB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Q0FBQyxDQUFDO0FBQUEsTUFBQyxTQUFPLEdBQUU7QUFBQyxXQUFHLEdBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFVBQUcsR0FBRyxLQUFLLENBQUMsR0FBRSxFQUFFLFdBQVMsTUFBSztBQUFDLFlBQUksSUFBRSxFQUFFLFFBQU0sR0FBRztBQUFFLFlBQUUsR0FBRyxDQUFDLEdBQUUsRUFBRSxTQUFPLE9BQUcsRUFBRSxTQUFPLEdBQUUsR0FBRyxDQUFDLEdBQUUsR0FBRyxDQUFDLEdBQUUsS0FBRyxHQUFHO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFO0FBQVcsUUFBRSxhQUFXLENBQUM7QUFBRSxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLEdBQUUsRUFBRSxFQUFFLElBQUcsR0FBRSxFQUFFLENBQUMsQ0FBQztBQUFFLFVBQUksSUFBRSxFQUFFO0FBQUssUUFBRSxFQUFFLE9BQUssRUFBRSxTQUFTLEdBQUUsT0FBSyxNQUFJLEVBQUUsSUFBRyxHQUFHLFdBQVU7QUFBQyxVQUFFLE9BQUssS0FBRyxHQUFHO0FBQUEsTUFBQyxHQUFFLENBQUMsQ0FBQztBQUFBLElBQUU7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBRyxFQUFFLFdBQVMsTUFBSztBQUFDLFVBQUUsV0FBVyxLQUFLLENBQUM7QUFBRTtBQUFBLE1BQU07QUFBQyxVQUFJLElBQUUsRUFBRSxTQUFPLEVBQUUsY0FBWSxFQUFFO0FBQVcsVUFBRyxNQUFJLEtBQUssU0FBTyxFQUFFLFNBQU8sRUFBRSxVQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU07QUFBRSxRQUFFLEVBQUUsSUFBSSxLQUFJLEVBQUUsSUFBRyxHQUFHLElBQUcsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUc7QUFBQyxZQUFJLEdBQUUsSUFBRSxFQUFFO0FBQU8sU0FBQyxFQUFFLFVBQVEsR0FBRyxXQUFTLEtBQUcsQ0FBQyxJQUFHLElBQUUsTUFBSSxFQUFFLGVBQWEsRUFBRSxhQUFhLElBQUksV0FBVTtBQUFDLGlCQUFPLEVBQUUsQ0FBQztBQUFBLFFBQUMsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsRUFBRSxVQUFRLEdBQUcsUUFBUSxDQUFDLE1BQUksTUFBSSxHQUFHLENBQUMsR0FBRSxFQUFFLFFBQVEsQ0FBQztBQUFBLE1BQUMsU0FBTyxHQUFFO0FBQUMsVUFBRSxPQUFPLENBQUM7QUFBQSxNQUFDLFVBQUM7QUFBUSxVQUFFLE9BQUssS0FBRyxHQUFHLEdBQUUsRUFBRSxFQUFFLElBQUksT0FBSyxFQUFFLElBQUksU0FBUztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxLQUFJO0FBQUMsU0FBRyxJQUFHLFdBQVU7QUFBQyxXQUFHLEtBQUcsR0FBRztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxhQUFTLEtBQUk7QUFBQyxVQUFJLElBQUU7QUFBRyxhQUFPLEtBQUcsT0FBRyxLQUFHLE9BQUc7QUFBQSxJQUFDO0FBQUMsYUFBUyxLQUFJO0FBQUMsVUFBSSxHQUFFLEdBQUU7QUFBRTtBQUFHLGVBQUssR0FBRyxTQUFPLElBQUcsTUFBSSxJQUFFLElBQUcsS0FBRyxDQUFDLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBRSxHQUFFLElBQUUsR0FBRSxFQUFFLEdBQUU7QUFBQyxjQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsWUFBRSxDQUFDLEVBQUUsTUFBTSxNQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUEsUUFBQztBQUFBLGFBQU8sR0FBRyxTQUFPO0FBQUcsV0FBRyxNQUFHLEtBQUc7QUFBQSxJQUFFO0FBQUMsYUFBUyxLQUFJO0FBQUMsVUFBSSxJQUFFO0FBQUcsV0FBRyxDQUFDLEdBQUUsRUFBRSxRQUFRLFNBQVMsR0FBRTtBQUFDLFVBQUUsS0FBSyxZQUFZLEtBQUssTUFBSyxFQUFFLFFBQU8sQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUcsR0FBRSxFQUFFLENBQUMsRUFBRTtBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLGVBQVMsSUFBRztBQUFDLFVBQUUsR0FBRSxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRSxDQUFDO0FBQUEsTUFBQztBQUFDLFNBQUcsS0FBSyxDQUFDLEdBQUUsRUFBRSxJQUFHLEdBQUcsV0FBVTtBQUFDLFVBQUUsT0FBSyxLQUFHLEdBQUc7QUFBQSxNQUFDLEdBQUUsQ0FBQyxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsU0FBRyxLQUFLLFNBQVMsR0FBRTtBQUFDLGVBQU8sRUFBRSxXQUFTLEVBQUU7QUFBQSxNQUFNLENBQUMsS0FBRyxHQUFHLEtBQUssQ0FBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLGVBQVEsSUFBRSxHQUFHLFFBQU8sSUFBRyxLQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsV0FBUyxFQUFFLFFBQU87QUFBQyxXQUFHLE9BQU8sR0FBRSxDQUFDO0FBQUU7QUFBQSxNQUFNO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsYUFBTyxJQUFJLEVBQUUsSUFBRyxPQUFHLENBQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRTtBQUFFLGFBQU8sV0FBVTtBQUFDLFlBQUksSUFBRSxHQUFHLEdBQUUsSUFBRTtBQUFFLFlBQUc7QUFBQyxpQkFBTyxHQUFHLEdBQUUsSUFBRSxHQUFFLEVBQUUsTUFBTSxNQUFLLFNBQVM7QUFBQSxRQUFDLFNBQU8sR0FBRTtBQUFDLGVBQUcsRUFBRSxDQUFDO0FBQUEsUUFBQyxVQUFDO0FBQVEsYUFBRyxHQUFFLEtBQUUsR0FBRSxLQUFHLEdBQUc7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxRQUFJLElBQUUsRUFBQyxRQUFPLEdBQUUsUUFBTyxHQUFFLElBQUcsRUFBQyxHQUFFLEtBQUcsR0FBRSxLQUFHLENBQUMsR0FBRSxLQUFHLEdBQUUsS0FBRyxHQUFFLEtBQUc7QUFBRSxhQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxHQUFFLElBQUUsT0FBTyxPQUFPLENBQUM7QUFBRSxRQUFFLFNBQU8sR0FBRSxFQUFFLE1BQUksR0FBRSxFQUFFLFNBQU8sT0FBRyxFQUFFLEtBQUcsRUFBRSxJQUFHLEdBQUcsS0FBSSxFQUFFLE1BQUksS0FBRyxFQUFDLFNBQVEsR0FBRSxhQUFZLEVBQUMsT0FBTSxHQUFFLGNBQWEsTUFBRyxVQUFTLEtBQUUsR0FBRSxLQUFJLEVBQUUsS0FBSSxNQUFLLEVBQUUsTUFBSyxZQUFXLEVBQUUsWUFBVyxLQUFJLEVBQUUsS0FBSSxTQUFRLEVBQUUsU0FBUSxRQUFPLEVBQUUsT0FBTSxJQUFFLENBQUMsR0FBRSxLQUFHLEVBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxFQUFFLEtBQUksRUFBRSxXQUFTLFdBQVU7QUFBQyxVQUFFLEtBQUssT0FBTyxPQUFLLEtBQUssT0FBTyxTQUFTO0FBQUEsTUFBQztBQUFFLFVBQUksSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxhQUFPLEVBQUUsUUFBTSxLQUFHLEVBQUUsU0FBUyxHQUFFO0FBQUEsSUFBQztBQUFDLGFBQVMsS0FBSTtBQUFDLGFBQU8sRUFBRSxPQUFLLEVBQUUsS0FBRyxFQUFFLEtBQUksRUFBRSxFQUFFLFFBQU8sRUFBRSxVQUFRLElBQUcsRUFBRTtBQUFBLElBQUU7QUFBQyxhQUFTLEtBQUk7QUFBQyxhQUFPLEVBQUUsVUFBUSxFQUFFLEVBQUUsV0FBUyxNQUFJLEVBQUUsS0FBRyxJQUFHLEVBQUUsU0FBTyxFQUFFLFNBQU8sSUFBRyxRQUFJO0FBQUEsSUFBRTtBQUFDLEtBQUMsS0FBRyxJQUFJLFFBQVEsZUFBZSxNQUFJLE9BQUssS0FBRyxLQUFHO0FBQUcsYUFBUyxHQUFHLEdBQUU7QUFBQyxhQUFPLEVBQUUsVUFBUSxLQUFHLEVBQUUsZ0JBQWMsTUFBSSxHQUFHLEdBQUUsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGVBQU8sR0FBRyxHQUFFO0FBQUEsTUFBQyxHQUFFLFNBQVMsR0FBRTtBQUFDLGVBQU8sR0FBRyxHQUFFLEVBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQyxLQUFHO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsUUFBRSxLQUFJLENBQUMsRUFBRSxVQUFRLEVBQUUsRUFBRSxXQUFTLE9BQUssRUFBRSxTQUFPLEVBQUUsU0FBTyxFQUFFLEtBQUcsSUFBRyxHQUFHLEtBQUssQ0FBQyxHQUFFLEdBQUcsR0FBRSxJQUFFO0FBQUEsSUFBQztBQUFDLGFBQVMsS0FBSTtBQUFDLFVBQUksSUFBRSxHQUFHLEdBQUcsU0FBTyxDQUFDO0FBQUUsU0FBRyxJQUFJLEdBQUUsR0FBRyxHQUFFLEtBQUU7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRTtBQUFFLFdBQUksSUFBRSxFQUFFLFdBQVMsQ0FBQyxRQUFNLE1BQUksS0FBRyxPQUFLLENBQUMsRUFBRSxNQUFJLE1BQUksT0FBSyxlQUFlLElBQUUsR0FBRyxLQUFLLE1BQUssQ0FBQyxJQUFFLEVBQUUsR0FBRSxNQUFJLE1BQUksSUFBRSxHQUFFLE1BQUksT0FBSyxHQUFHLE1BQUksR0FBRyxJQUFHLEtBQUk7QUFBQyxZQUFJLElBQUUsR0FBRyxJQUFJLFNBQVEsSUFBRSxFQUFFO0FBQUksU0FBQyxFQUFFLFVBQVEsRUFBRSxZQUFVLE9BQU8sZUFBZSxHQUFFLFdBQVUsRUFBRSxXQUFXLEdBQUUsRUFBRSxNQUFJLEVBQUUsS0FBSSxFQUFFLE9BQUssRUFBRSxNQUFLLEVBQUUsVUFBUSxFQUFFLFNBQVEsRUFBRSxTQUFPLEVBQUUsUUFBTyxFQUFFLGVBQWEsRUFBRSxhQUFXLEVBQUUsYUFBWSxFQUFFLFFBQU0sRUFBRSxNQUFJLEVBQUU7QUFBQSxNQUFLO0FBQUEsSUFBQztBQUFDLGFB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QztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsUUFBSSxLQUFHLFVBQVMsS0FBRyxVQUFTLEtBQUcsS0FBRyxHQUFFLEtBQUcscUdBQW9HLEtBQUcsb0JBQW1CLEtBQUcsQ0FBQyxHQUFFLEtBQUcsYUFBWSxLQUFHLFlBQVcsS0FBRztBQUFZLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxhQUFPLElBQUUsSUFBRSxXQUFVO0FBQUMsZUFBTyxFQUFFLE1BQU0sTUFBSyxTQUFTLEtBQUcsRUFBRSxNQUFNLE1BQUssU0FBUztBQUFBLE1BQUMsSUFBRSxJQUFFO0FBQUEsSUFBQztBQUFDLFFBQUksS0FBRyxFQUFDLE1BQUssR0FBRSxPQUFNLEtBQUcsR0FBRSxXQUFVLE9BQUcsT0FBTSxDQUFDLENBQUMsQ0FBQyxHQUFFLFdBQVUsTUFBRTtBQUFFLGFBQVMsR0FBRyxHQUFFO0FBQUMsYUFBTyxPQUFPLEtBQUcsWUFBVSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUUsU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLENBQUMsTUFBSSxVQUFRLEtBQUssTUFBSSxJQUFFLEdBQUcsQ0FBQyxHQUFFLE9BQU8sRUFBRSxDQUFDLElBQUc7QUFBQSxNQUFDLElBQUUsU0FBUyxHQUFFO0FBQUMsZUFBTztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxLQUFJO0FBQUMsWUFBTSxFQUFFLEtBQUs7QUFBQSxJQUFDO0FBQUMsYUFBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUc7QUFBQyxZQUFJLElBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRSxHQUFHLENBQUM7QUFBRSxZQUFHLE1BQUksRUFBRSxRQUFPLE1BQUksVUFBUSxJQUFFLE1BQUksVUFBUSxLQUFHLE1BQUksV0FBUyxJQUFFLE1BQUksV0FBUyxLQUFHLE1BQUksV0FBUyxJQUFFLE1BQUksV0FBUyxLQUFHLE1BQUksU0FBTyxJQUFFLE1BQUksU0FBTyxNQUFJO0FBQUcsZ0JBQU8sR0FBRTtBQUFBLFVBQUMsS0FBSTtBQUFBLFVBQVMsS0FBSTtBQUFBLFVBQU8sS0FBSTtBQUFTLG1CQUFPLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxLQUFHO0FBQUEsVUFBRSxLQUFJO0FBQVMsbUJBQU8sR0FBRyxHQUFHLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztBQUFBLFVBQUUsS0FBSTtBQUFRLG1CQUFPLEdBQUcsR0FBRSxDQUFDO0FBQUEsUUFBQztBQUFBLE1BQUMsUUFBTTtBQUFBLE1BQUM7QUFBQyxhQUFPO0FBQUEsSUFBRztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxlQUFRLElBQUUsRUFBRSxRQUFPLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUUsWUFBRyxNQUFJLEVBQUUsUUFBTztBQUFBLE1BQUM7QUFBQyxhQUFPLE1BQUksSUFBRSxJQUFFLElBQUUsSUFBRSxLQUFHO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxlQUFRLElBQUUsRUFBRSxRQUFPLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQU8sRUFBRSxDQUFDLElBQUUsRUFBRSxDQUFDLElBQUUsS0FBRztBQUFFLGFBQU8sTUFBSSxJQUFFLElBQUUsSUFBRSxJQUFFLEtBQUc7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUU7QUFBQyxVQUFJLElBQUUsT0FBTztBQUFFLFVBQUcsTUFBSSxTQUFTLFFBQU87QUFBRSxVQUFHLFlBQVksT0FBTyxDQUFDLEVBQUUsUUFBTTtBQUFTLFVBQUksSUFBRSxHQUFHLENBQUM7QUFBRSxhQUFPLE1BQUksZ0JBQWMsV0FBUztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFD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RUFBRSxHQUFFLENBQUM7QUFBQSxZQUFDLENBQUM7QUFBQSxVQUFDLElBQUUsU0FBUyxHQUFFO0FBQUMsbUJBQU8sRUFBRSxHQUFFLEdBQUcsR0FBRSxDQUFDLENBQUM7QUFBQSxVQUFDLENBQUMsSUFBRSxDQUFDO0FBQUEsUUFBQyxHQUFFLENBQUMsTUFBSyxJQUFJLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxDQUFDO0FBQUUsZUFBTyxJQUFFLEtBQUssTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBRSxJQUFFLEtBQUssT0FBTyxDQUFDLElBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUU7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLFNBQU8sU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLGFBQWEsRUFBRSxJQUFJLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLFFBQU0sU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLGFBQWEsRUFBRSxNQUFNLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLFNBQU8sU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLGFBQWEsRUFBRSxPQUFPLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLFFBQU0sU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLGFBQWEsRUFBRSxNQUFNLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLE9BQUssU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLGFBQWEsRUFBRSxLQUFLLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLFVBQVEsU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLGFBQWEsRUFBRSxRQUFRLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLGVBQWEsV0FBVTtBQUFDLGVBQU8sSUFBSSxLQUFLLEdBQUcsV0FBVyxJQUFJLEtBQUssR0FBRyxZQUFZLElBQUksQ0FBQztBQUFBLE1BQUMsR0FBRSxFQUFF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QUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBQyxXQUFVLEVBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsYUFBTyxHQUFHLEdBQUcsV0FBVSxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsYUFBSyxLQUFHLEdBQUUsS0FBSyxNQUFJLEdBQUUsS0FBSyxPQUFLLEdBQUUsS0FBSyxTQUFPLEdBQUUsS0FBSyxPQUFLLEVBQUUsV0FBVyxDQUFDLElBQUUsRUFBRSxXQUFXLENBQUMsRUFBRSxPQUFLLEdBQUcsTUFBSyxFQUFDLFVBQVMsQ0FBQyxJQUFHLENBQUMsR0FBRSxTQUFRLENBQUMsSUFBRyxFQUFFLEdBQUUsVUFBUyxDQUFDLElBQUcsQ0FBQyxHQUFFLFVBQVMsQ0FBQyxJQUFHLENBQUMsRUFBQyxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxhQUFNLEVBQUUsRUFBRSxVQUFRLEVBQUUsYUFBVyxFQUFFLFFBQU0sSUFBRSxFQUFFLFlBQVUsQ0FBQyxFQUFFO0FBQUEsSUFBYTtBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFFLFNBQU8sR0FBRyxFQUFFLFFBQU8sQ0FBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRTtBQUFhLFFBQUUsZUFBYSxJQUFFLFdBQVU7QUFBQyxlQUFPLEdBQUcsRUFBRSxHQUFFLEVBQUUsQ0FBQztBQUFBLE1BQUMsSUFBRSxHQUFFLEVBQUUsWUFBVSxLQUFHLENBQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUUsVUFBUSxHQUFHLEVBQUUsU0FBUSxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFHLEVBQUUsVUFBVSxRQUFPLEVBQUU7QUFBVyxVQUFJLElBQUUsRUFBRSxrQkFBa0IsRUFBRSxLQUFLO0FBQUUsVUFBRyxDQUFDLEVBQUUsT0FBTSxJQUFJLEVBQUUsT0FBTyxhQUFXLEVBQUUsUUFBTSxzQkFBb0IsRUFBRSxPQUFLLGlCQUFpQjtBQUFFLGFBQU87QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEdBQUcsR0FBRSxFQUFFLE1BQU07QUFBRSxhQUFPLEVBQUUsV0FBVyxFQUFDLE9BQU0sR0FBRSxRQUFPLENBQUMsRUFBRSxVQUFTLFNBQVEsRUFBRSxRQUFNLFFBQU8sUUFBTyxDQUFDLENBQUMsRUFBRSxRQUFPLE9BQU0sRUFBQyxPQUFNLEdBQUUsT0FBTSxFQUFFLE1BQUssRUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsZUFBYSxHQUFHLEVBQUUsUUFBTyxFQUFFLGFBQWEsQ0FBQyxJQUFFLEVBQUU7QUFBTyxVQUFHLEVBQUUsSUFBRztBQUFDLFlBQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsY0FBRyxDQUFDLEtBQUcsRUFBRSxHQUFFLEdBQUUsU0FBUyxHQUFFO0FBQUMsbUJBQU8sRUFBRSxLQUFLLENBQUM7QUFBQSxVQUFDLEdBQUUsU0FBUyxHQUFFO0FBQUMsbUJBQU8sRUFBRSxLQUFLLENBQUM7QUFBQSxVQUFDLENBQUMsR0FBRTtBQUFDLGdCQUFJLElBQUUsRUFBRSxZQUFXLElBQUUsS0FBRztBQUFFLGtCQUFJLDJCQUF5QixJQUFFLEtBQUcsSUFBSSxXQUFXLENBQUMsSUFBRyxFQUFFLEdBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLE1BQUcsRUFBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLFVBQUU7QUFBQSxRQUFDO0FBQUUsZUFBTyxRQUFRLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxHQUFFLENBQUMsR0FBRSxHQUFHLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxFQUFFLFdBQVUsR0FBRSxDQUFDLEVBQUUsWUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQUEsTUFBQyxNQUFNLFFBQU8sR0FBRyxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsR0FBRyxFQUFFLFdBQVUsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxFQUFFLFlBQVUsRUFBRSxXQUFXO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLElBQUUsU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLGVBQU8sRUFBRSxFQUFFLENBQUMsR0FBRSxHQUFFLENBQUM7QUFBQSxNQUFDLElBQUUsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFFLGFBQU8sRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLFlBQUcsRUFBRSxRQUFPLEVBQUUsTUFBTSxXQUFVO0FBQUMsY0FBSSxJQUFFLFdBQVU7QUFBQyxtQkFBTyxFQUFFLFNBQVM7QUFBQSxVQUFDO0FBQUUsV0FBQyxDQUFDLEtBQUcsRUFBRSxHQUFFLFNBQVMsR0FBRTtBQUFDLG1CQUFPLElBQUU7QUFBQSxVQUFDLEdBQUUsU0FBUyxHQUFFO0FBQUMsY0FBRSxLQUFLLENBQUMsR0FBRSxJQUFFO0FBQUEsVUFBQyxHQUFFLFNBQVMsR0FBRTtBQUFDLGNBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRTtBQUFBLFVBQUMsQ0FBQyxNQUFJLEVBQUUsRUFBRSxPQUFNLEdBQUUsU0FBUyxHQUFFO0FBQUMsbUJBQU8sSUFBRTtBQUFBLFVBQUMsQ0FBQyxHQUFFLEVBQUU7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBSSxLQUFHLFdBQVU7QUFBQyxlQUFTLEVBQUUsR0FBRTtBQUFDLGFBQUssV0FBVyxJQUFFO0FBQUEsTUFBQztBQUFDLGFBQU8sRUFBRSxVQUFVLFVBQVEsU0FBUyxHQUFFO0FBQUMsWUFBSSxHQUFFLElBQUUsS0FBSyxXQUFXO0FBQUUsWUFBRyxFQUFFLFFBQU0sUUFBTztBQUFDLGNBQUksSUFBRSxFQUFFO0FBQUksY0FBRyxFQUFFLENBQUMsRUFBRSxRQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUUsSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUs7QUFBRSxjQUFHLE9BQU8sS0FBRyxTQUFTLFNBQU8sT0FBTyxDQUFDLEtBQUcsS0FBRztBQUFFLGNBQUcsT0FBTyxLQUFHLFNBQVMsS0FBRztBQUFDLG1CQUFPLE9BQU8sQ0FBQyxJQUFFO0FBQUEsVUFBQyxRQUFNO0FBQUMsbUJBQU8sT0FBTyxDQUFDLElBQUU7QUFBQSxVQUFDO0FBQUMsZ0JBQU0sSUFBSSxVQUFVLGdCQUFnQixPQUFPLENBQUMsQ0FBQztBQUFBLFFBQUM7QUFBQyxZQUFHLEVBQUUsV0FBUyxRQUFPO0FBQUMsY0FBSSxJQUFFLEVBQUU7QUFBTyxjQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQU8sRUFBRSxDQUFDLElBQUUsRUFBRSxPQUFPLFNBQVMsR0FBRTtBQUFDLG1CQUFNLENBQUMsRUFBRSxTQUFTLENBQUM7QUFBQSxVQUFDLENBQUMsRUFBRSxLQUFLLElBQUUsQ0FBQztBQUFFLGNBQUcsT0FBTyxLQUFHLFNBQVMsUUFBTyxPQUFPLENBQUMsSUFBRTtBQUFFLGNBQUcsT0FBTyxLQUFHLFNBQVMsS0FBRztBQUFDLG1CQUFPLE9BQU8sQ0FBQyxJQUFFO0FBQUEsVUFBQyxRQUFNO0FBQUMsbUJBQU8sT0FBTyxDQUFDLElBQUU7QUFBQSxVQUFDO0FBQUMsZ0JBQU0sSUFBSSxVQUFVLHNCQUFzQixPQUFPLENBQUMsQ0FBQztBQUFBLFFBQUM7QUFBQyxZQUFJLEtBQUcsSUFBRSxFQUFFLG1CQUFpQixRQUFNLE1BQUksU0FBTyxTQUFPLEVBQUUsQ0FBQztBQUFFLGVBQU8sS0FBRyxPQUFPLEtBQUcsWUFBVSxFQUFFLFdBQVcsQ0FBQyxJQUFFLEVBQUUsY0FBYyxDQUFDLElBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxJQUFFO0FBQUEsTUFBQyxHQUFFO0FBQUEsSUFBQyxFQUFFLEdBQUUsS0FBRyxXQUFVO0FBQUMsZUFBUyxJQUFHO0FBQUEsTUFBQztBQUFDLGFBQU8sRUFBRSxVQUFVLFFBQU0sU0FBUyxHQUFFLEdBQUU7QUFBQyxZQUFJLElBQUUsS0FBSztBQUFLLGVBQU8sRUFBRSxRQUFNLEVBQUUsTUFBTSxPQUFPLE1BQUssRUFBRSxLQUFLLE1BQUssRUFBRSxLQUFLLENBQUMsSUFBRSxFQUFFLE1BQU0sT0FBTyxZQUFXLENBQUMsRUFBRSxLQUFLLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLFNBQU8sU0FBUyxHQUFFO0FBQUMsWUFBSSxJQUFFLEtBQUs7QUFBSyxlQUFPLEVBQUUsUUFBTSxFQUFFLE1BQU0sT0FBTyxNQUFLLEVBQUUsS0FBSyxNQUFLLEVBQUUsS0FBSyxDQUFDLElBQUUsRUFBRSxNQUFNLE9BQU8sYUFBWSxHQUFFLFFBQVE7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLGdCQUFjLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFLO0FBQUssVUFBRSxZQUFVLEdBQUcsRUFBRSxXQUFVLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLFdBQVMsU0FBUyxHQUFFLEdBQUU7QUFBQyxlQUFPLEdBQUcsS0FBSyxNQUFLLEdBQUUsR0FBRSxLQUFLLEtBQUssTUFBTSxJQUFJO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxRQUFNLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRSxPQUFPLE9BQU8sS0FBSyxZQUFZLFNBQVMsR0FBRSxJQUFFLE9BQU8sT0FBTyxLQUFLLElBQUk7QUFBRSxlQUFPLEtBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLE9BQUssR0FBRTtBQUFBLE1BQUMsR0FBRSxFQUFFLFVBQVUsTUFBSSxXQUFVO0FBQUMsZUFBTyxLQUFLLEtBQUssY0FBWSxNQUFLO0FBQUEsTUFBSSxHQUFFLEVBQUUsVUFBVSxPQUFLLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFLO0FBQUssZUFBTyxLQUFLLE1BQU0sU0FBUyxHQUFFO0FBQUMsaUJBQU8sR0FBRyxHQUFFLEdBQUUsR0FBRSxFQUFFLE1BQU0sSUFBSTtBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUMsR0FBRSxFQUFFLFVBQVUsUUFBTSxTQUFTLEdBQUU7QUFBQyxZQUFJLElBQUU7QUFBSyxlQUFPLEtBQUssTUFBTSxTQUFTLEdBQUU7QUFBQyxjQUFJLElBQUUsRUFBRSxNQUFLLElBQUUsRUFBRSxNQUFNO0FBQUssY0FBRyxHQUFHLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxNQUFNLEVBQUMsT0FBTSxHQUFFLE9BQU0sRUFBQyxPQUFNLEdBQUcsR0FBRSxFQUFFLE1BQU0sR0FBRSxPQUFNLEVBQUUsTUFBSyxFQUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLG1CQUFPLEtBQUssSUFBSSxHQUFFLEVBQUUsS0FBSztBQUFBLFVBQUMsQ0FBQztBQUFFLGNBQUksSUFBRTtBQUFFLGlCQUFPLEdBQUcsR0FBRSxXQUFVO0FBQUMsbUJBQU0sRUFBRSxHQUFFO0FBQUEsVUFBRSxHQUFFLEdBQUUsQ0FBQyxFQUFFLEtBQUssV0FBVTtBQUFDLG1CQUFPO0FBQUEsVUFBQyxDQUFDO0FBQUEsUUFBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxTQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUUsTUFBTSxHQUFHLEVBQUUsUUFBUSxHQUFFLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLFNBQU87QUFBRSxpQkFBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLGlCQUFPLElBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUEsUUFBQztBQUFDLFlBQUksSUFBRSxLQUFLLEtBQUssUUFBTSxTQUFPLElBQUU7QUFBRyxpQkFBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxHQUFFLENBQUM7QUFBRSxpQkFBTyxFQUFFLEdBQUUsQ0FBQyxJQUFFO0FBQUEsUUFBQztBQUFDLGVBQU8sS0FBSyxRQUFRLFNBQVMsR0FBRTtBQUFDLGlCQUFPLEVBQUUsS0FBSyxDQUFDO0FBQUEsUUFBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxVQUFRLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRTtBQUFLLGVBQU8sS0FBSyxNQUFNLFNBQVMsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFO0FBQUssY0FBRyxFQUFFLFFBQU0sVUFBUSxHQUFHLEdBQUUsSUFBRSxLQUFHLEVBQUUsUUFBTSxHQUFFO0FBQUMsZ0JBQUksSUFBRSxFQUFFLGFBQVksSUFBRSxHQUFHLEdBQUUsRUFBRSxNQUFNLEtBQUssTUFBTTtBQUFFLG1CQUFPLEVBQUUsTUFBTSxLQUFLLE1BQU0sRUFBQyxPQUFNLEdBQUUsT0FBTSxFQUFFLE9BQU0sUUFBTyxNQUFHLE9BQU0sRUFBQyxPQUFNLEdBQUUsT0FBTSxFQUFFLE1BQUssRUFBQyxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxrQkFBSSxJQUFFLEVBQUU7QUFBTyxxQkFBTyxJQUFFLEVBQUUsSUFBSSxDQUFDLElBQUU7QUFBQSxZQUFDLENBQUM7QUFBQSxVQUFDLE9BQUs7QUFBQyxnQkFBSSxJQUFFLENBQUM7QUFBRSxtQkFBTyxHQUFHLEdBQUUsU0FBUyxHQUFFO0FBQUMscUJBQU8sRUFBRSxLQUFLLENBQUM7QUFBQSxZQUFDLEdBQUUsR0FBRSxFQUFFLE1BQU0sSUFBSSxFQUFFLEtBQUssV0FBVTtBQUFDLHFCQUFPO0FBQUEsWUFBQyxDQUFDO0FBQUEsVUFBQztBQUFBLFFBQUMsR0FBRSxDQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxTQUFPLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFLO0FBQUssZUFBTyxLQUFHLElBQUUsUUFBTSxFQUFFLFVBQVEsR0FBRSxHQUFHLENBQUMsSUFBRSxHQUFHLEdBQUUsV0FBVTtBQUFDLGNBQUksSUFBRTtBQUFFLGlCQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsbUJBQU8sTUFBSSxJQUFFLE9BQUcsTUFBSSxLQUFHLEVBQUUsR0FBRSxVQUFLLEVBQUUsV0FBVTtBQUFDLGdCQUFFLFFBQVEsQ0FBQyxHQUFFLElBQUU7QUFBQSxZQUFDLENBQUMsR0FBRTtBQUFBLFVBQUc7QUFBQSxRQUFDLENBQUMsSUFBRSxHQUFHLEdBQUUsV0FBVTtBQUFDLGNBQUksSUFBRTtBQUFFLGlCQUFPLFdBQVU7QUFBQyxtQkFBTSxFQUFFLElBQUU7QUFBQSxVQUFDO0FBQUEsUUFBQyxDQUFDLEdBQUU7QUFBQSxNQUFLLEdBQUUsRUFBRSxVQUFVLFFBQU0sU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLEtBQUssUUFBTSxLQUFLLElBQUksS0FBSyxLQUFLLE9BQU0sQ0FBQyxHQUFFLEdBQUcsS0FBSyxNQUFLLFdBQVU7QUFBQyxjQUFJLElBQUU7QUFBRSxpQkFBTyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsbUJBQU0sRUFBRSxLQUFHLEtBQUcsRUFBRSxDQUFDLEdBQUUsS0FBRztBQUFBLFVBQUM7QUFBQSxRQUFDLEdBQUUsSUFBRSxHQUFFO0FBQUEsTUFBSSxHQUFFLEVBQUUsVUFBVSxRQUFNLFNBQVMsR0FBRSxHQUFFO0FBQUMsZUFBTyxHQUFHLEtBQUssTUFBSyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsaUJBQU8sRUFBRSxFQUFFLEtBQUssS0FBRyxFQUFFLENBQUMsR0FBRSxLQUFHO0FBQUEsUUFBRSxDQUFDLEdBQUU7QUFBQSxNQUFJLEdBQUUsRUFBRSxVQUFVLFFBQU0sU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLE1BQU0sQ0FBQyxFQUFFLFFBQVEsU0FBUyxHQUFFO0FBQUMsaUJBQU8sRUFBRSxDQUFDO0FBQUEsUUFBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxPQUFLLFNBQVMsR0FBRTtBQUFDLGVBQU8sS0FBSyxRQUFRLEVBQUUsTUFBTSxDQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxTQUFPLFNBQVMsR0FBRTtBQUFDLGVBQU8sR0FBRyxLQUFLLE1BQUssU0FBUyxHQUFFO0FBQUMsaUJBQU8sRUFBRSxFQUFFLEtBQUs7QUFBQSxRQUFDLENBQUMsR0FBRSxHQUFHLEtBQUssTUFBSyxDQUFDLEdBQUU7QUFBQSxNQUFJLEdBQUUsRUFBRSxVQUFVLE1BQUksU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLE9BQU8sQ0FBQztBQUFBLE1BQUMsR0FBRSxFQUFFLFVBQVUsS0FBRyxTQUFTLEdBQUU7QUFBQyxlQUFPLElBQUksS0FBSyxHQUFHLFlBQVksS0FBSyxLQUFLLE9BQU0sR0FBRSxJQUFJO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxVQUFRLFdBQVU7QUFBQyxlQUFPLEtBQUssS0FBSyxNQUFJLEtBQUssS0FBSyxRQUFNLFNBQU8sU0FBTyxRQUFPLEtBQUssc0JBQW9CLEtBQUssbUJBQW1CLEtBQUssS0FBSyxHQUFHLEdBQUU7QUFBQSxNQUFJLEdBQUUsRUFBRSxVQUFVLE9BQUssV0FBVTtBQUFDLGVBQU8sS0FBSyxRQUFRO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxVQUFRLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFLO0FBQUssZUFBTyxFQUFFLFdBQVMsQ0FBQyxFQUFFLFNBQVEsS0FBSyxLQUFLLFNBQVMsR0FBRSxHQUFFO0FBQUMsWUFBRSxFQUFFLEtBQUksQ0FBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUMsR0FBRSxFQUFFLFVBQVUsZ0JBQWMsU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFLLEtBQUssU0FBTyxVQUFTLEtBQUssUUFBUSxDQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxpQkFBZSxTQUFTLEdBQUU7QUFBQyxZQUFJLElBQUUsS0FBSztBQUFLLGVBQU8sRUFBRSxXQUFTLENBQUMsRUFBRSxTQUFRLEtBQUssS0FBSyxTQUFTLEdBQUUsR0FBRTtBQUFDLFlBQUUsRUFBRSxZQUFXLENBQUM7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLE9BQUssU0FBUyxHQUFFO0FBQUMsWUFBSSxJQUFFLEtBQUs7QUFB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QyxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsYUFBTyxJQUFFLElBQUUsS0FBRyxNQUFJLElBQUUsSUFBRTtBQUFBLElBQUM7QUFBQyxhQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsYUFBYSxLQUFHLElBQUksRUFBRSxXQUFXLENBQUMsSUFBRTtBQUFFLGFBQU8sRUFBRSxLQUFLLFFBQU0sSUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFFLElBQUksVUFBVSxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUU7QUFBQyxhQUFPLElBQUksRUFBRSxXQUFXLEdBQUUsV0FBVTtBQUFDLGVBQU8sR0FBRyxFQUFFO0FBQUEsTUFBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsYUFBTyxNQUFJLFNBQU8sU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLFlBQVk7QUFBQSxNQUFDLElBQUUsU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLFlBQVk7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsYUFBTyxNQUFJLFNBQU8sU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLFlBQVk7QUFBQSxNQUFDLElBQUUsU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLFlBQVk7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLGVBQVEsSUFBRSxLQUFLLElBQUksRUFBRSxRQUFPLEVBQUUsTUFBTSxHQUFFLElBQUUsSUFBRyxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxZQUFHLE1BQUksRUFBRSxDQUFDLEVBQUUsUUFBTyxFQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUUsSUFBRSxFQUFFLE9BQU8sR0FBRSxDQUFDLElBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxPQUFPLElBQUUsQ0FBQyxJQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUMsSUFBRSxJQUFFLEVBQUUsT0FBTyxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLE9BQU8sSUFBRSxDQUFDLElBQUUsS0FBRyxJQUFFLEVBQUUsT0FBTyxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLE9BQU8sSUFBRSxDQUFDLElBQUU7QUFBSyxVQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRSxNQUFJLElBQUU7QUFBQSxNQUFFO0FBQUMsYUFBTyxJQUFFLEVBQUUsVUFBUSxNQUFJLFNBQU8sSUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUUsSUFBRSxFQUFFLFVBQVEsTUFBSSxTQUFPLEVBQUUsT0FBTyxHQUFFLEVBQUUsTUFBTSxJQUFFLElBQUUsSUFBRSxPQUFLLEVBQUUsT0FBTyxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLE9BQU8sSUFBRSxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsRUFBRTtBQUFPLFVBQUcsQ0FBQyxFQUFFLE1BQU0sU0FBUyxHQUFFO0FBQUMsZUFBTyxPQUFPLEtBQUc7QUFBQSxNQUFRLENBQUMsRUFBRSxRQUFPLEVBQUUsR0FBRSxFQUFFO0FBQUUsZUFBUyxFQUFFLEdBQUU7QUFBQyxZQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRSxNQUFJLFNBQU8sS0FBRztBQUFHLFlBQUksSUFBRSxFQUFFLElBQUksU0FBUyxHQUFFO0FBQUMsaUJBQU0sRUFBQyxPQUFNLEVBQUUsQ0FBQyxHQUFFLE9BQU0sRUFBRSxDQUFDLEVBQUM7QUFBQSxRQUFDLENBQUMsRUFBRSxLQUFLLFNBQVMsR0FBRSxHQUFFO0FBQUMsaUJBQU8sRUFBRSxFQUFFLE9BQU0sRUFBRSxLQUFLO0FBQUEsUUFBQyxDQUFDO0FBQUUsWUFBRSxFQUFFLElBQUksU0FBUyxHQUFFO0FBQUMsaUJBQU8sRUFBRTtBQUFBLFFBQUssQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFJLFNBQVMsR0FBRTtBQUFDLGlCQUFPLEVBQUU7QUFBQSxRQUFLLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxNQUFJLFNBQU8sS0FBRztBQUFBLE1BQUM7QUFBQyxRQUFFLE1BQU07QUFBRSxVQUFJLElBQUUsSUFBSSxFQUFFLFdBQVcsR0FBRSxXQUFVO0FBQUMsZUFBTyxHQUFHLEVBQUUsQ0FBQyxHQUFFLEVBQUUsSUFBRSxDQUFDLElBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFFLFFBQUUscUJBQW1CLFNBQVMsR0FBRTtBQUFDLFVBQUUsQ0FBQztBQUFBLE1BQUM7QUFBRSxVQUFJLElBQUU7QUFBRSxhQUFPLEVBQUUsY0FBYyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUU7QUFBSSxZQUFHLE9BQU8sS0FBRyxTQUFTLFFBQU07QUFBRyxZQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsWUFBRyxFQUFFLEdBQUUsR0FBRSxDQUFDLEVBQUUsUUFBTTtBQUFHLGlCQUFRLElBQUUsTUFBSyxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsR0FBRTtBQUFDLGNBQUksSUFBRSxHQUFHLEdBQUUsR0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsR0FBRSxHQUFFLENBQUM7QUFBRSxnQkFBSSxRQUFNLE1BQUksT0FBSyxJQUFFLElBQUUsS0FBRyxNQUFJLFFBQU0sRUFBRSxHQUFFLENBQUMsSUFBRSxPQUFLLElBQUU7QUFBQSxRQUFFO0FBQUMsZUFBTyxFQUFFLE1BQUksT0FBSyxXQUFVO0FBQUMsWUFBRSxTQUFTLElBQUUsQ0FBQztBQUFBLFFBQUMsSUFBRSxDQUFDLEdBQUU7QUFBQSxNQUFFLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLGFBQU0sRUFBQyxNQUFLLEdBQUUsT0FBTSxHQUFFLE9BQU0sR0FBRSxXQUFVLEdBQUUsV0FBVSxFQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsYUFBTSxFQUFDLE1BQUssR0FBRSxPQUFNLEdBQUUsT0FBTSxFQUFDO0FBQUEsSUFBQztBQUFDLFFBQUksS0FBRyxXQUFVO0FBQUMsZUFBUyxJQUFHO0FBQUEsTUFBQztBQUFDLGFBQU8sT0FBTyxlQUFlLEVBQUUsV0FBVSxjQUFhLEVBQUMsS0FBSSxXQUFVO0FBQUMsZUFBTyxLQUFLLEtBQUssTUFBTSxHQUFHO0FBQUEsTUFBVSxHQUFFLFlBQVcsT0FBRyxjQUFhLEtBQUUsQ0FBQyxHQUFFLEVBQUUsVUFBVSxVQUFRLFNBQVMsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFlBQUUsTUFBSSxPQUFHLElBQUUsTUFBSTtBQUFHLFlBQUc7QUFBQyxpQkFBTyxLQUFLLEtBQUssR0FBRSxDQUFDLElBQUUsS0FBRyxLQUFLLEtBQUssR0FBRSxDQUFDLE1BQUksTUFBSSxLQUFHLE1BQUksRUFBRSxLQUFHLEtBQUcsR0FBRyxJQUFJLElBQUUsSUFBSSxLQUFLLFdBQVcsTUFBSyxXQUFVO0FBQUMsbUJBQU8sR0FBRyxHQUFFLEdBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQztBQUFBLFVBQUMsQ0FBQztBQUFBLFFBQUMsUUFBTTtBQUFDLGlCQUFPLEVBQUUsTUFBSyxFQUFFO0FBQUEsUUFBQztBQUFBLE1BQUMsR0FBRSxFQUFFLFVBQVUsU0FBTyxTQUFTLEdBQUU7QUFBQyxlQUFPLEtBQUcsT0FBSyxFQUFFLE1BQUssRUFBRSxJQUFFLElBQUksS0FBSyxXQUFXLE1BQUssV0FBVTtBQUFDLGlCQUFPLEdBQUcsQ0FBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUMsR0FBRSxFQUFFLFVBQVUsUUFBTSxTQUFTLEdBQUU7QUFBQyxlQUFPLEtBQUcsT0FBSyxFQUFFLE1BQUssRUFBRSxJQUFFLElBQUksS0FBSyxXQUFXLE1BQUssV0FBVTtBQUFDLGlCQUFPLEdBQUcsR0FBRSxRQUFPLElBQUU7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLGVBQWEsU0FBUyxHQUFFO0FBQUMsZUFBTyxLQUFHLE9BQUssRUFBRSxNQUFLLEVBQUUsSUFBRSxJQUFJLEtBQUssV0FBVyxNQUFLLFdBQVU7QUFBQyxpQkFBTyxHQUFHLEdBQUUsUUFBTyxLQUFFO0FBQUEsUUFBQyxDQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxRQUFNLFNBQVMsR0FBRTtBQUFDLGVBQU8sS0FBRyxPQUFLLEVBQUUsTUFBSyxFQUFFLElBQUUsSUFBSSxLQUFLLFdBQVcsTUFBSyxXQUFVO0FBQUMsaUJBQU8sR0FBRyxRQUFPLEdBQUUsT0FBRyxJQUFFO0FBQUEsUUFBQyxDQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSxlQUFhLFNBQVMsR0FBRTtBQUFDLGVBQU8sS0FBRyxPQUFLLEVBQUUsTUFBSyxFQUFFLElBQUUsSUFBSSxLQUFLLFdBQVcsTUFBSyxXQUFVO0FBQUMsaUJBQU8sR0FBRyxRQUFPLENBQUM7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLGFBQVcsU0FBUyxHQUFFO0FBQUMsZUFBTyxPQUFPLEtBQUcsV0FBUyxFQUFFLE1BQUssRUFBRSxJQUFFLEtBQUssUUFBUSxHQUFFLElBQUUsSUFBRyxNQUFHLElBQUU7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLHVCQUFxQixTQUFTLEdBQUU7QUFBQyxlQUFPLE1BQUksS0FBRyxLQUFLLFdBQVcsQ0FBQyxJQUFFLEdBQUcsTUFBSyxTQUFTLEdBQUUsR0FBRTtBQUFDLGlCQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFJO0FBQUEsUUFBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUU7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLG1CQUFpQixTQUFTLEdBQUU7QUFBQyxlQUFPLEdBQUcsTUFBSyxTQUFTLEdBQUUsR0FBRTtBQUFDLGlCQUFPLE1BQUksRUFBRSxDQUFDO0FBQUEsUUFBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUU7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLGtCQUFnQixXQUFVO0FBQUMsWUFBSSxJQUFFLEdBQUcsTUFBTSxJQUFHLFNBQVM7QUFBRSxlQUFPLEVBQUUsV0FBUyxJQUFFLEdBQUcsSUFBSSxJQUFFLEdBQUcsTUFBSyxTQUFTLEdBQUUsR0FBRTtBQUFDLGlCQUFPLEVBQUUsUUFBUSxDQUFDLE1BQUk7QUFBQSxRQUFFLEdBQUUsR0FBRSxFQUFFO0FBQUEsTUFBQyxHQUFFLEVBQUUsVUFBVSw0QkFBMEIsV0FBVTtBQUFDLFlBQUksSUFBRSxHQUFHLE1BQU0sSUFBRyxTQUFTO0FBQUUsZUFBTyxFQUFFLFdBQVMsSUFBRSxHQUFHLElBQUksSUFBRSxHQUFHLE1BQUssU0FBUyxHQUFFLEdBQUU7QUFBQyxpQkFBTyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsbUJBQU8sRUFBRSxRQUFRLENBQUMsTUFBSTtBQUFBLFVBQUMsQ0FBQztBQUFBLFFBQUMsR0FBRSxHQUFFLEVBQUU7QUFBQSxNQUFDLEdBQUUsRUFBRSxVQUFVLFFBQU0sV0FBVTtBQUFDLFlBQUksSUFBRSxNQUFLLElBQUUsR0FBRyxNQUFNLElBQUcsU0FBUyxHQUFFLElBQUUsS0FBSztBQUFLLFlBQUc7QUFBQyxZQUFFLEtBQUssQ0FBQztBQUFBLFFBQUMsUUFBTTtBQUFDLGlCQUFPLEVBQUUsTUFBSyxFQUFFO0FBQUEsUUFBQztBQUFDLFlBQUcsRUFBRSxXQUFTLEVBQUUsUUFBTyxHQUFHLElBQUk7QUFBRSxZQUFJLElBQUUsSUFBSSxLQUFLLFdBQVcsTUFBSyxXQUFVO0FBQUMsaUJBQU8sR0FBRyxFQUFFLENBQUMsR0FBRSxFQUFFLEVBQUUsU0FBTyxDQUFDLENBQUM7QUFBQSxRQUFDLENBQUM7QUFBRSxVQUFFLHFCQUFtQixTQUFTLEdBQUU7QUFBQyxjQUFFLE1BQUksU0FBTyxFQUFFLGFBQVcsRUFBRSxhQUFZLEVBQUUsS0FBSyxDQUFDO0FBQUEsUUFBQztBQUFFLFlBQUksSUFBRTtBQUFFLGVBQU8sRUFBRSxjQUFjLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxtQkFBUSxJQUFFLEVBQUUsS0FBSSxFQUFFLEdBQUUsRUFBRSxDQUFDLENBQUMsSUFBRSxJQUFHLEtBQUcsRUFBRSxHQUFFLE1BQUksRUFBRSxPQUFPLFFBQU8sRUFBRSxDQUFDLEdBQUU7QUFBRyxpQkFBTyxFQUFFLEdBQUUsRUFBRSxDQUFDLENBQUMsTUFBSSxJQUFFLFFBQUksRUFBRSxXQUFVO0FBQUMsY0FBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQUEsVUFBQyxDQUFDLEdBQUU7QUFBQSxRQUFHLENBQUMsR0FBRTtBQUFBLE1BQUMsR0FBRSxFQUFFLFVBQVUsV0FBUyxTQUFTLEdBQUU7QUFBQyxlQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsSUFBRyxDQUFDLEdBQUUsQ0FBQyxHQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRSxFQUFDLGVBQWMsT0FBRyxlQUFjLE1BQUUsQ0FBQztBQUFBLE1BQUMsR0FBRSxFQUFFLFVBQVUsU0FBTyxXQUFVO0FBQUMsWUFBSSxJQUFFLEdBQUcsTUFBTSxJQUFHLFNBQVM7QUFBRSxZQUFHLEVBQUUsV0FBUyxFQUFFLFFBQU8sSUFBSSxLQUFLLFdBQVcsSUFBSTtBQUFFLFlBQUc7QUFBQyxZQUFFLEtBQUssS0FBSyxVQUFVO0FBQUEsUUFBQyxRQUFNO0FBQUMsaUJBQU8sRUFBRSxNQUFLLEVBQUU7QUFBQSxRQUFDO0FBQUMsWUFBSSxJQUFFLEVBQUUsT0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLGlCQUFPLElBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsU0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0FBQUEsUUFBQyxHQUFFLElBQUk7QUFBRSxlQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFPLENBQUMsR0FBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUUsS0FBSyxXQUFXLEdBQUUsRUFBQyxl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V0FBUyxHQUFFLEVBQUUsVUFBUTtBQUFBLFFBQUMsQ0FBQyxHQUFFLEtBQUssWUFBWSxLQUFLLFdBQVU7QUFBQyxZQUFFLFNBQU8sT0FBRyxFQUFFLEdBQUcsU0FBUyxLQUFLO0FBQUEsUUFBQyxHQUFFLFNBQVMsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFO0FBQU8saUJBQU8sRUFBRSxTQUFPLE9BQUcsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUUsRUFBRSxTQUFPLEVBQUUsT0FBTyxRQUFRLENBQUMsSUFBRSxLQUFHLEVBQUUsWUFBVSxFQUFFLFNBQVMsTUFBTSxHQUFFLEVBQUUsQ0FBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLGFBQU0sRUFBQyxNQUFLLEdBQUUsU0FBUSxHQUFFLFFBQU8sR0FBRSxPQUFNLEdBQUUsTUFBSyxHQUFFLFVBQVMsR0FBRSxNQUFLLEtBQUcsQ0FBQyxJQUFFLE1BQUksT0FBSyxJQUFFLE1BQUksT0FBSyxJQUFFLE9BQUssTUFBSSxHQUFHLENBQUMsRUFBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLGFBQU8sT0FBTyxLQUFHLFdBQVMsSUFBRSxJQUFFLE1BQUksQ0FBQyxFQUFFLEtBQUssS0FBSyxHQUFFLEdBQUcsSUFBRSxNQUFJO0FBQUEsSUFBRTtBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLGFBQU0sRUFBQyxNQUFLLEdBQUUsU0FBUSxHQUFFLFNBQVEsR0FBRSxhQUFZLE1BQUssV0FBVSxHQUFHLEdBQUUsU0FBUyxHQUFFO0FBQUMsZUFBTSxDQUFDLEVBQUUsTUFBSyxDQUFDO0FBQUEsTUFBQyxDQUFDLEVBQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUU7QUFBQyxhQUFPLEVBQUUsV0FBUyxJQUFFLEVBQUUsQ0FBQyxJQUFFO0FBQUEsSUFBQztBQUFDLFFBQUksS0FBRyxTQUFTLEdBQUU7QUFBQyxVQUFHO0FBQUMsZUFBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLEtBQUcsV0FBVTtBQUFDLGlCQUFNLENBQUMsQ0FBQyxDQUFDO0FBQUEsUUFBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUEsTUFBQyxRQUFNO0FBQUMsZUFBTyxLQUFHLFdBQVU7QUFBQyxpQkFBTztBQUFBLFFBQUUsR0FBRTtBQUFBLE1BQUU7QUFBQSxJQUFDO0FBQUUsYUFBUyxHQUFHLEdBQUU7QUFBQyxhQUFPLEtBQUcsT0FBSyxXQUFVO0FBQUEsTUFBQyxJQUFFLE9BQU8sS0FBRyxXQUFTLEdBQUcsQ0FBQyxJQUFFLFNBQVMsR0FBRTtBQUFDLGVBQU8sR0FBRyxHQUFFLENBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsTUFBTSxHQUFHO0FBQUUsYUFBTyxFQUFFLFdBQVMsSUFBRSxTQUFTLEdBQUU7QUFBQyxlQUFPLEVBQUUsQ0FBQztBQUFBLE1BQUMsSUFBRSxTQUFTLEdBQUU7QUFBQyxlQUFPLEdBQUcsR0FBRSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLGFBQU0sQ0FBQyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUksS0FBRztBQUFFLGFBQVMsR0FBRyxHQUFFO0FBQUMsYUFBTyxLQUFHLE9BQUssUUFBTSxPQUFPLEtBQUcsV0FBUyxJQUFFLElBQUksT0FBTyxFQUFFLEtBQUssR0FBRyxHQUFFLEdBQUc7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsZUFBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxHQUFHLEVBQUUsZ0JBQWdCO0FBQUUsZUFBTSxFQUFDLFFBQU8sRUFBQyxNQUFLLEVBQUUsTUFBSyxRQUFPLEVBQUUsSUFBSSxTQUFTLEdBQUU7QUFBQyxpQkFBTyxFQUFFLFlBQVksQ0FBQztBQUFB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QkFBRSxZQUFVLFNBQVMsSUFBRztBQUFDLHNCQUFJLElBQUUsRUFBRTtBQUFPLHNCQUFHLENBQUMsRUFBRSxRQUFPLEVBQUUsRUFBQyxRQUFPLEVBQUMsQ0FBQztBQUFFLHNCQUFHLEVBQUUsS0FBSyxJQUFFLEVBQUUsUUFBTSxFQUFFLFVBQVUsR0FBRSxFQUFFLE1BQUksRUFBRSxRQUFPLEVBQUUsRUFBQyxRQUFPLEVBQUMsQ0FBQztBQUFFLG9CQUFFLFNBQVM7QUFBQSxnQkFBQyxHQUFFLEVBQUUsVUFBUSxHQUFHLENBQUM7QUFBQSxjQUFDO0FBQUEsWUFBQyxDQUFDO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQyxlQUFNLEVBQUMsTUFBSyxHQUFFLFFBQU8sR0FBRSxRQUFPLEdBQUUsU0FBUSxTQUFTLEdBQUU7QUFBQyxjQUFJLElBQUUsRUFBRSxPQUFNLElBQUUsRUFBRTtBQUFLLGlCQUFPLElBQUksUUFBUSxTQUFTLEdBQUUsR0FBRTtBQUFDLGdCQUFFLEVBQUUsQ0FBQztBQUFFLHFCQUFRLElBQUUsRUFBRSxZQUFZLENBQUMsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLElBQUksTUFBTSxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxHQUFFLElBQUUsU0FBUyxHQUFFO0FBQUMsa0JBQUksSUFBRSxFQUFFO0FBQU8sZUFBQyxFQUFFLEVBQUUsSUFBSSxJQUFFLEVBQUUsV0FBUyxNQUFLLEVBQUUsTUFBSSxLQUFHLEVBQUUsQ0FBQztBQUFBLFlBQUMsR0FBRSxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsRUFBRSxHQUFFO0FBQUMsa0JBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxtQkFBRyxTQUFPLElBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxPQUFLLEdBQUUsRUFBRSxZQUFVLEdBQUUsRUFBRSxVQUFRLEdBQUUsRUFBRTtBQUFBLFlBQUU7QUFBQyxrQkFBSSxLQUFHLEVBQUUsQ0FBQztBQUFBLFVBQUMsQ0FBQztBQUFBLFFBQUMsR0FBRSxLQUFJLFNBQVMsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFLE9BQU0sSUFBRSxFQUFFO0FBQUksaUJBQU8sSUFBSSxRQUFRLFNBQVMsR0FBRSxHQUFFO0FBQUMsZ0JBQUUsRUFBRSxDQUFDO0FBQUUsZ0JBQUksSUFBRSxFQUFFLFlBQVksQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFJLENBQUM7QUFBRSxjQUFFLFlBQVUsU0FBUyxHQUFFO0FBQUMscUJBQU8sRUFBRSxFQUFFLE9BQU8sTUFBTTtBQUFBLFlBQUMsR0FBRSxFQUFFLFVBQVEsR0FBRyxDQUFDO0FBQUEsVUFBQyxDQUFDO0FBQUEsUUFBQyxHQUFFLE9BQU0sRUFBRSxDQUFDLEdBQUUsWUFBVyxHQUFFLE9BQU0sU0FBUyxHQUFFO0FBQUMsY0FBSSxJQUFFLEVBQUUsT0FBTSxJQUFFLEVBQUUsT0FBTSxJQUFFLEVBQUUsT0FBTSxJQUFFLEVBQUU7QUFBTSxpQkFBTyxJQUFJLFFBQVEsU0FBUyxHQUFFLEdBQUU7QUFBQyxnQkFBSSxJQUFFLEVBQUUsWUFBWSxDQUFDLEdBQUUsSUFBRSxFQUFFLGVBQWEsSUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLElBQUUsRUFBRSxNQUFNLENBQUMsSUFBRSxFQUFFLE1BQU07QUFBRSxjQUFFLFlBQVUsRUFBRSxTQUFTLEdBQUU7QUFBQyxxQkFBTyxFQUFFLEVBQUUsT0FBTyxNQUFNO0FBQUEsWUFBQyxDQUFDLEdBQUUsRUFBRSxVQUFRLEdBQUcsQ0FBQztBQUFBLFVBQUMsQ0FBQztBQUFBLFFBQUMsRUFBQztBQUFBLE1BQUM7QUFBQyxVQUFJLElBQUUsRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFFLEVBQUUsV0FBVSxJQUFFLEVBQUUsT0FBTyxJQUFJLFNBQVMsR0FBRTtBQUFDLGVBQU8sRUFBRSxDQUFDO0FBQUEsTUFBQyxDQUFDLEdBQUUsSUFBRSxDQUFDO0FBQUUsYUFBTyxFQUFFLFFBQVEsU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLEVBQUUsSUFBSSxJQUFFO0FBQUEsTUFBQyxDQUFDLEdBQUUsRUFBQyxPQUFNLFVBQVMsYUFBWSxFQUFFLFlBQVksS0FBSyxDQUFDLEdBQUUsT0FBTSxTQUFTLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsWUFBRyxDQUFDLEVBQUUsT0FBTSxJQUFJLE1BQU0sVUFBVSxPQUFPLEdBQUUsYUFBYSxDQUFDO0FBQUUsZUFBTyxFQUFFLENBQUM7QUFBQSxNQUFDLEdBQUUsU0FBUSxLQUFHLEdBQUUsU0FBUSxHQUFHLENBQUMsR0FBRSxRQUFPLEVBQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLGFBQU8sRUFBRSxPQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUU7QUFBTyxlQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUEsTUFBQyxHQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRTtBQUFZLFFBQUU7QUFBVSxVQUFJLElBQUUsR0FBRyxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxNQUFNO0FBQUUsYUFBTSxFQUFDLFFBQU8sRUFBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsSUFBRyxJQUFFLEdBQUcsRUFBRSxjQUFhLEdBQUUsRUFBRSxPQUFNLENBQUM7QUFBRSxRQUFFLE9BQUssRUFBRSxRQUFPLEVBQUUsT0FBTyxRQUFRLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFO0FBQUssVUFBRSxLQUFLLE9BQU8sT0FBTyxLQUFLLFNBQVMsR0FBRTtBQUFDLGlCQUFPLEVBQUUsU0FBTztBQUFBLFFBQUMsQ0FBQyxNQUFJLEVBQUUsT0FBSyxFQUFFLEtBQUssTUFBTSxDQUFDLEdBQUUsRUFBRSxDQUFDLGFBQVksRUFBRSxVQUFRLEVBQUUs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QUFDLGNBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxLQUFLO0FBQVMsYUFBRyxHQUFFLEdBQUUsQ0FBQyxHQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsWUFBVTtBQUFFLGNBQUksSUFBRSxHQUFHLEdBQUUsQ0FBQztBQUFFLFlBQUUsSUFBSSxRQUFRLFNBQVMsR0FBRTtBQUFDLGVBQUcsR0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsRUFBRSxTQUFRLEVBQUUsQ0FBQyxFQUFFLE9BQU87QUFBQSxVQUFDLENBQUMsR0FBRSxFQUFFLE9BQU8sUUFBUSxTQUFTLEdBQUU7QUFBQyxnQkFBRyxFQUFFLFNBQVMsT0FBTSxJQUFJLEVBQUUsUUFBUSwwQ0FBMEM7QUFBRSxnQkFBSSxJQUFFLEVBQUUsWUFBWSxFQUFFLElBQUk7QUFBRSxjQUFFLElBQUksUUFBUSxTQUFTLEdBQUU7QUFBQyxxQkFBTyxHQUFHLEdBQUUsQ0FBQztBQUFBLFlBQUMsQ0FBQyxHQUFFLEVBQUUsT0FBTyxRQUFRLFNBQVMsR0FBRTtBQUFDLGdCQUFFLFlBQVksRUFBRSxJQUFJLEdBQUUsR0FBRyxHQUFFLENBQUM7QUFBQSxZQUFDLENBQUMsR0FBRSxFQUFFLElBQUksUUFBUSxTQUFTLEdBQUU7QUFBQyxxQkFBTyxFQUFFLFlBQVksQ0FBQztBQUFBLFlBQUMsQ0FBQztBQUFBLFVBQUMsQ0FBQztBQUFFLGNBQUksSUFBRSxFQUFFLEtBQUs7QUFBZSxjQUFHLEtBQUcsRUFBRSxLQUFLLFVBQVEsR0FBRTtBQUFDLGVBQUcsR0FBRSxDQUFDLEdBQUUsRUFBRSxrQkFBZ0IsQ0FBQztBQUFFLGdCQUFJLElBQUUsR0FBRyxDQUFDO0FBQUUsY0FBRSxJQUFJLFFBQVEsU0FBUyxHQUFFO0FBQUMsZ0JBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFBLFlBQUMsQ0FBQyxHQUFFLEdBQUcsR0FBRSxDQUFDLEVBQUUsWUFBWSxTQUFTLENBQUMsR0FBRSxHQUFHLEdBQUUsQ0FBQyxFQUFFLFlBQVksU0FBUyxHQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsR0FBRSxFQUFFLFNBQU87QUFBRSxnQkFBSSxJQUFFLEdBQUcsQ0FBQztBQUFFLGlCQUFHLEdBQUc7QUFBRSxnQkFBSSxHQUFFLElBQUUsRUFBRSxPQUFPLFdBQVU7QUFBQyxrQkFBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLEtBQUcsR0FBRTtBQUFDLG9CQUFJLElBQUUsR0FBRyxLQUFLLE1BQUssSUFBSTtBQUFFLGtCQUFFLEtBQUssR0FBRSxDQUFDO0FBQUEsY0FBQztBQUFBLFlBQUMsQ0FBQztBQUFFLG1CQUFPLEtBQUcsT0FBTyxFQUFFLFFBQU0sYUFBVyxFQUFFLFFBQVEsQ0FBQyxJQUFFLEVBQUUsS0FBSyxXQUFVO0FBQUMscUJBQU87QUFBQSxZQUFDLENBQUM7QUFBQSxVQUFDO0FBQUEsUUFBQyxDQUFDLEdBQUUsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFLEtBQUs7QUFBUyxhQUFHLEdBQUUsQ0FBQyxHQUFFLEdBQUcsR0FBRSxDQUFDLEVBQUUsWUFBWSxTQUFTLENBQUMsR0FBRSxHQUFHLEdBQUUsQ0FBQyxFQUFFLFlBQVksU0FBUyxHQUFFLEVBQUUsYUFBWSxFQUFFLFNBQVMsR0FBRSxFQUFFLFNBQU8sRUFBRTtBQUFBLFFBQVMsQ0FBQyxHQUFFLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxZQUFFLE1BQU0saUJBQWlCLFNBQVMsT0FBTyxNQUFJLEtBQUssS0FBSyxFQUFFLE1BQU0sVUFBUSxFQUFFLE1BQUksRUFBRSxLQUFLLFdBQVMsRUFBRSxNQUFNLGtCQUFrQixPQUFPLEdBQUUsT0FBTyxFQUFFLFVBQVUsT0FBTSxFQUFFLGNBQVksRUFBRSxZQUFZLE9BQU8sU0FBUyxHQUFFO0FBQUMsbUJBQU8sTUFBSTtBQUFBLFVBQU8sQ0FBQyxLQUFHLEVBQUUsWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssU0FBUSxTQUFTO0FBQUEsUUFBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUUsZUFBUyxJQUFHO0FBQUMsZUFBTyxFQUFFLFNBQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUUsRUFBRSxRQUFRO0FBQUEsTUFBQztBQUFDLGFBQU8sRUFBRSxFQUFFLEtBQUssV0FBVTtBQUFDLFdBQUcsR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBQyxLQUFJLENBQUMsR0FBRSxLQUFJLENBQUMsR0FBRSxRQUFPLENBQUMsRUFBQyxHQUFFO0FBQUUsV0FBSSxLQUFLLEVBQUUsR0FBRSxDQUFDLEtBQUcsRUFBRSxJQUFJLEtBQUssQ0FBQztBQUFFLFdBQUksS0FBSyxHQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxDQUFDO0FBQUUsWUFBRyxDQUFDLEVBQUUsR0FBRSxJQUFJLEtBQUssQ0FBQyxHQUFFLENBQUMsQ0FBQztBQUFBLGFBQU07QUFBQyxjQUFJLElBQUUsRUFBQyxNQUFLLEdBQUUsS0FBSSxHQUFFLFVBQVMsT0FBRyxLQUFJLENBQUMsR0FBRSxLQUFJLENBQUMsR0FBRSxRQUFPLENBQUMsRUFBQztBQUFFLGNBQUcsTUFBSSxFQUFFLFFBQVEsV0FBUyxPQUFLLE1BQUksRUFBRSxRQUFRLFdBQVMsT0FBSyxFQUFFLFFBQVEsU0FBTyxFQUFFLFFBQVEsS0FBSyxHQUFFLFdBQVMsTUFBRyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUEsZUFBTTtBQUFDLGdCQUFJLElBQUUsRUFBRSxXQUFVLElBQUUsRUFBRSxXQUFVLElBQUU7QUFBTyxpQkFBSSxLQUFLLEVBQUUsR0FBRSxDQUFDLEtBQUcsRUFBRSxJQUFJLEtBQUssQ0FBQztBQUFFLGlCQUFJLEtBQUssR0FBRTtBQUFDLGtCQUFJLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUM7QUFBRSxrQkFBRSxFQUFFLFFBQU0sRUFBRSxPQUFLLEVBQUUsT0FBTyxLQUFLLENBQUMsSUFBRSxFQUFFLElB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QVU7QUFBQyxpQkFBTyxVQUFVLFVBQVUsRUFBRSxRQUFRLENBQUM7QUFBQSxRQUFDO0FBQUUsWUFBRSxZQUFZLEdBQUUsR0FBRyxHQUFFLEVBQUU7QUFBQSxNQUFDLENBQUMsRUFBRSxRQUFRLFdBQVU7QUFBQyxlQUFPLGNBQWMsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxRQUFJO0FBQUcsYUFBUyxHQUFHLEdBQUU7QUFBQyxhQUFNLEVBQUUsVUFBUztBQUFBLElBQUU7QUFBQyxRQUFJLElBQUUsU0FBUyxHQUFFLEdBQUU7QUFBQyxVQUFHLEtBQUssR0FBRSxNQUFLLFVBQVUsU0FBTyxFQUFDLEdBQUUsR0FBRSxNQUFLLEdBQUUsSUFBRyxVQUFVLFNBQU8sSUFBRSxJQUFFLEVBQUMsSUFBRSxFQUFDLEdBQUUsRUFBQyxDQUFDO0FBQUEsV0FBTTtBQUFDLFlBQUksSUFBRSxJQUFJO0FBQUUsZUFBTyxLQUFHLE9BQU0sS0FBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBRSxPQUFHLEVBQUUsWUFBVyxLQUFHLEVBQUMsS0FBSSxTQUFTLEdBQUU7QUFBQyxhQUFPLEdBQUcsTUFBSyxDQUFDLEdBQUU7QUFBQSxJQUFJLEdBQUUsUUFBTyxTQUFTLEdBQUU7QUFBQyxhQUFPLEdBQUcsTUFBSyxHQUFFLENBQUMsR0FBRTtBQUFBLElBQUksR0FBRSxTQUFRLFNBQVMsR0FBRTtBQUFDLFVBQUksSUFBRTtBQUFLLGFBQU8sRUFBRSxRQUFRLFNBQVMsR0FBRTtBQUFDLGVBQU8sR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQyxHQUFFO0FBQUEsSUFBSSxHQUFFLFFBQU8sU0FBUyxHQUFFO0FBQUMsVUFBSSxJQUFFLEdBQUcsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO0FBQU0sYUFBTyxLQUFHLEVBQUUsRUFBRSxNQUFLLENBQUMsS0FBRyxLQUFHLEVBQUUsRUFBRSxJQUFHLENBQUMsS0FBRztBQUFBLElBQUMsRUFBQyxHQUFFLEdBQUcsRUFBRSxJQUFFLFdBQVU7QUFBQyxhQUFPLEdBQUcsSUFBSTtBQUFBLElBQUMsR0FBRSxHQUFHO0FBQUUsYUFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsR0FBRSxDQUFDO0FBQUUsVUFBRyxDQUFDLE1BQU0sQ0FBQyxHQUFFO0FBQUMsWUFBRyxJQUFFLEVBQUUsT0FBTSxXQUFXO0FBQUUsWUFBRyxHQUFHLENBQUMsRUFBRSxRQUFPLEVBQUUsR0FBRSxFQUFDLE1BQUssR0FBRSxJQUFHLEdBQUUsR0FBRSxFQUFDLENBQUM7QUFBRSxZQUFJLElBQUUsRUFBRSxHQUFFLElBQUUsRUFBRTtBQUFFLFlBQUcsRUFBRSxHQUFFLEVBQUUsSUFBSSxJQUFFLEVBQUUsUUFBTyxJQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsSUFBRSxFQUFFLElBQUUsRUFBQyxNQUFLLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLE1BQUssR0FBRSxLQUFJLEdBQUUsR0FBRyxDQUFDO0FBQUUsWUFBRyxFQUFFLEdBQUUsRUFBRSxFQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsR0FBRyxHQUFFLEdBQUUsQ0FBQyxJQUFFLEVBQUUsSUFBRSxFQUFDLE1BQUssR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsTUFBSyxHQUFFLEtBQUksR0FBRSxHQUFHLENBQUM7QUFBRSxVQUFFLEdBQUUsRUFBRSxJQUFJLElBQUUsTUFBSSxFQUFFLE9BQUssR0FBRSxFQUFFLElBQUUsTUFBSyxFQUFFLElBQUUsSUFBRSxFQUFFLElBQUUsSUFBRSxJQUFHLEVBQUUsR0FBRSxFQUFFLEVBQUUsSUFBRSxNQUFJLEVBQUUsS0FBRyxHQUFFLEVBQUUsSUFBRSxNQUFLLEVBQUUsSUFBRSxFQUFFLElBQUUsRUFBRSxFQUFFLElBQUUsSUFBRTtBQUFHLFlBQUksSUFBRSxDQUFDLEVBQUU7QUFBRSxhQUFHLENBQUMsRUFBRSxLQUFHLEdBQUcsR0FBRSxDQUFDLEdBQUUsS0FBRyxLQUFHLEdBQUcsR0FBRSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsZUFBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFLE1BQUssSUFBRSxFQUFFLElBQUcsSUFBRSxFQUFFLEdBQUUsSUFBRSxFQUFFO0FBQUUsV0FBRyxHQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUcsRUFBRSxHQUFFLENBQUMsR0FBRSxLQUFHLEVBQUUsR0FBRSxDQUFDO0FBQUEsTUFBQztBQUFDLFNBQUcsQ0FBQyxLQUFHLEVBQUUsR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRSxFQUFFLEtBQUs7QUFBRSxVQUFHLEVBQUUsS0FBSyxRQUFNO0FBQUcsZUFBUSxJQUFFLEVBQUUsT0FBTSxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxHQUFFLElBQUUsRUFBRSxPQUFNLENBQUMsRUFBRSxRQUFNLENBQUMsRUFBRSxRQUFNO0FBQUMsWUFBRyxFQUFFLEVBQUUsTUFBSyxFQUFFLEVBQUUsS0FBRyxLQUFHLEVBQUUsRUFBRSxJQUFHLEVBQUUsSUFBSSxLQUFHLEVBQUUsUUFBTTtBQUFHLFVBQUUsRUFBRSxNQUFLLEVBQUUsSUFBSSxJQUFFLElBQUUsS0FBRyxJQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksR0FBRyxRQUFNLEtBQUcsSUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEdBQUc7QUFBQSxNQUFLO0FBQUMsYUFBTTtBQUFBLElBQUU7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLFVBQUksSUFBRSxHQUFHLENBQUMsSUFBRSxPQUFLLEVBQUMsR0FBRSxHQUFFLEdBQUUsRUFBQztBQUFFLGFBQU0sRUFBQyxNQUFLLFNBQVMsR0FBRTtBQUFDLGlCQUFRLElBQUUsVUFBVSxTQUFPLEdBQUUsSUFBRyxTQUFPLEVBQUUsR0FBRTtBQUFBLFVBQUMsS0FBSztBQUFFLGdCQUFHLEVBQUUsSUFBRSxHQUFFLEVBQUUsUUFBSyxFQUFFLEVBQUUsS0FBRyxFQUFFLEdBQUUsRUFBRSxFQUFFLElBQUksSUFBRSxJQUFHLEtBQUUsRUFBQyxJQUFHLEdBQUUsR0FBRSxFQUFFLEVBQUUsR0FBRSxHQUFFLEVBQUM7QUFBQSxnQkFBTyxRQUFLLEVBQUUsRUFBRSxJQUFHLEtBQUUsRUFBQyxJQUFHLEdBQUUsR0FBRSxFQUFFLEVBQUUsR0FBRSxHQUFFLEVBQUM7QUFBQSxVQUFFLEtBQUs7QUFBRSxnQkFBRyxFQUFFLElBQUUsR0FBRSxDQUFDLEtBQUcsRUFBRSxHQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUcsRUFBRSxRQUFNLEVBQUMsT0FBTSxFQUFFLEdBQUUsTUFBSyxNQUFFO0FBQUEsVUFBRSxLQUFLO0FBQUUsZ0JBQUcsRUFBRSxFQUFFLEdBQUU7QUFBQyxnQkFBRSxJQUFFLEdBQUUsSUFBRSxFQUFDLElBQUcsR0FBRSxHQUFFLEVBQUUsRUFBRSxHQUFFLEdBQUUsRUFBQztBQUFFO0FBQUEsWUFBUTtBQUFBLFVBQUMsS0FBSztBQUFFLGdCQUFFLEVBQUU7QUFBQSxRQUFFO0FBQUMsZUFBTSxFQUFDLE1BQUssS0FBRTtBQUFBLE1BQUMsRUFBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLFVBQUksR0FBRSxHQUFFLE9BQUssSUFBRSxFQUFFLE9BQUssUUFBTSxNQUFJLFNBQU8sU0FBTyxFQUFFLE1BQUksUUFBTSxJQUFFLEVBQUUsT0FBSyxRQUFNLE1BQUksU0FBTyxTQUFPLEVBQUUsTUFBSSxJQUFHLElBQUUsSUFBRSxJQUFFLE1BQUksSUFBRSxLQUFHLE1BQUk7QUFBRyxVQUFHLEdBQUU7QUFBQyxZQUFJLElBQUUsTUFBSSxNQUFJLE1BQUksS0FBSSxJQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUUsT0FBSyxFQUFFLE1BQUssRUFBRSxLQUFHLEVBQUUsSUFBRyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsSUFBRSxHQUFFLEVBQUUsSUFBRSxHQUFHLENBQUM7QUFBQSxNQUFDO0FBQUMsUUFBRSxJQUFFLEdBQUcsQ0FBQztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLEdBQUUsSUFBRSxFQUFFO0FBQUUsY0FBTyxJQUFFLElBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRSxFQUFFLENBQUMsSUFBRSxFQUFFLElBQUUsSUFBRSxFQUFFLElBQUUsS0FBRztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsYUFBTyxFQUFFLENBQUMsRUFBRSxRQUFRLFNBQVMsR0FBRTtBQUFDLFVBQUUsQ0FBQyxJQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsTUFBQyxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLGFBQU8sRUFBRSxPQUFLLEVBQUUsT0FBSyxPQUFPLEtBQUssQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLENBQUMsS0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUksS0FBRyxDQUFDLEdBQUUsS0FBRyxDQUFDLEdBQUUsS0FBRztBQUFHLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxTQUFHLElBQUcsQ0FBQyxHQUFFLE9BQUssS0FBRyxNQUFHLFdBQVcsV0FBVTtBQUFDLGFBQUc7QUFBRyxZQUFJLElBQUU7QUFBRyxhQUFHLENBQUMsR0FBRSxHQUFHLEdBQUUsS0FBRTtBQUFBLE1BQUMsR0FBRSxDQUFDO0FBQUEsSUFBRTtBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxZQUFJLFdBQVMsSUFBRTtBQUFJLFVBQUksSUFBRSxvQkFBSTtBQUFJLFVBQUcsRUFB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LENBQUMsR0FBRSxFQUFFLGdCQUFjLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxHQUFFO0FBQUMsZ0JBQUksSUFBRSxNQUFJLElBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDO0FBQUUsY0FBRSxHQUFFLElBQUUsR0FBRSxDQUFDO0FBQUEsVUFBQztBQUFDLGlCQUFPLEVBQUUsS0FBSyxTQUFTLEdBQUUsR0FBRTtBQUFDLG1CQUFPLEVBQUUsVUFBUSxFQUFFO0FBQUEsVUFBTyxDQUFDLEdBQUU7QUFBQSxRQUFDO0FBQUMsWUFBSSxJQUFFLEVBQUUsRUFBRSxXQUFXLFNBQVEsR0FBRSxFQUFFLFVBQVU7QUFBRSxVQUFFLEtBQUssSUFBRSxDQUFDLENBQUM7QUFBRSxpQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQVEsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLGNBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxZQUFFLEVBQUUsU0FBUSxHQUFFLENBQUM7QUFBQSxRQUFDO0FBQUMsaUJBQVMsRUFBRSxHQUFFO0FBQUMsY0FBSSxJQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBRSxpQkFBTyxLQUFHLEVBQUUsQ0FBQztBQUFBLFFBQUM7QUFBQyxpQkFBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLGlCQUFNLEVBQUMsTUFBSyxFQUFFLFNBQU8sSUFBRSxJQUFFLEVBQUUsTUFBSyxPQUFNLEdBQUcsRUFBRSxPQUFNLEVBQUUsWUFBVSxFQUFFLFVBQVEsRUFBRSxTQUFRLENBQUMsR0FBRSxXQUFVLE1BQUcsT0FBTSxHQUFHLEVBQUUsT0FBTSxFQUFFLFlBQVUsRUFBRSxVQUFRLEVBQUUsU0FBUSxDQUFDLEdBQUUsV0FBVSxLQUFFO0FBQUEsUUFBQztBQUFDLGlCQUFTLEVBQUUsR0FBRTtBQUFDLGNBQUksSUFBRSxFQUFFLE1BQU07QUFBTSxpQkFBTyxFQUFFLFlBQVUsRUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBQyxPQUFNLEVBQUMsT0FBTSxFQUFFLGVBQWMsT0FB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QUMsQ0FBQyxFQUFFLE1BQU0sU0FBUyxHQUFFO0FBQUMsdUJBQU8sRUFBRSxRQUFRLFNBQVMsR0FBRTtBQUFDLHlCQUFPLEVBQUUsV0FBUyxFQUFFLFFBQVEsQ0FBQztBQUFBLGdCQUFDLENBQUMsR0FBRSxRQUFRLE9BQU8sQ0FBQztBQUFBLGNBQUMsQ0FBQztBQUFBLFlBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFLEdBQUU7QUFBQyxtQkFBTyxFQUFFLEVBQUUsT0FBTSxFQUFFLE9BQU0sR0FBRztBQUFBLFVBQUM7QUFBQyxtQkFBUyxFQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsbUJBQU8sRUFBRSxNQUFNLEVBQUMsT0FBTSxHQUFFLFFBQU8sT0FBRyxPQUFNLEVBQUMsT0FBTSxHQUFFLE9BQU0sRUFBQyxHQUFFLE9BQU0sRUFBQyxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxrQkFBSSxJQUFFLEVBQUU7QUFBTyxxQkFBTyxFQUFFLEVBQUMsTUFBSyxVQUFTLE1BQUssR0FBRSxPQUFNLEVBQUMsQ0FBQyxFQUFFLEtBQUssU0FBUyxHQUFFO0FBQUMsdUJBQU8sRUFBRSxjQUFZLElBQUUsUUFBUSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBRSxFQUFFLFNBQU8sSUFBRSxFQUFDLFVBQVMsQ0FBQyxHQUFFLGFBQVksR0FBRSxZQUFXLE9BQU0sSUFBRSxFQUFFLEdBQUUsRUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDLEdBQUUsRUFBQyxPQUFNLEVBQUUsRUFBRSxTQUFPLENBQUMsR0FBRSxXQUFVLEtBQUUsQ0FBQyxHQUFFLENBQUM7QUFBQSxjQUFDLENBQUM7QUFBQSxZQUFDLENBQUM7QUFBQSxVQUFDO0FBQUEsUUFBQyxFQUFDLENBQUM7QUFBRSxlQUFPO0FBQUEsTUFBQyxFQUFDLENBQUM7QUFBQSxJQUFDLEVBQUM7QUFBRSxhQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxhQUFPLEVBQUUsU0FBTyxRQUFNLFFBQVEsUUFBUSxDQUFDLENBQUMsSUFBRSxFQUFFLFFBQVEsRUFBQyxPQUFNLEVBQUUsT0FBTSxNQUFLLEdBQUUsT0FBTSxZQUFXLENBQUM7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBRztBQUFDLFlBQUcsQ0FBQyxLQUFHLEVBQUUsS0FBSyxTQUFPLEVBQUUsT0FBTyxRQUFPO0FBQUssaUJBQVEsSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsS0FBSyxVQUFRLElBQUUsRUFBRSxRQUFPLEVBQUUsRUFBRSxHQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUMsTUFBSSxNQUFJLEVBQUUsS0FBSyxJQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRSxFQUFFO0FBQUcsZUFBTyxFQUFFLFdBQVMsRUFBRSxTQUFPLElBQUU7QUFBQSxNQUFJLFFBQU07QUFBQyxlQUFPO0FBQUEsTUFBSTtBQUFBLElBQUM7QUFBQyxRQUFJLEtBQUcsRUFBQyxPQUFNLFVBQVMsT0FBTSxJQUFHLFFBQU8sU0FBUyxHQUFFO0FBQUMsYUFBTSxFQUFDLE9BQU0sU0FBUyxHQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsZUFBTyxFQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsR0FBRSxFQUFDLFNBQVEsU0FBUyxHQUFFO0FBQUMsY0FBRyxDQUFDLEVBQUUsTUFBTSxRQUFPLEVBQUUsUUFBUSxDQUFDO0FBQUUsY0FBSSxJQUFFLEdBQUcsRUFBRSxNQUFLLEVBQUUsTUFBTSxRQUFPLEVBQUUsVUFBUSxPQUFPO0FBQUUsaUJBQU8sSUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxtQkFBTyxFQUFFLE1BQU0sU0FBTyxFQUFDLE1BQUssRUFBRSxNQUFLLFFBQU8sRUFBRSxVQUFRLFVBQVEsR0FBRyxDQUFDLElBQUUsRUFBQyxHQUFFO0FBQUEsVUFBQyxDQUFD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R0FBRSxHQUFFLENBQUM7QUFBQSxVQUFDLFdBQVMsR0FBRTtBQUFDLGdCQUFJLElBQUUsRUFBQyxPQUFNLElBQUUsRUFBRSxXQUFTLFFBQU0sTUFBSSxTQUFPLElBQUUsRUFBRSxTQUFRLEtBQUksSUFBRSxFQUFFLFdBQVMsUUFBTSxNQUFJLFNBQU8sSUFBRSxFQUFFLFFBQU87QUFBRSxjQUFFLElBQUksQ0FBQyxHQUFFLEVBQUUsSUFBSSxDQUFDO0FBQUEsVUFBQyxNQUFNLEdBQUUsSUFBSSxDQUFDLEdBQUUsRUFBRSxJQUFJLENBQUMsR0FBRSxFQUFFLFFBQVEsUUFBUSxTQUFTLEdBQUU7QUFBQyxtQkFBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztBQUFBLFVBQUMsQ0FBQztBQUFFLGlCQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxtQkFBTyxNQUFJLEVBQUUsU0FBTyxTQUFPLEVBQUUsU0FBTyxXQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sR0FBRSxLQUFHLEVBQUUsUUFBUSxTQUFTLEdBQUU7QUFBQyx1QkFBUSxJQUFFLEVBQUUsT0FBTyxJQUFJLFNBQVMsR0FBRTtBQUFDLHVCQUFPLEVBQUUsV0FBVyxDQUFDO0FBQUEsY0FBQyxDQUFDLEdBQUUsSUFBRSxFQUFFLFFBQVEsVUFBVSxTQUFTLEdBQUU7QUFBQyx1QkFBTyxNQUFJLEVBQUU7QUFBQSxjQUFPLENBQUMsR0FBRSxJQUFFLEdBQUUsS0FBRyxFQUFFLFFBQVEsUUFBTyxJQUFFLElBQUcsRUFBRSxFQUFFLEdBQUUsQ0FBQyxFQUFFLENBQUMsSUFBRSxFQUFFLFFBQVEsQ0FBQztBQUFFLGdCQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztBQUFBLFlBQUMsQ0FBQyxJQUFHLEVBQUUsZUFBYSxHQUFHLEVBQUUsZ0JBQWMsQ0FBQyxHQUFFLENBQUMsR0FBRTtBQUFBLFVBQUMsQ0FBQztBQUFBLFFBQUMsRUFBQyxDQUFDLEdBQUUsSUFBRSxTQUFTLEdBQUU7QUFBQyxjQUFJLEdBQUUsR0FBRSxJ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QUFjLEVBQUUsUUFBTztBQUFLLFVBQUksSUFBRSxFQUFFLENBQUMsR0FBRSxDQUFDO0FBQUUsYUFBTyxFQUFFLEVBQUUsSUFBSSxNQUFJLEVBQUUsT0FBSyxFQUFFLEtBQUssT0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLGVBQU0sRUFBRSxLQUFLLEVBQUU7QUFBQSxNQUFTLENBQUMsSUFBRyxZQUFXLEtBQUcsRUFBRSxFQUFFLE1BQU0sTUFBSSxFQUFFLFNBQU8sRUFBRSxPQUFPLE9BQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxlQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUEsTUFBUyxDQUFDLElBQUc7QUFBQSxJQUFDO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLGFBQU8sRUFBRSxVQUFRLFNBQU8sT0FBRyxFQUFFLFlBQVUsRUFBRSxHQUFFLEVBQUUsS0FBSyxJQUFFLElBQUUsRUFBRSxHQUFFLEVBQUUsS0FBSyxLQUFHO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxhQUFPLEVBQUUsVUFBUSxTQUFPLE9BQUcsRUFBRSxZQUFVLEVBQUUsR0FBRSxFQUFFLEtBQUssSUFBRSxJQUFFLEVBQUUsR0FBRSxFQUFFLEtBQUssS0FBRztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsYUFBTyxHQUFHLEdBQUUsQ0FBQyxLQUFHLEdBQUcsR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUcsQ0FBQyxLQUFHLEVBQUUsV0FBUyxFQUFFLFFBQU87QUFBRSxVQUFJLElBQUUsRUFBRSxNQUFNLE9BQU0sSUFBRSxFQUFFLFlBQVcsSUFBRSxFQUFFLE1BQU0sT0FBTSxJQUFFLEVBQUUsT0FBTyxZQUFXLElBQUUsRUFBRSxZQUFXLElBQUUsRUFBRSxZQUFXLEtBQUcsRUFBRSxpQkFBZSxHQUFHLFlBQVcsSUFBRSxFQUFFLE9BQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxZQUFJLElBQUUsR0FBRSxJQUFFLENBQUM7QUFBRSxZQUFHLEVBQUUsU0FBTyxTQUFPLEVBQUUsU0FBTyxNQUFNLFVBQVEsSUFBRSxJQUFJLEtBQUUsSUFBRSxFQUFFLE9BQU8sU0FBTyxHQUFFLEtBQUcsR0FBRSxFQUFFLEdBQUU7QUFBQyxjQUFJLElBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFFLGNBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFFO0FBQUMsZ0JBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxhQUFDLEtBQUcsRUFBRSxDQUFDLElBQUUsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLHFCQUFPLEdBQUcsR0FBRSxDQUFDO0FBQUEsWUFBQyxDQUFDLElBQUUsR0FBRyxHQUFFLENBQUMsT0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFFLEVBQUUsS0FBSyxDQUFDO0FBQUEsVUFBRTtBQUFBLFFBQUM7QUFBQyxnQkFBTyxFQUFFLE1BQUs7QUFBQSxVQUFDLEtBQUksT0FBTTtBQUFDLGdCQUFJLElBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQU8sRUFBRSxJQUFJLFNBQVMsR0FBRTtBQUFDLHFCQUFPLEVBQUUsQ0FBQztBQUFBLFlBQUMsQ0FBQyxJQUFFLENBQUM7QUFBRSxnQkFBRSxFQUFFLE9BQU8sRUFBRSxTQUFPLEVBQUUsT0FBTyxTQUFTLEdBQUU7QUFBQyxrQkFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLHFCQUFPLEVBQUUsT0FBTyxDQUFDLElBQUUsU0FBSSxFQUFFLE9BQU8sQ0FBQyxHQUFFO0FBQUEsWUFBRyxDQUFDLElBQUUsRUFBRSxJQUFJLFNBQVMsR0FBRTtBQUFDLHFCQUFPLEVBQUUsQ0FBQztBQUFBLFlBQUMsQ0FBQyxFQUFFLE9BQU8sU0FBUyxHQUFFO0FBQUMscUJBQU8sRUFBRSxPQUFPLENBQUMsSUFBRSxTQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUU7QUFBQSxZQUFHLENBQUMsQ0FBQztBQUFFO0FBQUEsVUFBSztBQUFBLFVBQUMsS0FBSSxPQUFNO0FBQUMsZ0JBQUksSUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxJQUFJLFNBQVMsR0FBRTtBQUFDLHFCQUFPLEVBQUUsQ0FBQztBQUFBLFlBQUMsQ0FBQyxDQUFDO0FBQUUsZ0JBQUUsRUFBRSxPQUFPLFNBQVMsR0FBRTtBQUFDLHFCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBTyxFQUFFLENBQUMsSUFBRSxDQUFDO0FBQUEsWUFBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQU8sSUFBRSxFQUFFLElBQUksU0FBUyxHQUFFO0FBQUMscUJBQU8sRUFBRSxDQUFDO0FBQUEsWUFBQyxDQUFDLENBQUM7QUFBRTtBQUFBLFVBQUs7QUFBQSxVQUFDLEtBQUk7QUFBUyxnQkFBSSxJQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJO0FBQUUsZ0JBQUUsRUFBRSxPQUFPLFNBQVMsR0FBRTtBQUFDLHFCQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBTyxFQUFFLENBQUMsSUFBRSxDQUFDO0FBQUEsWUFBQyxDQUFDO0FBQUU7QUFBQSxVQUFNLEtBQUk7QUFBYyxnQkFBSSxJQUFFLEVBQUU7QUFBTSxnQkFBRSxFQUFFLE9BQU8sU0FBUyxHQUFFO0FBQUMscUJBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFFLENBQUM7QUFBQSxZQUFDLENBQUM7QUFBRTtBQUFBLFFBQUs7QUFBQyxlQUFPO0FBQUEsTUFBQyxHQUFFLENBQUM7QUFBRSxhQUFPLE1BQUksSUFBRSxLQUFHLEVBQUUsS0FBSyxTQUFTLEdBQUUsR0FBRTtBQUFDLGVBQU8sRUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQyxLQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7QUFBQSxNQUFDLENBQUMsR0FBRSxFQUFFLFNBQU8sRUFBRSxRQUFNLElBQUUsTUFBSSxFQUFFLFNBQU8sRUFBRSxRQUFNLEVBQUUsU0FBTyxFQUFFLFFBQU0sRUFBRSxXQUFTLEVBQUUsU0FBTyxFQUFFLFNBQU8sRUFBRSxVQUFRLEVBQUUsUUFBTSxRQUFLLElBQUUsT0FBTyxPQUFPLENBQUMsSUFBRTtBQUFBLElBQUU7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsYUFBTyxFQUFFLEVBQUUsT0FBTSxFQUFFLEtBQUssTUFBSSxLQUFHLEVBQUUsRUFBRSxPQUFNLEVBQUUsS0FBSyxNQUFJLEtBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBVyxDQUFDLENBQUMsRUFBRSxhQUFXLENBQUMsQ0FBQyxFQUFFLGFBQVcsQ0FBQyxDQUFDLEVBQUU7QUFBQSxJQUFTO0FBQUMsYUFBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFHLE1BQUksT0FBTyxRQUFPLE1BQUksU0FBTyxLQUFHO0FBQUUsVUFBRyxNQUFJLE9BQU8sUUFBTztBQUFFLFVBQUksSUFBRSxFQUFFLEdBQUUsQ0FBQztBQUFFLFVBQUcsTUFBSSxHQUFFO0FBQUMsWUFBRyxLQUFHLEVBQUUsUUFBTztBQUFFLFlBQUcsRUFBRSxRQUFPO0FBQUUsWUFBRyxFQUFFLFFBQU07QUFBQSxNQUFFO0FBQUMsYUFBTztBQUFBLElBQUM7QUFBQyxhQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUcsTUFBSSxPQUFPLFFBQU8sTUFBSSxTQUFPLElBQUU7QUFBRSxVQUFHLE1BQUksT0FBTyxRQUFNO0FBQUcsVUFBSSxJQUFFLEVBQUUsR0FBRSxDQUFDO0FBQUUsVUFBRyxNQUFJLEdBQUU7QUFBQyxZQUFHLEtBQUcsRUFBRSxRQUFPO0FBQUUsWUFBRyxFQUFFLFFBQU07QUFBRyxZQUFHLEVBQUUsUUFBTztBQUFBLE1BQUM7QUFBQyxhQUFPO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxhQUFPLEdBQUcsRUFBRSxPQUFNLEVBQUUsT0FBTSxFQUFFLFdBQVUsRUFBRSxTQUFTLEtBQUcsS0FBRyxHQUFHLEVBQUUsT0FBTSxFQUFFLE9BQU0sRUFBRSxXQUFVLEVBQUUsU0FBUyxLQUFHO0FBQUEsSUFBQztBQUFDLGFBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEdBQUcsU0FBUyxPQUFPLEdBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQUUsVUFBRyxDQUFDLEVBQUUsUUFBTSxDQUFDO0FBQUUsVUFBSSxJQUFFLEVBQUUsUUFBUSxDQUFDO0FBQUUsVUFBRyxDQUFDLEVBQUUsUUFBTSxDQUFDLE1BQUssT0FBRyxHQUFFLElBQUk7QUFBRSxVQUFJLElBQUUsRUFBRSxRQUFNLEVBQUUsTUFBTSxNQUFNLE9BQUssTUFBSyxJQUFFLEVBQUUsS0FBRyxFQUFFO0FBQUUsVUFBRyxDQUFDLEVBQUUsUUFBTSxDQUFDLE1BQUssT0FBRyxHQUFFLElBQUk7QUFBRSxjQUFPLEdBQUU7QUFBQSxRQUFDLEtBQUk7QUFBUSxjQUFJLElBQUUsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLG1CQUFPLEVBQUUsSUFBSSxVQUFRLEVBQUUsU0FBTyxFQUFFLElBQUksV0FBUyxFQUFFLFVBQVEsR0FBRyxFQUFFLElBQUksTUFBTSxPQUFNLEVBQUUsTUFBTSxLQUFLO0FBQUEsVUFBQyxDQUFDO0FBQUUsY0FBRyxFQUFFLFFBQU0sQ0FBQyxHQUFFLE1BQUcsR0FBRSxDQUFDO0FBQUUsY0FBSSxJQUFFLEVBQUUsS0FBSyxTQUFTLEdBQUU7QUFBQyxnQkFBSSxJQUFFLFdBQVUsRUFBRSxNQUFJLEVBQUUsSUFBSSxRQUFNLElBQUU7QUFBRSxtQkFBTyxLQUFHLEVBQUUsVUFBUSxFQUFFLFNBQU8sRUFBRSxJQUFJLFNBQU8sU0FBSyxHQUFHLEVBQUUsSUFBSSxNQUFNLE9BQU0sRUFBRSxNQUFNLEtBQUs7QUFBQSxVQUFDLENBQUM7QUFBRSxpQkFBTSxDQUFDLEdBQUUsT0FBRyxHQUFFLENBQUM7QUFBQSxRQUFFLEtBQUk7QUFBUSxjQUFJLElBQUUsRUFBRSxLQUFLLFNBQVMsR0FBRTtBQUFDLG1CQUFPLEdBQUcsRUFBRSxJQUFJLE1BQU0sT0FBTSxFQUFFLE1BQU0sS0FBSztBQUFBLFVBQUMsQ0FBQztBQUFFLGlCQUFNLENBQUMsR0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBc2EzQjtBQUNTLElBQU8saUJBQVFBOzs7QUNsYXpCLFNBQVMsbUJBQW1CLEtBQUssY0FBTTtBQVd2QyxJQUFNLDJCQUEyQixDQUMvQixrQkFDQSxjQUFtQyxXQUNoQztBQUNILFFBQU0sY0FBYyxDQUFDLFNBQThCO0FBQ2pELFVBQU0sYUFBYSxTQUFTO0FBQzVCLGVBQVc7QUFBQSxNQUNULE9BQU8sYUFBYSw2QkFBNkI7QUFBQSxNQUNqRCxTQUFTLGFBQ1Asb0JBQUMsb0JBQWEsSUFFZCxvQkFBQywyQkFBd0Isa0JBQW9DO0FBQUEsTUFFL0QsU0FBUztBQUFBLE1BQ1QsU0FDRSxpQ0FDRTtBQUFBO0FBQUEsVUFBQyxVQUFVLGVBQWU7QUFBQSxVQUF6QjtBQUFBLFlBQ0MsT0FBTyxhQUFhLHVCQUF1QjtBQUFBLFlBQzNDLFdBQVU7QUFBQSxZQUVWO0FBQUEsY0FBQztBQUFBO0FBQUEsZ0JBQ0MsV0FBVyxnQ0FBZ0MsYUFBYSxTQUFTLFVBQVU7QUFBQSxnQkFDM0UsU0FBUyxNQUFNLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFBQSxnQkFFMUQsdUJBQ0Msb0JBQUMsTUFBTSxNQUFNLFdBQVosRUFBc0IsTUFBTSxJQUFJLElBRWpDLG9CQUFDLE1BQU0sTUFBTSxVQUFaLEVBQXFCLE1BQU0sSUFBSTtBQUFBO0FBQUEsWUFFcEM7QUFBQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLG9CQUFDLFVBQVUsZUFBZSxnQkFBekIsRUFBd0MsT0FBTSxVQUFTLFdBQVUsT0FDaEU7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNDLFdBQVU7QUFBQSxZQUNWLFNBQVMsTUFBTSxPQUFPLEtBQUssdURBQXVEO0FBQUEsWUFFbEYsOEJBQUMsTUFBTSxNQUFNLFFBQVosRUFBbUIsTUFBTSxJQUFJO0FBQUE7QUFBQSxRQUNoQyxHQUNGO0FBQUEsU0FDRjtBQUFBLElBRUosQ0FBQztBQUFBLEVBQ0g7QUFDQSxjQUFZLFdBQVc7QUFDekI7QUFFQSxJQUFNLHlCQUF5QixJQUFJLFVBQVUsY0FBYyxLQUFLO0FBQUEsRUFDOUQsVUFBVTtBQUFBLEVBQ1YsYUFBYSxNQUFNLEtBQUs7QUFBQSxFQUN4QixTQUFTLE9BQU8sU0FBYyxPQUFZLFdBQWdCO0FBQ3hELFVBQU0sU0FBYyxXQUFXLFFBQVEsS0FBSztBQUM1QyxVQUFNLE1BQU0sT0FBTztBQUNuQixVQUFNLE9BQU8sT0FBTztBQUNwQixVQUFNLE9BQU8sVUFBVSxJQUFJLEtBQUssR0FBRyxHQUFHO0FBRXRDLFVBQU1DLGVBQ0osVUFBVSxTQUFTLGVBQ25CLFVBQVUsU0FBUyxTQUFTLFFBQVEsT0FBTyxJQUFJLGFBQWEsQ0FBQztBQUUvRCxVQUFNLG1CQUFxQztBQUFBLE1BQ3pDO0FBQUEsTUFDQSxNQUNFLFNBRUcsTUFBTUEsYUFBWSxZQUFZLEtBQUssQ0FBQyxDQUFDLElBR3JDLFFBQ0g7QUFBQSxNQUNGLE1BQU0sUUFBUTtBQUFBLElBQ2hCO0FBQ0EsNkJBQXlCLGdCQUFnQjtBQUFBLEVBQzNDO0FBQUEsRUFDQSxTQUFTO0FBQUEsRUFDVCxXQUFXLENBQUMsT0FBWSxVQUFlLFlBQWlCO0FBQ3RELFVBQU0sU0FBYyxXQUFXLEtBQUs7QUFDcEMsVUFBTSxPQUFPLFVBQVUsSUFBSSxLQUFLLE9BQU8sR0FBRyxHQUFHO0FBQzdDLFdBQU8sU0FBUyxVQUFVLElBQUksS0FBSyxZQUFZLFNBQVMsVUFBVSxJQUFJLEtBQUs7QUFBQSxFQUM3RTtBQUNGLENBQUM7QUFFRCx1QkFBdUIsU0FBUzsiLAogICJuYW1lcyI6IFsiQ29tcG9uZW50IiwgIkZyYWdtZW50IiwgIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwgInZlcnNpb24iLCAicmVxdWlyZSIsICJzaGVldCIsICJzaGVldCIsICJyZXF1aXJlIiwgInNoZWV0IiwgInNoZWV0IiwgInNoZWV0IiwgIlRyYWNrRGV0YWlscyIsICJUcmFja0NvbnRyb2xzIiwgIkR1cGxpY2F0ZUl0ZW0iLCAiRHVwbGljYXRlR3JvdXBDb21wb25lbnQiLCAiRHVwbGljYXRlR3JvdXBMaXN0IiwgImNvbXBvbmVudCIsICJzaGVldCIsICJQbGF5bGlzdEFQSSJdCn0K
