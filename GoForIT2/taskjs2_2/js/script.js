var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i] = prompt('Введите любое имя:', '');
}

var name = prompt('Введите имя пользователя:', '');
var bool;

for (var j = 0; j < 5; j++) {
  if (arr[j] === name) {
    bool = true;
  }
}

if (bool === true) {
  alert( name + ', вы вошли' );
} else {
  alert( 'Ошибка' );
}
