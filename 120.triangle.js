/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */

//递归搜索 (有重复计算，时间复杂度高)
/*var minimumTotal = function (triangle) {
  return minSum(0, 0)

  function minSum(x, y) {
    if (x == triangle.length - 1) {
      return triangle[x][y]
    }
    return triangle[x][y] + Math.min(minSum(x + 1, y), minSum(x + 1, y + 1))
  }
};*/

//动态规划，自顶向下，(修改triangle数组)
var minimumTotal = function (triangle) {
  let n = triangle.length
  //自顶向下，修改 triangle 数组为 dp 数组
  for (let i = 1; i < n; i++) {
    triangle[i][0] = triangle[i - 1][0] + triangle[i][0]
    for (let j = 1; j < i; j++) {
      triangle[i][j] = Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]) + triangle[i][j]
    }
    triangle[i][i] = triangle[i - 1][i - 1] + triangle[i][i]
  }
  //遍历 dp 数组最后一层，找到最小值
  let min = Infinity
  for (let i = 0; i < n; i++) {
    if (triangle[n - 1][i] < min) {
      min = triangle[n - 1][i]
    }
  }
  return min
}

//动态规划，自底向上，(修改triangle数组)
var minimumTotal = function (triangle) {
  let n = triangle.length
  //自底向上，修改 triangle 数组为 dp 数组
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j]
    }
  }
  // dp 数组的第一项就是最小路径和
  return triangle[0][0]
}

// @lc code=end

console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]));
