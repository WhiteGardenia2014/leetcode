/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 滑动窗口、哈希表
// 前置基础题是 242 题，有效的字母异位词
var findAnagrams = function (s, p) {
  let ans = []
  let hash = {} //用哈希表记录 p 中每个字符的频数

  for (let i = 0; i < p.length; i++) { //遍历 p，记录 p 中每个字符出现的频数
    let char = p[i]
    hash[char] ? hash[char]++ : hash[char] = 1
  }

  let left = 0
  let right = 0
  //维持滑动窗口的长度等于 p 的长度，用该滑动窗口遍历 s 字符串，记录滑动窗口中所需要字符的频数
  //但注意是反向记录的，如果滑动窗口中有需要的字符，就频数减 1，需要的字符移出了滑动窗口，就频数加 1
  //当滑动窗口的长度等于 p 的长度时，如果哈希表中字符的频数都为 0，说明是字母异位词，需要记录此时的开始索引
  //对于不在哈希表中的字符，不需要记录频数
  while (right <= s.length) {
    let char = s[right]
    if (hash[char] !== undefined) { //如果右指针字符在哈希表中，说明滑动窗口包含了该字符，就把频数减少 1 
      hash[char]--
    }
    if ((right - left + 1) == p.length) { //当滑动窗口的长度等于 p 的长度时，就判断是否是字母异位词
      if (isAnagram(hash)) {
        ans.push(left)
      }
      if (hash[s[left]] !== undefined) { //如果左指针字符在哈希表中，说明该字符要移出滑动窗口了，就把频数加上 1
        hash[s[left]]++
      }

      left++
    }
    right++
  }

  return ans
};


function isAnagram(hash) { //如果是否哈希表中所有字符的频数都为 0
  for (let char in hash) {
    if (hash[char] !== 0) {
      return false
    }
  }
  return true
}


// @lc code=end

console.log(findAnagrams("abab", "a"));
