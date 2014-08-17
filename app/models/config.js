'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose');
var   Schema = mongoose.Schema;

/**
 * Settings Schema
 */
var ConfigSchema = new Schema({
    // color: {
    //     red: 100,
    //     green: 100,
    //     blue: 100
    // }
});

mongoose.model('Config', ConfigSchema);
