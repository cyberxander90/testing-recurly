const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index2.js',
  output: {
    filename: 'index2.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
