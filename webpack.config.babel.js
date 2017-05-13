const webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

    path.join(__dirname, '/src/components/App.js')
  ],
  output: {
    path: path.join(__dirname, `/src/public/`),
    filename: 'app.bundle.js'
  },
  externals: {
    'Config': JSON.stringify({apiUrl: 'http://localhost:8081/'})
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015', 'react','react-hmre'
          ],
          plugins: ['transform-es2015-modules-commonjs',
            'transform-es2015-destructuring',
            'transform-object-rest-spread',
            'transform-decorators-legacy']
        }
      },   {
        test: /\.scss|\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: 'public',
          use: [
            { loader:'css-loader',
              options:{
                module: true,
              }
            },
            { loader:'sass-loader',
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.css')
  ]
};

export default config;
