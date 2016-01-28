/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var FooView = Backbone.View.extend({
    template: JST['app/scripts/templates/Foo.ejs'],

    el: '#fooView',

    events: {},

    initialize: function () {
      console.log('Initialize');
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      console.log('Rendering');
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  return FooView;
});
