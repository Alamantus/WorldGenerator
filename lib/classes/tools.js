'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tools = function () {
  function Tools() {
    _classCallCheck(this, Tools);
  }

  _createClass(Tools, null, [{
    key: 'capitalize',
    value: function capitalize(str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1);
    }
  }, {
    key: 'aOrAn',
    value: function aOrAn(str) {
      return Tools.inArray(['a', 'e', 'i', 'o', 'u'], str.substr(0, 1).toLowerCase()) || Tools.inArray(['A', 'E', 'I', 'O', 'U'], str.substr(0, 1).toUpperCase()) ? 'an' : 'a';
    }
  }, {
    key: 'randomInt',
    value: function randomInt(min, max) {
      var rng = arguments.length <= 2 || arguments[2] === undefined ? Math.random : arguments[2];

      // Returns a random number between min (inclusive) and max (exclusive).
      // Math.seedrandom(this.seed);
      min = Math.floor(min);
      max = Math.floor(max);
      return Math.floor(rng() * (max - min)) + min;
    }
  }, {
    key: 'arrayRandom',
    value: function arrayRandom(arr) {
      var rng = arguments.length <= 1 || arguments[1] === undefined ? Math.random : arguments[1];

      return arr[Tools.randomInt(0, arr.length, rng)];
    }
  }, {
    key: 'inArray',
    value: function inArray(arr, elem) {
      return arr.some(function (item) {
        return item == elem;
      });
    }
  }]);

  return Tools;
}();

exports.default = Tools;