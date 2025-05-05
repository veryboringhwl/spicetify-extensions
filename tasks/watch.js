import { exec, spawn } from "node:child_process";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";
import { join } from "node:path";
import readline from "node:readline";
import chokidar from "chokidar";
import esbuild from "esbuild";
import externalGlobalPlugin from "esbuild-plugin-external-global";
import * as sass from "sass";
import WebSocket from "ws";

const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
};

const inlineCssPlugin = () => ({
  name: "inline-css",
  setup(build) {
    build.onLoad({ filter: /\.(css|scss)$/ }, async (args) => {
      let cssContent;
      if (args.path.endsWith(".scss")) {
        const result = sass.compile(args.path, { style: "compressed" });
        cssContent = result.css;
      } else {
        cssContent = await fsPromises.readFile(args.path, "utf8");
      }
      const escapedCss = JSON.stringify(cssContent);
      const base = path.basename(args.path);
      const parentFolder = path.basename(path.dirname(args.path));
      const styleId = `${parentFolder}-${base}`.replace(/[^a-zA-Z0-9\-\.]/g, "-");
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
  const files = ["app.js", "app.jsx", "app.ts", "app.tsx"];
  return files.map((file) => join(folderPath, file)).find(fs.existsSync) || null;
};

const contexts = {};
let shouldWatchSpotify = false;

const watchExtension = async (folderName, folderPath) => {
  const SRC = getEntryFile(folderPath);
  if (!SRC) return;

  const OUT = join("dist", `${folderName}.mjs`);
  const SPICETIFY_OUT = join(process.env.APPDATA, "spicetify", "Extensions", `${folderName}.mjs`);
  const SPOTIFY_OUT = join(
    process.env.APPDATA,
    "Spotify",
    "Apps",
    "xpui",
    "extensions",
    `${folderName}.mjs`,
  );

  contexts[folderName] = await esbuild.context({
    entryPoints: [SRC],
    outfile: OUT,
    format: "esm",
    target: "es2024",
    platform: "browser",
    bundle: true,
    sourcemap: "inline",
    minify: false,
    jsx: "automatic",
    external: ["react", "react-dom"],
    plugins: [
      inlineCssPlugin(),
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
          }
          console.debug(
            "%c● ᴗ ● [${folderName}]%cExtension is running",
            "color:#272ab0; font-weight:1000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-right:none; border-radius:3px 0 0 3px;",
            "color:#000000; background:#ffffff; padding:3px; border:2px solid #272ab0; border-left:none; border-radius:0 3px 3px 0;"
          );
      `.trim(),
    },
    footer: {
      js: `
        })();
      `.trim(),
    },
  });

  await contexts[folderName].watch();

  chokidar.watch(OUT).on("change", async () => {
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m ${folderName} changes detected.`);
    fs.copyFileSync(OUT, SPICETIFY_OUT);
    if (shouldWatchSpotify) {
      fs.copyFileSync(OUT, SPOTIFY_OUT);
      await reloadSpotify();
      console.log(`${folderName} was updated.`);
    }
  });

  console.log(`\x1b[36mWatcher started for ${folderName}.\x1b[0m`);
};

const watchFolders = async () => {
  const SRC = join("extensions");
  const folders = fs
    .readdirSync(SRC, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

  await Promise.all(
    folders.map(async (folderName) => {
      const folderPath = join(SRC, folderName);
      await watchExtension(folderName, folderPath);
    }),
  );
};

const watchSpotify = async () => {
  console.log("\x1b[36mWatching Spotify\x1b[0m");

  await new Promise((resolve) =>
    spawn("taskkill", ["/F", "/IM", "spotify.exe"]).on("close", resolve),
  );

  const file = fs.readFileSync(join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"));
  for (const pos of [file.indexOf("app-developer") + 14, file.lastIndexOf("app-developer") + 15]) {
    file[pos] = 50;
  }
  fs.writeFileSync(join(process.env.LOCALAPPDATA, "Spotify", "offline.bnk"), file);

  spawn(join(process.env.APPDATA, "Spotify", "Spotify.exe"), ["--remote-debugging-port=9222"], {
    detached: true,
  });
};

const reloadSpotify = async () => {
  try {
    const response = await fetch("http://localhost:9222/json/list");
    const wsUrl = (await response.json()).find((d) =>
      d.url.includes("spotify"),
    )?.webSocketDebuggerUrl;

    if (wsUrl) {
      await new Promise((resolve) => {
        const ws = new WebSocket(wsUrl);
        ws.once("open", () => {
          ws.send(
            JSON.stringify({
              id: 0,
              method: "Runtime.evaluate",
              params: { expression: "window.location.reload();" },
            }),
          );
          ws.close();
          resolve();
        });
      });
    }
  } catch {
    console.log("Couldnt reload Spotify, attempting to restart");
    watchSpotify();
  }
};

const args = process.argv.slice(2);
const runWatchers = async () => {
  const startTime = performance.now();

  if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist", { recursive: true });
  }

  if (args.includes("--dev")) {
    await watchSpotify();
    shouldWatchSpotify = true;
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  await watchFolders();

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mWatchers started in ${elapsed} seconds.\x1b[0m`);
};

runWatchers();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", async (input) => {
  const command = input.trim().toLowerCase();

  if (command === "format") {
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m Formatting...`);
    exec("bunx biome check --fix --unsafe", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m ${stdout}`);
    });
  }
});

rl.on("SIGINT", async () => {
  console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m Exiting...`);

  for (const [folderName, context] of Object.entries(contexts)) {
    await context.dispose();
    console.log(`\x1b[33m${folderName} watcher terminated.\x1b[0m`);
  }

  process.exit(0);
});
