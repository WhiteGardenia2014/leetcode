/*
 * @lc app=leetcode id=1742 lang=javascript
 *
 * [1742] Maximum Number of Balls in a Box
 */

// @lc code=start
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let n = Math.ceil(Math.log10(highLimit))
  let box = Array(9 * n + 2).fill(0)

  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = 0
    let item = i
    while (item) {
      sum += item % 10
      item = (item - (item % 10)) / 10
    }
    box[sum]++
  }

  let max = 0
  for (let i = 0; i < box.length; i++) {
    max = Math.max(max, box[i])
  }
  return max
};
// @lc code=end

countBalls(19, 28)
