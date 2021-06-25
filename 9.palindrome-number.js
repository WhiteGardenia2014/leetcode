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

//利用第 7 题翻转整数的算法，判断 x 翻转后是否等于自身，如果相等，则 x 是一个回文数
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
