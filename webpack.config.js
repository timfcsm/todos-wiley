'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin'),
      path              = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  
  entry: {
    'js/main': './js/main'
  },
  
  output: {
    path      : path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename  : '[name].js'
  },
  
  module: {
    
    loaders: [{
      test   : /\.js$/,
      exclude: /(node_modules)/,
      loader : "babel?presets[]=es2015"
    }, {
      test  : /\.scss$/,
      loader: ExtractTextPlugin.extract(
          'style', // backup loader when not building .css file
          'css!sass' // loaders to preprocess CSS
      )
    }]
    
  },
  
  plugins: [
    new ExtractTextPlugin('styles/styles.css')
  ],
  
  devServer: {
    contentBase: __dirname + '/',
    hot        : true
  }
};

