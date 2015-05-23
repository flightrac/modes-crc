var test = require('tape')
var crc = require('../lib/checker')

test('valid crc for short message', function(t) {
  var data = [ 93, 77, 32, 35, 122, 85, 166 ]

  t.equal(crc.checksum(data, crc.SHORT_MSG_BITS), 0x7a55a6)

  t.end()
})

test('invalid crc for short message', function(t) {
  var data = [ 40, 0, 16, 36, 220, 121, 76 ]

  t.notEqual(crc.checksum(data, crc.SHORT_MSG_BITS), 0xdc794c)

  t.end()
})

test('valid crc for long message', function(t) {
  var data = [ 143, 77, 32, 35, 88, 127, 52, 94, 53, 131, 126, 34, 24, 178]

  t.equal(crc.checksum(data, crc.LONG_MSG_BITS), 0x2218b2)

  t.end()
})
