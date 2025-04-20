import { exec } from "node:child_process";
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

const runBuilds = async () => {
  const startTime = performance.now();

  await buildFolders();

  await new Promise((resolve, reject) => {
    exec("bunx biome check --fix --unsafe", (error, stdout, stderr) => {
      if (error) {
        console.error(`Biome Error: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Biome stderr: ${stderr}`);
      }
      console.log(`Biome stdout: ${stdout}`);
      resolve();
    });
  });

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mBuild completed in ${elapsed} seconds.\x1b[0m`);
  process.exit(0);
};

runBuilds();
