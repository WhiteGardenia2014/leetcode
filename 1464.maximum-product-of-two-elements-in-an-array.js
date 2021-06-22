/*
 * @lc app=leetcode id=1464 lang=javascript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let first = 0
  let second = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first
      first = nums[i]
    } else if (nums[i] > second) {
      second = nums[i]
    }
  }
  return (first - 1) * (second - 1)
};
// @lc code=end

console.log(maxProduct([3, 4, 5, 2]));
