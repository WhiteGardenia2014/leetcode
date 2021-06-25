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

//也可以用Brian Kernighan 算法，n = n & (n - 1) 可以去掉二进制数的最末位的 1
// ans[i] = ans[ i & (i - 1) ] + 1

//如果一个数是奇数，有 ans[i] = ans[i - 1] + 1
//如果一个数是偶数，有 ans[i] = ans[i >>> 1]
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
