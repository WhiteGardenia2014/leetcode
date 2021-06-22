/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0) {
    return 1
  }
  if (n > 0) {
    return quickMul(x, n)
  } else {
    return 1 / quickMul(x, -n)
  }
};

/*function quickMul(x, n) {
  if (n == 0) {
    return 1
  }
  if (n == 1) {
    return x
  }
  let y = quickMul(x, Math.trunc(n / 2))
  if (n % 2 == 0) {
    return y * y
  } else {
    return y * y * x
  }
}*/


function quickMul(x, n) {
  let ans = 1
  while (n) {
    if (n & 1 == 1) {
      ans *= x
    }
    x *= x
    n = n >>> 1
  }
  return ans
}

// @lc code=end

console.log(myPow(2, 3));
// console.log(quickMul(2, 5));
