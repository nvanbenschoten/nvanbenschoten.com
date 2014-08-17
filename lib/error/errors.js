'use strict';

/**
 * Module dependencies
 */
var util = require('util');

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

/**
 * Generic
 * @param {String} the message of the error 
 */
var GenericError = function (message) {
  GenericError.super_.call(this);

  this.name = 'Generic Error';
  this.statusCode = 500;
  this.message = message || 'There was an error performing your request.';
}
util.inherits(GenericError, AbstractError);

/**
 * Object not found
 */
var ObjectNotFoundError = function () {
  ObjectNotFoundError.super_.call(this);

  this.name = '404 Not Found';
  this.statusCode = 404;
  this.message = 'The endpoint you are looking for does not exist.';
}
util.inherits(ObjectNotFoundError, AbstractError);


/**
 * Expose errors
 */
module.exports = {
  // HTTP errors
  // UnauthorizedError: UnauthorizedError,
  // ForbiddenError: ForbiddenError,
  ObjectNotFoundError: ObjectNotFoundError,
  // BadRequestError: BadRequestError,
  // ServiceBusyError: ServiceBusyError,

  // Generic errors
  GenericError: GenericError,

  // Abstract errors
  AbstractError: AbstractError,
}