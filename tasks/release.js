import fs from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";
import { join } from "node:path";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";
import * as sass from "sass";

const inlineCssPlugin = {
  name: "inline-css",
  setup(build) {
    build.onLoad({ filter: /\.(css|scss)$/ }, async (args) => {
      let cssContent;
      if (args.path.endsWith(".scss")) {
        const result = sass.compile(args.path, { style: "expanded" });
        cssContent = result.css;
      } else {
        cssContent = await fsPromises.readFile(args.path, "utf8");
      }
      const escapedCss = JSON.stringify(cssContent);
      const styleId = `esbuild-inline-css-${args.path.replace(/[^a-zA-Z0-9]/g, "-")}`;
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
    });
  },
};

const getEntryFile = (folderPath) => {
  const files = ["app.js", "app.jsx", "app.ts", "app.tsx"];
  return files.map((file) => join(folderPath, file)).find(fs.existsSync) || null;
};

const buildExtension = async (folderName, folderPath) => {
  const SRC = getEntryFile(folderPath);
  const OUT = join(process.cwd(), "dist", `${folderName}.js`);

  await esbuild.build({
    entryPoints: [SRC],
    outfile: OUT,
    format: "esm",
    target: "es2024",
    platform: "browser",
    bundle: true,
    sourcemap: false,
    minify: true,
    jsx: "automatic",
    external: ["react", "react-dom"],
    plugins: [
      inlineCssPlugin,
      externalGlobalPlugin.externalGlobalPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
        "react/jsx-runtime": "Spicetify.ReactJSX",
      }),
    ],
    banner: {
      js: `
        (async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }`,
    },
    footer: { js: "})();" },
  });
};

const buildFolders = async () => {
  const SRC = join(process.cwd(), "extensions");
  const folders = fs
    .readdirSync(SRC, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

  await Promise.all(
    folders.map(async (folderName) => {
      const folderPath = join(SRC, folderName);
      await buildExtension(folderName, folderPath);
    }),
  );
};

await buildFolders();
