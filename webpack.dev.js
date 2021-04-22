var webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    host: "localhost",
    port: 3000,
    compress: true,
    publicPath: "/",
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public/dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".scss"],
    alias: {},
  },
};
