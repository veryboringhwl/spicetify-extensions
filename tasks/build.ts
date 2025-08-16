import * as esbuild from "@esbuild/mod.js";
import { join } from "@std/path";
import { externalGlobalsPlugin } from "./pluginExternalGlobals.ts";
import { importMapPlugin } from "./pluginImportMap.ts";
import { inlineCSSPlugin } from "./pluginInlineCSS.ts";

// Deno bundle will have runtime api so can replace esbuild
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
    minify: false,
    jsx: "automatic",
    external: ["react", "react-dom", "react-dom/client", "react/jsx-runtime"],
    plugins: [
      externalGlobalsPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
        "react-dom/client": "Spicetify.ReactDOM",
        "react/jsx-runtime": "Spicetify.ReactJSX",
      }),
      importMapPlugin(),
      inlineCSSPlugin({ minify: false }),
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
  const data = new Uint8Array(await Deno.readFile(bnkPath));

  const encoder = new TextEncoder();
  const keyBytes = encoder.encode("app-developer");

  const GT = 0x3e; // '>'
  const LT = 0x3c; // '<'
  const D0 = 0x30; // '0'
  const D1 = 0x31; // '1'
  const D2 = 0x32; // '2'
  const XX = 0x78; // 'x'
  const C1 = 0x01; // \x01

  const indexOfSequence = (haystack: Uint8Array, needle: Uint8Array, fromIndex: number): number => {
    const limit = haystack.length - needle.length;
    outer: for (let i = fromIndex; i <= limit; i++) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) continue outer;
      }
      return i;
    }
    return -1;
  };

  let cursor = 0;
  let changed = false;

  while (true) {
    const hit = indexOfSequence(data, keyBytes, cursor);
    if (hit === -1) break;

    const start = hit + keyBytes.length;
    const end = Math.min(start + 64, data.length - 1);

    for (let k = start; k < end; k++) {
      const v = data[k];
      if (v !== D0 && v !== D1) continue;

      if (k - 1 >= 0 && data[k - 1] === GT && k + 1 < data.length && data[k + 1] === LT) {
        data[k] = D2;
        changed = true;
        break;
      }

      if (k + 1 < data.length && data[k + 1] === XX) {
        const prevCtrl = (k - 1 >= 0 && data[k - 1] === C1) || (k - 2 >= 0 && data[k - 2] === C1);
        const nextCtrl =
          (k + 2 < data.length && data[k + 2] === C1) ||
          (k + 3 < data.length && data[k + 3] === C1);
        if (prevCtrl && nextCtrl) {
          data[k] = D2;
          changed = true;
          break;
        }
      }
    }

    cursor = hit + keyBytes.length;
  }

  if (changed) await Deno.writeFile(bnkPath, data);
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
