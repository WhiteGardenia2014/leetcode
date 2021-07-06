/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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

//注意 [1,1,1,1] 这种情况，需要多次判断是否内容相同

var deleteDuplicates = function (head) {
  if (!head) { //如果链表为空，直接返回 null
    return null
  }
  let current = head
  while (current.next) { //如果检查到了最后一个元素，就退出循环
    if (current.val == current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
};

//递归写法
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }
  if (head.val == head.next.val) {
    return deleteDuplicates(head.next)
  } else {
    head.next = deleteDuplicates(head.next)
    return head
  }
}
// @lc code=end
