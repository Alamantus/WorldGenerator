import Generator from '../generator';
import Lexicon from './linguistics/lexicon';

export default class Language extends Generator {
  constructor(seed, useIPA = false, minWordLength = 1, maxWordLength = 15) {
    super(seed);

    this.allowConsecutiveConsonants = Generator.dieRoll(6);
    this.allowConsecutiveVowels = Generator.dieRoll(4);
    this.consonants = this.chooseLetters('consonants', useIPA);
    this.vowels = this.chooseLetters('vowels', useIPA);
    this.descriptiveOrder = this.chooseDescriptiveOrder();
    this.sentenceOrder = this.chooseSentenceOrder();
    this.hasAdverbs = Generator.coinFlip();
    this.hasPronouns = Generator.coinFlip();
    this.hasArticles = Generator.coinFlip();
    this.hasPossessive = Generator.coinFlip();
    this.allowMergeWords = Generator.dieRoll(10);
    this.MINWORDLENGTH = minWordLength;
    this.MAXWORDLENGTH = maxWordLength;
    this.lex = new Lexicon(this);

    this.name = this.generateWord(3, 8, true);
  }

  get nouns() {
    return this.lex.words.nouns;
  }

  get verbs() {
    return this.lex.words.verbs;
  }

  get adjectives() {
    return this.lex.words.adjectives;
  }

  get adpositions() {
    return this.lex.words.adpositions;
  }

  get adverbs() {
    return this.lex.words.adverbs;
  }

  get pronouns() {
    return this.lex.words.pronouns;
  }

  chooseLetters(type, useIPA = false) {
    const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    const IPACONSONANTS = ['\u0299', '\u03B2', '\u0255', '\u00E7', '\u0256', '\u00F0', '\u02A4', '\u025F', '\u0261', '\u0262', '\u0266', '\u0267', '\u0127', '\u0265', '\u029C', '\u029D', '\u026D', '\u026C', '\u026B', '\u026E', '\u029F', '\u0271', '\u0270', '\u014B', '\u0273', '\u0272', '\u0274', '\u0278', '\u03B8', '\u0279', '\u027A', '\u027E', '\u027B', '\u0280', '\u0281', '\u027D', '\u0282', '\u0283', '\u0288', '\u02A7', '\u028B', '\u2C71', '\u0263', '\u028D', '\u03C7', '\u028E', '\u0291', '\u0290', '\u0292', '\u0294', '\u02A1', '\u0295', '\u02A2'];
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    const IPAVOWELS = ['\u0251', '\u0250', '\u0252', '\u00E6', '\u0258', '\u025B', '\u025C', '\u025E', '\u0268', '\u026A', '\u028F', '\u00F8', '\u0275', '\u0153', '\u0276', '\u0264', '\u028A', '\u026F', '\u0289', '\u028C', '\u0254'];

  	let resultLetters = [];
    let possibleLetters = [];

    if (type === 'consonants') {
  		possibleLetters = (useIPA) ? [...CONSONANTS].concat(IPACONSONANTS) : [...CONSONANTS];
  	} else if (type === 'vowels') {
  		possibleLetters = (useIPA) ? [...VOWELS].concat(IPAVOWELS) : [...VOWELS];
  	} else {
  		console.log(`Invalid Letter Type "${type}" Specified`);
  	}

    possibleLetters.forEach((letter) => {
      if (Generator.coinFlip()) {
        resultLetters.push(letter);
      }
    });

  	return resultLetters;
  }

  randomVowel() {
    return this.vowels[Generator.randomInt(0, this.vowels.length)];
  }

  randomConsonant() {
    return this.consonants[Generator.randomInt(0, this.consonants.length)];
  }

  randomLetter(wordToCheck = '') {
    // If there is no word to check *or* consecutives of both vowels and consonants are allowed,
    // then just pick a random letter.
    if (!wordToCheck || (this.allowConsecutiveConsonants && this.allowConsecutiveVowels)) {
      if (Generator.coinFlip()) {
        return this.randomVowel();
      } else {
        return this.randomConsonant();
      }

    // Otherwise if there is a word to check or one is disallowed, look at the rules.
    } else {
      let lastLetter = wordToCheck.slice(-1);

      // If consonants can connect but vowels can't, then...
      if (this.allowConsecutiveConsonants && !this.allowConsecutiveVowels) {
    		if (this.vowels.some(letter => letter === lastLetter)) {
          // If the last letter is a vowel, pick a consonant.
    			return this.randomConsonant();
    		}

      // Otherwise, either consonants can't connect and vowels can or neither can, so...
    	} else {
        // If the last letter is a consonant, pick a vowel.
    		if (this.consonants.some(letter => letter === lastLetter)) {
    			return this.randomVowel();
        } else {
          return this.randomConsonant();
    		}
    	}
    }

    // If nothing's returned by the time the end is reached, just get a random letter.
    // return this.randomLetter();
  }

  generateWord(minLength = this.MINWORDLENGTH, maxLength = this.MAXWORDLENGTH, capitalize = false) {
    const numberOfLetters = Generator.randomInt(minLength, maxLength);

    let result = (capitalize) ? this.randomLetter().toUpperCase() : this.randomLetter();

    for (var i = 0; i < numberOfLetters; i++) {
      result += this.randomLetter(result);
    }

    return result;
  }

  chooseDescriptiveOrder() {
    const possibleOrders = [
      'adverb-adjective-noun',
      'adjective-adverb-noun',
      'adjective-noun-adverb',
      'adverb-noun-adjective',
      'noun-adjective-adverb',
      'noun-adverb-adjective'
    ];

    return possibleOrders[Generator.randomInt(0, possibleOrders.length)];
  }

  chooseSentenceOrder() {
    const possibleOrders = [
      'subject-verb-object',
      'verb-subject-object',
      'verb-object-subject',
      'object-verb-subject',
      'object-subject-verb',
      'subject-object-verb'
    ];

    return possibleOrders[Generator.randomInt(0, possibleOrders.length)];
  }
}
