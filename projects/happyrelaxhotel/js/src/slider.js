// slider

// initial number of slides

var slideIndex = 1;

// show slides

showSlides(slideIndex);

// create a function that show previous slide

function prevSlide(n) {
  showSlides(slideIndex -= n);
}

// create a function that show next slide

function nextSlide(n) {
  showSlides(slideIndex += n);
}

// create a function that show current slide

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// create a function that show slides

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

document.querySelector('.header-slider__item-prev').addEventListener('click', function() {
  prevSlide(1);
});

// click on next arrow to show next slide

document.querySelector('.header-slider__item-next').addEventListener('click', function() {
  nextSlide(1);
});

// press on previous arrow to show previous slide and press on next arrow to show next slide

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    prevSlide(1);
  } else if (e.keyCode === 39) {
    nextSlide(1);
  }
});
