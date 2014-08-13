var expect = require('expect.js');
var Event = require('../evt');

describe('evt', function() {

  it('normal usage', function(done) {

    var evt = new Event();
    evt.on("name", function(data){
      expect(data).to.equal(1);
      done();
    });
    evt.emit("name", 1);

  });

  it("off(name, handler)", function(done){
    var evt = new Event();

    function handler(){
      expect("run into here.").to.equal("Not execute into here.");
    }

    evt.on("name", handler);
    evt.off("name", handler);
    evt.emit("name");
    done();
  });

  it("off(name)", function(done){
    var evt = new Event();

    function handler(){
      expect("run into here.").to.equal("Not execute into here.");
    }

    evt.on("name", handler);
    evt.off("name");
    evt.emit("name");
    done();
  });

  it("off()", function(done){
    var evt = new Event();

    function handler(){
      expect("run into here.").to.equal("Not execute into here.");
    }

    evt.on("name", handler);
    evt.off();
    evt.emit("name");
    done();
  });

  it("off(other)", function(done){
    var evt = new Event();

    function handler(){
      expect("run into here.").to.equal("run into here.");
    }

    evt.on("name", handler);
    evt.off("other");
    evt.emit("name");
    done();
  });

});
