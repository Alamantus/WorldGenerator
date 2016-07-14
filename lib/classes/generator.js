"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Generator = function () {
  function Generator() {
    var seed = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];

    _classCallCheck(this, Generator);

    this.seedValue = seed;
  }

  _createClass(Generator, null, [{
    key: "dieRoll",
    value: function dieRoll(sides) {
      // Returns true or false.
      // Math.seedrandom(this.seed);
      return Math.floor(Math.random() * sides) == 0;
    }
  }, {
    key: "coinFlip",
    value: function coinFlip() {
      // Returns true or false.
      // Math.seedrandom(this.seed);
      return this.dieRoll(2);
    }
  }, {
    key: "randomInt",
    value: function randomInt(min, max) {
      // Returns a random number between min (inclusive) and max (exclusive).
      // Math.seedrandom(this.seed);
      min = Math.floor(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }, {
    key: "stringIsInArray",
    value: function stringIsInArray(str, strArray) {
      // Just use Array.prototype.some() like below.
      return strArray.some(function (arrVal) {
        return str === arrVal;
      });
    }
  }]);

  return Generator;
}();

exports.default = Generator;