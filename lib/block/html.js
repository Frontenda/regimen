// Generated by CoffeeScript 1.9.2
(function() {
  var equality, existence, length;

  equality = require("./helpers/equality");

  existence = require("./helpers/existence");

  length = require("./helpers/length");

  module.exports = function(chai, utils) {
    var property;
    property = "html";
    equality.call(this, chai, utils, property);
    existence.call(this, chai, utils, property);
    return length.call(this, chai, utils, property);
  };

}).call(this);