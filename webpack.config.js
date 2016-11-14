'use strict';

const webpack           = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      path              = require('path');

const NODE_ENV      = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';

const webpackConfig = {
  context: path.resolve(__dirname, './src'),
  
  entry: {
    'js/main': ['./js/main']
  },
  
  output: {
    path      : path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  watch:   isDevelopment,
  devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
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
  
 /* devServer: {
    contentBase: path.resolve(__dirname, './'),
    hot        : true
  }*/
};

if (!isDevelopment) {
  webpackConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings: false,
          unsafe:   true
        }
      }));
};

module.exports = webpackConfig;

