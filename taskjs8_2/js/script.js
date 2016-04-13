$(function() {
  $("input").hover(function() {
    $(this).next("div").stop(true, true).animate({opacity: 'show', top: '25'}, 'slow');
  }, function() {
    $(this).next("div").stop(true, true).animate({opacity: 'hide'}, 'fast');
  });

  $('.firstname').click(function() {
    $('.firstname2').animate({opacity: 'show', top: '25'}, 'slow');
  }).mouseleave(function() {
    $('.firstname2').animate({opacity: 'hide'}, 'fast');
  });

  $('.lastname').click(function() {
    $('.lastname2').animate({opacity: 'show', top: '25'}, 'slow');
  }).mouseleave(function() {
    $('.lastname2').animate({opacity: 'hide'}, 'fast');
  });

  $('.address').click(function() {
    $('.address2').animate({opacity: 'show', top: '25'}, 'slow');
  }).mouseleave(function() {
    $('.address2').animate({opacity: 'hide'}, 'fast');
  });

  $('button').click(function() {
    $('div').animate({opacity: 'show', top: '25'}, 'slow');
  });
});
