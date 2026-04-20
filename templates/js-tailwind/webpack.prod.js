const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(config, {
  target: "web",
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // keep existing default minimizers (like Terser)
      new CssMinimizerPlugin(),
    ],
  },
});
