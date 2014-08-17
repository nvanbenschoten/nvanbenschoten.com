'use strict';

module.exports = function(err, req, res, next) {
    if (err) {
        NV.logger.error(err.toString());
        res.status(500).json({ error: "Error", message: err.toString() });
    } else {
        var genericError = "An unknown error occured";
        NV.logger.error(genericError);
        res.status(500).json({ error: "Error", message: "An unknown error occured" });
    }    
}