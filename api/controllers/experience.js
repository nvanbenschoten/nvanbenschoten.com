'use strict';

/**
 * Module dependencies
 */
var mongoose   = require('mongoose');
var Experience = mongoose.model('Experience');

module.exports.read = function(req, res, next) {
    var experienceId = req.params.id;

    Experience
        .findOne({_id: experienceId})
        .exec(function(err, experience) {
            if (err) return next(err);
            if (!experience) return next(new Error('Exerience could not be found.'));

            res.status(200).send(experience);
        });
}

module.exports.list = function(req, res, next) {
    Experience
        .find({})
        .exec(function(err, experiences) {
            if (err) return err;

            res.status(200).send(experiences);
        });
}

module.exports.create = function(req, res, next) {
    console.log(req)
    Experience.create(req.body, 
        function(err, experience) {
            if (err) return next(err);

            return res.status(201).send(experience);
    })
}

module.exports.update = function(req, res, next) {
    var experienceId = req.params.id;

    Experience.update({_id: experienceId}, 
        req.body, {}, 
        function(err, numUpdated) {
            if (err) return next(err);
            if (!numUpdated) return next(new Error('Experience was not updated.'));

            module.exports.read(req, res, next);
    });
}

module.exports.delete = function(req, res, next) {
    var experienceId = req.params.id;

    Experience.remove({_id: experienceId},
        function(err) {
            if (err) return next(err);

            res.status(200).send({_id: experienceId});
    })
}