import Generator from './generator';

export default class Tools {
  static capitalize(string) {
    return string.substr(0, 1).toUpperCase() + string.substr(1);
  }

  static arrayRandom(array) {
    return array[Generator.randomInt(0, array.length)]
  }
}
