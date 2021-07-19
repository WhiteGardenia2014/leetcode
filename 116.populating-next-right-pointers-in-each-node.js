/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
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

//层序遍历解法，使用节点数组，空间复杂度 O(n)
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
var connect = function (root) {
  if (!root) { //如果没有节点，返回 null
    return null
  }
  let preNode = root
  //每一层节点的连接，由它的上一层节点来操作，因此只需要遍历到倒数第二层
  while (preNode.left) {
    let temp = preNode
    while (temp) { //遍历当前层的所有节点
      temp.left.next = temp.right //连接它的左、右子节点
      if (temp.next) { //如果不是当前层最后一个节点，完成它的右节点的连接
        temp.right.next = temp.next.left
      }
      temp = temp.next //当前层的 temp 节点指针，指向右侧的下一个节点
    }
    preNode = preNode.left // preNode 指针，指向它的左节点
  }
  return root
}


//自顶向下，递归解法，空间复杂度 O(1)
var connect = function (root) {
  if (!root) { //如果没有节点，返回 null
    return null
  }
  dfs(root)
  return root

  //前序遍历所有节点
  function dfs(root) {
    //由于只需要递归到倒数第二层，所以如果当前节点是叶节点，直接返回
    if (!root.left && !root.right) {
      return
    }
    //在每一次递归中，连接 root 中间线上每一层的左右两个节点
    let leftNode = root.left
    let rightNode = root.right
    while (leftNode) {
      leftNode.next = rightNode
      leftNode = leftNode.right
      rightNode = rightNode.left
    }
    //对 root 的左子树和右子树，递归处理
    dfs(root.left)
    dfs(root.right)
  }
}
// @lc code=end
