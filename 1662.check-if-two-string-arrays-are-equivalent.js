/*
 * @lc app=leetcode id=1662 lang=javascript
 *
 * [1662] Check If Two String Arrays are Equivalent
 */

// @lc code=start
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let str1 = word1.join("")
  let str2 = word2.join("")
  // return str1 == str2
  let n1 = str1.length
  let n2 = str2.length
  if (n1 != n2) {
    return false
  }
  for (let i = 0; i < n1; i++) {
    if (str1[i] != str2[i]) {
      return false
    }
  }
  return true
};
// @lc code=end
