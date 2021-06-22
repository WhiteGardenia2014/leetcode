/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let m = grid.length
  let n = grid[0].length
  let num = 0
  let k = 0
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= k; j--) {
      if (grid[i][j] >= 0) {
        k = j + 1
        break
      } else {
        num++
      }
    }
  }
  return num
};
// @lc code=end
