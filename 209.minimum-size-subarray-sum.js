/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//滑动窗口
//从左到右用滑动窗口遍历数组。
//当窗口内子数组不符合要求时，要从右侧增加窗口长度。
//当窗口内子数组符合要求时，再增加窗口长度依然符合要求，因此要从左侧缩短窗口长度。
//直到遍历完数组，找到长度最小的解

var minSubArrayLen = function (target, nums) {
  let leftIndex = 0
  let rightIndex = 0
  let sum = 0
  let length = nums.length
  let flag = false
  while (rightIndex <= nums.length) { //右侧索引最大值为数组长度
    if (sum >= target) { //如果当前子数组的和 大于 target
      flag = true //说明存在这样的子数组
      length = Math.min(length, rightIndex - leftIndex) //记录子数组长度的最小值
      sum -= nums[leftIndex] //从左侧缩短窗口长度，sum需要减去左索引的值
      leftIndex++
    } else {
      sum += nums[rightIndex] //记录当前子数组的和
      rightIndex++ //从右侧增大窗口长度
    }
  }
  if (flag) {
    return length
  }
  return 0
};
// @lc code=end
