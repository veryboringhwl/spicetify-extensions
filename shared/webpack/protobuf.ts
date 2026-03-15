import { metadataSchema } from "./schema.ts";

function warn(reason: string, ctx: Record<string, any>) {
  console.warn(reason, ctx);
}

export class ProtobufReader {
  private view: DataView;
  private bytes: Uint8Array;
  public offset: number = 0;

  constructor(data: Record<string | number, number> | ArrayLike<number> | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.bytes = data;
    } else if (Array.isArray(data) || "length" in data) {
      this.bytes = new Uint8Array(Array.from(data as ArrayLike<number>));
    } else {
      this.bytes = new Uint8Array(Object.values(data));
    }
    this.view = new DataView(this.bytes.buffer, this.bytes.byteOffset, this.bytes.byteLength);
  }

  get isExhausted(): boolean {
    return this.offset >= this.bytes.length;
  }

  readVarint(): bigint | null {
    if (this.isExhausted) return null;
    let result = 0n;
    let shift = 0n;
    while (!this.isExhausted) {
      const byte = BigInt(this.bytes[this.offset++]);
      result |= (byte & 0x7fn) << shift;
      if (!(byte & 0x80n)) return result;
      shift += 7n;
      if (shift > 70n) {
        warn("Varint too long", {
          offset: this.offset,
          shift: shift.toString(),
        });
        break;
      }
    }
    return null;
  }

  readZigZagVarint(): bigint {
    const n = this.readVarint();
    if (n === null) {
      warn("Invalid zigzag varint", { offset: this.offset });
      return 0n;
    }
    return (n >> 1n) ^ -(n & 1n);
  }

  readBytes(length: number): Uint8Array {
    const actualLength = Math.min(length, this.bytes.length - this.offset);
    const result = this.bytes.slice(this.offset, this.offset + actualLength);
    this.offset += actualLength;
    return result;
  }

  skip(wireType: number): void {
    switch (wireType) {
      case 0:
        this.readVarint();
        break;
      case 1:
        this.offset += 8;
        break;
      case 2: {
        const len = this.readVarint();
        if (len !== null) this.offset += Number(len);
        break;
      }
      case 3:
        while (true) {
          const tag = this.readVarint();
          if (tag === null || (Number(tag) & 7) === 4) break;
          this.skip(Number(tag) & 7);
        }
        break;
      case 5:
        this.offset += 4;
        break;
      default:
        warn("Unknown wire type", {
          wireType,
          offset: this.offset,
        });
    }
  }

  decode(schemaName: string): any {
    const schema = metadataSchema[schemaName];
    if (!schema) {
      warn("Schema not found", { schemaName });
      return {};
    }

    const result: Record<string, any> = {};

    while (!this.isExhausted) {
      const tag = this.readVarint();
      if (tag === null || tag === 0n) break;

      const fieldNumber = Number(tag >> 3n);
      const wireType = Number(tag & 7n);
      const field = schema.fields[fieldNumber];

      if (!field) {
        if (wireType === 2) {
          const len = Number(this.readVarint() ?? 0n);
          const raw = this.readBytes(len);

          warn("Unknown field", {
            schema: schemaName,
            fieldNumber,
            wireType,
            length: len,
            hex: Array.from(raw)
              .map((b) => b.toString(16).padStart(2, "0"))
              .join(" "),
            ascii: new TextDecoder().decode(raw).replace(/[^\x20-\x7E]/g, "."),
          });
        } else {
          warn("Unknown field", {
            schema: schemaName,
            fieldNumber,
            wireType,
          });

          this.skip(wireType);
        }

        continue;
      }

      let value: any;
      try {
        switch (field.type) {
          case "string": {
            const len = Number(this.readVarint() ?? 0n);
            value = new TextDecoder().decode(this.readBytes(len));
            break;
          }
          case "bytes": {
            const len = Number(this.readVarint() ?? 0n);
            value = Array.from(
              this.readBytes(len),
              (b) => (b < 16 ? "0" : "") + b.toString(16),
            ).join("");
            break;
          }
          case "bool":
            value = (this.readVarint() ?? 0n) !== 0n;
            break;
          case "int32":
          case "uint32":
            value = Number(this.readVarint() ?? 0n);
            break;
          case "int64":
          case "uint64": {
            const v = this.readVarint() ?? 0n;
            value = v <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(v) : v.toString();
            break;
          }
          case "sint32":
            value = Number(this.readZigZagVarint());
            break;
          case "sint64": {
            const v = this.readZigZagVarint();
            value =
              v <= BigInt(Number.MAX_SAFE_INTEGER) && v >= BigInt(Number.MIN_SAFE_INTEGER)
                ? Number(v)
                : v.toString();
            break;
          }
          case "fixed32":
            value = this.view.getUint32(this.offset, true);
            this.offset += 4;
            break;
          case "fixed64":
            value = this.view.getBigUint64(this.offset, true).toString();
            this.offset += 8;
            break;
          case "float":
            value = this.view.getFloat32(this.offset, true);
            this.offset += 4;
            break;
          case "double":
            value = this.view.getFloat64(this.offset, true);
            this.offset += 8;
            break;
          case "enum": {
            const enumVal = Number(this.readVarint() ?? 0n);
            value = (field.enumType && schema.enums?.[field.enumType]?.[enumVal]) ?? enumVal;
            break;
          }
          default: {
            const len = Number(this.readVarint() ?? 0n);
            value = new ProtobufReader(this.readBytes(len)).decode(field.type);
            break;
          }
        }
      } catch (err) {
        warn("Decode error", {
          schema: schemaName,
          field: field.name,
          fieldNumber,
          wireType,
          offset: this.offset,
          error: err,
        });

        continue;
      }

      if (value === undefined) continue;

      if (field.repeated) {
        if (!result[field.name]) result[field.name] = [];
        result[field.name].push(value);
      } else {
        result[field.name] = value;
      }
    }

    return result;
  }
}

export function decodeProtobuf(data: any, schemaName: string): any[] {
  const result = new ProtobufReader(data).decode(schemaName);
  return result;
}
