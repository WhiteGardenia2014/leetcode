/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char in hash) {
      hash[char]++
    } else {
      hash[char] = 1
    }
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (hash[char] == 1) {
      return i
    }
  }
  return -1
};
// @lc code=end
