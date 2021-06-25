/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//双指针
//如果右指针指向的数字不是目标值，就赋值给左指针，并使左指针指向下一个位置
var removeElement = function (nums, val) {
  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] != val) {
      nums[slowIndex] = nums[fastIndex]
      slowIndex++
    }
  }
  return slowIndex
};
// @lc code=end
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
