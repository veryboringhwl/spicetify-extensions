import type {
  OnLoadArgs,
  OnLoadResult,
  Plugin,
  PluginBuild,
  TransformResult,
} from "@esbuild/mod.d.ts";
// @deno-types="@esbuild/mod.d.ts"
import * as esbuild from "@esbuild/mod.js";
import * as path from "@std/path";

interface InlineCssPluginOptions {
  compressed?: boolean;
}

const inlineCssPlugin = (options: InlineCssPluginOptions = {}): Plugin => ({
  name: "inline-css",
  setup(build: PluginBuild) {
    build.onLoad(
      {
        filter: /\.(css)$/,
      },
      async (args: OnLoadArgs): Promise<OnLoadResult> => {
        const cssContent = await Deno.readTextFile(args.path);
        let finalCss = cssContent;

        if (options.compressed) {
          const minifiedCss: TransformResult = await esbuild.transform(cssContent, {
            loader: "css",
            minify: true,
          });
          finalCss = minifiedCss.code;
        }

        const escapedCss = JSON.stringify(finalCss.trim());
        const fullPath = args.path;
        const filenameWithoutExt = path.parse(fullPath).name;

        let moduleName = "";
        if (fullPath.includes("shared\\styles")) {
          moduleName = "shared";
        } else if (fullPath.includes("extensions")) {
          const parts = fullPath.split(/[\\/]/);
          const extensionsIndex = parts.indexOf("extensions");
          if (extensionsIndex !== -1 && parts.length > extensionsIndex + 1) {
            moduleName = parts[extensionsIndex + 1];
          }
        }

        let styleId = moduleName ? `${moduleName}-${filenameWithoutExt}` : filenameWithoutExt;
        styleId = styleId.replace(/[^a-zA-Z0-9-]/g, "-");

        const jsContent = `
        (() => {
          const css = ${escapedCss};
          const styleId = "${styleId}";
          if (document.getElementById(styleId)) { return; }
          const style = document.createElement('style');
          style.id = styleId;
          style.textContent = css;
          document.head.appendChild(style);
        })();
      `;

        return {
          contents: jsContent,
          loader: "js",
          resolveDir: path.dirname(args.path),
        };
      },
    );
  },
});

export default inlineCssPlugin;
