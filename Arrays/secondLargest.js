const secondLargest = (arr) => {
  let first = -1, //92, 322
    second = -1; //92

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > first) {
      second = first;
      first = arr[index];
    } else if (arr[index] > second && arr[index] < first) {
      second = arr[index];
    }
  }
  return second === -1 ? null : second;
};

let arr = [92, 121, 322, 55, 89];
console.log(secondLargest(arr));
