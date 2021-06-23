/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */

//常规算法
/*var addDigits = function (num) {
  let sum = 0
  while (1) {
    sum = 0
    while (num) {
      sum += num % 10
      num = (num - (num % 10)) / 10
    }
    if (sum < 10) {
      break
    }
    num = sum
  }
  return sum
};*/

//数学方法，时间复杂度 O(1)
var addDigits = function (num) {
  return (num - 1) % 9 + 1
}

// @lc code=end

console.log(addDigits(0));
