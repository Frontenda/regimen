// Generated by CoffeeScript 1.9.2
(function() {
  var _subtypeOf;

  _subtypeOf = require("../block/_subtypeOf");

  module.exports = function(chai, utils) {
    return chai.Assertion.addProperty("repost", function() {
      var block, content, expectedLength, expectedType, item;
      item = this._obj;
      content = item.content;

      /* Assert content length */
      expectedLength = 1;
      this.assert(content.length === expectedLength, "expected item " + item.id + " content length to be \#{exp} but got \#{act}", "expected item " + item.id + " content length to not be \#{exp} but got \#{act}", expectedLength, content.length);

      /* Assert block type */
      block = this._obj.content[0];
      expectedType = "media";
      return _subtypeOf.call(this, block, expectedType);
    });
  };

}).call(this);