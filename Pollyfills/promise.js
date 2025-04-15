function MyPromise(executor) {
  let onResolve, onReject;
  let isResolved = false,
    isRejected = false,
    value;

  function resolve(val) {
    isResolved = true;
    value = val;
    setTimeout(() => onResolve && onResolve(value), 0);
  }

  function reject(err) {
    isRejected = true;
    value = err;
    setTimeout(() => onReject && onReject(value), 0);
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isResolved) onResolve(value);
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected) onReject(value);
    return this;
  };

  executor(resolve, reject);
}

// Example Usage
new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
})
  .then((value) => console.log(value)) // After 1 sec -> "Success!"
  .catch((error) => console.error(error));
