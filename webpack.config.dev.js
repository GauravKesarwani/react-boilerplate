const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
    devServer: {
      port: 9000
    },
    devtool: 'source-map',
    mode: 'development'
  })