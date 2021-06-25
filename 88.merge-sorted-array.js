/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//双指针
//注意是原地算法，需要直接改变m数组中的值
//两个指针指向m，n的数字末位，index索引指向 m 的最后一位
//比较两个指针的数字，将更大的数字，放到 index 索引的位置
//注意如果有哪个指针遍历完了数字 ( i 或 j == -1 )，
//就将没有遍历完的数组填充进来

var merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  for (index = m + n - 1; index >= 0; index--) {
    if (i == -1) {
      nums1[index] = nums2[j]
      j--
    } else if (j == -1) {
      nums1[index] = nums1[i]
      i--
    } else if (nums1[i] < nums2[j]) {
      nums1[index] = nums2[j]
      j--
    } else {
      nums1[index] = nums1[i]
      i--
    }
  }
  // return nums1
};
// @lc code=end
