/*global define*/

define([
  'underscore',
  'backbone',
  'models/Foo'
], function (_, Backbone, FooModel) {
  'use strict';

  var FooCollection = Backbone.Collection.extend({
    model: FooModel
  });

  return FooCollection;
});
