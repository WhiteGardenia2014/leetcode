/*
 * @lc app=leetcode id=1512 lang=javascript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//哈希表
//在哈希表中记录数组中每个数字出现的频数
//遍历哈希表，每个数字对应的好数对的数目为 C ( n , 2 )，累加得到结果

var numIdenticalPairs = function (nums) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i]
    hash[value] ? hash[value]++ : hash[value] = 1
  }

  let ans = 0
  for (let value of Object.values(hash)) {
    ans += value * (value - 1) / 2
  }
  return ans
};
// @lc code=end
