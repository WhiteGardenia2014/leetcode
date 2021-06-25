/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//二分法
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let middle = Math.trunc((left + right) / 2)
    if (target > nums[middle]) {
      left = middle + 1
    } else if (target < nums[middle]) {
      right = middle - 1
    } else {
      return middle
    }
  }
  return left
};
// @lc code=end

console.log(searchInsert([1], 0));
