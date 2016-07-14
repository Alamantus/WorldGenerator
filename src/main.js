import Generator from './classes/generator';
import World from './classes/generators/world';

const myWorld = new World(Generator.randomInt(0, 10));
console.log(myWorld.lang.name);
console.log("Consonants:", myWorld.lang.consonants);
console.log("Vowels:", myWorld.lang.vowels);
console.log(myWorld.lang.lex.numNouns, "Nouns:", myWorld.lang.nouns);
console.log(myWorld.lang.lex.numVerbs, "Verbs:", myWorld.lang.verbs);
console.log(myWorld.lang.lex.numAdjectives, "Adjectives:", myWorld.lang.adjectives);
console.log(myWorld.lang.lex.numAdpositions, "Adpositions:", myWorld.lang.adpositions);
console.log(myWorld.lang.lex.numAdverbs, "Adverbs:", myWorld.lang.adverbs);
console.log(myWorld.lang.lex.numPronouns, "Pronouns:", myWorld.lang.pronouns);
console.log("Allow Consecutive Consonants:", myWorld.lang.allowConsecutiveConsonants);
console.log("Allow Consecutive Vowels:", myWorld.lang.allowConsecutiveVowels);
// console.log(myWorld.seedValue, myWorld.name, myWorld.lang.name, myWorld.lang.seedValue);

// myWorld.seedValue = 11;
// myWorld.MakeName('new wurld');
// myWorld.lang.seedValue = 18;
// myWorld.lang.MakeName('new lang');
// console.log(myWorld.seedValue, myWorld.name, myWorld.lang.name, myWorld.lang.seedValue);
