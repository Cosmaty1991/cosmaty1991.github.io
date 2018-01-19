// search

$(function() {
  var input = $('.header-search__input');
  var clear = $('.header-search__clear');
  var submit = $('.header-search__submit');
  var content = $('body');
  var results;
  var currentClass = 'current';
  var offsetTop = 50;
  var currentIndex = 0;

  // create a function that will jump to the element matching the current index

  function jumpTo() {
    if (results.length) {
      var position;
      var current = results.eq(currentIndex);

      results.removeClass(currentClass);

      if (current.length) {
        current.addClass(currentClass);

        position = current.offset().top - offsetTop;
        window.scrollTo(0, position);
      }
    }
  }

  // create a function that will search for the entered keyword in the specified context on input

  input.on('input', function() {
    var searchVal = this.value;
    content.unmark({
      done: function() {
        content.mark(searchVal, {
          separateWordSearch: true,

          done: function() {
            results = content.find('mark');
            currentIndex = 0;
          },

          noMatch: function() {
            alert('No results');
          }
        });
      }
    });
  });

  // click on the sumbit button to show the result

  submit.on('click', function(e) {
    e.preventDefault();

    jumpTo();
  });

  // press the enter button to show the result

  input.on('keypress', function(e) {
    if (e.which == 13 || e.keyCode == 13) {
      jumpTo();
    }
  });

  // create a function that will show the clear button when input is active

  input.on('input', function() {
    clear.fadeIn();

    if (input.val().length === 0) {
      clear.fadeOut();
    }
  });

  // click on the clear button to clear the input

  clear.on('click', function(e) {
    e.preventDefault();

    content.unmark();
    input.val('').focus();
  });
});
