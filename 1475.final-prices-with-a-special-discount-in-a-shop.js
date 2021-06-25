/*
 * @lc app=leetcode id=1475 lang=javascript
 *
 * [1475] Final Prices With a Special Discount in a Shop
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {

  for (let i = 0; i < prices.length - 1; i++) { //从第 0 项开始，遍历价格数组，注意最后一个商品是无法享受到折扣的
    for (let j = i + 1; j < prices.length; j++) { //对于第 i 个商品，从第 i + 1 项开始，搜索第一个价格小于等于它的价格，即为它能享受的折扣
      if (prices[i] >= prices[j]) {
        prices[i] -= prices[j]
        break
      }
    }
  }
  return prices
};
// @lc code=end

console.log(finalPrices([8, 4, 6, 2, 3]));
