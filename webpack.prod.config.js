const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'app')],
  resolve: {extensions: ['', '.js', '.jsx']},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true,
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {screw_ie8: true, keep_fnames: true, warnings: false},
      mangle: {screw_ie8: true, keep_fnames: true}
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
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
        loaders: ['babel-loader'],
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
  }
}
