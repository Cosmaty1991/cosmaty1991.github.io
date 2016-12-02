var Factory = (function() {
  var animals = ['dog', 'cat'];

  return {
    init: function(type) {
      var animal;

      if (type === animals[0]) {
        return new Dog();

      } else if (type === animals[1]) {
        return new Cat();
      }
    }
  }
})();

function Dog() {
  this.say = function() {
    console.log('I am a dog');
  }
}

function Cat() {
  this.say = function() {
    console.log('I am a cat');
  }
}

Dog.prototype = Factory;
Cat.prototype = Factory;

var Jack = Factory.init('dog');
var Tom = Factory.init('cat');

Jack.say();
Tom.say();
