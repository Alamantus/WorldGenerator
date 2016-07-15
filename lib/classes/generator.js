'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var seedrandom = require('seedrandom');

var Generator = function () {
  function Generator() {
    var seed = arguments.length <= 0 || arguments[0] === undefined ? Generator.randomSeed() : arguments[0];

    _classCallCheck(this, Generator);

    this.seedValue = seed.toString();
    seedrandom(this.seedValue, { global: true });
  }

  _createClass(Generator, null, [{
    key: 'dieRoll',
    value: function dieRoll(sides) {
      // Returns true or false.
      // Math.seedrandom(this.seed);
      return Math.floor(Math.random() * sides) == 0;
    }
  }, {
    key: 'coinFlip',
    value: function coinFlip() {
      // Returns true or false.
      // Math.seedrandom(this.seed);
      return this.dieRoll(2);
    }
  }, {
    key: 'randomInt',
    value: function randomInt(min, max) {
      // Returns a random number between min (inclusive) and max (exclusive).
      // Math.seedrandom(this.seed);
      min = Math.floor(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }, {
    key: 'randomSeed',
    value: function randomSeed() {
      // seedrandom() is the generator function, so to run that function,
      // you need to run (seedrandom())() to run it anonymously.
      return seedrandom()().toString().substr(2, 10);
    }
  }]);

  return Generator;
}();

exports.default = Generator;