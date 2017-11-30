module('Data Model');

/*
Create a base DataModel class that automatically creates getters and setters for a list of properties defined
on subclasses' constructors.
It must not overwrite already present getters or setters.
It must also automatically set data from object passed to constructor with setters.

Additional task:
  .changed() method must return true if current object state differs from original one, passed to constructor
  .save() method must save current state of object as new original for further comparsion
*/


// Modify this to solve the task --------

// create a constructor for further work with it

function DataModel(data) {

  // create methods that will check the input and capitalize it

  function capitalize(input) {
    return input[0].toUpperCase() + input.slice(1);
  }

  function newMethods(prototype, list) {
    list.forEach (function(propertyName) {
      var capitalizedName = capitalize(propertyName);
      var getterName = 'get' + capitalizedName;
      var setterName = 'set' + capitalizedName;
      var privateName = '_' + propertyName;

      if (!prototype[getterName]) {
        prototype[getterName] = function() {
          return this[privateName];
        };
      }

      if (!prototype[setterName]) {
        prototype[setterName] = function(value) {
          this[privateName] = value;
          return value;
        };
      }
    });
  }

  if (!(this instanceof DataModel)) {
    return;
  }

  var prototype = this.__proto__;

  while (prototype.constructor !== DataModel) {
    if (prototype.constructor.fields) {
      newMethods(prototype, prototype.constructor.fields);
    }

    prototype = prototype.__proto__;
  }

  for (var propertyName in data) {
    this['set' + capitalize(propertyName)](data[propertyName]);
  }

  this.save();
};

// create a method that must save current state of object

DataModel.prototype.save = function() {
  var savedState = {};

  for (var propertyName in this) {
    if (!(this.hasOwnProperty(propertyName)) || propertyName === '_savedState') {
      continue;
    }

    savedState[propertyName] = this[propertyName];
  }

  this._savedState = savedState;
};

// create the method that will check if current object state differs from original one

DataModel.prototype.changed = function() {
  if (!this._savedState) {
    return false;
  }

  for (var propertyName in this._savedState) {
    if (this._savedState[propertyName] !== this[propertyName]) {
      return true;
    }
  }

  return false;
};

// ---------------------------------------

// Person --------------------------------
function Person(data) {
  DataModel.call(this, data);
}

Person.fields = ['age', 'firstName', 'lastName'];

Person.prototype = Object.create(DataModel.prototype);
Person.prototype.constructor = Person;

Person.prototype.setAge = function(age) {
  this._age = age > 0 ? age : NaN;
}
// Person --------------------------------

// Student -------------------------------
function Student(data) {
  Person.call(this, data);
}

Student.fields = ['isicId'];

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
// Student -------------------------------

test('Direct subclass', function() {
  var person = new Person({
    age: 21,
    firstName: 'Daniel',
    lastName: 'Weaver'
  });

  // DataModel prototype must not have getters and setters of subclass
  equal(DataModel.prototype.getAge, undefined);
  equal(DataModel.prototype.setAge, undefined);
  equal(DataModel.prototype.getFirstName, undefined);
  equal(DataModel.prototype.setFirstName, undefined);
  equal(DataModel.prototype.getLastName, undefined);
  equal(DataModel.prototype.setLastName, undefined);

  // Instead, subclass must have them defined
  equal(person.getAge(), 21);
  equal(person.getFirstName(), 'Daniel');
  equal(person.getLastName(), 'Weaver');

  person.setFirstName('David');
  equal(person.getFirstName(), 'David');

  // Already present setter must work correctly
  person.setAge(-1);
  equal(Number.isNaN(person.getAge()), true);
});

test('Constructor uses setters', function() {
  var person = new Person({
    age: -1,
    firstName: 'Daniel',
    lastName: 'Weaver'
  });

  equal(Number.isNaN(person.getAge()), true);
  person.setAge(21);
  equal(person.getAge(), 21);
});

test('Complex subclassing works correctly', function() {
  var person = new Person({
    age: 21,
    firstName: 'Daniel',
    lastName: 'Weaver'
  });

  var student = new Student({
    age: 18,
    firstName: 'David',
    lastName: 'Weaver',
    isicId: 'S 123 456 789 912 A'
  });

  // Parent class must not have subclass getters and setters
  equal(person.getIsicId, undefined);
  equal(person.setIsicId, undefined);

  // Subclass must have both parents' and own getters and setters

  equal(student.getAge(), 18);
  equal(student.getFirstName(), 'David');
  equal(student.getLastName(), 'Weaver');
  equal(student.getIsicId(), 'S 123 456 789 912 A');
  student.setIsicId('S 123 456 789 912 B');
  equal(student.getIsicId(), 'S 123 456 789 912 B');
});

test('changed and save', function() {
  var student = new Student({
    age: 18,
    firstName: 'David',
    lastName: 'Weaver',
    isicId: 'S 123 456 789 912 A'
  });

  equal(student.changed(), false);

  student.setAge(19);
  equal(student.changed(), true);

  student.setAge(18);
  equal(student.changed(), false);

  student.setFirstName('Daniel');
  student.setLastName('Stevenson');
  equal(student.changed(), true);

  student.setFirstName('David');
  equal(student.changed(), true);

  student.setLastName('Weaver');
  equal(student.changed(), false);

  student.setAge(19);
  student.save();
  equal(student.changed(), false);

  student.setAge(18);
  equal(student.changed(), true);
});
