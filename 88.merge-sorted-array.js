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
