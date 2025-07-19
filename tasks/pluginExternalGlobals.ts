import type { OnLoadArgs, OnResolveArgs, Plugin, PluginBuild } from "@esbuild/mod.d.ts";

const externalGlobalPlugin = (globals: Record<string, string>): Plugin => ({
  name: "external-global",
  setup(build: PluginBuild) {
    const filter = new RegExp(`^(${Object.keys(globals).join("|").replace(/\//g, "\\/")})$`);

    build.onResolve({ filter }, (args: OnResolveArgs) => {
      return {
        path: args.path,
        namespace: "external-global",
      };
    });

    build.onLoad(
      {
        filter: /.*/,
        namespace: "external-global",
      },
      (args: OnLoadArgs) => {
        const globalName = globals[args.path];
        return {
          contents: `module.exports = ${globalName}`,
          loader: "js",
        };
      },
    );
  },
});

export default externalGlobalPlugin;
