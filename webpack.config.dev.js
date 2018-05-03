let webpack = require('webpack')
let merge = require('webpack-merge')

let config = require('./webpack.config')

module.exports = merge(config, {
  entry: ['react-hot-loader/patch', './src'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        // resolve url loader's order is important
        use: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
      }
    ]
  },
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
