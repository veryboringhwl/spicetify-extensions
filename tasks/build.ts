import { spawn, spawnSync } from "node:child_process";
import { copyFile, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { build, type Plugin } from "esbuild";

import { inlineCSSPlugin } from "./pluginInlineCss.ts";
import { spicetifyShims } from "./spicetifyShimsPlugin.ts";

const APPDATA: string = process.env.APPDATA || "";
const LOCALAPPDATA: string = process.env.LOCALAPPDATA || "";
const SPICETIFY_OUT: string = join(APPDATA, "spicetify", "Extensions") || "";
const SPOTIFY_OUT: string = join(APPDATA, "Spotify", "Apps", "xpui", "extensions") || "";

const isNotFoundError = (error: unknown): boolean =>
  (error as NodeJS.ErrnoException | undefined)?.code === "ENOENT";

async function getEntryFile(folderPath: string): Promise<string | null> {
  const srcDir = join(folderPath, "src");
  try {
    for (const dirEntry of await readdir(srcDir, { withFileTypes: true })) {
      if (dirEntry.isFile() && dirEntry.name.match(/^app\.(js|jsx|ts|tsx)$/)) {
        return join(srcDir, dirEntry.name);
      }
    }
  } catch (e) {
    if (!isNotFoundError(e)) {
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
    ] as Plugin[],
    banner: {
      js: "await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));",
    },
  });

  await copyFile(OUT, join(SPICETIFY_OUT, `${folderName}.mjs`));
}

async function buildFolders(): Promise<void> {
  const buildPromises = [];
  for (const dirEntry of await readdir("extensions", { withFileTypes: true })) {
    if (dirEntry.isDirectory()) {
      const folderPath = join("extensions", dirEntry.name);
      buildPromises.push(buildExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(buildPromises);
}

const killSpotify = async (): Promise<void> => {
  spawnSync("taskkill", ["/F", "/IM", "spotify.exe"]);
};

async function applyExtensions(): Promise<void> {
  const distDir = "dist";

  for (const file of await readdir(distDir, { withFileTypes: true })) {
    if (!file.isFile()) continue;
    const sourceFile = join(distDir, file.name);
    await copyFile(sourceFile, join(SPOTIFY_OUT, file.name));
  }

  const bnkPath = join(LOCALAPPDATA, "Spotify", "offline.bnk");
  const data = await readFile(bnkPath);

  const target = new TextEncoder().encode("app-developer");
  const ascii2 = "2".charCodeAt(0);

  const firstIndex = data.indexOf(target);
  if (firstIndex !== -1) {
    const pos = firstIndex + target.length + 1;
    if (pos < data.length) {
      data[pos] = ascii2;
    }
  }

  const lastIndex = data.lastIndexOf(target);
  if (lastIndex !== -1) {
    const pos = lastIndex + target.length + 2;
    if (pos < data.length) {
      data[pos] = ascii2;
    }
  }

  await writeFile(bnkPath, data);
}

function startSpotify(): void {
  const spotifyExe = join(APPDATA, "Spotify", "Spotify.exe");
  spawn(spotifyExe, [], {
    detached: true,
    stdio: "ignore",
  }).unref();
  console.log("Spotify started.");
}

async function runBuilds(): Promise<void> {
  const startTime = performance.now();
  await buildFolders();

  if (process.argv.includes("--dev")) {
    await killSpotify();
    await applyExtensions();
    startSpotify();
  }

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mAll builds completed in ${elapsed} seconds.\x1b[0m`);
  process.exit(0);
}

runBuilds();
