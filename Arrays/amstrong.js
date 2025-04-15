function isArmstrongNumber(num) {
  let sum = 0;
  const digits = num.toString().split("");
  const power = digits.length;

  for (let digit of digits) {
    sum += Math.pow(Number(digit), power);
  }

  return sum === num;
}
