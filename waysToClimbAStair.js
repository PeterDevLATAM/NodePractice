/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const cmb = climb();
  return cmb(n);
};

function climb() {
  let cache = {};

  return function climbFaster(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n > 45) {
        return 0;
      }
      if (n < 3) {
        return n;
      } else {
        cache[n] = climbFaster(n - 2) + climbFaster(n - 1);
        return cache[n]; 
      }
    }
  };
}

console.log(climbStairs(2))
console.log(climbStairs(5))