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

//缩小搜索范围
//左右指针指向容器的两端，注意每次要舍弃掉更短的那一边，直到两指针相遇
//保存下这一过程中最大的体积
//之所以要舍弃掉更短的一边，因为如果舍弃掉更长的一边，那么下一次的体积一定会小于当前的体积
//因此要舍弃掉已经不可能成为最大值的状态

var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let max = 0
  while (left < right) {
    let v = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(max, v) //保存并更新 盛水的体积的 最大值
    if (height[left] < height[right]) { //每次移动要舍弃掉更短的那一边
      left++
    } else {
      right--
    }
  }
  return max
};
// @lc code=end

console.log(maxArea([1, 2, 1]));
