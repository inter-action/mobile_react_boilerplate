const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  plugins: [
    // extractText,
    // Split dependencies into a `vendor` file and provide a manifest
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
})
