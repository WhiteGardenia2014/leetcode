/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */

//快慢指针法，通过快慢指针，找到链表的中间节点，将链表分为前半部分和后半部分
//翻转链表的后半部分，使用两个指针分别指向，前半部分的开头、和后半部分的开头
//依次比较两部分的节点值是否一一相等，如果不相等，说明不是回文链表
//最好在判断完是否是回文链表后，将链表的后半部分再次翻转，恢复原来的状态
var isPalindrome = function (head) {
  if (!head.next) { //如果链表只有一个节点，一定是回文链表
    return head
  }
  let halfList = halfOfList(head) //获取链表的中间节点
  halfList.next = reverseList(halfList.next) //翻转链表的后半部分
  let left = head
  let right = halfList.next

  let result = true
  while (right) { //依次比较前半部分和后半部分的节点值
    if (left.val !== right.val) { //如果不匹配，说明不是回文链表，可以退出循环
      result = false
      break
    }
    left = left.next
    right = right.next
  }

  halfList.next = reverseList(halfList.next) //最好在判断之后，将链表恢复为原来的状态
  return result
};

//快慢指针法，获取链表的中间节点 
//[1, 2, 3, 4, 5] 返回 3
//[1, 2, 3, 4, 5, 6] 返回 3
function halfOfList(head) {
  let slow = head
  let fast = head
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

//翻转数组
function reverseList(head) {
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
}
// @lc code=end
