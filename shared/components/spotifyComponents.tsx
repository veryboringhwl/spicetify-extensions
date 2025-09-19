export const spotifyComponents = () => {
  const require = globalThis.webpackChunkclient_web.push([[Symbol()], {}, (re) => re]);
  const discoveryRegex = /"data-encore-id":(?:\w+\.)+([A-Z]\w*)\b/;
  const discovered = {};

  for (const [moduleId, definition] of Object.entries(require.m)) {
    if (typeof definition !== "function") continue;
    const moduleExports = require(moduleId);
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
    `ComponentMenu: Discovery finished. Found ${Object.keys(discovered).length} components.`,
  );
  globalThis.UI = discovered;
};
