// Recursion

function fibonacciRecursive(n) { // O(2^N) exponential, the second worst time performance
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}
// console.log(fibonacciRecursive(3));
// Iterative

function fibonacciIterative(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
// console.log(fibonacciIterative(8));

let n = 0;
let arr = [];
while (n < 7) {
  arr.push(fibonacciRecursive(n));
  n++;
}
console.log(arr);
