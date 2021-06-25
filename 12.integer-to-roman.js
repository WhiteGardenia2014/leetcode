/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

//罗马数字的写法，一定是从大到小书写，且所用的符号最少的
//因此从大到小 寻找小于该整数的最大罗马数字符号，并用整数减去这个罗马数字符号，直到整数为0
//注意：当整数减去 匹配的最大的罗马数字符号后，就不需要再检查之前的符号了
//此外要注意到拼接罗马数字符号时，应该循环判断，
//例如33的罗马数字表示为XXXIII，需要循环判断应该拼接几个罗马数字符号

var intToRoman = function (num) {
  let symbolValue = [ //从大到小列出数字对应的罗马数字符号
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ]
  let roman = ""
  for (let [value, symbol] of symbolValue) { //从大到小遍历symbolValue数组
    while (value <= num) { //如果某个符号的值小于num，就拼接这个符号，注意要循环判断，直到当前寻找的符号已经大于num了
      num -= value //num减去符号对应的数字值
      roman += symbol
    }
    if (num == 0) { //如果num减到 0，就退出循环
      break
    }
  }
  return roman
};
// @lc code=end
