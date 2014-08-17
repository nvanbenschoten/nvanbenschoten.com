'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var    utils = require('./lib/utils')

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Global Variables
global.NV = {};
global.NV.ENV = process.env.NODE_ENV || 'development';

// Get config
global.NV.config = require('./config/config');

// Create logger
global.NV.logger = utils.createLogger(NV.config.log);

// Display app info
NV.logger.info(NV.config.app.name);
NV.logger.info(NV.config.db);

// Bootstrap db connection
var db = mongoose.connect(NV.config.db);

// Init the express application
var app = require('./config/express')(db, NV.config);

// Import API
var api = require('./api');

// Add application controllers
app.use(api.controllers);

// Add error handler to application
app.use(require('./lib/error').errorHandler);

// Start the app by listening on port
var port = NV.config.port;
app.listen(port, function() {
  NV.logger.info("listening on port " + port);
});

// Expose app
exports = module.exports = app;