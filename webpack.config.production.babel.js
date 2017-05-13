const webpack = require('webpack');
var nodeExternals =  require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Bump = require('bump-webpack-plugin');
var pkg =  require('./package.json');

var fs =  require('fs');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

let clientConfig = {
  entry: {
    app: path.join(__dirname, '/src/components/App.js'),
    vendor : ["lodash.uniq","lodash.compact","lodash.find","isomorphic-fetch",
      "react","react-dom","react-redux","redux","redux-logger",
      "redux-promise-middleware","redux-thunk"
    ]
  },
  output: {
    path: path.join(__dirname, `/dist/public/`),
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
  externals: {
    'Config': JSON.stringify({
      apiUrl: pkg.remote.url
    })
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
      {
        test: /\.scss|\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'isomorphic-style-loader',
          publicPath: 'public',
          use: [
            { loader:'css-loader',options:{module:true,minimize:true,sourceMap:true}},
            { loader:'sass-loader', options:{minimize:true,sourceMap:true}}
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname)
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
      { from: 'package.json', to: '../'}
    ]),
    new ExtractTextPlugin('style.css'),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.template.ejs',
      inject: true,
    })

  ]
};

let serverConfig = {
  entry: {
    server: ['babel-polyfill', path.join(__dirname, '/src/server.js')],
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
