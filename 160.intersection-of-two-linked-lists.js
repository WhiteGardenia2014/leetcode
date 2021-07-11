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


//方法二：Set 集合
var getIntersectionNode = function (headA, headB) {
  let mySet = new Set()
  while (headA) { //遍历 A 链表，把 A 链表中的节点放入 Set 集合
    mySet.add(headA)
    headA = headA.next
  }
  while (headB) { //遍历 B 链表，检查 B 链表的节点是否在 Set 集合中存在
    if (mySet.has(headB)) { //如果存在，说明找到了相交节点，返回这个节点
      return headB
    }
    headB = headB.next
  }
  return null //如果没有相交节点，返回 null
}


//方法三：使用 A,B 两个指针，分别沿着 A,B 链表前进，
//如果 A 指针指向了 A 链表的末尾，就从 B 链表的头部重新开始
//如果 B 指针指向了 B 链表的末尾，就从 A 链表的头部重新开始
//如果 A，B 存在相交节点，那么两个指针在第二次前进时一定会找到相交节点
//如果 A，B 不存在相交节点，那么两个指针一定会最终都指向 null
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let nodeA = headA
  let nodeB = headB
  while (nodeA || nodeB) {
    if (nodeA === nodeB) {
      return nodeA
    }
    nodeA = nodeA === null ? headB : nodeA.next //如果 A 指针指向了 A 链表的末尾，就从 B 链表的头部重新开始
    nodeB = nodeB === null ? headA : nodeB.next //如果 B 指针指向了 B 链表的末尾，就从 A 链表的头部重新开始
  }
  return null
}


//方法四：方法三的递归写法
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  return findNode(headA, headB)

  function findNode(nodeA, nodeB) {
    if (nodeA === nodeB) {
      return nodeA
    }
    if (nodeA === null) {
      return findNode(headB, nodeB.next)
    }
    if (nodeB === null) {
      return findNode(nodeA.next, headA)
    }
    return findNode(nodeA.next, nodeB.next)
  }
}
// @lc code=end
