/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let ans = []
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      ans[j] = nums[i]
      j += 2
    }
  }
  for (let i = 0, j = 1; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
      ans[j] = nums[i]
      j += 2
    }
  }
  return ans
};
// @lc code=end

sortArrayByParityII([2, 3])
