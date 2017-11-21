
module('Braces');

/*
Write a function that validates a series of braces.
*/

function validSequence(braces) {
  // Write code here

  var arr = [];

  var bracesOpened = {
    '[': ']',
    '(': ')',
    '{': '}',
    '<': '>'
  };

  var bracesClosed = {
    ']': true,
    ')': true,
    '}': true,
    '>': true
  };

  for (var i = 0; i < braces.length; i++) {
    var brace = braces[i];

    if (bracesOpened[brace]) {
      arr.push(brace);
    } else if (bracesClosed[brace]) {
      if (bracesOpened[arr.pop()] !== brace) {
        return false;
      }
    }
  }

  return arr.length === 0;
}

test('Simple valid cases', function() {
  equal(validSequence(''), true, 'empty string validates');
  equal(validSequence('[]'), true, 'square braces');
  equal(validSequence('()'), true, 'round braces');
  equal(validSequence('{}'), true, 'figure braces');
  equal(validSequence('<>'), true, 'brackets');
});

test('Simple invalid cases', function() {
  equal(validSequence('}'), false, 'invalid case');
  equal(validSequence('({'), false, 'invalid case');
  equal(validSequence('[<]'), false, 'invalid case');
  equal(validSequence('({)}'), false, 'invalid case');
});

test('Final cases', function() {
  equal(validSequence('([](<{}>))'), true, 'valid case');
  equal(validSequence('({[](<{}>}))'), false, 'invalid case');
});
