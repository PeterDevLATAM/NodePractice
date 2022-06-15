/**
 * @param {number[]} prices
 * @return {number} highest difference
 */

 const maxProfit = (prices) => {
  const pricesLen = prices.length;
  if (pricesLen === 0) return 0;

  let ans = 0, j = 1, currentMin = prices[0];
  while(j < pricesLen) {
      ans = Math.max(prices[j] - currentMin, ans);
      currentMin = Math.min(prices[j], currentMin);
      ++j;
  }
  return ans;
};

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
