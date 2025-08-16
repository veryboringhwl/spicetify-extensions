import type { OnLoadArgs, OnResolveArgs, Plugin, PluginBuild } from "@esbuild/mod.d.ts";

export const externalGlobalsPlugin = (globals: Record<string, string>): Plugin => ({
  name: "external-global",
  setup(build: PluginBuild) {
    const specifiers: string[] = Object.keys(globals);
    if (specifiers.length === 0) return;

    const escapeRegex = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const filterPattern = `^(${specifiers.map(escapeRegex).join("|")})$`;
    const filter = new RegExp(filterPattern);

    const specAlternation = specifiers.map(escapeRegex).join("|");

    const srcFilter = /\.(ts|tsx|js|jsx)$/;
    const importRe = new RegExp(
      String.raw`\bimport\s+(type\s+)?(?:([A-Za-z_$][\w$]*)\s*,\s*)?(?:\{([^}]*)\}\s*)?from\s*["'](${specAlternation})["']\s*;?`,
      "gms",
    );

    build.onLoad({ filter: srcFilter }, async (args: OnLoadArgs) => {
      const contents = await Deno.readTextFile(args.path);

      if (!new RegExp(String.raw`from\s*["'](${specAlternation})["']`).test(contents)) {
        return { contents, loader: inferLoader(args.path) };
      }

      let counter = 0;
      const rewritten = contents.replace(
        importRe,
        (
          match,
          typeKw: string | undefined,
          defaultIdent: string | undefined,
          namedBody: string | undefined,
          spec: string,
        ) => {
          if (typeKw) return match;
          if (!namedBody || namedBody.trim() === "") return match;

          const rawEntries = namedBody
            .split(",")
            .map((segment: string) => segment.trim())
            .filter((segment: string) => segment.length > 0);

          const typeEntries: string[] = [];
          const valueEntriesForDestructure: string[] = [];

          for (const entry of rawEntries) {
            if (entry.startsWith("type ")) {
              const stripped = entry.slice(5).trim();
              if (stripped.length > 0) typeEntries.push(stripped);
              continue;
            }
            const asMatch = entry.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
            if (asMatch) {
              valueEntriesForDestructure.push(`${asMatch[1]}: ${asMatch[2]}`);
            } else {
              valueEntriesForDestructure.push(entry);
            }
          }

          if (valueEntriesForDestructure.length === 0) {
            const out: string[] = [];
            if (defaultIdent) {
              out.push(`import ${defaultIdent} from "${spec}";`);
            }
            if (typeEntries.length > 0) {
              out.push(`import type { ${typeEntries.join(", ")} } from "${spec}";`);
            }

            return out.length > 0 ? out.join("\n") : match;
          }

          const tempIdent = defaultIdent || `__global_${counter++}__`;
          const out: string[] = [];
          out.push(`import ${tempIdent} from "${spec}";`);
          out.push(`const { ${valueEntriesForDestructure.join(", ")} } = ${tempIdent};`);
          if (typeEntries.length > 0) {
            out.push(`import type { ${typeEntries.join(", ")} } from "${spec}";`);
          }
          return out.join("\n");
        },
      );

      return { contents: rewritten, loader: inferLoader(args.path) };
    });

    build.onResolve({ filter }, (args: OnResolveArgs) => {
      return {
        path: args.path,
        namespace: "external-global",
      };
    });

    build.onLoad({ filter: /.*/, namespace: "external-global" }, (args: OnLoadArgs) => {
      const specifier = args.path;
      const globalRef = globals[specifier];
      if (!globalRef) {
        return {
          errors: [{ text: `external-global: No global mapping for '${specifier}'.` }],
          contents: "",
          loader: "js",
        };
      }

      if (specifier === "react/jsx-runtime") {
        return {
          contents: [
            `// external-global stub for ${JSON.stringify(specifier)}`,
            `const __external_global__ = ${globalRef};`,
            `export const jsx = __external_global__.jsx;`,
            `export const jsxs = __external_global__.jsxs;`,
            `export const jsxDEV = __external_global__.jsxDEV;`,
            `export const Fragment = __external_global__.Fragment;`,
            `export default __external_global__;`,
          ].join("\n"),
          loader: "js",
        };
      }

      return {
        contents: `// external-global stub for ${JSON.stringify(specifier)}\nexport default ${globalRef};`,
        loader: "js",
      };
    });
  },
});

function inferLoader(filePath: string): "ts" | "tsx" | "js" | "jsx" {
  if (filePath.endsWith(".tsx")) return "tsx";
  if (filePath.endsWith(".ts")) return "ts";
  if (filePath.endsWith(".jsx")) return "jsx";
  return "js";
}
