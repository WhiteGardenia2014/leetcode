/*
 * @lc app=leetcode id=1572 lang=javascript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let n = mat.length
  let sum = 0
  for (let i = 0, j = 0; i < n; i++, j++) {
    sum += mat[i][j]
  }
  for (let i = 0, j = n - 1; i < n; i++, j--) {
    sum += mat[i][j]
  }
  if (n % 2 == 1) {
    sum -= mat[n >>> 1][n >>> 1]
  }
  return sum
};
// @lc code=end

console.log(diagonalSum([
  [5]
]));
