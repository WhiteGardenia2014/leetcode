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
//如果搜索超过边界，返回 0
//如果搜索能够到达目的地，返回计数 1
//深度搜索遍历所有的情况，返回能达到目的地的路径总和
//时间复杂度 O ( 2^(m + n - 1) - 1 )
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
//dp数组的含义为，机器人要到达 dp[i][j]位置，一共有多少种走法
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

//数学方法，排列组合
//注意阶乘运算不要超过最大精度
var uniquePaths = function (m, n) {
  var numerator = 1 //分子
  var denominator = m - 1 //分母计数器，同时也是分母的乘数
  var count = m - 1 //乘法次数的计数器
  var t = m + n - 2 //分子要乘的数字
  while (count) {
    numerator *= t
    t--
    count--
    //当分母乘数大于 0 时，（分母计数器大于 0 时）
    //如果分子能够整除分母，就把分母除掉
    while ((denominator > 0) && numerator % denominator == 0) {
      numerator /= denominator
      denominator-- //分母计数器减 1，同时分母乘数也减 1
    }
  }
  return numerator
}

// @lc code=end

console.log(uniquePaths(3, 7));
