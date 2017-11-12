var number = prompt('Enter a number', '');

var a = Math.pow(number, 3) + 0.001;
var b = Math.pow(number, 3) + 0.01 / a;
var c = Math.pow(number, 3) + 0.1 / b;

var result = number / c;

document.write('Result: ' + result);
