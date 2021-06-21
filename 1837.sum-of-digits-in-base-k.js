/*
 * @lc app=leetcode id=1837 lang=javascript
 *
 * [1837] Sum of Digits in Base K
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let sum = 0
  while (n) {
    let d = n % k
    sum += d
    n = (n - d) / k
  }
  return sum
};
// @lc code=end
