//Reduce
//arr.reduce((acc, current, index, arr)=>{}, initialValue)
// Array.prototype.reduce is a higher order function that iterates through each value of an array
// and reduces array of values into single value.

//Note - reduce does not mutate the original array, Always returns reduced single value.
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator
      ? cb(accumulator, this[index], index, this)
      : this[index];
  }
  return accumulator;
};

let arr = [1, 2, 3, 4];

const sumArr = arr.myReduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sumArr);

arr.unshift(arr.pop());
