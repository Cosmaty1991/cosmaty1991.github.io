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
    $('.section-rooms-luxe .available').html('');
    $('.section-rooms-luxe .booked').html('');

    for (var i = 0; i < totalRooms; i++) {
      if (roomsLuxe[i].status == 'available') {
        var availableRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsLuxe[i].title + '</h3>' +
            roomsLuxe[i].image +
            '<h4 class="section-rooms__heading">' + roomsLuxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsLuxe[i].text + '</p>' +
            '<button class="section-rooms__button" type="button">Book now</button>' +
          '</li>');

        availableRoom.attr('id', i)
        $('.section-rooms-luxe .available').append(availableRoom);
      } else {
        var bookedRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsLuxe[i].title + '</h3>' +
            roomsLuxe[i].image +
            '<h4 class="section-rooms__heading">' + roomsLuxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsLuxe[i].text + '</p>' +
            '<h3 class="section-rooms__heading">Booked by ' + roomsLuxe[i].name + '</h3>' +
          '</li>');

        bookedRoom.attr('id', i)
        $('.section-rooms-luxe .booked').append(bookedRoom);

        roomsBookedLuxe.push(roomsLuxe[i]);
      }
    }
  }

  showRoomsLuxe();

  // click on the book button to show the modal window

  $('.section-rooms-luxe .available .section-rooms__button').click(function() {
    var number = $(this).closest('.section-rooms__item').attr('id');

    $('.section-rooms-luxe .section-rooms__modal-window').fadeIn();
    $('.section-rooms-luxe .section-rooms__modal-number').text(number).fadeOut();

    return number;
  });

  // click on the modal button to book room

  $('.section-rooms-luxe .section-rooms__modal-form').submit(function(e) {
    e.preventDefault();

    var number = $('.section-rooms-luxe .section-rooms__modal-number').text();
    var name = $('.section-rooms-luxe .section-rooms__modal-input').val();

    roomsClassic[number].status = 'booked';
    roomsClassic[number].name = name;

    $('.section-rooms-luxe .section-rooms__modal-window').fadeOut('slow');

    showRoomsClassic();

    setTimeout(function() {
      $('.section-rooms-luxe .section-rooms__modal-input').val('');
      $('.section-rooms-luxe .section-rooms__modal-number').text('');
    }, 2000);
  });

  // click on the modal close button to close the modal window

  $('.section-rooms-luxe .section-rooms__modal-close').click(function() {
    $('.section-rooms-luxe .section-rooms__modal-window').fadeOut('slow');
  });
});
