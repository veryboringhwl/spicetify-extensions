import type { BuildContext, PluginBuild } from "@esbuild/mod.js";
import * as esbuild from "@esbuild/mod.js";
import { join } from "@std/path";
import { TextLineStream } from "@std/streams";
import { externalGlobalsPlugin } from "./pluginExternalGlobals.ts";
import { importMapPlugin } from "./pluginImportMap.ts";
import { inlineCSSPlugin } from "./pluginInlineCSS.ts";

const APPDATA: string = Deno.env.get("APPDATA") || "";
const LOCALAPPDATA: string = Deno.env.get("LOCALAPPDATA") || "";
const SPICETIFY_OUT: string = join(APPDATA, "spicetify", "Extensions") || "";
const SPOTIFY_OUT: string = join(APPDATA, "Spotify", "Apps", "xpui", "extensions") || "";

const getCurrentTime = (): string => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
};

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

const contexts: Record<string, BuildContext> = {};
let shouldWatchSpotify = false;

const watchExtension = async (folderName: string, folderPath: string): Promise<void> => {
  const SRC = await getEntryFile(folderPath);
  if (!SRC) return;

  const OUT = join("dist", `${folderName}.mjs`);

  contexts[folderName] = await esbuild.context({
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
      inlineCSSPlugin({
        minify: false,
      }),
      {
        name: "on-end-plugin",
        setup(build: PluginBuild) {
          build.onEnd(async () => {
            console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m ${folderName} changes detected.`);
            await Deno.copyFile(OUT, join(SPICETIFY_OUT, `${folderName}.mjs`));
            if (shouldWatchSpotify) {
              await Deno.copyFile(OUT, join(SPOTIFY_OUT, `${folderName}.mjs`));
              await reloadSpotify();
              console.log(`${folderName} was updated.`);
            }
          });
        },
      },
    ],
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
  for await (const dirEntry of Deno.readDir(extensionsDir)) {
    if (dirEntry.isDirectory) {
      const folderPath = join(extensionsDir, dirEntry.name);
      watchPromises.push(watchExtension(dirEntry.name, folderPath));
    }
  }
  await Promise.all(watchPromises);
};

const killSpotify = async (): Promise<void> => {
  await new Deno.Command("taskkill", {
    args: ["/F", "/IM", "spotify.exe"],
  }).output();
};

const applyExtensions = async (): Promise<void> => {
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
};

const startSpotify = (): void => {
  const spotifyPath = join(APPDATA, "Spotify", "Spotify.exe");
  const startCommand = new Deno.Command(spotifyPath, {
    args: ["--remote-debugging-port=9222"],
    detached: true,
  });
  startCommand.spawn();
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

const args: string[] = Deno.args;

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

runWatchers();

const runBiome = async (): Promise<void> => {
  const formatCommand = new Deno.Command("deno", {
    args: ["task", "check"],
  });
  const { stdout } = await formatCommand.output();
  console.log("Biome:", new TextDecoder().decode(stdout));
};

async function executeCommand(commandString: string): Promise<void> {
  console.log(`Executing: ${commandString}`);
  const [cmd, ...args] = commandString.split(" ");

  try {
    const command = new Deno.Command(cmd, {
      args,
      stdout: "inherit",
      stderr: "inherit",
      stdin: "inherit",
    });
    const status = await command.spawn().status;
    if (!status.success) {
      console.log(`Command exited with code ${status.code}`);
    }
  } catch (error) {
    console.log(error);
  }
}

const lineStream = Deno.stdin.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new TextLineStream());

for await (const line of lineStream) {
  const command = line.trim();
  if (!command) continue;

  if (command === "format" || command === "check") {
    await runBiome();
  } else {
    await executeCommand(command);
  }
}

Deno.addSignalListener("SIGINT", async () => {
  console.log(`\x1b[32m[${getCurrentTime()}]\x1b[0m Exiting...`);

  for (const [folderName, context] of Object.entries(contexts)) {
    await context.dispose();
    console.log(`\x1b[33m${folderName} watcher terminated.\x1b[0m`);
  }

  Deno.exit(0);
});
