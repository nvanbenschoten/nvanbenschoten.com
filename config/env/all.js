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
    port: process.env.PORT || 8000,
    log: {
      level: 'debug',
      location: 'logs/server.log',
      console: true
    },
    auth: {
      token: process.env.AUTH_TOKEN || "1234"
    }
};
