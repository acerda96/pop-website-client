const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "./public"),
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].template = "./custom/index.html";
      return args;
    });
  },
};
