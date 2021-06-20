/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1
  let right = n
  while (left <= right) {
    let middle = left + Math.trunc((right - left) / 2)
    if (guess(middle) == 0) {
      return middle
    } else if (guess(middle) == 1) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
};
// @lc code=end
