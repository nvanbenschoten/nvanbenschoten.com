'use strict';

/**
 * Module dependencies
 */
 var   mongoose = require('mongoose');
 var     extend = require('mongoose-schema-extend');
 var BaseSchema = require('./schemas/base');

 /**
  * Experience Schema
  */
var ExperienceSchema = BaseSchema.extend({
    company     : { type: String, required: true },
    title       : { type: String, required: true },
    description : { type: String },
    link        : { type: String },
    startDate   : { type: Date, set: BaseSchema.setDate },
    endDate     : { type: Date, set: BaseSchema.setDate },
});

mongoose.model('Experience', ExperienceSchema);