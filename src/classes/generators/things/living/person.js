import Thing from '../thing';
import Tools from '../../../tools'

export default class Person extends Thing {
  constructor(scope, { x = 0, y = 0} = {}) {
    super(scope, {
      x: x,
      y: y,
      type: 'Person',
      status: 'Alive'
    });

    this.firstName = this.location.scope.languages[0].generateWord(3, 8, true);
    this.lastName = this.location.scope.languages[0].generateWord(3, 12, true);
    this.age = this.randomInt(1, this.location.scope.lifeExpectancy);

    // A person's first language is always their location's first language.
    this.knownLanguages = [this.location.scope.languages[0]];

    this.thing.identity = `${Tools.capitalize(Tools.aOrAn(this.ageName))} ${this.ageName} Person named ${this.fullName}`;
    // this.thing.identity = `A ${this.ageName} Person named ${this.fullName}`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get ageName() {
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
      if (this.age <= (this.location.scope.lifeExpectancy * ((i + 1) / ageNames.length))) {
        result = ageNames[i];
        break;
      }
    }

    return result;
  }

  testSetAge(age) {
    this.age = age;
    this.thing.identity = `${Tools.capitalize(Tools.aOrAn(this.ageName))} ${this.ageName} Person named ${this.fullName}`;
    // this.thing.identity = `A ${this.ageName} Person named ${this.fullName}`;
    return this;
  }
}
