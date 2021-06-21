/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let first = 0
  let second = 0
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first
      first = nums[i]
      index = i
    } else if (nums[i] > second) {
      second = nums[i]
    }
  }
  if (first >= second * 2) {
    return index
  } else {
    return -1
  }
};
// @lc code=end
