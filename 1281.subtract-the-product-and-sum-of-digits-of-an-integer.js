/*
 * @lc app=leetcode id=1281 lang=javascript
 *
 * [1281] Subtract the Product and Sum of Digits of an Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let product = 1
  let sum = 0
  while (n) {
    let d = n % 10
    product *= d
    sum += d
    n = (n - d) / 10
  }
  return product - sum
};
// @lc code=end

console.log(subtractProductAndSum(4421));
