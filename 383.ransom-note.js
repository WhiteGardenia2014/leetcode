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
  for (let i = 0; i < ransomNote.length; i++) { //遍历赎金信，记录每个字符出现的频数
    let value = ransomNote[i]
    hash[value] ? hash[value]++ : hash[value] = 1
  }
  for (let i = 0; i < magazine.length; i++) { //遍历杂志，如果有哈希表中的字符，就把对应的频数减 1
    let value = magazine[i]
    if (hash[value]) {
      hash[value]--
    }
  }
  for (let key in hash) { //如果哈希表中所有的字符的频数都为 0 ， 就说明赎金信可以由杂志拼成
    if (hash[key] > 0) {
      return false
    }
  }
  return true
};
// @lc code=end
