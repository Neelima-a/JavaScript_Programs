function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    const context = this;

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(context, args);
    }
  };
}

const logScroll = throttle(() => {
  console.log("Throttled scroll event at", new Date().toISOString());
}, 1000);

window.addEventListener("scroll", logScroll);