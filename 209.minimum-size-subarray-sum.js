/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let leftIndex = 0
  let rightIndex = 0
  let sum = 0
  let length = nums.length
  let flag = false
  while (rightIndex <= nums.length) {
    if (sum >= target) {
      flag = true
      length = Math.min(length, rightIndex - leftIndex)
      sum -= nums[leftIndex]
      leftIndex++
    } else {
      sum += nums[rightIndex]
      rightIndex++
    }
  }
  if (flag) {
    return length
  }
  return 0
};
// @lc code=end
