/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
 * @param {ListNode} head
 * @return {ListNode}
 */

//哈希表、快慢指针法
//哈希表，每遇到一个节点，就存入 Set 集合，如果某个节点在 Set 中，说明遇到了环，这个节点就是环的入口
var detectCycle = function (head) {
  let temp = head
  if (!temp) { //如果链表为空，返回 null
    return null
  }
  let nodeSet = new Set() //建立哈希表，存储遇到过的节点引用
  while (temp.next) { //如果 temp.next 为 null，说明链表中一定没有环，可以退出循环了
    if (nodeSet.has(temp)) { //如果某个节点已经在 Set 中，说明链表中存在环
      return temp //这个节点就是环的入口，返回这个节点
    }
    nodeSet.add(temp) //如果节点没在 Set 中，就添加进来
    temp = temp.next // temp 指向下一个节点
  }
  return null
};

//快慢指针法
//快指针每次向前移动两步，慢指针每次向前移动一步，
//如果某一刻快慢指针相遇了，说明链表中存在环
//由于快指针，只领先慢指针一步，因此不会出现错过的情况

//如果链表中存在环，可以通过数学规律推导出环的入口
//将一个指针指向链表头，一个指针指向快慢指针相遇的位置
//两个指针依次前进，它们相遇的位置就是环的入口
var detectCycle = function (head) {
  let temp = head
  //如果链表为空，返回 false，如果快指针、慢指针有一个为 null，返回 null
  //利用逻辑运算的短路特性，如果 temp 为 null，则 !temp 为 1，因此不会再运算 temp.next
  //防止因访问 null 的属性而报错
  if ((!temp) || (!temp.next) || (!temp.next.next)) {
    return null
  }
  let fast = temp.next.next
  let slow = temp.next
  //如果 fast 或者 fast.next 为 null，说明链表中一定没有环，可以退出循环了
  //注意要先判断 fast 是否为 null，防止因访问 null 的属性而报错
  while (fast && fast.next) {
    if (slow === fast) { //如果快慢指针的引用相同，说明链表中存在环
      slow = head //将 slow 指向链表头，此时 fast 指向相遇的位置
      while (slow !== fast) { // slow 和 fast 指针依次前进，相遇的位置就是环的入口
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
    fast = fast.next.next //快指针每次移动两步
    slow = slow.next //慢指针每次移动一步
  }
  return null
}


// @lc code=end
