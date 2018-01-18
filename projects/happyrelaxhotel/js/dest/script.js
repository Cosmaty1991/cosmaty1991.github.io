// booking classic rooms

$(function() {

  // create classic rooms array

  var roomsClassic = [];
  var roomsBookedClassic = [];

  // create classsic rooms constructor

  function RoomClassic(title, image, price, text, status, name) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.text = text;
    this.status = status;
    this.name = name;
  }

  // add classic rooms

  roomsClassic.push(new RoomClassic(
    'Classic Room 301',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 302',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 303',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 304',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 305',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 306',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'available'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 307',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'booked',
    'John Grisom'));

  roomsClassic.push(new RoomClassic(
    'Classic Room 308',
    '<img src="img/classic.jpg" alt="Classic Room" class="section-rooms__image">',
    '$250 / day',
    'The newly renovated regular rooms are beautifully redesigned and decorated with stylish furnishings, looks more wide and comfort.',
    'booked',
    'Ally Watterfall'));

  // total classic rooms

  var totalRooms = roomsClassic.length;

  // create a function that will add classic rooms on website

  function showRoomsClassic() {
    $('#section-rooms-classic .available').html('');
    $('#section-rooms-classic .booked').html('');

    for (var i = 0; i < totalRooms; i++) {
      if (roomsClassic[i].status == 'available') {
        var availableRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header1">' + roomsClassic[i].title + '</h3>' +
            roomsClassic[i].image +
            '<h4 class="section-rooms__header2">' + roomsClassic[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsClassic[i].text + '</p>' +
            '<a href="#" class="section-rooms__button">Book now</a>' +
          '</li>');

        availableRoom.attr('id', i)
        $('#section-rooms-classic .available').append(availableRoom);
      } else {
        var bookedRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header1">' + roomsClassic[i].title + '</h3>' +
            roomsClassic[i].image +
            '<h4 class="section-rooms__header2">' + roomsClassic[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsClassic[i].text + '</p>' +
            '<h3 class="section-rooms__header1">Booked by ' + roomsClassic[i].name + '</h3>' +
          '</li>');

        bookedRoom.attr('id', i)
        $('#section-rooms-classic .booked').append(bookedRoom);

        roomsBookedClassic.push(roomsClassic[i]);
      }
    }
  }

  showRoomsClassic();

  // click on the book button to show the modal window

  $('#section-rooms-classic .available').on('click', '.section-rooms__button', function(e) {
    e.preventDefault();

    var number = $(this).closest('.section-rooms__item').attr('id');

    $('#section-rooms-classic .section-rooms__modal-window').fadeIn();
    $('#section-rooms-classic .section-rooms__modal-number').text(number).css('display', 'none');

    return number;
  });

  // click on the modal button to book room

  $('#section-rooms-classic .section-rooms__modal-window .section-rooms__modal-form').on('submit', function(e) {
    e.preventDefault();

    var number = $('#section-rooms-classic .section-rooms__modal-number').text();
    var name = $('#section-rooms-classic .section-rooms__modal-input').val();

    roomsClassic[number].status = 'booked';
    roomsClassic[number].name = name;

    $('#section-rooms-classic .section-rooms__modal-window').fadeOut('slow');

    showRoomsClassic();

    setTimeout(function() {
      $('#section-rooms-classic .section-rooms__modal-input').val('');
      $('#section-rooms-classic .section-rooms__modal-number').text('');
    }, 2000);
  });

  // click on the modal close button to close the modal window

  $('#section-rooms-classic .section-rooms__modal-window').on('click', '.section-rooms__modal-close', function(e) {
    e.preventDefault();

    $('#section-rooms-classic .section-rooms__modal-window').fadeOut('slow');
  });
});

// booking deluxe rooms

