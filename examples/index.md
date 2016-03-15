# Demo

---

## Normal usage

<pre id="console">
</pre>
<button id="btn-emit">Click ME</button>
<button id="btn-on" style="display:none;">ON</button>
<button id="btn-off">OFF</button>

````javascript
var $ = require('jquery');
var Event = require('min-evt');

  var evt = new Event();

  function on(){
    evt.on("click", function(data){
      $("#console").append('clicked ' + data + '.<br/>');
    });
  }

  function off(){
    evt.off("click");
  }

  var index = 0;
  $("#btn-emit").click(function(){
    evt.emit("click", index++);
  });

  $("#btn-on").click(function(){
    on();
    $("#btn-on").hide();
    $("#btn-off").show();
  });
  $("#btn-off").click(function(){
    off();
    $("#btn-off").hide();
    $("#btn-on").show();
  });

  on();

````
