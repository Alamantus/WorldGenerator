import Thing from '../thing';
import Tools from '../../../tools'

export default class Person extends Thing {
  // FIXME: Rename `scope` when the smallest iteration (village? city?) is created.
  constructor(scope, species, { x = 0, y = 0} = {}) {
    super(scope, {
      x: x,
      y: y,
      type: 'Person',
      status: 'Alive'
    });

    // FIXME: Make this default to world's initial sentient species.
    this.species = species;

    this.firstName = this.location.scope.languages[0].generateWord(3, 8, true);
    this.lastName = this.location.scope.languages[0].generateWord(3, 12, true);
    this.age = this.randomInt(1, this.species.lifeExpectancy);
    this.height = this.species.generateHeightAtAge(this.age);

    // A person's first language is always their location's first language.
    this.knownLanguages = [this.location.scope.languages[0]];

    this.thing.identity = `${Tools.capitalize(Tools.aOrAn(this.ageName))} ${this.ageName} `
      + `${this.species.name} named ${this.fullName} who is ${this.height} centimeters tall `
      + `living in ${this.location.scope.name} on ${this.location.scope.world.name}`;
    // this.thing.identity = `A ${this.ageName} Person named ${this.fullName}`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get ageName() {
    return this.species.getAgeName(this.age);
  }

  testSetAge(age) {
    this.age = age;
    this.thing.identity = `${Tools.capitalize(Tools.aOrAn(this.ageName))} ${this.ageName} Person named ${this.fullName}`;
    // this.thing.identity = `A ${this.ageName} Person named ${this.fullName}`;
    return this;
  }
}
