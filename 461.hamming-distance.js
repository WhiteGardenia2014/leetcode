/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let ans = x ^ y
  let num = 0
  while (ans) {
    if (ans & 1 == 1) {
      num++
    }
    ans = ans >>> 1
  }
  return num
};
// @lc code=end
