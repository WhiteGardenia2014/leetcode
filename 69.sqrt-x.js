/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let x1 = 1
  while (Math.abs(x1 * x1 - x) > 0.1) {
    x1 = 0.5 * (x1 + x / x1)
  }
  return Math.trunc(x1)
};
// @lc code=end

console.log(mySqrt(1600));
