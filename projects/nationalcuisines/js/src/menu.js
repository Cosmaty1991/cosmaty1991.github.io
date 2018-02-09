// menu for mobile and tablet

// click on the menu button to show the modal window

document.querySelector('.header__modal-button').onclick = function() {
  document.querySelector('.header__modal-window').style.display = 'block';
}

// click on the menu item to show or close the sub-menu

for (var i = 0; i < document.querySelectorAll('.header__modal-window .header__item').length; i++) {
  document.querySelectorAll('.header__modal-window .header__item')[i].onclick = function() {
    if (this.querySelector('.header__sublist').style.display == 'block') {
      this.querySelector('.header__sublist').style.display = 'none';
    } else {
      this.querySelector('.header__sublist').style.display = 'block';
    }
  }
}

// click on the close button to close the modal window

document.querySelector('.header__modal-close').onclick = function() {
  document.querySelector('.header__modal-window').style.display = 'none';
}
