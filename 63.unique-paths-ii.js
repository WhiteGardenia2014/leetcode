/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

//深度搜索
/*var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length

  return paths(1, 1)

  function paths(i, j) {
    if (i > m || j > n) {
      return 0
    }
    if (obstacleGrid[i - 1][j - 1] == 1) {
      return 0
    }
    if (i == m && j == n) {
      return 1
    }
    return paths(i + 1, j) + paths(i, j + 1)
  }
};*/

//动态规划
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length

  let dp = Array(m).fill(0).map(item => Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] == 0) {
      dp[i][0] = 1
    } else {
      break
    }
  }

  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] == 0) {
      dp[0][j] = 1
    } else {
      break
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = (obstacleGrid[i][j] == 1) ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }

  // console.table(dp);
  return dp[m - 1][n - 1]
}


// @lc code=end

console.log(uniquePathsWithObstacles([
  [0, 1],
  [0, 0]
]));
