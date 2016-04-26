$(function() {
  var html = $('#page').html();

  var box = [
    {
      title: 'Григоренко Владислав Игоревич',
      content: 'src=img/photo1.jpg'
    },

    {
      title: 'Менеджер по продажам',
    },

    {
      title: 'Хочу учить Front End, потому что:',
      content: 'Профессия менеджера - это скучно и неинтересно'
    },

    {
      content: 'IT интересует ещё со школьных времён'
    },

    {
      content: 'Front End нравится больше всего'
    },

    {
      title: 'Мой контактный телефон:',
      content: '+380954443953'
    },

    {
      title: 'Мой профиль в Facebook:',
      content: 'facebook.com'
    },

    {
      title: 'Мой фидбек:',
      content: 'Спасибо за интересные курсы'
    }
  ];

  var content = tmpl(html, {
    data: box
  });

  $('body').append(content);
});