$(function() {

  // create deluxe rooms array

  var roomsDeluxe = [];
  var roomsBookedDeluxe = [];

  // create new deluxe rooms constructor

  function RoomDeluxe(title, image, price, text, status, name) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.text = text;
    this.status = status;
    this.name = name;
  }

  // add deluxe rooms

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 701',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 702',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 703',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'booked',
    'Jackie Hunt'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 704',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'booked',
    'Nick Colton'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 705',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 706',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 707',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  roomsDeluxe.push(new RoomDeluxe(
    'Deluxe Room 708',
    '<img src="img/deluxe.jpg" alt="Deluxe Room" class="section-rooms__image">',
    '$650 / day',
    'This legendary 120sqm suite features a large bedroom with sitting area, spacious bathroom, dining area and living room.',
    'available'));

  // total deluxe rooms

  var totalRooms = roomsDeluxe.length;

  // create a function that will add deluxe rooms on website

  function showRoomsDeluxe() {
    $('#section-rooms-deluxe .available').html('');
    $('#section-rooms-deluxe .booked').html('');

    for (var i = 0; i < totalRooms; i++) {
      if (roomsDeluxe[i].status == 'available') {
        var availableRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header1">' + roomsDeluxe[i].title + '</h3>' +
            roomsDeluxe[i].image +
            '<h4 class="section-rooms__header2">' + roomsDeluxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsDeluxe[i].text + '</p>' +
            '<a href="#" class="section-rooms__button">Book now</a>' +
          '</li>');

        availableRoom.attr('id', i)
        $('#section-rooms-deluxe .available').append(availableRoom);
      } else {
        var bookedRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header1">' + roomsDeluxe[i].title + '</h3>' +
            roomsDeluxe[i].image +
            '<h4 class="section-rooms__header2">' + roomsDeluxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsDeluxe[i].text + '</p>' +
            '<h3 class="section-rooms__header1">Booked by ' + roomsDeluxe[i].name + '</h3>' +
          '</li>');

        bookedRoom.attr('id', i)
        $('#section-rooms-deluxe .booked').append(bookedRoom);

        roomsBookedDeluxe.push(roomsDeluxe[i]);
      }
    }
  }

  showRoomsDeluxe();

  // click on the book button to show the modal window

  $('#section-rooms-deluxe .available').on('click', '.section-rooms__button', function(e) {
    e.preventDefault();

    var number = $(this).closest('.section-rooms__item').attr('id');

    $('#section-rooms-deluxe .section-rooms__modal-window').fadeIn();
    $('#section-rooms-deluxe .section-rooms__modal-number').text(number).css('display', 'none');

    return number;
  });

  // click on the modal button to book room

  $('#section-rooms-deluxe .section-rooms__modal-window .section-rooms__modal-form').on('submit', function(e) {
    e.preventDefault();

    var number = $('#section-rooms-deluxe .section-rooms__modal-number').text();
    var name = $('#section-rooms-deluxe .section-rooms__modal-input').val();

    roomsClassic[number].status = 'booked';
    roomsClassic[number].name = name;

    $('#section-rooms-deluxe .section-rooms__modal-window').fadeOut('slow');

    showRoomsClassic();

    setTimeout(function() {
      $('#section-rooms-deluxe .section-rooms__modal-input').val('');
      $('#section-rooms-deluxe .section-rooms__modal-number').text('');
    }, 2000);
  });

  // click on the modal close button to close the modal window

  $('#section-rooms-deluxe .section-rooms__modal-window').on('click', '.section-rooms__modal-close', function(e) {
    e.preventDefault();

    $('#section-rooms-deluxe .section-rooms__modal-window').fadeOut('slow');
  });
});

// internet explorer hover fix

for (var i = 0; i < document.querySelectorAll('.header-menu__item').length; i++) {
  document.querySelectorAll('.header-menu__item')[1].addEventListener('mouseover', function(){
    document.querySelector('.rooms__list').style.display = 'block';
  });
  
  document.querySelector('.rooms__list').addEventListener('mouseout', function(){
    this.style.display = 'none';
  });
}
// booking luxe rooms

