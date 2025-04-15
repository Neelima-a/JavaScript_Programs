function debounce(fn, delay) {
  let timer;

  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
const logInput = debounce((value) => {
  console.log("Debounced:", value);
}, 300);

window.addEventListener("input", (e) => logInput(e.target.value));
