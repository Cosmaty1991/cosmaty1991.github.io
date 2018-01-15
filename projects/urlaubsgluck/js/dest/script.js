// isotope

$(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    userinput = document.getElementById('section__search');
    $('.section__list').empty();

    (function() {
      var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

      $.getJSON(flickrAPI, {
          tags: userinput.value,
          tagmode: 'any',
          format: 'json'
        })

        .done(function(data) {
          $.each(data.items, function(i, item) {
            $('<li class="section__item">')
              .attr({'style': 'background-image: url(' + item.media.m + ')'}).appendTo('.section__list')
              .html(item.title);

            if (i === 6) {
              return false;
            }
          });
        });
    })();
  });

  (function() {
    var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

    $.getJSON(flickrAPI, {
        tags: 'cities',
        tagmode: 'any',
        format: 'json'
      })

      .done(function(data) {
        $.each(data.items, function(i, item) {
          $('<li class="section__item">')
            .attr({'style': 'background-image: url(' + item.media.m + ')'}).appendTo('.section__list')
            .html(item.title);
          if (i === 6) {
            return false;
          }
        });
      });
  })();
});

var $grid = $('.section__list').imagesLoaded(function() {
  $grid.isotope({
    itemSelector: '.section__item',
    layoutMode: 'fitRows'
  });
});

// slider

$(function() {
  $('.main__div').jcarousel();

  $('.main__prev')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

  $('.main__next')
    .on('jcarouselcontrol:active', function() {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function() {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '+=1'
    });
});