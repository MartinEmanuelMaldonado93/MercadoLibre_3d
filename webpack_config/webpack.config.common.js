const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Support old browsers
          "postcss-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            //exclude: /node_modules/,
            options: {
              //implementation: require("node-sass")//1.92s
              implementation: require("sass-embedded") // 2.83s
              //implementation: require("sass") // 2.56s
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader", "postcss-loader"],
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
  plugins: [new HtmlWebpackPlugin({ template: "../public/index.html" }),
  new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "gs": path.resolve(__dirname, "../src/global_sass"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@utils": path.resolve(__dirname, "../utils")
    }
  },
  performance: {
    maxAssetSize: 500_000,
    hints: false,
  },
};