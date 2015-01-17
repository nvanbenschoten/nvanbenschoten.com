'use strict';

/**
 * Module dependencies
 */
var   mongoose = require('mongoose');
var     extend = require('mongoose-schema-extend')
var BaseSchema = require('./schemas/base')

/**
 * Config Schema
 */
var ConfigSchema = BaseSchema.extend({
    color : { type: String, required: true },
    theme : { type: String },
});

mongoose.model('Config', ConfigSchema);
