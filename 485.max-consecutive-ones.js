/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let num = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      num++
    } else {
      num = 0
    }
    max = Math.max(max, num)
  }
  return max
};
// @lc code=end
