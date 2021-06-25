/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

//位运算、异或运算
//如果a和b的某一位二进制数不同，那么该位异或的结果就是1
//因此需要统计 a ^ b 的结果ans中 1 的数量

//也可用Brian Kernighan 算法，n = n & (n - 1) 可以去掉二进制数的最末位的 1

var hammingDistance = function (x, y) {
  let ans = x ^ y
  let num = 0
  while (ans) {
    if (ans & 1 == 1) {
      num++
    }
    ans = ans >>> 1
  }
  return num
};
// @lc code=end
