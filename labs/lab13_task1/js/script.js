document.body.style.width = '400px';

for (var i = 0; i < 6; i++) {
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

  document.body.appendChild(button);
}

function changeColor() {
  this.style.backgroundColor = 'red';
}

document.querySelector('.button1').addEventListener('mouseenter', changeColor);
document.querySelector('.button2').addEventListener('mouseout', changeColor);
document.querySelector('.button3').addEventListener('mouseover', changeColor);
document.querySelector('.button4').addEventListener('mousedown', changeColor);
document.querySelector('.button5').addEventListener('mouseup', changeColor);
document.querySelector('.button6').addEventListener('click', changeColor);
