/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] % 2 == 0) {
      [nums[slowIndex], nums[fastIndex]] = [nums[fastIndex], nums[slowIndex]]
      slowIndex++
    }
  }
  return nums
};
// @lc code=end

console.log(sortArrayByParity([3, 1, 2, 4]));
