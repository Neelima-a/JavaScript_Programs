//polyfills for map method
//map method return new array
//results of calling a provided function on every element in the calling array
let arr = [2, 3, 4, 5];

// let newArr = arr.map((ele) => ele * 2);
//Array.map((ele, index, arr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let index = 0; index < this.length; index++) {
    temp.push(cb(this[index], index, this));
  }
  console.log("--", temp);
  return temp;
};

const multiplyNumber = arr.myMap((num) => num * 3);

console.log(arr, multiplyNumber);
