var form = document.createElement('form');
document.body.appendChild(form);

var p = document.createElement('p');
p.innerHTML = 'Тест по программированию';
form.appendChild(p);

var ol = document.createElement('ol');
var li = document.createElement('li');
var ul = document.createElement('ul');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

li.innerHTML = 'Вопрос №1';
form.appendChild(ol);
ol.appendChild(li);
li.appendChild(ul);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'id';

var label = document.createElement('label');
label.htmlFor = 'id';
label.appendChild(document.createTextNode('Вариант ответа №1'));
li2.appendChild(checkbox);
li2.appendChild(label);

var checkbox2 = document.createElement('input');
checkbox2.type = 'checkbox';
checkbox2.id = 'id2';

var label2 = document.createElement('label');
label2.htmlFor = 'id2';
label2.appendChild(document.createTextNode('Вариант ответа №2'));
li3.appendChild(checkbox2);
li3.appendChild(label2);

var checkbox3 = document.createElement('input');
checkbox3.type = 'checkbox';
checkbox3.id = 'id3';

var label3 = document.createElement('label');
label3.htmlFor = 'id3';
label3.appendChild(document.createTextNode('Вариант ответа №3'));
li4.appendChild(checkbox3);
li4.appendChild(label3);

var li5 = document.createElement('li');
li5.innerHTML = 'Вопрос №2';
ol.appendChild(li5);

var ul2 = document.createElement('ul');
var li6 = document.createElement('li');
var li7 = document.createElement('li');
var li8 = document.createElement('li');

li5.appendChild(ul2);
ul2.appendChild(li6);
ul2.appendChild(li7);
ul2.appendChild(li8);

var checkbox4 = document.createElement('input');
checkbox4.type = 'checkbox';
checkbox4.id = 'id4';

var label4 = document.createElement('label');
label4.htmlFor = 'id4';
label4.appendChild(document.createTextNode('Вариант ответа №1'));
li6.appendChild(checkbox4);
li6.appendChild(label4);

var checkbox5 = document.createElement('input');
checkbox5.type = 'checkbox';
checkbox5.id = 'id5';

var label5 = document.createElement('label');
label5.htmlFor = 'id5';
label5.appendChild(document.createTextNode('Вариант ответа №2'));
li7.appendChild(checkbox5);
li7.appendChild(label5);

var checkbox6 = document.createElement('input');
checkbox6.type = 'checkbox';
checkbox6.id = 'id6';

var label6 = document.createElement('label');
label6.htmlFor = 'id6';
label6.appendChild(document.createTextNode('Вариант ответа №3'));
li8.appendChild(checkbox6);
li8.appendChild(label6);

var li9 = document.createElement('li');
li9.innerHTML = 'Вопрос №3';
ol.appendChild(li9);

var ul3 = document.createElement('ul');
var li10 = document.createElement('li');
var li11 = document.createElement('li');
var li12 = document.createElement('li');

li9.appendChild(ul3);
ul3.appendChild(li10);
ul3.appendChild(li11);
ul3.appendChild(li12);

var checkbox7 = document.createElement('input');
checkbox7.type = 'checkbox';
checkbox7.id = 'id7';

var label7 = document.createElement('label');
label7.htmlFor = 'id7';
label7.appendChild(document.createTextNode('Вариант ответа №1'));
li10.appendChild(checkbox7);
li10.appendChild(label7);

var checkbox8 = document.createElement('input');
checkbox8.type = 'checkbox';
checkbox8.id = 'id8';

var label8 = document.createElement('label');
label8.htmlFor = 'id8';
label8.appendChild(document.createTextNode('Вариант ответа №2'));
li11.appendChild(checkbox8);
li11.appendChild(label8);

var checkbox9 = document.createElement('input');
checkbox9.type = 'checkbox';
checkbox9.id = 'id9';

var label9 = document.createElement('label');
label9.htmlFor = 'id9';
label9.appendChild(document.createTextNode('Вариант ответа №3'));
li12.appendChild(checkbox9);
li12.appendChild(label9);

var submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Проверить мои результаты'
submit.className = 'submit';
form.appendChild(submit);
