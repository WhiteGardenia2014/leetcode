/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//***** 动态规划

//贪心算法
var maxSubArray = function (nums) {
  let max = -1000000
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    if (count > max) {
      max = count
    }
    if (count <= 0) {
      count = 0
    }
  }
  return max
};


//分治算法
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (array) {
  if (array.length == 0) { //并不会遇到截取长度为 0 的情况
    return -Infinity
  }
  if (array.length == 1) {
    return array[0]
  }

  var mid = array.length >> 1

  var leftMax = array[mid - 1]
  var leftSum = leftMax
  for (var i = mid - 2; i >= 0; i--) {
    leftSum += array[i]
    if (leftSum > leftMax) {
      leftMax = leftSum
    }
  }

  var rightMax = array[mid]
  var rightSum = rightMax
  for (var i = mid + 1; i < array.length; i++) {
    rightSum += array[i]
    if (rightSum > rightMax) {
      rightMax = rightSum
    }
  }

  var midMax = leftMax + rightMax

  var left = array.slice(0, mid)
  var right = array.slice(mid)

  var leftMax = maxSubArray(left)
  var rightMax = maxSubArray(right)

  return Math.max(midMax, leftMax, rightMax)
};

// @lc code=end

console.log(maxSubArray([-1, 0]));
