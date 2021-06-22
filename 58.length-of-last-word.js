/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

  let length = 0
  let i = s.length - 1
  while (s[i] == " ") {
    i--
    if (i == -1) {
      return 0
    }
  }
  for (; i >= 0; i--) {
    if (s[i] == " ") {
      break
    } else {
      length++
    }
  }
  return length
};
// @lc code=end

console.log(lengthOfLastWord("hello world"));
