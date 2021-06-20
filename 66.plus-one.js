/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let n = digits.length
  if (digits[n - 1] != 9) {
    digits[n - 1]++
    return digits
  }

  let i = 1
  while (i <= n && digits[n - i] == 9) {
    digits[n - i] = 0
    i++
  }
  if (i != n + 1) {
    digits[n - i]++
  } else {
    digits.unshift(1)
  }
  return digits
};
// @lc code=end
