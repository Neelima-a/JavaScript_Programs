//approach 1 loop
const reverseString = (string) => {
  let reversedStr = "",
    strLen = string.length;

  for (let index = strLen - 1; index >= 0; index--) {
    reversedStr += string[index];
  }
  return reversedStr;
};
console.log(reverseString("String"));

//approach 2 inbuilt method
const stringReverse = (str) => {
  // return str.split("").reverse().join("");

  return str.split("").reduce((acc, curr) => curr + acc, "");
};
console.log(stringReverse("String"));

//approach 3 recursion
const strReverse = (str) => {
  if (str === "") return "";
  // return strReverse(str.substr(1)) + str[0];
  return strReverse(str.slice(1)) + str[0];
};
console.log(strReverse("reverse"));
