/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 使用堆的解法
var topKFrequent = function (nums, k) {
  // 遍历数组，统计每个数字出现的频数
  let mymap = new Map()
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i]
    mymap.has(item) ? mymap.set(item, mymap.get(item) + 1) : mymap.set(item, 1)
  }

  // 构建最小堆，堆中的每项数据为 [num, freq] 形式的数组
  // 排序依据为每个数字出现的频数 freq，由于是最小堆，因此添加负号
  let minHeap = new PriorityQueue([], item => -item[1])

  for (let [num, freq] of mymap) { // 遍历 map，取出 [num, freq] 形式的数据

    if (minHeap.size == k) { // 如果堆中元素的数量等于 k，就要维持数量为 k

      // 如果当前元素的 freq 大于堆顶元素的 freq，说明需要弹出堆顶元素，添加当前元素
      if (freq > minHeap.peek()[1]) {
        minHeap.pop()
        minHeap.push([num, freq])
      }
    } else { // 如果堆中元素的数量小于 k，就向堆中添加元素
      minHeap.push([num, freq])
    }
  }

  // 将堆中的数据，输出到结果数组中
  let result = []
  for (let i = 0; i < k; i++) {
    result.push(minHeap.pop()[0])
  }
  return result
};



// 堆（默认为最大堆）
class PriorityQueue {
  constructor(inits = [], predicate = it => it) {
    this.elements = []
    this.predicate = predicate
    if (inits.length) {
      this.elements = inits.slice()
      this.heapify()
    }
  }

  heapify() {
    // 逐个向上移动元素的方法
    // for (let i = 0; i < this.elements.length; i++) {
    //   this.heapUp(i)
    // }

    // 逐个向下移动元素的方法
    for (let i = (this.elements.length - 2) >> 1; i >= 0; i--) {
      this.heapDown(i)
    }
  }

  // 将 idx 位置的元素向上调整至正确位置
  heapUp(idx) {
    while (idx > 0) {
      let pIdx = Math.floor((idx - 1) / 2)
      if (this.predicate(this.elements[pIdx]) < this.predicate(this.elements[idx])) {
        this._swap(idx, pIdx)
        idx = pIdx //父节点的索引，成为新的子节点的索引
      } else {
        return
      }
    }
  }

  // 将 idx 位置的元素向下调整至正确位置
  heapDown(idx) {
    let length = this.elements.length
    while (idx < length) {
      let maxIdx = idx
      let leftIdx = idx * 2 + 1
      let rightIdx = idx * 2 + 2
      // 在根节点和左、右节点中，找到最大值的索引
      if (leftIdx < length && this.predicate(this.elements[leftIdx]) > this.predicate(this.elements[maxIdx])) {
        maxIdx = leftIdx
      }
      if (rightIdx < length && this.predicate(this.elements[rightIdx]) > this.predicate(this.elements[maxIdx])) {
        maxIdx = rightIdx
      }
      // 如果根节点不是最大值，就需要交换根节点与最大值
      if (maxIdx !== idx) {
        this._swap(maxIdx, idx)
        idx = maxIdx // 最大值节点的索引，成为新的根节点索引
      } else {
        return
      }
    }
  }

  // 向堆中添加一个元素
  push(val) {
    this.elements.push(val) // 首先将元素添加到队列的末尾
    this.heapUp(this.elements.length - 1) // 将这个元素向上移动至正确位置
    return this
  }

  // 将堆顶元素删除并返回
  pop() {
    if (this.size == 0) {
      return undefined
    }
    if (this.size == 1) {
      return this.elements.pop()
    }
    if (this.size) {
      let result = this.elements[0]
      this.elements[0] = this.elements.pop() // 从队列末尾弹出一个元素，作为新的堆顶
      this.heapDown(0) // 将新的堆顶元素，向下移动至正确位置
      return result
    }
  }

  // 查看堆顶元素
  peek() {
    return this.elements[0]
  }

  // 获取堆中元素的个数
  get size() {
    return this.elements.length
  }

  _swap(i, j) {
    let temp = this.elements[i]
    this.elements[i] = this.elements[j]
    this.elements[j] = temp
  }
}
// @lc code=end
