// tabs

$(function() {
  $('.main__subitem a').click(function(e) {
    e.preventDefault();
	
    $(this).removeClass('active');
    $(this).addClass('active');
	
    $('.section__list').find('.section__item').hide();
	
    var content = this.hash.replace('/', '');
	
    $(content).fadeIn(2000);
  });
});
