// menu for mobile and tablet

var modalButton = document.querySelector('.header__modal-button');
var modalWindow = document.querySelector('.header__modal-window');
var modalItem = document.querySelectorAll('.header__modal-window .header__item');
var modalClose = document.querySelector('.header__modal-close');

// click on the menu button to show the modal window

modalButton.onclick = function() {
  modalWindow.style.display = 'block';
}

// click on the menu item to show or close the sub-menu

for (var i = 0; i < modalItem.length; i++) {
  modalItem[i].onclick = function() {
    if (this.querySelector('.header__sublist').style.display == 'block') {
      this.querySelector('.header__sublist').style.display = 'none';
    } else {
      this.querySelector('.header__sublist').style.display = 'block';
    }
  }
}

// click on the close button to close the modal window

modalClose.onclick = function() {
  modalWindow.style.display = 'none';
}
