/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */

//栈
var evalRPN = function (tokens) {
  let stack = []
  for (let i = 0; i < tokens.length; i++) {
    let char = tokens[i]
    switch (char) {
      case "+": //由于栈中保存的是字符串类型，因此计算加法时，要注意先转换为数字类型
        stack.push(stack.pop() * 1 + stack.pop() * 1)
        break
      case "-": //注意减法运算的顺序，与出栈的顺序是颠倒的
        let a = stack.pop()
        let b = stack.pop()
        stack.push(b - a)
        break
      case "*":
        stack.push(stack.pop() * stack.pop())
        break
      case "/": //注意除法运算的顺序，与出栈的顺序是颠倒的
        let c = stack.pop()
        let d = stack.pop()
        stack.push((d / c) | 0) //利用或运算的性质，对小数进行取整
        break
      default:
        stack.push(char)
    }
  }
  return stack.pop()
};
// @lc code=end

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
