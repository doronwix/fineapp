const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLwebpackplugin = require("html-webpack-plugin");

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"],
  },
];

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: { rules },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLwebpackplugin({
      template: "./index.html",
    }),
  ],
};
