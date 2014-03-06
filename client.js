"use strict";

// add validation to backbone

var _ = require('underscore');
var bb = require('backbonew');
var validation = require('backbone-validation');
_.extend(bb.Model.prototype, validation.mixin);

_.extend(validation.callbacks, {
  valid: function(view, attr, selector) {
    view.state.errors = {};
  },
  invalid: function(view, attr, error, selector) {
    view.state.errors = view.state.errors || {};
    view.state.errors[attr] = error;
  }
});
