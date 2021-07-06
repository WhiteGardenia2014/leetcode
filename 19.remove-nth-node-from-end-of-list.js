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


//递归写法
var removeNthFromEnd = function (head, n) {
  let c = 0
  let prehead = new ListNode(0, head)
  remove(prehead, n)
  return prehead.next

  //通过递归函数，首先深入到链表最末端的 null，再逐层返回
  //在逐层返回的过程中，每返回一层给 c 加 1
  //当 c == n + 1 时，说明这一层的 head 指向的是 要移除的节点的 前一个结点，将后面的节点删除即可
  //由于函数的要求是删除一个节点，因此对于递归函数的返回值，只需要考虑在最外层，将 head 返回即可
  function remove(head, n) {
    if (head) {
      remove(head.next, n)
      c++
      if (c == n + 1) {
        head.next = head.next.next
      }
    }
    return head
  }
}
// @lc code=end
