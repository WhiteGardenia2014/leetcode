/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length == 0) {
    return [-1, -1]
  }
  let leftIndex = searchLeftRange(nums, target)
  let rightIndex = searchRightRange(nums, target)
  return [leftIndex, rightIndex]
};

function searchLeftRange(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let middle = left + Math.trunc((right - left) / 2)
    if (target == nums[middle]) {
      right = middle - 1
    } else if (target > nums[middle]) {
      left = middle + 1
    } else if (target < nums[middle]) {
      right = middle - 1
    }
  }
  if (left >= nums.length || nums[left] != target) {
    return -1
  }
  return left
}

function searchRightRange(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let middle = left + Math.trunc((right - left) / 2)
    if (target == nums[middle]) {
      left = middle + 1
    } else if (target > nums[middle]) {
      left = middle + 1
    } else if (target < nums[middle]) {
      right = middle - 1
    }
  }
  if (right < 0 || nums[right] != target) {
    return -1
  }
  return right
}

// @lc code=end

// console.log(searchLeftRange([5, 7, 9, 9, 11, 15, 18], 0));
// console.log(searchRightRange([5, 7, 9, 9, 11, 15, 18], 19));
console.log(searchRange([5, 7, 9, 9, 11, 15, 18], 1));
