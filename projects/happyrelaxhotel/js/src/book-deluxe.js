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
    $('.section-rooms-deluxe .available').html('');
    $('.section-rooms-deluxe .booked').html('');

    for (var i = 0; i < totalRooms; i++) {
      if (roomsDeluxe[i].status == 'available') {
        var availableRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsDeluxe[i].title + '</h3>' +
            roomsDeluxe[i].image +
            '<h4 class="section-rooms__heading">' + roomsDeluxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsDeluxe[i].text + '</p>' +
            '<button class="section-rooms__button" type="button">Book now</button>' +
          '</li>');

        availableRoom.attr('id', i)
        $('.section-rooms-deluxe .available').append(availableRoom);
      } else {
        var bookedRoom = $(
          '<li class="section-rooms__item">' +
            '<h3 class="section-rooms__header">' + roomsDeluxe[i].title + '</h3>' +
            roomsDeluxe[i].image +
            '<h4 class="section-rooms__heading">' + roomsDeluxe[i].price + '</h4>' +
            '<p class="section-rooms__text">' + roomsDeluxe[i].text + '</p>' +
            '<h3 class="section-rooms__heading">Booked by ' + roomsDeluxe[i].name + '</h3>' +
          '</li>');

        bookedRoom.attr('id', i)
        $('.section-rooms-deluxe .booked').append(bookedRoom);

        roomsBookedDeluxe.push(roomsDeluxe[i]);
      }
    }
  }

  showRoomsDeluxe();

  // click on the book button to show the modal window

  $('.section-rooms-deluxe .available .section-rooms__button').click(function() {
    var number = $(this).closest('.section-rooms__item').attr('id');

    $('.section-rooms-deluxe .section-rooms__modal-window').fadeIn();
    $('.section-rooms-deluxe .section-rooms__modal-number').text(number).fadeOut();

    return number;
  });

  // click on the modal button to book room

  $('.section-rooms-deluxe .section-rooms__modal-form').submit(function(e) {
    e.preventDefault();

    var number = $('.section-rooms-deluxe .section-rooms__modal-number').text();
    var name = $('.section-rooms-deluxe .section-rooms__modal-input').val();

    roomsClassic[number].status = 'booked';
    roomsClassic[number].name = name;

    $('.section-rooms-deluxe .section-rooms__modal-window').fadeOut('slow');

    showRoomsClassic();

    setTimeout(function() {
      $('.section-rooms-deluxe .section-rooms__modal-input').val('');
      $('.section-rooms-deluxe .section-rooms__modal-number').text('');
    }, 2000);
  });

  // click on the modal close button to close the modal window

  $('.section-rooms-deluxe .section-rooms__modal-close').click(function() {
    $('.section-rooms-deluxe .section-rooms__modal-window').fadeOut('slow');
  });
});
