'use strict';

/**
 * Module dependencies
 */
var utils = require('../../lib/utils')

// load all the controllers in the directory
var controllers = utils.loadDirFiles(__dirname);

/**
 * Expose routes
 */
module.exports = function(app, config) {

    /* =========================================================================
     *
     *   Global
     *
     * ========================================================================= */

    app.get('/', function(req, res) { res.send(config.app); });

    /* =========================================================================
     *
     *   Config Routes
     *
     * ========================================================================= */

    // Retrieve configs
    app.get('/config', controllers.config.read);

    // Create configs
    app.post('/config', controllers.config.create);

    // Update configs
    app.put('/config', controllers.config.update);

    /* =========================================================================
     *
     *   Not Found
     *
     * ========================================================================= */

    // assume 404 since no middleware responded
    app.use(function(req, res, next) {
        res.status(404).json({ message: "Object not found" });
    });

}