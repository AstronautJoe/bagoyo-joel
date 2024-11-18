function Stopwatch() {
  let duration = 0;
  this.intervalId = null;
  this.isRunning = false;

  // Method Starts the timer
  this.start = function () {
    if (this.isRunning) {
      console.error('Stopwatch has already started!');
    } else {
      //   console.log('Timer Started!');
      this.isRunning = true;
      // We use the arrow function to refer to the current stopwatch instance this method is being called from otherwise it will refer to the windows global which is undefined
      this.intervalId = setInterval(() => {
        duration++;
        // console.log('duration: ', this.duration);
      }, 1000);
    }
  };

  // Method stops the timer
  this.stop = function () {
    if (!isRunning) {
      console.log('Stopwatch is not started!');
    } else {
      this.isRunning = false;
      //   console.log(`current duration: ${this.duration}s`);
      clearInterval(this.intervalId);
    }
  };

  // Method resets the timer
  this.reset = function () {
    duration = 0;
    this.isRunning = false;
  };

  // Getter function to get the duration
  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });
}
