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

//哈希表
//建立哈希表，遍历一遍数组记录字符串中每一个字符出现的频数
//再遍历一遍数组，找到第一个频数为1的字符的索引值

//在哈希表的基础上可以进一步优化
//例如某个字符出现多次，就将哈希表中对应的频数改为-1，
//只出现一次的字符，在哈希表中记录出现的索引
//最后遍历哈希表，找到只出现一次的字符中，索引的最小值

var firstUniqChar = function (s) {
  let hash = {}
  for (let i = 0; i < s.length; i++) { //建立哈希表，遍历一遍数组记录字符串中每一个字符出现的频数
    let char = s[i]
    if (char in hash) {
      hash[char]++
    } else {
      hash[char] = 1
    }
  }

  for (let i = 0; i < s.length; i++) { //再遍历一遍数组，找到第一个频数为1的字符的索引值
    let char = s[i]
    if (hash[char] == 1) {
      return i
    }
  }
  return -1
};
// @lc code=end
