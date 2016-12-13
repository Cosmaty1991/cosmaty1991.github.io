const stopwatch = (() => {

  this.init = (() => {
    this.timer;
    this.run = 0;
    this.time = 0;
  })();

  this.start = () => {
    if (run == 0) {
      run = 1;
      render();
    }
  }

  this.stop = () => {
    if (run == 1) {
      run = 0;
    }
  }

  this.reset = () => {
    clearTimeout(timer);
    run = 0;
    time = 0;
    document.getElementById('stopwatch').innerHTML = '00:00';
  }

  let render = () => {
    if (run == 1) {
      timer = setTimeout(() => {
        time++;

        let [minutes, seconds] = [Math.floor(time / 10 / 60), Math.floor(time / 10 % 60)];

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
