document.body.style.width = '800px';

var phone = document.createElement('div');

phone.style.width = '360px';
phone.style.cssFloat = 'left';

document.body.appendChild(phone);

var text = document.createElement('textarea');

text.className = 'text';
text.style.width = '333px';
text.style.height = '40px';
text.style.display = 'block';
text.style.margin = '10px';
text.style.padding = '3px';
text.style.resize = 'none';
text.style.fontFamily = 'Arial';
text.style.fontSize = '20px';
text.style.fontWeight = 'bold';

phone.appendChild(text);

for (var i = 0; i < 12; i++) {
  var button = document.createElement('button');

  button.className = 'button' + (i + 1);
  button.innerHTML = i + 1;
  button.style.width = '100px';
  button.style.height = '100px';
  button.style.margin = '10px';
  button.style.backgroundColor = 'black';
  button.style.color = 'white';
  button.style.fontFamily = 'Arial';
  button.style.fontSize = '20px';
  button.style.fontWeight = 'bold';
  button.style.cursor = 'pointer';

  phone.appendChild(button);
}

document.querySelector('.button10').innerHTML = 'C';
document.querySelector('.button11').innerHTML = '0';
document.querySelector('.button12').innerHTML = 'S';

var focus = document.createElement('p');

focus.className = 'focus';
focus.style.width = '333px';
focus.style.margin = '10px';
focus.style.fontFamily = 'Arial';
focus.style.fontSize = '20px';
focus.style.fontWeight = 'bold';

phone.appendChild(focus);

var result = document.createElement('div');

result.className = 'result';
result.style.width = '333px';
result.style.margin = '40px';
result.style.display = 'inline';
result.style.cssFloat = 'left';
result.style.fontFamily = 'Arial';
result.style.fontSize = '20px';
result.style.fontWeight = 'bold';

document.body.appendChild(result);

function outputNumber(event) {
  var target = event.target;

  focus.innerHTML = 'In focus: ' + target.innerHTML;
  text.value += target.innerHTML;

  if (target.innerHTML === 'C') {
    text.value = '';
  } else if (target.innerHTML === 'S') {
    result.innerHTML += parseInt(text.value) + '<br>';
    text.value = '';
  }
}

for (var i = 0; i < 12; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', outputNumber);
}
