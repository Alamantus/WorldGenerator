'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _generator = require('../../generator');

var _generator2 = _interopRequireDefault(_generator);

var _language = require('../linguistics/language');

var _language2 = _interopRequireDefault(_language);

var _person = require('../things/living/person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Country = function (_Generator) {
    _inherits(Country, _Generator);

    function Country(scope) {
        var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        var _ref$minLifeLength = _ref.minLifeLength;
        var minLifeLength = _ref$minLifeLength === undefined ? 25 : _ref$minLifeLength;
        var _ref$maxLifeLength = _ref.maxLifeLength;
        var maxLifeLength = _ref$maxLifeLength === undefined ? 125 : _ref$maxLifeLength;

        _classCallCheck(this, Country);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Country).call(this, scope.seedValue));

        _this.world = scope;

        // FIXME: When smaller increments like "Region" or something exist, make this an array of possible biomes.
        _this.biome = _this.arrayRandom(_this.world.possibleBiomes);
        _this.lifeExpectancy = _this.randomInt(minLifeLength, maxLifeLength);

        // The country's native language is the first in the array.
        // FIXME: Make a function that generates a possibility for multiple languages.
        _this.languages = [new _language2.default(_this.seedValue)];

        // Generate a name using the country's native language.
        _this.name = _this.languages[0].generateWord(4, 8, true);

        _this.population = [new _person2.default(_this)];
        return _this;
    }

    return Country;
}(_generator2.default);

exports.default = Country;