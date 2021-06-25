/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */

//动态规划
var generate = function (numRows) {
  let ans = [
    [1]
  ]
  for (let i = 1; i < numRows; i++) {
    let item = []
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        item[j] = 1
      } else {
        item[j] = ans[i - 1][j - 1] + ans[i - 1][j]
      }
    }
    ans[i] = item
  }
  return ans
};
// @lc code=end

console.log(generate(6));
