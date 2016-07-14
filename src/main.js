import Generator from './classes/generator';
import World from './classes/generators/world';

const myWorld = new World(Generator.randomInt(0, 10));
console.log(myWorld.lang.name);
console.log("Consonants:", myWorld.lang.consonants);
console.log("Vowels:", myWorld.lang.vowels);
console.log(myWorld.lang.lex.numNouns, "Nouns:", myWorld.lang.nouns);
// console.log(myWorld.seedValue, myWorld.name, myWorld.lang.name, myWorld.lang.seedValue);

// myWorld.seedValue = 11;
// myWorld.MakeName('new wurld');
// myWorld.lang.seedValue = 18;
// myWorld.lang.MakeName('new lang');
// console.log(myWorld.seedValue, myWorld.name, myWorld.lang.name, myWorld.lang.seedValue);
