
var Event = function(){

  var listeners = {};
  var me = this;

  me.on = function(eventName, handler){
    var list = listeners[eventName] || (listeners[eventName] = []);
    list.push(handler);
    return me;
  };

  me.off = function(eventName, handler) {
    // Remove *all* events
    if (!(eventName || handler)) {
      listeners = {};
      return me;
    }

    var list = listeners[eventName];
    if (list) {
      if (handler) {
        for (var i = list.length - 1; i >= 0; i--) {
          if (list[i] === handler) {
            list.splice(i, 1);
          }
        }
      }
      else {
        delete listeners[eventName];
      }
    }

    return me;
  };

  me.emit = function(name, data) {
    var list = listeners[name];

    if (list) {
      // Copy callback lists to prevent modification
      list = list.slice();

      // Execute event callbacks, use index because it's the faster.
      for(var i = 0, len = list.length; i < len; i++) {
        list[i](data);
      }
    }

    return me;
  };

};

module.exports = Event;