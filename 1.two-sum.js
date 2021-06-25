/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//方法一：暴力枚举
/*var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
};*/

//方法二：哈希表，时间复杂度 O(n)
//举例：target = 9
//当遍历到数字 2 时，在哈希表中查找是否存在 键名为 7 的键值对
//如果不存在，就把 2 作为键名，2 对应的索引号 0 作为值，存入到哈希表中
var twoSum = function (nums, target) {
  let hash = {}
  for (i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      //如果target - num[i] 的值，在哈希表中已经存在这个键名，说明已经找到匹配的值
      return [hash[target - nums[i]], i] //返回 i 索引，和哈希表中记录的 匹配的值的索引
    }
    hash[nums[i]] = i //将数字作为键名，索引作为值，存入哈希表中
  }
}
// @lc code=end
