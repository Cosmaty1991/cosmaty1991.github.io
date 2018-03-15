// filter

$(function() {
  var filterAll = $('.section-rooms__filter-all');
  var filterAvailable = $('.section-rooms__filter-available');
  var filterBooked = $('.section-rooms__filter-booked');
  var titleAvailable = $('.section-rooms__title-available');
  var listAvailable = $('.section-rooms__list.available');
  var titleBooked = $('.section-rooms__title-booked');
  var listBooked = $('.section-rooms__list.booked');

  // click on the all button to show all rooms

  filterAll.click(function() {
    $(this).addClass('filter-active');
    filterAvailable.removeClass('filter-active');
    filterBooked.removeClass('filter-active');
    titleAvailable.fadeIn();
    listAvailable.fadeIn();
    titleBooked.fadeIn();
    listBooked.fadeIn();
  });

  // click on the available button to show available rooms

  filterAvailable.click(function() {
    $(this).addClass('filter-active');
    filterAll.removeClass('filter-active');
    filterBooked.removeClass('filter-active');
    titleAvailable.fadeIn();
    listAvailable.fadeIn();
    titleBooked.fadeOut();
    listBooked.fadeOut();
  });

// click on the booked button to show booked rooms

  filterBooked.click(function() {
    $(this).addClass('filter-active');
    filterAll.removeClass('filter-active');
    filterAvailable.removeClass('filter-active');
    titleAvailable.fadeOut();
    listAvailable.fadeOut();
    titleBooked.fadeIn();
    listBooked.fadeIn();
  });
});
