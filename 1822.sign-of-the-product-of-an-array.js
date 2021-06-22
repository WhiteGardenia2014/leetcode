/*
 * @lc app=leetcode id=1822 lang=javascript
 *
 * [1822] Sign of the Product of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      return 0
    } else if (nums[i] < 0) {
      sign = -sign
    }
  }
  return sign
};
// @lc code=end
