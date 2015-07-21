# Mode-S CRC Checker

A CRC implementation for ADS-B Mode-S messages


[![Build Status](https://travis-ci.org/foliveira/modes-crc.png)](https://travis-ci.org/foliveira/modes-crc)


[![npm package](https://nodei.co/npm/modes-crc.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/modes-crc/)

## Installation

```bash
$ npm install modes-crc
```

## Quick Examples

Pass it a buffer to the actual ADSB packet and the number of bits in the packet.

```js
var checker = require('modes-crc')

var data = [93, 77, 32, 35, 122, 85, 166]

var packetChecksum = checker.checksum(data, checker.MODES_SHORT_MSG)
```

It will do a parity check and output a checksum that should be equal to the result of the packet CRC obtained by

```js
var checker = require('modes-crc')

var data = [93, 77, 32, 35, 122, 85, 166]

var packetCrc = checker.crc(data, checker.MODES_SHORT_MSG)
```

## Documentation

### Checker

* [`checksum`](#checksum)
* [`crc`](#crc)

### Fixer

* [`fix`](#fix)

### Checker

<a name="checksum" />
### checksum(data, [bits])

Runs the `tasks` array of functions in series, each passing their results to the next in
the array. However, if any of the `tasks` pass an error to their own callback, the
next function is not executed, and the main `callback` is immediately called with
the error.

__Arguments__

* `tasks` - An array of functions to run, each function is passed a
  `callback(err, result1, result2, ...)` it must call on completion. The first
  argument is an error (which can be `null`) and any further arguments will be
  passed as arguments in order to the next task.
* `callback(err, [results])` - An optional callback to run once all the functions
  have completed. This will be passed the results of the last task's callback.



__Example__

```js
async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
      // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
    // result now equals 'done'
});
```

---------------------------------------

<a name="crc" />
### crc(data, [bits])

Runs the `tasks` array of functions in series, each passing their results to the next in
the array. However, if any of the `tasks` pass an error to their own callback, the
next function is not executed, and the main `callback` is immediately called with
the error.

__Arguments__

* `tasks` - An array of functions to run, each function is passed a
  `callback(err, result1, result2, ...)` it must call on completion. The first
  argument is an error (which can be `null`) and any further arguments will be
  passed as arguments in order to the next task.
* `callback(err, [results])` - An optional callback to run once all the functions
  have completed. This will be passed the results of the last task's callback.



__Example__

```js
async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
      // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
    // result now equals 'done'
});
```

---------------------------------------

### Fixer

<a name="fix" />
### waterfall(data, [bits])

Runs the `tasks` array of functions in series, each passing their results to the next in
the array. However, if any of the `tasks` pass an error to their own callback, the
next function is not executed, and the main `callback` is immediately called with
the error.

__Arguments__

* `tasks` - An array of functions to run, each function is passed a
  `callback(err, result1, result2, ...)` it must call on completion. The first
  argument is an error (which can be `null`) and any further arguments will be
  passed as arguments in order to the next task.
* `callback(err, [results])` - An optional callback to run once all the functions
  have completed. This will be passed the results of the last task's callback.



__Example__

```js
async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
      // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
    // result now equals 'done'
});
```

## Credits

A port of antirez's dump1090, but in Node.js: https://github.com/antirez/dump1090/

## License

Keeps the 3-Clause BSD License from the "parent" repository
