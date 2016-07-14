export default class Generator {
  constructor(seed = 2) {
    this.seedValue = seed;
  }

  static dieRoll(sides) {
    // Returns true or false.
    // Math.seedrandom(this.seed);
  	return (Math.floor(Math.random() * sides) == 0);
  }
  static coinFlip() {
    // Returns true or false.
    // Math.seedrandom(this.seed);
    return this.dieRoll(2);
  }
  static randomInt(min, max) {
    // Returns a random number between min (inclusive) and max (exclusive).
    // Math.seedrandom(this.seed);
    min = Math.floor(min);
    max = Math.floor(max);
    const value = Math.floor(Math.random() * (max - min)) + min;
    return (value < max) ? value : max - 1;
  }
  static stringIsInArray(str, strArray) {
    // Just use Array.prototype.some() like below.
    return strArray.some(arrVal => str === arrVal);
  }
}
