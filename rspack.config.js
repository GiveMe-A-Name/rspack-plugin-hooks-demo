const path = require("path");
const { MyPlugin } = require("./MyPlugin.js");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new MyPlugin()],
};
