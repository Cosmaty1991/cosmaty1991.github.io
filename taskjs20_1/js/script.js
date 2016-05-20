// slider

$(function() {
  $('.slider__div').jcarousel();

  $('.slider__page')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination();
});

// accordion

$(function() {
  $('.accordion__button').on('click', function(e) {
    e.preventDefault();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next()
        .stop()
        .slideUp(300);

    } else {
      $(this).addClass('active');
      $(this).next()
        .stop()
        .slideDown(300);
    }
  });
});
