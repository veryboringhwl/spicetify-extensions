import type { Plugin, PluginBuild } from "@esbuild/mod.d.ts";
import { join } from "@std/path";

const cwd = Deno.cwd();

export const spicetifyShims = (): Plugin => ({
  name: "spicetify-shims",
  setup(build: PluginBuild) {
    // react
    build.onResolve({ filter: /^react$/ }, () => {
      return { path: join(cwd, "./tasks/shims/react-shim.ts") };
    });
    // react-dom
    build.onResolve({ filter: /^react-dom$/ }, () => {
      return { path: join(cwd, "./tasks/shims/react-dom-shim.ts") };
    });
    // react-dom/client
    build.onResolve({ filter: /^react-dom\/client$/ }, () => {
      return { path: join(cwd, "./tasks/shims/react-dom-shim.ts") };
    });
    // react/jsx-runtime
    build.onResolve({ filter: /^react\/jsx-runtime$/ }, () => {
      return { path: join(cwd, "./tasks/shims/jsx-runtime-shim.ts") };
    });
  },
});
