class Factory {
  constructor(type) {
    this._type = type;
  }

  static init(type) {
    const animals = ['dog', 'cat'];

    if (type === animals[0]) {
      return new Dog();

    } else if (type === animals[1]) {
      return new Cat();
    }
  }
};

class Dog extends Factory {
  say() {
    console.log('I am a dog');
  }
};

class Cat extends Factory {
  say() {
    console.log('I am a cat');
  }
};

let Jack = Factory.init('dog');
let Tom = Factory.init('cat');

Jack.say();
Tom.say();
