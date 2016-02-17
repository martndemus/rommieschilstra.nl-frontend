/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var env = EmberApp.env();
var isProductionBuild = env === 'production';

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      enabled: isProductionBuild,
      prepend: 'https://' + process.env['AWS_BUCKET'] + '.s3.amazonaws.com/'
    },

    minifyCSS:   { enabled: isProductionBuild },
    minifyJS:    { enabled: isProductionBuild },
    sourcemaps:  { enabled: !isProductionBuild },

    tests:   !isProductionBuild,
    hinting: !isProductionBuild
  });


  return app.toTree();
};
