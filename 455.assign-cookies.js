/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0
  for (let i = 0, j = 0; i < g.length && j < s.length; i++, j++) {
    while (g[i] > s[j] && j < s.length) {
      j++
    }
    if (j < s.length) {
      count++
    }
  }
  return count
};
// @lc code=end
