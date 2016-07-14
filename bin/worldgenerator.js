(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tools = require('../tools');

var _tools2 = _interopRequireDefault(_tools);

var _generator = require('../generator');

var _generator2 = _interopRequireDefault(_generator);

var _lexicon = require('./linguistics/lexicon');

var _lexicon2 = _interopRequireDefault(_lexicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Language = function (_Generator) {
  _inherits(Language, _Generator);

  function Language(seed) {
    var useIPA = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var minWordLength = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
    var maxWordLength = arguments.length <= 3 || arguments[3] === undefined ? 10 : arguments[3];

    _classCallCheck(this, Language);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Language).call(this, seed));

    _this.allowConsecutiveConsonants = _generator2.default.dieRoll(6);
    _this.allowConsecutiveVowels = _generator2.default.dieRoll(4);
    _this.consonants = _this.chooseLetters('consonants', useIPA);
    _this.vowels = _this.chooseLetters('vowels', useIPA);
    _this.descriptiveOrder = _this.chooseDescriptiveOrder();
    _this.sentenceOrder = _this.chooseSentenceOrder();
    _this.hasAdverbs = _generator2.default.coinFlip();
    _this.hasPronouns = _generator2.default.coinFlip();
    _this.hasArticles = _generator2.default.coinFlip();
    _this.hasPossessive = _generator2.default.coinFlip();
    _this.allowMergeWords = _generator2.default.dieRoll(10);
    _this.MINWORDLENGTH = minWordLength;
    _this.MAXWORDLENGTH = maxWordLength;
    _this.lex = new _lexicon2.default(_this);

    _this.name = _this.generateWord(3, 8, true);
    return _this;
  }

  _createClass(Language, [{
    key: 'chooseLetters',
    value: function chooseLetters(type) {
      var useIPA = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
      var IPACONSONANTS = ['ʙ', 'β', 'ɕ', 'ç', 'ɖ', 'ð', 'ʤ', 'ɟ', 'ɡ', 'ɢ', 'ɦ', 'ɧ', 'ħ', 'ɥ', 'ʜ', 'ʝ', 'ɭ', 'ɬ', 'ɫ', 'ɮ', 'ʟ', 'ɱ', 'ɰ', 'ŋ', 'ɳ', 'ɲ', 'ɴ', 'ɸ', 'θ', 'ɹ', 'ɺ', 'ɾ', 'ɻ', 'ʀ', 'ʁ', 'ɽ', 'ʂ', 'ʃ', 'ʈ', 'ʧ', 'ʋ', 'ⱱ', 'ɣ', 'ʍ', 'χ', 'ʎ', 'ʑ', 'ʐ', 'ʒ', 'ʔ', 'ʡ', 'ʕ', 'ʢ'];
      var VOWELS = ['a', 'e', 'i', 'o', 'u'];
      var IPAVOWELS = ['ɑ', 'ɐ', 'ɒ', 'æ', 'ɘ', 'ɛ', 'ɜ', 'ɞ', 'ɨ', 'ɪ', 'ʏ', 'ø', 'ɵ', 'œ', 'ɶ', 'ɤ', 'ʊ', 'ɯ', 'ʉ', 'ʌ', 'ɔ'];

      var resultLetters = [];
      var possibleLetters = [];

      if (type === 'consonants') {
        possibleLetters = useIPA ? [].concat(CONSONANTS).concat(IPACONSONANTS) : [].concat(CONSONANTS);
      } else if (type === 'vowels') {
        possibleLetters = useIPA ? [].concat(VOWELS).concat(IPAVOWELS) : [].concat(VOWELS);
      } else {
        console.log('Invalid Letter Type "' + type + '" Specified');
      }

      possibleLetters.forEach(function (letter) {
        if (_generator2.default.coinFlip()) {
          resultLetters.push(letter);
        }
      });

      // If no letters end up chosen, re-run the function.
      return resultLetters.length ? resultLetters : this.chooseLetters(type, useIPA);
    }
  }, {
    key: 'randomVowel',
    value: function randomVowel() {
      return _tools2.default.arrayRandom(this.vowels);
    }
  }, {
    key: 'randomConsonant',
    value: function randomConsonant() {
      return _tools2.default.arrayRandom(this.consonants);
    }
  }, {
    key: 'randomLetter',
    value: function randomLetter() {
      var _this2 = this;

      var wordToCheck = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      // If there is no word to check *or* consecutives of both vowels and consonants are allowed,
      // then just pick a random letter.
      if (!wordToCheck || this.allowConsecutiveConsonants && this.allowConsecutiveVowels) {
        if (_generator2.default.coinFlip()) {
          return this.randomVowel();
        } else {
          return this.randomConsonant();
        }

        // Otherwise if there is a word to check or one is disallowed, look at the rules.
      } else {
        var _ret = function () {
          var lastLetter = wordToCheck.slice(-1);

          // If consonants can connect but vowels can't, then...
          if (_this2.allowConsecutiveConsonants && !_this2.allowConsecutiveVowels) {
            if (_this2.vowels.some(function (letter) {
              return letter === lastLetter;
            })) {
              // If the last letter is a vowel, pick a consonant.
              return {
                v: _this2.randomConsonant()
              };
            }

            // Otherwise, either consonants can't connect and vowels can, so...
          } else if (!_this2.allowConsecutiveConsonants && _this2.allowConsecutiveVowels) {
            // If the last letter is a consonant, pick a vowel.
            if (_this2.consonants.some(function (letter) {
              return letter === lastLetter;
            })) {
              return {
                v: _this2.randomVowel()
              };
            }

            // Otherwise, neither consonants nor vowels can connect, so...
          } else {
            // If the last letter is a vowel, pick a consonant.
            if (_this2.vowels.some(function (letter) {
              return letter === lastLetter;
            })) {
              return {
                v: _this2.randomConsonant()
              };

              // Otherwise, the letter is a consonant, so a vowel must be picked.
            } else {
              return {
                v: _this2.randomVowel()
              };
            }
          }
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }

      // If nothing's returned by the time the end is reached, just get a random letter.
      return this.randomLetter();
    }
  }, {
    key: 'generateWord',
    value: function generateWord() {
      var minLength = arguments.length <= 0 || arguments[0] === undefined ? this.MINWORDLENGTH : arguments[0];
      var maxLength = arguments.length <= 1 || arguments[1] === undefined ? this.MAXWORDLENGTH : arguments[1];
      var capitalize = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      var numberOfLetters = _generator2.default.randomInt(minLength, maxLength);

      var result = capitalize ? this.randomLetter().toUpperCase() : this.randomLetter();

      for (var i = 0; i < numberOfLetters; i++) {
        result += this.randomLetter(result);
      }

      return result;
    }
  }, {
    key: 'chooseDescriptiveOrder',
    value: function chooseDescriptiveOrder() {
      var possibleOrders = ['adverb-adjective-noun', 'adjective-adverb-noun', 'adjective-noun-adverb', 'adverb-noun-adjective', 'noun-adjective-adverb', 'noun-adverb-adjective'];

      return _tools2.default.arrayRandom(possibleOrders);
    }
  }, {
    key: 'chooseSentenceOrder',
    value: function chooseSentenceOrder() {
      var possibleOrders = ['subject-verb-object', 'verb-subject-object', 'verb-object-subject', 'object-verb-subject', 'object-subject-verb', 'subject-object-verb'];

      return _tools2.default.arrayRandom(possibleOrders);
    }
  }, {
    key: 'generateModifiedNoun',
    value: function generateModifiedNoun() {
      var noun = this.randomNoun;
      var adjective = _generator2.default.coinFlip() ? this.randomAdjective : '';
      var adverb = adjective && _generator2.default.coinFlip() ? this.randomAdverb : '';

      switch (this.descriptiveOrder) {
        case 'adverb-adjective-noun':
          {
            return (adverb ? adverb + ' ' : '') + (adjective ? adjective + ' ' : '') + noun;
            break;
          }
        case 'adjective-adverb-noun':
          {
            return (adjective ? adjective + ' ' : '') + (adverb ? adverb + ' ' : '') + noun;
            break;
          }
        case 'adjective-noun-adverb':
          {
            return (adjective ? adjective + ' ' : '') + noun + (adverb ? ' ' + adverb : '');
            break;
          }
        case 'adverb-noun-adjective':
          {
            return (adverb ? adverb + ' ' : '') + noun + (adjective ? ' ' + adjective : '');
            break;
          }
        case 'noun-adjective-adverb':
          {
            return noun + (adjective ? ' ' + adjective : '') + (adverb ? ' ' + adverb : '');
            break;
          }
        case 'noun-adverb-adjective':
          {
            return noun + (adverb ? ' ' + adverb : '') + (adjective ? ' ' + adjective : '');
            break;
          }
        default:
          {
            return 'error';
            break;
          }
      }
    }
  }, {
    key: 'generateSentence',
    value: function generateSentence() {
      var punctuation = arguments.length <= 0 || arguments[0] === undefined ? '.' : arguments[0];

      var subject = this.generateModifiedNoun();
      var verb = this.randomVerb;
      var object = this.generateModifiedNoun();

      switch (this.sentenceOrder) {
        case 'subject-verb-object':
          {
            return _tools2.default.capitalize(subject) + ' ' + verb + ' ' + object + punctuation;
            break;
          }
        case 'verb-subject-object':
          {
            return _tools2.default.capitalize(verb) + ' ' + subject + ' ' + object + punctuation;
            break;
          }
        case 'verb-object-subject':
          {
            return _tools2.default.capitalize(verb) + ' ' + object + ' ' + subject + punctuation;
            break;
          }
        case 'object-verb-subject':
          {
            return _tools2.default.capitalize(object) + ' ' + verb + ' ' + subject + punctuation;
            break;
          }
        case 'object-subject-verb':
          {
            return _tools2.default.capitalize(object) + ' ' + subject + ' ' + verb + punctuation;
            break;
          }
        case 'subject-object-verb':
          {
            return _tools2.default.capitalize(subject) + ' ' + object + ' ' + verb + punctuation;
            break;
          }
        default:
          {
            return 'error';
            break;
          }
      }
    }
  }, {
    key: 'nouns',
    get: function get() {
      return this.lex.words.nouns;
    }
  }, {
    key: 'verbs',
    get: function get() {
      return this.lex.words.verbs;
    }
  }, {
    key: 'adjectives',
    get: function get() {
      return this.lex.words.adjectives;
    }
  }, {
    key: 'adpositions',
    get: function get() {
      return this.lex.words.adpositions;
    }
  }, {
    key: 'adverbs',
    get: function get() {
      return this.lex.words.adverbs;
    }
  }, {
    key: 'pronouns',
    get: function get() {
      return this.lex.words.pronouns;
    }
  }, {
    key: 'randomNoun',
    get: function get() {
      return _tools2.default.arrayRandom(this.nouns);
    }
  }, {
    key: 'randomVerb',
    get: function get() {
      return _tools2.default.arrayRandom(this.verbs);
    }
  }, {
    key: 'randomAdjective',
    get: function get() {
      return _tools2.default.arrayRandom(this.adjectives);
    }
  }, {
    key: 'randomAdposition',
    get: function get() {
      return _tools2.default.arrayRandom(this.adpositions);
    }
  }, {
    key: 'randomAdverb',
    get: function get() {
      return _tools2.default.arrayRandom(this.adverbs);
    }
  }, {
    key: 'randomPronoun',
    get: function get() {
      return _tools2.default.arrayRandom(this.pronouns);
    }
  }]);

  return Language;
}(_generator2.default);

exports.default = Language;
},{"../generator":1,"../tools":5,"./linguistics/lexicon":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generator = require('../../generator');

var _generator2 = _interopRequireDefault(_generator);

var _language = require('../language');

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lexicon = function () {
  function Lexicon(language) {
    _classCallCheck(this, Lexicon);

    this.lang = language;

    this.words = {};
    this.words.nouns = this.generateWordList(30);
    this.words.verbs = this.generateWordList(30);
    this.words.adjectives = this.generateWordList(20);
    this.words.adpositions = this.generateWordList(3, 20);
    // this.words.adverbs = this.generateWordList(3, 500);
    this.words.adverbs = this.generateWordList(3);
    this.words.pronouns = this.generateWordList(1, 10);
  }

  _createClass(Lexicon, [{
    key: 'generateUniqueWord',
    value: function generateUniqueWord() {
      var _this = this;

      var list = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      // Generate a word not already in this.dictionary{}.
      var word = this.lang.generateWord(this.lang.MINWORDLENGTH, this.lang.MAXWORDLENGTH);
      var exists = false;

      // Iterate over each part of speech already in the dictonary
      Object.keys(this.words).forEach(function (key) {
        // If the part of speech does contain the word...
        if (_this.words[key].some(function (existingWord) {
          return existingWord == word;
        })) {
          // then set exists.
          exists = true;
        }
      });

      // If a list is provided,
      if (list !== []) {
        // Make sure the generated word isn't already in there.
        if ([].concat(_toConsumableArray(list)).some(function (existingWord) {
          return existingWord == word;
        })) {
          // then set exists.
          exists = true;
        }
      }

      // If the word doesn't exist, return it, otherwise, repeat the function.
      return !exists ? word : this.generateUniqueWord(this.lang.MINWORDLENGTH, this.lang.MAXWORDLENGTH);
    }

    // FIXME: Don't keep maxLength's default value at 40!

  }, {
    key: 'generateWordList',
    value: function generateWordList() {
      var minLength = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
      var maxLength = arguments.length <= 1 || arguments[1] === undefined ? 40 : arguments[1];

      // Generate an array of unique words.
      var listLength = _generator2.default.randomInt(minLength, maxLength);
      var result = [];

      for (var i = 0; i < listLength; i++) {
        // push the list so this.generateUniqueWord() won't make doubles for this list.
        result.push(this.generateUniqueWord(result));
      }

      return result.sort();
    }
  }, {
    key: 'numNouns',
    get: function get() {
      return this.words.nouns.length;
    }
  }, {
    key: 'numVerbs',
    get: function get() {
      return this.words.verbs.length;
    }
  }, {
    key: 'numAdjectives',
    get: function get() {
      return this.words.adjectives.length;
    }
  }, {
    key: 'numAdpositions',
    get: function get() {
      return this.words.adpositions.length;
    }
  }, {
    key: 'numAdverbs',
    get: function get() {
      return this.words.adverbs.length;
    }
  }, {
    key: 'numPronouns',
    get: function get() {
      return this.words.pronouns.length;
    }
  }, {
    key: 'length',
    get: function get() {
      var _this2 = this;

      var number = 0;
      // Iterate over each part of speech already in the dictonary
      Object.keys(this.words).forEach(function (key) {
        return number += _this2.words[key].length;
      });
      return number;
    }
  }]);

  return Lexicon;
}();

exports.default = Lexicon;
},{"../../generator":1,"../language":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generator = require('../generator');

var _generator2 = _interopRequireDefault(_generator);

var _language = require('./language');

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var World = function (_Generator) {
  _inherits(World, _Generator);

  function World(seed) {
    _classCallCheck(this, World);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(World).call(this, seed));

    _this.lang = new _language2.default(seed);

    _this.name = _this.lang.generateWord(4, 8, true);
    return _this;
  }

  return World;
}(_generator2.default);

