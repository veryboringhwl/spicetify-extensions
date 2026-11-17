import { spawn, spawnSync } from "node:child_process";
import { copyFile, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createInterface } from "node:readline";
import type { BuildContext, PluginBuild } from "esbuild";
import { context, type Plugin } from "esbuild";
import { inlineCSSPlugin } from "./pluginInlineCss.ts";
import { spicetifyShims } from "./spicetifyShimsPlugin.ts";

const APPDATA: string = process.env.APPDATA || "";
const LOCALAPPDATA: string = process.env.LOCALAPPDATA || "";
const SPICETIFY_OUT: string = join(APPDATA, "spicetify", "Extensions") || "";
const SPOTIFY_OUT: string = join(APPDATA, "Spotify", "Apps", "xpui", "extensions") || "";

const getCurrentTime = (): string => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
};

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

const contexts: Record<string, BuildContext> = {};
let shouldWatchSpotify = false;

const watchExtension = async (folderName: string, folderPath: string): Promise<void> => {
  const SRC = await getEntryFile(folderPath);
  if (!SRC) return;

  const OUT = join("dist", `${folderName}.mjs`);

  contexts[folderName] = await context({
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
      {
        name: "on-end-plugin",
        setup(build: PluginBuild) {
          build.onEnd(async () => {
            console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m ${folderName} changes detected.`);
            await copyFile(OUT, join(SPICETIFY_OUT, `${folderName}.mjs`));
            if (shouldWatchSpotify) {
              await copyFile(OUT, join(SPOTIFY_OUT, `${folderName}.mjs`));
              await reloadSpotify();
              console.log(`${folderName} was updated.`);
            }
          });
        },
      },
    ] as Plugin[],
    banner: {
      js: "await new Promise((resolve) => Spicetify.Events.webpackLoaded.on(resolve));",
    },
  });

  await contexts[folderName].watch();

  console.log(`\x1b[36mWatcher started for ${folderName}.\x1b[0m`);
};

const watchFolders = async (): Promise<void> => {
  const extensionsDir = "extensions";
  const watchPromises: Promise<void>[] = [];
  for (const dirEntry of await readdir(extensionsDir, { withFileTypes: true })) {
    if (dirEntry.isDirectory()) {
      const folderPath = join(extensionsDir, dirEntry.name);
      watchPromises.push(watchExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(watchPromises);
};

const killSpotify = async (): Promise<void> => {
  const output = spawnSync("taskkill", ["/F", "/IM", "spotify.exe"], { encoding: "utf8" });
  console.log(`\x1b[36m${output.stdout}\x1b[0m`);
};

const applyExtensions = async (): Promise<void> => {
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
};

const startSpotify = (): void => {
  const spotifyPath = join(APPDATA, "Spotify", "Spotify.exe");
  spawn(spotifyPath, ["--remote-debugging-port=9222"], {
    detached: true,
    stdio: "ignore",
  }).unref();
  console.log("Spotify started.");
};

interface DebuggerTarget {
  id: string;
  url: string;
  webSocketDebuggerUrl?: string;
}

interface RuntimeEvaluateMessage {
  id: number;
  method: string;
  params: {
    expression: string;
  };
}

const reloadSpotify = async (): Promise<void> => {
  try {
    const response = await fetch("http://localhost:9222/json/list");
    const targets: DebuggerTarget[] = await response.json();
    const wsUrl = targets.find((d) => d.url.includes("spotify"))?.webSocketDebuggerUrl;

    if (wsUrl) {
      const ws = new WebSocket(wsUrl);
      await new Promise<void>((resolve, reject) => {
        ws.onopen = () => {
          const message: RuntimeEvaluateMessage = {
            id: 0,
            method: "Runtime.evaluate",
            params: {
              expression: "window.location.reload();",
            },
          };
          ws.send(JSON.stringify(message));
          ws.close();
          resolve();
        };
        ws.onerror = (err) => reject(err);
      });
    }
  } catch {
    console.log("Couldnt reload Spotify, attempting to restart");
    await killSpotify();
    await new Promise<void>((resolve) => setTimeout(resolve, 500));
    startSpotify();
  }
};

const args: string[] = process.argv.slice(2);

const runWatchers = async (): Promise<void> => {
  const startTime = performance.now();

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

await runWatchers();

const runCheck = async (): Promise<void> => {
  const checkCommand = spawnSync(process.execPath, ["run", "check"], { encoding: "utf8" });
  console.log("Oxc:", checkCommand.stdout);
};

async function executeCommand(commandString: string): Promise<void> {
  console.log(`Executing: ${commandString}`);
  const [cmd, ...commandArgs] = commandString.split(" ");

  await new Promise<void>((resolve) => {
    const command = spawn(cmd, commandArgs, {
      stdio: "inherit",
    });
    command.on("error", (error) => {
      console.log(error);
      resolve();
    });
    command.on("close", (code) => {
      if (code) {
        console.log(`Command exited with code ${code}`);
      }
      resolve();
    });
  });
}

process.on("SIGINT", async () => {
  console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m Exiting...`);

  for (const [folderName, buildContext] of Object.entries(contexts)) {
    await buildContext.dispose();
    console.log(`\x1b[33m${folderName} watcher terminated.\x1b[0m`);
  }

  process.exit(0);
});

const lineReader = createInterface({
  input: process.stdin,
  crlfDelay: Infinity,
});

(async () => {
  for await (const line of lineReader) {
    const command = line.trim();
    if (!command) continue;

    if (command === "format" || command === "check") {
      await runCheck();
    } else {
      await executeCommand(command);
    }
  }
})();
