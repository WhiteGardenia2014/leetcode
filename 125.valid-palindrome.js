/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().match(/[a-z0-9]+/g) //使用正则表达式匹配，仅保留字符串中的字母
  if (!s) { //注意，如果字符串没有匹配正则表达式的值，返回的结果是 null，null是不能调用 join() 方法的
    return true
  }
  s = s.join("")
  let leftIndex = 0
  let rightIndex = s.length - 1
  while (leftIndex < rightIndex) { //双指针从两侧开始，检测对应的字符是否相同，不同则返回false
    if (s[leftIndex] != s[rightIndex]) {
      return false
    }
    leftIndex++
    rightIndex--
  }
  return true
};
// @lc code=end
