const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    app: "../src/index.tsx"
  },
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "/build"),
    filename: "main.js",
    clean: true,
    assetModuleFilename: "[name][ext]",
    publicPath: "../public",
  },
  module: {
    rules: [
      // TS JS
      {
        test: /\.(js|tsx?)$/,
        use: "swc-loader",
        // options: {
        //   async: true,
        // },
        exclude: "/node_modules",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          { loader: "resolve-url-loader" },
          {
            loader: "sass-loader",
            options: {
              implementation: require.resolve("sass"),
              sourceMap: true, // important 
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/i,
        type: "asset/resource",
        generator: {
          outputPath: "./assets",
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "../src/index.html" })], 
  resolve: {
    extensions: [".tsx",".ts",".js", ".json"],
  },
  performance: {
    maxAssetSize: 500_000,
    hints: false,
  },
};