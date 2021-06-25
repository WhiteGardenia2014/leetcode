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

//方法一：原理是将10进制转换成26进制，但余数是1-26，而不是0-25，因此每次需要将被除数-1，再取出每一位数
//方法二：每次遇到整除26的时候，余数不应该是0，应该把余数改成26

var convertToTitle = function (columnNumber) {
  let a = ""
  let d = 0
  do {
    columnNumber-- //将被除数-1
    d = columnNumber % 26 //取出末尾一位数
    a = String.fromCodePoint(d + 65) + a //将ASCII值转换为字符
    columnNumber = (columnNumber - d) / 26 //去掉末尾位，准备计算下一位
  } while (columnNumber)

  return a
};
// @lc code=end

console.log(convertToTitle(26));
