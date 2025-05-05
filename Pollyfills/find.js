// Array.prototype.find is a higher order function that returns the first element in the an array
// that satisfies the condition of provided callback function and
// if no values satisfy the condition of callback then returns undefined.

//Note - find does not mutate the original array, and returns found value or undefined.

const numbers = [2, 4, 5, 6, 7, 6];

const isGreaterThan5 = (number) => {
  if (number > 5) {
    return true;
  }
  return false;
};

Array.prototype.customFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};

const findResult = numbers.find(isGreaterThan5);
console.log(findResult); //=> 6 (returns value)
