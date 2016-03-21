function pow(a, b) {
  var result = a;

  for (i = 1; i < b; i++) {
    result = result * a;
  }

  for (j = -1; j > b; j--) {
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
} else {
  console.log( 1 );
}
