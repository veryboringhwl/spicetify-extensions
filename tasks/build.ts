import * as esbuild from "@esbuild/mod.js";
import { join } from "@std/path";
import externalGlobalPlugin from "./pluginExternalGlobals.ts";
import importMapPlugin from "./pluginImportMap.ts";
import inlineCssPlugin from "./pluginInlineCss.ts";

//Deno bundle will have runtime api so can replace esbuild
const APPDATA: string = Deno.env.get("APPDATA") || "";
const LOCALAPPDATA: string = Deno.env.get("LOCALAPPDATA") || "";
const SPICETIFY_OUT: string = join(APPDATA, "spicetify", "Extensions") || "";
const SPOTIFY_OUT: string = join(APPDATA, "Spotify", "Apps", "xpui", "extensions") || "";

async function getEntryFile(folderPath: string): Promise<string | null> {
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
}

async function buildExtension(folderName: string, folderPath: string): Promise<void> {
  const SRC = await getEntryFile(folderPath);
  if (!SRC) return;

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
      externalGlobalPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
        "react-dom/client": "Spicetify.ReactDOM",
        "react/jsx-runtime": "Spicetify.ReactJSX",
      }),
      importMapPlugin(),
      inlineCssPlugin({
        compressed: false,
      }),
    ],
    banner: {
      js: "await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));",
    },
  });

  await Deno.copyFile(OUT, join(SPICETIFY_OUT, `${folderName}.mjs`));
}

async function buildFolders(): Promise<void> {
  const buildPromises = [];
  for await (const dirEntry of Deno.readDir("extensions")) {
    if (dirEntry.isDirectory) {
      const folderPath = join("extensions", dirEntry.name);
      buildPromises.push(buildExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(buildPromises);
}

const killSpotify = async (): Promise<void> => {
  await new Deno.Command("taskkill", {
    args: ["/F", "/IM", "spotify.exe"],
  }).output();
};

async function applyExtensions(): Promise<void> {
  const distDir = "dist";

  for await (const file of Deno.readDir(distDir)) {
    const sourceFile = join(distDir, file.name);
    await Deno.copyFile(sourceFile, join(SPOTIFY_OUT, file.name));
  }

  const bnkPath = join(LOCALAPPDATA, "Spotify", "offline.bnk");

  const fileBytes = await Deno.readFile(bnkPath);
  const content = new TextDecoder().decode(fileBytes);

  const firstLocation = content.indexOf("app-developer");
  const firstPatchLocation = firstLocation + 14;
  const secondLocation = content.lastIndexOf("app-developer");
  const secondPatchLocation = secondLocation + 15;

  const modifiedBytes = new Uint8Array(fileBytes);
  modifiedBytes[firstPatchLocation] = 50;
  modifiedBytes[secondPatchLocation] = 50;
  await Deno.writeFile(bnkPath, modifiedBytes);
}

function startSpotify(): void {
  const spotifyExe = join(APPDATA, "Spotify", "Spotify.exe");
  new Deno.Command(spotifyExe, {
    detached: true,
  }).spawn();
  console.log("Spotify started.");
}

async function runBuilds(): Promise<void> {
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
}

runBuilds();
