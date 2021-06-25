/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//可以基于 74 题的解法
//缩减空间法、双指针
//利用双指针从矩阵的左下角开始检索矩阵，
//如果当前元素大于target，说明这一行所有元素都大于target，因此行数减 1，查找上一行
//如果当前元素小于target，说明这一行有可能存在target，因此列数加 1，继续查找当前行
//***** 也有二分搜索的方法，递归的方法等

var searchMatrix = function (matrix, target) {
  let n = matrix.length
  let m = matrix[0].length
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

console.log(searchMatrix([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 31));
