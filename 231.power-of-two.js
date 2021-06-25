/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

//根据位运算的形式，2的幂满足 n & ( n-1 ) === 0
var isPowerOfTwo = function (n) {
  return n > 0 && 4294967296 % n == 0
};
// @lc code=end
