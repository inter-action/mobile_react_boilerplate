const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config')


module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        // resolve url loader's order is important
        use: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader'],
      }]
  },

  plugins: [
    // extractText,
    // Split dependencies into a `vendor` file and provide a manifest
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]
})
