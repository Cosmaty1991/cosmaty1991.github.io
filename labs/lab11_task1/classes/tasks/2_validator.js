module('Validator');

/*
Your task is to create a set of "Constraint" classes that validate given input based on various parameters

All constraints must subclass the base Constraint or one of other Constraints.

  Constraint class is the base class and accepts only one property in configuration object
    if the input is optional or not. If no configuration provided, field is required (not optional).
  Constructor: Constraint(config)
    where config can be undefined, {}, {optional: true/false}
  Methods:
    isValid(input) - returns true if input satisfies the constraint and false otherwise

  StringConstraint class must check if input is a string and its length is between min and max characters in config
  Constructor: StringConstraint(config)
    where config can have additional "min" and/or "max" properties: {min: 2} or {max: 30} or {min: 2, max: 30}

  NumberConstraint class must check if input is a number and it is greater or equal to min and lesser than max
  Constructor: NumberConstraint(config)
    where config can have additional "min" and/or "max" properties: {min: 0} or {max: 100} or {min: 0, max: 100}


  "Validator" class that will process object with input fields according to defined schema.
  Constructor: Validator(schema)
  Methods:
    isValid(inputObject)

  See usage in test cases

  And think about how usage may be improved
*/




// Write your classes here

// create a method that will subclass the base constraint

function inherits(subClass, baseClass) {
  subClass.prototype = Object.create(baseClass.prototype, {constructor: subClass});
}

// create a constructor for further work with it

function Constraint(config) {
  this._config = config || {};
}

// create methods that will validate input

Constraint.prototype.validate = function(input) {
  return input !== undefined;
};

Constraint.prototype.isValid = function(input) {
  if (this._config.optional && input === undefined) {
    return true;
  }

  return this.validate(input);
};

// create a class that will check input

function TypeConstraint(config) {
  Constraint.call(this, config);
}

inherits(TypeConstraint, Constraint);

TypeConstraint.prototype.validate = function(input) {
  if (!(this._config.type)) {
    return true;
  }

  return typeof input === this._config.type;
};

// create a class that will check if input is a string

function StringConstraint(config) {
  TypeConstraint.call(this, config);
  this._config.type = 'string';
};

inherits(StringConstraint, TypeConstraint);

// create a method that will check if input > min and < max

StringConstraint.prototype.validate = function(input) {
  if (!(TypeConstraint.prototype.validate.call(this, input))) {
    return false;
  } else if (this._config.min && input.length < this._config.min) {
    return false;
  } else if (this._config.max && input.length > this._config.max) {
    return false;
  } else {
    return true;
  }
};

// create a class that will check if input is a number

function NumberConstraint(config) {
  TypeConstraint.call(this, config);
  this._config.type = 'number';
};

inherits(NumberConstraint, TypeConstraint);

// create a method that will check if input >= min and < max

NumberConstraint.prototype.validate = function(input) {
  if (!(TypeConstraint.prototype.validate.call(this, input))) {
    return false;
  } else if (this._config.min !== undefined && input < this._config.min) {
    return false;
  } else if (this._config.max !== undefined && input > this._config.max) {
    return false;
  } else {
    return true;
  }
};

// create a class that will process object with input fields according to defined schema

function Validator(schema) {
  for (var field in schema) {
    if (!(schema[field] instanceof Constraint)) {
      schema[field] = new Validator(schema[field]);
    }
  }

  this._schema = schema;
}

// create a method that will check input for validator

Validator.prototype.isValid = function(input) {
  if (typeof input !== 'object') {
    return false;
  }

  for (var field in this._schema) {
    var validation = this._schema[field];
    var inputValue = input[field];

    if (!(validation.isValid(inputValue))) {
      return false;
    }
  }

  return true;
}

test('Constraint', function() {
    if (typeof Constraint !== 'function') {
        equal('Constraint is not defined', 'Constraint is defined');
        return;
    }

    var optionalConstraint = new Constraint({optional: true});
    var requiredConstraint = new Constraint();

    equal(optionalConstraint.isValid(undefined), true);
    equal(optionalConstraint.isValid('input'), true);

    equal(requiredConstraint.isValid(undefined), false);
    equal(requiredConstraint.isValid('input'), true);
});

