let webpack = require('webpack')
let merge = require('webpack-merge')

let config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src'],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devServer: {
    contentBase: './build',

    historyApiFallback: true,
    hot: true,
    inline: true,
    overlay: true,

    stats: 'errors-only',

    disableHostCheck: true,
    host: process.env.HOST,
    port: process.env.PORT
  }
})
