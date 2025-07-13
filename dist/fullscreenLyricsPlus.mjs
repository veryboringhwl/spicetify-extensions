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

// external-global:react-dom
var require_react_dom = __commonJS({
  "external-global:react-dom"(exports, module) {
    module.exports = Spicetify.ReactDOM;
  }
});

// external-global:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "external-global:react/jsx-runtime"(exports, module) {
    module.exports = Spicetify.ReactJSX;
  }
});

// extensions/fullscreenLyricsPlus/src/app.jsx
var import_react_dom = __toESM(require_react_dom());

// extensions/fullscreenLyricsPlus/src/styles.css
(function() {
  const css = '.fullscreen {\n  .Root__top-container {\n    grid-template-areas:\n      "main-view"\n      "main-view" !important;\n    gap: 0px !important;\n  }\n\n  .main-topBar-container {\n    left: 30px;\n  }\n\n  .Root__globalNav,\n  .Root__nav-bar,\n  .Root__now-playing-bar,\n  .Root__right-sidebar {\n    display: none !important;\n  }\n}';
  const styleId = "fullscreenLyricsPlus-styles";
  if (document.getElementById(styleId)) {
    return;
  }
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = css;
  document.head.appendChild(style);
})();

// extensions/fullscreenLyricsPlus/src/app.jsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var minimisePath = "M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z";
var maximisePath = "M3.646 11.648l-2.418 2.417.707.707 2.418-2.418L5.999 14v-4h-4l1.647 1.648zm11.125-9.712l-.707-.707-2.418 2.418L10 2v4h4l-1.647-1.647 2.418-2.417z";
var FullscreenButton = () => {
  const isFullscreen = document.documentElement.classList.contains("fullscreen");
  const toggleFullscreen = () => {
    document.documentElement.classList.toggle("fullscreen");
    renderFullscreenButton();
  };
  const label = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";
  const pathData = isFullscreen ? maximisePath : minimisePath;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spicetify.ReactComponent.TooltipWrapper, { label, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "lyrics-config-button", onClick: toggleFullscreen, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      style: { verticalAlign: "middle" },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: pathData })
    }
  ) }) });
};
var renderFullscreenButton = () => {
  const container = document.querySelector(".lyrics-config-button-container");
  if (!container) return;
  let buttonWrapper = container.querySelector(".lyrics-tooltip-wrapper.fullscreen");
  if (!buttonWrapper) {
    buttonWrapper = document.createElement("div");
    buttonWrapper.className = "lyrics-tooltip-wrapper fullscreen";
    container.appendChild(buttonWrapper);
  }
  import_react_dom.default.render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullscreenButton, {}), buttonWrapper);
};
var observer = new MutationObserver(renderFullscreenButton);
observer.observe(document.body, { childList: true, subtree: true });
renderFullscreenButton();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZXh0ZXJuYWwtZ2xvYmFsOnJlYWN0LWRvbSIsICJleHRlcm5hbC1nbG9iYWw6cmVhY3QvanN4LXJ1bnRpbWUiLCAiLi4vZXh0ZW5zaW9ucy9mdWxsc2NyZWVuTHlyaWNzUGx1cy9zcmMvYXBwLmpzeCIsICIuLi9leHRlbnNpb25zL2Z1bGxzY3JlZW5MeXJpY3NQbHVzL3NyYy9zdHlsZXMuY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJtb2R1bGUuZXhwb3J0cyA9IFNwaWNldGlmeS5SZWFjdERPTSIsICJtb2R1bGUuZXhwb3J0cyA9IFNwaWNldGlmeS5SZWFjdEpTWCIsICJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IG1pbmltaXNlUGF0aCA9XG4gIFwiTTYuMDY0IDEwLjIyOWwtMi40MTggMi40MThMMiAxMXY0aDRsLTEuNjQ3LTEuNjQ2IDIuNDE4LTIuNDE4LS43MDctLjcwN3pNMTEgMmwxLjY0NyAxLjY0Ny0yLjQxOCAyLjQxOC43MDcuNzA3IDIuNDE4LTIuNDE4TDE1IDZWMmgtNHpcIjtcbmNvbnN0IG1heGltaXNlUGF0aCA9XG4gIFwiTTMuNjQ2IDExLjY0OGwtMi40MTggMi40MTcuNzA3LjcwNyAyLjQxOC0yLjQxOEw1Ljk5OSAxNHYtNGgtNGwxLjY0NyAxLjY0OHptMTEuMTI1LTkuNzEybC0uNzA3LS43MDctMi40MTggMi40MThMMTAgMnY0aDRsLTEuNjQ3LTEuNjQ3IDIuNDE4LTIuNDE3elwiO1xuXG5jb25zdCBGdWxsc2NyZWVuQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBpc0Z1bGxzY3JlZW4gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnVsbHNjcmVlblwiKTtcblxuICBjb25zdCB0b2dnbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZnVsbHNjcmVlblwiKTtcbiAgICByZW5kZXJGdWxsc2NyZWVuQnV0dG9uKCk7XG4gIH07XG5cbiAgY29uc3QgbGFiZWwgPSBpc0Z1bGxzY3JlZW4gPyBcIkV4aXQgZnVsbHNjcmVlblwiIDogXCJFbnRlciBmdWxsc2NyZWVuXCI7XG4gIGNvbnN0IHBhdGhEYXRhID0gaXNGdWxsc2NyZWVuID8gbWF4aW1pc2VQYXRoIDogbWluaW1pc2VQYXRoO1xuXG4gIHJldHVybiAoXG4gICAgPFNwaWNldGlmeS5SZWFjdENvbXBvbmVudC5Ub29sdGlwV3JhcHBlciBsYWJlbD17bGFiZWx9PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJseXJpY3MtY29uZmlnLWJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUZ1bGxzY3JlZW59PlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoIGQ9e3BhdGhEYXRhfSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvU3BpY2V0aWZ5LlJlYWN0Q29tcG9uZW50LlRvb2x0aXBXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgcmVuZGVyRnVsbHNjcmVlbkJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5seXJpY3MtY29uZmlnLWJ1dHRvbi1jb250YWluZXJcIik7XG4gIGlmICghY29udGFpbmVyKSByZXR1cm47XG5cbiAgbGV0IGJ1dHRvbldyYXBwZXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5seXJpY3MtdG9vbHRpcC13cmFwcGVyLmZ1bGxzY3JlZW5cIik7XG5cbiAgaWYgKCFidXR0b25XcmFwcGVyKSB7XG4gICAgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSBcImx5cmljcy10b29sdGlwLXdyYXBwZXIgZnVsbHNjcmVlblwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcbiAgfVxuXG4gIFJlYWN0RE9NLnJlbmRlcig8RnVsbHNjcmVlbkJ1dHRvbiAvPiwgYnV0dG9uV3JhcHBlcik7XG59O1xuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHJlbmRlckZ1bGxzY3JlZW5CdXR0b24pO1xuXG5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXG5yZW5kZXJGdWxsc2NyZWVuQnV0dG9uKCk7XG4iLCAiXG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zdCBjc3MgPSBcIi5mdWxsc2NyZWVuIHtcXG4gIC5Sb290X190b3AtY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwibWFpbi12aWV3XFxcIlxcbiAgICAgIFxcXCJtYWluLXZpZXdcXFwiICFpbXBvcnRhbnQ7XFxuICAgIGdhcDogMHB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAubWFpbi10b3BCYXItY29udGFpbmVyIHtcXG4gICAgbGVmdDogMzBweDtcXG4gIH1cXG5cXG4gIC5Sb290X19nbG9iYWxOYXYsXFxuICAuUm9vdF9fbmF2LWJhcixcXG4gIC5Sb290X19ub3ctcGxheWluZy1iYXIsXFxuICAuUm9vdF9fcmlnaHQtc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XCI7XG4gICAgICAgICAgY29uc3Qgc3R5bGVJZCA9IFwiZnVsbHNjcmVlbkx5cmljc1BsdXMtc3R5bGVzXCI7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpKSB7IHJldHVybjsgfVxuICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5pZCA9IHN0eWxlSWQ7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3M7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0pKCk7XG4gICAgICAiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFdBQU8sVUFBVSxVQUFVO0FBQUE7QUFBQTs7O0FDQTNCO0FBQUE7QUFBQSxXQUFPLFVBQVUsVUFBVTtBQUFBO0FBQUE7OztBQ0EzQix1QkFBcUI7OztDQ0NaLFdBQVc7QUFDVixRQUFNLE1BQU07QUFDWixRQUFNLFVBQVU7QUFDaEIsTUFBSSxTQUFTLGVBQWUsT0FBTyxHQUFHO0FBQUU7QUFBQSxFQUFRO0FBQ2hELFFBQU0sUUFBUSxTQUFTLGNBQWMsT0FBTztBQUM1QyxRQUFNLEtBQUs7QUFDWCxRQUFNLGNBQWM7QUFDcEIsV0FBUyxLQUFLLFlBQVksS0FBSztBQUNqQyxHQUFHOzs7QURvQkQ7QUExQlYsSUFBTSxlQUNKO0FBQ0YsSUFBTSxlQUNKO0FBRUYsSUFBTSxtQkFBbUIsTUFBTTtBQUM3QixRQUFNLGVBQWUsU0FBUyxnQkFBZ0IsVUFBVSxTQUFTLFlBQVk7QUFFN0UsUUFBTSxtQkFBbUIsTUFBTTtBQUM3QixhQUFTLGdCQUFnQixVQUFVLE9BQU8sWUFBWTtBQUN0RCwyQkFBdUI7QUFBQSxFQUN6QjtBQUVBLFFBQU0sUUFBUSxlQUFlLG9CQUFvQjtBQUNqRCxRQUFNLFdBQVcsZUFBZSxlQUFlO0FBRS9DLFNBQ0UsNENBQUMsVUFBVSxlQUFlLGdCQUF6QixFQUF3QyxPQUN2QyxzREFBQyxZQUFPLFdBQVUsd0JBQXVCLFNBQVMsa0JBQ2hEO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxPQUFNO0FBQUEsTUFDTixRQUFPO0FBQUEsTUFDUCxTQUFRO0FBQUEsTUFDUixNQUFLO0FBQUEsTUFDTCxPQUFPLEVBQUUsZUFBZSxTQUFTO0FBQUEsTUFFakMsc0RBQUMsVUFBSyxHQUFHLFVBQVU7QUFBQTtBQUFBLEVBQ3JCLEdBQ0YsR0FDRjtBQUVKO0FBRUEsSUFBTSx5QkFBeUIsTUFBTTtBQUNuQyxRQUFNLFlBQVksU0FBUyxjQUFjLGlDQUFpQztBQUMxRSxNQUFJLENBQUMsVUFBVztBQUVoQixNQUFJLGdCQUFnQixVQUFVLGNBQWMsb0NBQW9DO0FBRWhGLE1BQUksQ0FBQyxlQUFlO0FBQ2xCLG9CQUFnQixTQUFTLGNBQWMsS0FBSztBQUM1QyxrQkFBYyxZQUFZO0FBQzFCLGNBQVUsWUFBWSxhQUFhO0FBQUEsRUFDckM7QUFFQSxtQkFBQUEsUUFBUyxPQUFPLDRDQUFDLG9CQUFpQixHQUFJLGFBQWE7QUFDckQ7QUFFQSxJQUFNLFdBQVcsSUFBSSxpQkFBaUIsc0JBQXNCO0FBRTVELFNBQVMsUUFBUSxTQUFTLE1BQU0sRUFBRSxXQUFXLE1BQU0sU0FBUyxLQUFLLENBQUM7QUFFbEUsdUJBQXVCOyIsCiAgIm5hbWVzIjogWyJSZWFjdERPTSJdCn0K
