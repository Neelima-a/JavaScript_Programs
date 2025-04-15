let string = "Education is Necessary";

const countChars = (str) => {
  let result = {},
    count = 0;
  for (let element of str) {
    if (element === " ") continue;
    if (result[element]) {
      result[element]++;
    } else {
      result[element] = 1;
    }
  }
  return result;
};
console.log(countChars(string));
