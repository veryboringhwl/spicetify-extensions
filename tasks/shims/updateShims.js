const generateShim = (globalObjectName, spicetifyObject) => {
  const exportList = Object.keys(spicetifyObject)
    .map((key) => `  ${key},`)
    .join("\n");

  const fileContent = `export const {\n${exportList}\n} = ${globalObjectName};\n\nexport default ${globalObjectName};\n`;

  console.log(fileContent);
};

generateShim("Spicetify.React", Spicetify.React);
generateShim("Spicetify.ReactDOM", Spicetify.ReactDOM);
generateShim("Spicetify.ReactJSX", Spicetify.ReactJSX);
