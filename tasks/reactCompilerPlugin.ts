import babel from "esbuild-plugin-babel";

export const reactCompilerPlugin = () => {
  return babel({
    config: {
      presets: ["@babel/preset-typescript", ["@babel/preset-react", { runtime: "automatic" }]],
      plugins: [
        [
          "babel-plugin-react-compiler",
          {
            target: "18",
          },
        ],
      ],
    },
  });
};
