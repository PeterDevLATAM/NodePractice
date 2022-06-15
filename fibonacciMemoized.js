const { channel } = require("diagnostics_channel");

let counter = 0;
function fibonacciMemoized() {
  let cache = {};
  return function fib(n) {
    counter++
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const memo = fibonacciMemoized();
memo(10)
console.log(counter)


// let n = 0;
// let arr = [];
// while (n < 7) {
//   const memo= fibonacciMemoized();
//   arr.push(memo(n));
//   n++;
// }
// console.log(arr);

