const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    meli: "../pages/index.tsx"
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
    publicPath: "",
  },
  context: path.resolve(__dirname),
  module: {
    rules: [
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
  plugins: [new HtmlWebpackPlugin({ template: "../public/index.html" })],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "gs": path.resolve(__dirname, "../src/global_sass")//relative where they're used
    }
  },
  performance: {
    maxAssetSize: 500_000,
    hints: false,
  },
};