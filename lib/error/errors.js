'use strict';

/**
 * Module dependencies
 */
var util = require('util');

/* =========================================================================
 *   Abstract
 * ========================================================================= */

/**
 * Base abstract error
 * Not to be used directly
 * @param {Object} the constructor of the error 
 */
var AbstractError = function () { 

    this.stack = (new Error()).stack;
}
util.inherits(AbstractError, Error);
AbstractError.prototype.name = 'Abstract Error';
AbstractError.prototype.statusCode = 500;
AbstractError.prototype.message = 'Error message.';

AbstractError.prototype.toString = function() {
    return String(this.name + ": " + this.message);
}

AbstractError.prototype.toJSON = function() {
    return {
        name: this.name,
        message: this.message,
    }
}

/* =========================================================================
 *   Generic
 * ========================================================================= */

/**
 * Generic Error
 * @param {String} the message of the error 
 */
var GenericError = function (message, statusCode) {
    GenericError.super_.call(this);

    this.name = 'Generic Error';
    this.statusCode = statusCode || 500;
    this.message = message || 'There was an error performing your request.';
}
util.inherits(GenericError, AbstractError);

/* =========================================================================
 *   HTTP
 * ========================================================================= */

 /**
  * BadRequest Error
  */
 var BadRequestError = function () {
     BadRequestError.super_.call(this);

     this.name = 'Bad Request';
     this.statusCode = 400;
     this.message = 'The request hostname is invalid.';
 }
 util.inherits(BadRequestError, AbstractError);

/**
 * Unauthorized Error
 */
var UnauthorizedError = function () {
    UnauthorizedError.super_.call(this);

    this.name = 'Unauthorized';
    this.statusCode = 401;
    this.message = 'You are not authorized.';
}
util.inherits(UnauthorizedError, AbstractError);

/**
 * Forbidden Error
 */
var ForbiddenError = function () {
    ForbiddenError.super_.call(this);

    this.name = 'Forbidden';
    this.statusCode = 403;
    this.message = 'You do not have permission to access this.';
}
util.inherits(ForbiddenError, AbstractError);

/**
 * Object Not Found Error
 */
var ObjectNotFoundError = function () {
    ObjectNotFoundError.super_.call(this);

    this.name = 'Not Found';
    this.statusCode = 404;
    this.message = 'The information you are looking for does not exist.';
}
util.inherits(ObjectNotFoundError, AbstractError);


/**
 * Expose errors
 */
module.exports = {
    // Abstract errors
    AbstractError: AbstractError,

    // Generic errors
    GenericError: GenericError,

    // HTTP errors
    BadRequestError: BadRequestError,
    UnauthorizedError: UnauthorizedError,
    ForbiddenError: ForbiddenError,
    ObjectNotFoundError: ObjectNotFoundError,
}