/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */

//由于待删除的元素可能为第一个元素，因此可以在头节点前，添加一个虚拟头节点
var removeElements = function (head, val) {
  let temp = new ListNode(0, head) //在 head 节点前，添加一个虚拟头节点
  let current = temp //将虚拟头节点的引用，赋值给 current
  while (current.next) { //如果 current.next 不为 null，就进入循环
    if (current.next.val === val) { //如果 current 的下一个节点需要被删除，就把 current 的节点，指向下下个节点
      current.next = current.next.next
    } else { //否则就将 current 节点指向下一个节点，继续判断下一个节点
      current = current.next
    }
  }
  return temp.next //返回时注意要去掉虚拟头节点
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

let head = {
  val: 2,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 2,
          next: null
        }
      }
    }
  }
}
console.log(removeElements(
  head, 2
));
