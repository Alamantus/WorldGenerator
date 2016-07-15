const seedrandom = require('seedrandom');

export default class Generator {
  constructor(seed = Generator.randomSeed()) {
    this.seedValue = seed.toString();
    seedrandom(this.seedValue, { global: true });
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
    return Math.floor(Math.random() * (max - min)) + min;
  }
  static randomSeed() {
    // seedrandom() is the generator function, so to run that function,
    // you need to run (seedrandom())() to run it anonymously.
    return (seedrandom())().toString().substr(2, 10);
  }
}
