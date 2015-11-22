/*global require*/
'use strict';

require.config({
  shim: {
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash'
  }
});

require([
  'backbone',
  'foo/bar'
], function (Backbone) {
  Backbone.history.start();
});
