'use strict';

/**
 * Module dependencies
 */
var ErrorHandler = require('./error-handler');
var       Errors = require('./errors');

module.exports = {
    // Errors
    BadRequestError: Errors.BadRequestError,
    UnauthorizedError: Errors.UnauthorizedError,
    ForbiddenError: Errors.ForbiddenError,
    ObjectNotFoundError: Errors.ObjectNotFoundError,

    // Error Handler
    ErrorHandler: ErrorHandler,
}