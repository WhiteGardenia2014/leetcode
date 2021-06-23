/*
 * @lc app=leetcode id=1486 lang=javascript
 *
 * [1486] XOR Operation in an Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let ans = start
  for (let i = 1; i < n; i++) {
    let item = start + 2 * i
    ans ^= item
  }
  return ans
};
// @lc code=end

console.log(xorOperation(10, 5));
