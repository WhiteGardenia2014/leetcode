/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) { //从后向前遍历数组
    if (digits[i] !== 9) { //如果某一位不是9，就将这位加 1 并返回
      digits[i]++
      return digits
    } else {
      digits[i] = 0 //如果某一位等于9，就把这一位置为 0，并继续检查前一位
    }
  }

  if (digits[0] === 0) { //如果循环结束后，第一位为 0，说明原来数组全为9，那么需要在首位添加 1
    digits.unshift(1)
  }
  return digits
};
// @lc code=end

console.log(plusOne([0]));
