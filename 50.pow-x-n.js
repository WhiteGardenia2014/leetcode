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

//快速乘方运算
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

//递归算法
//每次计算 y = pow ( x , n / 2 ) ，
//如果n为偶数，返回 y * y ， 如果n为奇数，返回 y * y * x 
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

//循环算法
//n 的二进制表示中 1 出现的位置，即为需要乘上的因子部分
//例如 3^27 =  3^1  *  3^2  *  3^8  *  3^16
// 27(2) = 11011

function quickMul(x, n) {
  let ans = 1
  while (n) {
    if (n & 1 == 1) { //如果该二进制位为 1，说明这一部分的因子需要乘到 ans中
      ans *= x
    }
    x *= x //乘方因子每次循环迭代一倍
    n = n >>> 1 //注意要使用无符号右移
  }
  return ans
}

// @lc code=end

console.log(myPow(2, 3));
// console.log(quickMul(2, 5));
