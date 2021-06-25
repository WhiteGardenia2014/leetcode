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

//快乐数只有迭代到 1，或者进入循环两种可能

//可以用数组记录是否进入了循环
//也可以使用哈希表记录是否进入了循环
//通过数学方法，可知循环仅有一个
var isHappy = function (n) {
  let array = []
  let d = 0
  let ans = 0
  while (1) {
    for (let i = 0; i < array.length; i++) { //用数组记录每一次的数字，如果当前求出的数字在数组中记录过，就说明进入了循环
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
