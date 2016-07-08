const path = require('path');
const webpack = require('webpack');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  cache: true,
  debug: true,
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve('./src/css'),
        loader: ExtractTextPlugin.extract(
          'style',
          'css!'+
          'sass?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
        )
      },
      {
        test: /\.scss$/,
        include: path.resolve('./src/js/components'),
        loader: ExtractTextPlugin.extract(
          'style', 
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!'+
          'sass?outputStyle=expanded!'+
          'sass-resources'
        )
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        exclude: /node_modules/,
      },
      {
        test: /\.woff$/,
        include: path.resolve('./src/fonts'),
        loader: 'url',
        query: {
          name: 'font/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf$|\.eot$/,
        include: path.resolve('./src/fonts'),
        loader: 'file',
        query: {
          name: 'font/[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`main${config.namingScheme}.css`, {
      allChunks: true,
      disable: config.uglify === false,
    })
  ],
  sassResources: [
    './src/css/_variables.scss',
    './src/css/_mixins.scss'
  ]
};