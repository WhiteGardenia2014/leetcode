/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 == "0" || num2 == "0") {
    return "0"
  }

  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1]
  }

  let num1times = [0]
  let a = "0"
  for (let i = 1; i < 10; i++) {
    a = addStrings(a, num1)
    num1times.push(a)
  }

  let result = "0"
  let zeros = ""
  for (let i = num2.length - 1; i >= 0; i--) {
    let count = Number(num2[i])
    let mul = num1times[count] + zeros
    result = addStrings(result, mul)
    zeros = zeros + "0"
  }
  return result
};


var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let ans = ""
  let carry = 0
  for (; i >= 0 || j >= 0; i--, j--) {
    let x = num1[i] | 0
    let y = num2[j] | 0
    let s = x + y + carry
    let z = s % 10
    carry = (s - z) / 10
    ans = z + ans
  }
  if (carry) {
    ans = carry + ans
  }
  return ans
}

// @lc code=end

console.log(multiply("2", "3"));
