export default class Tools {
  static capitalize(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  }

  static aOrAn(str) {
    return (
      Tools.inArray(['a', 'e', 'i', 'o', 'u'], str.substr(0, 1).toLowerCase())
      || Tools.inArray(['A', 'E', 'I', 'O', 'U'], str.substr(0, 1).toUpperCase())
    ) ? 'an' : 'a';
  }

  static randomInt(min, max, rng = Math.random) {
    // Returns a random number between min (inclusive) and max (exclusive).
    // Math.seedrandom(this.seed);
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(rng() * (max - min)) + min;
  }

  static arrayRandom(arr, rng = Math.random) {
    return arr[Tools.randomInt(0, arr.length, rng)]
  }

  static inArray(arr, elem) {
    return arr.some(item => item == elem);
  }
}
