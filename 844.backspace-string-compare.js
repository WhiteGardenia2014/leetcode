/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//栈
var backspaceCompare = function (s, t) {
  return backSpace(s) == backSpace(t)
};

function backSpace(s) {
  let array = []
  for (let i = 0; i <= s.length; i++) {
    if (s[i] != "#") { //如果不是 "#" 符，就把字符推入栈
      array.push(s[i])
    } else { //如果是 "#" 符，就弹出栈顶的字符
      array.pop()
    }
  }
  return array.join("")
}

// @lc code=end

console.log(backSpace("##"));
