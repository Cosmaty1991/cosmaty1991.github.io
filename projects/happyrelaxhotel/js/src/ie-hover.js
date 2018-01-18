// internet explorer hover fix

for (var i = 0; i < document.querySelectorAll('.header-menu__item').length; i++) {
  document.querySelectorAll('.header-menu__item')[1].addEventListener('mouseover', function(){
    document.querySelector('.rooms__list').style.display = 'block';
  });
  
  document.querySelector('.rooms__list').addEventListener('mouseout', function(){
    this.style.display = 'none';
  });
}