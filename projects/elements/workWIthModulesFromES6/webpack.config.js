const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  watch: true,
  devtool: 'source-map',
  module: {}
};