/*
 * @lc app=leetcode id=1672 lang=javascript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let m = accounts.length
  let n = accounts[0].length
  let max = 0
  for (let i = 0; i < m; i++) {
    let sum = 0
    for (let j = 0; j < n; j++) {
      sum += accounts[i][j]
    }
    max = Math.max(max, sum)
  }
  return max
};
// @lc code=end
