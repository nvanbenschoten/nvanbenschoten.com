'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose');
var   Fridge = mongoose.model('Fridge');
var  request = require('request');
var debounce = require('debounce');

var read = function(req, res, next) {
    Fridge
        .findOne({})
        .exec(function(err, fridgeConfig) {
            if (err) return next(err);
            if (!fridgeConfig) return next(new Error('Fridge configuration has not yet been set.'));

            res.status(200).send(fridgeConfig);
        });
}

var create = function(req, res, next) {
    Fridge
        .findOne({})
        .exec(function(err, fridgeConfig) {
            if (err) return next(err);
            if (fridgeConfig) return next(new Error('Only one fridge configuration may exist.'));
                
            Fridge.create(req.body, 
                function(err, newFridgeConfig) {
                    if (err) return next(err);

                    return res.status(201).send(newFridgeConfig);
                });
        });
}

var update = function(req, res, next) {
    Fridge.update({}, req.body, {}, function(err, numUpdated) {
        if (err) return next(err);
        if (!numUpdated) return next(new Error('Fridge configuration was not updated.'));

        read(req, res, next);
    });
}

module.exports.config = {
    read: read,
    create: create,
    update: update,
};

module.exports.unlock = function(req, res, next) {
    Fridge
        .findOne({})
        .exec(function(err, fridgeConfig) {
            if (err) return next(err);
            if (!fridgeConfig) return next(new Error('Fridge configuration has not yet been set.'));

            debounce(function() {
                request.post('http://' + fridgeConfig.ip + '/unlock', function(err, reqRes, body) {
                    if (err) return next(new Error('Fridge was not unlocked: ' + err));
                    res.status(200).send(body);
                });
            }, 100, true)();
        });
}