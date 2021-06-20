/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slowIndex = 1
  for (let fastIndex = 1; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] != nums[slowIndex - 1]) {
      nums[slowIndex] = nums[fastIndex]
      slowIndex++
    }
  }
  return slowIndex
};
// @lc code=end
