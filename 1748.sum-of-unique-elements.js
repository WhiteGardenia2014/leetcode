/*
 * @lc app=leetcode id=1748 lang=javascript
 *
 * [1748] Sum of Unique Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//使用map数据结构
var sumOfUnique = function (nums) {
  let hash = new Map()
  for (let value of nums) {
    if (hash.has(value)) {
      hash.set(value, hash.get(value) + 1)
    } else {
      hash.set(value, 1)
    }
  }
  let sum = 0
  for (let [key, value] of hash.entries()) {
    if (value == 1) {
      sum += key
    }
  }
  return sum
};


// @lc code=end

console.log(sumOfUnique([1, 2, 3, 2]));
