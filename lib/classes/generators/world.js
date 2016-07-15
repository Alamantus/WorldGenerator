'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generator = require('../generator');

var _generator2 = _interopRequireDefault(_generator);

var _country = require('./locations/country');

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var World = function (_Generator) {
  _inherits(World, _Generator);

  function World(seed) {
    var minBiomes = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];

    _classCallCheck(this, World);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(World).call(this, seed));

    _this.existingBiomes = _this.generateBiomes(minBiomes);

    _this.countries = [new _country2.default(_this)];

    // Generate the name from the first country's native language.
    _this.name = _this.countries[0].languages[0].generateWord(4, 8, true);
    return _this;
  }

  _createClass(World, [{
    key: 'generateBiomes',
    value: function generateBiomes() {
      var minBiomes = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];

      var neutralBiomes = ['plain', 'hills', 'river', 'lake', 'mountain', 'island', 'savanna', 'valley', 'prairie'];
      var hostileBiomes = ['volcano', 'ocean', 'desert', 'tundra', 'scrublands', 'canyon', 'jungle', 'rainforest'];

      var result = {
        neutral: [],
        hostile: []
      };

      for (var i = 0; i < neutralBiomes.length; i++) {
        if (this.coinFlip()) {
          result.neutral.push(neutralBiomes[i]);
        }
      }

      for (var _i = 0; _i < hostileBiomes.length; _i++) {
        if (this.coinFlip()) {
          result.hostile.push(hostileBiomes[_i]);
        }
      }

      return [].concat(_toConsumableArray(result.neutral), _toConsumableArray(result.hostile)).length > minBiomes ? result : this.generateBiomes(minBiomes);
    }
  }, {
    key: 'possibleBiomes',
    get: function get() {
      return [].concat(_toConsumableArray(this.existingBiomes.neutral), _toConsumableArray(this.existingBiomes.hostile));
    }
  }]);

  return World;
}(_generator2.default);

exports.default = World;