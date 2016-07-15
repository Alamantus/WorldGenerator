import Tools from './classes/tools';
import World from './classes/generators/world';

const testWorld = new World('test seed');

// testBiomes(testWorld);
testPerson(testWorld.countries[0].population[0]);
testCountry(testWorld.countries[0]);
// testLanguage(testWorld.countries[0].languages[0]);

function testLanguage(language) {
  console.log(language.name, '- Seed:', `'${language.seedValue}'`);
  console.log('Consonants:', language.consonants);
  console.log('Vowels:', language.vowels);
  console.log('Allow Consecutive Consonants:', language.allowConsecutiveConsonants);
  console.log('Allow Consecutive Vowels:', language.allowConsecutiveVowels);
  console.log(language.lex.numNouns, 'Nouns:', language.nouns);
  console.log(language.lex.numVerbs, 'Verbs:', language.verbs);
  console.log(language.lex.numAdjectives, 'Adjectives:', language.adjectives);
  console.log(language.lex.numAdpositions, 'Adpositions:', language.adpositions);
  console.log(language.lex.numAdverbs, 'Adverbs:', language.adverbs);
  console.log(language.lex.numPronouns, 'Pronouns:', language.pronouns);
  console.log(language.lex.length, 'Total Words');
  console.log('Descriptive Order:\n', language.descriptiveOrder);
  console.log('Sentence Order:\n', language.sentenceOrder);
  console.log('Example Sentence:\n', language.generateSentence());
  console.log();
}

function testBiomes(world) {
  console.log(world.name, '- Seed:', `'${world.seedValue}'`);
  console.log('Neutral Biomes:', world.existingBiomes.neutral);
  console.log('Hostile Biomes:', world.existingBiomes.hostile);
  console.log(world.possibleBiomes.length, 'Total Biomes:');
  console.log();
}

function testCountry(country) {
  console.log(country.name, '- Seed:', `'${country.seedValue}'`);
  console.log('Biome:', country.biome);
  console.log('Life Expectancy:', country.lifeExpectancy);
  console.log();
}

function testPerson(person) {
  console.log(person.fullName, '- Seed:', `'${person.seedValue}'`);
  console.log('Age:', person.age);
  console.log('Understands Self As:', `'${person.thing.identity}'`);
  console.log('Lives in:', person.location.scope.name);
  console.log('Languages known:', person.knownLanguages[0].name);
  console.log('Current Location:', `(${person.location.x}, ${person.location.y})`);
  console.log();
}
