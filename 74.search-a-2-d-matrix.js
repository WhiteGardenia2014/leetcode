/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//***** 二分法
//先对每一行的行首元素进行二分查找，找到target所在的行
//再对该行进行二分查找，找到target所在的列

//缩减空间法、双指针
//利用双指针从矩阵的左下角开始检索矩阵，
//如果当前元素大于target，说明这一行所有元素都大于target，因此行数减 1，查找上一行
//如果当前元素小于target，说明这一行有可能存在target，因此列数加 1，继续查找当前行

var searchMatrix = function (matrix, target) {
  let n = matrix.length //矩阵的行数
  let m = matrix[0].length //矩阵的列数
  for (let i = 0, j = n - 1; i < m && j >= 0;) {
    if (matrix[j][i] == target) {
      return true
    } else if (matrix[j][i] < target) {
      i++
    } else if (matrix[j][i] > target) {
      j--
    }
  }
  return false
};
// @lc code=end
