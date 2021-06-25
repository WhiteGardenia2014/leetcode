/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */

//Brian Kernighan 算法，n = n & (n - 1) 可以去掉二进制数的最末位的 1
var hammingWeight = function (n) {
  let ans = 0
  while (n) {
    ans++
    n = n & (n - 1)
  }
  return ans
};
// @lc code=end
