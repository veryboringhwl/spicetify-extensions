import { indexOfNeedle, lastIndexOfNeedle } from "jsr:@std/bytes";
import { build, type Plugin } from "@esbuild/mod.js";
import { denoPlugins } from "@oazmi/esbuild-plugin-deno";
import { join } from "@std/path";

import { inlineCSSPlugin } from "./pluginInlineCSS.ts";
import { spicetifyShims } from "./spicetifyShimsPlugin.ts";

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
  await build({
    entryPoints: [SRC],
    outfile: OUT,
    format: "esm",
    target: "esnext",
    platform: "browser",
    bundle: true,
    sourcemap: "inline",
    minify: false,
    jsx: "automatic",
    external: ["react", "react-dom", "react-dom/client", "react/jsx-runtime"],
    plugins: [
      spicetifyShims(),
      inlineCSSPlugin({
        minify: false,
      }),
      ...denoPlugins({
        initialPluginData: {
          runtimePackage: "./deno.json",
        },
      }),
    ] as Plugin[],
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
  const data = await Deno.readFile(bnkPath);

  const target = new TextEncoder().encode("app-developer");
  const ascii2 = "2".charCodeAt(0);

  const firstIndex = indexOfNeedle(data, target);
  if (firstIndex !== -1) {
    const pos = firstIndex + target.length + 1;
    if (pos < data.length) {
      data[pos] = ascii2;
    }
  }

  const lastIndex = lastIndexOfNeedle(data, target);
  if (lastIndex !== -1) {
    const pos = lastIndex + target.length + 2;
    if (pos < data.length) {
      data[pos] = ascii2;
    }
  }

  await Deno.writeFile(bnkPath, data);
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
