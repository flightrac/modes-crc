'use strict'

var checker = require('./checker')

exports = module.exports

exports.fix = function(msg, bits) {
  for (var j = 0; j < bits; j++) {
    var byte = Math.floor(j / 8);
    var bitmask = 1 << (7 - (j % 8))
    var copy = msg.slice(0)
    copy[byte] ^= bitmask

    if (checker.crc(copy, bits) === checker.checksum(copy, bits)) {
      msg[byte] = copy[byte]
      return {
        data: msg,
        errorBit: j
      }
    }
  }

  return {data: msg, errorBit: -1}
}
