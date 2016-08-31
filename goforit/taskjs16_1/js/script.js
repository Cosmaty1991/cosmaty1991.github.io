$(function() {
  $('form').submit(function() {
    wikiAPI();
  });

  function wikiAPI(){
    var value = $('.search').val();

      if (value == '') {

    } else {
      var urlFull = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + value + '&format=json&callback=?';

      $.ajax({
        url: urlFull,
        async: true,
        dataType: 'jsonp',
        type: 'GET',

        success: function(data) {
          $('.results').html('');

          for (var i = 0; i < data.length; i++) {
            $('.results').prepend("<li class='topic'><a href=" + data[3][i] + ">" + data[1][i] + "</a></li>");
          }
        }
      });
    }
  }
});
