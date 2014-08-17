'use strict';

/**
 * Module dependencies
 */
var     express = require('express');
var compression = require('compression');
var        cors = require('cors');
var  bodyParser = require('body-parser');
var     favicon = require('serve-favicon');
var     methods = require('method-override');
var serveStatic = require('serve-static');

module.exports = function(db, config) {
    // Initialize express app
    var app = express();

    // Setting application local variables
    app.locals.name = config.app.name;
    app.locals.description = config.app.description;

    // Configure middleware
    // app.use(favicon());
    app.use(logParams); // Log request url and params
    app.use(compression()); // GZIP data
    app.use(cors()); // Enable cross-origin resource sharing
    app.use(bodyParser.urlencoded({extended: true})) // Parse application/x-www-form-urlencoded
    app.use(bodyParser.json()); // Parse application/json
    app.use(methods()); // Adapt http put and delete verbs
    app.use(defaultHeaders); // Add on default headers

    return app;
};

function logParams(req, res, next) {
    NV.logger.debug(req.method + " " + req.url);

    if (req.body && Object.keys(req.body).length > 0) {
        NV.logger.debug('Body: ' + JSON.stringify(req.body));
    }

    next();
}

function defaultHeaders(req, res, next) {
    res.header("Content-Type", "application/json; charset=UTF-8");
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Access-Control-Expose-Headers", "x-response-time");

    next();
}
