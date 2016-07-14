import Generator from '../generator';
import Language from './language';

export default class World extends Generator {
  constructor(seed) {
    super(seed);

    this.lang = new Language(seed);

    this.name = this.lang.generateWord(4, 8, true);
  }
}
