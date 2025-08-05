import type { OnLoadArgs, Plugin, PluginBuild } from "@esbuild/mod.js";
import * as esbuild from "@esbuild/mod.js";

export function inlineCSSPlugin(options: { minify?: boolean } = {}): Plugin {
  return {
    name: "inline-css-to-stylesheet",
    setup(build: PluginBuild) {
      build.onLoad({ filter: /\.css$/ }, async (args: OnLoadArgs) => {
        const css = await Deno.readTextFile(args.path);
        let cssText = css;

        if (options.minify) {
          const result = await esbuild.transform(css, {
            loader: "css",
            minify: true,
          });
          cssText = result.code.trim();
        }

        const contents = `
          const sheet = new CSSStyleSheet();
          sheet.replaceSync(\`${cssText}\`);
          export default sheet;
        `;

        return {
          contents: contents,
          loader: "js",
        };
      });
    },
  };
}
