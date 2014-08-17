'use strict';

/**
 * Module dependencies
 */
var  winston = require('winston');

exports = module.exports = function logger(logConfig, next) {
  var transports = [];

  // if console enabled log to console
  if(logConfig.console) {
    // console logging
    var consoleTransport = new (winston.transports.Console)({
      level: logConfig.level,
      colorize: true
    });
    
    transports.push(consoleTransport);
  }

  var logger = new (winston.Logger)({
    transports: transports
  });

  return logger;
}