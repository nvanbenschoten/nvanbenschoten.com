'use strict';

/**
 * Module dependencies
 */
var pkg = require('../../package.json');

module.exports = {
    app: {
        name: pkg.name,
        description: pkg.description,
        version: pkg.version,
    },
    port: process.env.PORT || 3000,
    log: {
      level: 'debug',
      location: 'logs/server.log',
      console: true
    },
};
