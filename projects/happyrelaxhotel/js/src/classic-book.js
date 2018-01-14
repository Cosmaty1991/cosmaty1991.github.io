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
