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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lexicon = function () {
  function Lexicon(language) {
    _classCallCheck(this, Lexicon);

    this.lang = language;

    this.words = {};
    this.words.nouns = this.generateWordList(30);
    this.words.verbs = this.generateWordList(30, 40);
    this.words.adjectives = this.generateWordList(20, 40);
    this.words.adpositions = this.generateWordList(3, 20);
    this.words.adverbs = this.generateWordList(3, 500);
    this.words.pronouns = this.generateWordList(1, 10);
  }

  _createClass(Lexicon, [{
    key: 'generateUniqueWord',
    value: function generateUniqueWord() {
      var _this = this;

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

      // If the word doesn't exist, return it, otherwise, repeat the function.
      return !exists ? word : this.generateUniqueWord(this.lang.MINWORDLENGTH, this.lang.MAXWORDLENGTH);
    }
  }, {
    key: 'generateWordList',
    value: function generateWordList() {
      var minLength = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
      var maxLength = arguments.length <= 1 || arguments[1] === undefined ? 1000 : arguments[1];

      // Generate an array of unique words.
      var listLength = _generator2.default.randomInt(minLength, maxLength);
      var result = [];

      for (var i = 0; i < listLength; i++) {
        result.push(this.generateUniqueWord());
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
    key: 'numPrepositions',
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
  }]);

  return Lexicon;
}();

exports.default = Lexicon;