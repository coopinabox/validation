"use strict";

// add validation to bookshelf

var db = require('ciab-bookshelf');
var validation = require('backbone-validation');
var _ = require('underscore');
_.extend(db.Model.prototype, validation.mixin);
