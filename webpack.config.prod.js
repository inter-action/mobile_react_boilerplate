const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',
  plugins: [
    // extractText,
    // Split dependencies into a `vendor` file and provide a manifest
    new UglifyJSPlugin({
      parallel: true,
      uglifyOptions: {
        warnings: false,
        ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
})
