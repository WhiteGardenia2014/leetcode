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
var strStr = function (haystack, needle) {
  if (needle == "") {
    return 0
  }
  let m = haystack.length
  let n = needle.length
  for (let i = 0; i + n <= m; i++) {
    let flag = true
    for (let j = 0; j < n; j++) {
      if (haystack[j + i] != needle[j]) {
        flag = false
        break
      }
    }
    if (flag == true) {
      return i
    }
  }
  return -1
};
// @lc code=end
