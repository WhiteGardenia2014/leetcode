/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//双指针
//将每一个节点的 next 指向前一个节点，即可实现链表反转
var reverseList = function (head) {
  //如果 head 是空链表，或者 head 只有一个节点，直接返回 head
  //要注意，如果 head 是 null，是不能访问 next 属性的
  //也可以使用 ?. 可选链 来访问 null 的属性
  //如写成 !(head?.next) 或 head?.next === undefined
  if ((!head) || !(head.next)) {
    return head
  }
  let pre = null //指向前一个节点的指针
  let current = head //指向当前节点的指针
  let temp = null //指向下一个节点的指针

  while (current) { //不断将每一个节点的 next 指向前一个节点
    temp = current.next
    current.next = pre
    pre = current
    current = temp
  } //循环结束后，current 和 temp 都指向 null，pre指向最后一个节点，也就是新的 head 节点
  return pre
};

//递归实现反转链表
var reverseList = function (head) {
  return reverse(null, head)
}

function reverse(pre, current) {
  if (!current) {
    return pre
  }
  let temp = current.next
  current.next = pre
  pre = current
  return reverse(pre, temp)
}


//另一种递归的写法
//先深入到链表的末尾，找到链表的新头节点，并通过递归传递回来
//在递归返回的过程中，不断翻转其中链表节点的指向
//最终返回了链表的新头节点，并将链表的指向翻转了
var reverseList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let tail = head.next
  head.next = null
  let newHead = reverseList(tail)
  tail.next = head
  return newHead
}

// @lc code=end


let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 55,
      next: null
    }
  }
}
console.log(reverseList(
  head
));
