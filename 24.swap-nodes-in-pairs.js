/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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

//每两个节点为一组，修改节点之间，以及节点对后方节点的指向
//使用虚拟头节点，避免单独处理头节点
var swapPairs = function (head) {
  let temp = new ListNode(0, head) //创建虚拟头节点
  let before = temp
  while (before.next && before.next.next) {
    let pre = before.next
    let cur = before.next.next
    pre.next = cur.next
    cur.next = pre
    before.next = cur
    before = pre
  }
  return temp.next
};


//递归写法
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }
  let tail = head.next
  head.next = swapPairs(tail.next)
  tail.next = head
  return tail
}
// @lc code=end
