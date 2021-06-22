/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let num = 0
  for (let i = 0; i < nums.length; i++) {
    if (String(nums[i]).length % 2 == 0) {
      num++
    }
  }
  return num
};
// @lc code=end
