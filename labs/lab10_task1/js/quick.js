function firstSort(arrLength) {
  var arr = [];
  var counter = 0;

  for (var i = 0; i < arrLength; i++) {
    arr.push(Math.round(Math.random(i) * 100));
  }

  Array.prototype.quickSort = function() {
    var r = this;

    if (this.length <= 1) {
      return this;
    }

    var less = [], greater = [];
    var pivot = r.splice(Math.floor(r.length / 2), 1);

    for (var i = r.length - 1 ; i >= 0; i--) {
      if (r[i] <= pivot) {
        less.push(r[i]);
      } else {
        greater.push(r[i]);
      }
      counter++;
    }

    var c = [];

    return c.concat(less.quickSort(), pivot, greater.quickSort());
  }

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr.quickSort);
    return new Date() - date;
  }

  document.write('<h4>Випадковий масив</h4>');
  document.write('Відсортований масив: [' + arr.quickSort() + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(arr.quickSort) + 'ms');
  document.write('<br><br>');
  document.write('Кількість перестановок: ' + counter);
  document.write('<br><br>');
}

function secondSort(arrLength) {
  var arr = [];
  var counter = 0;

  for (var i = 0; i < arrLength; i++) {
    arr.push(i);
  }

  Array.prototype.quickSort = function() {
    var r = this;

    if (this.length <= 1) {
      return this;
  }

    var less = [], greater = [];
    var pivot = r.splice(Math.floor(r.length / 2), 1);

    for (var i = r.length - 1 ; i >= 0; i--){
      if (r[i] <= pivot) {
        less.push(r[i]);
      } else {
        greater.push(r[i]);
      }
      counter++;
    }

    var c = [];

    return c.concat(less.quickSort(), pivot, greater.quickSort());
  }

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr.quickSort);
    return new Date() - date;
  }

  document.write('<h4>Впорядкований масив</h4>');
  document.write('Відсортований масив: [' + arr.quickSort() + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(arr.quickSort) + 'ms');
  document.write('<br><br>');
  document.write('Кількість перестановок: ' + counter);
  document.write('<br><br>');
}

function thirdSort(arrLength) {
  var arr = [];
  var counter = 0;

  for (var i = arrLength; i > 0; i--) {
    arr.push(i);
  }

  Array.prototype.quickSort = function() {
    var r = this;

    if (this.length <= 1) {
      return this;
    }

    var less = [], greater = [];
    var pivot = r.splice(Math.floor(r.length / 2), 1);

    for (var i = r.length - 1 ; i >= 0; i--) {
      if (r[i] <= pivot) {
        less.push(r[i]);
      } else {
        greater.push(r[i]);
      }
      counter++;
    }

    var c = [];

    return c.concat(less.quickSort(), pivot, greater.quickSort());
  }

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr.quickSort);
    return new Date() - date;
  }

  document.write('<h4>Впорядкований навпаки</h4>');
  document.write('Відсортований масив: [' + arr.quickSort() + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(arr.quickSort) + 'ms');
  document.write('<br><br>');
  document.write('Кількість перестановок: ' + counter);
  document.write('<br><br>');
}

document.write('<h3>Швидке сортування</h3>');

firstSort(8);
firstSort(128);
firstSort(1024);

secondSort(8);
secondSort(128);
secondSort(1024);

thirdSort(8);
thirdSort(128);
thirdSort(1024);

document.write('<hr>');
