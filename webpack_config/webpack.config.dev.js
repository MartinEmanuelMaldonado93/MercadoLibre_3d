const path = require("path");
const common = require("./webpack.config.common.js");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const speedMeasure = require("speed-measure-webpack-plugin");

/* Dev */

/** @type {import('webpack').Configuration} */
const DEV_CONFIG = {
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    clean: true,
  },
  /** @type {import('webpack-dev-server').Configuration} */
  devServer: {
    port: 9000,
    hot: true,
  },
  cache: true,
  devtool: "eval-source-map", // "eval" is more performant but with some cons
  target: "web",
  optimization: {
    runtimeChunk: 'single',
  },
  stats: {
    loggingDebug: ["sass-loader"],
  },
};

const development = merge(common, DEV_CONFIG);
module.exports = development;

/* SPEED TEST */
// module.exports = new speedMeasure().wrap(development);