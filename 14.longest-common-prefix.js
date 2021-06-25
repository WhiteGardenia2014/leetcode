/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) { //遍历第一个字符串中的字符
    let char = strs[0][i]
    for (let j = 1; j < strs.length; j++) { //从第二个字符串开始检查
      //如果 i 不是公共的字符，或者某个字符串的长度等于 i
      if (i == strs[j].length || strs[j][i] != char) {
        return strs[0].slice(0, i) //截取第一个字符串的 0 ~ i 位，不包括第 i 位
      }
    }
  }
  return strs[0]
};
// @lc code=end
