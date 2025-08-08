const knownConstructors = new Map<any, string>([
  [Date, "Date"],
  [RegExp, "RegExp"],
  [Error, "Error"],
  [Promise, "Promise<unknown>"],
  [ArrayBuffer, "ArrayBuffer"],
  [Uint8Array, "Uint8Array"],
  [Int32Array, "Int32Array"],
]);

if (typeof HTMLElement !== "undefined") {
  knownConstructors.set(HTMLElement, "HTMLElement");
}
if (typeof Element !== "undefined") {
  knownConstructors.set(Element, "Element");
}

export const generateTypes = (rootObject: any, rootTypeName: string): string => {
  const indent = "  ";
  const arraySampleSize = 10;

  const definitions = new Map<string, string>();
  const visited = new WeakMap<object, string>();

  const getUniqueTypeName = (path: string, baseName: string): string => {
    const name =
      path
        .replace(/\[\d+\]/g, "")
        .split(/[._[\]]/)
        .filter(Boolean)
        .map((part) => {
          const sanitized = part.replace(/[^a-zA-Z0-9_$]/g, "");
          return sanitized.charAt(0).toUpperCase() + sanitized.slice(1);
        })
        .join("") || baseName;

    if (!definitions.has(name)) {
      return name;
    }

    let counter = 2;
    while (definitions.has(`${name}${counter}`)) {
      counter++;
    }
    return `${name}${counter}`;
  };

  const generateFunctionType = (value: (...args: any[]) => any, path: string): string => {
    const existingTypeName = visited.get(value);
    if (existingTypeName) return existingTypeName;

    const typeName = getUniqueTypeName(path, `FunctionType${definitions.size}`);
    visited.set(value, typeName);

    const args = Array.from({ length: value.length }, (_, i) => `arg${i}: any`).join(", ");
    const funcType = `(${args}) => unknown`;

    definitions.set(typeName, `export type ${typeName} = ${funcType};`);
    return typeName;
  };

  const generateComplexType = (
    value: any[],
    path: string,
    depth: number,
    baseElementTypeName: string,
    wrapperPrefix: string,
    wrapperSuffix: string,
  ): string => {
    if (value.length === 0) return `${wrapperPrefix}unknown${wrapperSuffix}`;

    const sample = value.length > arraySampleSize ? value.slice(0, arraySampleSize) : value;
    const elementTypes = sample.map((element) =>
      generateTypeForValue(element, `${path}${baseElementTypeName}`, depth),
    );
    const uniqueTypes = [...new Set(elementTypes)].sort().join(" | ") || "unknown";

    return `${wrapperPrefix}${uniqueTypes}${wrapperSuffix}`;
  };

  const generateArrayType = (value: any[], path: string, depth: number): string => {
    return generateComplexType(value, path, depth, "Item", "Array<", ">");
  };

  const generateSetType = (value: Set<any>, path: string, depth: number): string => {
    return generateComplexType(Array.from(value.values()), path, depth, "SetElement", "Set<", ">");
  };

  const generateMapType = (value: Map<any, any>, path: string, depth: number): string => {
    if (value.size === 0) return "Map<unknown, unknown>";

    const sample = Array.from(value.entries()).slice(0, arraySampleSize);

    const keyTypes =
      [...new Set(sample.map(([key]) => generateTypeForValue(key, `${path}Key`, depth)))]
        .sort()
        .join(" | ") || "unknown";
    const valueTypes =
      [...new Set(sample.map(([, val]) => generateTypeForValue(val, `${path}Value`, depth)))]
        .sort()
        .join(" | ") || "unknown";

    return `Map<${keyTypes}, ${valueTypes}>`;
  };

  const generateObjectType = (value: object, path: string, depth: number): string => {
    const existingTypeName = visited.get(value);
    if (existingTypeName) return existingTypeName;

    const typeName = getUniqueTypeName(path, "ObjectType");
    visited.set(value, typeName);

    definitions.set(typeName, `export interface ${typeName} {}`); // Placeholder for circular refs

    const properties: string[] = [];
    const seenKeys = new Set<string | symbol>();
    const nextIndent = indent.repeat(depth + 1);

    let currentProto = value;
    while (currentProto && currentProto !== Object.prototype) {
      const keys = Reflect.ownKeys(currentProto);

      for (const key of keys) {
        if (key === "constructor" || seenKeys.has(key)) continue;
        seenKeys.add(key);

        const propertyKey =
          typeof key === "symbol"
            ? `[${JSON.stringify(key.toString())}]`
            : /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)
              ? key
              : `"${key}"`;

        try {
          const propertyValue = Reflect.get(value, key);

          const propertyPath =
            typeof key === "symbol" ? `${path}[${key.description || "symbol"}]` : `${path}.${key}`;

          const propertyType = generateTypeForValue(propertyValue, propertyPath, depth + 1);
          properties.push(`${nextIndent}${propertyKey}: ${propertyType};`);
        } catch (_e) {
          properties.push(`${nextIndent}${propertyKey}: any; // Error accessing property`);
        }
      }
      currentProto = Object.getPrototypeOf(currentProto);
    }

    properties.sort();

    if (properties.length > 0) {
      const currentIndent = indent.repeat(depth);
      const interfaceBody = `\n${properties.join("\n")}\n${currentIndent}`;
      definitions.set(typeName, `export interface ${typeName} {${interfaceBody}}`);
    } else {
      definitions.set(typeName, `export type ${typeName} = Record<string, unknown>;`);
    }
    return typeName;
  };

  const generateTypeForValue = (value: any, path: string, depth: number): string => {
    if (value === null) return "null";
    const basicType = typeof value;
    if (basicType !== "object" && basicType !== "function") return basicType;

    for (const [ctor, typeName] of knownConstructors.entries()) {
      if (value instanceof ctor) return typeName;
    }

    if (value instanceof Map) return generateMapType(value, path, depth);
    if (value instanceof Set) return generateSetType(value, path, depth);

    const existingTypeName = visited.get(value);
    if (existingTypeName) return existingTypeName;

    if (Array.isArray(value)) return generateArrayType(value, path, depth);
    if (typeof value === "function") return generateFunctionType(value, path);
    if (typeof value === "object") return generateObjectType(value, path, depth);

    return "unknown";
  };

  generateTypeForValue(rootObject, rootTypeName, 0);

  const header = `// Auto-generated by type-generator script at ${new Date().toISOString()}`;
  const sortedDefinitions = Array.from(definitions.entries())
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([, value]) => value);

  return [header, ...sortedDefinitions].join("\n\n");
};

export default generateTypes;
