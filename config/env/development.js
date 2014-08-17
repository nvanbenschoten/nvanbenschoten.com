'use strict';

/**
 * Module dependencies
 */
var pkg = require('../../package.json');

module.exports = {
    db: 'mongodb://localhost/nvanbenschoten-dev',
    app: {
        name: pkg.name + ' - Development Enviroment',
        description: pkg.description,
        version: pkg.version,
    },
};
