// share

// share on facebook

var facebookShare = document.querySelector('.facebook-share');

// click on the button to show new window for facebook share

facebookShare.onclick = function(e) {
  e.preventDefault();

  var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?url=' + document.URL);

  if (facebookWindow.focus) {
    facebookWindow.focus();
  }

  return false;
}

// share on twitter

var twitterShare = document.querySelector('.twitter-share');

// click on the button to show new window for twitter share

twitterShare.onclick = function(e) {
  e.preventDefault();

  var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL);

  if (twitterWindow.focus) {
    twitterWindow.focus();
  }

  return false;
}

// share on google+

var googleShare = document.querySelector('.google-share');

// click on the button to show new window for google+ share

googleShare.onclick = function(e) {
  e.preventDefault();

  var googleWindow = window.open('https://plus.google.com/share?url=' + document.URL);

  if (googleWindow.focus) {
    googleWindow.focus();
  }

  return false;
}
