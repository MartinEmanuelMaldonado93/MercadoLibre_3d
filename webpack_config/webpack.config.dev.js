const path = require("path");
const common = require("./webpack.config.common.js");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

/* DEV */
/** @type {import('webpack').Configuration} */
const DEV_CONFIG = {
  mode: "development",
  stats: {
    loggingDebug: ["sass-loader"],
  },
  /** @type {import('webpack-dev-server').Configuration} */
  devServer: {
    port: 9000,
    allowedHosts: path.join(__dirname, "./dist"),
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    // open: false, // open tab when run server
    hot: true,
  },
  cache: true,
  devtool: "eval-source-map", // "eval" more performant but with some cons
};

const development = merge(common, DEV_CONFIG);
module.exports = development;

/* SPEED TEST */
// module.exports = new speedMeasure().wrap(development);