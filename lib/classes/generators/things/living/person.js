'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _thing = require('../thing');

var _thing2 = _interopRequireDefault(_thing);

var _tools = require('../../../tools');

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Person = function (_Thing) {
  _inherits(Person, _Thing);

  function Person(scope) {
    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref$x = _ref.x;
    var x = _ref$x === undefined ? 0 : _ref$x;
    var _ref$y = _ref.y;
    var y = _ref$y === undefined ? 0 : _ref$y;

    _classCallCheck(this, Person);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Person).call(this, scope, {
      x: x,
      y: y,
      type: 'Person',
      status: 'Alive'
    }));

    _this.firstName = _this.location.scope.languages[0].generateWord(3, 8, true);
    _this.lastName = _this.location.scope.languages[0].generateWord(3, 12, true);
    _this.age = _this.randomInt(1, _this.location.scope.lifeExpectancy);

    // A person's first language is always their location's first language.
    _this.knownLanguages = [_this.location.scope.languages[0]];

    _this.thing.identity = _tools2.default.capitalize(_tools2.default.aOrAn(_this.ageName)) + ' ' + _this.ageName + ' Person named ' + _this.fullName;
    // this.thing.identity = `A ${this.ageName} Person named ${this.fullName}`;
    return _this;
  }

  _createClass(Person, [{
    key: 'testSetAge',
    value: function testSetAge(age) {
      this.age = age;
      this.thing.identity = _tools2.default.capitalize(_tools2.default.aOrAn(this.ageName)) + ' ' + this.ageName + ' Person named ' + this.fullName;
      // this.thing.identity = `A ${this.ageName} Person named ${this.fullName}`;
      return this;
    }
  }, {
    key: 'fullName',
    get: function get() {
      return this.firstName + ' ' + this.lastName;
    }
  }, {
    key: 'ageName',
    get: function get() {
      var ageNames = ['very young', 'young', 'young adult', 'adult', 'late adult', 'middle-aged', 'mature', 'aging', 'old', 'very old', 'ancient'];
      var result = '';

      for (var i = 0; i < ageNames.length; i++) {
        if (this.age <= this.location.scope.lifeExpectancy * ((i + 1) / ageNames.length)) {
          result = ageNames[i];
          break;
        }
      }

      return result;
    }
  }]);

  return Person;
}(_thing2.default);

exports.default = Person;