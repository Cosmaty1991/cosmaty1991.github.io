function pow(a, b) {
  var result = a;

  for (var i = 1; i < b; i++) {
    result = result * a;
  }

  for (var j = -1; j > b; j--) {
    result = result * a;
  }

  return result;
}

var a = prompt('Введите число:', '');
var b = prompt('Введите степень:', '');

if (b >= 1) {
  console.log( pow(a, b) );
} else if (b <= -1) {
  console.log( 1 / pow(a, b) );
} else if (b === 0) {
  console.log( 1 );
}
