var number = prompt('Enter a number', '') * 100;

var counter = 0;

while (number != 0) {
  if (number >= 25) {
    counter++;
    number = number - 25;
  } else if (number >= 10) {
    counter++;
    number = number - 10;
  } else if (number >= 5) {
    counter++;
    number = number - 5;
  } else if (number >= 1) {
    counter++;
    number = number - 1;
  }
}

document.write('Result: ' + counter);
