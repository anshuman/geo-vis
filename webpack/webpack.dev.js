const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.config')({
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      cache: true,
      hash: true,
      base: '/',
    }),
  ],
});
