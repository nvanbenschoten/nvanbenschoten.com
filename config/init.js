'use strict';

/**
 * Module dependencies.
 */
var glob = require('glob');

/**
 * Module init function.
 */
module.exports = function() {
    /**
     * Before we begin, lets set the enviroment variable
     * We'll look for a valid NODE_ENV variable and if one cannot be found, load the development NODE_ENV
     */
    glob('./config/env/' + process.env.NODE_ENV + '.js', {
        sync: true
    }, function(err, enviromentFiles) {
        console.log();
        if (!enviromentFiles.length) {
            if (process.env.NODE_ENV) {
                console.log('\x1b[31m', 'No configuration file found for "' + process.env.NODE_ENV + '" environment using development instead');    
            } else {
                console.log('\x1b[31m', 'NODE_ENV is not defined! Using default development environment');
            }

            process.env.NODE_ENV = 'development';
        } else {
            console.log('\x1b[7m', 'Application loaded using the "' + process.env.NODE_ENV + '" environment configuration');
        }
        console.log('\x1b[0m');
    });

    /**
     * Add in server node extensions.
     */
};
