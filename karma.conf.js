/* jshint node: true */

var webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({
    basePath: '.',

    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],

    plugins: [
      "karma-jasmine",
      "karma-phantomjs-launcher",
      "karma-sourcemap-loader",
      "karma-webpack"
    ],

    files: [
      // shim to workaroud PhantomJS 1.x lack of `bind` support
      // see: https://github.com/ariya/phantomjs/issues/10522
      'node_modules/es5-shim/es5-shim.js',

      // React is an external dependency of the component
      'node_modules/react/dist/react.js',
      'node_modules/react-dom/dist/react-dom.js',

      'spec/spec-helper.js',
      'spec/**/*.spec.*',
      { pattern: 'lib/**/*', watched: true, included: false }
    ],

    preprocessors: {
      // add webpack as preprocessor
      'spec/**/*.spec.*': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    singleRun: true
  });
};
