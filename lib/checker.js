'use strict'

var c = require('modes-constants')
var parity = require('./parity')

exports = module.exports

exports.checksum = function(data, bits) {
  if (!bits) {
    if (data.length * 8 === c.SHORT_MSG_BITS) {
      bits = c.SHORT_MSG_BITS
    } else if (data.length * 8 === c.LONG_MSG_BITS) {
      bits = c.LONG_MSG_BITS
    } else {
      return c.E_INVALIDFRAME
    }
  }

  var crc = 0
  var offset = (bits === c.LONG_MSG_BITS) ?
    0 : (c.LONG_MSG_BITS - c.SHORT_MSG_BITS)

  for (var j = 0; j < bits; j++) {
    var b = parseInt(j / 8, 10)
    var bit = j % 8
    var bitmask = 1 << (7 - bit)

    if (data[b] & bitmask) {
      crc ^= parity.table[j + offset]
    }
  }

  return crc
}

exports.crc = function(data, bits) {
  var bytes = !!bits ? bits / 8 : data.length;

  return (data[bytes - 3] << 16) | (data[bytes - 2] << 8) | data[bytes - 1]
}
