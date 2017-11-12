var number = prompt('Enter a number', '');

var arr = [];

if (('' + number).length == 16) {
  for (var i = 0; i < ('' + number).length; i++) {
    if (i % 2 === 0) {
      var mult = parseInt(number[i]) * 2;
      if (mult > 9) {
        arr.push(mult - 9);
      } else {
        arr.push(mult);
      }
    } else {
      var num = parseInt(number[i]);
      arr.push(num);
    }
  }
}

else if (('' + number).length != 16) {
  for (var i = 0; i < ('' + number).length; i++) {
    if (i % 2 !== 0) {
      var mult = parseInt(number[i]) * 2;
      if (mult > 9) {
        arr.push(mult - 9);
      } else {
        arr.push(mult);
      }
    } else {
      var num = parseInt(number[i]);
      arr.push(num);
    }
  }
}

var sum = arr.reduce(function(a, b) { return a + b; }) % 10;

if (sum == 0 && ('' + number).length == 16 && number[0] == 5 && number[1] == 1) {
  document.write('MASTERCARD');
} else if (sum == 0 && ('' + number).length == 16 && number[0] == 5 && number[1] == 2) {
  document.write('MASTERCARD');
} else if (sum == 0 && ('' + number).length == 16 && number[0] == 5 && number[1] == 3) {
  document.write('MASTERCARD');
} else if (sum == 0 && ('' + number).length == 16 && number[0] == 5 && number[1] == 4) {
  document.write('MASTERCARD');
} else if (sum == 0 && ('' + number).length == 16 && number[0] == 5 && number[1] == 5) {
  document.write('MASTERCARD');
} else if (sum == 0 && ('' + number).length == 16 && number[0] == 4) {
  document.write('VISA')
} else if (sum == 0 && ('' + number).length == 13 && number[0] == 4) {
  document.write('VISA');
} else if (sum == 0 && ('' + number).length == 15 && number[0] == 3 && number[1] == 4) {
  document.write('AMEX');
} else if (sum == 0 && ('' + number).length == 15 && number[0] == 3 && number[1] == 7) {
  document.write('AMEX');
} else {
  document.write('INVALID');
}
