/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

//循环方法，如果 n % 3 == 0 就继续除 3
/*var isPowerOfThree = function (n) {
  if (n < 1) {
    return false
  }
  while (n != 1) {
    let mol = n % 3
    if (mol != 0) {
      return false
    }
    n /= 3
  }
  return true
};*/

//如果一个数是3^19的因子，那么它一定是3的幂
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n == 0
}

// @lc code=end
