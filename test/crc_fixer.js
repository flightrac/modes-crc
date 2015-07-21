'use strict'

var test = require('tape')
var checker = require('../lib/checker')
var fixer = require('../lib/fixer')

test('fix short message', function(t) {
  var data = [ 93, 77, 32, 35, 123, 85, 166 ]

  var fixed = fixer.fix(data, checker.SHORT_MSG_BITS)
  t.equal(checker.checksum(fixed.data, checker.SHORT_MSG_BITS), 0x7a55a6)

  t.end()
})
