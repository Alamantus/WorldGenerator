import Generator from '../../generator';
import Language from '../language';

export default class Lexicon {
  constructor(language) {
    this.lang = language;

    this.words = {};
    this.words.nouns = this.generateWordList(30);
    this.words.verbs = this.generateWordList(30, 40);
    this.words.adjectives = this.generateWordList(20, 40);
    this.words.adpositions = this.generateWordList(3, 20);
    this.words.adverbs = this.generateWordList(3, 500);
    this.words.pronouns = this.generateWordList(1, 10);
  }

  get numNouns() {
    return this.words.nouns.length;
  }

  get numVerbs() {
    return this.words.verbs.length;
  }

  get numAdjectives() {
    return this.words.adjectives.length;
  }

  get numPrepositions() {
    return this.words.adpositions.length;
  }

  get numAdverbs() {
    return this.words.adverbs.length;
  }

  get numPronouns() {
    return this.words.pronouns.length;
  }

  generateUniqueWord() {
    // Generate a word not already in this.dictionary{}.
    const word = this.lang.generateWord(this.lang.MINWORDLENGTH, this.lang.MAXWORDLENGTH);
    let exists = false;

    // Iterate over each part of speech already in the dictonary
    Object.keys(this.words).forEach((key) => {
      // If the part of speech does contain the word...
      if (this.words[key].some(existingWord => existingWord == word)) {
        // then set exists.
        exists = true;
      }
    });

    // If the word doesn't exist, return it, otherwise, repeat the function.
    return (!exists) ? word : this.generateUniqueWord(this.lang.MINWORDLENGTH, this.lang.MAXWORDLENGTH);
  }

  generateWordList(minLength = 1, maxLength = 1000) {
    // Generate an array of unique words.
    const listLength = Generator.randomInt(minLength, maxLength);
    const result = [];

    for (let i = 0; i < listLength; i++) {
      result.push(this.generateUniqueWord());
    }

    return result.sort();
  }
}
