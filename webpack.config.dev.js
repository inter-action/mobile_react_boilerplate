let webpack = require('webpack');
let merge = require('webpack-merge')

let config = require('./webpack.config');


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
        use: ['style-loader', 'css-loader', 'postcss-loader','resolve-url-loader', 'sass-loader'],
      }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './build',

    historyApiFallback: true,
    hot: true,
    inline: true,

    stats: 'errors-only',

    host: process.env.HOST,
    port: process.env.PORT,
  }
})
