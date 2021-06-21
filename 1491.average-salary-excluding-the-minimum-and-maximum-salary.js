/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let max = 0
  let min = 10 ** 6
  let sum = 0
  for (let i = 0; i < salary.length; i++) {
    if (salary[i] >= max) {
      max = salary[i]
    }
    if (salary[i] <= min) {
      min = salary[i]
    }
    sum += salary[i]
  }
  let ave = (sum - max - min) / (salary.length - 2)
  return ave
};
// @lc code=end

console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
