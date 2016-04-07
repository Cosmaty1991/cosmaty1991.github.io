var time = 0;
var run = 0;

function start() {
  if (run == 0) {
    run = 1;
    increment();
    document.getElementById('start').innerHTML = '&#8214; Pause';
  } else {
    run = 0;
    document.getElementById('start').innerHTML = '&#9654; Continue';
  }
}

function reset() {
  run = 0;
  time = 0;
  document.getElementById('start').innerHTML = '&#9654; Start';
  document.getElementById('stopwatch').innerHTML = '00:00:00.000';
}

function increment() {
  if (run == 1) {
    setTimeout(function() {
      time++;
      var date = new Date();
      var hours = Math.floor(time / 10 / 60 / 60);
      var minutes = Math.floor(time / 10 / 60);
      var seconds = Math.floor(time / 10 % 60);
      var ms = date.getMilliseconds();

      if (hours < 10) {
        hours = '0' + hours;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      if (ms < 10) {
        ms = '00' + ms;
      }
      if (ms < 100) {
        ms = '0' + ms;
      }

      document.getElementById('stopwatch').innerHTML = hours + ':' + minutes + ':' + seconds + '.' + ms;
      increment();
    }, 100)
  }
}
