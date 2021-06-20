/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] != val) {
      nums[slowIndex] = nums[fastIndex]
      slowIndex++
    }
  }
  return slowIndex
};
// @lc code=end
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
