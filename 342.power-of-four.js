/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

//方法一：4的幂 % 3 一定 == 1

//方法二：也可以通过按位运算判断是否是4的幂，
//4的幂满足 其二进制表示中的1只会出现在奇数位上，因此满足 ( n & 0xaaaaaaaa ) === 0

var isPowerOfFour = function (n) {
  return n > 0 && 4294967296 % n == 0 && n % 3 == 1
};
// @lc code=end

console.log(isPowerOfFour(16));
