/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//双指针
//一个不减的数组，求其每一项的平方，中间项的平方一定是更小的
//采用双指针从数组两侧开始查找比较，将更大的数逆序存入新的数组，
//新数组也是不减排序的

var sortedSquares = function (nums) {
  let left = 0
  let right = nums.length - 1
  let ans = []

  for (let index = nums.length - 1; index >= 0; index--) {
    let leftSqua = nums[left] * nums[left]
    let rightSqua = nums[right] * nums[right]

    if (leftSqua <= rightSqua) {
      ans[index] = rightSqua
      right--
    } else {
      ans[index] = leftSqua
      left++
    }
  }
  return ans
};
// @lc code=end

console.log(sortedSquares([-4, -1, 0, 3, 10]));
