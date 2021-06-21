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
var backspaceCompare = function (s, t) {
  return backSpace(s) == backSpace(t)
};

function backSpace(s) {
  let array = []
  for (let i = 0; i <= s.length; i++) {
    if (s[i] != "#") {
      array.push(s[i])
    } else {
      array.pop()
    }
  }
  return array.join("")
}

// @lc code=end

console.log(backSpace("##"));
