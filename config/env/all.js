'use strict';

/**
 * Module dependencies
 */
var pkg = require('../../package.json');

var fridge = {};
try {
  fridge = require('../../../fridge.json');
} catch(e) { }

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
    fridge: fridge,
};
