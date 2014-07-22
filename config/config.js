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
	require('./env/all')
);
