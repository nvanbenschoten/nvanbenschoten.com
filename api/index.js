'use strict';

/**
 * Module dependencies
 */
var utils = require('../lib/utils')

module.exports = {
    // Load all models in model directory
    models: utils.loadDirFiles(__dirname + '/models'),

    // Load up the controllers
    controllers: require('./controllers'),
}