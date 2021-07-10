/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return mergeSort(nums)
  return quickSort(nums)
  return countingSort(nums)
};

//归并排序
function mergeSort(array) {
  if (array.length < 2) {
    return array
  }

  let midIdx = array.length >> 1
  let leftArray = array.slice(0, midIdx)
  let rightArray = array.slice(midIdx)
  leftArray = mergeSort(leftArray)
  rightArray = mergeSort(rightArray)

  let i = 0
  let j = 0
  let k = 0
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      array[k++] = leftArray[i++]
    } else {
      array[k++] = rightArray[j++]
    }
  }
  while (i < leftArray.length) {
    array[k++] = leftArray[i++]
  }
  while (j < rightArray.length) {
    array[k++] = rightArray[j++]
  }

  return array
}

//快速排序
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
    if (array[j] < pivot) {
      swap(array, i++, j)
    }
  }
  swap(array, i, end)

  quickSort(array, start, i - 1)
  quickSort(array, i + 1, end)

  return array
}

//计数排序
function countingSort(array, minValue = Math.min(...array), maxValue = Math.max(...array)) {
  let n = maxValue - minValue + 1 //计数桶的大小为数组范围+1
  let bucket = Array(n).fill(0)

  for (let i = 0; i < array.length; i++) { //遍历数组，记录每个数字出现的次数，并将其映射到从 0 开始的下标中
    bucket[array[i] - minValue]++
  }

  let index = 0
  for (let i = 0; i < bucket.length; i++) { //遍历计数桶，按顺序将桶中的数字排序到数组中，注意要将下标映射回原来的数字
    while (bucket[i] > 0) {
      array[index++] = i + minValue
      bucket[i]--
    }
  }

  return array
}

//交换数组中的两个下标对应的值
function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
  return array
}
// @lc code=end
