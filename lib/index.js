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
  return Number(toValidChars(input).reduce(function (memo, char, index) {
    var value = charToValue(char, index);
    var numStr = (memo[0] + value).toString();
    return [Number(numStr), numStr.substring(1, numStr.length)];
  }, [0, ''])[1]);
};

exports['default'] = hexToDec;
module.exports = exports['default'];