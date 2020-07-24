const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    './client/public/app.js': path.resolve(__dirname, 'client', 'src', 'index.jsx'),
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name]',
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/i,
      threshold: 5000,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
};
