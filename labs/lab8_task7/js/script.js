var parenthes = prompt('Enter a parenthes', '');

var parenthesOpened = 0;
var parenthesClosed = 0;

for (var i = 0; i < parenthes.length; i++) {
  if (parenthes[i] == '(' ) {
    parenthesOpened += 1;
  } else if (parenthes[i] == ')' ) {
    parenthesClosed += 1;
  }
}

if (parenthesOpened > parenthesClosed) {
  document.write('NO');
} else if (parenthesOpened < parenthesClosed) {
  document.write('NO');
} else {
  document.write('YES');
}
