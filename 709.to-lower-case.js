/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  //return s.toLowerCase()
  let charcode = 0
  let ans = ""
  for (let i = 0; i < s.length; i++) {
    charcode = s.codePointAt(i)
    if (charcode >= 65 && charcode <= 90) {
      charcode += 32
    }
    ans += String.fromCodePoint(charcode)
  }
  return ans
};
// @lc code=end

console.log(toLowerCase("Hello"));
