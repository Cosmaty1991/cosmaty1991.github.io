var object = {
  generateForm: function() {
    var form = document.createElement('form');
    document.body.appendChild(form);

    var p = document.createElement('p');
    p.innerHTML = 'Тест по программированию';
    form.appendChild(p);

    var ol = document.createElement('ol');
    form.appendChild(ol);

    for (var i = 0; i < 3; i++) {
      var list = document.createElement('li');
      list.innerHTML = 'Вопрос №' + (i + 1);
      ol.appendChild(list);

      var ul = document.createElement('ul');
      list.appendChild(ul);

      for (var j = 0; j < 3; j++) {
        var li = document.createElement('li');
        ul.appendChild(li);

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = (i + 1) / (j + 3);
        li.appendChild(checkbox);

        var label = document.createElement('label');
        label.innerHTML = 'Вариант ответа №' + (j + 1);
        label.htmlFor = (i + 1) / (j + 3);
        li.appendChild(label);
      }
    }

    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Проверить мои результаты'
    submit.className = 'submit';
    form.appendChild(submit);
  }
}

object.generateForm();
