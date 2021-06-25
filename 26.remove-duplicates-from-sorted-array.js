/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//双指针
var removeDuplicates = function (nums) {
  let slowIndex = 1 //左右指针从索引 1 开始
  for (let fastIndex = 1; fastIndex < nums.length; fastIndex++) {
    //如果右指针指向了不同的数字，就赋值给左指针，并使左指针指向下一个位置
    if (nums[fastIndex] != nums[slowIndex - 1]) {
      nums[slowIndex] = nums[fastIndex]
      slowIndex++
    }
  }
  return slowIndex
};
// @lc code=end
