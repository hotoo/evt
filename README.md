# evt

---

[![spm version](http://spmjs.io/badge/evt)](http://spmjs.io/package/evt)
[![Build Status](https://travis-ci.org/hotoo/evt.svg)](https://travis-ci.org/hotoo/evt)
[![Coverage Status](https://coveralls.io/repos/hotoo/evt/badge.png)](https://coveralls.io/r/hotoo/evt)

A mini event module.

---

## Install

```
$ spm install evt --save
```

## Usage

```js
var Event = require('evt');

var evt = new Event();
evt.on("event-name", function(){
  // Do somethings.
});
evt.emit("event-name");
```

## API

### event.on(String eventName, Function handler)

### event.off([String eventName], [Function handler])
