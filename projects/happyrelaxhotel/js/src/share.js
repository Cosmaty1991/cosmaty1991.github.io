// share

var facebookShare = document.querySelector('.facebook-share');
var twitterShare = document.querySelector('.twitter-share');
var googleShare = document.querySelector('.google-share');

// click on the button to show new window for facebook share

facebookShare.onclick = function() {
  var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?url=' + document.URL);

  if (facebookWindow.focus) {
    facebookWindow.focus();
  }

  return false;
}

// click on the button to show new window for twitter share

twitterShare.onclick = function() {
  var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL);

  if (twitterWindow.focus) {
    twitterWindow.focus();
  }

  return false;
}

// click on the button to show new window for google+ share

googleShare.onclick = function() {
  var googleWindow = window.open('https://plus.google.com/share?url=' + document.URL);

  if (googleWindow.focus) {
    googleWindow.focus();
  }

  return false;
}
