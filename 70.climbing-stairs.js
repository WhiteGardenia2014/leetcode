/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

//动态规划
//dp数组的含义为，达到第 i 级台阶的时候，一共有多少种走法
// dp[i] 的值 取决于 dp[i - 1] 和 dp[i - 2] 内的值

/*var climbStairs = function (n) {
  if (n == 1) {
    return 1
  }
  let dp = Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};*/

//由于 dp[i] 的值 取决于 dp[i - 1] 和 dp[i - 2] 内的值
//所以不需要维护整个dp数组，只需维护 dp1 和 dp2 变量
var climbStairs = function (n) {
  if (n == 1) {
    return 1
  }
  let dp1 = 1
  let dp2 = 2
  for (let i = 3; i <= n; i++) {
    let dp3 = dp1 + dp2
    dp1 = dp2
    dp2 = dp3
  }
  return dp2
}
// @lc code=end

console.log(climbStairs(5));
