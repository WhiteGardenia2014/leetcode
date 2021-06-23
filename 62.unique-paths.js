/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//深度搜索
/*var uniquePaths = function (m, n) {
  return paths(1, 1)

  function paths(i, j) {
    if (i > m || j > n) {
      return 0
    }
    if (i == m && j == n) {
      return 1
    }
    return paths(i + 1, j) + paths(i, j + 1)
  }
};*/

//动态规划
var uniquePaths = function (m, n) {
  let dp = Array(m).fill(0).map(item => Array(n))
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }
  }
  // console.table(dp);
  return dp[m - 1][n - 1]
}

//数学方法
var uniquePaths = function (m, n) {
  var numerator = 1
  var denominator = m - 1
  var count = m - 1
  var t = m + n - 2
  while (count) {
    numerator *= t
    t--
    count--
    while ((denominator > 0) && numerator % denominator == 0) {
      numerator /= denominator
      denominator--
    }
  }
  return numerator
}

// @lc code=end

console.log(uniquePaths(3, 7));
