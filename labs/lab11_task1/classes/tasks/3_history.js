module('History');

/*
Your task is to create a History class that would hold a history of changes done to objects' fields.
Changes can add new fields or modify existing ones.
Changes can be inserted in incorrect order.
It must return objects' state for any given moment of time.

  Class History
  Constructor: History()
  Methods:
    .change(date, changeSet)
      where date is the Date of change and
      changeSet is an object with modified or new fields

    .change(changeSet)
      if date is not specified, assume the change was made now

    .get()
      return most up-to-date objects' state
    .get(date)
      return objects state for given Date
      if first change was after the given date, return null
*/

// create a constructor for further work with it

function History(history) {
  this._history = history || [];
};

// create a method that will sort input

History.prototype.numericSort = function() {
  this._history.sort(function(a, b) {
    return a.date - b.date;
  });
};

// create a method that will check if date is not specified

History.prototype.change = function(date, changeSet) {
  if(!changeSet) {
    changeSet = date;
    date = new Date();
  }

  this._history.push({
    date: date,
    changeSet: changeSet
  });

  this.numericSort();
};

// create a method that will return most up-to-date objects' state

History.prototype.get = function(date) {
  if (!date) {
    date = new Date();
  } else if (this._history[0].date > date) {
    return null;
  }

  var result = {};

  for (var i = 0; i < this._history.length && this._history[i].date <= date; i++) {
    for (var j in this._history[i].changeSet) {
      result[j] = this._history[i].changeSet[j];
    }
  }

  return result;
};

test('Real-word example', function() {
  var history = new History();

  var creationDate = new Date(1995, 5);
  var creationInfo = {
    name: 'LiveScript',
    typeSystem: 'untyped',
    runtime: 'dynamic',
    paradigms: ['imperative', 'object-oriented', 'functional']
  };

  history.change(creationDate, creationInfo);

  deepEqual(history.get(), {
    name: 'LiveScript',
    typeSystem: 'untyped',
    runtime: 'dynamic',
    paradigms: ['imperative', 'object-oriented', 'functional']
  });


  var standartizationDate = new Date(1997, 5);
  var standartizationInfo = {
    name: 'ECMAScript',
    nickname: 'JavaScript',
    standard: 'ES1'
  };

  history.change(standartizationDate, standartizationInfo);

  deepEqual(history.get(), {
    name: 'ECMAScript',
    nickname: 'JavaScript',
    typeSystem: 'untyped',
    runtime: 'dynamic',
    paradigms: ['imperative', 'object-oriented', 'functional'],
    standard: 'ES1'
  });

  deepEqual(history.get(creationDate), {
    name: 'LiveScript',
    typeSystem: 'untyped',
    runtime: 'dynamic',
    paradigms: ['imperative', 'object-oriented', 'functional']
  });


  var currentState = {
    newFeatures: ['arrow functions', 'class keyword', 'spread operator'],
    standard: 'ES6'
  };

  history.change(currentState);

  deepEqual(history.get(), {
    name: 'ECMAScript',
    nickname: 'JavaScript',
    typeSystem: 'untyped',
    runtime: 'dynamic',
    paradigms: ['imperative', 'object-oriented', 'functional'],
    newFeatures: ['arrow functions', 'class keyword', 'spread operator'],
    standard: 'ES6'
  });

  deepEqual(history.get(new Date('1998')), {
    name: 'ECMAScript',
    nickname: 'JavaScript',
    typeSystem: 'untyped',
    runtime: 'dynamic',
    paradigms: ['imperative', 'object-oriented', 'functional'],
    standard: 'ES1'
  });

  deepEqual(history.get(new Date('1970')), null);
});

test('Abstract example', function() {
  var history = new History();

  // First change

  var firstChangeDate = new Date(1971, 1, 1);
  var firstChange = {
    num: 1,
    str: 'string'
  };

  history.change(firstChangeDate, firstChange);

  deepEqual(history.get(), {
    num: 1,
    str: 'string'
  });

  // Second change

  var secondChangeDate = new Date(1972, 1, 1);
  var secondChange = {
    num: 5,
    arr: [1, 3, 3, 7]
  };

  history.change(secondChangeDate, secondChange);

  deepEqual(history.get(), {
    num: 5,
    str: 'string',
    arr: [1, 3, 3, 7]
  });

  deepEqual(history.get(firstChangeDate), {
    num: 1,
    str: 'string'
  });

  // Third change

  var thirdChange = {
    str: 'modified',
    anotherNum: 1
  };

  history.change(thirdChange);

  deepEqual(history.get(), {
    num: 5,
    arr: [1, 3, 3, 7],
    str: 'modified',
    anotherNum: 1
  });

  deepEqual(history.get(secondChangeDate), {
    num: 5,
    arr: [1, 3, 3, 7],
    str: 'string'
  });

  deepEqual(history.get(firstChangeDate), {
    num: 1,
    str: 'string'
  });

  // Additional checks

  var beforeObjectCreated = new Date(1970, 1, 1);
  deepEqual(history.get(beforeObjectCreated), null);

  var betweenSecondAndThirdChange = new Date(2000, 1, 1);
  deepEqual(history.get(betweenSecondAndThirdChange), {
    num: 5,
    arr: [1, 3, 3, 7],
    str: 'string'
  });
});
