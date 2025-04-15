const moveZeroToEnd = (arr) => {
  let nonZeroIndex = 0,
    arrLength = arr.length;
  for (let index = 0; index < arrLength; index++) {
    if (arr[index] !== 0) {
      [arr[nonZeroIndex], arr[index]] = [arr[index], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return arr;
};

let array = [0, 1, 0, 9, 3, 0, 4, 5, 0, 2];
console.log(moveZeroToEnd(array));
