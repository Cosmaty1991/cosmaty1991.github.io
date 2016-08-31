// menu

$(function() {
  $('.menu li').hover(function() {
    $(this).find('ul:first').animate({visibility: 'toggle'}, 'slow', 'linear');
  });

  $('.menu li').hover(function() {
    $('.menu li ul li').animate({backgroundColor: '#7d7e7d'}, 5000, 'linear');
  });
});

// carousel

$(function() {
  $('.jcarousel').jcarousel();

  $('.jcarousel-control-prev')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

  $('.jcarousel-control-next')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '+=1'
    });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination();
});

// select

$(function() {
  $('select').selectbox();
});

// checkbox js

$('.checkbox').customRadioCheck();
