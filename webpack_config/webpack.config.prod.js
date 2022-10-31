const common = require("./webpack.config.common.js");
const { merge } = require("webpack-merge");
const speedMeasure = require("speed-measure-webpack-plugin");

/* PROD */
/** @type {import('webpack').Configuration} */
const PROD_CONFIG = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  optimization: {
    splitChunks: {
        chunks: "all",
    },
    },
};

const production = merge(common, PROD_CONFIG);
module.exports = production;

/* SPEED TEST */
// module.exports = new speedMeasure().wrap(production);