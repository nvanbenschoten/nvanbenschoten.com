'use strict';

/**
 * Module dependencies
 */
var   mongoose = require('mongoose');
var     extend = require('mongoose-schema-extend')
var BaseSchema = require('./schemas/base')

/**
 * Settings Schema
 */
var ConfigSchema = BaseSchema.extend({
    color: { type: String, required: true },
});

mongoose.model('Config', ConfigSchema);
