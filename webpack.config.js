const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    path.join(__dirname, 'app')
  ],
  resolve: {extensions: ['', '.js', '.jsx']},
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.js$|\.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib') // eslint-disable-line max-len,prefer-template
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    historyApiFallback: true,
    hot: true,
    progress: true,
    stats: 'errors-only',
    port: 3000
  }
}
