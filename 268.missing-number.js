/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//***** 还有哈希表法、位运算法
//数学方法
var missingNumber = function (nums) {
  let l = nums.length
  let sum = l * (l + 1) / 2 //计算 0 ~ n 的总和
  for (let i = 0; i < l; i++) {
    sum -= nums[i] //用总和减去数组中出现过的数字，剩下的结果就是丢失的数字
  }
  return sum
};
// @lc code=end

console.log(missingNumber([1]));
