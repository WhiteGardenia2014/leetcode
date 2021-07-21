/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//首先将每一行翻转，再以副对角线为轴，翻转元素
var rotate = function (matrix) {
  let n = matrix.length
  matrix.map(it => it.reverse()) //翻转每一行
  for (let i = 0; i < n - 1; i++) { //以副对角线为轴，翻转元素
    for (let j = 0; j < n - 1 - i; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][n - i - 1]
      matrix[n - j - 1][n - i - 1] = temp
    }
  }
  return matrix
};
// @lc code=end
