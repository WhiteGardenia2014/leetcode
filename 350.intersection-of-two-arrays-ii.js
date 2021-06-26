/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//*****还有排序后使用双指针的做法

//哈希集
var intersect = function (nums1, nums2) {
  //为了降低空间复杂度，
  //首先遍历较短的数组并在哈希表中记录每个数字以及对应的频数，然后遍历较长的数组得到交集。
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  let hash = {}
  let ans = []

  for (let i = 0; i < nums1.length; i++) {
    let number = nums1[i]
    hash[number] ? hash[number]++ : hash[number] = 1
  }
  //遍历较长的数组，如果一个数在哈希集中存在，就添加到结果中，并把这个数的频数减 1
  //从而保证在结果中，某个数字出现的次数，和两个数组中出现次数的最小值一致
  for (let i = 0; i < nums2.length; i++) {
    let number = nums2[i]
    if (hash[number]) {
      ans.push(number)
      hash[number]--
    }
  }

  return ans
};
// @lc code=end

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
