import Generator from '../generator';
import Language from './linguistics/language';
import Species from './things/species';
import Country from './locations/country';

export default class World extends Generator {
  constructor(seed, minBiomes = 3) {
    super(seed);

    // Create a "default" language so you can name things.
    this.defaultLanguage = new Language(this.seedValue);

    this.name = this.defaultLanguage.generateWord(4, 8, true);

    this.existingBiomes = this.generateBiomes(minBiomes);

    // Force sencience upon the first species.
    this.existingSpecies = [new Species(this, { isSentient: true })];

    this.countries = [new Country(this)];
  }

  get possibleBiomes() {
    return [...this.existingBiomes.neutral, ...this.existingBiomes.hostile];
  }

  generateBiomes(minBiomes = 3) {
    const neutralBiomes = [
      'plain',
      'hills',
      'river',
      'lake',
      'mountain',
      'island',
      'savanna',
      'valley',
      'prairie'
    ];
    const hostileBiomes = [
      'volcano',
      'ocean',
      'desert',
      'tundra',
      'scrublands',
      'canyon',
      'jungle',
      'rainforest'
    ];

    let result = {
      neutral: [],
      hostile: []
    };

    for (let i = 0; i < neutralBiomes.length; i++) {
      if (this.coinFlip()) {
        result.neutral.push(neutralBiomes[i]);
      }
    }

    for (let i = 0; i < hostileBiomes.length; i++) {
      if (this.coinFlip()) {
        result.hostile.push(hostileBiomes[i]);
      }
    }

    return ([...result.neutral, ...result.hostile].length > minBiomes) ? result : this.generateBiomes(minBiomes);
  }
}
