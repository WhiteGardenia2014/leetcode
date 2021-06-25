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
  for (let i = 2; i <= Math.sqrt(num); i++) { //搜索范围只需达到 sqrt(num) 就可以
    if (num % i == 0) { //如果 i 是因数，那么 num / i 一定也是因数
      ans = ans + i + num / i
    }
    if (i == num / i) { //注意如果 i = num / i ，不要重复计算
      ans = ans - i
    }
  }
  return ans == num
};
// @lc code=end
