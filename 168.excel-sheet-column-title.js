/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let a = ""
  let d = 0
  do {
    columnNumber--
    d = columnNumber % 26
    a = String.fromCodePoint(d + 65) + a
    columnNumber = (columnNumber - d) / 26
  } while (columnNumber)

  return a
};
// @lc code=end

console.log(convertToTitle(26));
