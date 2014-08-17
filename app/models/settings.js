'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
      Schema = mongoose.Schema;

/**
 * Settings Schema
 */
var SettingsSchema = new Schema({
    // color: {
    //     red: 100,
    //     green: 100,
    //     blue: 100
    // }
});

mongoose.model('Settings', SettingsSchema);
