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

//使用对象
var groupAnagrams = function (strs) {
  let hash = {}
  for (let value of strs) {
    let key = value.split("").sort().join("")
    if (key in hash) {
      hash[key].push(value)
    } else {
      hash[key] = [value]
    }
  }
  let ans = []
  for (let key in hash) {
    ans.push(hash[key])
  }
  return ans
};
// @lc code=end

console.log(groupAnagrams([""]));
