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
