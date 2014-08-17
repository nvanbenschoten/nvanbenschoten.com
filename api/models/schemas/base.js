'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose');
var   Schema = mongoose.Schema;
var    utils = require("../../../lib/utils")

/* =========================================================================
 *   
 *   Schema
 *   
 * ========================================================================= */

var BaseSchema = new Schema({
    _id      : { type: String, default: utils.objectId, index: { unique: true } },
    modified : { type: Date, default: Date.now, set: setDate },
    created  : { type: Date, default: Date.now, set: setDate, index: true }
});

/* =========================================================================
 *   
 *   Private functions
 *   
 * ========================================================================= */

function setDate(date) {
    var saveDate = date;
    if (typeof date !== 'object') saveDate = new Date(date);
    return saveDate;
}

module.exports = BaseSchema;