exports.default = World;
},{"../generator":1,"./language":2}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generator = require('./generator');

var _generator2 = _interopRequireDefault(_generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tools = function () {
  function Tools() {
    _classCallCheck(this, Tools);
  }

  _createClass(Tools, null, [{
    key: 'capitalize',
    value: function capitalize(string) {
      return string.substr(0, 1).toUpperCase() + string.substr(1);
    }
  }, {
    key: 'arrayRandom',
    value: function arrayRandom(array) {
      return array[_generator2.default.randomInt(0, array.length)];
    }
  }]);

  return Tools;
}();

exports.default = Tools;
},{"./generator":1}],6:[function(require,module,exports){
'use strict';

var _generator = require('./classes/generator');

var _generator2 = _interopRequireDefault(_generator);

var _world = require('./classes/generators/world');

var _world2 = _interopRequireDefault(_world);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myWorld = new _world2.default(_generator2.default.randomInt(0, 10));
console.log(myWorld.lang.name);
console.log("Consonants:", myWorld.lang.consonants);
console.log("Vowels:", myWorld.lang.vowels);
console.log("Allow Consecutive Consonants:", myWorld.lang.allowConsecutiveConsonants);
console.log("Allow Consecutive Vowels:", myWorld.lang.allowConsecutiveVowels);
console.log(myWorld.lang.lex.numNouns, "Nouns:", myWorld.lang.nouns);
console.log(myWorld.lang.lex.numVerbs, "Verbs:", myWorld.lang.verbs);
console.log(myWorld.lang.lex.numAdjectives, "Adjectives:", myWorld.lang.adjectives);
console.log(myWorld.lang.lex.numAdpositions, "Adpositions:", myWorld.lang.adpositions);
console.log(myWorld.lang.lex.numAdverbs, "Adverbs:", myWorld.lang.adverbs);
console.log(myWorld.lang.lex.numPronouns, "Pronouns:", myWorld.lang.pronouns);
console.log(myWorld.lang.lex.length, "Total Words");
console.log("Descriptive Order:\n", myWorld.lang.descriptiveOrder);
console.log("Sentence Order:\n", myWorld.lang.sentenceOrder);
console.log("Example Sentence:\n", myWorld.lang.generateSentence());
// console.log(myWorld.seedValue, myWorld.name, myWorld.lang.name, myWorld.lang.seedValue);

// myWorld.seedValue = 11;
// myWorld.MakeName('new wurld');
// myWorld.lang.seedValue = 18;
// myWorld.lang.MakeName('new lang');
// console.log(myWorld.seedValue, myWorld.name, myWorld.lang.name, myWorld.lang.seedValue);
},{"./classes/generator":1,"./classes/generators/world":4}]},{},[6]);
