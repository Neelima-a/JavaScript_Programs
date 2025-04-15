//polly fill for once

function once(fn, context) {
  let ran;

  return function () {
    if (fn) {
      ran = fn.apply(context || this, arguments);
      fn = null;
    }

    return ran;
  };
}

const hello = once((a, b) => console.log("hello fn called", a, b));

hello(1, 2);
hello(1, 2);
