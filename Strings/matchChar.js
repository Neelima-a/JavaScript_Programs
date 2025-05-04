const matchChar = (str) => {
  let count = 0;
  for (let ele of str) {
    if (ele === "w" || ele === "W") count++;
  }
  return count;
};
console.log(matchChar("world wide web is watched"));
