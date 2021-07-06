/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head.next) { //如果只有一个节点，直接返回 head
    return head
  }

  let prehead = new ListNode(0, head) //创建虚拟头节点
  let index = 0
  let current = prehead
  while (index < left - 1) { //找到 left 节点的前一个节点
    current = current.next
    index++
  }
  //用 leftNode 节点记录下 left 节点的前一个节点，最后要把它指向 翻转后的新头节点 right
  let leftNode = current
  current = current.next //将 current 节点指向 left 节点
  index++
  // 翻转数组步骤与 206 题相同
  let pre = null
  let cur = current
  let temp = null
  while (index <= right) {
    temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
    index++
  }
  // 翻转数组结束后，pre 指向 right 节点，cur 指向 right 后面的节点，或者是 null
  current.next = cur // 让 left 节点指向 cur
  leftNode.next = pre // 让 leftNode 指向翻转后的新头节点 right

  return prehead.next //最后去掉虚拟头节点
};
// @lc code=end
