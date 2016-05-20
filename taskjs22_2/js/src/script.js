'use strict';

$(() => {
  let html = $('#page').html();

  const form = [
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

  let string = JSON.stringify(form);
  localStorage.setItem('test', string);

  let object = localStorage.getItem('test');
  object = JSON.parse(object);

  let content = tmpl(html, {
    data: object
  });

  $('body').append(content);
});

$(() => {
  let showFirstModal = () => {
    $('.overlay').fadeIn(400, () => {
      $('.modal')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
      $('input:checked').removeAttr('checked');
    });
    $('.modal h1').html('Поздравляю с успешным прохождением теста!');
  };

  let showSecondModal = () => {
    $('.overlay').fadeIn(400, () => {
      $('.modal')
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
      $('input:checked').removeAttr('checked');
    });
    $('.modal h1').html(`Тест не пройден!
    Можете повторить попытку...`);
  };

  let closeModal = () => {
    $('.close, .overlay').click(() => {
      $('.modal').animate({opacity: 0, top: '45%'}, 200, () => {
        $(this).css('display', 'none');
        $('.overlay').fadeOut(400);
      });
    });
  };

  $('.submit').click((e) => {
    e.preventDefault();

    let active = $('input:checked');
    let correct = $('.correct');

    if (active.length == correct.length) {
      let counter = 0;

      for (let i = 0; i < active.length; i++) {
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
