var number = prompt('Enter a number', '');

for (var i = 0; i < number; i++) {

  for (var j = 0; j <= i; j++) {
    document.write('#');
  }

  document.write('<br>');
}
