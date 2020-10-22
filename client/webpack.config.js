const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLwebpackplugin = require("html-webpack-plugin");

const rules = [
  {
    test: /\.(js|jsx)$/,
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
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: { rules },
  devtool: "inline-source-map",
  devServer: {
    proxy: {
      "/api/**": {
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLwebpackplugin({
      template: "./index.html",
    }),
  ],
};
