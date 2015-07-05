'use strict';

/**
 * Module dependencies
 */
var   mongoose = require('mongoose');
var     extend = require('mongoose-schema-extend');
var BaseSchema = require('./schemas/base');

/**
 * Fridge Schema
 */
var FridgeSchema = BaseSchema.extend({
    ip : { type: String, required: true },
});

mongoose.model('Fridge', FridgeSchema);
