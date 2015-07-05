'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose');
var   Config = mongoose.model('Config');

module.exports.read = function(req, res, next) {
    Config
        .findOne({})
        .exec(function(err, config) {
            if (err) return next(err);
            if (!config) return next(new Error('App configuration has not yet been set.'));

            res.status(200).send(config);
        });
}

module.exports.create = function(req, res, next) {
    Config
        .findOne({})
        .exec(function(err, config) {
            if (err) return next(err);
            if (config) return next(new Error('Only one configuration may exist.'));
                
            Config.create(req.body, 
                function(err, newConfig) {
                    if (err) return next(err);

                    return res.status(201).send(newConfig);
                });
        });
}

module.exports.update = function(req, res, next) {
    Config.update({}, req.body, {}, function(err, numUpdated) {
        if (err) return next(err);
        if (!numUpdated) return next(new Error('App configuration was not updated.'));

        module.exports.read(req, res, next);
    });
}
