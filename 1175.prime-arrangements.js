/*
 * @lc app=leetcode id=1175 lang=javascript
 *
 * [1175] Prime Arrangements
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  let count = countPrimes(n + 1)
  let ans = factorial(count) * factorial(n - count)
  ans %= 1000000007n
  return Number(ans)
};


//埃式筛
var countPrimes = function (n) {
  let isPrime = new Array(n).fill(1)
  let num = 0
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      num++
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }
  return num
};

//阶乘
function factorial(n) {
  let x = BigInt(1)
  for (i = 2; i <= n; i++) {
    x *= BigInt(i)
  }
  return x
}


// @lc code=end

console.log(numPrimeArrangements(100));
