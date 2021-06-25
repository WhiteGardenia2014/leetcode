/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//方法一
//建立临时数组，新数组各项满足 ans[(i + k) % n] = nums[i]
//由于是原地算法，需要将新数组 ans 赋值给 nums
/*var rotate = function (nums, k) {
  let n = nums.length
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    ans[(i + k) % n] = nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = ans[i]
  }
  return nums
};*/

//方法二
//首先翻转数组一次，并将 k 位之前和 k 位之后的两部分数组再次翻转
var rotate = function (nums, k) {
  k = k % nums.length
  reverseArray(nums, 0, nums.length - 1)
  reverseArray(nums, 0, k - 1)
  reverseArray(nums, k, nums.length - 1)
}

function reverseArray(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]
    start++
    end--
  }
}
// @lc code=end

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
