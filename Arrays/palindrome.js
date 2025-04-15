//approach1

const palindrome = (str) => {
  let letters = str.toLowerCase().split("");
  let reversedStr = letters.reverse().join("");
  if (str === reversedStr) {
    console.log("palindrome");
  } else console.log("Not palindrome");
};

// palindrome("reverse");
// palindrome("madam");

const numberPalindrome = (number) => {
  let rem = 0,
    revered = 0,
    original = number;
  while (number > 0) {
    rem = number % 10;
    revered = revered * 10 + rem;
    number = Math.floor(number / 10);
  }
  return revered === original ? "Palindrome" : "Not palindrome";
};
console.log(numberPalindrome(124221));
