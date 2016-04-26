(function($) {
  $.fn.carousel = function() {

    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 425;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += 425;
        elementsList.animate({left: currentLeftValue + 'px'}, 500);
      }
    });

    rightUIEl.click(function() {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 425;
        elementsList.animate({left: currentLeftValue + 'px'}, 500);
      }
    });

    return this;
  };
})(jQuery);
