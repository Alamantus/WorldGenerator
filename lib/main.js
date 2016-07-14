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
console.log(myWorld.lang.lex.numNouns, "Nouns:", myWorld.lang.nouns);
console.log(myWorld.lang.lex.numVerbs, "Verbs:", myWorld.lang.verbs);
console.log(myWorld.lang.lex.numAdjectives, "Adjectives:", myWorld.lang.adjectives);
console.log(myWorld.lang.lex.numAdpositions, "Adpositions:", myWorld.lang.adpositions);
console.log(myWorld.lang.lex.numAdverbs, "Adverbs:", myWorld.lang.adverbs);
console.log(myWorld.lang.lex.numPronouns, "Pronouns:", myWorld.lang.pronouns);
console.log("Allow Consecutive Consonants:", myWorld.lang.allowConsecutiveConsonants);
console.log("Allow Consecutive Vowels:", myWorld.lang.allowConsecutiveVowels);
// console.log(myWorld.seedValue, myWorld.name, myWorld.lang.name, myWorld.lang.seedValue);

// myWorld.seedValue = 11;
// myWorld.MakeName('new wurld');
// myWorld.lang.seedValue = 18;
// myWorld.lang.MakeName('new lang');
// console.log(myWorld.seedValue, myWorld.name, myWorld.lang.name, myWorld.lang.seedValue);