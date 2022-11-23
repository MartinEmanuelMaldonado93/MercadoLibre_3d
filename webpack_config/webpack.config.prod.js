const common = require("./webpack.config.common.js");
const { mergeWithRules } = require("webpack-merge");
const speedMeasure = require("speed-measure-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const swc = require("@swc/core");

/** @type {import('webpack').Configuration} */
const PRODUCTION_CONFIG = {
  mode: "production",
  optimization: {
    // minimize: true,
    // minimizer:[swc.minify],
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      // sass - css 
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader]
      },
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
};

// const production = merge(common, PROD_CONFIG); // old way
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