type MergedObject = Record<string, any>;

interface PropsInput extends MergedObject {
  item?: MergedObject;
  reference?: MergedObject;
}

function parseProps(props: PropsInput | null | undefined): MergedObject {
  if (!props) return {};

  const parsed: MergedObject = {};

  const mergeProps = (source: MergedObject | null | undefined, target: MergedObject) => {
    if (!source || typeof source !== "object") return;
    for (const key in source) {
      if (Object.hasOwn(source, key)) {
        if (target[key] === undefined) {
          target[key] = source[key];
        }
      }
    }
  };

  mergeProps(props, parsed);
  mergeProps(props.item, parsed);
  mergeProps(props.reference, parsed);

  return parsed;
}

export default parseProps;
