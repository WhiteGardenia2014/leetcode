/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let first = 0 //记录最大值
  let second = 0 //记录第二大的值
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) { //如果当前值大于最大值
      second = first //将最大值赋给second
      first = nums[i] //将当前值赋给first
      index = i
    } else if (nums[i] > second) { //如果当前值，不大于first，但是大于second，就赋值给second
      second = nums[i]
    }
  }
  if (first >= second * 2) {
    return index
  } else {
    return -1
  }
};
// @lc code=end
