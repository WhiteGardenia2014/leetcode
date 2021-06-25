/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */

//动态规划
//dp数组的含义为，爬到第 i 阶楼梯，需要花费的最小体力
//dp数组满足 dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
var minCostClimbingStairs = function (cost) {
  let dp = [cost[0], cost[1]]
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]) //注意最后一阶的情况，需要返回 倒数第一阶，和倒数第二阶 的 dp更小值
};
// @lc code=end

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
