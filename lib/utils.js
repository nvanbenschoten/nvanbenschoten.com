'use strict';

/**
 * Module dependencies
 */
var      fs = require('fs');
var  crypto = require('crypto')
var winston = require('winston');

var randomHex = function (x) {
  var num = Math.ceil(x/2);
  var odd = x % 2 !== 0;
  var buf = crypto.pseudoRandomBytes(num);
  var hexVal = buf.toString('hex');
  return (odd) ? hexVal.substring(1) : hexVal;
}

var guid = function(x) {
  if (!x) x = 8;
  var s = "";
  for (var i = 0; i < x/4; i++) s += randomHex(4);
  return s;
}

var objectId = function() {
  return guid(16);
}

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
  objectId: objectId,
}