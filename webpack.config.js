const path = require('path')
const url = require('url')

module.exports = {
    entry:{
      injectorScript: './src/injectorScript.js',
      service_worker: './src/service_worker.js',
    },
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    stats:{
      errorDetails: false,
    }
};