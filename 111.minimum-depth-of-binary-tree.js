/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//递归写法
var minDepth = function (root) {
  if (!root) { //如果是空节点，返回 0
    return 0
  }
  if (!root.left && !root.right) { //如果是叶子节点，返回 1
    return 1
  }
  let leftDepth = minDepth(root.left) //获取左子树的最小深度
  let rightDepth = minDepth(root.right) //获取右子树的最小深度

  if (!root.left) { //如果节点只有右子树，返回右子树的最小深度 +1
    return rightDepth + 1
  }
  if (!root.right) { //如果节点只有左子树，返回左子树的最小深度 +1
    return leftDepth + 1
  }
  //如果节点左、右子树都存在，返回两者最小深度的最小值 +1
  return Math.min(leftDepth, rightDepth) + 1
};


//层序遍历迭代写法
var minDepth = function (root) {
  if (!root) {
    return []
  }
  let depth = 0
  let queue = [] //记录每一层节点值的队列
  queue.push(root)
  while (queue.length) {
    let length = queue.length //记录当前层的节点数
    depth++
    for (let i = 0; i < length; i++) {
      let node = queue.shift() //每次从 queue 中取出一个节点
      if (!node.left && !node.right) {
        return depth
      }
      //把当前层的子节点按顺序放入 queue 中
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
}
// @lc code=end
