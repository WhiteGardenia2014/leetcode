/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

//双指针（四指针）
//思路基于 15 题，三数之和，三数之和思路为先确定一个索引，寻找另外两个索引
//四数之和思路为先确定两个索引，再寻找另外两个索引
//注意 nums = [-2,-2,-2,-2] , target = -8 的情况
var fourSum = function (nums, target) {
  let ans = []
  let n = nums.length
  if (n < 4) { //如果数组元素个数小于 4 个，直接返回 []
    return []
  }
  nums.sort((a, b) => a - b) //首先对数组进行从下到大排序

  for (let i = 0; i < n - 3; i++) {
    //只有每个数字第一次出现时，i 才指向它，并寻找四数之和，如果某个数字已经寻找过了，就跳过它
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < n - 2; j++) {

      if (j > i + 1 && nums[j] === nums[j - 1]) { // j 指针同样要去除重复
        continue
      }
      let left = j + 1
      let right = n - 1
      while (left < right) { //当左右指针没有相遇时，进入循环

        let sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum < target) { //如果四数之和小于 target，说明最小的数应该舍弃，left++
          left++
          continue
        }
        if (sum > target) { //如果四数之和大于 target，说明最大的数应该舍弃，right--
          right--
          continue
        }
        //如果没有进入之前的分支，说明四数之和等于 target，把四个数添加到结果中
        ans.push([nums[i], nums[j], nums[left], nums[right]])
        //找到四数之和后，为了只保留一组结果，需要跳过之后出现的重复的数字，实现去重
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        //最后左指针、右指针各移动一位，寻找其他的可行结果
        left++
        right--
      }
    }
  }
  return ans
};
// @lc code=end

console.log(fourSum([2, 2, 2, 2, 2], 8));
