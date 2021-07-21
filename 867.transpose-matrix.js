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


var transpose = function (matrix) {
  return matrix[0].map((_, index) => matrix.map(row => row[index]))
}


var transpose = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let ans = Array(n).fill(0).map(it => Array(m).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][i] = matrix[i][j]
    }
  }
  return ans
}

// @lc code=end
