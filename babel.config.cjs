module.exports = {
  presets: ["@babel/preset-react"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        root: ["./src"],
        alias: {
          assets: "./src/assets",
          components: "./src/components",
          config: "./src/config",
          containers: "./src/containers",
          i18n: "./src/i18n",
          screens: "./src/screens",
          services: "./src/services",
          styles: "./src/styles",
          interfaces: "./src/interfaces",
          utils: "./src/utils",
          redux: "./src/redux",
          setupTests: ".src/setupTests"
        }
      }
    ]
  ]
};
