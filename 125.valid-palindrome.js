/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().match(/[a-z0-9]+/g)
  if (!s) {
    return true
  }
  s = s.join("")
  let leftIndex = 0
  let rightIndex = s.length - 1
  while (leftIndex < rightIndex) {
    if (s[leftIndex] != s[rightIndex]) {
      return false
    }
    leftIndex++
    rightIndex--
  }
  return true
};
// @lc code=end
