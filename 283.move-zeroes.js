/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] != 0) {
      nums[slowIndex] = nums[fastIndex]
      slowIndex++
    }
  }
  for (; slowIndex < nums.length; slowIndex++) {
    nums[slowIndex] = 0
  }
  return nums
};
// @lc code=end

console.log(moveZeroes([0]));
