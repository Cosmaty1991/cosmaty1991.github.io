var stopwatch = (function() {

  this.init = (function() {
    this.timer;
    this.run = 0;
    this.time = 0;
  })();

  this.start = function() {
    if (run == 0) {
      run = 1;
      render();
    }
  }

  this.stop = function() {
    if (run == 1) {
      run = 0;
    }
  }

  this.reset = function() {
    clearTimeout(timer);
    run = 0;
    time = 0;
    document.getElementById('stopwatch').innerHTML = '00:00';
  }

  function render() {
    if (run == 1) {
      timer = setTimeout(function() {
        time++;

        var minutes = Math.floor(time / 10 / 60);
        var seconds = Math.floor(time / 10 % 60);

        if (minutes < 10) {
          minutes = '0' + minutes;
        }

        if (seconds < 10) {
          seconds = '0' + seconds;
        }

        document.getElementById('stopwatch').innerHTML = minutes + ':' + seconds;
        render();
      }, 100)
    }
  }
})();
