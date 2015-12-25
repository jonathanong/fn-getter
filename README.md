
# fn-getter

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Simple, lazyily evaluated values.
If a value takes too long to calculate,
but you don't need it right away (ex. on startup),
then evaluate lazily.

```js
const createGetter = require('fn-getter')

const createS3Client = createGetter(() => {
  const AWS = require('aws-sdk')
  return new AWS.S3()
})
```

Maybe you want to evaluate it after the first time:

```js
setImmediate(createS3Client)
```

Then, when you need to use it:

```js
app.use((req, res, next) => {
  createS3Client().putObject(...)
})
```

[npm-image]: https://img.shields.io/npm/v/fn-getter.svg?style=flat-square
[npm-url]: https://npmjs.org/package/fn-getter
[travis-image]: https://img.shields.io/travis/jonathanong/fn-getter.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/fn-getter
[codecov-image]: https://img.shields.io/codecov/c/github/jonathanong/fn-getter/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/jonathanong/fn-getter
[david-image]: http://img.shields.io/david/jonathanong/fn-getter.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/fn-getter
[license-image]: http://img.shields.io/npm/l/fn-getter.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/fn-getter.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/fn-getter
