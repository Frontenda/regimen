// Generated by CoffeeScript 1.9.2
(function() {
  module.exports = function(chai, utils) {
    return chai.Assertion.addProperty("description", function() {
      var block;
      block = this._obj;
      utils.flag(this, "block.pathValue", "description");
      return this.assert(block.description != null, "expected block " + block.id + " to have a description", "expected block " + block.id + " to not have a description");
    });
  };

}).call(this);