const generateTypes = (rootObject: any, rootTypeName: string): string => {
  const visited = new WeakMap<object, string>();
  const type = (obj: any, access: string, depth: number): string => {
    if (obj === null) return "null";
    if (typeof obj === "undefined") return "undefined";
    const constructor = obj?.constructor?.name;
    switch (constructor) {
      case "Map":
        return "Map<any, any>";
      case "Set":
        return "Set<any>";
      case "Uint8Array":
        return "Uint8Array";
      case "Promise":
        return "Promise<any>";
    }
    if (obj instanceof Element) return "Element";
    if (obj instanceof HTMLElement) return "HTMLElement";
    const wrapVisited = (currentObj: object): string | undefined => {
      const typeRef = visited.get(currentObj);
      if (typeRef) return typeRef;
      visited.set(currentObj, access);
      return undefined;
    };
    const indent = "  ".repeat(depth);
    const nextIndent = "  ".repeat(depth + 1);
    switch (typeof obj) {
      case "function": {
        const cached = wrapVisited(obj);
        if (cached) return cached;
        if (obj.length === 0) {
          let ret = "any";
          try {
            ret = type(obj(), `ReturnType<${access}>`, depth);
          } catch (_) {}
          return `() => ${ret}`;
        }
        const identifiers = "abcdefghijklmnopqrstuvwxyz_$".split("").map((i) => `${i}: any`);
        return `(${identifiers.slice(0, obj.length).join(", ")}) => any`;
      }
      case "object": {
        const cached = wrapVisited(obj);
        if (cached) return cached;
        if (Array.isArray(obj)) {
          if (obj.length === 0) return "Array<any>";
          const types = obj.map((e, i) => type(e, `${access}[${i}]`, depth));
          const uniqueTypes = [...new Set(types)];
          return `Array<${uniqueTypes.join(" | ")}>`;
        }
        const prototypes = [obj];
        let p = obj;
        while ((p = Object.getPrototypeOf(p)) && p !== Object.prototype) {
          prototypes.push(p);
        }
        const blacklist = ["constructor"];
        const typeString = prototypes.reduce((acc, proto) => {
          const keys = Object.getOwnPropertyNames(proto)
            .filter((k) => !blacklist.includes(k))
            .sort();
          if (keys.length === 0) return acc;
          const properties = keys
            .map((k) => {
              const keyAccess = `${access}["${k}"]`;
              try {
                return `${nextIndent}"${k}": ${type(obj[k], keyAccess, depth + 1)}`;
              } catch {
                return `${nextIndent}"${k}": any /* Error accessing property */`;
              }
            })
            .join(";\n");
          return `${acc}& {\n${properties}\n${indent}}`;
        }, "");
        return typeString || "{}";
      }

      default:
        return typeof obj;
    }
  };

  const finalType = type(rootObject, rootTypeName, 0);
  return `export type ${rootTypeName} = ${finalType};`;
};

export default generateTypes;
