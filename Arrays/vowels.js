const vowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = {};
  let count = 0;
  for (let element of vowels) {
    for (let char of str) {
      if (char.toLowerCase() === element) {
        count++;
      }
    }
    result[element] = count;
  }
  return result;
};

let str = "Education is wealth";
console.log(vowels(str));
