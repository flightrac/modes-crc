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

## Credits

A port of antirez's dump1090, but in Node.js: https://github.com/antirez/dump1090/

## License

Keeps the 3-Clause BSD License from the "parent" repository
