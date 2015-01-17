'use strict';

/**
 * Module dependencies
 */
 var Errors = require('../lib/error');

module.exports.requiresAuth = function(req, res, next) {
    var token = getAuth(req);
    var valid = (token === NV.config.auth.token);

    if (!valid) {
        return next(new Errors.UnauthorizedError())
    }
    next();
}

function getAuth(req) {
    var token = null;
    if (typeof req !== 'String') {
        token = (req.body && req.body.auth) || 
                (req.query && req.query.auth) || 
                req.headers['x-access-token'];
    }
    return token;
}