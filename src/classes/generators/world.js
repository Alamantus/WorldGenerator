import Generator from '../generator';
import Language from './linguistics/language';
import Species from './things/living/species';
import Country from './locations/country';

export default class World extends Generator {
  constructor(seed, {
    minBiomes = 3,
    minLifeforms = 3,
    minSpeciesPerLifeform = 10,
    maxSpeciesPerLifeform = 100
  } = {}) {
    super(seed);

    // Create a "default" language so you can name things.
    this.defaultLanguage = new Language(this.seedValue);

    this.name = this.defaultLanguage.generateWord(4, 8, true);

    this.existingBiomes = this.generateBiomes(minBiomes);

    this.existingLifeforms = this.generateLifeforms(minLifeforms);

    this.existingSpecies = this.generateSpecies(minSpeciesPerLifeform, maxSpeciesPerLifeform);
    this.dominantSpecies = this.arrayRandom(this.sentientSpecies);

    this.countries = [new Country(this)];
  }

  get possibleBiomes() {
    return [...this.existingBiomes.neutral, ...this.existingBiomes.hostile];
  }

  get sentientSpecies() {
    let result = [];

    this.existingSpecies.forEach((species) => {
      if (species.isSentient) result.push(species);
    });

    return result;
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

    return ([...result.neutral, ...result.hostile].length >= minBiomes) ? result : this.generateBiomes(minBiomes);
  }

  generateLifeforms(minTypes = 3) {
    // Return a "shufled" array of lifeforms.
    const possibleTypes = [
      'plantoid',
      'mammalian',
      'reptilian',
      'avian',
      'insectoid'
    ];
    const baseLength = possibleTypes.length;
    for (let i = 0; i < baseLength; i++) {
      for (let j = 0; j < baseLength; j++) {
        if (i !== j) {
          possibleTypes.push(possibleTypes[i] + '-' + possibleTypes[j]);
        }
      }
    }

    let result = [];

    possibleTypes.forEach((type) => {
      if (this.coinFlip()) {
        result.push(type);
      }
    });

    return (result.length >= minTypes) ? this.arrayShuffle(result, 5, true) : this.generateLifeforms(minTypes);
  }

  generateSpecies(minPerLifeform = 10, maxPerLifeform = 100) {
    const forcedSentience = this.randomInt(0, this.existingLifeforms.length);
    let result = [];

    this.existingLifeforms.forEach((type, index) => {
      const numberOfSpecies = this.randomInt(minPerLifeform, maxPerLifeform);
      for (let i = 0; i < numberOfSpecies; i++) {
        if (index === forcedSentience && i === 0) {
          // Force the first in the "shuffled" list to be sentient.
          result.push(new Species(this, type, { isSentient: true }));
        } else {
          result.push(new Species(this, type));
        }
      }
    });

    return result;
  }
}
