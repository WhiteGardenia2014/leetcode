/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
//用两个栈实现队列，需要一个输入栈，一个输出栈
var MyQueue = function () {
  this.inStack = []
  this.outStack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
//要从队列中取出元素时，如果输出栈为空，就把输入栈中的元素，全部转移到输出栈，再执行pop()
//如果输出栈不为空，则直接执行pop()
MyQueue.prototype.pop = function () {
  if (this.outStack.length == 0) {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }
  }
  return this.outStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
// peek 方法可以复用 pop 方法，但是要记得将出栈的元素，再放回去
MyQueue.prototype.peek = function () {
  let ans = this.pop()
  this.outStack.push(ans)
  return ans
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.inStack.length == 0 && this.outStack.length == 0) {
    return true
  }
  return false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
