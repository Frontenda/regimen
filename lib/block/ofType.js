// Generated by CoffeeScript 1.9.2
(function() {
  module.exports = function(chai, utils) {
    return chai.Assertion.addMethod("ofType", function(expectedType) {
      var actualType, block, id;
      block = this._obj;
      actualType = block != null ? block.type : void 0;
      id = block != null ? block.id : void 0;
      return this.assert(expectedType === actualType, "expected block " + id + " to be a of type \#{exp} but got \#{act}", "expected block " + id + " to not be of type \#{exp}", expectedType, actualType);
    });
  };

}).call(this);