'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tools = require('./tools');

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var seedrandom = require('seedrandom');

var Generator = function () {
  function Generator() {
    var seed = arguments.length <= 0 || arguments[0] === undefined ? this.randomSeed() : arguments[0];

    _classCallCheck(this, Generator);

    this.seedValue = seed.toString();
    this.rng = seedrandom(this.seedValue);
  }

  _createClass(Generator, [{
    key: 'dieRoll',
    value: function dieRoll(sides) {
      // Returns true or false.
      // Math.seedrandom(this.seed);
      return Math.floor(this.rng() * sides) == 0;
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
      return _tools2.default.randomInt(min, max, this.rng);
    }
  }, {
    key: 'arrayRandom',
    value: function arrayRandom(array) {
      return _tools2.default.arrayRandom(array, this.rng);
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