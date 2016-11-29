const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './webpack/entry.js',
  output: {
    path: 'src/assets/javascripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   })
  // ],
  resolve: {
    root: path.resolve('./node_modules'),
    alias: {
      'TweenMax': path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js')
    }
  }
};