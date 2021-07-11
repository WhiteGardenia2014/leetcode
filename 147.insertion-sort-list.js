/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
var insertionSortList = function (head) {
  if (!head) {
    return null
  }
  let dummyHead = new ListNode(0, head) //创建虚拟头节点
  let tail = head // tail 始终指向排序链表的尾节点
  let current = head.next // current 始终指向等待排序的节点
  while (current) {
    if (current.val >= tail.val) { //如果 current 节点的值更大，那么顺序不变，tail 节点移动一位
      tail = tail.next
    } else { //如果 current 节点的值更小，那么就要从虚拟头开始，寻找要插入的位置
      let pre = dummyHead
      //找到第一个比 current 节点更大的节点，current 需要插入到这个节点前面
      while (pre.next.val <= current.val) {
        pre = pre.next
      }
      //将 tail.next 节点改为 current.next 节点，并把 current 节点放到 pre 节点的后面
      tail.next = current.next
      current.next = pre.next
      pre.next = current

    }
    current = tail.next // current 节点指向下一个待排序的节点
  }
  return dummyHead.next
};
// @lc code=end
