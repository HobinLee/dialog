const { merge } = require('webpack-merge');

const common = require('./webpack.config.js');

const PORT = process.env.PORT || 8000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: PORT,
    proxy: {},
  },
});
