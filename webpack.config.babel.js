const webpack = require('webpack');
var path = require('path');

let config = {
  entry: {
    app: path.join(__dirname, '/src/components/App.js'),
    vendor: path.join(__dirname, '/src/vendor.js')
  },
  output: {
    path: path.join(__dirname, `/src/public/`),
    filename: '[name].bundle.js'
  },
  externals: {
    'Config': JSON.stringify({
      apiUrl: 'http://localhost:8081'
    })
  },
  devtool: 'source-map',
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
  ]
};

export default config;
