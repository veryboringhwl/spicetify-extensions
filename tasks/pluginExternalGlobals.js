const externalGlobalPlugin = (globals) => ({
  name: "external-global",
  setup(build) {
    const filter = new RegExp(`^(${Object.keys(globals).join("|").replace(/\//g, "\\/")})$`);

    build.onResolve({ filter }, (args) => {
      return {
        path: args.path,
        namespace: "external-global",
      };
    });

    build.onLoad({ filter: /.*/, namespace: "external-global" }, (args) => {
      const globalName = globals[args.path];
      return {
        contents: `module.exports = ${globalName}`,
        loader: "js",
      };
    });
  },
});

export default externalGlobalPlugin;