$(function() {

  // create luxe rooms array

  var roomsLuxe = [];
  var roomsBookedLuxe = [];

  // create luxe rooms constructor

  function RoomLuxe(title, image, price, text, status, name) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.text = text;
    this.status = status;
    this.name = name;
  }

  // add luxe rooms

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 501',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 502',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 503',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 504',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 505',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'booked',
    'Mike Bolton'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 506',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'booked',
    'Katie Bowman'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 507',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  roomsLuxe.push(new RoomLuxe(
    'Luxe Room 508',
    '<img src="img/luxe.jpg" alt="Luxe Room" class="section-rooms__image">',
    '$450 / day',
    'Occupying 62sqm, these newly remodeled mid-sized guest rooms offer ample space for the ultimate relaxation and comfort.',
    'available'));

  // total luxe rooms

  var totalRooms = roomsLuxe.length;

  // create a function that will add luxe rooms on website

  function showRoomsLuxe() {
    $('#section-rooms-luxe .available').html('');
    $('#section-rooms-luxe .booked').html('');

    for (var i = 0; i < totalRooms; i++) {
      if (roomsLuxe[i].status == 'available') {
        var availableRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header1">' + roomsLuxe[i].title + '</h3>' +
            roomsLuxe[i].image +
            '<h4 class="section-rooms__header2">' + roomsLuxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsLuxe[i].text + '</p>' +
            '<a href="#" class="section-rooms__button">Book now</a>' +
          '</li>');

        availableRoom.attr('id', i)
        $('#section-rooms-luxe .available').append(availableRoom);
      } else {
        var bookedRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header1">' + roomsLuxe[i].title + '</h3>' +
            roomsLuxe[i].image +
            '<h4 class="section-rooms__header2">' + roomsLuxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsLuxe[i].text + '</p>' +
            '<h3 class="section-rooms__header1">Booked by ' + roomsLuxe[i].name + '</h3>' +
          '</li>');

        bookedRoom.attr('id', i)
        $('#section-rooms-luxe .booked').append(bookedRoom);

        roomsBookedLuxe.push(roomsLuxe[i]);
      }
    }
  }

  showRoomsLuxe();

  // click on the book button to show the modal window

  $('#section-rooms-luxe .available').on('click', '.section-rooms__button', function(e) {
    e.preventDefault();

    var number = $(this).closest('.section-rooms__item').attr('id');

    $('#section-rooms-luxe .section-rooms__modal-window').fadeIn();
    $('#section-rooms-luxe .section-rooms__modal-number').text(number).css('display', 'none');

    return number;
  });

  // click on the modal button to book room

  $('#section-rooms-luxe .section-rooms__modal-window .section-rooms__modal-form').on('submit',   function(e) {
    e.preventDefault();

    var number = $('#section-rooms-luxe .section-rooms__modal-number').text();
    var name = $('#section-rooms-luxe .section-rooms__modal-input').val();

    roomsClassic[number].status = 'booked';
    roomsClassic[number].name = name;

    $('#section-rooms-luxe .section-rooms__modal-window').fadeOut('slow');

    showRoomsClassic();

    setTimeout(function() {
      $('#section-rooms-luxe .section-rooms__modal-input').val('');
      $('#section-rooms-luxe .section-rooms__modal-number').text('');
    }, 2000);
  });

  // click on the modal close button to close the modal window

  $('#section-rooms-luxe .section-rooms__modal-window').on('click', '.section-rooms__modal-close', function(e) {
    e.preventDefault();

    $('#section-rooms-luxe .section-rooms__modal-window').fadeOut('slow');
  });
});

// map

function initMap() {

  // create coordinates

  var myLatLng = {
    lat: 51.5181829,
    lng: -0.1519262
  };

  // create the map

  var map = new google.maps.Map(document.querySelector('.section-contact__map'), {
    zoom: 16,
    center: myLatLng
  });

  // create the marker on the map

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

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

// slider

// initial number of slides

var slideIndex = 1;

// show slides

showSlides(slideIndex);

// create a function that will show previous slide

function prevSlide(n) {
  showSlides(slideIndex -= n);
}

// create a function that will show next slide

function nextSlide(n) {
  showSlides(slideIndex += n);
}

// create a function that will show current slide

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// create a function that will show slides

function showSlides(n) {
  var slides = document.querySelectorAll('.header-slider__item');

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

// click on previous arrow to show previous slide

document.querySelector('.header-slider__item-prev').addEventListener('click', function(e) {
  e.preventDefault();

  prevSlide(1);
});

// click on next arrow to show next slide

document.querySelector('.header-slider__item-next').addEventListener('click', function(e) {
  e.preventDefault();

  nextSlide(1);
});

// press on the left arrow to show previous slide and press on the right arrow to show next slide

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    prevSlide(1);
  } else if (e.keyCode === 39) {
    nextSlide(1);
  }
});

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
