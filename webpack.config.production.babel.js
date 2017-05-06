const webpack = require('webpack');
var nodeExternals =  require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Bump = require('bump-webpack-plugin');

var fs =  require('fs');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

let clientConfig = {
  entry: {
    app: path.join(__dirname, '/src/components/App.js'),
    vendor : path.join(__dirname, '/src/vendor.js')
  },
  output: {
    path: path.join(__dirname, `/dist/public/`),
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
  externals: {
    'Config': JSON.stringify({
      apiUrl: 'http://localhost/'
    })
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-es2015-modules-commonjs',
            'transform-es2015-destructuring',
            'transform-object-rest-spread',
            'transform-decorators-legacy'
          ]
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname),
      exclude: ['.git']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/public/*.css', flatten :true},
      { from: 'package.json', to: '../'}

    ]),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.template.ejs',
      inject: 'body',
    })
  ]
};

let serverConfig = {
  entry: {
    server: path.join(__dirname, '/src/server.js'),
    routes: path.join(__dirname, '/src/routes.js')
  },
  target: 'node',
  output:{
    path: path.join(__dirname,'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: path.resolve(__dirname, './dist/public')
  },
  node: {
    __dirname: true
  },
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-es2015-modules-commonjs',
            'transform-es2015-destructuring',
            'transform-object-rest-spread',
            'transform-decorators-legacy'
          ]
        }
      },
    ]
  },
  plugins: [
    new Bump([
      'package.json'
    ])
  ]
}
module.exports = [clientConfig, serverConfig];
