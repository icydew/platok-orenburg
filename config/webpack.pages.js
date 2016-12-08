var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './app/about.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'templated.html',
      template: './app/templated.ejs',
      title: 'TEMPLATED PAGE'
    })
  ]

};