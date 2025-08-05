import type { onResolveArgs, Plugin, PluginBuild } from "@esbuild/mod.js";

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

export default function importMapPlugin(options: { configPath?: string } = {}): Plugin {
  const configPath = options.configPath || "deno.json";

  return {
    name: "import-map",
    setup(build: PluginBuild) {
      let imports: Record<string, string>;
      try {
        const configText = Deno.readTextFileSync(configPath);
        const config = JSON.parse(configText);
        imports = {
          ...config.imports,
          ...config.scopes?.[build.initialOptions.entryPoints?.[0]]?.imports,
        };
      } catch {
        return;
      }

      const externalPackages = build.initialOptions.external || [];

      build.onResolve({ filter: /.*/ }, (args: onResolveArgs) => {
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
