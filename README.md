# min-evt

---

[![NPM version][npm-badge]][npm-url]
[![spm version][spm-badge]][spm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[npm-badge]: https://img.shields.io/npm/v/min-evt.svg?style=flat
[npm-url]: https://www.npmjs.com/package/min-evt
[spm-badge]: http://spmjs.io/badge/evt
[spm-url]: http://spmjs.io/package/evt
[travis-badge]: https://travis-ci.org/hotoo/evt.svg
[travis-url]: https://travis-ci.org/hotoo/evt
[coveralls-badge]: https://coveralls.io/repos/hotoo/evt/badge.png
[coveralls-url]: https://coveralls.io/r/hotoo/evt

A min event module.

---

## INSTALL

via spm:

```
$ spm install min-evt --save
```

via npm:

```
$ npm install min-evt --save
```

## USAGE

```js
var Event = require('min-evt');

var evt = new Event();
evt.on("event-name", function(arg0, arg1){
  // Do somethings.
});
evt.emit("event-name", "arg0", "arg1");
```

## API

### event.on(String eventName, Function handler)

Binding event name with handler.

### event.off([String eventName], [Function handler])

Unbinding event name with handler.

* `String eventName`: optional, if without eventName, unbinding all of the
  handler in instance of min-evt.
* `Function handler`: optional, if without handler argument, unbinding all of
  the handlers named argument eventName.
