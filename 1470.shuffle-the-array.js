/*
 * @lc app=leetcode id=1470 lang=javascript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let ans = []
  let index = 0
  for (let i = 0, j = n; i < n; i++, j++) {
    ans[index++] = nums[i]
    ans[index++] = nums[j]
  }
  return ans
};
// @lc code=end

console.log(shuffle([1, 1, 2, 2], 2));
