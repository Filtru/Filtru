const path = require('path');

module.exports = {
  entry: './src/service_worker.js',
  output: {
    filename: 'service_worker.js',
    path: path.resolve(__dirname, 'dist'),
  },
};