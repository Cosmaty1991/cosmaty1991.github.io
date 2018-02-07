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
