// gallery

$(function() {
  var galleryButton = $('.section-gallery__button');
  var galleryWindow = $('.section-gallery__modal-window');
  var galleryClose = $('.section-gallery__modal-close');

  // click on the image to show the modal window

  galleryButton.click(function() {
    $(this).siblings(galleryWindow).fadeIn();
  });

  // click on the close button to close the modal window

  galleryClose.click(function() {
    galleryWindow.fadeOut();
  });
});
