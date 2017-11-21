function firstSort(arrLength) {
  var arr = [];
  var counter = 0;

  for (var i = 0; i < arrLength; i++) {
    arr.push(Math.round(Math.random(i) * 100));
  }

  function numericSort(a, b) {
    if (a > b) {
      counter++;
    }

    return a - b;
  }

  arr.sort(numericSort);

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
  }

  document.write('<h4>Випадковий масив</h4>');
  document.write('Відсортований масив: [' + arr + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(numericSort) + 'ms');
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

  function numericSort(a, b) {
    if (a > b) {
      counter++;
    }

    return a - b;
  }

  arr.sort(numericSort);

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
  }

  document.write('<h4>Впорядкований масив</h4>');
  document.write('Відсортований масив: [' + arr + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(numericSort) + 'ms');
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

  function numericSort(a, b) {
    if (a > b) {
      counter++;
    }

    return a - b;
  }

  arr.sort(numericSort);

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
  }

  document.write('<h4>Впорядкований навпаки</h4>');
  document.write('Відсортований масив: [' + arr + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(numericSort) + 'ms');
  document.write('<br><br>');
  document.write('Кількість перестановок: ' + counter);
  document.write('<br><br>');
}

document.write('<h3>Стандартна sort</h3>');

firstSort(8);
firstSort(128);
firstSort(1024);

secondSort(8);
secondSort(128);
secondSort(1024);

thirdSort(8);
thirdSort(128);
thirdSort(1024);
