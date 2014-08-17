'use strict';

/**
 * Module dependencies
 */
var ErrorHandler = require('./error-handler');
var       Errors = require('./errors');

module.exports = {
    // Errors
    ObjectNotFoundError: Errors.ObjectNotFoundError,

    // Error Handler
    ErrorHandler: ErrorHandler
}