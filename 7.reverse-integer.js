/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0
  let d = 0
  while (x) {
    d = x % 10
    ans = ans * 10 + d
    x = (x - d) / 10
  }
  if (ans < -2147483648 || ans > 2147483647) {
    return 0
  }
  return ans
};
// @lc code=end

// console.log(reverse(2147453647));
