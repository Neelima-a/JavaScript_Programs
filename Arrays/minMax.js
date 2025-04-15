let arr = [92, 12, 322, 55, 89];

const findMinMax = (arr) => {
  let min = arr[0],
    max = arr[0];

  for (const element of arr) {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  }
  // console.log(min, max);
  return { max, min };
};

let res = findMinMax(arr);
console.log(res.max, res.min);
