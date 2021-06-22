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
