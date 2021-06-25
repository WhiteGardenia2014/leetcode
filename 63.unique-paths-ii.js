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
//如果搜索超过边界，返回 0
//如果遇到障碍物，返回 0
//如果搜索能够到达目的地，返回计数 1
//深度搜索遍历所有的情况，返回能达到目的地的路径总和
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
//dp数组的含义为，机器人要到达 dp[i][j]位置，一共有多少种走法
//注意初始化dp数组的时候，要考虑到障碍物的影响
//如果遇到障碍物，dp数组的值应该置为 0
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
