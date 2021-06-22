/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

//埃式筛
/*var countPrimes = function (n) {
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
};*/

//线性筛
var countPrimes = function (n) {
  let isPrime = new Array(n).fill(1)
  let primes = []
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      primes.push(i)
    }
    for (let j = 0; j < primes.length && primes[j] * i < n; j++) {
      isPrime[primes[j] * i] = 0
      if (i % primes[j] === 0) {
        break
      }
    }
  }
  return primes.length
};


// @lc code=end

console.log(countPrimes(100));
