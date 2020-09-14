const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("babel-polyfill");
const rules = [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: ["babel-loader", "awesome-typescript-loader"],
  },
  {
    test: /\.(jpg|png|gif|svg)$/,
    loader: ["file-loader", "url-loader"],
  },
  {
    test: /\.css$/,
    loader: ["style-loader", "css-loader"],
  },
];

module.exports = {
  target: "web",
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  entry: ["babel-polyfill", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: { rules },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    port: 5000,
  },
};
