/* jshint node: true */

var webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.externals = {}; // Don't want react as an external, since the tests need it to run!

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
      //Poly fill so we can use es6 maps etc from react
+      'node_modules/babel-polyfill/dist/polyfill.js',

      // React is an external dependency of the component
      'node_modules/react/index.js',
      'node_modules/react-dom/index.js',

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
