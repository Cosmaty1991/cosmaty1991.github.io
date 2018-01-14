// tabs

// create tabs constructor

function Tabs() {

  // click on menu elements to change main sections

  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');

    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');

    for (var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');

      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  // create a function that will make active main sections

  var change = function(e) {
    clear();

    e.target.classList.add('active');

    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');

    initMap();
  }

  bindAll();
}

// show tabs

var connectTabs = new Tabs();
