/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let ans = []
  let num = 0
  for (let i = 0; i < nums.length; i++) {
    num += nums[i]
    ans[i] = num
  }
  return ans
};
// @lc code=end
