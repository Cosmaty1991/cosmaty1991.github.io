(function($) {
  $.fn.styledselect = function() {
    $('select').each(function() {
      $('select').css('display', 'none');

      $(this).addClass('select-hidden');
      $(this).wrap('<div class="select"></div>');
      $(this).after('<div class="select-styled"></div><span>▼</span>');

      var styledSelect = $(this).next('div.select-styled');
      styledSelect.text($(this).children('option').eq(0).text());

      var list = $('<ul></ul>', {'class': 'select-options'}).insertAfter(styledSelect);

      for (var i = 0; i < $(this).children('option').length; i++) {
        $('<li></li>', {text: $(this).children('option').eq(i).text()}).appendTo(list);
      }

      var listItems = list.children('li');

      $('span').css({
        'display': 'inline',
        'float': 'left',
        'position': 'absolute',
        'top': '15px',
        'left': '90px',
        'cursor': 'pointer'
      });

      $('div.select-styled').css({
        'float': 'left',
        'border': '1px solid black',
        'width': '90px',
        'padding': '5px',
        'text-align': 'center',
        'cursor': 'pointer',
        'font-family': 'Arial'
      });

      $('ul.select-options').hide();

      $('ul.select-options').css({
        'list-style': 'none',
        'margin': '0px',
        'padding': '0px',
        'border': '1px solid black',
        'width': '100px',
        'text-align': 'center',
        'cursor': 'pointer',
        'font-family': 'Arial'
      });

      $('ul.select-options li').css({
        'border-bottom': '1px solid black',
        'padding': '5px',
        'padding-top': '5px'
      });

      $('ul.select-options li:last-child').css('border-bottom', 'none');

      $('ul.select-options li').hover(function() {
        $(this).css('background-color', 'lightgrey');
      }, function() {
          $(this).css('background-color', 'white');
      });

      $('div.select-styled').hover(function() {
        $(this).css('background-color', 'white');
      });

      styledSelect.click(function(e) {
        e.stopPropagation();

        $('div.select-styled.active').not(this).each(function() {
          $(this).removeClass('active').next('ul.select-options').hide();
        });

        $(this).toggleClass('active').next('ul.select-options').toggle();
      });

      listItems.click(function(e) {
        e.stopPropagation();

        styledSelect.text($(this).text()).removeClass('active');
        list.hide();
      });

      $(document).click(function() {
        styledSelect.removeClass('active');
        list.hide();
        $('span').css('display', 'block');
      });

      $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          styledSelect.removeClass('active');
          list.hide();
          $('span').css('display', 'block');
        }
      });
    });
  }
})(jQuery);
