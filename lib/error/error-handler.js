'use strict';

/**
 * Module dependencies
 */
var Errors = require('./errors');

module.exports = function(err, req, res, next) {
    if (!(err instanceof Errors.AbstractError)) {
        var err = new Errors.GenericError(err.message, err.statusCode);
    }
 
    NV.logger.error(err.toString());
    return res.status(err.statusCode).json(err.toJSON());
}