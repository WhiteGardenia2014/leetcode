/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let num = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) { //如果数字为 1，那么计数器加一
      num++
    } else { //如果数字不是 1，那么清空计数器
      num = 0
    }
    max = Math.max(max, num) //保存下计数器出现过的最大值
  }
  return max
};
// @lc code=end
