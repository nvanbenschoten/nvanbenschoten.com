'use strict';

/**
 * Module dependencies
 */
var express = require('express'),
       path = path('path');

module.exports = function() {
    // Initialize express app
    var app = express();

    // Globbing model files
    config.getGlobbedFiles('./app/models/**/*.js').forEach(function(modelPath) {
        require(path.resolve(modelPath));
    });

    return app;
};
