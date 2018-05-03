const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  entry: {
    main: './src'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].chunk.[hash].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: '10000'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        // resolve url loader's order is important
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 3 }
          },
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        // fix url-loader path not found error
        // https://github.com/shakacode/bootstrap-loader/issues/185
        context: __dirname
      }
    }),
    new HtmlWebpackPlugin({
      title: 'html title goes here',
      template: 'index.ejs'
    })
  ]
}

module.exports = config
