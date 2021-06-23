/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

//动态规划，维护双数组
var trap = function (height) {
  if (height.length <= 2) {
    return 0
  }

  let leftMax = 0
  let rightMax = 0
  let leftHeight = []
  let rightHeight = []

  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(leftMax, height[i])
    leftHeight[i] = leftMax
  }

  for (let i = height.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, height[i])
    rightHeight[i] = rightMax
  }

  let sum = 0
  for (let i = 0; i < height.length; i++) {
    let itemHeight = Math.min(leftHeight[i], rightHeight[i])
    sum = sum + itemHeight - height[i]
  }

  return sum
};


//动态规划，维护双指针
var trap = function (height) {
  if (height.length <= 2) {
    return 0
  }
  let leftMax = 0
  let rightMax = 0
  let leftIndex = 0
  let rightIndex = height.length - 1

  let sum = 0
  while (leftIndex < rightIndex) {
    leftMax = Math.max(leftMax, height[leftIndex])
    rightMax = Math.max(rightMax, height[rightIndex])
    if (leftMax <= rightMax) {
      sum = sum + leftMax - height[leftIndex]
      leftIndex++
    } else {
      sum = sum + rightMax - height[rightIndex]
      rightIndex--
    }
  }

  return sum
}
// @lc code=end

console.log(trap([4, 2, 0, 3, 2, 5]));
