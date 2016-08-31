'use strict';

$(function() {
  var html = $('#page').html();

  var form = [
    {
      paragraph: 'Тест по программированию'
    },
	
    {
      question: 'Какая версия HTML поддерживает такие теги как: header, footer, main, nav, section?',
      answers: [
        {
          answer: 'HTML4',
          correct: false
        },
        {
          answer: 'HTML5',
          correct: true
        },
        {
          answer: 'HTML3',
          correct: false
        }
      ]
    },

    {
      question: 'Какая версия CSS поддерживает такие свойства как: box-shadow, box-sizing, border-radius, opacity, transition?',
      answers: [
        {
          answer: 'CSS2',
          correct: false
        },
        {
          answer: 'CSS1',
          correct: false
        },
        {
          answer: 'CSS3',
          correct: true
        }
      ]
    },

    {
      question: 'Какая версия ECMAScript используется в современном JavaScript?',
      answers: [
        {
          answer: 'ECMAScript 5',
          correct: true
        },
        {
          answer: 'ECMAScript 3',
          correct: false
        },
        {
          answer: 'ECMAScript 4',
          correct: false
        }
      ]
    }
  ];

  var string = JSON.stringify(form);
  localStorage.setItem('test', string);

  var object = localStorage.getItem('test');
  object = JSON.parse(object);

  var content = tmpl(html, {
    data: object
  });

  $('body').append(content);
});

$(function() {
  function showFirstModal() {
    $('.overlay').fadeIn(400, function() {
      $('.modal')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
      $('input:checked').removeAttr('checked');
    });
    $('.modal h1').html('Поздравляю с успешным прохождением теста!');
  };

  function showSecondModal() {
    $('.overlay').fadeIn(400, function() {
      $('.modal')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
      $('input:checked').removeAttr('checked');
    });
    $('.modal h1').html('Тест не пройден!<br>Можете повторить попытку...');
  };

  function closeModal() {
    $('.close, .overlay').click(function() {
      $('.modal').animate({opacity: 0, top: '45%'}, 200, function() {
        $(this).css('display', 'none');
        $('.overlay').fadeOut(400);
      });
    });
  };

  $('.submit').click(function(e) {
    e.preventDefault();

    var active = $('input:checked');
    var correct = $('.correct');

    if (active.length == correct.length) {
      var counter = 0;

      for (var i = 0; i < active.length; i++) {
        if (active[i].getAttribute('class') == 'correct') {
          counter++;
        }
      }

      if (counter == correct.length) {
        showFirstModal();

      } else {
        showSecondModal();
      }

    } else {
      showSecondModal();
    }

    closeModal();
  });
});
