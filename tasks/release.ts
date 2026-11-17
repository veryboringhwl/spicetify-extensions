import { spawnSync } from "node:child_process";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import * as esbuild from "esbuild";
import { inlineCSSPlugin } from "./pluginInlineCss.ts";
import { reactCompilerPlugin } from "./reactCompilerPlugin.ts";
import { spicetifyShims } from "./spicetifyShimsPlugin.ts";

const isNotFoundError = (error: unknown): boolean =>
  (error as NodeJS.ErrnoException | undefined)?.code === "ENOENT";

const getEntryFile = async (folderPath: string): Promise<string | null> => {
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
      reactCompilerPlugin(),
    ] as esbuild.Plugin[],
    banner: {
      js: "await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));",
    },
  });
};

const buildFolders = async (): Promise<void> => {
  const buildPromises = [];
  for (const dirEntry of await readdir("extensions", { withFileTypes: true })) {
    if (dirEntry.isDirectory()) {
      const folderPath = join("extensions", dirEntry.name);
      buildPromises.push(buildExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(buildPromises);
};

const runCheck = async (): Promise<void> => {
  const checkCommand = spawnSync(process.execPath, ["run", "check"], { encoding: "utf8" });
  console.log("Oxc:", checkCommand.stdout);
};

const runBuilds = async (): Promise<void> => {
  const startTime = performance.now();

  await buildFolders();
  await runCheck();

  const endTime = performance.now();
  const elapsed = ((endTime - startTime) / 1000).toFixed(2);
  console.log(`\x1b[33mBuild completed in ${elapsed} seconds.\x1b[0m`);
  process.exit(0);
};

await runBuilds();
