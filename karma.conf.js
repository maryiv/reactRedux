var webpackConfig = require('./webpack.config')('development');
webpackConfig.entry = {};

var RewirePlugin = require("rewire-webpack");
webpackConfig.plugins.push( new RewirePlugin() );

module.exports = function(config) {
  config.set({

    files: [
      './specs/*.spec.js'
    ],

    client: {
      captureConsole: true
    },

    browsers: ['PhantomJS'],

    frameworks: ['jasmine', 'es6-shim'],

    colors: true,

    preprocessors: {
      './specs/*.spec.js': [ 'webpack' ]
    },

    reporters: ['spec'],

    logLevel: config.LOG_INFO,

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    }
  });
};