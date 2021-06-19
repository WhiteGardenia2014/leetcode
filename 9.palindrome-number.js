/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  let x0 = x
  let ans = 0
  let d = 0
  while (x) {
    d = x % 10
    ans = ans * 10 + d
    x = (x - d) / 10
  }
  return ans == x0
};
// @lc code=end
