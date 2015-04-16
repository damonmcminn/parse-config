'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _read = require('fs');

var HOME = process.env.HOME;

exports['default'] = (function (args) {

  var path = args.filter(function (arg) {
    return arg.match(/--config=/i);
  }).map(function (arg) {
    var path = arg.replace('--config=', '');
    if (path[0] === '~') {
      path = path.replace('~', HOME);
    }
    return path;
  }).pop();

  try {
    return JSON.parse(_read.readFileSync(path).toString());
  } catch (e) {
    throw new Error('Could not be parse: ' + path);
  }
})(process.argv);

module.exports = exports['default'];