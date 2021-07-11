/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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

//归并排序链表
var sortList = function (head) {
  if (!head) { //如果是空链表，返回 null
    return null
  }

  if (head.next == null) { //如果链表只有一个节点，返回这个节点
    return head
  }
  let slow = halfOfList(head) //获取链表中间节点
  let leftList = head //左半链表从 head 开始
  let rightList = slow.next //右半链表从 slow.next 开始
  slow.next = null //注意断开左右链表

  leftList = sortList(leftList) //递归排序左半链表
  rightList = sortList(rightList) //递归排序右半链表

  return mergeTwoLists(leftList, rightList) //合并左右两个有序链表并返回
};


//合并两个有序链表
function mergeTwoLists(l1, l2) {
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
  current.next = l1 || l2 //将剩余的链表，拼接到 current 后
  return ans.next //返回时去掉虚拟头节点
}


//快慢指针法，获取链表的中间节点 
//[1, 2, 3, 4, 5] 返回 3
//[1, 2, 3, 4, 5, 6] 返回 3
function halfOfList(head) {
  if (!head) { //如果是空链表，返回 null
    return null
  }
  let slow = head
  let fast = head
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
// @lc code=end
