var arr = [];

var arrLength = prompt('Enter array length', '');
var arrHeight = prompt('Enter array height', '');

for (var i = 0; i < arrLength; i++) {
  arr[i] = [];

  for (var j = 0; j < arrHeight; j++) {
    arr[i][j] = prompt('Enter a number', '');
  }
}

document.write('You entered: <table><tr>');

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (j === arr.length - 1) {
      document.write('<td>' + arr[i][j] + '</td></tr>');
    } else {
      document.write('<td>' + arr[i][j] + '</td>');
    }
  }
}

document.write('</table>');
