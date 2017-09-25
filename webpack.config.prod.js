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
        use: extractText.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
          fallback: 'style-loader',
        })
      },
      {
        test: /\.scss$/,
        use: extractText.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 3 },
            },
            'postcss-loader',
            'resolve-url-loader',
            'sass-loader'
          ],
          fallback: 'style-loader',
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
