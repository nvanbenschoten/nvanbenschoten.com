'use strict';

/**
 * Module dependencies
 */
var      fs = require('fs');
var winston = require('winston');

var createLogger = function(logConfig) {
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

var loadDirFiles = function(dir, param) {
  var files = {};
  fs.readdirSync(dir).forEach(function(file) {
    // skip index files
    if (file === 'index.js') return;
    // skip non .js files
    var ext = '.js';
    if (file.indexOf(ext, file.length - ext.length) === -1) return;

    // get name of file
    var name = file.substr(0, file.indexOf('.'));

    // use the name of the file as the key name
    var keyName = name;
    if (name.indexOf('-') !== -1) {
      // if the name has a '-' then replace that with '_'
      var keyName = name.replace('-', '_');
    }
    // require the file and add to the module exports
    files[keyName] = (param) ? require(dir + '/' + name)(param) : require(dir + '/' + name);
  });
  return files;
};

module.exports = {
  createLogger: createLogger,
  loadDirFiles: loadDirFiles,
}