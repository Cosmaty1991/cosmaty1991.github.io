var phoneBook = []; // Тут ви зберігаєте записи як хочете

/*
   Функція додавання запису в телефонну книгу.
*/
phoneBook.add = function(name, phone, email) {
  // Ваша неймовірна магія тут

  var phoneNumber = [];

  phoneNumber.push(name, phone, email);
  phoneBook.push(phoneNumber);
};

function search(searchQuery, phoneBook) {
  var searchNumber = new RegExp(searchQuery, 'i');
  var findedNumbers = [];

  if (searchQuery === undefined || searchQuery === null) {
    return phoneBook;
  }

  for (var i = 0; i < phoneBook.length; i++) {
    if (searchNumber.test(phoneBook[i].toString()) === true) {
      findedNumbers.push(phoneBook[i]);
    }
  }

  if (findedNumbers.length === 0) {
    return false;
  }

  return findedNumbers;
};

/*
   Функція пошуку записв в телефонній книзі.
   Пошук ведеться по всім полям.
*/
phoneBook.find = function(query) {
  // Ваша магія тут

  var look = search(query, phoneBook);

  if (look !== false) {
    document.write('<h3 class="find">Знайдено контактів: ' + look.length + '</h3>');
    document.write('<table class="find">');
    document.write('<tr><th>Ім\'я</th><th>Телефон</th><th>Email</th></tr>');
    document.write('<tr>');

    for (var i = 0; i < look.length; i++) {
      for (var j = 0; j < look[i].length; j++) {
        if (j === look.length) {
          document.write('<td>' + look[i][j] + '</td></tr>');
        } else {
          document.write('<td>' + look[i][j] + '</td>');
        }
      }
    }

    document.write('</table>');
   }
};

/*
   Функція видалення запису в телефонній книзі.
*/
phoneBook.remove = function(query) {
  // Ваша магія тут

  var removeNumbers = search(query, phoneBook);

  if (removeNumbers !== false) {
    var removeBook = phoneBook.filter(function(i) {
      return removeNumbers.indexOf(i) === -1;
    });

    phoneBook = removeBook;

    document.write('<h3 class="remove">Вилучено контактів: ' + removeNumbers.length + '</h3>');
    document.write('<table class="remove">');
    document.write('<tr><th>Ім\'я</th><th>Телефон</th><th>Email</th></tr>');
    document.write('<tr>');

    for (var i = 0; i < removeNumbers.length; i++) {
      for (var j = 0; j < removeNumbers[i].length; j++) {
        if (j === removeNumbers[i].length) {
          document.write('<td>' + removeNumbers[i][j] + '</td></tr>');
        } else {
          document.write('<td>' + removeNumbers[i][j] + '</td>');
        }
      }
    }

    document.write('</table>');
  }
};

/*
    Функція виведення всіх телефонів.
*/
function showTable() {
  // Ваша чорна магія тут

  document.write('<h2 class="show">Телефона книга</h2>');
  document.write('<table class="show">');
  document.write('<tr><th>Ім\'я</th><th>Телефон</th><th>Email</th></tr>');
  document.write('<tr>');

  for (var i = 0; i < phoneBook.length; i++) {
    for (var j = 0; j < phoneBook[i].length; j++) {
      if (j === phoneBook.length) {
        document.write('<td>' + phoneBook[i][j] + '</td></tr>');
      } else {
        document.write('<td>' + phoneBook[i][j] + '</td>');
      }
    }
  }

  document.write('</table>');
};
