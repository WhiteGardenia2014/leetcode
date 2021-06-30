/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = removeExtraSpaces(s)
  return s.split(" ").reverse().join(" ")
};

function removeExtraSpaces(s) { //去掉字符串中多余的空格
  if (s.length == 0) {
    return ""
  }
  let len = s.length
  let ans = ""
  let fast = 0
  //去掉字符串前面的空格
  while (fast < len && s[fast] === " ") {
    fast++
  }
  //去掉字符串中间的多余空格
  for (; fast < len; fast++) {
    if ((fast - 1 >= 0) && s[fast] === " " && s[fast - 1] === " ") {
      continue
    }
    ans += s[fast]
  }
  //去掉字符串末尾的空格
  if (ans[ans.length - 1] === " ") {
    ans = ans.slice(0, ans.length - 1)
  }
  return ans
}
// @lc code=end

console.log(reverseWords("Alice does not even like bob"));
