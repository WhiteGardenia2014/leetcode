/*
 * @lc app=leetcode id=537 lang=javascript
 *
 * [537] Complex Number Multiplication
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  let complex1 = stringToComplex(num1)
  let complex2 = stringToComplex(num2)
  let ans = complexMultiple(complex1, complex2)
  return complexToString(ans)
};

//将字符串转换为复数数组
function stringToComplex(str) {
  let ary = str.slice(0, -1).split("+").map(it => Number(it))
  return ary
}
//两个复数数组相乘
function complexMultiple(num1, num2) {
  let ans = []
  ans[0] = num1[0] * num2[0] - num1[1] * num2[1]
  ans[1] = num1[0] * num2[1] + num1[1] * num2[0]
  return ans
}
//将复数数组转换为字符串
function complexToString(num) {
  let str = "" + num[0] + "+" + num[1] + "i"
  return str
}
// @lc code=end
