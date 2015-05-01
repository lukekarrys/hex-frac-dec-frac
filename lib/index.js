'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
// Copied and maybe simplified (well at least shortened) from
// http://www.easysurf.cc/cnver17.htm#bf16tobf10

var VALID_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var toValidChars = function toValidChars(string) {
  return string.toUpperCase().replace(/[^0-9A-Z]/g, '').split('');
};
var charToValue = function charToValue(char, index) {
  return VALID_CHARS.indexOf(char) * Math.pow(16, -(index + 1));
};

var hexToDec = function hexToDec(input) {
  return toValidChars(input).reduce(function (previous, char, index) {
    var num = (previous[0] + charToValue(char, index)).toString();
    return [Number(num), num.substring(1, num.length)];
  }, [0, ''])[1];
};

exports['default'] = hexToDec;
module.exports = exports['default'];