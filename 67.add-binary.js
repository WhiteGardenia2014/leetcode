/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let m = a.length
  let n = b.length
  while (m < n) {
    a = "0" + a
    m++
  }
  while (n < m) {
    b = "0" + b
    n++
  }
  let c = 0
  let ans = ""
  for (let i = a.length - 1; i >= 0; i--) {
    let d = Number(a[i]) + Number(b[i]) + c
    if (d > 1) {
      c = 1
      d = d % 2
    } else {
      c = 0
    }
    ans = "" + d + ans
  }
  if (c == 1) {
    ans = "" + c + ans
  }
  return ans
};
// @lc code=end

addBinary("101111", "101010")
