/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var MyLinkedList = function () {
  this.size = 0
  this.head = null
  this.tail = null
};

//额外添加了 getNode 方法，通过索引值获取节点并返回，如果索引值无效，返回 null
/**
 * Get the node of the index-th node in the linked list. If the index is invalid, return null. 
 * @param {number} index
 * @return {ListNode}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.size) {
    return null
  }
  let current = this.head
  while (index > 0) {
    current = current.next
    index--
  }
  return current
};

// get 方法，根据节点的索引值，获取对应节点的 value，如果索引值无效，返回 -1
// 如果索引值无效，返回 -1 的处理并不好，更好的选择是返回 undefined
/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1
  }
  return this.getNode(index).val
};

// 在链表头部添加一个新节点
/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new ListNode(val, this.head) //在头部添加一个新节点，如果链表中没有节点，就创建一个新的节点
  this.head = node // 将 head 指向新的头部节点
  this.size++ //链表大小加 1
  if (!this.tail) { //如果链表中还没有节点，就把 tail 也指向新的节点
    this.tail = node
  }
};

// 在链表尾部添加一个新节点
/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new ListNode(val, null) //创建一个新节点
  this.size++
  if (this.tail) { //如果已经有尾节点，就把新节点添加到尾节点的后面，并把 tail 指向新的尾节点
    this.tail.next = node
    this.tail = node
    return
  } //如果添加的是第一个节点，就把 head 和 tail 都指向 node
  this.tail = node
  this.head = node
};

//在给定的索引节点前面添加一个新节点，如果索引值等于链表长度，就添加在末尾，如果索引值无效，就不添加节点
/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    return
  }
  if (index == 0) {
    this.addAtHead(val)
    return
  }
  if (index == this.size) {
    this.addAtTail(val)
    return
  }
  //获取索引节点的前一个节点，在它后面添加上新节点
  let current = this.getNode(index - 1)
  let node = new ListNode(val, current.next)
  current.next = node
  this.size++
  return
};

//如果索引值有效，就删除索引值处的节点
/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return
  }
  if (this.size == 1) { //如果只有一个节点的情况
    this.head = null
    this.tail = null
    this.size = 0
    return
  }
  if (index == 0) { //处理头节点
    this.head = this.head.next
    this.size--
    return
  }
  //获取目标节点的上一个节点，删除目标节点
  let current = this.getNode(index - 1)
  current.next = current.next.next
  //如果删除的是尾节点，就把 tail 指向倒数第二个节点
  if (index == this.size - 1) {
    this.tail = current
  }
  this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
