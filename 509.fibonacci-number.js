/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let a = 0
  let b = 1
  let c = 0
  for (let i = 1; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return a
};
// @lc code=end

for (i = 0; i < 50; i++) {
  console.log(fib(i));
}
