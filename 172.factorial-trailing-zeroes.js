/*
 * @lc app=leetcode id=172 lang=javascript
 *
 * [172] Factorial Trailing Zeroes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

//常规算法,时间复杂度高
/*var trailingZeroes = function (n) {
  let m = BigInt(1)
  let ans = 0
  for (i = 1; i <= n; i++) {
    m *= BigInt(i)
  }
  while (m % BigInt(10) == 0) {
    m /= BigInt(10)
    ans++
  }
  return ans
};*/

//进阶算法 计算包含的5的倍数的数量，其中如果遇到5的幂，需要重复计算
var trailingZeroes = function (n) {
  n = n - n % 5
  let zeros = 0
  while (n) {
    n = Math.trunc(n / 5)
    zeros += n
  }
  return zeros
}

// @lc code=end

// for (let i = 1; i <= 50; i++) {
//   console.log(trailingZeroes(i), i);
// }
