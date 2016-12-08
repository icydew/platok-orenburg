var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var commonConfig = require('./webpack.common');

const ENV = process.env.BUILD_DEV = process.env.NODE_ENV = process.env.ENV = 'dev';

module.exports = webpackMerge(commonConfig, {

  output: {
    path: './dist',
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    compress: true,
    contentBase: './app/assets',
    historyApiFallback: true,
    stats: 'minimal'
  }

});