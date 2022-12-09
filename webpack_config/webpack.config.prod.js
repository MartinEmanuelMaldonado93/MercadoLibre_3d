const common = require("./webpack.config.common.js");
const { mergeWithRules, merge } = require("webpack-merge");
const speedMeasure = require("speed-measure-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const swc = require("@swc/core");

/** @type {import('webpack').Configuration} */
const PRODUCTION_CONFIG = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      // sass - css 
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader]
      },
    ]
  },
};

// const production = merge(common, PRODUCTION_CONFIG); // old way
const OBJECT_RULE = {
  module: {
    rules: {
      test: "match",
      use: "prepend"
    },
  }
};
const production = mergeWithRules(OBJECT_RULE)(common, PRODUCTION_CONFIG);
module.exports = production;
/* SPEED TEST */
// module.exports = new speedMeasure().wrap(production);