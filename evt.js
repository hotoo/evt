
function Event(){ };

Event.prototype = {

  on: function(eventName, handler){
    var me = this;
    var listeners = me._ || (me._ = {});
    var list = listeners[eventName] || (listeners[eventName] = []);
    list.push(handler);
    return me;
  },

  off: function(eventName, handler) {
    var me = this;
    var listeners = me._;

    // Remove *all* events
    if (listeners){

      if (!(eventName || handler)) {
        me._ = {};
        return me;
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

    }

    return me;
  },

  emit: function(name) {
    var me = this;
    var listeners = me._;

    if (listeners) {

      var list = listeners[name];
      var args = Array.prototype.slice.call(arguments); args.shift();

      if (list) {
        // Copy callback lists to prevent modification
        list = list.slice();

        // Execute event callbacks, use index because it's the faster.
        for(var i = 0, len = list.length; i < len; i++) {
          list[i].apply(me, args);
        }
      }

    }

    return me;
  }

};

module.exports = Event;
