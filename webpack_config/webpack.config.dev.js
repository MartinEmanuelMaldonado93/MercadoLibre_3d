const webpack = require("webpack");
const path = require("path");
const common = require("./webpack.config.common.js");
const { mergeWithRules } = require("webpack-merge");
const speedMeasure = require("speed-measure-webpack-plugin");


/** @type {import('webpack').Configuration} */
const DEVELOPMENT_CONFIG = {
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      // sass - css 
      {
        test: /\.s?css$/i,
        use: [
          "style-loader", // must be prepend to common config
        ],
      },
    ]
  },
  /** @type {import('webpack-dev-server').Configuration} */
  devServer: {
    port: 9000,
    hot: true,// HMR
  },
  cache: true,
  devtool: "source-map", // "eval" is more performant but with some cons
  target: "web",
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   }
  // },
  stats: {
    loggingDebug: ["sass-loader"],
  },
};

const OBJECT_RULE = {
  module: {
    rules: {
      test: "match",
      use: "prepend"
    },
  },
};
const development = mergeWithRules(OBJECT_RULE)(common, DEVELOPMENT_CONFIG);
module.exports = development;

/* SPEED TEST */
// module.exports = new speedMeasure().wrap(development);