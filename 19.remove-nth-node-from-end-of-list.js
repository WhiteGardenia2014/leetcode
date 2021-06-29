/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */

//双指针
//如果要删除倒数第 n 个节点，让 fast 指针移动 n 步，然后让 fast 和 slow 同时移动，直到 fast 指向链表末尾。
//此时 slow 就指向了要删除的那个节点，删掉 slow 所指向的节点就可以了。
//可以使用虚拟头节点，避免单独处理第一个节点
var removeNthFromEnd = function (head, n) {
  let temp = new ListNode(0, head) //创建虚拟头节点
  let fast = temp
  let slow = temp
  while (n > 0) { //先让 fast 指针移动 n 步
    fast = fast.next
    n--
  }
  while (fast.next) { //当 fast 指针指向最后一个节点时，slow 指针就指向的待删除节点的前一个节点
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next //删除 slow 指针节点的后面一个节点
  return temp.next
};
// @lc code=end
