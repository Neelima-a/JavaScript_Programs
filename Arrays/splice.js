//splice modifies the original array
let arr = [1, 2, 3, 4, 5];
// remove the element
// let result = arr.splice(1, 1); //1,3,4,5
// let result1 = arr.splice(0, 2); //1,4,5

//insert the element
let addedResult = arr.splice(1, 0, 2, 3);

console.log(addedResult, arr); //2, 1,3
