/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),
  entry: './index.js',

  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    libraryTarget: 'umd',
    library: 'ReactSizebox'
  },
  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        // Query parameters are passed to node-sass
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets:['react']},
      }
    ]
  }
};
