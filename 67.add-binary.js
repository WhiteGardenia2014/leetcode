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

/*var addBinary = function (a, b) {
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
};*/


var addBinary = function (a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let ans = ""
  let carry = 0
  for (; i >= 0 || j >= 0; i--, j--) {
    let x = a[i] | 0
    let y = b[j] | 0
    let s = x + y + carry
    let z = s & 1
    carry = s >> 1
    ans = z + ans
  }
  if (carry) {
    ans = carry + ans
  }
  return ans
}
// @lc code=end

console.log(addBinary("101111", "101010"));
