$(function() {
  var tabs =  $(".tabs li a");

  tabs.click(function(e) {
	e.preventDefault();
    var content = this.hash.replace('/', '');
    tabs.removeClass("active");
    $(this).addClass("active");
    $('.content').find('li').hide();
    $(content).fadeIn(1000);
  });
});
