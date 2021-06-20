/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let mySet = new Set()
  let fastIndex = 0
  let ans = 0
  for (let slowIndex = 0; slowIndex < s.length; slowIndex++) {
    //慢指针每次向前迭代一位
    if (s.length - slowIndex <= ans) {
      break
    }
    if (slowIndex != 0) {
      mySet.delete(s[slowIndex - 1]) //将前一位的字符弹出set集合
    }
    while (fastIndex < s.length && !mySet.has(s[fastIndex])) {
      //快指针向前搜索不重复字符
      mySet.add(s[fastIndex])
      fastIndex++
    }
    ans = Math.max(ans, fastIndex - slowIndex)
  }
  return ans
};
// @lc code=end
