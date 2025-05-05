//filter creates a shallow copy of portion of given array, filter down to just the elements
//from given array which pass the provided test condition (which is true)
//empty array is no match

// Array.prototype.filter is a higher order function in javascript that iterates through
// each element of an array and can conditionally filter out elements of an array.

// Note - filter does not mutate the original array, Always returns new copy of a mutated array.

// filter function takes callback function as an argument, This Callback takes 3 parameters
// current element, current index and array, Callback function runs for each element of an array
//Array.filter((ele, index, arr)=>{})
let arr = [1, 2, 3, 5, 6, 8];
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) temp.push(this[index]);
  }
  return temp;
};

const filterArr = arr.myFilter((ele) => ele > 3);

console.log(filterArr);
