/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//哈希表，和第 1 题类似
/*var twoSum = function (numbers, target) {
  let hash = {}
  for (i = 0; i < numbers.length; i++) {
    if (hash[target - numbers[i]] !== undefined) {
      return [hash[target - numbers[i]] + 1, i + 1]
    } else {
      hash[numbers[i]] = i
    }
  }
};*/

//缩小搜索范围，双指针
var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    if (numbers[left] + numbers[right] == target) {
      return [left + 1, right + 1]
    } else if (numbers[left] + numbers[right] > target) { //如果当前两数之和大于target，最右边的值一定不是答案，需要舍去
      right--
    } else if (numbers[left] + numbers[right] < target) { //如果当前两数之和小于target，最左边的值一定不是答案，需要舍去
      left++
    }
  }
};
// @lc code=end

console.log(twoSum([2, 3, 4], 6));
