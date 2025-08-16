import * as esbuild from "@esbuild/mod.js";
import { join } from "@std/path";
import { externalGlobalsPlugin } from "./pluginExternalGlobals.ts";
import { importMapPlugin } from "./pluginImportMap.ts";
import { inlineCSSPlugin } from "./pluginInlineCSS.ts";

const getEntryFile = async (folderPath: string): Promise<string | null> => {
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

const buildExtension = async (folderName: string, folderPath: string): Promise<void> => {
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
    sourcemap: false,
    minify: true,
    jsx: "automatic",
    external: ["react", "react-dom/client", "react/jsx-runtime"],
    plugins: [
      externalGlobalsPlugin({
        react: "Spicetify.React",
        "react-dom": "Spicetify.ReactDOM",
        "react-dom/client": "Spicetify.ReactDOM",
        "react/jsx-runtime": "Spicetify.ReactJSX",
      }),
      importMapPlugin(),
      inlineCSSPlugin({
        minify: true,
      }),
    ],
    banner: {
      js: "await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));",
    },
  });
};

const buildFolders = async (): Promise<void> => {
  const buildPromises = [];
  for await (const dirEntry of Deno.readDir("extensions")) {
    if (dirEntry.isDirectory) {
      const folderPath = join("extensions", dirEntry.name);
      buildPromises.push(buildExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(buildPromises);
};

const runBiome = async (): Promise<void> => {
  const formatCommand = new Deno.Command("deno", {
    args: ["task", "check"],
  });
  const { stdout } = await formatCommand.output();
  console.log("Biome:", new TextDecoder().decode(stdout));
};

const runBuilds = async (): Promise<void> => {
  const startTime = performance.now();

  await buildFolders();
  await runBiome();

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mBuild completed in ${elapsed} seconds.\x1b[0m`);
  Deno.exit(0);
};

runBuilds();
