//filter creates a shallow copy of portion of given array, filter down to just the elements
//from given array which pass the provided test condition (which is true)
//empty array is no match

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
