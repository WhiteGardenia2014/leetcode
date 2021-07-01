/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
//用一个队列实现栈
var MyStack = function () {
  this.queue = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
//当要从栈中取出一个元素时，这个元素在队列的末尾
//因此需要循环队列 (长度 - 1) 次，此时需要取出的元素就在队列的开头，使用 shift() 方法取出
MyStack.prototype.pop = function () {
  let len = this.queue.length
  while (len > 1) {
    this.queue.push(this.queue.shift())
    len--
  }
  return this.queue.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
// top 方法复用了 pop 方法，但取出元素后，需要把元素重新放回到队列的末尾
// top 方法并不会改变栈的状态，也同理不应该改变队列中的状态，这样每次 pop() 的处理是相同的
MyStack.prototype.top = function () {
  let ans = this.pop()
  this.queue.push(ans)
  return ans
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length == 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
