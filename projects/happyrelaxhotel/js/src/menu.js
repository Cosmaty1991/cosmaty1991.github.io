// menu for mobile and tablet

var modalButton = document.querySelector('.header-menu__button');
var modalWindow = document.querySelector('.header-menu__modal-window');
var modalClose = document.querySelector('.header-menu__modal-close');

// click on the menu button to show the modal window

modalButton.onclick = function() {
  modalWindow.style.display = 'block';
}

// click on the close button to close the modal window

modalClose.onclick = function() {
  modalWindow.style.display = 'none';
}
