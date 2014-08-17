'use strict';

/**
 * Module dependencies
 */
var  path = require('path');
var utils = require('../lib/utils')

module.exports = function(app, config) {

    // Load all models in model directory
    exports.models = utils.loadDirFiles(__dirname + '/models');

    // Load up the controllers
    exports.controllers = require('./controllers')(app, config);

}