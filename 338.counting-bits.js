/*
 * @lc app=leetcode id=338 lang=javascript
 *
 * [338] Counting Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let ans = [0]
  for (let i = 1; i <= n; i++) {
    if (i & 1 == 1) {
      ans[i] = ans[i - 1] + 1
    } else {
      ans[i] = ans[i >>> 1]
    }
  }
  return ans
};
// @lc code=end
