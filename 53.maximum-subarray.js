/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//***** 动态规划

//贪心算法
var maxSubArray = function (nums) {
  let max = -1000000
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count > max) {
      max = count
    }
    if (count <= 0) {
      count = 0
    }
  }
  return max
};
// @lc code=end

console.log(maxSubArray([-1, 0]));
