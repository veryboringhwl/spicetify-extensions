import { spawn } from "node:child_process";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";
import { join } from "node:path";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";

const inlineCssPlugin = () => ({
  name: "inline-css",
  setup(build) {
    build.onLoad({ filter: /\.(css)$/ }, async (args) => {
      const cssContent = await fsPromises.readFile(args.path, "utf8");
      const escapedCss = JSON.stringify(cssContent);
      const folderName = path.basename(path.dirname(path.dirname(args.path)));
      const base = path.basename(args.path);
      const styleId = `${folderName}-${base}`.replace(/[^a-zA-Z0-9\-\.]/g, "-");
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
});

const getEntryFile = (folderPath) => {
  const srcPath = join(folderPath, "src");
  const files = ["app.js", "app.jsx", "app.ts", "app.tsx"];
  return files.map((file) => join(srcPath, file)).find(fs.existsSync) || null;
};

const buildExtension = async (folderName, folderPath) => {
  const SRC = getEntryFile(folderPath);
  if (!SRC) {
    console.warn(`No entry file found for ${folderName}`);
    return;
  }
  const OUT = join("dist", `${folderName}.mjs`);
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
    jsx: "transform",
    external: ["react", "react-dom", "react/jsx-runtime"],
    plugins: [inlineCssPlugin()],
    banner: {
      js: `
        while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
        console.debug(
          "%c● ᴗ ● [${folderName}]%cExtension is running",
          "color:#272ab0; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-right:none; border-radius:3px 0 0 3px;",
          "color:#000000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-left:none; border-radius:0 3px 3px 0;"
        );
      `,
    },
  });
};

const buildFolders = async () => {
  const SRC = join("extensions");
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

const applyExtensions = async () => {
  const killProcess = spawn("taskkill", ["/F", "/IM", "spotify.exe"]);
  await new Promise((resolve) => killProcess.on("close", resolve));

  const SPOTIFY_OUT = join(process.env.APPDATA, "Spotify", "Apps", "xpui", "extensions");
  const SPICETIFY_OUT = join(process.env.APPDATA, "spicetify", "Extensions");

  const OUT = join("dist");
  for (const file of fs.readdirSync(OUT)) {
    const sourceFile = join(OUT, file);
    fs.copyFileSync(sourceFile, join(SPOTIFY_OUT, file));
    fs.copyFileSync(sourceFile, join(SPICETIFY_OUT, file));
  }

  const file = fs.readFileSync(join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"));
  for (const pos of [file.indexOf("app-developer") + 14, file.lastIndexOf("app-developer") + 15]) {
    file[pos] = 50;
  }
  fs.writeFileSync(join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"), file);

  spawn(join(process.env.APPDATA, "Spotify", "Spotify.exe"), {
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
