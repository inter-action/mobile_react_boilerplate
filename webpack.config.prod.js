const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractText = new ExtractTextPlugin('[name].[chunkhash].css')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config')


module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['style', 'css']
        }),
      },
      {
        test: /\.scss$/,
        use: extractText.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'resolve-url-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }),
      }
    ]
  },

  plugins: [
    extractText,
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
