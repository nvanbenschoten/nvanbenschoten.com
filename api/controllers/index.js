'use strict';

/**
 * Module dependencies
 */
var express = require('express');
var    auth = require('../../config/authorization');
var   utils = require('../../lib/utils');
var  Errors = require('../../lib/error');

// load all the controllers in the directory
var controllers = utils.loadDirFiles(__dirname);

// Create router
var router = express.Router();

/* =========================================================================
 *   Global
 * ========================================================================= */

router.all('/', function(req, res) {
    res.send(NV.config.app); 
});

/* =========================================================================
 *   Config Routes
 * ========================================================================= */

router.route('/config')
    // Retrieve configs
    .get(controllers.config.read)
    // Create configs
    .post(auth.requiresAuth, controllers.config.create)
    // Update configs
    .put(auth.requiresAuth, controllers.config.update);

/* =========================================================================
 *   Experience Routes
 * ========================================================================= */

router.route('/experience')
    // Retrieve experiences
    .get(controllers.experience.list)
    // Create experience
    .post(auth.requiresAuth, controllers.experience.create);

router.route('/experience/:id')
    // Retrieve experience
    .get(controllers.experience.read)
    // Update experience
    .put(auth.requiresAuth, controllers.experience.update)
    // Delete experience
    .delete(auth.requiresAuth, controllers.experience.delete)

/* =========================================================================
 *   Fridge Routes
 * ========================================================================= */

 router.route('/fridge/config')
    // Retrieve fridge config
    .get(auth.requiresAuth, controllers.fridge.config.read)
    // Create fridge config
    .post(auth.requiresAuth, controllers.fridge.config.create)
    // Update fridge config
    .put(auth.requiresAuth, controllers.fridge.config.update);

router.route('/fridge/unlock')
    // Attempt to unlock fridge
    .post(auth.requiresAuth, controllers.fridge.unlock)

/* =========================================================================
 *   Not Found
 * ========================================================================= */

// assume 404 since no middleware responded
router.use(function(req, res, next) {
    return next(new Errors.ObjectNotFoundError());
});

/**
 * Expose routes
 */
module.exports = router;
