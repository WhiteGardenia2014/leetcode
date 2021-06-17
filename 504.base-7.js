/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  let a = ""
  let sign = ""

  if (num < 0) {
    num = -num
    sign = "-"
  }
  do {
    a = num % 7 + a
    num = (num - num % 7) / 7
  } while (num)

  a = sign + a
  return a
};
// @lc code=end

console.log(convertToBase7(-7));
