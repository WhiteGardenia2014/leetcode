/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//方法一：遍历两个链表，分别得到其长度，计算长度的差值，
//用两个指针从对齐的位置向后寻找，是否有相交节点
var getIntersectionNode = function (headA, headB) {
  let l1 = getLength(headA);
  let l2 = getLength(headB);
  if (l1 > l2) { //始终让 headB 为更长的链表
    [l1, l2] = [l2, l1];
    [headA, headB] = [headB, headA];
  }

  let count = l2 - l1;
  while (count) { //将两个链表的指针指向对齐的位置
    headB = headB.next;
    count--;
  }
  //从两个链表对齐的位置，开始向后查找，如果有相同的节点，返回这个节点
  //如果两个指针指向了 null，说明没有相同的节点，返回 null
  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};

// 获取链表的长度
function getLength(head) {
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  return length;
}
// @lc code=end
