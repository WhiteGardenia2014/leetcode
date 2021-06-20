/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let n1 = num1.length - 1
  let n2 = num2.length - 1
  let c = 0
  let ans = ""
  while (n1 >= 0 || n2 >= 0) {
    x = n1 < 0 ? 0 : Number(num1[n1])
    y = n2 < 0 ? 0 : Number(num2[n2])
    let d = x + y + c
    if (d >= 10) {
      c = 1
      d = d % 10
    } else {
      c = 0
    }
    ans = "" + d + ans
    n1--
    n2--
  }
  if (c == 1) {
    ans = "" + c + ans
  }
  return ans
};
// @lc code=end

console.log(addStrings("999", "999"))
