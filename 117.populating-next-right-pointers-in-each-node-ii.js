/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */


//层序遍历解法，同 116 题，使用节点数组，空间复杂度 O(n)
var connect = function (root) {
  if (!root) { //如果没有节点，返回 null
    return null
  }
  //将 root 节点放入节点数组
  let queue = [root]
  while (queue.length) {
    //记录当前层节点的数量
    let length = queue.length
    let preNode = null
    let node = null

    for (let i = 0; i < length; i++) {
      //每一层取出首个节点，保存为 preNode
      if (i == 0) {
        preNode = queue.shift()
        node = preNode
      } else { //从第二个节点开始，连接 preNode 和 node，并把 preNode 的指针改为 node
        node = queue.shift()
        preNode.next = node
        preNode = node
      }
      //将下一层节点放入节点数组
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
};


//层序遍历解法，不使用节点数组，使用已经建立的 next 指针，空间复杂度 O(1)
//遍历到第 i 层节点时，为第 i+1 层节点建立连接
var connect = function (root) {
  if (!root) { //如果没有节点，返回 null
    return null
  }
  let cur = root
  while (cur) { //外层循环遍历每一层，遍历到第 i 层节点时，为第 i+1 层节点建立连接
    //为方便处理，在第 i+1 层节点前添加一个哑节点
    let dummy = new Node(0)
    let pre = dummy
    while (cur) { //内层循环遍历当前层的节点，注意该层的 next 指针已经由上一层建立好
      if (cur.left) { //如果左节点存在，就连接左节点，pre 指针移动至待连接节点
        pre.next = cur.left
        pre = pre.next
      }
      if (cur.right) { //如果右节点存在，就继续连接右节点，pre 指针再次移动
        pre.next = cur.right
        pre = pre.next
      }
      cur = cur.next // cur 指针改为右侧的节点，遍历当前层
    }
    cur = dummy.next // cur 指针指向下一层的首节点，循环处理下一层
  }
  return root
}
// @lc code=end
