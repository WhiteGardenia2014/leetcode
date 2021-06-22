/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let max = 0
  while (left < right) {
    let v = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(max, v)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
};
// @lc code=end

console.log(maxArea([1, 2, 1]));
