/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//方法一：哈希表中的键为排序后的字符串
//方法二：哈希表中的键为记录字符串中每个字符出现频数的数组

var groupAnagrams = function (strs) {
  let hash = {}
  for (let value of strs) { //遍历strs数组中的每一个字符串
    let key = value.split("").sort().join("") //将字符串排序后的新字符串作为键名
    if (key in hash) {
      hash[key].push(value) //如果存在该键名，就将当前字符串添加到这一类的数组中
    } else {
      hash[key] = [value] //如果不存在该键名，就开辟一个数组，记录这一类的字符串
    }
  }
  let ans = []
  for (let key in hash) { //遍历生成好的哈希表，将每一类字符串数组，记录到更大的数组中
    ans.push(hash[key])
  }
  return ans
};
// @lc code=end

console.log(groupAnagrams([""]));
