/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//利用异或运算的性质
//一个数与 0 异或，还是它本身
//一个数与它本身异或，结果为 0
//异或运算满足交换律和结合律
var singleNumber = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i]
  }
  return ans
};
// @lc code=end

console.log(singleNumber([1]));
