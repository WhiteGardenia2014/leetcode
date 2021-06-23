/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ")") {
      if (stack.pop() !== "(") {
        return false
      }
    } else if (s[i] == "]") {
      if (stack.pop() !== "[") {
        return false
      }
    } else if (s[i] == "}") {
      if (stack.pop() !== "{") {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }
  if (stack.length == 0) {
    return true
  }
  return false
};
// @lc code=end

console.log(isValid("{[]}("));
