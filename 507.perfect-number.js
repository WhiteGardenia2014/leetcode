/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num == 1) {
    return false
  }
  let ans = 1
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      ans = ans + i + num / i
    }
    if (i == num / i) {
      ans = ans - i
    }
  }
  return ans == num
};
// @lc code=end
