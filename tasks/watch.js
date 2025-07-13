// @deno-types="@esbuild/mod.d.ts"
import * as esbuild from "@esbuild/mod.js";
import { ensureDir } from "@std/fs";
import { join } from "@std/path";
import { TextLineStream } from "@std/streams";
import externalGlobalPlugin from "./pluginExternalGlobals.js";
import inlineCssPlugin from "./pluginInlineCss.js";

const APPDATA = Deno.env.get("APPDATA");
const LOCALAPPDATA = Deno.env.get("LOCALAPPDATA");

const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
};

const getEntryFile = async (folderPath) => {
  const srcDir = join(folderPath, "src");
  try {
    for await (const dirEntry of Deno.readDir(srcDir)) {
      if (dirEntry.isFile && dirEntry.name.match(/^app\.(js|jsx|ts|tsx)$/)) {
        return join(srcDir, dirEntry.name);
      }
    }
  } catch (e) {
    if (!(e instanceof Deno.errors.NotFound)) {
      throw e;
    }
  }
  return null;
};

const contexts = {};
let shouldWatchSpotify = false;

const watchExtension = async (folderName, folderPath) => {
  const SRC = await getEntryFile(folderPath);
  if (!SRC) return;

  const OUT = join("dist", `${folderName}.mjs`);

  const SPICETIFY_OUT = join(APPDATA, "spicetify", "Extensions", `${folderName}.mjs`);
  const SPOTIFY_OUT = join(APPDATA, "Spotify", "Apps", "xpui", "extensions", `${folderName}.mjs`);

  contexts[folderName] = await esbuild.context({
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
      inlineCssPlugin({ compressed: false }),
      externalGlobalPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
        "react/jsx-runtime": "Spicetify.ReactJSX",
      }),
      {
        name: "on-end-plugin",
        setup(build) {
          build.onEnd(async (result) => {
            if (result.errors.length > 0) {
              console.error(`\x1b[31mBuild failed for ${folderName}:\x1b[0m`, result.errors);
            } else {
              console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m ${folderName} changes detected.`);
              await Deno.copyFile(OUT, SPICETIFY_OUT);
              if (shouldWatchSpotify) {
                await Deno.copyFile(OUT, SPOTIFY_OUT);
                await reloadSpotify();
                console.log(`${folderName} was updated.`);
              }
            }
          });
        },
      },
    ],
    banner: {
      js: "await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));",
    },
  });

  await contexts[folderName].watch();
  console.log(`\x1b[36mWatcher started for ${folderName}.\x1b[0m`);
};

const watchFolders = async () => {
  const extensionsDir = "extensions";
  const watchPromises = [];
  for await (const dirEntry of Deno.readDir(extensionsDir)) {
    if (dirEntry.isDirectory) {
      const folderPath = join(extensionsDir, dirEntry.name);
      watchPromises.push(watchExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(watchPromises);
};

const killSpotify = async () => {
  try {
    await new Deno.Command("taskkill", {
      args: ["/F", "/IM", "spotify.exe"],
      stdout: "piped",
      stderr: "piped",
    }).output();
  } catch (_e) {
    console.log("Spotify not running.");
  }
};

const applyExtensions = async () => {
  const SPOTIFY_OUT = join(APPDATA, "Spotify", "Apps", "xpui", "extensions");
  const SPICETIFY_OUT = join(APPDATA, "spicetify", "Extensions");
  const distDir = "dist";

  for await (const file of Deno.readDir(distDir)) {
    const sourceFile = join(distDir, file.name);
    await Deno.copyFile(sourceFile, join(SPOTIFY_OUT, file.name));
    await Deno.copyFile(sourceFile, join(SPICETIFY_OUT, file.name));
  }

  const bnkPath = join(LOCALAPPDATA, "Spotify", "offline.bnk");
  try {
    const file = await Deno.readFile(bnkPath);

    const searchTerm = "app-developer";
    let index = file.indexOf(searchTerm);
    while (index !== -1) {
      file[index + 14] = 50;
      file[index + 15] = 50;
      index = file.indexOf(searchTerm, index + 1);
    }
    await Deno.writeFile(bnkPath, file);
  } catch (e) {
    if (!(e instanceof Deno.errors.NotFound)) {
      throw e;
    }
  }
};

const startSpotify = () => {
  const spotifyPath = join(APPDATA, "Spotify", "Spotify.exe");
  const startCommand = new Deno.Command(spotifyPath, {
    args: ["--remote-debugging-port=9222"],
    detached: true,
  });
  startCommand.spawn();
  console.log("Spotify started.");
};

const reloadSpotify = async () => {
  try {
    const response = await fetch("http://localhost:9222/json/list");
    const targets = await response.json();
    const wsUrl = targets.find((d) => d.url.includes("spotify"))?.webSocketDebuggerUrl;

    if (wsUrl) {
      const ws = new WebSocket(wsUrl);
      await new Promise((resolve, reject) => {
        ws.onopen = () => {
          ws.send(
            JSON.stringify({
              id: 0,
              method: "Runtime.evaluate",
              params: { expression: "window.location.reload();" },
            }),
          );
          ws.close();
          resolve();
        };
        ws.onerror = (err) => reject(err);
      });
    }
  } catch {
    console.log("Couldnt reload Spotify, attempting to restart");
    await killSpotify();
    startSpotify();
  }
};

const args = Deno.args;
const runWatchers = async () => {
  const startTime = performance.now();

  await ensureDir("dist");

  if (args.includes("--dev")) {
    await killSpotify();
    await applyExtensions();
    startSpotify();
    shouldWatchSpotify = true;
  }

  await watchFolders();

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mWatchers started in ${elapsed} seconds.\x1b[0m`);
};

runWatchers();

const lineStream = Deno.stdin.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new TextLineStream());

for await (const line of lineStream) {
  const command = line.trim();
  if (command === "format") {
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m Formatting...`);
    const biomeCommand = new Deno.Command("deno", {
      args: ["run", "-A", "npm:@biomejs/biome", "format", "--unsafe", "--write"],
    });
    const { stdout } = await biomeCommand.output();
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m ${new TextDecoder().decode(stdout)}`);
  } else {
    console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m Executing: ${command}`);
    const [cmd, ...args] = command.split(" ");
    try {
      const p = new Deno.Command(cmd, {
        args,
        stdout: "inherit",
        stderr: "inherit",
        stdin: "inherit",
      }).spawn();
      await p.status;
    } catch (e) {
      console.log(`\x1b[31m[${getCurrentTime()}]\x1b[0m ${e.message}`);
    }
  }
}
Deno.addSignalListener("SIGINT", async () => {
  console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m Exiting...`);

  for (const [folderName, context] of Object.entries(contexts)) {
    await context.dispose();
    console.log(`\x1b[33m${folderName} watcher terminated.\x1b[0m`);
  }

  Deno.exit(0);
});
