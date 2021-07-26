/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//单调队列
var maxSlidingWindow = function (nums, k) {
  let mq = new monotonousQueue()
  let ans = []
  // 首先将前 k 个元素放入优先队列中
  for (let j = 0; j < k; j++) {
    mq.push(nums[j])
  }
  ans.push(mq.front()) //获取初始滑动窗口的最大值

  //从第 k+1 个元素开始，首先弹出窗口左边的元素，再把窗口右边的元素添加进来
  //每完成一次窗口滑动，就返回窗口内的最大值
  for (let i = k; i < nums.length; i++) {
    mq.shift(nums[i - k])
    mq.push(nums[i])
    ans.push(mq.front())
  }
  return ans
};

//单调队列，其内部的元素始终是单调的（本题中为单调递减）
class monotonousQueue {
  constructor() {
    this.elements = []
  }

  // 向单调队列中添加一个元素
  push(val) {
    // 如果单调队列的末项 < val，就弹出末项，直到末项 >= val，再添加 val
    while ((this.elements[this.elements.length - 1] != undefined) && this.elements[this.elements.length - 1] < val) {
      this.elements.pop()
    }
    this.elements.push(val)
    return this
  }

  // 从单调队列中弹出一个元素
  shift(val) {
    // 如果要弹出的元素的值 = 首项，才弹出首项
    if (this.elements[0] == val) {
      this.elements.shift()
    }
  }

  // 获取单调队列中最大的元素，即首项
  front() {
    return this.elements[0]
  }
}


var maxSlidingWindow = function (nums, k) {
  let queue = []
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    // 若队列不为空，且当前元素大于等于队尾所存下标的元素，则弹出队尾
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop()
    }
    // 入队当前元素下标
    queue.push(i)
    // 弹出不在滑动窗口中的元素
    while (queue[0] <= i - k) {
      queue.shift()
    }
    // 到达滑动窗口长度后，开始向结果中添加数据
    if (i >= k - 1) {
      ans.push(nums[queue[0]])
    }
  }
  return ans
}
// @lc code=end
