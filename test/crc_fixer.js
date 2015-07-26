'use strict'

var test = require('tape')
var c = require('modes-constants')
var checker = require('../lib/checker')
var fixer = require('../lib/fixer')


test('fix short message', function(t) {
  var data = [ 92, 77, 32, 35, 122, 85, 166 ]

  var fixed = fixer.fix(data, c.SHORT_MSG_BITS)
  t.equal(checker.checksum(fixed.data, c.SHORT_MSG_BITS), 0x7a55a6)
  t.notEqual(fixed.errorBit, -1)

  t.end()
})

test('does nothing on a correct message', function(t) {
  var data = [ 93, 77, 32, 35, 122, 85, 166 ]

  var theSame = fixer.fix(data, c.SHORT_MSG_BITS)
  t.equal(checker.checksum(theSame.data, c.SHORT_MSG_BITS), 0x7a55a6)
  t.equal(theSame.errorBit, -1)

  t.end()
})
