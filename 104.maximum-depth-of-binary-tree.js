/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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

//递归写法、后序遍历
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  let leftDepth = maxDepth(root.left) //获取左子树的最大深度
  let rightDepth = maxDepth(root.right) //获取右子树的最大深度
  return Math.max(leftDepth, rightDepth) + 1 //返回左、右子树最大深度的最大值 + 1
};


//层序遍历迭代写法
var maxDepth = function (root) {
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
      //把当前层的子节点按顺序放入 queue 中
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return depth
}
// @lc code=end