test('StringConstraint', function() {
    if (typeof StringConstraint !== 'function') {
        equal('StringConstraint is not defined', 'StringConstraint is defined');
        return;
    }

    var optionalConstraint = new StringConstraint({optional: true, min: 3, max: 6});
    var requiredConstraint = new StringConstraint({min: 3, max: 6});

    equal(optionalConstraint.isValid(undefined), true);
    equal(optionalConstraint.isValid(true), false);
    equal(optionalConstraint.isValid(10000), false);
    equal(optionalConstraint.isValid('input'), true);
    equal(optionalConstraint.isValid('a'), false);
    equal(optionalConstraint.isValid('aaaaaaaaaa'), false);

    equal(requiredConstraint.isValid(undefined), false);
    equal(requiredConstraint.isValid(true), false);
    equal(requiredConstraint.isValid(10000), false);
    equal(requiredConstraint.isValid('input'), true);
    equal(requiredConstraint.isValid('a'), false);
    equal(requiredConstraint.isValid('aaaaaaaaaa'), false);
});

test('NumberConstraint', function() {
    if (typeof NumberConstraint !== 'function') {
        equal('NumberConstraint is not defined', 'NumberConstraint is defined');
        return;
    }

    var optionalConstraint = new NumberConstraint({optional: true, min: 0, max: 100});
    var requiredConstraint = new NumberConstraint({min: 0});


    equal(optionalConstraint.isValid(undefined), true);
    equal(optionalConstraint.isValid('50'), false);
    equal(optionalConstraint.isValid(true), false);
    equal(optionalConstraint.isValid(50), true);
    equal(optionalConstraint.isValid(-1), false);
    equal(optionalConstraint.isValid(101), false);

    equal(requiredConstraint.isValid(undefined), false);
    equal(requiredConstraint.isValid('50'), false);
    equal(requiredConstraint.isValid(true), false);
    equal(requiredConstraint.isValid(50), true);
    equal(requiredConstraint.isValid(-1), false);
    equal(requiredConstraint.isValid(101), true);
});

test('Validator works as expected', function() {
    var constructors = [
        typeof Constraint,
        typeof StringConstraint,
        typeof NumberConstraint,
        typeof Validator
    ];

    for(var i = 0; i < constructors.length; i++) {
        if (constructors[i] !== 'function') {
            equal('Constructors are not defined', 'Constructors are defined');
            return;
        }
    }

    var schema = {
        title: new StringConstraint({optional: true}),
        firstName: new StringConstraint({min: 2, max: 30}),
        lastName: new StringConstraint({min: 2, max: 30}),
        age: new NumberConstraint({min: 18})
    };

    var validator = new Validator(schema);

    var correctFullData = {
        title: 'Mr.',
        firstName: 'Daniel',
        lastName: 'Weaver',
        age: 22
    };

    var correctOptionalData = {
        firstName: 'Daniel',
        lastName: 'Weaver',
        age: 22
    };

    var incorrectTypeData = {
        title: true,
        firstName: 'Daniel',
        lastName: 'Weaver',
        age: 22
    };

    var incorrectLengthData = {
        firstName: 'DanielDanielDanielDanielDanielDanielDanielDanielDaniel',
        lastName: 'Weaver',
        age: 22
    };

    equal(validator.isValid(correctFullData), true);
    equal(validator.isValid(correctOptionalData), true);
    equal(validator.isValid(incorrectTypeData), false);
    equal(validator.isValid(incorrectLengthData), false);
});

test('Validator handles nested objects recursively', function() {
    var constructors = [
        typeof Constraint,
        typeof StringConstraint,
        typeof NumberConstraint,
        typeof Validator
    ];

    for(var i = 0; i < constructors.length; i++) {
        if (constructors[i] !== 'function') {
            equal('Constructors are not defined', 'Constructors are defined');
            return;
        }
    }

    var schema = {
        title: new StringConstraint({optional: true}),
        firstName: new StringConstraint({min: 2, max: 30}),
        lastName: new StringConstraint({min: 2, max: 30}),
        age: new NumberConstraint({min: 18}),
        address: {
            city: new StringConstraint({min: 2, max: 50}),
            firstStreetLine: new StringConstraint({min: 3, max: 255}),
            secondStreetLine: new StringConstraint({optional: true})
        }
    };

    var validator = new Validator(schema);

    var correctFullData = {
        title: 'Mr.',
        firstName: 'Daniel',
        lastName: 'Weaver',
        age: 22,
        address: {
            city: 'Toronto',
            firstStreetLine: '375 Sullivan Circle',
            secondStreetLine: 'apt. 50'
        }
    };

    var correctOptionalData = {
        firstName: 'Daniel',
        lastName: 'Weaver',
        age: 22,
        address: {
            city: 'Toronto',
            firstStreetLine: '375 Sullivan Circle apt. 50'
        }
    };

    var incorrectData = {
        title: true,
        firstName: 'Daniel',
        lastName: 'Weaver',
        age: 22,
        address: {
            city: '',
            firstStreetLine: '375 Sullivan Circle'
        }
    };

    equal(validator.isValid(correctFullData), true);
    equal(validator.isValid(correctOptionalData), true);
    equal(validator.isValid(incorrectData), false);
});
