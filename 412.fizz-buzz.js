/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let answer = []
  let str = ""
  for (let i = 1; i <= n; i++) {
    str = ""
    if (i % 3 == 0 && i % 5 == 0) {
      str = "FizzBuzz"
    } else if (i % 3 == 0) {
      str = "Fizz"
    } else if (i % 5 == 0) {
      str = "Buzz"
    } else {
      str = "" + i
    }
    answer.push(str)
  }
  return answer
};
// @lc code=end

console.log(fizzBuzz(3));
