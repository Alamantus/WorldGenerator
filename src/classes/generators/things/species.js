import Generator from '../../generator';

export default class Species extends Generator {
  // Species exist relative to a World, which has many Species.
  constructor(world, {
    isSentient,

    minLifeLength = 1,
    maxLifeLength = 200,
    minSentientLife = 25,
    maxSentientLife = 125,

    // The multiplier for determining "half" of life expectancy.
    halfLifeFactor = 0.5,

    // The multiplier for the range halfLife +/-maturityDeviation within which maturity comes.
    maturityDeviationFactor = 0.3,

    minHeight = 0,
    maxHeight = 700,
    minSentientHeight = 50,
    maxSentientHeight = 500,

    // The multiplier for deviation from average height. Default = 10% of avg.
    heightDeviationFactor = 0.1
  } = {}) {
    super(world.seedValue);

    this.world = world;

    // Generate a name from the world's first language.
    this.name = this.world.defaultLanguage.generateWord(undefined, undefined, true);

    // 10% chance of sentience. Sentience affects life expectancy, height, etc.
    this.isSentient = isSentient || this.dieRoll(10);

    this.MINLIFELENGTH = (this.isSentient) ? minSentientLife : minLifeLength;
    this.MAXLIFELENGTH = (this.isSentient) ? maxSentientLife : maxLifeLength;
    this.lifeExpectancy = this.randomInt(this.MINLIFELENGTH, this.MAXLIFELENGTH);

    // ageOfMaturity is the age at which the species max avg height is reached.
    const halfLife = this.lifeExpectancy * halfLifeFactor;
    const maturityDeviation = this.lifeExpectancy * maturityDeviationFactor;
    this.ageOfMaturity = halfLife + this.randomDeviation(maturityDeviation);

    // Height in centimeters, rounded to nearest int because cm is pretty small anyway
    this.MINHEIGHT = (this.isSentient) ? minSentientHeight : minHeight;
    this.MAXHEIGHT = (this.isSentient) ? maxSentientHeight : maxHeight;
    this.averageHeight = this.randomInt(this.MINHEIGHT, this.MAXHEIGHT);
    this.heightDeviation = Math.round(this.averageHeight * heightDeviationFactor);
  }

  getAgeName(age) {
    const ageNames = [
      'very young',
      'young',
      'young adult',
      'adult',
      'late adult',
      'middle-aged',
      'mature',
      'aging',
      'old',
      'very old',
      'ancient'
    ];
    let result = '';

    for (let i = 0; i < ageNames.length; i++) {
      if (age <= (this.lifeExpectancy * ((i + 1) / ageNames.length))) {
        result = ageNames[i];
        break;
      }
    }

    return result;
  }

  generateHeightAtAge(age) {
    const percentOfMaturity = age / this.ageOfMaturity;
    const avgHeightAtAge = this.averageHeight * ((percentOfMaturity < 1) ? percentOfMaturity : 1);
    return Math.round(avgHeightAtAge + this.randomDeviation(this.heightDeviation));
  }
}
