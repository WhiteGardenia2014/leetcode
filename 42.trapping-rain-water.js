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

//主要的思想是，找到每个位置积水数量的条件
//每个位置积水的数量，等于它左侧最大高度、右侧最大高度，较小的那一个值，减去它自身的高度
//同时也是一个不断缩小计算范围的算法

//***** 这道题还有单调栈的解法

//动态规划，维护双数组
var trap = function (height) {
  if (height.length <= 2) { //如果只有一根或者两根柱子，可以直接返回0
    return 0
  }

  let leftMax = 0
  let rightMax = 0
  let leftHeight = []
  let rightHeight = []

  for (let i = 0; i < height.length; i++) { //从左向右遍历数组，记录下来每个位置，从左向右看的最大高度
    leftMax = Math.max(leftMax, height[i])
    leftHeight[i] = leftMax
  }

  for (let i = height.length - 1; i >= 0; i--) { //从右向左遍历数组，记录下来每个位置，从右向左看的最大高度
    rightMax = Math.max(rightMax, height[i])
    rightHeight[i] = rightMax
  }

  let sum = 0 //雨水总数
  for (let i = 0; i < height.length; i++) { //从左向右遍历数组，记录能收集的雨水总数
    let itemHeight = Math.min(leftHeight[i], rightHeight[i]) //在每个位置，取这个位置，左侧最大高度和右侧最大高度中的，更小值
    sum = sum + itemHeight - height[i] //这个位置能收集的雨水数量，为两侧最大高度的更小值，减去它自身的高度
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
  let leftIndex = 0 //左侧指针从左向右移动
  let rightIndex = height.length - 1 //右侧指针从右向左移动

  let sum = 0
  while (leftIndex < rightIndex) { //当左右指针相遇时，才停止循环
    leftMax = Math.max(leftMax, height[leftIndex]) //记录左侧最大的高度
    rightMax = Math.max(rightMax, height[rightIndex]) //记录右侧的最大高度
    if (leftMax <= rightMax) { //如果右侧最大高度更大，则能收集的雨水数量，仅由左侧最大高度决定，可以假想右侧高度很高，此时并不应该移动右侧的指针
      sum = sum + leftMax - height[leftIndex]
      leftIndex++ //所以要移动左指针，并统计每个位置能收集的雨水数量
    } else { //如果左侧最大高度更大，则能收集的雨水数量，仅由右侧最大高度决定，可以假想左侧高度很高
      sum = sum + rightMax - height[rightIndex]
      rightIndex--
    }
  }

  return sum
}
// @lc code=end

console.log(trap([4, 2, 0, 3, 2, 5]));
