// Generated by CoffeeScript 1.9.2
(function() {
  module.exports = function(chai, utils) {
    return chai.Assertion.addProperty("subtitle", function() {
      var block;
      block = this._obj;
      utils.flag(this, "block.pathValue", "subtitle");
      return this.assert(block.subtitle != null, "expected block " + block.id + " to have a subtitle", "expected block " + block.id + " to not have a subtitle");
    });
  };

}).call(this);