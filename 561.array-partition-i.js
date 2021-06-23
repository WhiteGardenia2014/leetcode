/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let ans = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i]
  }
  return ans
};
// @lc code=end

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
