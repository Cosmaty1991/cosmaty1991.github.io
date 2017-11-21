
module('Deep comparison');

/*
Напишіть функцію, яка приймає два значення і повертає true,
тільки якщо це два однакових значення або це об'єкти, властивості
яких мають однакові значення
*/

function deepEqual(a, b) {
  // Write your code here

  for (var i in a) {
    if (a.hasOwnProperty(i) !== b.hasOwnProperty(i)) {
      return false;
    }

    if (typeof (a[i]) === 'object' ) {
      if (!deepEqual(a[i], b[i])) {
        return false;
      }

    } else if (typeof (a[i]) === 'function' ) {
      if (typeof (b[i]) === 'undefined') {
        return false;
      } else if (i !== 'compare' && a[i].toString() !== b[i].toString()) {
        return false;
      }

    } else {
      if (a[i] !== b[i]) {
        return false;
      }
    }
  }

  for (var i in b) {
    if (typeof (a[i]) === 'undefined') {
      return false;
    }
  }

  return true;
}

test('Deep comparison', function() {
  var obj = {here: {is: "an"}, object: 2};
  equal(deepEqual(obj, obj), true, "один об'єкт");

  equal(deepEqual(obj, {here: 1, object: 2}), false, "різні об'єкти");

  equal(deepEqual(obj, {here: {is: "an"}, object: 2}), true, "два однакових об'єкти");

  equal(deepEqual(13, 13), true, "прості типи");

  equal(deepEqual(13, "13"), false, "прості типи");

});
