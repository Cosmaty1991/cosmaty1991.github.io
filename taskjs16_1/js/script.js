$(function() {
  $('form').submit(function() {

    var urlFull = 'http://api.riffsy.com/v1/search?tag="+value+"&limit=50&output=json&callback=foo';

    $.ajax ({
      url: urlFull,
      dataType: 'jsonp',

      success: function(data, textStatus) {
        var ul = document.createElement('ul');

        $.each(data.results, function(i, val) {
          var li = document.createElement('li');
          li.innerHTML = '<a href="' + val.url + '"target="_blank">' + val.title + '</a><p class="url">' + val.url + '</p><p class="content">' + val.content + '</p>';
          ul.appendChild(li);
        });

        $('.results').html(ul);
      }
    });

    return false;
  });
});

function GoogleCallback(func, data) {
  window[func](data);
}
