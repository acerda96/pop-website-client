const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  outputDir: path.resolve(__dirname, "./public"),
  configureWebpack: {
    plugins: [
      new HTMLWebpackPlugin({
        showErrors: true,
        cache: true,
        template: path.resolve(__dirname, "src/index.html"),
      }),
    ],
  },
};
