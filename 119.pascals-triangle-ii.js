/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let ans = [1]
  for (let i = 0; i <= rowIndex; i++) {
    let j = i
    ans[j] = 1
    for (j = i - 1; j > 0; j--) {
      ans[j] = ans[j] + ans[j - 1]
    }
  }
  return ans
};
// @lc code=end
