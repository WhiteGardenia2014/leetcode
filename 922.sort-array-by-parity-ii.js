/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//***** 也可以使用双指针
//A指针维护偶数索引，B指针维护奇数索引，A，B指针每次 + 2
//如果A指针内的数字为奇数，就移动B指针，直到找到下一个偶数，
//并交换A，B指针中的数字，直到遍历完数组


//使用两次循环，一次存入所有偶数，一次存入所有奇数
var sortArrayByParityII = function (nums) {
  let ans = []
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      ans[j] = nums[i]
      j += 2
    }
  }
  for (let i = 0, j = 1; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
      ans[j] = nums[i]
      j += 2
    }
  }
  return ans
};
// @lc code=end

sortArrayByParityII([2, 3])
