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

//***** 这道题也有二分查找和分治算法的解法，
//逆序遍历
//利用矩阵横向纵向递减的顺序，从下向上，从右向左，遍历矩阵
//逐步缩小查找的范围

var countNegatives = function (grid) {
  let m = grid.length
  let n = grid[0].length
  let num = 0
  let k = 0
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= k; j--) {
      if (grid[i][j] >= 0) { //如果第 i 行的第 j 列的数字不是负数，那么第 i - 1行，只需要逆序遍历到第 j + 1列
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
