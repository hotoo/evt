
function Event(){ };

Event.prototype = {

  on: function(eventName, handler){
    var listeners = this._ || (this._ = {});
    var list = listeners[eventName] || (listeners[eventName] = []);
    list.push(handler);
    return this;
  },

  off: function(eventName, handler) {
    var listeners = this._;

    // Remove *all* events
    if (!(eventName || handler)) {
      this._ = {};
      return this;
    }

    var list = listeners[eventName];
    if (list) {
      if (handler) {
        for (var i = list.length - 1; i >= 0; i--) {
          if (list[i] === handler) {
            list.splice(i, 1);
            break;
          }
        }
      }
      else {
        delete listeners[eventName];
      }
    }

    return this;
  },

  emit: function(name) {
    var list = this._[name];
    var args = Array.prototype.slice.call(arguments); args.shift();

    if (list) {
      // Copy callback lists to prevent modification
      list = list.slice();

      // Execute event callbacks, use index because it's the faster.
      for(var i = 0, len = list.length; i < len; i++) {
        list[i].apply(this, args);
      }
    }

    return this;
  }

};

module.exports = Event;
