const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

var pkg = require('./package.json')


const config = {
  entry: {
    main: './src',
    vender: Object.keys(pkg.dependencies).filter(e=> e !== 'babel-runtime'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
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
    ],

  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        // fix url-loader path not found error
        // https://github.com/shakacode/bootstrap-loader/issues/185
        context: __dirname,
      }
    }),
    new HtmlWebpackPlugin({
      title: 'html title goes here',
      template: 'index.ejs'
    })
  ]
}


module.exports = config
