'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generator = require('../../generator');

var _generator2 = _interopRequireDefault(_generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thing = function (_Generator) {
  _inherits(Thing, _Generator);

  // @param scope is the world/country/town, etc. the thing is within that governs its langauge and concepts.

  function Thing(scope, _ref) {
    var _ref$identity = _ref.identity;
    var identity = _ref$identity === undefined ? 'nothing' : _ref$identity;
    var _ref$x = _ref.x;
    var x = _ref$x === undefined ? 0 : _ref$x;
    var _ref$y = _ref.y;
    var y = _ref$y === undefined ? 0 : _ref$y;
    var _ref$type = _ref.type;
    var type = _ref$type === undefined ? 'none' : _ref$type;
    var _ref$status = _ref.status;
    var status = _ref$status === undefined ? 'none' : _ref$status;

    _classCallCheck(this, Thing);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Thing).call(this, scope.seedValue));

    _this.location = {
      scope: scope,
      x: x,
      y: y
    };
    _this.thing = {
      identity: identity,
      type: type,
      status: status
    };
    return _this;
  }

  return Thing;
}(_generator2.default);

exports.default = Thing;