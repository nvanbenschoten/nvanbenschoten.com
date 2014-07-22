'use strict';

/**
 * Module dependencies.
 */
var _ = require('underscore'),
 glob = require('glob');

/**
 * Load app configurations
 */
module.exports = _.extend(
	require('./env/all'),
	//require('./env/' + process.env.NODE_ENV) || {}
	require('./env/development') || {}
);
