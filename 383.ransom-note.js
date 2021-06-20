/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let hash = {}
  for (let i = 0; i < ransomNote.length; i++) {
    let value = ransomNote[i]
    hash[value] ? hash[value]++ : hash[value] = 1
  }
  for (let i = 0; i < magazine.length; i++) {
    let value = magazine[i]
    if (hash[value]) {
      hash[value]--
    }
  }
  for (let key in hash) {
    if (hash[key] > 0) {
      return false
    }
  }
  return true
};
// @lc code=end
