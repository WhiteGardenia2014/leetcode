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
