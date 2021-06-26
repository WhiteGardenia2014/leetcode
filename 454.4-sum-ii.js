/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

//哈希表，思路和第 1 题类似
//使用 map 的速度要比 object 的速度更快
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let hash = {}
  let n = nums1.length
  for (let i = 0; i < n; i++) { //遍历 nums1，nums2中的所有组合，将数字的和作为键，出现的次数作为值，记录在哈希表中
    for (let j = 0; j < n; j++) {
      let sum = nums1[i] + nums2[j]
      hash[sum] ? hash[sum]++ : hash[sum] = 1
    }
  }

  let ans = 0
  //遍历 nums3，nums4中的所有组合，如果 0 - sum 在哈希表中存在，说明这个组合满足要求，因此将哈希表中对应的值累加到结果中
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let sum = nums3[i] + nums4[j]
      if (hash[0 - sum]) {
        ans += hash[0 - sum]
      }
    }
  }

  return ans
};

//使用 Map 数据结构
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let hash = new Map()
  let n = nums1.length
  for (let i = 0; i < n; i++) { //遍历 nums1，nums2中的所有组合，将数字的和作为键，出现的次数作为值，记录在哈希表中
    for (let j = 0; j < n; j++) {
      let sum = nums1[i] + nums2[j]
      hash.set(sum, hash.has(sum) ? hash.get(sum) + 1 : 1)
    }
  }

  let ans = 0
  //遍历 nums3，nums4中的所有组合，如果 0 - sum 在哈希表中存在，说明这个组合满足要求，因此将哈希表中对应的值累加到结果中
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let sum = nums3[i] + nums4[j]
      if (hash.has(0 - sum)) {
        ans += hash.get(0 - sum)
      }
    }
  }

  return ans
};
// @lc code=end

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
