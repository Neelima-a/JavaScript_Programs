//polly fill for memoize/caching

function myMemoize(fn, context) {
  const result = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!result[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return result[argsCache];
  };
}

function clumsyFn(num1, num2) {
  for (let index = 0; index < array.length; index++) {}
  return num1 * num2;
}
const memoizeProduct = myMemoize(clumsyFn);
console.log(memoizeProduct(9439, 8564));
