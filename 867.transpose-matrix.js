/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  return matrix[0].map((_, index) => {
    return matrix.reduce((ary, row) => {
      ary.push(row[index])
      return ary
    }, [])
  })
};
// @lc code=end
