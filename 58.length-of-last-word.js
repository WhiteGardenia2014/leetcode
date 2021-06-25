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
  while (s[i] == " ") { //消除字符串后面的空格，如果字符串仅为空格，返回 0
    i--
    if (i == -1) {
      return 0
    }
  }
  for (; i >= 0; i--) { //从最后一个字母开始，向前遍历
    if (s[i] == " ") { //如果遇到空格，就退出遍历
      break
    } else {
      length++ //记录这个单词的长度
    }
  }
  return length
};
// @lc code=end

console.log(lengthOfLastWord("hello world"));
