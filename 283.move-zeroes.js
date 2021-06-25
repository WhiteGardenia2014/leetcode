/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//双指针
var moveZeroes = function (nums) {
  let slowIndex = 0
  //从左到右遍历数组，如果右指针指向的不是 0，就交换左右指针的内容，交换后，左指针指向下一个数
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] != 0) {
      nums[slowIndex] = nums[fastIndex]
      slowIndex++
    }
  }
  for (; slowIndex < nums.length; slowIndex++) { //最后在数组后面补全 0
    nums[slowIndex] = 0
  }
  return nums
};
// @lc code=end

console.log(moveZeroes([0]));
