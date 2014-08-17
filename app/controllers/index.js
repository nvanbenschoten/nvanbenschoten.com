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

     app.get('/config', controllers.config.read);

}