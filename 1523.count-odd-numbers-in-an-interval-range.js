/*
 * @lc app=leetcode id=1523 lang=javascript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  return ((low & 1) | (high & 1)) + ((high - low) >> 1)
};
// @lc code=end

console.log(countOdds(13, 20));
