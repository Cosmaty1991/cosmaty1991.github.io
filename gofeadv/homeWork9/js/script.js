// closure

var closure = function() {
  var counter = 1;

  return function() {
    return counter++;
  };
}

var count = closure();

console.log(count());
console.log(count());
console.log(count());

// closure 2

Function.prototype.bind = function(context) {
  this.context = HelloPage.init();
}

var HelloPage = {
  name: 'GoIT',
  init: function() {
    console.log('Hello, ' + this.name);
  }
}

window.onload = HelloPage.init.bind(HelloPage);

// closure 3

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
  links[i].onclick = (function(num) {
    return function() {
      console.log(num);
    }
  })(i);
}
