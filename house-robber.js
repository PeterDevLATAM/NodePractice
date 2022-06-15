/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  let dp = [];
  return findHouses(nums, dp, 0);
};

function findHouses(nums, dp, index) {
  if (index > nums.length - 1) {
      return 0;
  }
  
  if (dp[index] == undefined) {
      const skipHouse = findHouses(nums, dp, index + 1);
      const robHouse = nums[index] + findHouses(nums, dp, index + 2)
      dp[index] = Math.max(skipHouse, robHouse);
  }
  
  return dp[index];
}

const nums = [1, 20, 3, 1, 6, 1, 1]; 

console.log(rob(nums));
