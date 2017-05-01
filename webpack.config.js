module.exports = {
  entry: './src/client/app.js',
  output: {
    filename: 'browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-es2015-modules-commonjs','transform-es2015-destructuring',
          'transform-object-rest-spread','transform-decorators-legacy']
        }
      },
    ]
  }
};
