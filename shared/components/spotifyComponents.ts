export const spotifyComponents = async () => {
  while (!globalThis.webpackChunkclient_web) {
    await new Promise((r) => setTimeout(r, 50));
  }

  const require = webpackChunkclient_web.push([[Symbol()], {}, (re) => re]);
  while (!require.m) {
    await new Promise((r) => setTimeout(r, 50));
  }

  const cache = Object.keys(require.m).map((id) => require(id));
  const webpackFactories = new Set(Object.values(require.m));

  const fnStr = (f) => {
    try {
      return f.toString();
    } catch {
      try {
        return Function.prototype.toString.call(f);
      } catch {
        return "";
      }
    }
  };

  const functionModules = new Set(
    cache.flatMap((module) => {
      if (typeof module === "function") return [module];

      if (typeof module === "object" && module) {
        return Object.values(module).flatMap((v) => {
          if (typeof v === "function" && !webpackFactories.has(v)) {
            return [v];
          }

          if (v?.$$typeof === Symbol.for("react.forward_ref") && typeof v.render === "function") {
            return [v.render];
          }

          if (
            v?.$$typeof === Symbol.for("react.memo") &&
            v.type?.$$typeof === Symbol.for("react.forward_ref") &&
            typeof v.type.render === "function"
          ) {
            return [v.type.render];
          }

          return [];
        });
      }

      return [];
    }),
  );

  const discoveryRegex = /"data-encore-id":(?:[a-zA-Z_$][\w$]*\.)*([A-Z][\w]*)\b/;

  const discovered = {};

  for (const fn of functionModules) {
    const match = fnStr(fn).match(discoveryRegex);
    if (match?.[1] && !discovered[match[1]]) {
      discovered[match[1]] = fn;
    }
  }

  console.log(
    `ComponentMenu: Discovery finished. Found ${Object.keys(discovered).length} components.`,
  );

  globalThis.UI = discovered;
};
