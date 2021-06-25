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

//堆栈
//每次遇到左括号，就压入栈底
//每次遇到右括号，就弹出栈顶，检查是否是匹配的括号，如果不匹配，返回false
//遍历完括号字符串后，检查是否栈已经清空，如果清空，返回true
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
