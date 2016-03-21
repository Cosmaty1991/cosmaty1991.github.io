var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = prompt('Введите любое имя:', '');
}

var name = prompt('Введите имя пользователя:', '');

for (var i = 0; i < 5; i++) {
  if (arr[i] === name) {
    alert( name + ', вы вошли' );
  } else {
    alert( 'Ошибка' );
  }
}
