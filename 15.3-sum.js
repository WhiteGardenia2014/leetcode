/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//用双指针（三指针）解这道题更为简单
//注意不要先对数组去重，因为形如 [-1,-1,2] 也为答案
//可以使用 Set 集合对结果进行去重，也可以在循环中就去除重复的解
//使用 Set 集合要注意使用字符串进行存储，如果用数组存储是不能够实现去重的，最后还需要将字符串转换为数字型数组
var threeSum = function (nums) {
  let ans = []
  let n = nums.length
  if (n < 3) { //如果数组元素个数小于 3 个，直接返回 []
    return []
  }
  nums.sort((a, b) => a - b) //首先对数组进行从下到大排序

  for (let index = 0; index < n - 2; index++) { // index指针从头到尾遍历数组，直到剩下元素小于三个
    if (nums[index] > 0) { //如果 index 指针的元素大于 0，说明三数之和一定大于 0，退出循环
      break
    }
    //只有每个数字第一次出现时，index才指向它，并寻找三数之和，如果某个数字已经寻找过了，就跳过它
    if (index > 0 && nums[index] === nums[index - 1]) {
      continue
    }
    let left = index + 1 //左指针从 index 指针右侧第一个数字开始正向搜索
    let right = n - 1 //右指针从数组末尾开始逆向搜索
    while (left < right) { //当左右指针没有相遇时，进入循环

      let sum = nums[index] + nums[left] + nums[right] //计算指针指向的三数之和
      if (sum < 0) { //如果三数之和小于 0，说明最小的数应该舍弃，left++
        left++
        continue
      }
      if (sum > 0) { //如果三数之和大于 0，说明最大的数应该舍弃，right--
        right--
        continue
      }
      //如果没有进入之前的分支，说明三数之和等于0，把三个数添加到结果中
      ans.push([nums[index], nums[left], nums[right]])
      //找到三数之和后，为了只保留一组结果，需要跳过之后出现的重复的数字，实现去重
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
  return ans
};


// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4, 2, -1, 1]));
