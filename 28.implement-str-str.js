/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//***** Knuth-Morris-Pratt 算法，KMP算法
//暴力查找
var strStr = function (haystack, needle) {
  if (needle == "") { //特殊情况，如果needle是空字符串，返回0
    return 0
  }
  let m = haystack.length
  let n = needle.length
  for (let i = 0; i + n <= m; i++) { //从haystack中的第一位开始尝试匹配，直到 m - n 位
    let flag = true
    for (let j = 0; j < n; j++) { //检查needle中的每一位，如果不能匹配，就退出循环，置flag为false
      if (haystack[j + i] != needle[j]) {
        flag = false
        break
      }
    }
    if (flag == true) { //如果匹配成功，返回 i 索引
      return i
    }
  }
  return -1 //如果每一位都匹配失败，返回 -1
};
// @lc code=end
