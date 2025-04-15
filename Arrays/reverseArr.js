let array = [1, 2, 3, 4, 5];

//approach1
const reverseArray = (arr) => {
  let reversedArr = [],
    arrLen = arr.length;
  for (let index = arrLen - 1; index >= 0; index--) {
    reversedArr.push(arr[index]);
  }
  return reversedArr;
};
// console.log("reverse", reverseArray(array));

//approach2
const reverseArr = [...array].reverse();
// console.log("reverse", reverseArr);

//approach 3
const arrayReverse = (arr) => {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};
console.log("reverse", arrayReverse(array));
// left ---> right 0,1,2
//[1,3,4]
