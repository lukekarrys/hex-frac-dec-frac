hex-frac-dec-frac
===================

Convert a hexadecimal fraction to a decimal fraction.

This is different from `hexToDec` from libraries like [`all-your-base`](https://www.npmjs.com/package/all-your-base) (as I just learned).

I use this for [xkcd Geohashing](https://xkcd.com/426/).

[![NPM](https://nodei.co/npm/hex-frac-dec-frac.png)](https://nodei.co/npm/hex-frac-dec-frac/)
[![Build Status](https://travis-ci.org/lukekarrys/hex-frac-dec-frac.png?branch=master)](https://travis-ci.org/lukekarrys/hex-frac-dec-frac)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/lukekarrys/hex-frac-dec-frac.svg)](https://greenkeeper.io/)


## Install

`npm install hex-frac-dec-frac`


## Usage

```js
import hexToDec from 'hex-frac-dec-frac'

hexToDec('a1e189f4df975ee2') === 0.6323477003894289
hexToDec('0baed468ae66bbd2') === 0.04563643985457139
```

## Contributing

This is written in ES6 and compiled to ES5 using [`babel`](https://babeljs.io/). The code you require will come from the `lib/` directory which gets compiled from `src/` before each `npm publish`.


## Tests

`npm test`


## TODO

- Understand how this works and how its different from [`all-your-base`](https://www.npmjs.com/package/all-your-base)


## License

MIT
