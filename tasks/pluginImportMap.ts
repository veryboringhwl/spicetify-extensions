import type { OnResolveArgs, Plugin, PluginBuild } from "@esbuild/mod.js";

type ImportMap = {
  imports?: Record<string, string>;
  scopes?: Record<string, Record<string, string>>;
};

function resolveImport(importPath: string, imports: Record<string, string>): string {
  const sortedKeys = Object.keys(imports).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    const value = imports[key];
    if (key.endsWith("/") && importPath.startsWith(key)) {
      return value + importPath.slice(key.length);
    }
    if (!key.endsWith("/") && (importPath === key || importPath.startsWith(`${key}/`))) {
      return value + importPath.slice(key.length);
    }
  }

  return importPath;
}

export function importMapPlugin(options: { configPath?: string } = {}): Plugin {
  const configPath = options.configPath || "deno.json";

  return {
    name: "import-map",
    setup(build: PluginBuild) {
      let imports: Record<string, string> = {};
      try {
        const configText = Deno.readTextFileSync(configPath);
        const config = JSON.parse(configText) as ImportMap;

        imports = { ...(config.imports ?? {}) };

        const entryPoints = build.initialOptions.entryPoints;
        let firstEntryPath: string | undefined;

        if (Array.isArray(entryPoints)) {
          const first = entryPoints[0] as unknown;
          if (typeof first === "string") {
            firstEntryPath = first;
          } else if (
            first &&
            typeof first === "object" &&
            "in" in (first as Record<string, unknown>)
          ) {
            firstEntryPath = (first as { in: string }).in;
          }
        } else if (entryPoints && typeof entryPoints === "object") {
          const values = Object.values(entryPoints as Record<string, string>);
          firstEntryPath = values[0];
        }

        if (firstEntryPath && config.scopes) {
          const scope = config.scopes[firstEntryPath];
          if (scope) {
            imports = { ...imports, ...scope };
          }
        }
      } catch {
        return;
      }

      const externalPackages = build.initialOptions.external || [];

      build.onResolve({ filter: /.*/ }, (args: OnResolveArgs) => {
        if (
          externalPackages.includes(args.path) ||
          args.path.startsWith("./") ||
          args.path.startsWith("../") ||
          args.path.startsWith("/")
        ) {
          return undefined;
        }

        const resolvedPath = resolveImport(args.path, imports);

        if (resolvedPath === args.path) {
          return undefined;
        }

        if (externalPackages.includes(resolvedPath)) {
          return { path: resolvedPath, external: true };
        }

        if (
          resolvedPath.startsWith("http:") ||
          resolvedPath.startsWith("https:") ||
          resolvedPath.startsWith("jsr:")
        ) {
          return { path: resolvedPath, external: true };
        }

        if (resolvedPath.startsWith("npm:")) {
          const pkgName = resolvedPath.slice(4).split("@")[0];
          return { path: pkgName, external: true };
        }

        return { path: resolvedPath };
      });
    },
  };
}
