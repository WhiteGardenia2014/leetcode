/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//罗马数字存在这样的规律
//如果当前的符号代表的数字，小于右边符号代表的数字，那么当前的符号代表的数字就应该被减去
var romanToInt = function (s) {
  let symbolValues = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  let num = 0
  for (i = 0; i < s.length; i++) {
    let value = symbolValues[s[i]]
    if (i < s.length - 1 && value < symbolValues[s[i + 1]]) {
      num -= value
    } else {
      num += value
    }
  }
  return num
};
// @lc code=end

console.log(romanToInt("MCMXCIV"));
