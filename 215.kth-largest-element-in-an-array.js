/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//方法一：快速排序
var findKthLargest = function (nums, k) {
  nums = quickSort(nums)
  return nums[k - 1]
};

function quickSort(array, start = 0, end = array.length - 1) {
  if (end - start < 1) {
    return array
  }
  let pivotIdx = Math.floor(Math.random() * (end - start + 1) + start)
  let pivot = array[pivotIdx]
  swap(array, end, pivotIdx)

  let i = start
  let j = start
  for (; j < end; j++) {
    if (array[j] > pivot) {
      swap(array, i++, j)
    }
  }
  swap(array, i, end)

  quickSort(array, start, i - 1)
  quickSort(array, i + 1, end)

  return array
}

function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}


//方法二：基于快速排序原理的快速查找，时间复杂度 O(n)

//快速排序（降序），每次随机选取一个哨兵元素，遍历数组，将大于它的元素放在它的左边，小于它的元素放在它的右边
//遍历过后，哨兵元素的位置就确定下来了，如果哨兵元素的下标为 2，就说明哨兵元素就是数组中 第 3 大的元素
//利用快速排序这个特点，每次遍历数组、移动元素后，如果哨兵元素恰好就是 第 k 大的元素，那么直接返回
//如果哨兵元素的下标大于 k，说明 第 k 大的元素在它的左边，下次只需要搜索左半边即可
//如果哨兵元素的下标小于 k，说明 第 k 大的元素在它的右边，下次只需要搜索右半边即可
//如果范围缩小到只有一个元素，那么这个元素就是 第 k 大的元素，返回即可
var findKthLargest = function (nums, k) {
  return quickSearch(nums, 0, nums.length - 1, k - 1)
};

function quickSearch(array, start = 0, end = array.length - 1, k) {
  if (end - start < 1) {
    return array[start]
  }
  let pivotIdx = Math.floor(Math.random() * (end - start + 1) + start)
  let pivot = array[pivotIdx]
  swap(array, end, pivotIdx)
  let i = start
  let j = start
  for (; j < end; j++) {
    if (array[j] > pivot) {
      swap(array, i++, j)
    }
  }
  swap(array, i, end)

  if (i == k) {
    return array[i]
  }
  if (i < k) {
    return quickSearch(array, i + 1, end, k)
  }
  if (i > k) {
    return quickSearch(array, start, i - 1, k)
  }
}
// @lc code=end
