const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return "Not Anagram";
  }
  let reveredStr1 = str1.toLowerCase().split("").sort().join("");
  let reveredStr2 = str2.toLowerCase().split("").sort().join("");
  if (reveredStr1 === reveredStr2) {
    return "Anagram";
  }
};
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("listen", "hello"));
