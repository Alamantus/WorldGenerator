const seedrandom = require('seedrandom');
import Tools from './tools';

export default class Generator {
  constructor(seed = this.randomSeed()) {
    this.seedValue = seed.toString();
    this.rng = seedrandom(this.seedValue);
  }

  dieRoll(sides) {
    // Returns true or false.
    // Math.seedrandom(this.seed);
  	return (Math.floor(this.rng() * sides) == 0);
  }
  coinFlip() {
    // Returns true or false.
    // Math.seedrandom(this.seed);
    return this.dieRoll(2);
  }
  randomInt(min, max) {
    return Tools.randomInt(min, max, this.rng);
  }
  randomDeviation(value) {
    return this.randomInt(-value, value);
  }
  arrayRandom(array) {
    return Tools.arrayRandom(array, this.rng);
  }
  randomSeed() {
    // seedrandom() is the generator function, so to run that function,
    // you need to run (seedrandom())() to run it anonymously.
    return (seedrandom())().toString().substr(2, 10);
  }
}
