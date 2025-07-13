// @deno-types="@esbuild/mod.d.ts"
import * as esbuild from "@esbuild/mod.js";
import { join } from "@std/path";
import externalGlobalPlugin from "./pluginExternalGlobals.js";
import inlineCssPlugin from "./pluginInlineCss.js";

const APPDATA = Deno.env.get("APPDATA");
const LOCALAPPDATA = Deno.env.get("LOCALAPPDATA");

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

const buildExtension = async (folderName, folderPath) => {
  const SRC = await getEntryFile(folderPath);
  if (!SRC) {
    console.warn(`No entry file found for ${folderName}`);
    return;
  }
  const OUT = join("dist", `${folderName}.mjs`);
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
      inlineCssPlugin({ compressed: false }),
      externalGlobalPlugin({
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
  const extensionsDir = "extensions";
  const buildPromises = [];
  for await (const dirEntry of Deno.readDir(extensionsDir)) {
    if (dirEntry.isDirectory) {
      const folderPath = join(extensionsDir, dirEntry.name);
      buildPromises.push(buildExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(buildPromises);
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
  const file = await Deno.readFile(bnkPath);

  const searchTerm = "app-developer";
  let index = file.indexOf(searchTerm);
  while (index !== -1) {
    file[index + 14] = 50;
    file[index + 15] = 50;
    index = file.indexOf(searchTerm, index + 1);
  }
  await Deno.writeFile(bnkPath, file);
};

const startSpotify = () => {
  const spotifyPath = join(APPDATA, "Spotify", "Spotify.exe");
  const startCommand = new Deno.Command(spotifyPath, {
    args: [],
    detached: true,
  });
  startCommand.spawn();
  console.log("Spotify started.");
};

const runBuilds = async () => {
  const startTime = performance.now();

  await buildFolders();

  if (Deno.args.includes("--dev")) {
    await killSpotify();
    await applyExtensions();
    startSpotify();
  }

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mAll builds completed in ${elapsed} seconds.\x1b[0m`);
  Deno.exit(0);
};

runBuilds();
