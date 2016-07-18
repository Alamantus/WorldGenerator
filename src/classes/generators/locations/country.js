import Generator from '../../generator';
import Language from '../linguistics/language';
import Person from '../things/living/person';

export default class Country extends Generator {
  constructor(world, { minLifeLength = 25, maxLifeLength = 125 } = {}) {
    super(world.seedValue);
    this.world = world;

    // FIXME: When smaller increments like "Region" or something exist, make this an array of possible biomes.
    this.biome = this.arrayRandom(this.world.possibleBiomes);
    // FIXME: Remove when sure it's not referenced.
    this.lifeExpectancy = 1;

    // The country's native language is the first in the array.
    // FIXME: Make a function that generates a possibility for multiple languages.
    this.languages = [this.world.defaultLanguage, new Language(this.seedValue)];

    // Generate a name using the country's native language.
    this.name = this.languages[0].generateWord(4, 8, true);

    this.population = [new Person(this, this.world.dominantSpecies)];
  }
}
