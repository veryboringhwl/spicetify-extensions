import * as esbuild from "@esbuild/mod.js";
import { denoPlugins } from "@oazmi/esbuild-plugin-deno";
import { join } from "@std/path";
import { inlineCSSPlugin } from "./pluginInlineCSS.ts";
import { reactCompilerPlugin } from "./reactCompilerPlugin.ts";
import { spicetifyShims } from "./spicetifyShimsPlugin.ts";

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
    legalComments: "external",
    plugins: [
      spicetifyShims(),
      inlineCSSPlugin({
        minify: true,
      }),
      ...denoPlugins({
        initialPluginData: {
          runtimePackage: "./deno.json",
        },
      }),
      reactCompilerPlugin(),
    ] as esbuild.Plugin[],
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

await runBuilds();
