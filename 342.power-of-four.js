/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

//4的幂 % 3 一定 == 1
var isPowerOfFour = function (n) {
  return n > 0 && 4294967296 % n == 0 && n % 3 == 1
};
// @lc code=end

console.log(isPowerOfFour(16));
