// menu for mobile and tablet

$(function() {

  // click on the menu button to show the modal window

  $('.header__modal-button').click(function() {
    $('.header__modal-window').fadeIn();
  });

  // click on link to show or close the submenu

  $('.header__modal-window .header__item').click(function() {
    $(this).find('.header__sublist').toggle();
  });

  // click on the submenu link to close the modal window

  $('.header__modal-window .header__link').click(function() {
    $('.header__modal-window').fadeOut();
  });

  // click on the close button to close the modal window

  $('.header__modal-window .header__modal-close').click(function() {
    $('.header__modal-window').fadeOut();
  });
});

// tabs

$(function() {

  // click on the submenu link to show the content

  $('.header__link').click(function(e) {
    e.preventDefault();

    $(this).removeClass('active');
    $(this).addClass('active');

    $('.main__list').find('.main__item').hide();

    var content = this.hash.replace('/', '');

    $(content).fadeIn(2000);
  });
});
