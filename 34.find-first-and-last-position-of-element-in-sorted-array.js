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

//二分法
//分别寻找左端索引和右端索引
var searchRange = function (nums, target) {
  if (nums.length == 0) {
    return [-1, -1]
  }
  let leftIndex = searchLeftRange(nums, target)
  let rightIndex = searchRightRange(nums, target)
  return [leftIndex, rightIndex]
};

//寻找左端索引
//如果middle = target 并不直接返回，而令 right = middle -1 
//退出循环后要判断 如果 left < length 且 left == target，则left为左端索引
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

//寻找右端索引
//如果middle = target ，令left = middle + 1
//退出循环后要判断 如果 right >= 0 且 right = target ，则right为右端索引
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
