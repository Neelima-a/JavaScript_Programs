//Reduce
//arr.reduce((acc, current, index, arr)=>{}, initialValue)

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
