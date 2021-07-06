/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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

//迭代解法
var mergeTwoLists = function (l1, l2) {
  let ans = new ListNode(0) //创建虚拟头节点
  let current = ans
  while (l1 && l2) { //当 l1 和 l2 都不为 null 时进入循环
    if (l1.val < l2.val) { //如果 l1 更小，就把 l1 添加到结果链表中，l1 和 current 指针均移动一位
      current.next = l1
      l1 = l1.next
    } else { //如果 l2 更小，就把 l2 添加到结果链表中，l2 和 current 指针均移动一位
      current.next = l2
      l2 = l2.next
    }
    current = current.next
  };
  // current.next = l1 || l2
  if (l1) { //如果 l1 不为空，就将 l1 剩余部分添加到结果链表中
    current.next = l1
  } else {
    current.next = l2
  }
  return ans.next //返回时去掉虚拟头节点
}

//递归解法
//递归函数，比较两个链表头部哪个更小，
//取出当前最小节点，并使当前最小节点指向剩余部分的最小节点，最后返回当前最小节点
//对于剩余部分的最小节点，求取方法由递归给出
var mergeTwoLists = function (l1, l2) {
  // if (!l1 || !l2) {
  //   return l1 || l2
  // }
  if (!l1) { //如果 l1 为 null，直接返回 l2
    return l2
  } //如果 l2 为 null，直接返回 l1
  if (!l2) {
    return l1
  }
  if (l1.val < l2.val) { //如果 l1 的头节点更小，就让 l1 的头节点指向剩余部分的最小节点，注意最后要返回这个节点
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}
// @lc code=end
