// @deno-types="@esbuild/mod.d.ts"
import * as esbuild from "@esbuild/mod.js";
import { join } from "@std/path";
import externalGlobalPlugin from "./pluginExternalGlobals.js";
import inlineCssPlugin from "./pluginInlineCss.js";

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
    sourcemap: false,
    minify: true,
    jsx: "automatic",
    external: ["react", "react-dom", "react/jsx-runtime"],
    plugins: [
      inlineCssPlugin({ compressed: true }),
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
  const buildPromises = [];
  for await (const dirEntry of Deno.readDir("extensions")) {
    if (dirEntry.isDirectory) {
      const folderPath = join("extensions", dirEntry.name);
      buildPromises.push(buildExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(buildPromises);
};

const runBiome = async () => {
  console.log("Running Biome...");
  const formatCommand = new Deno.Command("deno", {
    args: ["task", "format"],
  });
  const { code, stdout, stderr } = await formatCommand.output();
  if (code !== 0) {
    console.error("Biome failed:", new TextDecoder().decode(stderr));
  } else {
    console.log("Biome check passed:", new TextDecoder().decode(stdout));
  }
};

const runBuilds = async () => {
  const startTime = performance.now();

  await buildFolders();
  await runBiome();

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mBuild completed in ${elapsed} seconds.\x1b[0m`);
  Deno.exit(0);
};

runBuilds();
