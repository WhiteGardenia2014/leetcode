/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//和383题赎金信类似
var isAnagram = function (s, t) {
  if (s.length != t.length) { //如果两字符串长度不同，直接返回false
    return false
  }
  let hash = {}
  for (let i = 0; i < s.length; i++) { //遍历s，记录 s 中每个字符出现的频数
    let char = s[i]
    hash[char] ? hash[char]++ : hash[char] = 1
  }
  for (let i = 0; i < t.length; i++) { //遍历t，如果出现了 s 中的字符，则哈希表中对应的频数-1
    let char = t[i]
    if (hash[char]) {
      hash[char]--
    }
  }
  for (let char in hash) { //如果哈希表中所有字符的频数都为 0，说明 s 和 t 是字母异位词
    if (hash[char] !== 0) {
      return false
    }
  }
  return true
};
// @lc code=end

console.log(isAnagram("", ""));
