function firstSort(arrLength) {
  var arr = [];
  var counter = 0;

  for (var i = 0; i < arrLength; i++) {
    arr.push(Math.round(Math.random(i) * 100));
  }

  function insertionSort() {
    for (var i = 0; i < arrLength; i++) {
      var t = arr[i], j = i - 1;

      while (j >= 0 && arr[j] > t) {
        arr[j + 1] = arr[j]; j--;
        counter++;
      }

      arr[j + 1] = t;
    }

    return arr;
  }

  insertionSort();

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
  }

  document.write('<h4>Випадковий масив</h4>');
  document.write('Відсортований масив: [' + arr + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(insertionSort) + 'ms');
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

  function insertionSort() {
    for (var i = 0; i < arrLength; i++) {
      var t = arr[i], j = i - 1;

      while (j >= 0 && arr[j] > t) {
        arr[j + 1] = arr[j]; j--;
        counter++;
      }

      arr[j + 1] = t;
    }

    return arr;
  }

  insertionSort();

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
  }

  document.write('<h4>Впорядкований масив</h4>');
  document.write('Відсортований масив: [' + arr + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(insertionSort) + 'ms');
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

  function insertionSort() {
    for (var i = 0; i < arrLength; i++) {
      var t = arr[i], j = i - 1;

      while (j >= 0 && arr[j] > t) {
        arr[j + 1] = arr[j]; j--;
        counter++;
      }

      arr[j + 1] = t;
    }

    return arr;
  }

  insertionSort();

  function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
  }

  document.write('<h4>Впорядкований навпаки</h4>');
  document.write('Відсортований масив: [' + arr + ']');
  document.write('<br><br>');
  document.write('Час виконання: ' + bench(insertionSort) + 'ms');
  document.write('<br><br>');
  document.write('Кількість перестановок: ' + counter);
  document.write('<br><br>');
}

document.write('<h3>Сортування включенням</h3>');

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
