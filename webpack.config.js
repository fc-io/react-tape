const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    historyApiFallback: true,
    hot: true,
    port: 3333,
    stats: 'errors-only',
  },
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app'),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'app'),
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dev'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {extensions: ['.js', '.jsx']},
}
