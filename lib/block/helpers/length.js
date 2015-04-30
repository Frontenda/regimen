// Generated by CoffeeScript 1.9.2
(function() {
  module.exports = function(chai, utils) {
    var _overwriteMethod, overwriteAboveMethod, overwriteBelowMethod, overwriteChainableMethod, overwriteLeastMethod, overwriteMethod, overwriteMostMethod;
    _overwriteMethod = function(preposition, assertion) {
      return function(_super) {
        return function(number) {
          var actual, block, expected, property, propertyName;
          block = this._obj;
          propertyName = utils.flag(this, "block.propertyName");
          property = block[propertyName];
          if ((property != null ? property.length : void 0) != null) {
            expected = property != null ? property.length : void 0;
            actual = number;
            return this.assert(assertion(expected, actual), "expected block " + block.id + " to have a " + property + " with length " + preposition + " \#{exp} but length was \#{act}", "expected block " + block.id + " to not have a " + property + " with length " + preposition + " \#{exp} but length was \#{act}", expected, actual);
          } else {
            return _super.apply(this, arguments);
          }
        };
      };
    };
    overwriteMethod = function(name, preposition, assertion) {
      var method;
      method = _overwriteMethod(preposition, assertion);
      return chai.Assertion.overwriteMethod(name, method);
    };
    overwriteChainableMethod = function(name, preposition, assertion) {
      var method, property;
      method = _overwriteMethod(preposition, assertion);
      property = function(_super) {
        return _super;
      };
      return chai.Assertion.overwriteChainableMethod(name, method, property);
    };
    overwriteLeastMethod = function(name) {
      return overwriteMethod(name, "at least", function(length, number) {
        return length >= number;
      });
    };
    overwriteMostMethod = function(name) {
      return overwriteMethod(name, "at most", function(length, number) {
        return length <= number;
      });
    };
    overwriteAboveMethod = function(name) {
      return overwriteMethod(name, "above", function(length, number) {
        return length > number;
      });
    };
    overwriteBelowMethod = function(name) {
      return overwriteMethod(name, "below", function(length, number) {
        return length < number;
      });
    };
    overwriteChainableMethod("length", "of", function(length, number) {
      return length === number;
    });
    overwriteLeastMethod("least");
    overwriteLeastMethod("gte");
    overwriteMostMethod("most");
    overwriteMostMethod("lte");
    overwriteAboveMethod("above");
    overwriteAboveMethod("gt");
    overwriteAboveMethod("greaterThan");
    overwriteBelowMethod("below");
    overwriteBelowMethod("lt");
    return overwriteBelowMethod("lessThan");
  };

}).call(this);