//approach1
// fib(n) = fib(n-1)  _fib(n-2)
const fib = (n) => {
  let sequence = [0, 1]; //1,2,3
  for (let index = 2; index < n; index++) {
    console.log(sequence[index - 1]); //2:1 + 0, 3:1+1, 4:2+1,
    sequence.push(sequence[index - 1] + sequence[index - 2]);
  }
  return sequence.slice(0, n);
};
// console.log(fib(10));

//approach 2
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(6));

//approach 3
const fibonacciUpToN = (n) => {
  const result = [];
  let a = 0,
    b = 1;

  while (a <= n) {
    result.push(a);
    [a, b] = [b, a + b];
  }

  return result;
};

console.log(fibonacciUpToN(10));
