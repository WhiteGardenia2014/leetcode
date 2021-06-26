/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//Set集合
var intersection = function (nums1, nums2) {
  //为了减少 Set 集合占用的空间，因此先遍历更短的数组
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]
  }
  //为两个数组建立两个集合
  let num1Set = new Set()
  let num2Set = new Set()
  for (let i = 0; i < nums1.length; i++) { //遍历 nums1，生成 nums1 对应的集合
    num1Set.add(nums1[i])
  }
  //遍历 nums2，如果某个数字在 num1Set 中，就添加到 num2Set 中
  for (let i = 0; i < nums2.length; i++) {
    let item = nums2[i]
    if (num1Set.has(item)) {
      num2Set.add(item)
    }
  }

  let ans = Array.from(num2Set) //最后将集合转换为数组返回
  return ans
};
// @lc code=end

console.log(intersection([1, 2, 2, 1], [2, 2, 4, 5, 6]));
