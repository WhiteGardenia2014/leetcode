/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 415 题，字符串相加的链表版本，注意在链表中要处理 null 的特殊情况
var addTwoNumbers = function (l1, l2) {
  let head = null
  let current = null
  let c = 0
  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0 //如果 l1 不为 null，就取值，否则置为 0
    let n2 = l2 ? l2.val : 0 // l2 同理
    let s = n1 + n2 + c
    let z = s % 10
    c = (s - z) / 10

    if (!head) { //如果是第一个节点，就创建头节点
      head = new ListNode(z)
      current = head
    } else { //如果不是第一个节点，就创建一个节点添加到链表后，并将指针指向这个节点
      current.next = new ListNode(z)
      current = current.next
    }
    if (l1) { //如果 l1 不为 null，就指向 l1 的下一位，如果 l1 当前已经为 null，那么以后都将被置为 0
      l1 = l1.next
    }
    if (l2) { // l2 同理
      l2 = l2.next
    }
  }
  if (c) { //如果最后还有进位，就在链表末尾添加一个 进位节点
    current.next = new ListNode(1)
  }
  return head
};
// @lc code=end
