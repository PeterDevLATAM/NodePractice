function findFactorialRecursive(number) {
  if (number === 1) return number;
  let result= number * findFactorialRecursive(number - 1);
  return result;
}

function findFactorialIterative(number) {
  let acc = 1;
  while (number > 0) {
    acc = acc * number;
    number--;
  }
  return acc;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
