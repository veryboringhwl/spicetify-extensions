import * as path from "https://deno.land/std@0.224.0/path/mod.ts";
// @deno-types="https://deno.land/x/esbuild@v0.20.2/mod.d.ts"
import * as esbuild from "https://deno.land/x/esbuild@v0.20.2/mod.js";

const inlineCssPlugin = (options = {}) => ({
  name: "inline-css",
  setup(build) {
    build.onLoad({ filter: /\.(css)$/ }, async (args) => {
      const cssContent = await Deno.readTextFile(args.path);
      let finalCss = cssContent;

      if (options.compressed) {
        const minifiedCss = await esbuild.transform(cssContent, {
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
      styleId = styleId.replace(/[^a-zA-Z0-9\-]/g, "-");

      const jsContent = `
        (function() {
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
    });
  },
});

export default inlineCssPlugin;
