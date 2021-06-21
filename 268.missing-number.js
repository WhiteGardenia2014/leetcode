/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let l = nums.length
  let sum = l * (l + 1) / 2
  for (let i = 0; i < l; i++) {
    sum -= nums[i]
  }
  return sum
};
// @lc code=end

console.log(missingNumber([1]));
