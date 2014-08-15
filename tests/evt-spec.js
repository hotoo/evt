var expect = require('expect.js');
var Event = require('../evt');

describe('evt', function() {

  it('normal usage: no arguments', function(done) {

    var evt = new Event();
    evt.on("name", function(data){
      expect(data).to.equal(undefined);
      done();
    });
    evt.emit("name");

  });

  it('normal usage: 1 arguments', function(done) {

    var evt = new Event();
    evt.on("name", function(data){
      expect(data).to.equal(1);
      done();
    });
    evt.emit("name", 1);

  });

  it('normal usage: more arguments', function(done) {

    var evt = new Event();
    evt.on("name", function(a, b, c){
      expect(a).to.equal("a");
      expect(b).to.equal("b");
      expect(c).to.equal("c");
      done();
    });
    evt.emit("name", "a", "b", "c");

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
