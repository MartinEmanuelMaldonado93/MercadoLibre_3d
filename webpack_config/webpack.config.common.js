const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    meli_app: "../pages/index.tsx"
  },
  output: {
    path: path.join(__dirname, "../build"),
    filename: "[name].[contenthash:8].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
    publicPath: "/"
  },
  context: path.resolve(__dirname),
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        use: "swc-loader",
      },
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: [
          // "style-loader", // -- --- --- PROD
          // MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // future features of css today
          // 'postcss-preset-env',
          // Support old browsers
          "postcss-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            //exclude: /node_modules/,
            options: {
              //implementation: require("node-sass")//1.92s
              // implementation: require("sass-embedded") // 2.83s
              implementation: require("sass") // 2.56s
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/[hash][ext]'}
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "../public/index.html" })],
  resolve: {
    extensions: [".mjs", ".tsx", ".ts", ".js", ".json"],
    alias: {
      "@gs": path.resolve(__dirname, "../src/global_sass"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@utils": path.resolve(__dirname, "../utils"),
      "@assets": path.resolve(__dirname, "../public"),
    }
  },
  performance: {
    maxAssetSize: 500_000,
    hints: false,
  },
};