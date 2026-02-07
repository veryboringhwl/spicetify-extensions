const knownConstructors = new Map<new (...args: any[]) => any, string>([
  [Date, "Date"],
  [RegExp, "RegExp"],
  [Error, "Error"],
  [Promise, "Promise<unknown>"],
  [ArrayBuffer, "ArrayBuffer"],
  [Uint8Array, "Uint8Array"],
  [Int32Array, "Int32Array"],
]) satisfies Map<new (...args: any[]) => any, string>;

if (typeof HTMLElement !== "undefined") {
  knownConstructors.set(HTMLElement, "HTMLElement");
}
if (typeof Element !== "undefined") {
  knownConstructors.set(Element, "Element");
}

type BaseNodeInfo = {
  id: string;
  occurrences: Set<string>;
};

// 1. UPDATED: Added isAsync to the function kind
type NodeInfo =
  | (BaseNodeInfo & { kind: "object"; props: Map<string, string> })
  | (BaseNodeInfo & { kind: "function"; arity: number; isAsync: boolean })
  | (BaseNodeInfo & { kind: "array"; elements: string[] })
  | (BaseNodeInfo & { kind: "map"; mapEntries: Array<[string, string]> })
  | (BaseNodeInfo & { kind: "set"; elements: string[] });

export const generateTypes = (rootObject: any, rootTypeName: string): string => {
  const indent = "  ";
  const arraySampleSize = 10;

  const runtimeUsername: string | null = (() => {
    try {
      // @ts-expect-error
      return typeof Spicetify?.Platform?.username !== "undefined"
        ? String(Spicetify.Platform.username)
        : null;
    } catch (_e) {
      return null;
    }
  })();

  const escapedUsername = runtimeUsername
    ? runtimeUsername.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    : null;

  const definitions = new Map<string, string>();
  const visited = new WeakMap<object, string>();
  const nodes = new Map<string, NodeInfo>();
  let nodeCounter = 0;

  const normalizePathForNaming = (path: string): string => {
    let usedPath = path || "";
    if (escapedUsername) {
      usedPath = usedPath.replace(new RegExp(escapedUsername, "g"), "USERNAME");
    }

    usedPath = usedPath.replace(/\[\d+\]/g, "");

    const parts = usedPath.split(/[._[\]]/).filter(Boolean);

    const collapsed = parts.reduce<string[]>((acc, part) => {
      if (acc.length === 0 || acc.at(-1) !== part) {
        acc.push(part);
      }
      return acc;
    }, []);

    const MAX_SEGMENTS = 12;
    if (collapsed.length > MAX_SEGMENTS) {
      const head = collapsed.slice(0, MAX_SEGMENTS - 4);
      const tail = collapsed.slice(-3);
      return [...head, "...", ...tail].join(".");
    }
    return collapsed.join(".");
  };

  const deriveNameFromPath = (path: string, baseName: string): string => {
    const normalizedPath = normalizePathForNaming(path);
    const parts = normalizedPath.split(".").filter(Boolean);
    const name =
      parts
        .map((part) => {
          const sanitized = part.replace(/[^a-zA-Z0-9_$]/g, "");
          return sanitized ? sanitized.charAt(0).toUpperCase() + sanitized.slice(1) : "";
        })
        .filter(Boolean)
        .join("") || baseName;
    return name;
  };

  const getUniqueTypeName = (base: string): string => {
    if (!definitions.has(base)) return base;
    let counter = 2;
    while (definitions.has(`${base}${counter}`)) counter++;
    return `${base}${counter}`;
  };

  const getNodeFor = <T extends NodeInfo["kind"]>(
    obj: object,
    initialPath: string,
    kind: T,
  ): { id: string; info: NodeInfo & { kind: T }; isNew: boolean } => {
    const existingId = visited.get(obj);
    if (existingId) {
      const info = nodes.get(existingId);
      if (!info) {
        throw new Error(
          `Internal state inconsistency: visited map has ID ${existingId} but nodes map does not.`,
        );
      }
      info.occurrences.add(initialPath);
      return {
        id: existingId,
        info: info as NodeInfo & { kind: T },
        isNew: false,
      };
    }

    const id = `__N${++nodeCounter}`;
    visited.set(obj, id);
    const baseInfo: BaseNodeInfo = { id, occurrences: new Set([initialPath]) };

    let info: NodeInfo;
    switch (kind) {
      case "object":
        info = { ...baseInfo, kind, props: new Map() };
        break;
      case "function":
        info = { ...baseInfo, kind, arity: 0, isAsync: false };
        break;
      case "array":
        info = { ...baseInfo, kind, elements: [] };
        break;
      case "map":
        info = { ...baseInfo, kind, mapEntries: [] };
        break;
      case "set":
        info = { ...baseInfo, kind, elements: [] };
        break;
    }

    nodes.set(id, info);
    return { id, info: info as NodeInfo & { kind: T }, isNew: true };
  };

  const generateTypeToken = (value: any, path: string): string => {
    if (value === null) return "null";

    const basicType = typeof value;
    if (basicType !== "object" && basicType !== "function") {
      return basicType;
    }

    for (const [ctor, typeName] of knownConstructors.entries()) {
      try {
        if (value instanceof ctor) return typeName;
      } catch {}
    }

    if (value instanceof Map) {
      const { id, info, isNew } = getNodeFor(value, path, "map");
      if (isNew && value.size > 0) {
        const sample = Array.from(value.entries()).slice(0, arraySampleSize);
        for (const [key, val] of sample) {
          info.mapEntries.push([
            generateTypeToken(key, `${path}.Key`),
            generateTypeToken(val, `${path}.Value`),
          ]);
        }
      }
      return id;
    }

    if (value instanceof Set) {
      const { id, info, isNew } = getNodeFor(value, path, "set");
      if (isNew && value.size > 0) {
        const sample = Array.from(value.values()).slice(0, arraySampleSize);
        for (const element of sample) {
          info.elements.push(generateTypeToken(element, `${path}.SetElement`));
        }
      }
      return id;
    }

    if (Array.isArray(value)) {
      const { id, info, isNew } = getNodeFor(value, path, "array");
      if (isNew && value.length > 0) {
        const sample = value.slice(0, arraySampleSize);
        for (const element of sample) {
          info.elements.push(generateTypeToken(element, `${path}.Item`));
        }
      }
      return id;
    }

    if (typeof value === "function") {
      const { id, info, isNew } = getNodeFor(value, path, "function");
      if (isNew) {
        info.arity = value.length;
        try {
          const funcStr = value.toString();
          if (
            value.constructor.name === "AsyncFunction" ||
            funcStr.startsWith("async") ||
            funcStr.includes("__awaiter") ||
            funcStr.includes("return new Promise")
          ) {
            info.isAsync = true;
          }
        } catch {}
      }
      return id;
    }

    if (typeof value === "object") {
      const { id, info, isNew } = getNodeFor(value, path, "object");
      if (!isNew) return id;

      let currentProto: object | null = value;
      const seenKeys = new Set<string | symbol>();
      while (currentProto && currentProto !== Object.prototype) {
        for (const key of Reflect.ownKeys(currentProto)) {
          if (key === "constructor" || typeof key === "symbol" || seenKeys.has(key)) {
            continue;
          }
          seenKeys.add(key);
          const propPath = `${path}.${String(key)}`;
          try {
            const propVal = value[key as keyof typeof value];
            const token = generateTypeToken(propVal, propPath);
            info.props.set(String(key), token);
          } catch {
            info.props.set(String(key), "any /* inaccessible */");
          }
        }
        currentProto = Object.getPrototypeOf(currentProto);
      }
      return id;
    }

    return "unknown";
  };

  const rootToken = generateTypeToken(rootObject, rootTypeName);

  const placeholderToName = new Map<string, string>();

  const buildBaseNameForNode = (node: NodeInfo): string => {
    const pathSegmentCount = (p: string) => normalizePathForNaming(p).split(".").length;
    const bestPath =
      Array.from(node.occurrences).toSorted((a, b) => {
        const segA = pathSegmentCount(a);
        const segB = pathSegmentCount(b);
        return segA !== segB ? segA - segB : a.localeCompare(b);
      })[0] ?? node.id;

    const kindToBaseName: Record<NodeInfo["kind"], string> = {
      object: "ObjectType",
      function: "FunctionType",
      array: "ArrayType",
      map: "MapType",
      set: "SetType",
    };
    return deriveNameFromPath(bestPath, kindToBaseName[node.kind]);
  };

  for (const node of nodes.values()) {
    const baseName = buildBaseNameForNode(node);
    const uniqueName = getUniqueTypeName(baseName);
    placeholderToName.set(node.id, uniqueName);
    definitions.set(uniqueName, `/* Analyzing ${uniqueName}... */`);
  }

  const resolveToken = (token: string): string => {
    if (token == null) return "unknown";
    return token.replace(/__N\d+/g, (match) => placeholderToName.get(match) ?? "unknown");
  };

  const buildDefinitionForNode = (node: NodeInfo, finalName: string): string => {
    switch (node.kind) {
      case "function": {
        const args = Array.from({ length: node.arity }, (_, i) => `arg${i}: any`).join(", ");
        const returnType = node.isAsync ? "Promise<unknown>" : "unknown";
        return `export type ${finalName} = (${args}) => ${returnType};`;
      }
      case "array":
      case "set": {
        const elements = node.elements.length > 0 ? node.elements : ["unknown"];
        const uniqueTypes = [...new Set(elements.map(resolveToken))].toSorted().join(" | ");
        const wrapper = node.kind === "array" ? "Array" : "Set";
        return `export type ${finalName} = ${wrapper}<${uniqueTypes}>;`;
      }
      case "map": {
        if (node.mapEntries.length === 0) {
          return `export type ${finalName} = Map<unknown, unknown>;`;
        }
        const keyTypes = [...new Set(node.mapEntries.map(([k]) => resolveToken(k)))]
          .toSorted()
          .join(" | ");
        const valueTypes = [...new Set(node.mapEntries.map(([, v]) => resolveToken(v)))]
          .toSorted()
          .join(" | ");
        return `export type ${finalName} = Map<${keyTypes}, ${valueTypes}>;`;
      }
      case "object": {
        if (node.props.size === 0) {
          return `export type ${finalName} = Record<string, unknown>;`;
        }
        const properties = Array.from(node.props.entries()).map(([key, token]) => {
          const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
          return `${indent}${safeKey}: ${resolveToken(token)};`;
        });
        const body = `\n${properties.toSorted().join("\n")}\n`;
        return `export interface ${finalName} {${body}}`;
      }
    }
  };

  for (const node of nodes.values()) {
    const finalName = placeholderToName.get(node.id);
    if (!finalName) {
      throw new Error(
        `Internal state inconsistency: placeholderToName map missing name for node ID ${node.id}.`,
      );
    }
    definitions.set(finalName, buildDefinitionForNode(node, finalName));
  }

  if (/__N\d+/.test(rootToken)) {
    const rootPlaceholder = rootToken;
    const mappedName = placeholderToName.get(rootPlaceholder);
    if (mappedName && rootTypeName !== mappedName) {
      definitions.set(rootTypeName, `export type ${rootTypeName} = ${mappedName};`);
    }
  } else {
    definitions.set(rootTypeName, `export type ${rootTypeName} = ${resolveToken(rootToken)};`);
  }

  const header = `// Auto-generated at ${new Date().toISOString()} on Spotify Version: ${String(Spicetify.Platform.version)}`;

  const sortedDefinitions = Array.from(definitions.entries())
    .toSorted(([a], [b]) => a.localeCompare(b))
    .map(([, val]) => val);

  let output = [header, ...sortedDefinitions].join("\n\n");
  if (runtimeUsername) {
    output = output.split(runtimeUsername).join("USERNAME");
  }

  return output;
};
