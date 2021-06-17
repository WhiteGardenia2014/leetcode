/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

//常规算法
var isHappy = function (n) {
  let array = []
  let d = 0
  let ans = 0
  while (1) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == n) {
        return false
      }
    }
    array.push(n)
    ans = 0

    while (n) {
      d = n % 10
      ans += d * d
      n = (n - d) / 10
    }
    n = ans

    if (n == 1) {
      return true
    }
  }
};
// @lc code=end

// console.log(isHappy(58));
