var arr = [];

arrLength = prompt('Enter array length', '');

for (var i = 0; i < arrLength; i++) {
  arr.push(prompt('Enter a number', ''));
}

document.write('You entered: [' + arr + ']' + '<br>' + '<br>');

function numericSort(a, b) {
  return a - b;
}

arr.reverse(numericSort);

document.write('Result: [' + arr + ']');
