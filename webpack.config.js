const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

let pkg = require('./package.json')
let backlist = ['normalize.css', 'babel-runtime']

const config = {
  entry: {
    main: './src',
    vendor: Object.keys(pkg.dependencies).filter(e => backlist.indexOf(e) == -1)
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
