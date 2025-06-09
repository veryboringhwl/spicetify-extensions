import { spawn } from "node:child_process";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";

const inlineCssPlugin = () => ({
  name: "inline-css",
  setup(build) {
    build.onLoad({ filter: /\.(css)$/ }, async (args) => {
      const cssContent = await fsPromises.readFile(args.path, "utf8");
      const escapedCss = JSON.stringify(cssContent.trim());
      let styleId;
      const relativePath = path.relative(process.cwd(), args.path);
      const parts = relativePath.split(path.sep);
      const prefix = parts[0] === "extensions" ? parts[1] : parts[0];
      const base = path.basename(args.path);
      styleId = `${prefix}-${base}`;
      styleId = styleId.replace(/[^a-zA-Z0-9\-\.]/g, "-");
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

const getEntryFile = (folderPath) => {
  const srcPath = path.join(folderPath, "src");
  const files = ["app.js", "app.jsx", "app.ts", "app.tsx"];
  return files.map((file) => path.join(srcPath, file)).find(fs.existsSync) || null;
};

const buildExtension = async (folderName, folderPath) => {
  const SRC = getEntryFile(folderPath);
  if (!SRC) {
    console.warn(`No entry file found for ${folderName}`);
    return;
  }
  const OUT = path.join("dist", `${folderName}.mjs`);
  // use mjs as js isnt treated as es module
  await esbuild.build({
    entryPoints: [SRC],
    outfile: OUT,
    format: "esm",
    target: "esnext",
    platform: "browser",
    bundle: true,
    sourcemap: "inline",
    sourcesContent: true,
    minify: false,
    jsx: "automatic",
    external: ["react", "react-dom", "react/jsx-runtime"],
    plugins: [
      inlineCssPlugin(),
      externalGlobalPlugin.externalGlobalPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
        "react/jsx-runtime": "Spicetify.ReactJSX",
      }),
    ],
    banner: {
      js: "await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));",
    },
  });
};

const buildFolders = async () => {
  const SRC = path.join("extensions");
  const folders = fs
    .readdirSync(SRC, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

  await Promise.all(
    folders.map(async (folderName) => {
      const folderPath = path.join(SRC, folderName);
      await buildExtension(folderName, folderPath);
    }),
  );
};

const applyExtensions = async () => {
  const killProcess = spawn("taskkill", ["/F", "/IM", "spotify.exe"]);
  await new Promise((resolve) => killProcess.on("close", resolve));

  const SPOTIFY_OUT = path.join(process.env.APPDATA, "Spotify", "Apps", "xpui", "extensions");
  const SPICETIFY_OUT = path.join(process.env.APPDATA, "spicetify", "Extensions");

  const OUT = path.join("dist");
  for (const file of fs.readdirSync(OUT)) {
    const sourceFile = path.join(OUT, file);
    fs.copyFileSync(sourceFile, path.join(SPOTIFY_OUT, file));
    fs.copyFileSync(sourceFile, path.join(SPICETIFY_OUT, file));
  }

  const file = fs.readFileSync(path.join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"));
  for (const pos of [file.indexOf("app-developer") + 14, file.lastIndexOf("app-developer") + 15]) {
    file[pos] = 50;
  }
  fs.writeFileSync(path.join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"), file);

  spawn(path.join(process.env.APPDATA, "Spotify", "Spotify.exe"), {
    detached: true,
  });
};

const args = process.argv.slice(2);

const runBuilds = async () => {
  const startTime = performance.now();

  await buildFolders();

  if (args.includes("--dev")) {
    await applyExtensions();
  }

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mAll builds completed in ${elapsed} seconds.\x1b[0m`);
  process.exit(0);
};

runBuilds();
