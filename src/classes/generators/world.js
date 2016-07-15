import Generator from '../generator';
import Country from './locations/country';

export default class World extends Generator {
  constructor(seed, minBiomes = 3) {
    super(seed);

    this.existingBiomes = this.generateBiomes(minBiomes);

    this.countries = [new Country(this)];

    // Generate the name from the first country's native language.
    this.name = this.countries[0].languages[0].generateWord(4, 8, true);
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
