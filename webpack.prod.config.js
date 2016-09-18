const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [path.join(__dirname, 'app')],
  module: {
    loaders: [
      {
        include: path.join(__dirname, 'app'),
        loaders: ['style', 'css'],
        test: /\.css$/,
      },
      {
        include: path.join(__dirname, 'app'),
        loaders: ['babel'],
        test: /\.jsx?$/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: 'app/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')},
    }),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  resolve: {extensions: ['', '.js', '.jsx']},
}
