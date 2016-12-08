var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var pagesConfig = require('./webpack.pages');

module.exports = webpackMerge(pagesConfig, {

  entry: {
    'vendor': './app/vendor.js',
    'app': './app/main.js'
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'resolve-url',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.pcss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  postcss: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      browsers: ['ie >= 8', 'last 2 versions']
    })
  ]

});