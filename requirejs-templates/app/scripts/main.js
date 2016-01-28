/*global require*/
'use strict';

require.config({
  shim: {
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash'  }
});

require([
  'backbone',
  './models/Foo',
  './views/Foo'
], function (Backbone, FooModel, FooView) {
  Backbone.history.start();

  var fooView = new FooView({
    model: new FooModel()
  });
  fooView.render();
});
