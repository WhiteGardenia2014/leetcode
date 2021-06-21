/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0
  let right = nums.length - 1
  let ans = []

  for (let index = nums.length - 1; index >= 0; index--) {
    let leftSqua = nums[left] * nums[left]
    let rightSqua = nums[right] * nums[right]

    if (leftSqua <= rightSqua) {
      ans[index] = rightSqua
      right--
    } else {
      ans[index] = leftSqua
      left++
    }
  }
  return ans
};
// @lc code=end

console.log(sortedSquares([-4, -1, 0, 3, 10]));
