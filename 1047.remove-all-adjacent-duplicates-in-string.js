/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

//栈
var removeDuplicates = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    //如果是第一个字符，先压入栈中
    //如果当前字符和栈顶字符相同，将这个栈顶字符弹出栈
    if (stack.length && char == stack[stack.length - 1]) {
      stack.pop()
    } else { //否则，将当前字符存入栈中
      stack.push(char)
    }
  }
  return stack.join("")
};
// @lc code=end

console.log(removeDuplicates("abbaca"));
