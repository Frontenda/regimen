// Generated by CoffeeScript 1.9.2
(function() {
  module.exports = function(chai, utils) {
    var _overwriteMethod, overwriteAnMethod, overwriteChainableMethod;
    _overwriteMethod = function(preposition) {
      return function(_super) {
        return function(path) {
          var block, looksLikeBlock, maybe, messageText, target;
          looksLikeBlock = (utils.type(this._obj) === "object") && (this._obj.item != null);
          if (looksLikeBlock) {
            maybe = utils.flag(this, "block.maybe");
            block = this._obj;
            target = utils.getPathValue(path, block);
            utils.flag(this, "block.pathValue", path);
            if (maybe === true) {
              utils.flag(this, "negate", false);
              if (target == null) {
                return null;
              }
            }
            if (block.id != null) {
              messageText = "block " + block.id;
            } else {
              messageText = "block from item " + block.item;
            }
            return this.assert(target != null, "expected " + messageText + " to have " + preposition + " " + path, "expected " + messageText + " to not have " + preposition + " " + path);
          } else {
            return _super.apply(this, arguments);
          }
        };
      };
    };
    overwriteChainableMethod = function(name, preposition) {
      var method, property;
      method = _overwriteMethod(preposition);
      property = function(_super) {
        return _super;
      };
      return chai.Assertion.overwriteChainableMethod(name, method, property);
    };
    overwriteAnMethod = function(name) {
      return overwriteChainableMethod(name, name);
    };
    overwriteAnMethod("a");
    return overwriteAnMethod("an");
  };

}).call(this);
