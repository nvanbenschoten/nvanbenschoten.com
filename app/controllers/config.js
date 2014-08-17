'use strict';

exports.read = function(req, res, next) {
    res.status(200).send({config: 'none'});
}