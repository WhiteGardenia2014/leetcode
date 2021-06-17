/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n == 0) {
    return false
  }
  while (1) {
    if (n == 1) {
      break
    }
    let mol = n % 3
    if (mol != 0) {
      return false
    }
    n /= 3

  }
  return true
};
// @lc code=end
