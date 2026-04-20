// webpack.dev.js
const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");
const ExtensionReloader = require("webpack-ext-reloader"); // or '@reorx/webpack-ext-reloader'

const devConfig = {
  target: "web",
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
  plugins: [
    new ExtensionReloader({
      // port used for the websocket server the plugin spins up (default usually fine)
      port: 9090,
      // if true, reloads open tabs after extension reload (useful for content scripts)
      reloadPage: true,
      // map to your webpack entry names:
      entries: {
        background: "background", // your background build entry name
        contentScript: ["content"], // your content script(s) entry name(s)
        extensionPage: ["react"], // popup/options page bundles (your 'react' entry)
      },
    }),
  ],
};

module.exports = merge(config, devConfig);
