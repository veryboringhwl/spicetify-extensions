function parseProps(props) {
  if (!props) return {};

  const parsed = {};

  const mergeProps = (source, target) => {
    if (!source || typeof source !== "object") return;
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
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
