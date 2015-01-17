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
    title    : { type: String, required: true },
    subtitle : { type: String, required: true },
    about    : { type: String, required: true },
});

mongoose.model('Config', ConfigSchema);
