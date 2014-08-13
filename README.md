# evt

---

[![spm version](http://spmjs.io/badge/evt)](http://spmjs.io/package/evt)

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
