var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/scripts/index.js',

  mode: 'production',

  output: {
    filename: 'assets/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true
    })
  ]
};
