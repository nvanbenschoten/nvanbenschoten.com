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
     *   Config Routes
     *
     * ========================================================================= */

    // Retrieve configs
    app.get('/config', controllers.config.read);

    // Create configs
    app.post('/config', controllers.config.create);

    // Update configs
    app.put('/config', controllers.config.update);

}