function firstSort(arrLength) {
  var arr = [];
  var counter = 0;

  for (var i = 0; i < arrLength; i++) {
    arr.push(Math.round(Math.random(i) * 100));
  }

  function shellSort() {
    var i = Math.floor(arrLength / 2);

    while (i > 0) {
      for (var j = 0; j < arrLength; j++) {
        var k = j, t = arr[j];

        while (k >= i && arr[k-i] > t) {
          arr[k] = arr[k-i]; k -= i;
          counter++;
        }

        arr[k] = t;
      }

      if (i == 2) {
        i = 1;
      } else {
        i = Math.floor(i * 5 / 11);
      }
    }

    return arr;
  }

  shellSort();

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
  }

  document.write('<h4>Випадковий масив</h4>');
  document.write('Відсортований масив: [' + arr + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(shellSort) + 'ms');
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

  function shellSort() {
    var i = Math.floor(arrLength / 2);

    while (i > 0) {
      for (var j = 0; j < arrLength; j++) {
        var k = j, t = arr[j];

        while (k >= i && arr[k-i] > t) {
          arr[k] = arr[k-i]; k -= i;
          counter++;
        }

        arr[k] = t;
      }

      if (i == 2) {
        i = 1;
      } else {
        i = Math.floor(i * 5 / 11);
      }
    }

    return arr;
  }

  shellSort();

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
  }

  document.write('<h4>Впорядкований масив</h4>');
  document.write('Відсортований масив: [' + arr + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(shellSort) + 'ms');
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

  function shellSort() {
    var i = Math.floor(arrLength / 2);

    while (i > 0) {
      for (var j = 0; j < arrLength; j++) {
        var k = j, t = arr[j];

        while (k >= i && arr[k-i] > t) {
          arr[k] = arr[k-i]; k -= i;
          counter++;
        }

        arr[k] = t;
      }

      if (i == 2) {
        i = 1;
      } else {
        i = Math.floor(i * 5 / 11);
      }
    }

    return arr;
  }

  shellSort();

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
  }

  document.write('<h4>Впорядкований навпаки</h4>');
  document.write('Відсортований масив: [' + arr + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(shellSort) + 'ms');
  document.write('<br><br>');
  document.write('Кількість перестановок: ' + counter);
  document.write('<br><br>');
}

document.write('<h3>Сортування Шелла</h3>');

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
