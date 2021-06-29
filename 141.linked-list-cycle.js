/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
//哈希表、快慢指针法
//哈希表，每遇到一个节点，就存入 Set 集合，如果某个节点在 Set 中，说明遇到了环
var hasCycle = function (head) {
  let temp = head
  if (!temp) { //如果链表为空，返回 false
    return false
  }
  let nodeSet = new Set() //建立哈希表，存储遇到过的节点引用
  while (temp.next) { //如果 temp.next 为 null，说明链表中一定没有环，可以退出循环了
    if (nodeSet.has(temp)) { //如果某个节点已经在 Set 中，说明链表中存在环
      return true
    }
    nodeSet.add(temp) //如果节点没在 Set 中，就添加进来
    temp = temp.next // temp 指向下一个节点
  }
  return false
};

//快慢指针法
//快指针每次向前移动两步，慢指针每次向前移动一步，
//如果某一刻快慢指针相遇了，说明链表中存在环
//由于快指针，只领先慢指针一步，因此不会出现错过的情况
var hasCycle = function (head) {
  let temp = head
  //如果链表为空，返回 false，如果快指针、慢指针有一个为 null，返回 false
  //利用逻辑运算的短路特性，如果 temp 为 null，则 !temp 为 1，因此不会再运算 temp.next
  //防止因访问 null 的属性而报错
  if ((!temp) || (!temp.next) || (!temp.next.next)) {
    return false
  }
  let fast = temp.next.next
  let slow = temp.next
  //如果 fast 或者 fast.next 为 null，说明链表中一定没有环，可以退出循环了
  //注意要先判断 fast 是否为 null，防止因访问 null 的属性而报错
  while (fast && fast.next) {
    if (slow === fast) { //如果快慢指针的引用相同，说明链表中存在环
      return true
    }
    fast = fast.next.next //快指针每次移动两步
    slow = slow.next //慢指针每次移动一步
  }
  return false
}
// @lc code=end
