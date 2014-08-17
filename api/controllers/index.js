'use strict';

/**
 * Module dependencies
 */
var express = require('express');
var  utils = require('../../lib/utils');
var  Error = require('../../lib/error');

// load all the controllers in the directory
var controllers = utils.loadDirFiles(__dirname);

// Create router
var router = express.Router();

/* =========================================================================
 *
 *   Global
 *
 * ========================================================================= */

router.all('/', function(req, res) {
    res.send(NV.config.app); 
});

/* =========================================================================
 *
 *   Config Routes
 *
 * ========================================================================= */

router.route('/config')
    // Retrieve configs
    .get(controllers.config.read)
    // Create configs
    .post(controllers.config.create)
    // Update configs
    .put(controllers.config.update);

/* =========================================================================
 *
 *   Not Found
 *
 * ========================================================================= */

// assume 404 since no middleware responded
router.use(function(req, res, next) {
    return next(new Error.ObjectNotFoundError());
});

/**
 * Expose routes
 */
module.exports = router;
