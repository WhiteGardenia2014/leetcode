/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1
  let right = Math.trunc(num / 2) + 1
  while (left <= right) {
    let middle = left + Math.trunc((right - left) / 2)
    if (middle * middle == num) {
      return true
    } else if (middle * middle < num) {
      left = middle + 1
    } else if (middle * middle > num) {
      right = middle - 1
    }
  }
  return false
};
// @lc code=end
