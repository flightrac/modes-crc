'use strict'

var test = require('tape')
var checker = require('../lib/checker')

test('valid checksum for short message', function(t) {
  var data = [ 93, 77, 32, 35, 122, 85, 166 ]

  t.equal(checker.checksum(data, checker.SHORT_MSG_BITS), 0x7a55a6)

  t.end()
})

test('invalid checksum for short message', function(t) {
  var data = [ 40, 0, 16, 36, 220, 121, 76 ]

  t.notEqual(checker.checksum(data, checker.SHORT_MSG_BITS), 0xdc794c)

  t.end()
})

test('valid checksum for long message', function(t) {
  var data = [ 143, 77, 32, 35, 88, 127, 52, 94, 53, 131, 126, 34, 24, 178]

  t.equal(checker.checksum(data, checker.LONG_MSG_BITS), 0x2218b2)

  t.end()
})

test('crc is as expected for any kind of data packet', function(t) {
  var data = [ 40, 0, 16, 36, 220, 121, 76 ]

  t.equal(checker.crc(data, checker.SHORT_MSG_BITS), 0xdc794c)

  t.end()
})
