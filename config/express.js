'use strict';

/**
 * Module dependencies
 */
var     express = require('express');
var compression = require('compression');
var  bodyParser = require('body-parser');
var     methods = require('method-override')

module.exports = function(db, config) {
    // Initialize express app
    var app = express();

    // Setting application local variables
    app.locals.title = config.app.title;
    app.locals.description = config.app.description;

    // Configure middleware
    app.use(compression()); // GZIP data
    app.use(bodyParser.urlencoded({extended: true})) // parse application/x-www-form-urlencoded
    app.use(bodyParser.json()); // parse application/json
    app.use(methods()); // parse http verbs

    app.use(logParams);
    app.use(defaultHeaders);

    return app;
};

function defaultHeaders(req, res, next) {
    res.header("Content-Type", "application/json; charset=UTF-8");
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Access-Control-Expose-Headers", "x-response-time");

    next();
}

function logParams(req, res, next) {
    NV.logger.debug(req.method + " " + req.url);

    if (req.body && Object.keys(req.body).length > 0) {
        NV.logger.debug('Body: ' + JSON.stringify(req.body));
    }

    next();
}